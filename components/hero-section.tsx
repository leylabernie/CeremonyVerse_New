"use client"

import Link from "next/link"
import { ArrowRight, Shield, Sparkles, Calendar, Heart, Users } from "@/components/icons"

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center texture-cream pt-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 py-8 space-y-8">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md border-2 border-accent/30 rounded-full shadow-lg">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-xs font-serif font-semibold text-charcoal tracking-[0.15em] uppercase">
            Expert Indian & Multicultural Fusion Wedding Planning
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] text-charcoal tracking-tight text-balance">
          Indian & Multicultural Fusion
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-medium">
            Wedding Planning
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-charcoal/80 font-serif font-light leading-relaxed max-w-2xl mx-auto text-pretty">
          From traditional ceremonies to modern fusions, we bring your wedding vision to life with personalized
          planning, verified vendors, and cultural expertise.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
          <div className="flex items-center gap-2 text-charcoal">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-lg font-serif font-medium">Personalized Service</span>
          </div>
          <div className="flex items-center gap-2 text-charcoal">
            <Users className="h-5 w-5 text-accent" />
            <span className="text-lg font-serif font-medium">Cultural Expertise</span>
          </div>
          <div className="flex items-center gap-2 text-charcoal">
            <Shield className="h-5 w-5 text-secondary" />
            <span className="text-lg font-serif font-medium">Verified Vendors</span>
          </div>
        </div>

        <div className="pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary hover:bg-accent text-white hover:text-charcoal text-lg h-16 px-12 font-serif font-semibold tracking-wide shadow-2xl shadow-primary/30 hover:shadow-accent/30 transition-all duration-300 border-2 border-transparent hover:border-accent rounded-md"
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-charcoal/70 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-serif">Verified Vendors</span>
          </div>
          <div className="w-px h-4 bg-charcoal/30" />
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-accent" />
            <span className="font-serif">Booking 2025-2026</span>
          </div>
          <div className="w-px h-4 bg-charcoal/30" />
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="font-serif">Free Consultation</span>
          </div>
        </div>
      </div>
    </section>
  )
}
