import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Here you can:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM

    console.log("Start Planning submission:", body)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[v0] Start Planning error:", error)
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 })
  }
}
