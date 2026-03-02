'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type KnowledgeData = {
    specials: string;
    menu: string;
    knowledgebase: string;
    voiceEnabled: boolean;
    elevenLabsVoiceId: string;
};

export default function AdminPage() {
    const [data, setData] = useState<KnowledgeData>({
        specials: '',
        menu: '',
        knowledgebase: '',
        voiceEnabled: true,
        elevenLabsVoiceId: 'fGT7Mus3w81KxMRpFtGh' // Default to Paulina
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [availableVoices, setAvailableVoices] = useState<any[]>([]);

    useEffect(() => {
        // Fetch knowledge
        fetch('/api/knowledge')
            .then(res => res.json())
            .then((json) => {
                if (!json.error) {
                    setData(json);
                }
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to load knowledge", err);
                setIsLoading(false);
            });

        // Fetch user's ElevenLabs voices
        fetch('/api/voices')
            .then(res => res.json())
            .then((json) => {
                if (json.voices) {
                    setAvailableVoices(json.voices);
                }
            })
            .catch(console.error);
    }, []);

    const handleSave = async () => {
        setIsSaving(true);
        setMessage('');
        try {
            const res = await fetch('/api/knowledge', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                setMessage('Successfully saved! The AI Voice Assistant is now updated.');
            } else {
                setMessage('Failed to save data.');
            }
        } catch (err) {
            setMessage('Error saving data.');
        }
        setIsSaving(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
        const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleTestVoice = async () => {
        if (!data.voiceEnabled) return;

        setIsSaving(true);
        setMessage("Generating audio demo...");
        try {
            const res = await fetch('/api/assistant', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: "Hi there! I am your AI assistant, powered by ElevenLabs Audio.",
                    history: []
                })
            });
            const result = await res.json();
            if (result.audioBase64) {
                const audio = new Audio(`data:audio/mp3;base64,${result.audioBase64}`);
                audio.play();
                setMessage("Playing audio demo.");
            } else {
                setMessage("Failed to generate audio demo. Check API Key.");
            }
        } catch (e) {
            setMessage("Error connecting to Gemini API.");
        }
        setIsSaving(false);
    };

    if (isLoading) return <div className="p-8 text-white min-h-screen pt-24">Loading Admin...</div>;

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-orange-500">AI Brain Admin</h1>
                <p className="mb-8 text-gray-400">Update these fields to instantly change what the AI Voice Assistant knows.</p>

                {message && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-md mb-6 ${message.includes('Error') || message.includes('Failed') ? 'bg-red-900/50 text-red-200' : 'bg-green-900/50 text-green-200'}`}
                    >
                        {message}
                    </motion.div>
                )}

                <div className="space-y-8">
                    <div>
                        <label className="block text-xl font-semibold text-white mb-2">Today's Specials</label>
                        <p className="text-sm text-gray-400 mb-2">The AI will proactively announce this when a user opens the assistant.</p>
                        <textarea
                            name="specials"
                            value={data.specials}
                            onChange={handleChange}
                            rows={3}
                            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-xl font-semibold text-white mb-2">Menu Information</label>
                        <p className="text-sm text-gray-400 mb-2">The complete menu for the AI to answer questions and take orders from.</p>
                        <textarea
                            name="menu"
                            value={data.menu}
                            onChange={handleChange}
                            rows={15}
                            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-orange-500 outline-none font-mono text-sm leading-relaxed"
                        />
                    </div>

                    <div>
                        <label className="block text-xl font-semibold text-white mb-2">General Knowledgebase</label>
                        <p className="text-sm text-gray-400 mb-2">Business hours, location, FAQ answers, policies, etc.</p>
                        <textarea
                            name="knowledgebase"
                            value={data.knowledgebase}
                            onChange={handleChange}
                            rows={8}
                            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-orange-500 outline-none font-mono text-sm leading-relaxed"
                        />
                    </div>

                    <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <label className="block text-xl font-semibold text-white mb-1">Enable AI Voice Assistant</label>
                                <p className="text-sm text-gray-400">Turn the floating voice assistant widget on or off globally.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="voiceEnabled"
                                    checked={data.voiceEnabled}
                                    onChange={handleChange}
                                    className="sr-only peer"
                                />
                                <div className="w-14 h-7 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-orange-500"></div>
                            </label>
                        </div>

                        {data.voiceEnabled && (
                            <div className="pt-6 border-t border-neutral-800">
                                <label className="block text-xl font-semibold text-white mb-2">ElevenLabs Voice Profile</label>
                                <p className="text-sm text-gray-400 mb-4">Select from your available ElevenLabs voices. <span className="text-orange-400">Custom cloned voices linked to your API key will appear here.</span></p>

                                <div className="flex gap-4 items-center">
                                    <select
                                        name="elevenLabsVoiceId"
                                        value={data.elevenLabsVoiceId}
                                        onChange={handleChange}
                                        className="flex-1 bg-black border border-neutral-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-orange-500 outline-none"
                                    >
                                        {availableVoices.length > 0 ? (
                                            availableVoices.map(voice => (
                                                <option key={voice.voice_id} value={voice.voice_id}>
                                                    {voice.name}
                                                </option>
                                            ))
                                        ) : (
                                            <option value={data.elevenLabsVoiceId}>Loading Voices...</option>
                                        )}
                                    </select>

                                    <button
                                        onClick={handleTestVoice}
                                        type="button"
                                        disabled={isSaving}
                                        className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 disabled:opacity-50 rounded-lg text-white font-medium transition-colors whitespace-nowrap"
                                    >
                                        Hear Sample
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-colors disabled:opacity-50"
                    >
                        {isSaving ? 'Saving to Brain...' : 'Update AI Knowledgebase'}
                    </button>
                </div>
            </div>
        </div>
    );
}
