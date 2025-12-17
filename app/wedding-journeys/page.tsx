import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { ArrowRight, ChevronDown } from "@/components/icons"

export const metadata: Metadata = {
  title: "Real Indian & Fusion Wedding Journeys | CeremonyVerse",
  description:
    "Explore how CeremonyVerse plans and executes Indian and fusion weddings with cultural expertise, thoughtful coordination, and seamless execution.",
  keywords: [
    "Indian wedding planning",
    "fusion wedding journeys",
    "multicultural wedding coordinator",
    "Indian wedding case studies",
    "destination Indian wedding",
  ],
  openGraph: {
    title: "Real Indian & Fusion Wedding Journeys | CeremonyVerse",
    description:
      "Explore how CeremonyVerse plans and executes Indian and fusion weddings with cultural expertise, thoughtful coordination, and seamless execution.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ceremonyverse.com/wedding-journeys",
  },
}

const weddingJourneys = [
  {
    title: "Gujarati–Tamil Fusion Wedding | New Jersey",
    content: {
      weddingType: "Gujarati & South Indian Fusion",
      eventsCoordinated: "Mehendi, Haldi, Wedding Ceremony, Reception",
      guestCount: "250+",
      planningScope: "Full-Service Planning",
      challenges: [
        "Aligning Gujarati and South Indian rituals",
        "Coordinating priests and ceremony timelines",
        "Managing guest flow across multiple events",
      ],
      indiaSourcing: "Bridal sarees and custom jewelry coordination",
      outcome: "Seamless execution with culturally respectful ceremonies and smooth transitions between events.",
    },
  },
  {
    title: "North Indian Destination Wedding | Mexico",
    content: {
      weddingType: "North Indian Destination Wedding",
      eventsCoordinated: "Welcome Dinner, Mehendi, Sangeet, Wedding, Reception",
      guestCount: "180",
      planningScope: "Destination Planning & Vendor Coordination",
      challenges: [
        "Local venue adaptation for Indian rituals",
        "Vendor communication across countries",
        "Baraat and ceremony logistics",
      ],
      indiaSourcing: "Décor elements and ceremonial items",
      outcome: "A destination wedding that preserved tradition while fitting the venue and location.",
    },
  },
  {
    title: "Modern Fusion Wedding | California",
    content: {
      weddingType: "Indian–American Fusion",
      eventsCoordinated: "Intimate Ceremony, Reception",
      guestCount: "120",
      planningScope: "Partial Planning",
      challenges: ["Blending cultural expectations", "Guest experience design", "Timeline optimization"],
      indiaSourcing: "None",
      outcome: "A modern celebration with meaningful cultural elements and smooth execution.",
    },
  },
  {
    title: "Traditional Gujarati Wedding | East Coast",
    content: {
      weddingType: "Gujarati Wedding",
      eventsCoordinated: "Mehendi, Garba Night, Wedding, Reception",
      guestCount: "300+",
      planningScope: "Full Planning & Coordination",
      challenges: ["Multi-day event scheduling", "Vendor coordination", "Family expectation management"],
      indiaSourcing: "Attire and ceremonial items",
      outcome: "A well-orchestrated, tradition-forward wedding executed on time and without disruption.",
    },
  },
]

function WeddingJourneyCard({
  journey,
  index,
}: {
  journey: (typeof weddingJourneys)[0]
  index: number
}) {
  return (
    <details className="group border border-warm-beige/40 rounded-lg overflow-hidden">
      <summary className="flex items-center justify-between p-6 cursor-pointer bg-cream hover:bg-cream/80 transition-colors list-none">
        <h3 className="font-serif text-xl text-charcoal">{journey.title}</h3>
        <ChevronDown className="h-5 w-5 text-charcoal/60 group-open:rotate-180 transition-transform" />
      </summary>
      <div className="p-6 bg-white space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-charcoal/60 mb-1">Wedding Type</p>
            <p className="text-charcoal">{journey.content.weddingType}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-charcoal/60 mb-1">Events Coordinated</p>
            <p className="text-charcoal">{journey.content.eventsCoordinated}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-charcoal/60 mb-1">Guest Count</p>
            <p className="text-charcoal">{journey.content.guestCount}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-charcoal/60 mb-1">Planning Scope</p>
            <p className="text-charcoal">{journey.content.planningScope}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-charcoal/60 mb-2">Key Challenges Solved</p>
          <ul className="space-y-1">
            {journey.content.challenges.map((challenge, i) => (
              <li key={i} className="flex items-start gap-2 text-charcoal">
                <span className="text-primary mt-1">•</span>
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-charcoal/60 mb-1">India Sourcing</p>
          <p className="text-charcoal">{journey.content.indiaSourcing}</p>
        </div>

        <div className="pt-4 border-t border-warm-beige/40">
          <p className="text-sm font-medium text-charcoal/60 mb-1">Outcome</p>
          <p className="text-charcoal font-medium">{journey.content.outcome}</p>
        </div>
      </div>
    </details>
  )
}

export default function WeddingJourneysPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 lg:pt-36">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Real Indian & Fusion Wedding Journeys
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            How CeremonyVerse plans, coordinates, and executes complex multi-day Indian weddings with cultural respect
            and clarity.
          </p>
          <Link href="/book-consultation">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What You'll Find Here</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            These wedding journeys focus on planning strategy, cultural coordination, and execution—not inspiration
            images. Indian and fusion weddings involve multiple ceremonies, families, traditions, and timelines. This
            page highlights how CeremonyVerse approaches those realities with structure, experience, and thoughtful
            planning.
          </p>
        </div>
      </section>

      {/* Wedding Journey Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-charcoal mb-8 text-center">Wedding Journeys</h2>
          <div className="space-y-4">
            {weddingJourneys.map((journey, index) => (
              <WeddingJourneyCard key={index} journey={journey} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Differentiation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-charcoal mb-8 text-center">Why Our Wedding Journeys Matter</h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {[
              "Indian weddings are complex and multi-layered",
              "Successful planning depends on process, not inspiration images",
              "We focus on cultural accuracy, timelines, and guest experience",
              "Payments are handled through secure, milestone-based invoicing via Stripe, PayPal, and Zelle",
              "Clear deliverables and checkpoints throughout planning",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-charcoal/80 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Planning an Indian or Fusion Wedding?</h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Whether you're planning locally or across borders, CeremonyVerse helps you navigate traditions, logistics,
            and execution with confidence.
          </p>
          <Link href="/book-consultation">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
