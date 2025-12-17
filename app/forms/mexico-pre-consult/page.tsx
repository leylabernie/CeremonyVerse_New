"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import { Check } from "lucide-react"

export default function MexicoPreConsultForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    // TODO: Integrate with your email/CRM system
    console.log("Mexico pre-consult form submitted:", data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-serif text-4xl text-foreground mb-4">Thank You!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We've received your Mexico wedding inquiry and will be in touch within 1-2 business days to discuss your
              destination celebration.
            </p>
            <Button asChild>
              <a href="/">Return to Homepage</a>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Destination Wedding (Mexico) Pre-Consult Form
            </h1>
            <p className="text-lg text-muted-foreground">
              Share your Mexico wedding vision with us so we can create the perfect proposal for your destination
              celebration.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Basic Details */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">Basic Details</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="coupleName" className="block text-sm font-medium text-foreground mb-2">
                      Couple Names <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="coupleName"
                      name="coupleName"
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="desiredMonth" className="block text-sm font-medium text-foreground mb-2">
                      Desired wedding month/year
                    </label>
                    <input
                      type="month"
                      id="desiredMonth"
                      name="desiredMonth"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Are dates flexible?</label>
                    <div className="flex gap-4 mt-3">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="datesFlexible" value="yes" className="text-primary" />
                        <span className="text-muted-foreground">Yes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="datesFlexible" value="somewhat" className="text-primary" />
                        <span className="text-muted-foreground">Somewhat</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="datesFlexible" value="no" className="text-primary" />
                        <span className="text-muted-foreground">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Destination Preferences */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">Destination Preferences</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Which regions are you considering?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="regions" value="cancun-riviera" className="text-primary" />
                      <span className="text-muted-foreground">Cancún / Riviera Maya</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="regions" value="los-cabos" className="text-primary" />
                      <span className="text-muted-foreground">Los Cabos</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="regions" value="puerto-vallarta" className="text-primary" />
                      <span className="text-muted-foreground">Puerto Vallarta / Nayarit</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="regions" value="not-sure" className="text-primary" />
                      <span className="text-muted-foreground">Not sure yet</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    What type of resort are you thinking?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="resortType" value="family-inclusive" className="text-primary" />
                      <span className="text-muted-foreground">Family-friendly all-inclusive</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="resortType" value="adults-only" className="text-primary" />
                      <span className="text-muted-foreground">Adults-only all-inclusive</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="resortType" value="luxury-boutique" className="text-primary" />
                      <span className="text-muted-foreground">Luxury boutique</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="resortType" value="not-sure" className="text-primary" />
                      <span className="text-muted-foreground">Not sure yet</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Guest & Travel Info */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">Guest & Travel Info</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="guestEstimate" className="block text-sm font-medium text-foreground mb-2">
                      Estimated number of guests
                    </label>
                    <input
                      type="number"
                      id="guestEstimate"
                      name="guestEstimate"
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="expectedTravelers" className="block text-sm font-medium text-foreground mb-2">
                      How many do you realistically expect will travel?
                    </label>
                    <input
                      type="number"
                      id="expectedTravelers"
                      name="expectedTravelers"
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="departureCities" className="block text-sm font-medium text-foreground mb-2">
                    Main departure cities for guests (US/Canada)
                  </label>
                  <input
                    type="text"
                    id="departureCities"
                    name="departureCities"
                    placeholder="e.g., New York, Los Angeles, Toronto"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Will many guests need visa support letters or special documentation?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="visaSupport" value="yes" className="text-primary" />
                      <span className="text-muted-foreground">Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="visaSupport" value="no" className="text-primary" />
                      <span className="text-muted-foreground">No</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="visaSupport" value="notsure" className="text-primary" />
                      <span className="text-muted-foreground">Not sure</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Events You Want in Mexico */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">Events You Want in Mexico</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Which events do you want to have in Mexico? (Check all that apply)
                  </label>
                  <fieldset className="space-y-2">
                    <legend className="sr-only">Event selection</legend>
                    {[
                      "Mehndi",
                      "Sangeet/Garba",
                      "Pithi/Haldi",
                      "Hindu ceremony",
                      "Church ceremony",
                      "Legal/civil ceremony",
                      "Reception",
                      "Pool party / welcome party",
                      "Beach brunch",
                    ].map((event) => (
                      <label key={event} className="flex items-center gap-2">
                        <input type="checkbox" name="events" value={event} className="text-primary" />
                        <span className="text-muted-foreground">{event}</span>
                      </label>
                    ))}
                  </fieldset>
                </div>
                <div>
                  <label htmlFor="usEvents" className="block text-sm font-medium text-foreground mb-2">
                    Any events in the US in addition to Mexico?
                  </label>
                  <textarea
                    id="usEvents"
                    name="usEvents"
                    rows={3}
                    placeholder="Describe any US events you're planning"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Priorities & Concerns */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">Priorities & Concerns</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    What's most important to you about a Mexico wedding? (Select up to 3)
                  </label>
                  <fieldset className="space-y-2">
                    <legend className="sr-only">Priority selection</legend>
                    {[
                      "Easy travel for guests",
                      "Strong vegetarian/vegan options",
                      "Late-night music flexibility",
                      "Being able to do fire rituals",
                      "Budget / value",
                      "Resort aesthetics (modern vs traditional)",
                    ].map((priority) => (
                      <label key={priority} className="flex items-center gap-2">
                        <input type="checkbox" name="priorities" value={priority} className="text-primary" />
                        <span className="text-muted-foreground">{priority}</span>
                      </label>
                    ))}
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="priorities" value="other" className="text-primary" />
                      <span className="text-muted-foreground">Other (specify below)</span>
                    </label>
                  </fieldset>
                  <input
                    type="text"
                    name="prioritiesOther"
                    placeholder="Other priorities"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="concerns" className="block text-sm font-medium text-foreground mb-2">
                    Any concerns at the moment?
                  </label>
                  <textarea
                    id="concerns"
                    name="concerns"
                    rows={4}
                    placeholder="e.g., worried about older guests traveling, not sure how Indian rituals fit into resort rules, overwhelmed by resort choices"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Travel & Team */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">Travel & Team</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Do you currently have a travel advisor or travel agency for your group?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="hasTravelAdvisor" value="yes" className="text-primary" />
                      <span className="text-muted-foreground">Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="hasTravelAdvisor" value="no" className="text-primary" />
                      <span className="text-muted-foreground">No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="shortlistedResorts" className="block text-sm font-medium text-foreground mb-2">
                    Have you already shortlisted any resorts?
                  </label>
                  <textarea
                    id="shortlistedResorts"
                    name="shortlistedResorts"
                    rows={3}
                    placeholder="List any resorts you're considering"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* How You Want Help */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">How You Want Help</h2>
              <div>
                <label htmlFor="helpNeeded" className="block text-sm font-medium text-foreground mb-2">
                  What are you hoping CeremonyVerse will handle for you?
                </label>
                <textarea
                  id="helpNeeded"
                  name="helpNeeded"
                  rows={4}
                  placeholder="e.g., planning, rituals, décor, coordination, vendor sourcing, etc."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </section>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 px-12">
                Submit Mexico Wedding Inquiry
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                We'll review your information and reach out within 1-2 business days.
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}
