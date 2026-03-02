import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "")

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" })

    const systemPrompt = `You are a helpful wedding planning assistant for CeremonyVerse, specializing in Hindu and fusion weddings. You help couples with:

- Budget planning and cost breakdowns for Hindu weddings
- Hindu cultural traditions (General Hindu, Gujarati Hindu, South Indian/Tamil Hindu)
- India vs USA sourcing decisions for outfits, jewelry, and ceremony items
- Multi-day event planning (mehndi, sangeet, baraat, mandap ceremony, reception)
- Fusion wedding ceremony ideas that incorporate Hindu elements
- Vendor selection guidance
- Timeline and checklist recommendations

IMPORTANT LIMITATIONS:
- Only provide information about HINDU wedding traditions and customs
- You can discuss Gujarati Hindu and South Indian/Tamil Hindu variations
- You can discuss fusion weddings that blend Hindu with other traditions
- Do NOT provide information about Sikh, Jain, or other religious traditions
- Always note that specific religious requirements may vary and couples should consult their family priest or religious advisor

Be warm, helpful, and culturally knowledgeable. Keep responses concise (under 150 words). Always include this disclaimer when discussing religious ceremonies:

"Note: This is general information about Hindu traditions. For specific religious requirements, please consult with your family priest or religious advisor."

Always encourage booking a consultation with CeremonyVerse for personalized planning at https://ceremonyverse.com/start-planning.

When discussing budgets, mention that CeremonyVerse offers transparent pricing starting at $800 for Planning Intensives.`

    const history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }))

    const lastMessage = messages[messages.length - 1].content

    const chat = model.startChat({
      history,
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    })

    const result = await chat.sendMessage(`${systemPrompt}\n\nUser question: ${lastMessage}`)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ message: text })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "Failed to get response from AI" }, { status: 500 })
  }
}
