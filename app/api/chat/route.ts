// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const messages = body?.messages;
    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request: messages must be an array." },
        { status: 400 }
      );
    }

    const systemMessage = {
      role: "system" as const,
      content: `
You are the CeremonyVerse website assistant.

- You help visitors with Indian & fusion wedding planning questions.
- You explain CeremonyVerse services (planning tiers, cultural sourcing, service-area: PA/NJ/DE/MD).
- You are clear, concise, and calm.
- Do NOT promise prices, contracts, or availability. Encourage them to use the contact form or WhatsApp for specifics.
- If a question is outside weddings or CeremonyVerse, answer briefly and redirect to wedding-related help.
      `.trim(),
    };

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [systemMessage, ...messages],
      temperature: 0.4,
      max_tokens: 400,
    });

    const assistantMessage = response.choices[0]?.message;

    if (!assistantMessage) {
      return NextResponse.json(
        { error: "No response from model." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: assistantMessage },
      { status: 200 }
    );
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong with the chat service." },
      { status: 500 }
    );
  }
}
