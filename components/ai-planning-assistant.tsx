"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Send, Sparkles } from "@/components/icons"

interface Message {
  role: "user" | "assistant"
  content: string
}

const suggestedQuestions = [
  "What's a realistic budget for a 200-guest fusion wedding?",
  "How do I blend Hindu and Christian ceremonies?",
  "What are auspicious dates for 2025?",
  "How far in advance should I book vendors?",
]

// Pre-defined responses for common questions
const getResponse = (question: string): string => {
  const q = question.toLowerCase()

  if (q.includes("budget") || q.includes("cost") || q.includes("price")) {
    return `For a 200-guest Indian-American fusion wedding, you should plan for $75,000 - $150,000 depending on your location and preferences. Here's a typical breakdown:

• Venue & Catering: 40% ($30K-$60K)
• Photography/Video: 12% ($9K-$18K)
• Bridal Attire & Jewelry: 10% ($7.5K-$15K)
• Decor & Florals: 10% ($7.5K-$15K)
• Entertainment: 8% ($6K-$12K)

Would you like me to help you create a detailed budget? Visit our Budget Planner tool for an interactive calculator.`
  }

  if (
    q.includes("blend") ||
    q.includes("fusion") ||
    q.includes("hindu") ||
    q.includes("christian") ||
    q.includes("combine")
  ) {
    return `Blending Hindu and Christian ceremonies is beautiful! Here are some popular approaches:

**Combined Ceremony:**
• Start with Christian vows and rings
• Follow with Hindu rituals (Ganesh Puja, Mangal Pheras, Saat Phere)
• End with joint blessings from both officiants

**Separate Ceremonies:**
• Christian ceremony in the morning
• Hindu ceremony in the afternoon/evening
• Combined reception

**Key Tips:**
• Involve both families in planning
• Explain rituals to guests with a program
• Choose a venue that accommodates both traditions

Our Heritage & Harmony service specializes in exactly this. Would you like to schedule a consultation?`
  }

  if (q.includes("auspicious") || q.includes("date") || q.includes("muhurat") || q.includes("2025")) {
    return `Here are some auspicious Hindu wedding dates (Shubh Muhurat) for 2025:

**Best Months:** February, April, May, November, December

**Popular Dates:**
• Feb 9, 12, 16, 20
• Apr 14, 17, 20, 24, 27
• May 4, 8, 11, 15, 18
• Nov 16, 20, 23, 27, 30
• Dec 4, 7, 11, 14

**Note:** Always consult with your family pandit for specific timings based on both horoscopes.

Visit our Free Resources page for the complete calendar.`
  }

  if (q.includes("vendor") || q.includes("book") || q.includes("advance") || q.includes("timeline")) {
    return `Here's the ideal booking timeline for a fusion wedding:

**12+ Months Before:**
• Venue (especially for peak dates)
• Photographer/Videographer
• Wedding Planner

**9-10 Months Before:**
• Caterer
• Officiant/Pandit
• Bridal attire (allow time for customization)

**6-8 Months Before:**
• Florist/Decorator
• DJ/Band/Dhol players
• Mehendi artist

**3-4 Months Before:**
• Invitations
• Transportation
• Hotel blocks

Our Free Resources page has a detailed 12-month checklist you can download!`
  }

  if (q.includes("mehndi") || q.includes("mehendi") || q.includes("henna")) {
    return `Mehndi is a beautiful pre-wedding tradition! Here's what you need to know:

**Timing:** Usually 1-2 days before the wedding
**Duration:** 4-8 hours for bridal mehndi
**Cost:** $300-$800 for bridal, $50-$150 for guests

**Tips:**
• Book your artist 6+ months ahead
• Schedule it when you can sit still for hours
• Avoid water for 6-8 hours after application
• Lemon-sugar mixture helps darken the color

Check our blog for a complete Mehndi Ceremony Guide!`
  }

  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return `Hello! I'm your CeremonyVerse planning assistant. I can help you with:

• Budget planning and cost estimates
• Blending cultural traditions
• Finding auspicious dates
• Vendor booking timelines
• Ceremony explanations

What would you like to know about planning your fusion wedding?`
  }

  return `That's a great question! While I can provide general guidance, our wedding planning experts would love to give you personalized advice.

Here are some resources that might help:
• **Free Resources** - Checklists, budget calculator, auspicious dates
• **Our Services** - Full planning, cultural fusion, virtual shopping
• **Blog** - In-depth guides on traditions and planning tips

Would you like to schedule a free consultation to discuss your specific needs?`
}

export default function AIPlanningAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm your CeremonyVerse planning assistant. I can help with budgets, traditions, timelines, and more. What would you like to know?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(userMessage)
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsTyping(false)
    }, 1000)
  }

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-105 group"
        aria-label="Open AI Planning Assistant"
      >
        <Sparkles className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-charcoal text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Planning Assistant
        </span>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />

          {/* Chat Window */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] max-h-[80vh] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Planning Assistant</h3>
                  <p className="text-xs text-white/80">Powered by CeremonyVerse</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, i) => (
                <div key={i} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                      message.role === "user"
                        ? "bg-primary text-white rounded-br-md"
                        : "bg-gray-100 text-charcoal rounded-bl-md"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-charcoal p-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSuggestedQuestion(q)}
                      className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about budgets, traditions, dates..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary"
                />
                <Button size="sm" onClick={handleSend} disabled={!input.trim()} className="rounded-full h-10 w-10 p-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-2">
                For personalized advice,{" "}
                <a href="/book-consultation" className="text-primary underline">
                  book a free consultation
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
