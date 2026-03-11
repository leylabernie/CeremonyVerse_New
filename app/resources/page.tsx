import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Indian Wedding Resources | Outfit Guides, Dress Code, Timelines & Traditions",
  description:
    "Browse CeremonyVerse resources for Indian wedding outfits, guest attire, dress code, sourcing from India, shipping, timelines, and cultural guidance.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/resources",
  },
  openGraph: {
    title: "Indian Wedding Resources | CeremonyVerse",
    description:
      "Guides for outfit sourcing, guest attire, timelines, shipping, and Indian wedding traditions.",
    type: "website",
    url: "https://www.ceremonyverse.com/resources",
  },
}

const featuredGuides = [
  {
    title: "What to Wear to an Indian Wedding",
    href: "/what-to-wear-indian-wedding",
    description:
      "A practical guest outfit guide covering lehengas, sarees, sherwanis, colors, and event-specific attire.",
  },
  {
    title: "Indian Wedding Dress Code",
    href: "/indian-wedding-dress-code",
    description:
      "Understand what guests should actually wear to mehndi, sangeet, ceremony, and reception events.",
  },
  {
    title: "Indian Wedding Guest Etiquette",
    href: "/indian-wedding-guest-etiquette",
    description:
      "Learn the etiquette basics guests should know before attending an Indian wedding.",
  },
  {
    title: "Indian Wedding Ceremony Timeline",
    href: "/indian-wedding-ceremony-timeline",
    description:
      "A simple guide to the typical order of events across an Indian wedding weekend.",
  },
]

const sourcingGuides = [
  {
    title: "Shop Wedding Outfits From India",
    href: "/shop-from-india",
    description:
      "How CeremonyVerse helps US-based couples source Indian wedding outfits remotely.",
  },
  {
    title: "Buy Indian Wedding Outfits Online (USA)",
    href: "/buy-indian-wedding-outfits-online-usa",
    description:
      "A guide for couples in the United States searching for authentic Indian weddingwear online.",
  },
  {
    title: "How to Buy Indian Wedding Outfits From India",
    href: "/how-to-buy-indian-wedding-outfits-from-india",
    description:
      "Sizing, communication, timeline, customization, and remote ordering guidance.",
  },
  {
    title: "Shipping Indian Wedding Outfits to the USA",
    href: "/indian-wedding-outfits-shipping-to-usa",
    description:
      "What to expect with international delivery, customs, and timeline planning.",
  },
  {
    title: "Indian Wedding Outfit Timeline",
    href: "/indian-wedding-outfit-timeline",
    description:
      "When to order bridal lehengas, sherwanis, and bridesmaid outfits before the wedding.",
  },
]

const additionalResources = [
  {
    title: "Wedding Glossary",
    href: "/wedding-glossary",
    description:
      "Understand common Indian wedding terms, events, and cultural references.",
  },
  {
    title: "Blog",
    href: "/blog",
    description:
      "Read long-form guides on sourcing, measurements, shipping, and wedding outfit coordination.",
  },
  {
    title: "Free Resources",
    href: "/free-resources",
    description:
      "Access planning tools and downloadable resources from CeremonyVerse.",
  },
]

function ResourceCard({
  title,
  href,
  description,
}: {
  title: string
  href: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-charcoal/10 bg-white p-6 transition hover:border-charcoal/25 hover:shadow-sm"
    >
      <h3 className="font-serif text-xl">{title}</h3>
      <p className="mt-3 text-base leading-7 text-charcoal/75">{description}</p>
      <p className="mt-4 text-sm font-medium text-charcoal">Read guide →</p>
    </Link>
  )
}

export default function ResourcesPage() {
  return (
    <main className="bg-white text-charcoal">
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-8 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-charcoal/60">
          CeremonyVerse Resources
        </p>

        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
          Indian wedding outfit, tradition, and guest guides
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-charcoal/75">
          Use this page as your starting point for Indian wedding outfit sourcing, guest
          attire, dress code, ceremony timelines, etiquette, and shipping guidance. This
          hub is designed to connect readers with the most useful pages on CeremonyVerse.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-4 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Guest guides</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {featuredGuides.map((item) => (
            <ResourceCard
              key={item.href}
              title={item.title}
              href={item.href}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Outfit sourcing guides</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {sourcingGuides.map((item) => (
            <ResourceCard
              key={item.href}
              title={item.title}
              href={item.href}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">More resources</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {additionalResources.map((item) => (
            <ResourceCard
              key={item.href}
              title={item.title}
              href={item.href}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 md:px-8">
        <div className="rounded-2xl border border-charcoal/10 bg-[#f8f6f2] p-8">
          <h2 className="font-serif text-2xl md:text-3xl">
            Need help sourcing outfits for your wedding events?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-charcoal/75">
            CeremonyVerse helps US-based couples source bridal lehengas, sherwanis,
            bridesmaid outfits, and other Indian weddingwear while reducing confusion
            around communication, timelines, and delivery.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop-from-india"
              className="rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Learn how sourcing works
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium text-charcoal transition hover:border-charcoal/40"
            >
              Contact CeremonyVerse
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
