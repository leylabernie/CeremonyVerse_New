"use client"

import type React from "react"

import { useState } from "react"

interface BudgetItem {
  category: string
  amount: number
  percentage: number
  details: string
}

interface BudgetResult {
  breakdown: BudgetItem[]
  recommendations: string
}

export default function BudgetCalculator() {
  const [formData, setFormData] = useState({
    totalBudget: "",
    guestCount: "",
    eventCount: "2",
    location: "",
    ceremonyType: "hindu",
  })
  const [result, setResult] = useState<BudgetResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setResult(null)

    try {
      const response = await fetch("/api/budget-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to calculate budget")
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      console.error("Calculator error:", err)
      setError("Sorry, there was an error calculating your budget. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Indian Wedding Budget Calculator</h1>
        <p className="text-gray-600 mb-8">
          Get a personalized budget breakdown based on your wedding details. Our AI analyzes your inputs to provide
          realistic cost estimates.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Total Budget ($) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={formData.totalBudget}
              onChange={(e) => setFormData({ ...formData, totalBudget: e.target.value })}
              placeholder="e.g., 50000"
              min="5000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Minimum: $5,000</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Guest Count <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={formData.guestCount}
              onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
              placeholder="e.g., 200"
              min="20"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Number of Events <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.eventCount}
              onChange={(e) => setFormData({ ...formData, eventCount: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              <option value="1">1 (Ceremony only)</option>
              <option value="2">2 (Ceremony + Reception)</option>
              <option value="3">3 (Mehndi/Sangeet + Ceremony + Reception)</option>
              <option value="4">4+ (Full multi-day celebration)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Wedding Location (City, State) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g., Philadelphia, PA"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Ceremony Type <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.ceremonyType}
              onChange={(e) => setFormData({ ...formData, ceremonyType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              <option value="hindu">Hindu</option>
              <option value="gujarati">Gujarati Hindu</option>
              <option value="south-indian">South Indian/Tamil Hindu</option>
              <option value="fusion">Fusion/Interfaith</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? "Calculating Your Budget..." : "Get Budget Breakdown"}
          </button>
        </form>

        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {result && (
          <div className="mt-8 space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Your Personalized Budget Breakdown</h2>

              <div className="space-y-4">
                {result.breakdown.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start border-b border-blue-100 pb-3 last:border-0"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{item.category}</p>
                      <p className="text-sm text-gray-600 mt-1">{item.details}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-bold text-lg text-gray-900">${item.amount.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">{item.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Personalized Recommendations</h3>
              <div
                className="prose prose-sm max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: result.recommendations }}
              />
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Plan Your Wedding?</h3>
              <p className="mb-4 opacity-90">Get personalized guidance from our wedding planning experts.</p>
              <a
                href="/start-planning"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Planning with CeremonyVerse
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
