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
      title: "Vendor Directory",
      href: "/vendors",
      description: "Find culturally experienced vendors for your Indian or fusion wedding.",
      icon: "🏪",
    },
    {
      title: "Planning Checklist",
      href: "/checklist",
      description: "Stay organized with our comprehensive Indian wedding planning checklist.",
      icon: "✅",
    },
  ]

  return (
    <>
      <section className="py-16 bg-cvBg">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-cvInk">
            Wedding Planning{" "}
            <span className="block md:inline font-serif text-cvInk">
              Resources
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground font-sans">
            Expert guides, tips, and insights to help you plan an Indian or fusion wedding
            with cultural clarity, confidence, and organization — without overwhelm.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.title} href={resource.href}>
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{resource.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{resource.title}</h3>
                    <p className="text-muted-foreground mt-1">{resource.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <InternalCTA />
    </>
  )
}
