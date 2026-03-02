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

    // TODO: Implement email/CRM integration
    // const formData = new FormData(e.currentTarget)
    // await sendToEmailSystem(formData)

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
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Thank You for Your Interest!</h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              We've received your information and will contact you with details about our next India Buying Trip,
              typically scheduled for February/March each year.
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              India Buying Trip Interest List
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Join our interest list for the annual India Buying Trip. We'll contact you with trip details,
              availability, and pricing.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
            {/* Basic Information */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Your Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-foreground mb-2">
                    State/Country *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Wedding Details */}
            <div className="pt-6 border-t border-border">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Wedding Details</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="weddingDate" className="block text-sm font-medium text-foreground mb-2">
                    Wedding Date (Month/Year) *
                  </label>
                  <input
                    type="text"
                    id="weddingDate"
                    name="weddingDate"
                    required
                    placeholder="e.g., November 2026"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="weddingLocation" className="block text-sm font-medium text-foreground mb-2">
                    Wedding Location *
                  </label>
                  <input
                    type="text"
                    id="weddingLocation"
                    name="weddingLocation"
                    required
                    placeholder="City, State"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Shopping Needs */}
            <div className="pt-6 border-t border-border">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                What are you looking to shop for?
              </h2>
              <p className="text-sm text-foreground/70 mb-4">Select all that apply</p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Bridal Lehenga/Saree",
                  "Groom Sherwani",
                  "Parent Outfits",
                  "Bridesmaid Lehengas",
                  "Groomsmen Sherwanis",
                  "Jewelry (Bridal)",
                  "Jewelry (Family)",
                  "Ceremony Items/Vidhi",
                  "Welcome Gifts/Favors",
                  "Other (please specify below)",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted/30 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="shoppingNeeds"
                      value={item}
                      className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary"
                    />
                    <span className="text-sm text-foreground">{item}</span>
                  </label>
                ))}
              </div>

              <div className="mt-6">
                <label htmlFor="shoppingDetails" className="block text-sm font-medium text-foreground mb-2">
                  Additional Details (Optional)
                </label>
                <textarea
                  id="shoppingDetails"
                  name="shoppingDetails"
                  rows={4}
                  placeholder="Tell us more about your shopping needs, style preferences, or specific items you're looking for..."
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            {/* Budget Range */}
            <div className="pt-6 border-t border-border">
              <label htmlFor="budgetRange" className="block text-sm font-medium text-foreground mb-2">
                Estimated Shopping Budget *
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select a range</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                <option value="$20,000 - $30,000">$20,000 - $30,000</option>
                <option value="$30,000+">$30,000+</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            {/* Questions/Comments */}
            <div className="pt-6 border-t border-border">
              <label htmlFor="questions" className="block text-sm font-medium text-foreground mb-2">
                Questions or Special Requests (Optional)
              </label>
              <textarea
                id="questions"
                name="questions"
                rows={4}
                placeholder="Any questions about the India Buying Trip? Special accommodations needed?"
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Important Notice */}
            <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
              <p className="text-sm text-foreground leading-relaxed">
                <strong className="text-foreground">Please note:</strong> The India Buying Trip is a premium service
                with limited availability. We typically schedule one trip per year (usually February/March). Trip fees
                are non-refundable once booked. We'll contact you with complete details including dates, cities,
                pricing, and availability.
              </p>
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
