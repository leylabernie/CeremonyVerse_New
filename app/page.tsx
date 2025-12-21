import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian & Fusion Wedding Planning — Thoughtfully Designed to Fit Your Real Budget",
  description:
    "CeremonyVerse helps Indian and multicultural couples plan culturally aligned weddings, coordinate trusted vendors, and source the right outfits and ceremony essentials — without overspending or guesswork.",
  alternates: {
    canonical: "https://www.ceremonyverse.com",
  },
  openGraph: {
    title: "Indian & Fusion Wedding Planning — Thoughtfully Designed to Fit Your Real Budget",
    description:
      "CeremonyVerse helps Indian and multicultural couples plan culturally aligned weddings without overspending or guesswork.",
    url: "https://www.ceremonyverse.com",
    type: "website",
  },
  twitter: {
    title: "Indian & Fusion Wedding Planning — Thoughtfully Designed to Fit Your Real Budget",
    description:
      "CeremonyVerse helps Indian and multicultural couples plan culturally aligned weddings without overspending or guesswork.",
  },
}

export default function HomePage() {
  return (
    <>
      <Section className="pt-12 md:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-warm-2/40 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="grid gap-12 md:grid-cols-2 md:items-center relative z-10">
          <div>
            <h1 className="text-text">
              Indian & Fusion Wedding Planning — Thoughtfully Designed to Fit Your Real Budget
            </h1>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              CeremonyVerse helps Indian and multicultural couples plan culturally aligned weddings, coordinate trusted
              vendors, and source the right outfits and ceremony essentials — without overspending or guesswork.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/start-planning">Start with Budget + Vision Form</Button>
              <Button href="/book" variant="secondary">
                Schedule a Free Consultation
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Clear Pricing
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Cultural Expertise
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Family-Friendly Planning
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Serving PA / NJ / DE / MD
              </span>
            </div>
          </div>

          <Card hover className="overflow-hidden p-0 aspect-[4/5] border-none">
            <Image
              src="/images/hero-couple.png"
              alt="Elegant Indian wedding couple in traditional attire"
              width={640}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </Card>
        </div>
      </Section>

      <Section variant="warm2">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-text mb-6">Who CeremonyVerse Is For</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">
                Couples planning an Indian or fusion wedding who want cultural accuracy
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">
                Families who need a realistic plan within a defined budget
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">
                Couples navigating parent expectations and ceremony details
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">
                Anyone who needs sourcing guidance without being pushed to overspend
              </span>
            </li>
          </ul>

          <div className="mt-12">
            <h2 className="text-text mb-6">Who We're Not For</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Ultra-luxury, unlimited-budget planning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">
                  A fully hands-off concierge model with no cost boundaries
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="warm">
        <h2 className="text-text mb-3">Choose Your Support Level</h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-4">
          Every engagement starts with understanding your budget and priorities.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card hover>
            <div className="inline-block px-3 py-1 rounded-full bg-warm-2 text-primary text-xs font-semibold mb-3">
              QUICKSTART
            </div>
            <h3 className="text-text">Planning Intensives</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Budget & Vision Roadmap session to map priorities, vendor strategy, and sourcing plan.
            </p>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Best for couples who need expert clarity before committing to a full plan.
            </p>
          </Card>

          <Card hover>
            <div className="inline-block px-3 py-1 rounded-full bg-warm-2 text-primary text-xs font-semibold mb-3">
              GUIDANCE
            </div>
            <h3 className="text-text">Partial Planning & Coordination</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Ongoing support with decision guidance, vendor shortlists, and timeline tracking.
            </p>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Best for couples who want guidance without full delegation.
            </p>
          </Card>

          <Card hover>
            <div className="inline-block px-3 py-1 rounded-full bg-warm-2 text-primary text-xs font-semibold mb-3">
              COMPREHENSIVE
            </div>
            <h3 className="text-text">Full Wedding Planning</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              End-to-end management with complete vendor coordination, budget oversight, and multi-day execution.
            </p>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Best for couples who want turnkey planning from start to finish.
            </p>
          </Card>

          <Card hover>
            <div className="inline-block px-3 py-1 rounded-full bg-warm-2 text-primary text-xs font-semibold mb-3">
              ADD-ON OR STANDALONE
            </div>
            <h3 className="text-text">Cultural Sourcing Support</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Outfits, jewelry, ceremony items, favors, and India coordination — managed as part of your plan, with
              clear boundaries.
            </p>
          </Card>
        </div>

        <div className="mt-10">
          <Button href="/pricing">View Full Pricing</Button>
        </div>
      </Section>

      <Section variant="surface">
        <h2 className="text-text mb-3">How It Works</h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-12">
          Three simple steps to get started with CeremonyVerse
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <div className="font-serif text-xl font-semibold text-text mb-3">
              1. Share your budget, vision, and priorities
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Complete our form with your budget, events, and priorities.
            </p>
          </Card>

          <Card>
            <div className="font-serif text-xl font-semibold text-text mb-3">
              2. We recommend the right level of support
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Receive a roadmap with priorities, vendor approach, and sourcing strategy.
            </p>
          </Card>

          <Card>
            <div className="font-serif text-xl font-semibold text-text mb-3">
              3. You move forward with clarity — not pressure
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Pick from intensive / partial / full / coordination + sourcing based on your needs.
            </p>
          </Card>
        </div>
      </Section>

      {/* Budget-to-Plan Roadmap */}
      <Section variant="warm2">
        <div className="text-center mb-14">
          <h2 className="text-text">Budget-to-Plan Roadmap</h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Our proprietary planning process starts with your real numbers and builds a decision path
          </p>
        </div>
        {/* <Roadmap /> */}
      </Section>

      {/* Planning + Cultural Sourcing */}
      <Section variant="surface">
        <div className="max-w-3xl">
          <h2 className="text-text">Planning + Cultural Sourcing (as a service)</h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            CeremonyVerse is a service-based planning studio. We don't operate as a store or marketplace — we help you
            make the right decisions, coordinate sourcing, and manage timelines so your wedding comes together smoothly
            and within budget.
          </p>
        </div>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </Section>

      {/* What Couples Value About CeremonyVerse */}
      <Section variant="warm2">
        <h2 className="text-text mb-3">What Couples Value About CeremonyVerse</h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-12">
          The qualities our clients appreciate most in our planning approach
        </p>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <Card hover className="bg-surface">
            <div className="font-serif font-semibold text-xl text-text mb-3">
              Clear priorities that keep spending realistic
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We help you understand your true budget and allocate funds strategically across all wedding elements.
            </p>
          </Card>
          <Card hover className="bg-surface">
            <div className="font-serif font-semibold text-xl text-text mb-3">Cultural details handled thoughtfully</div>
            <p className="text-muted-foreground leading-relaxed">
              From Gujarati to Punjabi, South Indian to Jain — we understand ceremony requirements and family
              expectations.
            </p>
          </Card>
          <Card hover className="bg-surface">
            <div className="font-serif font-semibold text-xl text-text mb-3">
              Less decision fatigue, more confidence
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Clear recommendations, defined timelines, and milestone-based support so you can enjoy the process.
            </p>
          </Card>
        </div>

        {/* Process clarity checklist */}
        <Card hover className="md:p-10 bg-surface">
          <div className="font-serif font-semibold text-2xl text-text mb-6">You get clarity on...</div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-accent-soft text-primary flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                ✓
              </span>
              <span className="text-muted-foreground leading-relaxed">
                What fits your total budget (before vendor meetings)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-accent-soft text-primary flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                ✓
              </span>
              <span className="text-muted-foreground leading-relaxed">
                Which vendors to prioritize vs. where you can save
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-accent-soft text-primary flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                ✓
              </span>
              <span className="text-muted-foreground leading-relaxed">
                Timeline for sourcing from India vs. buying locally
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-accent-soft text-primary flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                ✓
              </span>
              <span className="text-muted-foreground leading-relaxed">
                Ceremony-specific needs (mandap, baraat, sangeet, etc.)
              </span>
            </li>
          </ul>
        </Card>
      </Section>

      <Section variant="warm">
        <Card hover className="md:p-14 text-center max-w-3xl mx-auto bg-surface">
          <h3 className="text-text">Ready to plan with clarity and cultural understanding?</h3>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Start with our Budget + Vision Form so we can recommend the right level of support for your wedding.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button href="/start-planning">Start with Budget + Vision Form</Button>
            <Button href="/book" variant="secondary">
              Schedule a Free Consultation
            </Button>
          </div>
        </Card>
      </Section>
    </>
  )
}
