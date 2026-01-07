import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"
import { InternalCTA } from "@/components/internal-cta"
import { JsonLd } from "@/components/schema/JsonLd"
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema"

export const metadata = {
  title: "Indian Wedding Planning Intensives | Budget Consultation | CeremonyVerse",
  description:
    "Single-session wedding planning intensives starting at $1,250. Get a budget roadmap, vendor strategy, and cultural ceremony guidance for your Indian or fusion wedding. Virtual nationwide.",
  openGraph: {
    title: "Indian Wedding Planning Intensives | Budget Consultation",
    description: "Budget-first planning intensive for Indian & fusion weddings. $1,250+ transparent pricing.",
  },
}

export default function PlanningIntensivesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Indian Wedding Planning Intensive",
    provider: {
      "@type": "Organization",
      name: "CeremonyVerse",
    },
    areaServed: "United States",
    description:
      "Wedding planning intensive sessions providing budget roadmaps, vendor strategy, and cultural ceremony guidance for Indian and fusion weddings.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "1250",
      priceValidUntil: "2025-12-31",
    },
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ceremonyverse.com" },
          { name: "Services", url: "https://ceremonyverse.com/services" },
          { name: "Planning Intensives", url: "https://ceremonyverse.com/services/planning-intensives" },
        ]}
      />

      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Indian Wedding Planning Intensives</h1>
        <p className="mt-4 text-cvMuted max-w-3xl">
          A single planning session to get your Indian or fusion wedding organized. We'll create a budget roadmap,
          vendor strategy, and ceremony flow plan tailored to your cultural traditions and priorities.
        </p>

        <div className="mt-6 flex gap-3">
          <Button href="/start-planning">Book Your Intensive</Button>
          <Button href="/pricing" variant="secondary">
            View Pricing →
          </Button>
        </div>
      </Section>

      <Section variant="warm">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What's Included</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-4xl">
          <Card>
            <h3 className="font-medium text-lg mb-3">Budget Roadmap Session</h3>
            <ul className="text-sm text-cvMuted list-disc pl-5 space-y-2">
              <li>Detailed budget breakdown by category</li>
              <li>Cost expectations for your guest count</li>
              <li>Priority allocation strategy</li>
              <li>Hidden cost identification</li>
            </ul>
          </Card>

          <Card>
            <h3 className="font-medium text-lg mb-3">Vendor Strategy</h3>
            <ul className="text-sm text-cvMuted list-disc pl-5 space-y-2">
              <li>Vendor sourcing recommendations</li>
              <li>Contract review guidance</li>
              <li>Negotiation strategy</li>
              <li>Timeline planning</li>
            </ul>
          </Card>

          <Card>
            <h3 className="font-medium text-lg mb-3">Cultural Ceremony Guidance</h3>
            <ul className="text-sm text-cvMuted list-disc pl-5 space-y-2">
              <li>Hindu, Sikh, Gujarati, Punjabi, South Indian traditions</li>
              <li>Fusion ceremony sequencing</li>
              <li>Ritual planning and logistics</li>
              <li>Multi-day event coordination</li>
            </ul>
          </Card>

          <Card>
            <h3 className="font-medium text-lg mb-3">Deliverables</h3>
            <ul className="text-sm text-cvMuted list-disc pl-5 space-y-2">
              <li>Written budget roadmap document</li>
              <li>Vendor sourcing checklist</li>
              <li>Timeline with key milestones</li>
              <li>30-day email support follow-up</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <Card className="md:p-10 max-w-3xl">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">Pricing</h3>
          <p className="text-2xl font-semibold text-cvAccent mb-2">Starting at $1,250</p>
          <p className="text-cvMuted mb-6">
            Single 2-hour planning intensive session via Zoom. Available nationwide with flexible scheduling.
          </p>
          <p className="text-sm text-cvMuted">
            Perfect for couples who want clear direction without committing to full planning services. Learn more about
            our complete{" "}
            <a href="/services" className="text-cvAccent hover:underline">
              wedding planning services
            </a>{" "}
            or explore our{" "}
            <a href="/blog/indian-wedding-budget-guide" className="text-cvAccent hover:underline">
              Indian wedding budget guide
            </a>
            .
          </p>
        </Card>
      </Section>

      <InternalCTA />
    </>
  )
}
