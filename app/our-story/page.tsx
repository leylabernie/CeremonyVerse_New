import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About CeremonyVerse | Indian Wedding Outfit Sourcing & Cultural Guidance",
  description:
    "CeremonyVerse helps US-based couples source Indian wedding outfits and understand wedding traditions with clear guidance on lehengas, sherwanis, bridesmaid outfits, timelines, and etiquette.",
  keywords: [
    "about CeremonyVerse",
    "Indian wedding outfit sourcing",
    "buy lehenga from India USA",
    "Indian wedding traditions guide",
    "Indian wedding outfit help USA",
    "sherwani sourcing USA",
  ],
  openGraph: {
    title: "About CeremonyVerse | Indian Wedding Outfit Sourcing & Cultural Guidance",
    description:
      "CeremonyVerse helps US-based couples source Indian wedding outfits and navigate traditions with confidence.",
    type: "website",
    url: "https://ceremonyverse.com/our-story",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/our-story",
  },
}

export default function OurStoryPage() {
  return (
    <main className="bg-white text-charcoal">
      <section className="mx-auto max-w-4xl px-6 py-14 md:px-8 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-charcoal/60">
          About CeremonyVerse
        </p>

        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
          Indian wedding outfit sourcing and cultural guidance for couples in the US
        </h1>

        <p className="mt-6 text-lg leading-8 text-charcoal/75">
          CeremonyVerse was built for couples who want authentic Indian wedding outfits
          and clear cultural guidance without the confusion of doing everything alone.
          We help families in the United States understand what to wear, when to order,
          how to coordinate outfits across events, and how to source from India with
          less risk and more clarity.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-6 md:px-8">
        <div className="rounded-2xl border border-charcoal/10 bg-[#f8f6f2] p-8">
          <h2 className="font-serif text-2xl md:text-3xl">What we actually help with</h2>

          <ul className="mt-6 space-y-3 text-base leading-7 text-charcoal/75">
            <li>• Bridal lehenga sourcing from India</li>
            <li>• Sherwani and groom outfit guidance</li>
            <li>• Bridesmaid and family outfit coordination</li>
            <li>• Outfit timelines, measurements, and shipping planning</li>
            <li>• Guest dress code and etiquette education</li>
            <li>• Cultural context for multi-event Indian weddings</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Why CeremonyVerse exists</h2>

        <p className="mt-4 text-base leading-8 text-charcoal/75">
          Many US-based couples want the beauty and meaning of Indian wedding clothing
          and traditions, but they do not have the time, language confidence, travel
          flexibility, or boutique network to manage it smoothly. Shopping in India can
          offer better variety and customization, but it also introduces issues around
          communication, sizing, production lead times, and international delivery.
        </p>

        <p className="mt-4 text-base leading-8 text-charcoal/75">
          CeremonyVerse exists to make that process easier to understand. We combine
          practical sourcing guidance with educational content so couples can make better
          decisions about lehengas, sherwanis, bridesmaid outfits, timelines, and
          cultural expectations.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">How this site is structured</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-charcoal/10 p-6">
            <h3 className="font-serif text-xl">Guides for search traffic</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              We publish practical guides answering the real questions couples and guests
              search for: what to wear, how early to order, where to buy, how shipping
              works, and what each event means.
            </p>
          </div>

          <div className="rounded-2xl border border-charcoal/10 p-6">
            <h3 className="font-serif text-xl">Services for qualified leads</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              When readers need more than information, CeremonyVerse can support sourcing,
              coordination, and consultation for Indian wedding outfits and planning
              logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Start here</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link
            href="/shop-from-india"
            className="rounded-2xl border border-charcoal/10 p-6 transition hover:border-charcoal/25"
          >
            <h3 className="font-serif text-xl">Shop wedding outfits from India</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              Learn how our sourcing process works for lehengas, sherwanis, and wedding
              party outfits.
            </p>
          </Link>

          <Link
            href="/resources"
            className="rounded-2xl border border-charcoal/10 p-6 transition hover:border-charcoal/25"
          >
            <h3 className="font-serif text-xl">Browse all guides and resources</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              Explore dress code, guest etiquette, outfit timelines, and sourcing guides.
            </p>
          </Link>

          <Link
            href="/what-to-wear-indian-wedding"
            className="rounded-2xl border border-charcoal/10 p-6 transition hover:border-charcoal/25"
          >
            <h3 className="font-serif text-xl">What to wear to an Indian wedding</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              A guest-friendly guide to outfit types, colors, and event expectations.
            </p>
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-charcoal/10 p-6 transition hover:border-charcoal/25"
          >
            <h3 className="font-serif text-xl">Contact CeremonyVerse</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              Reach out if you need help with outfit sourcing, coordination, or planning.
            </p>
          </Link>
        </div>
      </section>
    </main>
  )
}
