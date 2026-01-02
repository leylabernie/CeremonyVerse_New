// app/api/chat/route.ts

// Force a standard runtime; no extra imports, no "openai" package
export const runtime = "edge"

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json()

    // Basic validation
    if (!Array.isArray(body?.messages)) {
      return new Response(
        JSON.stringify({ error: "messages must be an array" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing OPENAI_API_KEY" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const system = {
      role: "system",
      content: `
You are the CeremonyVerse website assistant.

- You help visitors with Indian & fusion wedding planning questions.
- You explain CeremonyVerse services (planning tiers, cultural sourcing).
- Service area focus: PA, NJ, DE, MD (but can answer general questions too).
- You are clear, calm, and concise.
- You never promise prices, contracts, or availability. For that, direct people to the contact form or WhatsApp.
      `.trim(),
    }

    const upstream = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          temperature: 0.4,
          max_tokens: 400,
          messages: [system, ...body.messages],
        }),
      },
    )

    if (!upstream.ok) {
      const text = await upstream.text()
      console.error("OpenAI error:", upstream.status, text)
      return new Response(
        JSON.stringify({
          error: "Chat service error from model provider.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const json = await upstream.json()

    const replyContent =
      json?.choices?.[0]?.message?.content ??
      "Sorry — I couldn’t generate a response just now."

    return new Response(
      JSON.stringify({
        message: { role: "assistant", content: replyContent },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (err) {
    console.error("Chat route error:", err)
    return new Response(
      JSON.stringify({ error: "Chat service failure" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
