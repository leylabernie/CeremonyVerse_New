"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "@/components/icons"
import Link from "next/link"

interface ContactFormProps {
  source?: string
  className?: string
}

export default function ContactForm({ source = "contact_form", className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    weddingDate: "",
    message: "",
    agreeToTerms: false,
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setStatus("success")

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        weddingDate: "",
        message: "",
        agreeToTerms: false,
      })

      // Track conversion
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "generate_lead", {
          event_category: "engagement",
          event_label: source,
        })
      }

      // Meta Pixel tracking
      if (typeof window !== "undefined" && (window as any).fbq) {
        ;(window as any).fbq("track", "Lead", {
          content_name: source,
        })
      }
    } catch (error: any) {
      setStatus("error")
      setErrorMessage(error.message || "Failed to submit. Please try again or call us directly.")
    }
  }

  if (status === "success") {
    return (
      <div
        className={`bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-3xl border border-primary/20 text-center ${className}`}
      >
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="font-serif text-2xl text-foreground mb-3">Thank You!</h3>
        <p className="font-sans text-muted-foreground mb-4">
          We've received your inquiry and will respond within 24 hours. Check your email for confirmation.
        </p>
        <p className="font-sans text-sm text-muted-foreground">
          Need immediate assistance? Call us at{" "}
          <a href="tel:+12153419990" className="text-primary font-medium">
            +1-215-341-9990
          </a>
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="mt-6">
          Submit Another Inquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="font-sans block text-sm font-medium text-foreground mb-2">First Name *</label>
          <Input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border-border focus:border-primary focus:ring-primary"
            placeholder="Your first name"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label className="font-sans block text-sm font-medium text-foreground mb-2">Last Name *</label>
          <Input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border-border focus:border-primary focus:ring-primary"
            placeholder="Your last name"
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div>
        <label className="font-sans block text-sm font-medium text-foreground mb-2">Email Address *</label>
        <Input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border-border focus:border-primary focus:ring-primary"
          placeholder="your.email@example.com"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label className="font-sans block text-sm font-medium text-foreground mb-2">Phone Number *</label>
        <Input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border-border focus:border-primary focus:ring-primary"
          placeholder="+1-215-341-9990"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label className="font-sans block text-sm font-medium text-foreground mb-2">Wedding Date (if known)</label>
        <Input
          type="date"
          name="weddingDate"
          value={formData.weddingDate}
          onChange={handleChange}
          className="w-full border-border focus:border-primary focus:ring-primary"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label className="font-sans block text-sm font-medium text-foreground mb-2">Tell Us About Your Vision</label>
        <Textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border-border focus:border-primary focus:ring-primary"
          placeholder="Share your wedding vision, cultural elements you want to include, any specific concerns or questions..."
          disabled={status === "loading"}
        />
      </div>

      <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          required
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className="mt-1 h-4 w-4 text-primary focus:ring-primary border-border rounded"
          disabled={status === "loading"}
        />
        <label htmlFor="agreeToTerms" className="text-sm text-muted-foreground cursor-pointer">
          I agree to CeremonyVerse's{" "}
          <Link href="/terms-of-service" className="text-primary hover:underline font-medium" target="_blank">
            Terms & Conditions
          </Link>
          ,{" "}
          <Link href="/refund-policy" className="text-primary hover:underline font-medium" target="_blank">
            Refund Policy
          </Link>
          , and{" "}
          <Link href="/sourcing-disclaimer" className="text-primary hover:underline font-medium" target="_blank">
            Sourcing Disclaimer
          </Link>
          .
        </label>
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg">
          <p className="font-medium">Error:</p>
          <p>{errorMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
      >
        {status === "loading" ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Get Your Free Wedding Plan
          </>
        )}
      </Button>

      <p className="font-sans text-sm text-muted-foreground text-center">
        We'll respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  )
}
