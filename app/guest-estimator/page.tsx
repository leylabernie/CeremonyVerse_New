"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Plus, Minus } from "@/components/icons"

export default function GuestEstimatorPage() {
  const [familySide, setFamilySide] = useState({
    immediateFamily: 20,
    extendedFamily: 50,
    friends: 30,
    colleagues: 15,
  })

  const [groomSide, setGroomSide] = useState({
    immediateFamily: 20,
    extendedFamily: 50,
    friends: 30,
    colleagues: 15,
  })

  const totalGuests =
    Object.values(familySide).reduce((a, b) => a + b, 0) + Object.values(groomSide).reduce((a, b) => a + b, 0)

  const updateCount = (side: "family" | "groom", category: string, delta: number) => {
    if (side === "family") {
      setFamilySide((prev) => ({
        ...prev,
        [category]: Math.max(0, prev[category as keyof typeof prev] + delta),
      }))
    } else {
      setGroomSide((prev) => ({
        ...prev,
        [category]: Math.max(0, prev[category as keyof typeof prev] + delta),
      }))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Guest Count Estimator</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4">
              Plan Your Perfect Guest List
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Indian weddings typically host 300-500 guests. Use our estimator to plan your ideal celebration.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg mb-8">
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground mb-2">Total Estimated Guests</p>
              <p className="text-6xl font-bold text-primary">{totalGuests}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Bride's Side */}
              <div>
                <h3 className="font-serif text-2xl font-medium mb-6 text-center">Bride's Side</h3>
                <div className="space-y-4">
                  {Object.entries(familySide).map(([category, count]) => (
                    <div key={category} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="font-medium capitalize">{category.replace(/([A-Z])/g, " $1").trim()}</span>
                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateCount("family", category, -5)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-semibold">{count}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateCount("family", category, 5)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center mt-4 font-semibold text-lg">
                  Subtotal: {Object.values(familySide).reduce((a, b) => a + b, 0)}
                </p>
              </div>

              {/* Groom's Side */}
              <div>
                <h3 className="font-serif text-2xl font-medium mb-6 text-center">Groom's Side</h3>
                <div className="space-y-4">
                  {Object.entries(groomSide).map(([category, count]) => (
                    <div key={category} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="font-medium capitalize">{category.replace(/([A-Z])/g, " $1").trim()}</span>
                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateCount("groom", category, -5)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-semibold">{count}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateCount("groom", category, 5)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center mt-4 font-semibold text-lg">
                  Subtotal: {Object.values(groomSide).reduce((a, b) => a + b, 0)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
            <h3 className="font-serif text-2xl font-medium mb-4">
              Ready to Plan Your {totalGuests}-Guest Celebration?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get a personalized quote and timeline based on your guest count
            </p>
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={`/contact?guests=${totalGuests}`}>Get Custom Quote</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
