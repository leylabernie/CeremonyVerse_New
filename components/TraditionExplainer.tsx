"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export default function TraditionExplainer() {
  const [tradition, setTradition] = useState("")
  const [explanation, setExplanation] = useState("")
  const [loading, setLoading] = useState(false)

  const handleExplain = async () => {
    if (!tradition.trim()) return

    setLoading(true)
    try {
      const response = await fetch("/api/tradition-explainer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tradition }),
      })

      const data = await response.json()
      setExplanation(data.explanation)
    } catch (error) {
      setExplanation("Unable to generate explanation. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-6">
      <h3 className="text-xl font-serif mb-4">Wedding Tradition Explainer</h3>
      <p className="text-sm text-muted-foreground mb-4">Ask about any Indian wedding tradition, ritual, or ceremony</p>

      <div className="space-y-4">
        <div>
          <label htmlFor="tradition" className="block text-sm font-medium mb-2">
            What tradition would you like explained?
          </label>
          <input
            id="tradition"
            type="text"
            value={tradition}
            onChange={(e) => setTradition(e.target.value)}
            placeholder="e.g., Mehndi ceremony, Saptapadi, Kanyadaan"
            className="w-full px-4 py-2 border rounded-md"
            onKeyDown={(e) => e.key === "Enter" && handleExplain()}
          />
        </div>

        <Button onClick={handleExplain} disabled={loading || !tradition.trim()}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Explaining...
            </>
          ) : (
            "Explain Tradition"
          )}
        </Button>

        {explanation && (
          <div className="mt-6 p-4 bg-muted rounded-md">
            <h4 className="font-medium mb-2">Explanation:</h4>
            <div className="prose prose-sm max-w-none whitespace-pre-wrap">{explanation}</div>
          </div>
        )}
      </div>
    </Card>
  )
}
