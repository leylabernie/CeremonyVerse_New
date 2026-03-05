import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Shop Indian Wedding Outfits from India (Without Traveling) | CeremonyVerse",
  description:
    "US-managed sourcing service to buy Indian wedding outfits, bridal lehengas, sherwanis, and jewelry from trusted boutiques in India—without the stress of overseas shopping.",
  keywords:
    "buy lehenga from india usa, indian wedding outfits from india, indian bridal lehenga sourcing, sherwani from india usa, indian wedding jewelry sourcing, shop from india service",
}

export default function ShopFromIndiaPage() {
  return (
    <main>
      <Section className="pt-16 md:pt-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground">
            <Link href="/" className="underline">
              Home
            </Link>{" "}
            / Shop From India
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-900">
            Shop Indian Wedding Outfits From India — Managed From the US
          </h1>

          <p className="mt-6 text-lg text-charcoal/70">
            CeremonyVerse helps couples in the US source authentic Indian wedding outfits, bridal lehengas,
            sherwanis, and jewelry directly from trusted boutiques and artisans in India — while we manage
            vendor communication, timelines, customization steps, and shipping coordination.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <Link href="/book-consultation">Start Your Outfit Sourcing</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/book-consultation">Book a Sourcing Consultation</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="pt-10 md:pt-14">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          <Card>
            <h2 className="text-xl font-semibold mb-2">What we source</h2>
            <p className="text-charcoal/70">
              Bridal lehengas, reception outfits, pre-wedding looks, sherwanis, bridesmaid/groomsmen outfits,
              and wedding jewelry from trusted vendors in India.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-2">What we manage</h2>
            <p className="text-charcoal/70">
              Boutique outreach, communication, customization details, measurement guidance, production
              checkpoints, and timeline coordination.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-2">Why it’s safer</h2>
            <p className="text-charcoal/70">
              Avoid language barriers, time-zone delays, and uncertainty. You get US-based coordination with a
              sourcing process designed for real wedding deadlines.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="pt-10 md:pt-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-medium tracking-tight text-stone-900">
            How sourcing works
          </h2>

          <ol className="mt-6 space-y-4 text-charcoal/80 list-decimal pl-5">
            <li>
              <strong>Consultation:</strong> share wedding date, events, budget range, and what you want to
              source.
            </li>
            <li>
              <strong>Vendor matching:</strong> we shortlist boutiques in India that fit your style and budget.
            </li>
            <li>
              <strong>Measurements & customization:</strong> we guide measurements and confirm details with the
              vendor.
            </li>
            <li>
              <strong>Production timeline:</strong> we track progress and keep timelines aligned to your events.
            </li>
            <li>
              <strong>Shipping coordination:</strong> we coordinate shipping checkpoints so your outfits arrive
              on time.
            </li>
          </ol>

          <div className="mt-10">
            <h3 className="text-2xl font-serif font-medium tracking-tight text-stone-900">
              Frequently asked questions
            </h3>

            <div className="mt-6 space-y-4">
              <div>
                <p className="font-semibold">Do I need to travel to India to shop?</p>
                <p className="text-charcoal/70">
                  No. We coordinate sourcing directly with vetted vendors in India and manage the process from
                  the US.
                </p>
              </div>
              <div>
                <p className="font-semibold">What timelines should I plan for?</p>
                <p className="text-charcoal/70">
                  Most custom outfits need several weeks. We’ll align vendor timelines to your wedding dates
                  and event schedule.
                </p>
              </div>
              <div>
                <p className="font-semibold">Can you help with sizing and customization?</p>
                <p className="text-charcoal/70">
                  Yes. We provide measurement guidance and confirm customization details with vendors before
                  production starts.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Button asChild>
                <Link href="/book-consultation">Book Your Sourcing Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
