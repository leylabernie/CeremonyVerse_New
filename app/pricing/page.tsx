import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian Wedding Outfit Sourcing Services | CeremonyVerse",
  description:
    "CeremonyVerse helps couples source Indian wedding outfits including bridal lehengas, sherwanis, and coordinated wedding party attire from trusted boutiques in India.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/pricing",
  },
  openGraph: {
    title: "Indian Wedding Outfit Sourcing Services | CeremonyVerse",
    description:
      "Support for sourcing Indian wedding outfits including bridal lehengas, sherwanis, bridesmaid outfits, and family attire from India.",
    url: "https://www.ceremonyverse.com/pricing",
    type: "website",
  },
}

export default function PricingPage() {
  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-text mb-4">
            Indian Wedding Outfit Sourcing Support
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            CeremonyVerse helps couples and families source authentic Indian
            wedding outfits from trusted boutiques in India while navigating
            sizing, communication, and shipping timelines with clarity.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Whether you're planning a single ceremony or a multi-event wedding
            weekend, we help you source the right outfits with less stress and
            better coordination.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-text mb-4">Who This Service Is For</h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Our sourcing support is designed for couples, families, and wedding
            parties who want authentic Indian wedding attire but need guidance
            navigating boutiques, sizing, customization, and international
            logistics.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Many of our clients live outside India and want expert help sourcing
            bridal lehengas, sherwanis, bridesmaid outfits, and coordinated
            wedding party attire.
          </p>
        </div>
      </Section>

      <Section variant="warm2">
        <div className="grid gap-8 md:grid-cols-3">
          <Card hover>
            <h3 className="text-text mb-2">Outfit Sourcing Consultation</h3>

            <p className="text-muted-foreground text-sm mb-4">
              Guidance for sourcing Indian wedding outfits aligned with your
              budget, wedding events, and personal style.
            </p>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Bridal lehenga sourcing</li>
              <li>• Sherwani recommendations</li>
              <li>• Fabric and style guidance</li>
              <li>• Boutique recommendations in India</li>
            </ul>
          </Card>

          <Card hover>
            <h3 className="text-text mb-2">Bridal Party Coordination</h3>

            <p className="text-muted-foreground text-sm mb-4">
              Coordination support for bridesmaids, groomsmen, and close family
              members to ensure a cohesive look across wedding events.
            </p>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Bridesmaid outfit planning</li>
              <li>• Groomsmen attire coordination</li>
              <li>• Color palette guidance</li>
              <li>• Outfit timeline planning</li>
            </ul>
          </Card>

          <Card hover>
            <h3 className="text-text mb-2">Shopping From India Support</h3>

            <p className="text-muted-foreground text-sm mb-4">
              Help navigating communication, customization, and shipping when
              ordering Indian wedding outfits from boutiques in India.
            </p>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Vendor communication guidance</li>
              <li>• Measurement and sizing support</li>
              <li>• Custom design coordination</li>
              <li>• Shipping timeline planning</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section variant="surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-text mb-6">Important Notes</h2>

          <ul className="space-y-4 text-muted-foreground">
            <li>• Services are customized depending on the scope of sourcing support required.</li>
            <li>• Some weddings require coordination across multiple outfits and events.</li>
            <li>• International shipping timelines should be considered when ordering outfits.</li>
            <li>• We help couples plan their sourcing timelines to avoid last-minute stress.</li>
          </ul>
        </div>
      </Section>

      <Section variant="warm">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-text mb-4">
            Start Planning Your Wedding Outfits
          </h2>

          <p className="text-lg text-muted-foreground mb-6">
            The best way to begin is by sharing your wedding timeline and outfit
            needs so we can recommend the right sourcing approach.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/shop-from-india">
              Learn How Outfit Sourcing Works
            </Button>

            <Button href="/contact" variant="secondary">
              Contact CeremonyVerse
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
