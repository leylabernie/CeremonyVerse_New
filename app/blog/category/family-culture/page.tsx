import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Family & Culture Navigation | Blog",
  description: "Navigate family expectations and blend cultural traditions seamlessly.",
}

export default function FamilyCultureCategoryPage() {
  const posts = [
    {
      title: "Complete Guide to Indian Wedding Traditions",
      slug: "indian-wedding-traditions-guide",
      excerpt: "Understanding the beautiful rituals that make Indian weddings unforgettable.",
    },
    {
      title: "10 Essential Elements of an Authentic Fusion Wedding",
      slug: "essential-elements-fusion-wedding",
      excerpt: "How to seamlessly blend traditional Indian ceremonies with modern American elements.",
    },
  ]

  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-text mb-4">Family & Culture Navigation</h1>
          <p className="text-lg text-muted-foreground">
            Navigate family expectations and blend cultural traditions seamlessly.
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
