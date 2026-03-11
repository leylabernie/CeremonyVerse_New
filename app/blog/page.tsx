import Link from "next/link"

export const metadata = {
  title: "South Asian Wedding Planning Guides | CeremonyVerse",
  description:
    "Expert guides for planning South Asian weddings, sourcing outfits, and navigating destination weddings in Mexico.",
}

export default function BlogPage() {
  const posts = [
    {
      title: "How to Shop Wedding Outfits from India Without Traveling",
      slug: "shop-wedding-outfits-from-india",
      description:
        "Learn how brides and bridesmaids source authentic Indian wedding outfits from India without flights, stress, or communication barriers.",
    },
    {
      title: "Planning a South Asian Destination Wedding in Mexico",
      slug: "south-asian-destination-wedding-mexico",
      description:
        "A complete guide to planning Indian and Pakistani weddings in Cancun, Riviera Maya, and other Mexico destinations.",
    },
  ]

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-8">
        Wedding Planning Guides
      </h1>

      <p className="mb-12 text-lg text-gray-600">
        Expert planning advice for South Asian weddings, destination weddings,
        and sourcing traditional outfits internationally.
      </p>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>

            <p className="mt-2 text-gray-600">{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
