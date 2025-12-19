import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Indian and fusion wedding planning services. Four tiers to fit your needs and budget.",
}

export default function PricingPage() {
  const tiers = [
    {
      name: "Day-of Coordination",
      price: "Starting at $2,500",
      description: "For couples who've done the planning and need expert execution on the big day.",
      features: [
        "Final vendor confirmations & timeline",
        "Rehearsal coordination",
        "Day-of execution & troubleshooting",
        "Vendor management on-site",
        "Up to 10 hours of coverage",
      ],
    },
    {
      name: "Partial Planning",
      price: "Starting at $5,000",
      description: "You've started planning but need guidance, vendor connections, and coordination.",
      features: [
        "Everything in Day-of Coordination",
        "Vendor recommendations & contract review",
        "Budget management & tracking",
        "Design consultation",
        "Timeline creation",
        "Monthly planning meetings",
        "Cultural ceremony guidance",
      ],
    },
    {
      name: "Full Planning",
      price: "Starting at $8,000",
      description: "Comprehensive planning from vision to execution for your multi-day Indian or fusion wedding.",
      features: [
        "Everything in Partial Planning",
        "Unlimited planning meetings",
        "Complete vendor sourcing & management",
        "Design & décor planning",
        "Guest management support",
        "Multi-day ceremony coordination",
        "Detailed run-of-show for all events",
        "Post-wedding vendor settlement",
      ],
      recommended: true,
    },
    {
      name: "Virtual Planning + India Sourcing",
      price: "Starting at $6,000",
      description: "Full planning with cultural sourcing—perfect for couples wanting authentic items from India.",
      features: [
        "Everything in Full Planning",
        "Virtual shopping from India vendors",
        "Outfit & jewelry sourcing assistance",
        "Décor & ceremony item procurement",
        "Shipping & logistics coordination",
        "Quality control & vendor verification",
      ],
    },
  ]

  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-cvInk mb-4">Transparent Pricing</h1>
          <p className="text-lg text-cvMuted">
            Four service tiers designed to fit your needs and budget. No hidden fees, no surprises.
          </p>
        </div>
      </Section>

      <Section variant="default">
        <div className="grid gap-8 md:grid-cols-2">
          {tiers.map((tier) => (
            <Card key={tier.name} className={tier.recommended ? "border-2 border-cvAccent" : ""}>
              {tier.recommended && (
                <div className="inline-block px-3 py-1 bg-cvAccent text-white text-xs font-medium rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="font-serif text-2xl tracking-tight text-cvInk mb-2">{tier.name}</h3>
              <div className="text-3xl font-semibold text-cvAccent mb-2">{tier.price}</div>
              <p className="text-sm text-cvMuted mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-cvAccent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/start-planning" variant="default" className="w-full">
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="warm2">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tight text-cvInk mb-6">What Affects Your Price?</h2>
          <div className="space-y-4 text-cvMuted">
            <p>
              <strong className="text-cvInk">Guest count:</strong> Larger weddings require more coordination and on-site
              management.
            </p>
            <p>
              <strong className="text-cvInk">Number of events:</strong> Multi-day celebrations (mehendi, sangeet,
              ceremony, reception) require additional planning.
            </p>
            <p>
              <strong className="text-cvInk">Venue complexity:</strong> Multiple locations or destination weddings
              require extra logistics.
            </p>
            <p>
              <strong className="text-cvInk">Cultural elements:</strong> Traditional ceremonies with specific rituals
              require cultural expertise and coordination.
            </p>
            <p>
              <strong className="text-cvInk">Customization level:</strong> Highly personalized design, custom décor, or
              unique vendor requests.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tight text-cvInk mb-6">Payment Structure</h2>
          <div className="space-y-4 text-cvMuted">
            <p>
              <strong className="text-cvInk">50% deposit</strong> due upon contract signing to secure your date.
            </p>
            <p>
              <strong className="text-cvInk">25%</strong> due at your midpoint planning meeting (typically 3-4 months
              before).
            </p>
            <p>
              <strong className="text-cvInk">25% final payment</strong> due 30 days before your first wedding event.
            </p>
            <p className="pt-4 border-t border-cvBorder">
              <strong className="text-cvInk">Deposits are non-refundable</strong> once planning work begins. Custom
              sourcing from India (outfits, décor, ceremony items) requires separate deposits to vendors, which are also
              non-refundable. See our{" "}
              <Link href="/refund-policy" className="text-cvAccent hover:underline">
                Refund & Deposit Policy
              </Link>{" "}
              for details.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="warm">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl tracking-tight text-cvInk mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-cvMuted mb-8">
            Book a free consultation to discuss your wedding vision and get a custom quote.
          </p>
          <Button href="/book" variant="default" className="text-lg px-8 py-6">
            Schedule Free Consultation
          </Button>
        </div>
      </Section>
    </>
  )
}
