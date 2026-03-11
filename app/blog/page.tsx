import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "How to Shop Wedding Outfits from India Without Traveling",
      description:
        "Learn how US-based couples source bridal lehengas, sherwanis, and bridesmaid outfits from India while avoiding common international shopping mistakes.",
      href: "/blog/virtual-shopping-india-guide",
    },
    {
      title: "Wedding Shopping: India vs USA — Complete Cost Comparison",
      description:
        "Understand the real cost differences between buying wedding outfits in India and the United States, including customization, quality, and timelines.",
      href: "/blog/wedding-shopping-india-vs-usa",
    },
    {
      title: "How to Measure for a Bridal Lehenga Remotely",
      description:
        "Step-by-step measurement guidance for ordering bridal lehengas from India while living in the United States.",
      href: "/blog/how-to-measure-for-bridal-lehenga",
    },
    {
      title: "Shipping Indian Wedding Outfits to the USA",
      description:
        "Learn production timelines, shipping expectations, and customs considerations when ordering wedding outfits from India.",
      href: "/blog/shipping-indian-wedding-outfits-to-usa",
    },
    {
      title: "Indian Bridesmaid Outfit Guide for US Weddings",
      description:
        "How to coordinate bridesmaid outfits, colors, and styles for South Asian weddings in the United States.",
      href: "/blog/indian-bridesmaid-outfit-guide",
    },
  ]

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      <section className="text-center mb-16">
        <h1 className="text-4xl font-serif mb-6">
          South Asian Wedding Planning & Outfit Sourcing Guides
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          CeremonyVerse provides practical guides for couples planning
          South Asian weddings in the United States and Mexico. Learn how
          to source bridal lehengas, sherwanis, and bridesmaid outfits from
          India while managing timelines, measurements, and shipping.
        </p>
      </section>

      <section className="space-y-12">
        {posts.map((post) => (
          <article key={post.href} className="border-b pb-8">
            <h2 className="text-2xl font-serif mb-3">
              <Link href={post.href} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            <p className="text-muted-foreground mb-4">
              {post.description}
            </p>

            <Link
              href={post.href}
              className="text-sm underline"
            >
              Read article →
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-20 text-center border-t pt-12">
        <h2 className="text-2xl font-serif mb-4">
          Need Help Coordinating Wedding Outfits From India?
        </h2>

        <p className="text-muted-foreground mb-6">
          CeremonyVerse helps couples in the United States coordinate bridal
          lehengas, sherwanis, and bridesmaid outfits directly with trusted
          vendors in India.
        </p>

        <Link href="/book" className="underline text-lg">
          Schedule a consultation →
        </Link>
      </section>

    </main>
  )
}
