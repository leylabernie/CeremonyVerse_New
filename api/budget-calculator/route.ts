import { type NextRequest, NextResponse } from "next/server"

const GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY

export async function POST(req: NextRequest) {
  try {
    const { totalBudget, guestCount, eventCount, location, ceremonyType } = await req.json()

    if (!GOOGLE_AI_API_KEY) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    const prompt = `You are an expert Indian wedding planner. Create a detailed, realistic budget breakdown for a wedding with these details:

Total Budget: $${totalBudget}
Guest Count: ${guestCount}
Number of Events: ${eventCount}
Location: ${location}
Ceremony Type: ${ceremonyType}

Provide a JSON response with this EXACT structure (no additional text, only valid JSON):
{
  "breakdown": [
    {
      "category": "Venue & Catering",
      "amount": 15000,
      "percentage": 30,
      "details": "Brief explanation of what this covers"
    }
  ],
  "recommendations": "<p>HTML formatted recommendations with bullet points</p>"
}

Create 8-10 budget categories. Be realistic based on the location and guest count. The total should equal the budget provided.

For recommendations, provide 3-4 practical tips in HTML format with <p> tags and <ul>/<li> for lists.`

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GOOGLE_AI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2000,
          },
        }),
      },
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[v0] Gemini API error:", errorData)
      throw new Error("AI API request failed")
    }

    const data = await response.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ""

    console.log("[v0] Raw Gemini response:", text)

    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      console.error("[v0] Could not parse JSON from response:", text)
      throw new Error("Could not parse JSON from response")
    }

    const budgetData = JSON.parse(jsonMatch[0])

    return NextResponse.json(budgetData)
  } catch (error) {
    console.error("[v0] Budget Calculator API Error:", error)
    return NextResponse.json({ error: "Failed to calculate budget" }, { status: 500 })
  }
}
