import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
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
      title: "Budget Planner",
      href: "/budget-planner",
      description: "Plan your wedding budget with our comprehensive calculator tool.",
    },
    {
      title: "Wedding Glossary",
      href: "/wedding-glossary",
      description: "Understand Indian wedding terminology and traditions.",
    },
    {
      title: "Free Resources",
      href: "/free-resources",
      description: "Download free wedding planning templates and guides.",
    },
    {
      title: "Start Planning",
      href: "/start-planning",
      description: "Begin your wedding planning journey with our Budget + Vision Form.",
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Expert advice, tips, and inspiration for your Indian or fusion wedding.",
    },
  ]

  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-text mb-4">Resources & Tools</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Free planning tools, guides, and resources to help you plan your perfect Indian or fusion wedding.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="block">
              <Card hover className="h-full">
                <h3 className="text-text mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
