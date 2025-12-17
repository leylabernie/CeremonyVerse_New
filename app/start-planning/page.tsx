"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import { Check, ArrowRight, ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"

export default function StartPlanningForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Step 1: Basics
    fullName: "",
    email: "",
    phone: "",
    location: "",
    weddingDate: "",
    weddingLocation: "",
    // Step 2: Wedding details
    weddingTypes: [] as string[],
    events: [] as string[],
    guestCount: "",
    planningSupport: "",
    // Step 3: Budget + timeline
    budget: "",
    timeline: "",
    challenge: "",
    // Step 4: Final
    notes: "",
    consent: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      const checked = e.target.checked
      if (name === "consent") {
        setFormData((prev) => ({ ...prev, consent: checked }))
      } else {
        // Multi-select checkboxes
        setFormData((prev) => {
          const currentArray = prev[name as keyof typeof prev] as string[]
          return {
            ...prev,
            [name]: checked ? [...currentArray, value] : currentArray.filter((item) => item !== value),
          }
        })
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Submit to API
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.fullName.split(" ")[0],
          lastName: formData.fullName.split(" ").slice(1).join(" ") || formData.fullName,
          email: formData.email,
          phone: formData.phone,
          weddingDate: formData.weddingDate,
          message: `
Location: ${formData.location}
Wedding Location: ${formData.weddingLocation}
Wedding Types: ${formData.weddingTypes.join(", ")}
Events: ${formData.events.join(", ")}
Guest Count: ${formData.guestCount}
Planning Support: ${formData.planningSupport}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Biggest Challenge: ${formData.challenge}

Additional Notes:
${formData.notes}
          `,
          source: "start_planning_form",
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error submitting the form. Please try again or contact us directly.")
    }
  }

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 4))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.fullName && formData.email && formData.location && formData.weddingLocation
      case 2:
        return (
          formData.weddingTypes.length > 0 &&
          formData.events.length > 0 &&
          formData.guestCount &&
          formData.planningSupport
        )
      case 3:
        return formData.budget && formData.timeline && formData.challenge
      case 4:
        return formData.consent
      default:
        return false
    }
  }

  if (submitted) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Thank You for Sharing Your Vision!
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                We've received your wedding planning details and are excited to help bring your celebration to life.
              </p>
              <p className="text-muted-foreground mb-8">
                <strong>We respond within 1 business day.</strong> Expect a personalized response that addresses your
                specific needs and timeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/book-consultation">Schedule Consultation</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/">Return to Homepage</a>
                </Button>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Start Planning Your Wedding</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's understand your vision so we can create the perfect planning experience for your celebration.
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between max-w-md mx-auto">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                        num === step
                          ? "bg-primary text-primary-foreground scale-110"
                          : num < step
                            ? "bg-primary/70 text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {num < step ? <Check className="w-5 h-5" /> : num}
                    </div>
                    {num < 4 && (
                      <div
                        className={`h-1 w-12 md:w-20 mx-1 transition-colors ${
                          num < step ? "bg-primary" : "bg-secondary"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <p className="text-sm text-muted-foreground">
                  Step {step} of 4:{" "}
                  {step === 1
                    ? "Basic Information"
                    : step === 2
                      ? "Wedding Details"
                      : step === 3
                        ? "Budget & Timeline"
                        : "Final Details"}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Basics */}
              {step === 1 && (
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border space-y-6">
                  <h2 className="font-serif text-2xl text-foreground mb-6">Tell Us About You</h2>

                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone <span className="text-muted-foreground text-xs">(optional but recommended)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                        Your Location <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        placeholder="City, State"
                      />
                    </div>
                    <div>
                      <label htmlFor="weddingDate" className="block text-sm font-medium text-foreground mb-2">
                        Wedding Date
                      </label>
                      <input
                        type="text"
                        id="weddingDate"
                        name="weddingDate"
                        value={formData.weddingDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        placeholder="MM/DD/YYYY or 'not decided'"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="weddingLocation" className="block text-sm font-medium text-foreground mb-2">
                      Primary Wedding Location <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="weddingLocation"
                      name="weddingLocation"
                      value={formData.weddingLocation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      placeholder="City, State, Country"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Wedding Details */}
              {step === 2 && (
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border space-y-6">
                  <h2 className="font-serif text-2xl text-foreground mb-6">Wedding Details</h2>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Wedding Type <span className="text-destructive">*</span>{" "}
                      <span className="text-muted-foreground text-xs">(Select all that apply)</span>
                    </label>
                    <div className="space-y-2">
                      {["Gujarati", "South Indian", "Punjabi", "Jain", "Fusion", "Other"].map((type) => (
                        <label
                          key={type}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            name="weddingTypes"
                            value={type}
                            checked={formData.weddingTypes.includes(type)}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary focus:ring-primary rounded"
                          />
                          <span className="text-foreground">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Events Planned <span className="text-destructive">*</span>{" "}
                      <span className="text-muted-foreground text-xs">(Select all that apply)</span>
                    </label>
                    <div className="space-y-2">
                      {["Mehendi", "Haldi", "Sangeet", "Wedding", "Reception", "Other"].map((event) => (
                        <label
                          key={event}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            name="events"
                            value={event}
                            checked={formData.events.includes(event)}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary focus:ring-primary rounded"
                          />
                          <span className="text-foreground">{event}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-foreground mb-2">
                      Estimated Guest Count <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    >
                      <option value="">Select range</option>
                      <option value="Under 50">Under 50</option>
                      <option value="50-100">50-100</option>
                      <option value="100-200">100-200</option>
                      <option value="200-300">200-300</option>
                      <option value="300-500">300-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="planningSupport" className="block text-sm font-medium text-foreground mb-2">
                      Planning Support Needed <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="planningSupport"
                      name="planningSupport"
                      value={formData.planningSupport}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    >
                      <option value="">Select type</option>
                      <option value="Full Planning">Full Planning</option>
                      <option value="Partial Planning">Partial Planning</option>
                      <option value="Virtual Planning">Virtual Planning</option>
                      <option value="Destination Planning">Destination Planning</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Budget + Timeline */}
              {step === 3 && (
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border space-y-6">
                  <h2 className="font-serif text-2xl text-foreground mb-6">Budget & Timeline</h2>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Estimated Total Wedding Budget <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    >
                      <option value="">Select range</option>
                      <option value="Under $25k">Under $25k</option>
                      <option value="$25k-$50k">$25k-$50k</option>
                      <option value="$50k-$75k">$50k-$75k</option>
                      <option value="$75k-$100k">$75k-$100k</option>
                      <option value="$100k-$150k">$100k-$150k</option>
                      <option value="$150k-$200k">$150k-$200k</option>
                      <option value="$200k+">$200k+</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                      Planning Timeline <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    >
                      <option value="">Select timeline</option>
                      <option value="Need help now">Need help now</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="12+ months">12+ months</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-foreground mb-2">
                      Biggest Challenge <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="challenge"
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    >
                      <option value="">Select challenge</option>
                      <option value="Cultural coordination">Cultural coordination</option>
                      <option value="Vendor sourcing">Vendor sourcing</option>
                      <option value="Timelines">Managing timelines</option>
                      <option value="Destination logistics">Destination logistics</option>
                      <option value="Family expectations">Family expectations</option>
                      <option value="Budget management">Budget management</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 4: Final */}
              {step === 4 && (
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border space-y-6">
                  <h2 className="font-serif text-2xl text-foreground mb-6">Almost Done!</h2>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
                      placeholder="Tell us anything else that would help us understand your vision and needs..."
                    />
                  </div>

                  <div className="bg-accent/30 p-4 rounded-lg">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        required
                        className="w-5 h-5 text-primary focus:ring-primary rounded mt-1"
                      />
                      <span className="text-sm text-foreground">
                        I consent to CeremonyVerse contacting me about my wedding inquiry via email, phone, or text. I
                        understand I can opt out at any time. <span className="text-destructive">*</span>
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between gap-4 pt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    size="lg"
                    className="flex-1 sm:flex-none bg-transparent"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                )}

                {step < 4 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    size="lg"
                    className="flex-1 sm:flex-none ml-auto"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" disabled={!isStepValid()} size="lg" className="flex-1 sm:flex-none ml-auto">
                    Submit
                    <Check className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
