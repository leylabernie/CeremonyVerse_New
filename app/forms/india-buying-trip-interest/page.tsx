"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function IndiaBuyingTripInterestPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-accent" />
            </div>
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
              Thank You for Your Interest!
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              We've received your information and will contact you with details about our structured sourcing options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/shopping-from-india">Back to Shopping Services</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif text-stone-900">
              Thinking About Traveling to India?
            </h1>
            <p className="mt-4 text-xl text-foreground/70 leading-relaxed">
              Before booking flights, explore a structured sourcing plan that gives you
              access to vetted vendors and competitive pricing — without depending on
              international travel.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">

            {/* Basic Information */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Your Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" name="firstName" placeholder="First Name *" required className="input-style" />
                <input type="text" name="lastName" placeholder="Last Name *" required className="input-style" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <input type="email" name="email" placeholder="Email *" required className="input-style" />
                <input type="tel" name="phone" placeholder="Phone *" required className="input-style" />
              </div>
            </div>

            {/* Wedding Details */}
            <div className="pt-6 border-t border-border">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Wedding Details
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" name="weddingDate" placeholder="Wedding Date (Month/Year) *" required className="input-style" />
                <input type="text" name="weddingLocation" placeholder="Wedding Location *" required className="input-style" />
              </div>
            </div>

            {/* Budget */}
            <div className="pt-6 border-t border-border">
              <select name="budgetRange" required className="input-style">
                <option value="">Estimated Shopping Budget *</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000 - $20,000</option>
                <option>$20,000 - $30,000</option>
                <option>$30,000+</option>
                <option>Not sure yet</option>
              </select>
            </div>

            {/* Submit */}
            <div className="pt-6">
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                Submit Interest Form
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
