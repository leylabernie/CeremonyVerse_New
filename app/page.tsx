import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Calendar, Users, MapPin } from "@/components/icons"
import Image from "next/image"

import HomeHero from "@/app/_components/HomeHero"
import { TrustStrip } from "@/components/trust-badges"

export const metadata: Metadata = {
  title: "Indian Wedding Planner USA | Multicultural Fusion & Gujarati, Tamil Christian Specialists – CeremonyVerse",
  description:
    "CeremonyVerse plans Indian and multicultural fusion weddings across the USA and Mexico. Specializing in Gujarati Hindu, Tamil Christian and Indian-American fusion weddings, with virtual shopping from India and verified vendors.",
  alternates: {
    canonical: "https://www.ceremonyverse.com",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HomeHero />

      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-warm-beige/30">
        <div className="max-w-5xl mx-auto">
          <TrustStrip />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-extralight text-charcoal mb-6 tracking-tight">
              Indian Weddings Are Not One-Day Events
            </h2>
            <div className="w-24 h-px bg-accent mx-auto" />
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-3">Multiple Ceremonies</h3>
              <p className="text-charcoal/60 text-sm font-light leading-relaxed">
                Mehendi, Haldi, Sangeet, Wedding, Reception — each with its own timeline and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-3">Cultural Precision</h3>
              <p className="text-charcoal/60 text-sm font-light leading-relaxed">
                Gujarati, South Indian, Punjabi, Jain, and fusion ceremonies planned accurately.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-3">Guest Experience</h3>
              <p className="text-charcoal/60 text-sm font-light leading-relaxed">
                Smooth transitions, clear scheduling, and stress-free flow for families and guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-extralight text-charcoal mb-6 tracking-tight">
              How We Plan Real Indian Weddings
            </h2>
            <div className="w-24 h-px bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-cream p-8 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center text-accent font-serif text-xl">
                1
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-3">Understand Traditions</h3>
              <p className="text-charcoal/60 text-sm font-light leading-relaxed">
                Gujarati, South Indian, Punjabi, Jain, and fusion ceremonies planned with cultural accuracy.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center text-accent font-serif text-xl">
                2
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-3">Design & Coordinate</h3>
              <p className="text-charcoal/60 text-sm font-light leading-relaxed">
                Vendor coordination, décor flow, and India sourcing when required.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center text-accent font-serif text-xl">
                3
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-3">Execute Seamlessly</h3>
              <p className="text-charcoal/60 text-sm font-light leading-relaxed">
                Multi-day timelines, guest experience planning, and milestone-based payments.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/wedding-journeys"
              className="inline-flex items-center justify-center bg-primary text-white hover:bg-accent hover:text-charcoal h-12 px-10 font-medium rounded-md transition-colors"
            >
              See Wedding Journeys
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-extralight text-charcoal mb-6 tracking-tight">
              Our Services
            </h2>
            <div className="w-24 h-px bg-accent mx-auto mb-6" />
            <p className="text-charcoal/60 text-lg font-light max-w-2xl mx-auto">
              Planning services built for multi-day Indian celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 border border-warm-beige/40 hover:border-primary transition-colors">
              <h3 className="font-serif text-2xl font-light mb-3 text-charcoal">Full Wedding Planning</h3>
              <p className="text-charcoal/70 font-light leading-relaxed mb-4">
                End-to-end planning for multi-day Indian and fusion weddings, including cultural guidance, vendor
                coordination, timelines, and execution.
              </p>
            </div>

            <div className="bg-white p-8 border border-warm-beige/40 hover:border-primary transition-colors">
              <h3 className="font-serif text-2xl font-light mb-3 text-charcoal">Partial Planning & Coordination</h3>
              <p className="text-charcoal/70 font-light leading-relaxed mb-4">
                For couples who have started planning and need structure, timelines, and professional coordination.
              </p>
            </div>

            <div className="bg-white p-8 border border-warm-beige/40 hover:border-primary transition-colors">
              <h3 className="font-serif text-2xl font-light mb-3 text-charcoal">Virtual Planning & India Sourcing</h3>
              <p className="text-charcoal/70 font-light leading-relaxed mb-4">
                Remote planning support and India sourcing coordination for attire, décor, and ceremonial items.
              </p>
            </div>
          </div>

          <p className="text-center text-charcoal/60 text-sm font-light mb-8">
            Secure, milestone-based payments via Stripe, PayPal, and Zelle.
          </p>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-primary text-white hover:bg-accent hover:text-charcoal h-12 px-10 font-medium rounded-md transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-serif font-light text-charcoal leading-relaxed mb-8">
            "The structured payment process and clear milestones gave us complete peace of mind throughout planning.
            CeremonyVerse understood both our Hindu traditions and Christian ceremony needs perfectly."
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-accent" />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/beach-sunset-wedding-couple.jpg"
              alt="Happy couple"
              width={80}
              height={80}
              className="rounded-full mb-4 object-cover"
              loading="lazy"
            />
            <p className="font-serif text-lg text-charcoal font-medium">Priya & Michael</p>
            <p className="text-sm text-charcoal/60 font-light">Chicago, IL</p>
          </div>
          <div className="mt-10">
            <Link
              href="/wedding-journeys"
              className="inline-flex items-center justify-center border border-charcoal/30 bg-transparent text-charcoal hover:bg-charcoal/5 h-12 px-10 font-medium rounded-md transition-colors"
            >
              View Wedding Journeys
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl sm:text-5xl font-extralight text-charcoal leading-tight tracking-tight">
            Planning an Indian or
            <br />
            Fusion Wedding?
          </h2>

          <div className="w-24 h-px bg-accent mx-auto" />

          <p className="text-xl text-charcoal/70 font-light leading-relaxed max-w-xl mx-auto">
            Schedule your free consultation today and let us bring your vision to life with cultural clarity and
            seamless execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center bg-primary text-white hover:bg-accent hover:text-charcoal h-14 px-12 font-medium tracking-wide text-base rounded-md transition-colors"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <p className="text-sm text-charcoal/50 font-light">
            Free consultation · No obligation · Secure & confidential
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
