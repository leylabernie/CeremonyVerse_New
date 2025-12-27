"use client"

import { useEffect, useState } from "react"

export default function FontCheck() {
  const [bodyFont, setBodyFont] = useState("")
  const [sampleSans, setSampleSans] = useState("")
  const [sampleSerif, setSampleSerif] = useState("")

  useEffect(() => {
    const b = window.getComputedStyle(document.body).fontFamily
    const sSans = window.getComputedStyle(document.getElementById("fc-sans")!).fontFamily
    const sSerif = window.getComputedStyle(document.getElementById("fc-serif")!).fontFamily

    setBodyFont(b)
    setSampleSans(sSans)
    setSampleSerif(sSerif)
  }, [])

  return (
    <main className="min-h-screen px-8 py-10 space-y-8">
      <h1 className="text-2xl font-serif">Font Check</h1>

      <div className="space-y-4">
        <p id="fc-sans" className="font-sans">
          This line SHOULD be Inter — CeremonyVerse sample text.
        </p>

        <p id="fc-serif" className="font-serif">
          This line SHOULD be Cormorant Garamond — CeremonyVerse sample text.
        </p>
      </div>

      <div className="space-y-3 font-mono text-sm">
        <div>
          <strong>&lt;body&gt; font-family:</strong> {bodyFont || "loading..."}
        </div>
        <div>
          <strong>font-sans computed:</strong> {sampleSans || "loading..."}
        </div>
        <div>
          <strong>font-serif computed:</strong> {sampleSerif || "loading..."}
        </div>
      </div>
    </main>
  )
}
