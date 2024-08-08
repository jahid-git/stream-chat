import { NextRequest, NextResponse } from 'next/server';
import { ChatRequest, ChatResponse } from '@/types/chat';

export async function POST(req: NextRequest) {
    const { prompt }: ChatRequest = await req.json();

    const demoResponse = `
  ---------------------------
  You asked(prompt): **${prompt}**

  **This is a bold text**

  - List item 1
  - List item 2
  - List item 3
  - This is demo markdown response!
  ---------------------------
  `;

    const response: ChatResponse = { content: demoResponse };
    return NextResponse.json(response);
}