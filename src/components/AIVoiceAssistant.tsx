'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, X, MessageSquare, Loader2, Volume2, VolumeX } from 'lucide-react';

type Message = { role: 'user' | 'model', text: string, audioBase64?: string };

export default function AIVoiceAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isThinking, setIsThinking] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [transcript, setTranscript] = useState('');
    const [finalTranscript, setFinalTranscript] = useState('');
    const [errorText, setErrorText] = useState('');
    const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);

    const recognitionRef = useRef<any>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const transcriptRef = useRef('');
    const [isMounted, setIsMounted] = useState(false);

    // Fetch initial config to see if we should render at all
    useEffect(() => {
        setIsMounted(true);
        fetch('/api/knowledge')
            .then(res => res.json())
            .then(data => {
                if (data && data.voiceEnabled !== undefined) {
                    setIsVoiceEnabled(data.voiceEnabled);
                }
            })
            .catch(console.error);
    }, []);

    // Auto-scroll chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isThinking, transcript]);

    // Setup Speech Recognition and Synthesis
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.continuous = true; // Keep listening until explicitly stopped or handled
                recognition.interimResults = true;
                recognition.lang = 'en-US';

                recognition.onresult = (event: any) => {
                    let currentTranscript = '';
                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        currentTranscript += event.results[i][0].transcript;
                    }
                    setTranscript(currentTranscript);
                    transcriptRef.current = currentTranscript;
                };

                recognition.onend = () => {
                    if (transcriptRef.current.trim().length > 0) {
                        setFinalTranscript(transcriptRef.current);
                        transcriptRef.current = '';
                        setTranscript('');
                    }
                    setIsListening(false);
                };

                recognition.onerror = (event: any) => {
                    console.error("Speech recognition error", event.error);
                    setIsListening(false);
                    setTranscript('');
                    transcriptRef.current = '';
                };

                recognitionRef.current = recognition;
            } else {
                setErrorText("Speech Recognition is not supported in this browser. Please try Chrome.");
            }
        }
    }, []);

    // Handle completed speech transcript to avoid stale closures
    useEffect(() => {
        if (finalTranscript.trim().length > 0) {
            handleSendMessage(finalTranscript);
            setFinalTranscript('');
        }
    }, [finalTranscript]);

    // Trigger greeting on first open
    useEffect(() => {
        if (isOpen && messages.length === 0 && !errorText) {
            handleSendMessage("Hello!"); // Invisible trigger to start the conversation
        }
    }, [isOpen]);

    // Listen for custom events to open the assistant (e.g., from Navbar)
    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('openAIVoice', handleOpen);
        return () => window.removeEventListener('openAIVoice', handleOpen);
    }, []);

    const toggleListen = () => {
        if (isListening) {
            recognitionRef.current?.stop();
        } else {
            if (audioRef.current) {
                audioRef.current.pause(); // Stop talking if we want to listen
                setIsSpeaking(false);
            }
            setTranscript('');
            recognitionRef.current?.start();
            setIsListening(true);
        }
    };

    const handleSendMessage = async (text: string) => {
        const newMessage = { role: 'user' as const, text };

        // If it's the initial auto-greeting prompt, don't show it in the UI as a user message
        if (text !== "Hello!" || messages.length > 0) {
            setMessages(prev => [...prev, newMessage]);
        }

        setIsThinking(true);

        try {
            const res = await fetch('/api/assistant', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text, history: messages })
            });

            const data = await res.json();

            if (data.error) {
                setErrorText(data.error);
                setIsThinking(false);
                setIsListening(false); // Ensure mic is off when error occurs
                if (recognitionRef.current) recognitionRef.current.stop();
                return;
            }

            setMessages(prev => [...prev, { role: 'model', text: data.text, audioBase64: data.audioBase64 }]);

            // Turn off microphone after we send a message to allow the AI to speak
            setIsListening(false);
            if (recognitionRef.current) recognitionRef.current.stop();

            if (data.audioBase64) {
                playAudioBase64(data.audioBase64);
            }

        } catch (err) {
            console.error(err);
            setErrorText("Connection to AI brain failed.");
        } finally {
            setIsThinking(false);
        }
    };

    const playAudioBase64 = (base64: string) => {
        if (audioRef.current) {
            audioRef.current.pause();
        }

        const audio = new Audio(`data:audio/mp3;base64,${base64}`);
        audioRef.current = audio;

        audio.onplay = () => setIsSpeaking(true);
        audio.onended = () => setIsSpeaking(false);
        audio.onerror = () => setIsSpeaking(false);

        audio.play().catch(console.error);
    };

    const toggleTalking = () => {
        if (isSpeaking && audioRef.current) {
            audioRef.current.pause();
            setIsSpeaking(false);
        }
    };

    if (!isMounted || !isVoiceEnabled) return null;

    return (
        <>
            {/* Floating Action Button */}
            <motion.div
                className="fixed bottom-[15vh] right-6 sm:bottom-6 sm:right-6 z-[2147483647]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex items-center justify-center p-4 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'bg-neutral-800 text-white hover:bg-neutral-700' : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]'}`}
                >
                    {isOpen ? <X size={28} /> : (
                        <div className="relative">
                            <Mic size={28} />
                            <motion.span
                                className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            />
                        </div>
                    )}
                </button>
            </motion.div>

            {/* Assistant Modal/Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                        className="fixed bottom-0 right-0 w-full h-[85vh] sm:bottom-24 sm:right-6 sm:w-[400px] sm:h-[550px] bg-neutral-900 border border-neutral-800 rounded-t-3xl sm:rounded-2xl shadow-3xl z-40 flex flex-col overflow-hidden backdrop-blur-xl bg-opacity-95"
                    >
                        {/* Header */}
                        <div className="p-4 bg-black/50 border-b border-neutral-800 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-lg">
                                    <MessageSquare size={18} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white leading-tight">Suya Assistant</h3>
                                    <p className="text-xs text-orange-400 font-medium tracking-wide">AI Powered by Gemini</p>
                                </div>
                            </div>
                            {isSpeaking && (
                                <button onClick={toggleTalking} className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors" title="Mute AI">
                                    <VolumeX size={18} />
                                </button>
                            )}
                        </div>

                        {/* Chat History */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
                            {errorText && (
                                <div className="p-3 bg-red-900/50 text-red-200 text-sm rounded-lg border border-red-800/50">
                                    {errorText}
                                </div>
                            )}

                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                        ? 'bg-orange-600 text-white rounded-tr-sm'
                                        : 'bg-neutral-800 text-neutral-100 rounded-tl-sm border border-neutral-700'
                                        }`}>
                                        {/* Render tool simulation blocks distinctively if present */}
                                        {msg.role === 'model' ? (
                                            msg.text.split(/(\[SYSTEM ACTION:[^\]]+\])/g).map((part, i) => {
                                                if (part.startsWith('[SYSTEM ACTION:')) {
                                                    return <div key={i} className="mt-2 mb-1 p-2 bg-green-900/40 border border-green-800/50 text-green-300 text-xs rounded-md font-mono flex items-center gap-2">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></div>
                                                        {part.replace('[SYSTEM ACTION: ', '').replace(']', '')}
                                                    </div>;
                                                }
                                                return <span key={i}>{part}</span>;
                                            })
                                        ) : (
                                            msg.text
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {isThinking && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-neutral-800 rounded-2xl rounded-tl-sm p-4 w-16 flex items-center justify-center gap-1 border border-neutral-700">
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                    </div>
                                </motion.div>
                            )}

                            {transcript && (
                                <div className="flex justify-end opacity-70">
                                    <div className="max-w-[85%] p-3 rounded-2xl text-sm bg-orange-600 text-white rounded-tr-sm italic">
                                        {transcript}
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex flex-col gap-3">
                            <div className="flex justify-center">
                                <button
                                    onClick={toggleListen}
                                    disabled={isThinking || !!errorText}
                                    className={`relative flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 disabled:opacity-50 ${isListening
                                        ? 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                                        : 'bg-neutral-800 hover:bg-neutral-700 border border-neutral-700'
                                        }`}
                                >
                                    {isListening && (
                                        <motion.div
                                            className="absolute inset-0 bg-red-400 rounded-full -z-10"
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                        />
                                    )}
                                    {isThinking ? (
                                        <Loader2 className="animate-spin text-orange-500" size={24} />
                                    ) : (
                                        <Mic className={isListening ? 'text-white' : 'text-orange-500'} size={24} />
                                    )}
                                </button>
                            </div>
                            <div className="text-center">
                                <p className="text-xs font-medium tracking-wide text-gray-500">
                                    {isListening ? 'Listening... Tap to stop.' : (isThinking ? 'Thinking...' : 'Tap mic to speak')}
                                </p>
                            </div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
