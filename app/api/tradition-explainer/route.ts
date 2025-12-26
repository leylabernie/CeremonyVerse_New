import { type NextRequest, NextResponse } from "next/server"

const GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY

export async function POST(req: NextRequest) {
  try {
    const { tradition } = await req.json()

    if (!tradition || typeof tradition !== "string") {
      return NextResponse.json({ error: "Tradition question is required" }, { status: 400 })
    }

    if (!GOOGLE_AI_API_KEY) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    const prompt = `You are a knowledgeable expert on Indian and South Asian wedding traditions. Explain the following wedding tradition or ritual clearly and respectfully:

"${tradition}"

Provide:
1. The name and origin of the tradition
2. Its cultural/religious significance
3. How it's typically performed
4. Modern variations or adaptations
5. Any practical planning considerations

Keep the explanation informative, respectful, and helpful for couples planning their wedding.`

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GOOGLE_AI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
          },
        }),
      },
    )

    if (!response.ok) {
      throw new Error("AI API request failed")
    }

    const data = await response.json()
    const explanation = data.candidates?.[0]?.content?.parts?.[0]?.text || "Unable to generate explanation"

    return NextResponse.json({ explanation })
  } catch (error) {
    console.error("Tradition explainer error:", error)
    return NextResponse.json({ error: "Failed to generate explanation" }, { status: 500 })
  }
}
