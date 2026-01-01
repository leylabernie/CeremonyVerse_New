import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

type IncomingMessage = {
  role: "user" | "assistant"
  content: string
}

export async function POST(req: Request) {
  if (!process.env.GOOGLE_AI_API_KEY) {
    console.error("Missing GOOGLE_AI_API_KEY environment variable")
    return NextResponse.json(
      { error: "Missing GOOGLE_AI_API_KEY environment variable" },
      { status: 500 },
    )
  }

  try {
    const body = await req.json()

    const messages: IncomingMessage[] = Array.isArray(body?.messages) ? body.messages : []

    if (!messages.length) {
      return NextResponse.json(
        { error: "NO_MESSAGES", details: "No messages provided in request." },
        { status: 400 },
      )
    }

    // Use the last user message as the prompt
    const lastUserMessage = [...messages].reverse().find((m) => m.role === "user")

    if (!lastUserMessage) {
      return NextResponse.json(
        { error: "NO_USER_MESSAGE", details: "No user message found in messages." },
        { status: 400 },
      )
    }

    const systemPrompt = `
You are a helpful Indian wedding planning assistant for CeremonyVerse.
You specialize in Indian and fusion weddings in the US and can answer questions about:

- Budget ranges and cost tradeoffs
- Ceremony types, traditions, and timelines
- Vendor categories and what to expect
- Cultural sourcing (outfits, jewelry, decor, rituals)
- How CeremonyVerse services work

Be practical, calm, and specific. Do NOT give legal or financial advice.
If the question is not about weddings or CeremonyVerse, gently steer back to wedding planning topics.
    `.trim()

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" })

    // IMPORTANT: first content role MUST be "user"
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${systemPrompt}\n\nUser question:\n${lastUserMessage.content}`,
            },
          ],
        },
      ],
    })

    const text = result.response.text()

    // Frontend expects `data.message`
    return NextResponse.json({ message: text })
  } catch (error: any) {
    console.error("Chatbot API error:", error)
    return NextResponse.json(
      {
        error: "SERVER_ERROR",
        details: error?.message ?? "Unknown error",
      },
      { status: 500 },
    )
  }
}
