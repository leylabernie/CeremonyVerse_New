import { type NextRequest, NextResponse } from "next/server"

const GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY

export async function POST(req: NextRequest) {
  try {
    const { tradition } = await req.json()

    if (!tradition || typeof tradition !== "string") {
      return NextResponse.json(
        { error: "Tradition question is required" },
        { status: 400 }
      )
    }

    if (!GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      )
    }

    const prompt =
      "You are an expert on Indian and South Asian wedding traditions. " +
      "Explain the following wedding tradition clearly and respectfully:\n\n" +
      tradition +
      "\n\nInclude:\n" +
      "1. Origin of the tradition\n" +
      "2. Cultural significance\n" +
      "3. How it is performed\n" +
      "4. Modern adaptations\n" +
      "5. Practical planning considerations."

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
        GOOGLE_AI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
          },
        }),
      }
    )

    if (!response.ok) {
      const err = await response.text()
      console.error("Gemini API error:", err)
      throw new Error("AI API request failed")
    }

    const data = await response.json()

    const explanation =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Unable to generate explanation."

    return NextResponse.json({ explanation })
  } catch (error) {
    console.error("Tradition explainer error:", error)

    return NextResponse.json(
      { error: "Failed to generate explanation" },
      { status: 500 }
    )
  }
}
