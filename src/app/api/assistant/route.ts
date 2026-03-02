import { NextResponse } from 'next/server';
import { GoogleGenAI, Type, Schema } from '@google/genai';
import fs from 'fs';
import path from 'path';

// We will initialize GenAI inside the POST handler to avoid build-time errors if the API key is not set.

const getKnowledgeFilePath = () => {
    return path.join(process.cwd(), 'src', 'data', 'knowledge.json');
};

const getLocalData = () => {
    try {
        const filePath = getKnowledgeFilePath();
        if (!fs.existsSync(filePath)) return null;
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
        return null;
    }
};

// Define tools (Simulated Functions)
const processPaymentDeclaration = {
    name: 'process_payment',
    description: 'Process a simulated credit card payment for an order total.',
    parameters: {
        type: Type.OBJECT,
        properties: {
            total_amount: { type: Type.NUMBER, description: 'The total dollar amount to charge.' }
        },
        required: ['total_amount']
    }
};

const sendTextNotificationDeclaration = {
    name: 'send_text_notification',
    description: 'Send a simulated SMS text message acknowledging an order.',
    parameters: {
        type: Type.OBJECT,
        properties: {
            phone_number: { type: Type.STRING, description: 'The 10-digit phone number.' },
            message: { type: Type.STRING, description: 'The message body.' }
        },
        required: ['phone_number', 'message']
    }
};


export async function POST(request: Request) {
    try {
        const { message, history } = await request.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({
                role: 'model',
                text: 'Error: The GEMINI_API_KEY environment variable is not set. Please add it to your .env.local file to use the Voice Assistant.'
            }, { status: 500 });
        }

        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        // Retrieve the latest dynamic data
        const data = getLocalData() || {
            specials: "No current specials.",
            menu: "Menu is unavailable.",
            knowledgebase: "General info unavailable.",
            voiceEnabled: true,
            elevenLabsVoiceId: "21m00Tcm4TlvDq8ikWAM"
        };

        if (!data.voiceEnabled) {
            return NextResponse.json({
                role: 'model',
                text: "The Voice Assistant is currently disabled by the administrator.",
                audioBase64: null
            });
        }

        const systemInstruction = `
      You are the friendly, energetic AI Voice Assistant for Project Suya, a premium Afro-Urban restaurant in Bowie, MD.
      You help customers by answering questions about the restaurant, reading the menu, and taking their food orders.
      
      CRITICAL INSTRUCTIONS:
      1. Conversational Style: Keep your responses CONCISE. You will be spoken aloud via Text-to-Speech, so do NOT use markdown, long lists, or complex formatting. Speak naturally.
      2. Greeting: If the user says hello or the history is empty, enthusiastically greet them and mention the TODAY'S SPECIALS.
      3. Order Taking: If they want to order, confirm their items and calculate the total price based on the MENU. Ask for their phone number.
      4. Taking Payment: Once they confirm the total, USE THE process_payment TOOL to simulate charging them.
      5. Notifications: After payment, USE THE send_text_notification TOOL to simulate sending them an SMS receipt.

      KNOWLEDGEBASE DATA:
      [TODAY'S SPECIALS]
      ${data.specials}
      
      [MENU]
      ${data.menu}
      
      [STORE INFO]
      ${data.knowledgebase}
    `;

        // Map the incoming client history to Google GenAI chat history format
        const chatHistory = (history || []).map((msg: any) => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));

        // Add the current message
        chatHistory.push({ role: 'user', parts: [{ text: message }] });

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: chatHistory,
            config: {
                systemInstruction: systemInstruction,
                tools: [{
                    functionDeclarations: [processPaymentDeclaration, sendTextNotificationDeclaration]
                }],
                temperature: 0.7,
            }
        });

        // Check if the model decided to call a function
        const functionCalls = response.functionCalls;
        let finalModelResponse = response.text;

        // For this POC, if it calls a function, we'll manually simulate the result and append it to the response stream rather than doing a full multi-turn back-and-forth for the tool execution.
        if (functionCalls && functionCalls.length > 0) {
            let functionTextOutputs = [];
            for (const call of functionCalls) {
                if (call.name === 'process_payment') {
                    const args = call.args as unknown as { total_amount: number };
                    functionTextOutputs.push(`[SYSTEM ACTION: Successfully simulated charging $${args.total_amount}]`);
                } else if (call.name === 'send_text_notification') {
                    const args = call.args as unknown as { phone_number: string, message: string };
                    functionTextOutputs.push(`[SYSTEM ACTION: Sent SMS to ${args.phone_number}: "${args.message}"]`);
                }
            }

            if (!finalModelResponse) {
                // Provide a default response if the model only returned a function call
                finalModelResponse = "I have processed that request for you!";
            }

            // Append the fake system responses to the text so the user knows the tool was "called"
            finalModelResponse = finalModelResponse + " " + functionTextOutputs.join(" ");
        }


        // Generate Audio with ElevenLabs
        let audioBase64 = null;
        if (finalModelResponse && process.env.ELEVENLABS_API_KEY) {
            try {
                // Remove system action tags from the text before speaking
                const textToSpeak = finalModelResponse.replace(/\[SYSTEM ACTION:[^\]]+\]/g, '').trim();

                if (textToSpeak.length > 0) {
                    const voiceId = data.elevenLabsVoiceId || '21m00Tcm4TlvDq8ikWAM';
                    const elRes = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'xi-api-key': process.env.ELEVENLABS_API_KEY.trim()
                        },
                        body: JSON.stringify({
                            text: textToSpeak,
                            model_id: "eleven_multilingual_v2",
                            voice_settings: {
                                stability: 0.5,
                                similarity_boost: 0.75
                            }
                        })
                    });

                    if (elRes.ok) {
                        const arrayBuffer = await elRes.arrayBuffer();
                        const buffer = Buffer.from(arrayBuffer);
                        audioBase64 = buffer.toString('base64');
                    } else {
                        console.error('ElevenLabs API error:', elRes.status, await elRes.text());
                    }
                }
            } catch (err) {
                console.error('Failed to parse ElevenLabs audio:', err);
            }
        }

        return NextResponse.json({
            role: 'model',
            text: finalModelResponse || "I didn't quite catch that.",
            audioBase64: audioBase64
        });

    } catch (error: any) {
        console.error('Error generating AI response:', error);
        return NextResponse.json({ error: error.message || 'Failed to process voice request' }, { status: 500 });
    }
}
