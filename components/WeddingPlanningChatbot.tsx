"use client"

import type React from "react"

import { useState } from "react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function WeddingPlanningChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I can help answer questions about Indian wedding planning, budgets, traditions, and sourcing. What would you like to know?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.message,
        },
      ])
    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again or contact us directly at hello@ceremonyverse.com.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-all z-50"
        aria-label="Open wedding planning chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-44 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[80vh] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Wedding Planning Assistant</h3>
            <p className="text-sm opacity-90">Ask me anything about Indian weddings</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 1 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-800">
                <p className="font-semibold mb-1">⚠️ Disclaimer</p>
                <p>
                  This AI assistant provides general information only. For religious guidance, consult your family
                  priest or religious advisor. Budget estimates are approximate. Not financial or legal advice.
                </p>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about budgets, traditions, vendors..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
