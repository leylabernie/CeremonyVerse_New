"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function NewClientIntakePage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    // TODO: Integrate with your email/CRM system (Make.com, Airtable, Notion, etc.)
    // Example: await fetch('/api/forms/new-client-intake', { method: 'POST', body: JSON.stringify(data) })

    console.log("Form submitted:", data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-accent" />
            </div>
            <h1 className="font-serif text-4xl text-foreground mb-4">Thank You!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We've received your information and will be in touch within 1-2 business days to schedule your
              consultation.
            </p>
            <Button asChild>
              <a href="/">Return to Homepage</a>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">New Client Intake Questionnaire</h1>
            <p className="text-lg text-muted-foreground">
              Help us understand your vision so we can create the perfect proposal for your celebration.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Basic Info */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-200">
              <h2 className="font-serif text-2xl text-foreground mb-6">Basic Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="partner1Name" className="block text-sm font-medium text-foreground mb-2">
                    Partner 1 Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="partner1Name"
                    name="partner1Name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="partner2Name" className="block text-sm font-medium text-foreground mb-2">
                    Partner 2 Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="partner2Name"
                    name="partner2Name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Contact Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                    Home City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-foreground mb-2">
                    Time Zone <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="timezone"
                    name="timezone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select timezone</option>
                    <option value="EST">Eastern (EST)</option>
                    <option value="CST">Central (CST)</option>
                    <option value="MST">Mountain (MST)</option>
                    <option value="PST">Pacific (PST)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Wedding Basics */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-200">
              <h2 className="font-serif text-2xl text-foreground mb-6">Wedding Basics</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="weddingDate" className="block text-sm font-medium text-foreground mb-2">
                    Tentative Wedding Date
                  </label>
                  <input
                    type="date"
                    id="weddingDate"
                    name="weddingDate"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="weddingLocation" className="block text-sm font-medium text-foreground mb-2">
                    City/Region You're Considering <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="weddingLocation"
                    name="weddingLocation"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Are you considering a Mexico resort wedding?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="mexicoWedding" value="yes" className="text-primary" />
                      <span className="text-foreground">Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="mexicoWedding" value="no" className="text-primary" />
                      <span className="text-foreground">No</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="mexicoWedding" value="not-sure" className="text-primary" />
                      <span className="text-foreground">Not sure yet</span>
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="guestCountTotal" className="block text-sm font-medium text-foreground mb-2">
                      Estimated Total Guest Count
                    </label>
                    <input
                      type="number"
                      id="guestCountTotal"
                      name="guestCountTotal"
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="guestCountCeremony" className="block text-sm font-medium text-foreground mb-2">
                      Ceremony Guest Count
                    </label>
                    <input
                      type="number"
                      id="guestCountCeremony"
                      name="guestCountCeremony"
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Which description fits your wedding best? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="weddingType" value="gujarati" required className="text-primary" />
                      <span className="text-foreground">Gujarati Hindu</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="weddingType" value="tamil-christian" className="text-primary" />
                      <span className="text-foreground">Tamil Christian</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="weddingType" value="hindu-regional" className="text-primary" />
                      <span className="text-foreground">Hindu wedding with other regional customs</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="weddingType" value="fusion" className="text-primary" />
                      <span className="text-foreground">Indian + non-Indian fusion</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="weddingType" value="other" className="text-primary" />
                      <span className="text-foreground">Other (please specify below)</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    name="weddingTypeOther"
                    placeholder="If other, please describe"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Are parents/elders strongly involved in decisions?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="eldersInvolved" value="yes" className="text-primary" />
                      <span className="text-foreground">Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="eldersInvolved" value="somewhat" className="text-primary" />
                      <span className="text-foreground">Somewhat</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="eldersInvolved" value="no" className="text-primary" />
                      <span className="text-foreground">No / minimal</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Which events are you planning? (select all that apply)
                  </label>
                  <fieldset className="space-y-2">
                    <legend className="sr-only">Event selection</legend>
                    {[
                      "Mehndi",
                      "Pithi/Haldi",
                      "Garba/Sangeet",
                      "Grah Shanti",
                      "Hindu ceremony",
                      "Church ceremony",
                      "Civil ceremony",
                      "Reception",
                      "Brunch / post-wedding lunch",
                    ].map((event) => (
                      <label key={event} className="flex items-center gap-2">
                        <input type="checkbox" name="events" value={event} className="text-primary" />
                        <span className="text-foreground">{event}</span>
                      </label>
                    ))}
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="events" value="other" className="text-primary" />
                      <span className="text-foreground">Other (specify below)</span>
                    </label>
                  </fieldset>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Any must-have service needs? (select all that apply)
                  </label>
                  <fieldset className="space-y-2">
                    <legend className="sr-only">Priority selection</legend>
                    {[
                      "Ceremony design & cultural rituals",
                      "Vendor sourcing & contracts",
                      "Timeline & run-of-show",
                      "Budget guidance",
                      "Outfit shopping from India",
                    ].map((priority) => (
                      <label key={priority} className="flex items-center gap-2">
                        <input type="checkbox" name="priorities" value={priority} className="text-primary" />
                        <span className="text-foreground">{priority}</span>
                      </label>
                    ))}
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="priorities" value="other" className="text-primary" />
                      <span className="text-foreground">Something else</span>
                    </label>
                  </fieldset>
                </div>
              </div>
            </section>

            {/* Background & Culture */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-200">
              <h2 className="font-serif text-2xl text-foreground mb-6">Background & Culture</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="partner1Background" className="block text-sm font-medium text-foreground mb-2">
                    Partner 1 Background (region, language, religion/tradition)
                  </label>
                  <input
                    type="text"
                    id="partner1Background"
                    name="partner1Background"
                    placeholder="e.g., Gujarati Hindu from Mumbai"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="partner2Background" className="block text-sm font-medium text-foreground mb-2">
                    Partner 2 Background (region, language, religion/tradition)
                  </label>
                  <input
                    type="text"
                    id="partner2Background"
                    name="partner2Background"
                    placeholder="e.g., Tamil Christian from Chennai"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="nonNegotiableRituals" className="block text-sm font-medium text-foreground mb-2">
                    Are there any non-negotiable rituals for your families?
                  </label>
                  <textarea
                    id="nonNegotiableRituals"
                    name="nonNegotiableRituals"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Events & Rituals */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-200">
              <h2 className="font-serif text-2xl text-foreground mb-6">Events & Rituals</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="ritualsDoNotWant" className="block text-sm font-medium text-foreground mb-2">
                    Are there any rituals you definitely do NOT want?
                  </label>
                  <textarea
                    id="ritualsDoNotWant"
                    name="ritualsDoNotWant"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="familyCultureNotes" className="block text-sm font-medium text-foreground mb-2">
                    Anything about your families, religion, or culture we should know upfront?
                  </label>
                  <textarea
                    id="familyCultureNotes"
                    name="familyCultureNotes"
                    rows={4}
                    placeholder="Language preferences, dietary restrictions, family dynamics, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Budget & Priorities */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-200">
              <h2 className="font-serif text-2xl text-foreground mb-6">Budget & Priorities</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Rough total wedding budget range
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="budgetRange" value="under50k" className="text-primary" />
                      <span className="text-foreground">Under $50k</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="budgetRange" value="50k-100k" className="text-primary" />
                      <span className="text-foreground">$50k - $100k</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="budgetRange" value="100k-200k" className="text-primary" />
                      <span className="text-foreground">$100k - $200k</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="budgetRange" value="200k-plus" className="text-primary" />
                      <span className="text-foreground">$200k+</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="budgetRange" value="prefer-not-say" className="text-primary" />
                      <span className="text-foreground">Prefer not to say yet</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="biggestWorries" className="block text-sm font-medium text-foreground mb-2">
                    What are your biggest worries about planning?
                  </label>
                  <textarea
                    id="biggestWorries"
                    name="biggestWorries"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* How You Found CeremonyVerse */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-200">
              <h2 className="font-serif text-2xl text-foreground mb-6">How You Found CeremonyVerse</h2>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">How did you hear about us?</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="howFoundUs" value="google" className="text-primary" />
                    <span className="text-foreground">Google search</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="howFoundUs" value="instagram" className="text-primary" />
                    <span className="text-foreground">Instagram</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="howFoundUs" value="friend" className="text-primary" />
                    <span className="text-foreground">Friend referral</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="howFoundUs" value="vendor" className="text-primary" />
                    <span className="text-foreground">Vendor referral</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="howFoundUs" value="other" className="text-primary" />
                    <span className="text-foreground">Other (specify below)</span>
                  </label>
                </div>
                <input
                  type="text"
                  name="howFoundUsOther"
                  placeholder="Please specify"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </section>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 px-12">
                Submit Questionnaire
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                We'll review your information and reach out within 1-2 business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
