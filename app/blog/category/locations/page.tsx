import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Location Guides | Blog",
  description: "Venue recommendations and location-specific wedding planning guides.",
}

export default function LocationsCategoryPage() {
  const posts = [
    {
      title: "How to Choose Your Perfect Wedding Venue",
      slug: "choosing-perfect-wedding-venue",
      excerpt: "Complete guide to selecting the ideal venue for your fusion wedding.",
    },
  ]

  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-text mb-4">Location Guides</h1>
          <p className="text-lg text-muted-foreground">
            Venue recommendations and location-specific wedding planning guides.
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
