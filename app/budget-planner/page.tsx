"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Download, Calculator, TrendingDown, CheckCircle, Phone } from "@/components/icons"
import { Footer } from "@/components/footer"

export default function BudgetPlannerPage() {
  const [totalBudget, setTotalBudget] = useState<number>(75000)
  const [guestCount, setGuestCount] = useState<number>(200)

  // Budget allocation percentages for Indian-American fusion weddings
  const budgetCategories = [
    { name: "Venue & Catering", percentage: 40, color: "bg-primary/20 border-primary" },
    { name: "Photography & Videography", percentage: 12, color: "bg-secondary/20 border-secondary" },
    { name: "Bridal Attire & Jewelry", percentage: 10, color: "bg-accent/20 border-accent" },
    { name: "Groom & Family Attire", percentage: 6, color: "bg-primary/15 border-primary" },
    { name: "Decor & Florals", percentage: 10, color: "bg-secondary/15 border-secondary" },
    { name: "Entertainment & DJ", percentage: 8, color: "bg-accent/15 border-accent" },
    { name: "Invitations & Stationery", percentage: 3, color: "bg-primary/10 border-primary" },
    { name: "Wedding Favors & Gifts", percentage: 4, color: "bg-secondary/10 border-secondary" },
    { name: "Mehendi, Sangeet & Pre-Events", percentage: 5, color: "bg-accent/10 border-accent" },
    { name: "Miscellaneous & Contingency", percentage: 2, color: "bg-muted border-border" },
  ]

  const calculateAmount = (percentage: number) => {
    return ((totalBudget * percentage) / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  const perPersonCost = (totalBudget / guestCount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calculator className="h-4 w-4" />
                Free Wedding Budget Tool
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Plan Your Dream Wedding <span className="text-primary">Within Budget</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Use our interactive budget calculator designed specifically for Indian-American fusion weddings. Get
                realistic cost breakdowns, money-saving tips, and expert guidance to make every dollar count.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Budget Calculator */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Section */}
              <div>
                <Card className="p-8 border-2">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Budget Calculator</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Total Wedding Budget ($)</label>
                      <Input
                        type="number"
                        value={totalBudget}
                        onChange={(e) => setTotalBudget(Number(e.target.value))}
                        className="text-lg"
                        min="10000"
                        step="5000"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Average Indian-American fusion wedding: $50,000 - $150,000
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Number of Guests</label>
                      <Input
                        type="number"
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="text-lg"
                        min="50"
                        step="10"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Typical range: 150-300 guests for fusion weddings
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">Cost Per Guest</span>
                        <span className="text-2xl font-bold text-primary">{perPersonCost}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        This helps you understand the per-person investment for your celebration
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Quick Tips */}
                <Card className="p-6 mt-6 bg-secondary/5 border-secondary/20">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-secondary" />
                    Quick Budget Tip
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Allocate 10-15% of your budget as a contingency fund for unexpected expenses. Indian-American fusion
                    weddings often have surprise costs related to customs, additional events, or last-minute family
                    requests.
                  </p>
                </Card>
              </div>

              {/* Budget Breakdown */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Recommended Budget Allocation</h2>
                <div className="space-y-4">
                  {budgetCategories.map((category, index) => (
                    <Card key={index} className={`p-4 border ${category.color}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{category.name}</h3>
                        <span className="text-sm font-medium text-muted-foreground">{category.percentage}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 bg-muted rounded-full h-2 mr-4">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${category.percentage}%` }}
                          />
                        </div>
                        <span className="text-lg font-bold text-foreground">
                          {calculateAmount(category.percentage)}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-foreground">
                    <strong>Note:</strong> These percentages are based on industry standards for Indian-American fusion
                    weddings. Your actual allocation may vary based on priorities, location, and cultural requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Templates */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Download Budget Templates
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get our detailed Excel templates with itemized breakdowns for different wedding sizes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Intimate Wedding */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Intimate Wedding</h3>
                  <p className="text-sm text-muted-foreground mb-4">50-100 Guests</p>
                  <p className="text-2xl font-bold text-primary mb-4">$30K - $50K</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Detailed line-item budget</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Vendor payment schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Cost-saving alternatives</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-transparent" variant="outline">
                  <a href="/contact">
                    Download Template
                  </a>
                </Button>
              </Card>

              {/* Traditional Wedding */}
              <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-primary relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Traditional Wedding</h3>
                  <p className="text-sm text-muted-foreground mb-4">150-250 Guests</p>
                  <p className="text-2xl font-bold text-primary mb-4">$75K - $125K</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Multi-day event breakdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Cultural ceremony costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Vendor comparison sheets</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <a href="/contact">Download Template</a>
                </Button>
              </Card>

              {/* Luxury Wedding */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Luxury Wedding</h3>
                  <p className="text-sm text-muted-foreground mb-4">300+ Guests</p>
                  <p className="text-2xl font-bold text-primary mb-4">$150K+</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Premium vendor categories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Destination wedding costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Luxury service add-ons</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-transparent" variant="outline">
                  <a href="/contact">
                    Download Template
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Money-Saving Tips */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Smart Ways to Save on Your Fusion Wedding
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert tips to reduce costs without compromising on cultural authenticity or quality
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Shop Directly from India with CeremonyVerse",
                  description:
                    "Save 40-60% on bridal attire, jewelry, and decor by sourcing authentic items directly from verified Indian suppliers through our Virtual Shopping Concierge. We handle quality checks and shipping.",
                  savings: "Save $8,000 - $15,000",
                },
                {
                  title: "Choose Off-Peak Wedding Dates",
                  description:
                    "Book your wedding during off-peak months (January-March, July-August) to save 20-30% on venue and vendor costs. Many venues offer significant discounts for weekday weddings.",
                  savings: "Save $5,000 - $10,000",
                },
                {
                  title: "Combine Mehendi & Sangeet Events",
                  description:
                    "Host your Mehendi and Sangeet on the same day at the same venue to reduce rental, catering, and decor costs while maintaining the cultural significance of both ceremonies.",
                  savings: "Save $3,000 - $6,000",
                },
                {
                  title: "DIY Invitations & Favors",
                  description:
                    "Create beautiful digital invitations with cultural motifs and assemble wedding favors yourself. We provide templates and supplier connections for materials at wholesale prices.",
                  savings: "Save $1,500 - $3,000",
                },
                {
                  title: "Limit Bar Service Hours",
                  description:
                    "Offer a full bar only during cocktail hour and reception, then switch to beer, wine, and signature drinks. This significantly reduces alcohol costs without disappointing guests.",
                  savings: "Save $2,000 - $4,000",
                },
                {
                  title: "Rent Instead of Buy Decor",
                  description:
                    "Rent mandap decorations, backdrops, and centerpieces instead of purchasing. Our verified vendors offer rental packages specifically for Indian ceremonies at 60% less than buying.",
                  savings: "Save $4,000 - $8,000",
                },
                {
                  title: "Negotiate Package Deals",
                  description:
                    "Bundle services with the same vendor (photography + videography, or catering + bar service). We negotiate on your behalf to secure 15-25% discounts on package deals.",
                  savings: "Save $3,000 - $7,000",
                },
                {
                  title: "Limit Guest List Strategically",
                  description:
                    "Invite extended family to the ceremony and immediate family/close friends to the reception. This honors cultural traditions while significantly reducing per-person costs.",
                  savings: "Save $10,000 - $20,000",
                },
              ].map((tip, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <TrendingDown className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{tip.description}</p>
                      <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold">
                        {tip.savings}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Help Planning Your Budget?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our wedding planning experts will review your budget, identify savings opportunities, and create a
              customized plan that honors your heritage without breaking the bank.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+12153419990" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call +1-215-341-9990
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Free 30-minute consultation • No obligation • Expert guidance
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
