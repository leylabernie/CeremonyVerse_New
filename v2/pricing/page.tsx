import { Navigation, Footer } from "@/components"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "@/components/icons"

export default function PricingPage() {
  const packages = [
    {
      name: "Month-of Coordination",
      price: "Starting at $3,500",
      description: "For couples who have planned the details but need expert execution on the big days.",
      features: [
        "Vendor management starting 6 weeks out",
        "Detailed timeline creation",
        "Rehearsal coordination",
        "On-site management for 2 events",
        "Unlimited email support",
      ],
    },
    {
      name: "Partial Planning",
      price: "Starting at $6,000",
      description: "Perfect for couples who want to be involved but need guidance on key decisions.",
      features: [
        "Vendor recommendations & booking",
        "Design consultation",
        "Budget management",
        "Monthly check-in calls",
        "On-site management for 3 events",
      ],
      popular: true,
    },
    {
      name: "Full Service Fusion",
      price: "Starting at $8,000",
      description: "Comprehensive planning from start to finish for complex multi-day celebrations.",
      features: [
        "Complete venue & vendor sourcing",
        "Full design & styling",
        "Guest list & RSVP management",
        "Sourcing from India (outfits/decor)",
        "On-site management for all events",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl sm:text-6xl text-charcoal mb-6">Investment</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Transparent pricing for peace of mind. Choose the level of support that fits your needs.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border ${pkg.popular ? "border-primary bg-primary/5 shadow-lg" : "border-border bg-white"}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="font-serif text-2xl mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
              <p className="text-muted-foreground mb-8 h-12">{pkg.description}</p>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild>
                <Link href="/contact">Inquire Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
