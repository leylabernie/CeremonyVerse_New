"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, X } from "lucide-react"

export default function LeadMagnetPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Show popup after 30 seconds on first visit
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("hasSeenLeadMagnet")
      if (!hasSeenPopup) {
        setIsOpen(true)
        localStorage.setItem("hasSeenLeadMagnet", "true")
      }
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Lead magnet email submitted:", email)
    alert("Thank you! Check your email for your free wedding planning checklist.")
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />

      {/* Modal Content */}
      <div className="relative bg-background rounded-lg shadow-lg p-6 w-full max-w-md mx-4 z-10">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="space-y-2 mb-4">
          <h2 className="font-serif text-2xl font-semibold">Free Indian-American Wedding Planning Checklist</h2>
          <p className="text-muted-foreground text-sm">
            Get our comprehensive 12-month timeline with cultural ceremony checklists, budget templates, and vendor
            comparison sheets.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg space-y-2">
            <div className="flex items-start gap-2 text-sm">
              <Download className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>Complete 12-month planning timeline</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <Download className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>Cultural ceremony checklists (Hindu, Gujarati, South Indian)</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <Download className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>Budget breakdown templates</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <Download className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>Vendor comparison worksheets</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download Free Checklist
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            No spam. Unsubscribe anytime. Your email is safe with us.
          </p>
        </div>
      </div>
    </div>
  )
}
