// app/api/chat/route.ts

import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

const apiKey = process.env.GOOGLE_AI_API_KEY

if (!apiKey) {
  console.warn(
    "[Chat API] GOOGLE_AI_API_KEY is not set. The chatbot route will return an error.",
  )
}

const genAI = apiKey
  ? new GoogleGenerativeAI(apiKey).getGenerativeModel({
      model: "gemini-1.5-pro",
    })
  : null

// CeremonyVerse system prompt – you can tweak wording if you like
const SYSTEM_PROMPT = `
You are an Indian & fusion wedding planning assistant for CeremonyVerse.

Your job:
- Answer questions about Indian weddings, budgets, timelines, rituals, and cultural sourcing.
- Be clear, practical, and kind.
- Do NOT give legal, medical, or financial advice beyond general guidance.
- When appropriate, encourage users to book a consultation via the CeremonyVerse website.

Keep answers concise but helpful, and avoid sounding like a generic chatbot.
`.trim()

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

export async function POST(req: Request) {
  try {
    if (!genAI || !apiKey) {
      return NextResponse.json(
        {
          error: "SERVER_ERROR",
          details:
            "Chatbot is not configured correctly on the server (missing GOOGLE_AI_API_KEY).",
        },
        { status: 500 },
      )
    }

    const body = await req.json().catch(() => null)

    if (!body || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: "BAD_REQUEST", details: "Missing or invalid `messages` array." },
        { status: 400 },
      )
    }

    const rawMessages: ChatMessage[] = body.messages

    // 1) Find the first USER message in the conversation
    const firstUserIndex = rawMessages.findIndex((m) => m.role === "user")

    if (firstUserIndex === -1) {
      return NextResponse.json(
        { error: "BAD_REQUEST", details: "No user message found in request." },
        { status: 400 },
      )
    }

    // 2) Build Gemini `contents` array and guarantee the FIRST item is role: "user"
    const contents: { role: "user" | "model"; parts: { text: string }[] }[] = []

    const firstUser = rawMessages[firstUserIndex]

    // First message: system prompt + first user message, as a single USER turn
    contents.push({
      role: "user",
      parts: [{ text: `${SYSTEM_PROMPT}\n\n${firstUser.content}` }],
    })

    // 3) Add the rest of the messages AFTER that first user message
    for (let i = firstUserIndex + 1; i < rawMessages.length; i++) {
      const msg = rawMessages[i]
      if (!msg?.content) continue

      contents.push({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      })
    }

    // 4) Call Gemini
    const result = await genAI.generateContent({ contents })
    const response = await result.response
    const text = response.text()

    return NextResponse.json(
      {
        reply: text,
      },
      { status: 200 },
    )
  } catch (err: any) {
    console.error("[Chat API] Error:", err)

    return NextResponse.json(
      {
        error: "SERVER_ERROR",
        details: err?.message ?? String(err),
      },
      { status: 500 },
    )
  }
}
