import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why does wedding planning pricing vary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Wedding planning pricing varies based on guest count, number of events, locations, and the level of cultural coordination required.",
                },
              },
              {
                "@type": "Question",
                name: "Are CeremonyVerse services sold as flat packages?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. All prices are starting points. Final pricing is determined after reviewing the scope and priorities of each wedding.",
                },
              },
              {
                "@type": "Question",
                name: "Does CeremonyVerse work with budget-conscious families?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. CeremonyVerse helps couples and families plan intentionally, prioritize spending, and avoid unnecessary expenses.",
                },
              },
              {
                "@type": "Question",
                name: "Is a deposit required to book planning services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Deposits are required to confirm planning scope. Non-refundable deposits may apply for international or custom sourcing.",
                },
              },
            ],
          }),
        }}
      />

      <Section variant="warm">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-text mb-4">Pricing & Planning Support</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CeremonyVerse works with couples and families across a range of wedding budgets, depending on priorities,
            guest size, and event structure. Our pricing is based on the scope of planning support and cultural
            coordination involved.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            All services begin with a clear scope and expectations — no pressure, no unnecessary upsells.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-text mb-4">Who This Pricing Serves</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our services are designed for couples and families planning Indian or multicultural fusion weddings who want
            expert guidance without rigid package requirements. We work best with those who value cultural authenticity,
            budget clarity, and personalized coordination.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're managing a single-day celebration or a multi-event weekend, we help you plan with confidence
            and avoid common pitfalls. Learn more about our{" "}
            <Link href="/services" className="text-primary hover:underline">
              complete range of services
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section variant="warm2">
        <div className="grid gap-8 md:grid-cols-2">
          <Card hover>
            <h3 className="text-text mb-2">Planning Intensives</h3>
            <div className="text-2xl font-semibold text-primary mb-4">Starting at $1,250</div>

            <div className="mb-4">
              <p className="font-medium text-text mb-2">Minimum included:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Budget and priority review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Cultural ceremony guidance (Indian or fusion)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Vendor shortlisting aligned with budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Clear next-step planning roadmap</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-text mb-2">May increase depending on:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                  <span>Number of events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                  <span>Depth of sourcing or vendor review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                  <span>Additional follow-up sessions</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card hover>
            <h3 className="text-text mb-2">Partial Planning & Coordination</h3>
            <div className="text-2xl font-semibold text-primary mb-4">Starting at $3,000</div>

            <div className="mb-4">
              <p className="font-medium text-text mb-2">Minimum included:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Planning timeline and checklist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Key vendor coordination support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Cultural sourcing guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Ongoing check-ins throughout planning</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-text mb-2">May increase depending on:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                  <span>Event count and guest size</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                  <span>Vendor complexity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                  <span>Timeline intensity</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card hover>
            <h3 className="text-text mb-2">Full Wedding Planning</h3>
            <div className="text-2xl font-semibold text-primary mb-4">Starting at $6,500</div>

            <div className="mb-4">
              <p className="font-medium text-text mb-2">Minimum included:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Complete planning and timeline management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Vendor coordination across events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Cultural ceremony and family coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Budget tracking and decision guidance</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-text mb-2">May increase depending on:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                  <span>Number of ceremonies and locations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                  <span>Guest count and logistics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                  <span>Level of sourcing and travel coordination</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card hover>
            <h3 className="text-text mb-2">Cultural Sourcing Support</h3>
            <div className="text-2xl font-semibold text-primary mb-4">Starting at $2,500</div>

            <div className="mb-4">
              <p className="font-medium text-text mb-2">Minimum included:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Vendor vetting and sourcing guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Budget-aligned recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Timeline and logistics planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>Coordination support (non-retail)</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-text mb-2">May increase depending on:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                  <span>Custom or international sourcing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                  <span>Quantity and complexity of items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                  <span>Shipping and coordination scope</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      <Section variant="warm2">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-text mb-6">Important Notes</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>All prices are starting points, not flat packages.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>Final pricing is determined after reviewing your event scope and priorities.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>For international or custom sourcing, non-refundable deposits may apply.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>We focus on clarity and fit — not selling unnecessary services.</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section variant="surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-text mb-8">Pricing FAQs</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-text mb-2">Why does wedding planning pricing vary?</h3>
              <p className="text-muted-foreground">
                Every wedding differs in guest count, number of events, locations, and cultural requirements. Pricing
                reflects the scope of planning support involved.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-text mb-2">Are these flat packages?</h3>
              <p className="text-muted-foreground">
                No. Listed prices are starting points. Final pricing is determined after reviewing your priorities and
                event structure.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-text mb-2">Do you work with budget-conscious families?</h3>
              <p className="text-muted-foreground">
                Yes. Our role is to help couples and families plan intentionally, avoid unnecessary expenses, and make
                informed decisions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-text mb-2">Is a deposit required?</h3>
              <p className="text-muted-foreground">
                For planning services, deposits confirm your planning scope. For international or custom sourcing,
                non-refundable deposits may apply.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-surface/50 rounded-lg border border-border">
            <h3 className="font-semibold text-lg text-text mb-4">Learn More</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/services"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>View All Planning Services</span>
              </Link>
              <Link
                href="/start-planning"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Start with Budget + Vision Form</span>
              </Link>
              <Link
                href="/blog/category/budget"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Budget Planning Resources</span>
              </Link>
              <Link
                href="/fusion-wedding-planner"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Fusion Wedding Planning Services</span>
              </Link>
              <Link
                href="/shopping-from-india"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Cultural Sourcing Support</span>
              </Link>
              <Link
                href="/service-area"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Service Areas & Availability</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="warm">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-text mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Start with our Budget + Vision Form or schedule a free consultation to discuss your wedding vision.
          </p>
          <p className="text-sm text-muted-foreground italic mb-8">
            We focus on clarity and cultural accuracy — not selling unnecessary services.
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
