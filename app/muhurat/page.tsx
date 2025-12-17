"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Star, Sun, Moon } from "@/components/icons"
import { useState } from "react"

export default function MuhuratPage() {
  const [selectedMonth, setSelectedMonth] = useState("")
  const [selectedYear, setSelectedYear] = useState("")

  const auspiciousDates2025 = [
    { date: "January 15, 2025", day: "Wednesday", muhurat: "Morning 10:30 AM - 12:00 PM", nakshatra: "Rohini" },
    { date: "February 8, 2025", day: "Saturday", muhurat: "Evening 5:00 PM - 6:30 PM", nakshatra: "Pushya" },
    { date: "March 22, 2025", day: "Saturday", muhurat: "Morning 11:00 AM - 12:30 PM", nakshatra: "Uttara Phalguni" },
    { date: "April 18, 2025", day: "Friday", muhurat: "Evening 4:30 PM - 6:00 PM", nakshatra: "Magha" },
    { date: "May 9, 2025", day: "Friday", muhurat: "Morning 10:00 AM - 11:30 AM", nakshatra: "Mrigashira" },
    { date: "October 24, 2025", day: "Friday", muhurat: "Evening 5:30 PM - 7:00 PM", nakshatra: "Revati" },
    { date: "November 14, 2025", day: "Friday", muhurat: "Morning 11:00 AM - 12:30 PM", nakshatra: "Anuradha" },
    { date: "December 5, 2025", day: "Friday", muhurat: "Evening 4:00 PM - 5:30 PM", nakshatra: "Uttara Ashadha" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <Star className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Auspicious Wedding Dates</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6">
              Muhurat Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the most auspicious dates for your wedding ceremony based on Vedic astrology and traditional Hindu
              calendar
            </p>
          </div>

          {/* Important Note */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-12">
            <div className="flex gap-4">
              <Sun className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Personalized Consultation Recommended</h3>
                <p className="text-sm text-muted-foreground">
                  While these dates are generally auspicious, we recommend consulting with a Vedic astrologer for a
                  personalized muhurat based on your birth charts (Kundali). Contact us for a referral to trusted
                  astrologers.
                </p>
              </div>
            </div>
          </div>

          {/* Auspicious Dates for 2025 */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-light text-foreground mb-6">Auspicious Wedding Dates 2025</h2>
            <div className="grid gap-4">
              {auspiciousDates2025.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1">{item.date}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{item.day}</p>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="flex items-center gap-1">
                            <Sun className="h-4 w-4 text-accent" />
                            <span className="text-muted-foreground">Muhurat: {item.muhurat}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Moon className="h-4 w-4 text-secondary" />
                            <span className="text-muted-foreground">Nakshatra: {item.nakshatra}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="whitespace-nowrap bg-transparent">
                      Select Date
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-serif text-3xl font-light text-foreground mb-4">
              Need Help Choosing Your Perfect Date?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team can connect you with experienced Vedic astrologers and help you plan every detail of your
              auspicious celebration
            </p>
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="/book-consultation">Schedule Free Consultation</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
