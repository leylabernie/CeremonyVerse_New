import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Budget & Cost Planning | Blog",
  description: "Expert guides on planning your Indian or fusion wedding within budget.",
}

export default function BudgetCategoryPage() {
  const posts = [
    {
      title: "Indian & Multicultural Fusion Wedding Budget Guide 2025",
      slug: "south-asian-wedding-budget-guide",
      excerpt: "Complete budget guide for Indian and multicultural fusion weddings in USA.",
    },
  ]

  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-text mb-4">Budget & Cost Planning</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to plan your wedding within budget without compromising on your vision.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <Card hover className="h-full">
                <h3 className="text-text mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
