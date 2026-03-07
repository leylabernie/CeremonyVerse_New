import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { tradition } = await req.json();

    if (!tradition) {
      return NextResponse.json(
        { error: "Tradition is required" },
        { status: 400 }
      );
    }

    const API_KEY = process.env.GOOGLE_AI_API_KEY;

    if (!API_KEY) {
      return NextResponse.json(
        { error: "Missing GOOGLE_AI_API_KEY" },
        { status: 500 }
      );
    }

    const prompt = `Explain the Indian wedding tradition "${tradition}".
Include origin, cultural meaning, how it is performed, and modern variations.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GOOGLE_AI_API_KEY}`,
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

    const data = await response.json();

    const explanation =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No explanation generated.";

    return NextResponse.json({ explanation });
  } catch (error) {
    console.error("Tradition API error:", error);
    return NextResponse.json(
      { error: "Server error generating explanation" },
      { status: 500 }
    );
  }
}
