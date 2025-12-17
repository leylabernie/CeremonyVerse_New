"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import { Check } from "lucide-react"

export default function VirtualShoppingForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    // TODO: Integrate with your email/CRM system
    console.log("Virtual shopping form submitted:", data)
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
            <h1 className="font-serif text-4xl text-foreground mb-4">Shopping Request Received!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We'll review your shopping wishlist and be in touch within 2-3 business days with curated options.
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
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Virtual Shopping & Sourcing Form</h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your outfit and jewelry needs so we can curate the perfect options from India.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Basic Context */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">Basic Context</h2>
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
                    <label htmlFor="weddingDate" className="block text-sm font-medium text-foreground mb-2">
                      Wedding Date(s)
                    </label>
                    <input
                      type="date"
                      id="weddingDate"
                      name="weddingDate"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="venue" className="block text-sm font-medium text-foreground mb-2">
                    City / Venue (if known)
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Outfits are for: (Check all that apply)
                  </label>
                  <fieldset className="space-y-2">
                    <legend className="sr-only">Who needs outfits</legend>
                    {["Bride", "Groom", "Parents", "Siblings / wedding party"].map((person) => (
                      <label key={person} className="flex items-center gap-2">
                        <input type="checkbox" name="outfitsFor" value={person} className="text-primary" />
                        <span className="text-muted-foreground">{person}</span>
                      </label>
                    ))}
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="outfitsFor" value="other" className="text-primary" />
                      <span className="text-muted-foreground">Other (specify)</span>
                    </label>
                  </fieldset>
                  <input
                    type="text"
                    name="outfitsForOther"
                    placeholder="Other"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Events & Outfit Needs */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">Events & Outfit Needs</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Which events do you need outfits for?
                  </label>
                  <fieldset className="space-y-4">
                    <legend className="sr-only">Event outfit selection</legend>
                    {["Mehndi", "Garba/Sangeet", "Pithi/Haldi", "Ceremony", "Reception"].map((event) => (
                      <div key={event} className="border border-gray-200 p-4 rounded-lg">
                        <label className="flex items-center gap-2 mb-3">
                          <input type="checkbox" name={`event_${event}`} value={event} className="text-primary" />
                          <span className="font-medium text-foreground">{event}</span>
                        </label>
                        <div className="ml-6 space-y-2">
                          <label className="block text-sm text-muted-foreground">
                            Do you already have an outfit for this event?
                          </label>
                          <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                              <input type="radio" name={`hasOutfit_${event}`} value="yes" className="text-primary" />
                              <span className="text-sm text-muted-foreground">Yes</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="radio" name={`hasOutfit_${event}`} value="no" className="text-primary" />
                              <span className="text-sm text-muted-foreground">No</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                name={`hasOutfit_${event}`}
                                value="notsure"
                                className="text-primary"
                              />
                              <span className="text-sm text-muted-foreground">Not sure</span>
                            </label>
                          </div>
                          <input
                            type="text"
                            name={`outfitType_${event}`}
                            placeholder="What type of outfit are you considering? (saree, lehenga, gown, sherwani, etc.)"
                            className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                      </div>
                    ))}
                  </fieldset>
                </div>
              </div>
            </section>

            {/* Style Preferences */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">Style Preferences</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="designers" className="block text-sm font-medium text-foreground mb-2">
                    Designers you like (Indian or Western)
                  </label>
                  <input
                    type="text"
                    id="designers"
                    name="designers"
                    placeholder="Sabyasachi, Anita Dongre, Vera Wang, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="inspirationLinks" className="block text-sm font-medium text-foreground mb-2">
                    Pinterest/Instagram links or mood boards
                  </label>
                  <textarea
                    id="inspirationLinks"
                    name="inspirationLinks"
                    rows={3}
                    placeholder="Paste URLs here"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="styleWords" className="block text-sm font-medium text-foreground mb-2">
                    3 words to describe your ideal look
                  </label>
                  <input
                    type="text"
                    id="styleWords"
                    name="styleWords"
                    placeholder="e.g., royal, elegant, minimal"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Budget */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">Budget</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budgetBridal" className="block text-sm font-medium text-foreground mb-2">
                      Bridal ceremony outfit budget
                    </label>
                    <input
                      type="text"
                      id="budgetBridal"
                      name="budgetBridal"
                      placeholder="e.g., $3,000 - $8,000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="budgetGroom" className="block text-sm font-medium text-foreground mb-2">
                      Groom outfits budget
                    </label>
                    <input
                      type="text"
                      id="budgetGroom"
                      name="budgetGroom"
                      placeholder="e.g., $1,000 - $3,000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Total estimated budget for shopping
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="totalBudget" value="under10k" className="text-primary" />
                      <span className="text-muted-foreground">Under $10k</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="totalBudget" value="10k-20k" className="text-primary" />
                      <span className="text-muted-foreground">$10k - $20k</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="totalBudget" value="20k-plus" className="text-primary" />
                      <span className="text-muted-foreground">Over $20k</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="totalBudget" value="need-guidance" className="text-primary" />
                      <span className="text-muted-foreground">Need guidance</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Measurements & Fit */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">Measurements & Fit</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Will you provide detailed measurements later via our measurement form?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="provideMeasurements" value="yes" className="text-primary" />
                      <span className="text-muted-foreground">Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="provideMeasurements" value="no" className="text-primary" />
                      <span className="text-muted-foreground">No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="fitConcerns" className="block text-sm font-medium text-foreground mb-2">
                    Any fit concerns we should know?
                  </label>
                  <textarea
                    id="fitConcerns"
                    name="fitConcerns"
                    rows={3}
                    placeholder="e.g., broad shoulders, petite, plus size, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Shipping & Logistics */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">Shipping & Logistics</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="shippingCountry" className="block text-sm font-medium text-foreground mb-2">
                      Shipping destination country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="shippingCountry"
                      name="shippingCountry"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="shippingCity" className="block text-sm font-medium text-foreground mb-2">
                      Shipping destination city <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="shippingCity"
                      name="shippingCity"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Are you open to:</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="shippingPreferences" value="separate" className="text-primary" />
                      <span className="text-muted-foreground">Separate shipments per vendor</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="shippingPreferences" value="combined" className="text-primary" />
                      <span className="text-muted-foreground">
                        Combined shipments when possible (to reduce customs complexity)
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal/Policy Acknowledgement */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10">
              <h2 className="font-serif text-2xl text-foreground mb-6">Important Acknowledgements</h2>
              <div className="space-y-4">
                <label className="flex items-start gap-3">
                  <input type="checkbox" name="acknowledge1" required className="text-primary mt-1" />
                  <span className="text-sm text-muted-foreground">
                    I understand CeremonyVerse coordinates shopping and sourcing and is not the manufacturer or
                    retailer.
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" name="acknowledge2" required className="text-primary mt-1" />
                  <span className="text-sm text-muted-foreground">
                    I understand most Indian designers and boutiques have limited or no returns.
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" name="acknowledge3" required className="text-primary mt-1" />
                  <span className="text-sm text-muted-foreground">
                    I understand the service fee is separate from product costs.
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" name="acknowledge4" required className="text-primary mt-1" />
                  <span className="text-sm text-muted-foreground">
                    I understand I fund all product purchases in advance and customs duties/taxes are my responsibility.
                  </span>
                </label>
              </div>
            </section>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 px-12">
                Submit Shopping Request
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                We'll curate options and reach out within 2-3 business days.
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}
