import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Planning Education | Blog",
  description: "Essential wedding planning tips, timelines, and checklists for Indian weddings.",
}

export default function PlanningCategoryPage() {
  const posts = [
    {
      title: "Complete Wedding Planning Checklist & Timeline",
      slug: "wedding-planning-checklist-timeline",
      excerpt: "The ultimate month-by-month wedding planning guide.",
    },
    {
      title: "12-Month Fusion Wedding Planning Timeline",
      slug: "fusion-wedding-timeline",
      excerpt: "A complete month-by-month guide to planning your fusion wedding.",
    },
    {
      title: "Finding the Perfect Indian Wedding Planner in USA",
      slug: "indian-wedding-planner-usa",
      excerpt: "Everything you need to know about hiring an Indian wedding planner.",
    },
  ]

  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-text mb-4">Planning Education</h1>
          <p className="text-lg text-muted-foreground">
            Essential wedding planning tips, timelines, and checklists for Indian weddings.
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
