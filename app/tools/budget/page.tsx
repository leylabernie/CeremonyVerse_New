"use client"

import type React from "react"

import { useState } from "react"
import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"

export default function BudgetToolPage() {
  const [totalBudget, setTotalBudget] = useState(75000)
  const [guestCount, setGuestCount] = useState(200)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const categories = [
    { name: "Venue & Catering", pct: 40 },
    { name: "Photography & Videography", pct: 12 },
    { name: "Bridal Attire & Jewelry", pct: 10 },
    { name: "Groom & Family Attire", pct: 6 },
    { name: "Decor & Florals", pct: 10 },
    { name: "Entertainment & DJ", pct: 8 },
    { name: "Invitations", pct: 3 },
    { name: "Favors & Gifts", pct: 4 },
    { name: "Mehendi & Sangeet", pct: 5 },
    { name: "Contingency", pct: 2 },
  ]

  const perPerson = Math.round(totalBudget / guestCount)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        source: "budget-tool",
        budget: totalBudget,
        guests: guestCount,
      }),
    })
    setSubmitted(true)
  }

  return (
    <>
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Indian Wedding Budget Calculator</h1>
          <p className="text-lg text-muted">This tool helps you estimate a realistic allocation. It's not a quote.</p>
        </div>
      </Section>

      <Section alt>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <h2 className="text-xl font-semibold mb-4">Your Budget</h2>

            <label className="block text-sm font-medium mb-2">Total Budget ($)</label>
            <input
              type="number"
              value={totalBudget}
              onChange={(e) => setTotalBudget(Number(e.target.value))}
              className="w-full px-4 py-2 border border-border rounded-lg mb-4"
              min="10000"
              step="5000"
            />

            <label className="block text-sm font-medium mb-2">Guest Count</label>
            <input
              type="number"
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full px-4 py-2 border border-border rounded-lg mb-4"
              min="50"
              step="10"
            />

            <div className="mt-6 p-4 bg-accent-soft rounded-lg">
              <div className="text-sm text-muted">Cost Per Guest</div>
              <div className="text-2xl font-bold text-accent">${perPerson.toLocaleString()}</div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-4">Recommended Allocation</h2>
            <div className="space-y-3">
              {categories.map((cat) => {
                const amount = Math.round((totalBudget * cat.pct) / 100)
                return (
                  <div key={cat.name} className="flex justify-between items-center">
                    <div className="text-sm">{cat.name}</div>
                    <div className="text-sm font-medium">
                      {cat.pct}% (${amount.toLocaleString()})
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <Card className="max-w-2xl mx-auto p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="text-center">
              <h3 className="text-xl font-semibold mb-4">Get Your Detailed Breakdown</h3>
              <p className="text-muted mb-4">Enter your email to receive the full budget breakdown and tips.</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-2 border border-border rounded-lg mb-4"
              />
              <Button type="submit">Send Me the Breakdown</Button>
            </form>
          ) : (
            <div className="text-center">
              <div className="text-2xl mb-2">✓</div>
              <h3 className="text-xl font-semibold mb-2">Check Your Email!</h3>
              <p className="text-muted">We've sent your detailed budget breakdown and planning tips.</p>
            </div>
          )}
        </Card>
      </Section>
    </>
  )
}
