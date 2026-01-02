// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server"

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const messages = body?.messages
    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request: messages must be an array." },
        { status: 400 },
      )
    }

    const systemMessage = {
      role: "system" as const,
      content: `
You are the CeremonyVerse website assistant.

- You help visitors with Indian & fusion wedding planning questions.
- You explain CeremonyVerse services (planning tiers, cultural sourcing, service area: PA/NJ/DE/MD).
- You are clear, concise, and calm.
- Do NOT promise prices, contracts, or availability. Encourage them to use the contact form or WhatsApp for specifics.
- If a question is outside weddings or CeremonyVerse, answer briefly and redirect to wedding-related help.
      `.trim(),
    }

    const response = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        temperature: 0.4,
        max_tokens: 400,
        messages: [systemMessage, ...messages],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("OpenAI API error:", response.status, errorText)
      return NextResponse.json(
        { error: "Chat service error from model provider." },
        { status: 500 },
      )
    }

    const data = await response.json()

    const assistantMessage =
      data?.choices?.[0]?.message ?? null

    if (!assistantMessage) {
      return NextResponse.json(
        { error: "No response from model." },
        { status: 500 },
      )
    }

    return NextResponse.json(
      { message: assistantMessage },
      { status: 200 },
    )
  } catch (error) {
    console.error("Chat API route error:", error)
    return NextResponse.json(
      { error: "Something went wrong with the chat service." },
      { status: 500 },
    )
  }
}
