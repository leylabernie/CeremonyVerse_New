import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { InternalCTA } from "@/components/internal-cta"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources & Tools",
  description: "Free wedding planning tools, calculators, guides, and resources for Indian and fusion weddings.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/resources",
  },
  openGraph: {
    title: "Resources & Tools | CeremonyVerse",
    description: "Free wedding planning tools, guides, and resources for Indian and fusion weddings.",
    url: "https://www.ceremonyverse.com/resources",
    type: "website",
  },
  twitter: {
    title: "Resources & Tools | CeremonyVerse",
    description: "Free wedding planning tools, guides, and resources for Indian and fusion weddings.",
  },
}

export default function ResourcesPage() {
  const resources = [
    {
      title: "AI Budget Calculator",
      href: "/budget-calculator",
      description: "Get personalized AI-powered budget recommendations for your Indian or fusion wedding.",
      icon: "🤖",
    },
    {
      title: "Tradition Explainer",
      href: "/tradition-explainer",
      description: "Learn about Indian wedding traditions and their cultural significance with AI assistance.",
      icon: "🕉️",
    },
    {
      title: "Budget Planner",
      href: "/budget-planner",
      description: "Plan your wedding budget with our comprehensive calculator tool.",
      icon: "💰",
    },
    {
      title: "Wedding Glossary",
      href: "/wedding-glossary",
      description: "Understand Indian wedding terminology and traditions.",
      icon: "📖",
    },
    {
      title: "Planning Articles",
      href: "/blog",
      description: "Expert advice and tips for planning your perfect Indian or fusion wedding.",
      icon: "✍️",
    },
  ]

  return (
    <>
      {/* Hero Section - Clean serif heading + sans paragraph */}
      <section className="py-16 bg-cvBg">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-cvInk">
            Wedding Planning{" "}
            <span className="block md:inline font-serif text-cvInk">
              Resources
            </span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-cvMuted max-w-2xl mx-auto">
            Free wedding planning tools, calculators, and guides designed specifically for Indian and fusion celebrations.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-cvPrimary/30">
                <div className="p-6">
                  <span className="text-3xl mb-4 block">{resource.icon}</span>
                  <h2 className="font-serif text-xl font-semibold text-cvText mb-2 group-hover:text-cvPrimary transition-colors">
                    {resource.title}
                  </h2>
                  <p className="font-sans text-cvMuted text-sm">{resource.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <InternalCTA />
    </>
  )
}
