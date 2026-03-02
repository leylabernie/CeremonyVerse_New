import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shopping & Sourcing from India | Blog",
  description: "Expert guidance on sourcing authentic Indian wedding items and outfits.",
}

export default function SourcingCategoryPage() {
  const posts = [
    {
      title: "Virtual Shopping for Indian Wedding Items Guide",
      slug: "virtual-shopping-india-guide",
      excerpt: "Learn how to shop for authentic Indian wedding items from the US without getting scammed.",
    },
    {
      title: "Complete Vendor Verification Guide",
      slug: "vendor-verification-guide",
      excerpt: "Our comprehensive verification process and red flags to watch for.",
    },
  ]

  return (
    <>
      <Section variant="warm">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-text mb-4">Shopping & Sourcing from India</h1>
          <p className="text-lg text-muted-foreground">
            Expert guidance on sourcing authentic Indian wedding items and outfits.
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
