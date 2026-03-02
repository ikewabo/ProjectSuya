import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Need to safely resolve path based on environment
const getKnowledgeFilePath = () => {
    return path.join(process.cwd(), 'src', 'data', 'knowledge.json');
};

export async function GET() {
    try {
        const filePath = getKnowledgeFilePath();
        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ specials: "", menu: "", knowledgebase: "" }, { status: 404 });
        }
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error reading knowledgebase:', error);
        return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const filePath = getKnowledgeFilePath();

        // Validate we're writing a proper object
        if (!body || typeof body !== 'object') {
            return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
        }

        fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf8');
        return NextResponse.json({ success: true, message: 'Knowledgebase updated successfully' });
    } catch (error) {
        console.error('Error writing knowledgebase:', error);
        return NextResponse.json({ error: 'Failed to write data' }, { status: 500 });
    }
}
