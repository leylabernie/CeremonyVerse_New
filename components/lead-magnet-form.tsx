"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, Check, Loader2 } from "@/components/icons"

export default function LeadMagnetForm() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, resource: "indian-wedding-timeline-pdf" }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      setIsSuccess(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-accent/10 p-6 rounded-lg text-center">
        <div className="w-12 h-12 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
          <Check className="h-6 w-6 text-accent" />
        </div>
        <h3 className="font-serif text-xl text-charcoal mb-2">Check Your Email!</h3>
        <p className="text-charcoal/70 font-light text-sm">
          We've sent the Indian Wedding Planning Timeline PDF to your inbox.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="firstName" className="text-charcoal font-medium text-sm">
          First Name
        </Label>
        <Input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Your first name"
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-charcoal font-medium text-sm">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="mt-1"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Download className="mr-2 h-4 w-4" />
            Get Free PDF
          </>
        )}
      </Button>
      <p className="text-xs text-charcoal/50 text-center">We respect your privacy. Unsubscribe anytime.</p>
    </form>
  )
}
