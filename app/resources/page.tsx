import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Indian Wedding Resources | Outfit Guides, Dress Code, Timelines & Traditions",
  description:
    "Browse CeremonyVerse resources for Indian wedding outfits, guest attire, dress code, ceremony timelines, shipping guidance, and cultural traditions.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/resources",
  },
  openGraph: {
    title: "Indian Wedding Resources | CeremonyVerse",
    description:
      "Guides explaining Indian wedding attire, traditions, ceremony timelines, and how to source wedding outfits from India.",
    type: "website",
    url: "https://www.ceremonyverse.com/resources",
  },
}

const guides = [
  {
    title: "What to Wear to an Indian Wedding",
    href: "/what-to-wear-indian-wedding",
    description:
      "A practical guide explaining what guests should wear to Indian wedding ceremonies including lehengas, sarees, sherwanis, and dress etiquette.",
  },
  {
    title: "Indian Wedding Dress Code",
    href: "/indian-wedding-dress-code",
    description:
      "Understand traditional Indian wedding dress expectations across events like mehndi, sangeet, ceremony, and reception.",
  },
  {
    title: "Indian Wedding Guest Etiquette",
    href: "/indian-wedding-guest-etiquette",
    description:
      "Learn the customs and etiquette guests should understand when attending an Indian wedding celebration.",
  },
  {
    title: "Indian Wedding Ceremony Timeline",
    href: "/indian-wedding-ceremony-timeline",
    description:
      "A simple explanation of the typical order of events across an Indian wedding weekend.",
  },
]

const sourcing = [
  {
    title: "Shop Wedding Outfits From India",
    href: "/shop-from-india",
    description:
      "Learn how CeremonyVerse helps couples source bridal lehengas, sherwanis, and wedding outfits directly from India.",
  },
  {
    title: "Buy Indian Wedding Outfits Online",
    href: "/buy-indian-wedding-outfits-online",
    description:
      "A step-by-step guide explaining how couples safely buy Indian wedding outfits online from overseas boutiques.",
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
      className="rounded-xl border border-charcoal/10 bg-white p-6 transition hover:border-charcoal/30 hover:shadow-sm"
    >
      <h3 className="font-serif text-xl">{title}</h3>
      <p className="mt-3 text-base leading-7 text-charcoal/70">{description}</p>
      <p className="mt-4 text-sm font-medium text-charcoal">Read guide →</p>
    </Link>
  )
}

export default function ResourcesPage() {
  return (
    <main className="bg-white text-charcoal">

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-charcoal/60">
          CeremonyVerse Resources
        </p>

        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
          Indian wedding outfit and tradition guides
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-charcoal/75">
          Indian weddings involve multiple ceremonies, traditional clothing,
          and specific cultural etiquette. Many guests and couples attending
          their first Indian wedding are unsure what to wear, how events work,
          and how to source authentic outfits from India.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-charcoal/75">
          CeremonyVerse provides practical guides explaining Indian wedding
          dress codes, ceremony timelines, outfit sourcing, and cultural
          traditions so couples and guests can prepare with confidence.
        </p>
      </section>

      {/* Popular Guides */}
      <section className="mx-auto max-w-5xl px-6 py-6 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">
          Most popular Indian wedding guides
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {guides.map((item) => (
            <ResourceCard
              key={item.href}
              title={item.title}
              href={item.href}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* Outfit sourcing */}
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">
          Outfit sourcing guides
        </h2>

        <p className="mt-4 max-w-2xl text-charcoal/70">
          Many couples planning Indian weddings in the United States choose
          to source wedding outfits from boutiques in India. These guides
          explain the process, timelines, and common challenges involved.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {sourcing.map((item) => (
            <ResourceCard
              key={item.href}
              title={item.title}
              href={item.href}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="rounded-2xl border border-charcoal/10 bg-[#f8f6f2] p-8">
          <h2 className="font-serif text-2xl md:text-3xl">
            Need help sourcing wedding outfits?
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-charcoal/75">
            CeremonyVerse helps couples source bridal lehengas, sherwanis,
            bridesmaid outfits, and other Indian weddingwear while navigating
            international ordering, sizing, and delivery timelines.
          </p>

          <div className="mt-6">
            <Link
              href="/shop-from-india"
              className="inline-block rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Learn how sourcing works
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
