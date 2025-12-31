import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  // Check for API key at the start of the request
  if (!process.env.GOOGLE_AI_API_KEY) {
    console.error("Chatbot API error: Missing GOOGLE_AI_API_KEY environment variable")
    return NextResponse.json(
      { error: "Missing GOOGLE_AI_API_KEY environment variable" },
      { status: 500 }
    )
  }

  try {
    const { messages } = await req.json()

    // Initialize Google AI client inside the handler (after env check)
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY)
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

Always encourage booking a free consultation when appropriate: https://ceremonyverse.com/book-consultation`

    // Format messages for Gemini
    const formattedMessages = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }))

    // Create chat with history
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "I understand. I'll help with Hindu and fusion wedding planning as CeremonyVerse's assistant." }],
        },
        ...formattedMessages.slice(0, -1),
      ],
    })

    // Get the last user message
    const lastMessage = formattedMessages[formattedMessages.length - 1]
    const result = await chat.sendMessage(lastMessage.parts[0].text)
    const response = result.response.text()

    return NextResponse.json({ message: response })
  } catch (error) {
    // Log the full error for debugging in Vercel logs
    console.error("Chatbot API error:", error)
    
    // Return a structured error response
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
    return NextResponse.json(
      { error: "SERVER_ERROR", details: errorMessage },
      { status: 500 }
    )
  }
}
