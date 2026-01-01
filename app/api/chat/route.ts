import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GOOGLE_AI_API_KEY;

    if (!apiKey) {
      console.error("❌ Missing GOOGLE_AI_API_KEY");
      return NextResponse.json(
        { error: "Missing API key" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // NEW way to load the model
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    // Convert messages to simple text prompt
    const userText = messages.map((m: any) => m.content).join("\n");

    const result = await model.generateContent(userText);

    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error("❌ API ERROR:", err?.message || err);
    return NextResponse.json(
      { error: "SERVER_ERROR", details: err?.message || err },
      { status: 500 }
    );
  }
}
