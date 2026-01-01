// app/api/chat/route.ts

import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

// You can tweak this wording if you want
const SYSTEM_PROMPT = `
You are an Indian & fusion wedding planning assistant for CeremonyVerse.

You help with:
- Budgets and realistic price ranges
- Ceremony types, timelines, and rituals
- Vendor categories and what to expect
- Cultural sourcing (outfits, jewelry, decor, ceremony items)

Be practical, calm, specific, and culturally fluent.
Do NOT give medical, legal, or investment advice.
`.trim()

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null)

    const messages: ChatMessage[] = Array.isArray(body?.messages)
      ? body.messages
      : []

    if (!messages.length) {
      return NextResponse.json(
        {
          error: "NO_MESSAGES",
          details: "No messages provided in request body.",
        },
        { status: 400 },
      )
    }

    // Use the last user message as the actual question
    const lastUser = [...messages].reverse().find((m) => m.role === "user")

    if (!lastUser) {
      return NextResponse.json(
        {
          error: "NO_USER_MESSAGE",
          details: "No user message found in messages array.",
        },
        { status: 400 },
      )
    }

    const apiKey = process.env.GOOGLE_AI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        {
          error: "MISSING_API_KEY",
          details: "GOOGLE_AI_API_KEY is not set in environment variables.",
        },
        { status: 500 },
      )
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    })

    // IMPORTANT: first item to Gemini must be role: "user"
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${SYSTEM_PROMPT}\n\nUser question:\n${lastUser.content}`,
            },
          ],
        },
      ],
    })

    const text = result.response.text()

    // Return both keys so whichever your frontend expects will work
    return NextResponse.json(
      {
        message: text,
        reply: text,
      },
      { status: 200 },
    )
  } catch (error: any) {
    console.error("Chatbot API error:", error)

    return NextResponse.json(
      {
        error: "SERVER_ERROR",
        details: error?.message ?? String(error),
      },
      { status: 500 },
    )
  }
}
