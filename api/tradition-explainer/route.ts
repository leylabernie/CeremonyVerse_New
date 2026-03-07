import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.GOOGLE_AI_API_KEY;

export async function POST(req: NextRequest) {
  try {
    if (!API_KEY) {
      return NextResponse.json(
        { error: "Missing GOOGLE_AI_API_KEY" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const tradition = body?.tradition;

    if (!tradition || typeof tradition !== "string") {
      return NextResponse.json(
        { error: "Tradition text required" },
        { status: 400 }
      );
    }

    const prompt = `Explain the Indian wedding tradition "${tradition}".
Include origin, meaning, how it is performed, and modern adaptations.`;

    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
        API_KEY,
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
        }),
      }
    );

    const data = await res.json();

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No explanation generated.";

    return NextResponse.json({ explanation: text });
  } catch (err) {
    console.error("Tradition API error:", err);
    return NextResponse.json(
      { error: "Server error generating explanation" },
      { status: 500 }
    );
  }
}
