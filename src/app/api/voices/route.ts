import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY?.trim();

    console.log("Fetching ElevenLabs with Key Length:", ELEVENLABS_API_KEY?.length);

    if (!ELEVENLABS_API_KEY) {
        return NextResponse.json({ error: 'ElevenLabs API key missing from .env.local' }, { status: 500 });
    }

    try {
        const res = await fetch('https://api.elevenlabs.io/v1/voices', {
            headers: {
                'xi-api-key': ELEVENLABS_API_KEY
            }
        });

        if (!res.ok) {
            const errText = await res.text();
            throw new Error(`ElevenLabs API returned ${res.status}: ${errText}`);
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching ElevenLabs voices:", error);
        return NextResponse.json({ error: 'Failed to fetch voices' }, { status: 500 });
    }
}
