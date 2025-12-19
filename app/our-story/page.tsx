import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import { Check } from "@/components/icons"

export const metadata: Metadata = {
  title: "About Us | Planning Indian & Fusion Weddings with Cultural Clarity",
  description:
    "CeremonyVerse specializes in multi-day Indian and fusion weddings, where tradition, logistics, and family expectations require thoughtful planning and precise coordination.",
  keywords: [
    "about CeremonyVerse",
    "Indian wedding planner",
    "fusion wedding experts",
    "multi-day wedding planning",
    "cultural wedding planning",
  ],
  openGraph: {
    title: "About CeremonyVerse | Indian & Fusion Wedding Planning",
    description:
      "CeremonyVerse specializes in multi-day Indian and fusion weddings with thoughtful planning and precise coordination.",
    type: "website",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/our-story",
  },
}

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 lg:pt-36">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Planning Indian & Fusion Weddings with Cultural Clarity
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            CeremonyVerse specializes in multi-day Indian and fusion weddings, where tradition, logistics, and family
            expectations require thoughtful planning and precise coordination.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center">Who We Are</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              CeremonyVerse was created to support couples planning Indian and fusion weddings that span multiple
              ceremonies, cultures, and expectations. We understand that these weddings are not one-day events—they are
              layered celebrations rooted in tradition, family, and community.
            </p>
            <p className="font-medium text-foreground">
              Our role is not to sell inspiration, but to provide structure, guidance, and seamless execution.
            </p>
          </div>
        </div>
      </section>

      {/* Why Indian Weddings Require Different Approach */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
            Why Indian Weddings Require a Different Approach
          </h2>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <span className="text-lg text-muted-foreground">Multiple ceremonies across several days</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <span className="text-lg text-muted-foreground">Cultural and religious precision</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <span className="text-lg text-muted-foreground">Family involvement and expectations</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <span className="text-lg text-muted-foreground">Complex timelines and guest flow</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <span className="text-lg text-muted-foreground">
                Coordination across vendors, venues, and sometimes countries
              </span>
            </li>
          </ul>

          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Without a clear planning process, these elements can quickly become overwhelming. CeremonyVerse focuses on
            clarity, coordination, and respect for tradition at every stage.
          </p>
        </div>
      </section>

      {/* Our Planning Philosophy */}
      <section className="py-20 px-6 bg-gradient-to-b from-secondary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">Our Planning Philosophy</h2>

          <div className="space-y-6">
            <div className="bg-background p-6 rounded-lg border border-border">
              <p className="text-lg text-foreground">We prioritize process over aesthetics</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <p className="text-lg text-foreground">We plan with cultural accuracy, not assumptions</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <p className="text-lg text-foreground">We design timelines that work for families and guests</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <p className="text-lg text-foreground">We communicate clearly and document decisions</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <p className="text-lg text-foreground">
                We use secure, milestone-based payments via Stripe, PayPal, and Zelle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Support Couples */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
            How We Support Our Couples
          </h2>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
              <span className="text-lg text-muted-foreground">Ceremony guidance across Indian communities</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
              <span className="text-lg text-muted-foreground">Vendor coordination and logistics</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
              <span className="text-lg text-muted-foreground">Multi-day timeline planning</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
              <span className="text-lg text-muted-foreground">Virtual planning and India sourcing when needed</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
              <span className="text-lg text-muted-foreground">Clear deliverables and planning checkpoints</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-accent/10 via-background to-secondary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Planning an Indian or Fusion Wedding?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Schedule a free consultation to discuss your vision and learn how we can help.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg">
            <Link href="/book-consultation">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
