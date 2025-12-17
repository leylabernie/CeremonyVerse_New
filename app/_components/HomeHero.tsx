"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar } from "@/components/icons"

export default function HomeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-cream via-ivory to-accent/10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full mb-8 text-xs sm:text-sm text-charcoal/70 font-light">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Multi-day Indian weddings planned with cultural clarity
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-charcoal mb-6 leading-tight tracking-tight">
          Indian & Fusion Weddings,
          <br />
          <span className="text-accent font-light">Planned with Cultural Clarity</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-charcoal/80 font-light max-w-3xl mx-auto mb-4 leading-relaxed">
          Multi-day Indian weddings require experience, structure, and respect for tradition.
        </p>

        <p className="text-base sm:text-lg text-charcoal/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          CeremonyVerse plans and coordinates weddings that honor heritage while executing seamlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            asChild
            className="bg-primary text-white hover:bg-accent hover:text-charcoal h-14 px-10 font-medium text-base shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/book-consultation">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Consultation
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-14 px-10 bg-white/70 backdrop-blur-sm border-primary/30 hover:bg-white hover:border-accent transition-all"
          >
            <Link href="/wedding-journeys">
              View Wedding Journeys
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
