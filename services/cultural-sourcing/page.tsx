import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"
import { InternalCTA } from "@/components/internal-cta"
import { JsonLd } from "@/components/schema/JsonLd"
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema"

export const metadata = {
  title: "Indian Wedding Cultural Sourcing Services | Outfit & Ceremony Items from India | CeremonyVerse",
  description:
    "Source authentic wedding outfits, jewelry, ceremony items, and favors from India for your wedding. Transparent coordination, customs guidance, and delivery tracking. Serving couples nationwide.",
  openGraph: {
    title: "Indian Wedding Cultural Sourcing | Outfits & Items from India",
    description:
      "Professional sourcing service for Indian wedding outfits, jewelry, and ceremony items with transparent pricing and delivery coordination.",
  },
}

export default function CulturalSourcingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Indian Wedding Cultural Sourcing",
    provider: {
      "@type": "Organization",
      name: "CeremonyVerse",
    },
    areaServed: "United States",
    description:
      "Professional sourcing service for Indian wedding outfits, jewelry, ceremony items, and favors from India with transparent coordination and delivery tracking.",
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ceremonyverse.com" },
          { name: "Services", url: "https://ceremonyverse.com/services" },
          { name: "Cultural Sourcing", url: "https://ceremonyverse.com/services/cultural-sourcing" },
        ]}
      />

      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Indian Wedding Cultural Sourcing</h1>
        <p className="mt-4 text-cvMuted max-w-3xl">
          Source authentic wedding outfits, jewelry, ceremony items, and favors from India with professional
          coordination. We manage communication, customs, shipping logistics, and delivery tracking so you get exactly
          what you need without the guesswork.
        </p>

        <div className="mt-6 flex gap-3">
          <Button href="/start-planning">Start Sourcing</Button>
          <Button href="/blog/wedding-shopping-india-vs-usa" variant="secondary">
            India vs USA Shopping Guide →
          </Button>
        </div>
      </Section>

      <Section variant="warm">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What We Source</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-4xl">
          <Card>
            <h3 className="font-medium text-lg mb-3">Bridal & Groom Attire</h3>
            <ul className="text-sm text-cvMuted list-disc pl-5 space-y-2">
              <li>Custom lehengas and sarees</li>
              <li>Sherwanis and achkans</li>
              <li>Ceremony-specific outfits (mehndi, sangeet, reception)</li>
              <li>Coordination with trusted tailors and designers</li>
            </ul>
          </Card>

          <Card>
            <h3 className="font-medium text-lg mb-3">Jewelry & Accessories</h3>
            <ul className="text-sm text-cvMuted list-disc pl-5 space-y-2">
              <li>Bridal jewelry sets</li>
              <li>Kalire, chooda, and bangles</li>
              <li>Matha patti and maang tikka</li>
              <li>Groom accessories (sehra, kalghi)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="font-medium text-lg mb-3">Ceremony Essentials</h3>
            <ul className="text-sm text-cvMuted list-disc pl-5 space-y-2">
              <li>Mandap decor elements</li>
              <li>Puja items and thali sets</li>
              <li>Religious ceremony supplies</li>
              <li>Cultural decor accents</li>
            </ul>
          </Card>

          <Card>
            <h3 className="font-medium text-lg mb-3">Wedding Favors & Gifts</h3>
            <ul className="text-sm text-cvMuted list-disc pl-5 space-y-2">
              <li>Traditional favor items</li>
              <li>Guest welcome boxes</li>
              <li>Family gifts</li>
              <li>Bulk sourcing coordination</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">How It Works</h2>
        <div className="grid gap-6 max-w-4xl">
          <Card>
            <div className="font-medium mb-2">1. Discovery & Budget</div>
            <p className="text-sm text-cvMuted">
              We discuss your vision, cultural requirements, and budget. You'll receive sourcing recommendations with
              estimated costs and timelines.
            </p>
          </Card>

          <Card>
            <div className="font-medium mb-2">2. Vendor Coordination</div>
            <p className="text-sm text-cvMuted">
              We connect with trusted vendors in India, manage communication across time zones, and coordinate sizing,
              customization, and proofs.
            </p>
          </Card>

          <Card>
            <div className="font-medium mb-2">3. Logistics & Customs</div>
            <p className="text-sm text-cvMuted">
              We provide guidance on customs documentation, duty estimates, and shipping options. You'll get tracking
              information and delivery updates.
            </p>
          </Card>

          <Card>
            <div className="font-medium mb-2">4. Quality Check & Delivery</div>
            <p className="text-sm text-cvMuted">
              Items are inspected upon arrival (when applicable). We coordinate any alterations or adjustments needed
              before your wedding date.
            </p>
          </Card>
        </div>
      </Section>

      <Section variant="warm2">
        <Card className="md:p-10 max-w-3xl">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">Transparent Pricing</h3>
          <p className="text-cvMuted mb-4">
            Sourcing fees are based on the complexity and number of items. You'll always know vendor costs, shipping
            estimates, and our coordination fee upfront—no percentage markups on item costs.
          </p>
          <p className="text-sm text-cvMuted">
            Learn more about{" "}
            <a href="/blog/wedding-shopping-india-vs-usa" className="text-cvAccent hover:underline">
              India vs USA wedding shopping
            </a>{" "}
            or explore our complete{" "}
            <a href="/services" className="text-cvAccent hover:underline">
              wedding planning services
            </a>
            .
          </p>
        </Card>
      </Section>

      <InternalCTA />
    </>
  )
}
