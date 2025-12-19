import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing & Planning Support",
  description:
    "Wedding planning support should feel clear — not intimidating. We recommend the right level of help based on your priorities, budget, and event complexity.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/pricing",
  },
  openGraph: {
    title: "Pricing & Planning Support | CeremonyVerse",
    description:
      "Clear pricing for Indian and fusion wedding planning services. From Planning Intensives to Full Wedding Planning.",
    url: "https://www.ceremonyverse.com/pricing",
    type: "website",
  },
  twitter: {
    title: "Pricing & Planning Support | CeremonyVerse",
    description:
      "Clear pricing for Indian and fusion wedding planning services. From Planning Intensives to Full Wedding Planning.",
  },
}

export default function PricingPage() {
  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-text mb-4">Pricing & Planning Support</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wedding planning support should feel clear — not intimidating. We recommend the right level of help based on
            your priorities, budget, and event complexity.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <div className="grid gap-8 md:grid-cols-2">
          <Card hover>
            <h3 className="text-text mb-2">Planning Intensives</h3>
            <div className="text-2xl font-semibold text-primary mb-4">Starting at $500</div>
            <p className="text-muted-foreground mb-4">For couples who want expert clarity without full planning.</p>
            <p className="text-sm text-muted-foreground">
              Includes: budget review, cultural guidance, vendor shortlists, next-step plan.
            </p>
          </Card>

          <Card hover>
            <h3 className="text-text mb-2">Partial Planning & Coordination</h3>
            <div className="text-2xl font-semibold text-primary mb-4">$2,500 - $5,500</div>
            <p className="text-muted-foreground mb-4">
              For couples managing parts themselves but needing structure and expert support.
            </p>
            <p className="text-sm text-muted-foreground">
              Includes: timeline support, key vendor coordination, ongoing check-ins, cultural sourcing guidance.
            </p>
          </Card>

          <Card hover>
            <h3 className="text-text mb-2">Full Wedding Planning</h3>
            <div className="text-2xl font-semibold text-primary mb-4">$6,000 - $15,000+</div>
            <p className="text-muted-foreground mb-4">
              For multi-event Indian or fusion weddings needing end-to-end planning.
            </p>
            <p className="text-sm text-muted-foreground">
              Includes: vendor management, timelines, logistics, ceremony coordination, sourcing integration.
            </p>
          </Card>

          <Card hover>
            <h3 className="text-text mb-2">Cultural Sourcing Support</h3>
            <div className="text-2xl font-semibold text-primary mb-4">Starting at $750</div>
            <p className="text-muted-foreground mb-4">
              For outfits, jewelry, ceremony essentials, favors, India coordination.
            </p>
            <p className="text-sm text-muted-foreground">
              Includes: vendor vetting, budget alignment, timeline planning, coordination support.
            </p>
          </Card>
        </div>
      </Section>

      <Section variant="warm2">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-text mb-6">Important Notes</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>Final pricing depends on guest count, number of events, locations, and sourcing complexity.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>We don't upsell unnecessary services.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>For international/custom sourcing, non-refundable deposits may apply.</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section variant="surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-text mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with our Budget + Vision Form or schedule a free consultation to discuss your wedding vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/start-planning">Start with Budget + Vision Form</Button>
            <Button href="/book" variant="secondary">
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
