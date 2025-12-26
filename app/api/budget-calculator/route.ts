import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "")

export async function POST(req: Request) {
  try {
    const { totalBudget, guestCount, eventCount, location, ceremonyType } = await req.json()

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

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

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error("Could not parse JSON from response")
    }

    const budgetData = JSON.parse(jsonMatch[0])

    return NextResponse.json(budgetData)
  } catch (error) {
    console.error("Budget Calculator API Error:", error)
    return NextResponse.json({ error: "Failed to calculate budget" }, { status: 500 })
  }
}
