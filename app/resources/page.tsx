import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Indian Wedding Guides & Resources | CeremonyVerse",
  description:
    "Practical guides for Indian wedding outfits, guest attire, dress codes, ceremony timelines, and sourcing wedding clothing from India.",
}

export default function ResourcesPage() {
  return (
    <main className="bg-white text-charcoal">

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl">
          Indian Wedding Guides & Resources
        </h1>

        <p className="mt-6 text-lg text-charcoal/70 max-w-2xl">
          Practical guides for Indian wedding outfits, guest attire, ceremony
          timelines, and sourcing wedding clothing from India. These resources
          help couples and guests understand traditions while planning outfits
          for each wedding event.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">

          <Link
            href="/what-to-wear-indian-wedding"
            className="block border border-charcoal/10 rounded-xl p-6 hover:border-charcoal/30 transition"
          >
            <h3 className="font-serif text-xl">
              What to Wear to an Indian Wedding
            </h3>
            <p className="mt-2 text-charcoal/70">
              A guest outfit guide covering lehengas, sarees, sherwanis, and
              event-specific attire for Indian weddings.
            </p>
          </Link>

          <Link
            href="/indian-wedding-dress-code"
            className="block border border-charcoal/10 rounded-xl p-6 hover:border-charcoal/30 transition"
          >
            <h3 className="font-serif text-xl">
              Indian Wedding Dress Code
            </h3>
            <p className="mt-2 text-charcoal/70">
              Understand what guests should wear to mehndi, sangeet, ceremony,
              and reception events.
            </p>
          </Link>

          <Link
            href="/indian-wedding-guest-etiquette"
            className="block border border-charcoal/10 rounded-xl p-6 hover:border-charcoal/30 transition"
          >
            <h3 className="font-serif text-xl">
              Indian Wedding Guest Etiquette
            </h3>
            <p className="mt-2 text-charcoal/70">
              Cultural etiquette tips guests should know before attending an
              Indian wedding celebration.
            </p>
          </Link>

          <Link
            href="/indian-wedding-ceremony-timeline"
            className="block border border-charcoal/10 rounded-xl p-6 hover:border-charcoal/30 transition"
          >
            <h3 className="font-serif text-xl">
              Indian Wedding Ceremony Timeline
            </h3>
            <p className="mt-2 text-charcoal/70">
              A simple breakdown of the typical order of events across an
              Indian wedding weekend.
            </p>
          </Link>

        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:px-8">
        <div className="border border-charcoal/10 rounded-xl p-8 bg-[#f8f6f2]">

          <h2 className="font-serif text-2xl">
            Need help sourcing Indian wedding outfits?
          </h2>

          <p className="mt-3 text-charcoal/70 max-w-2xl">
            CeremonyVerse helps US-based couples source bridal lehengas,
            sherwanis, and coordinated wedding party outfits directly from
            India while navigating sizing, customization, and shipping.
          </p>

          <Link
            href="/shop-from-india"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-charcoal text-white text-sm"
          >
            Learn How Outfit Sourcing Works
          </Link>

        </div>
      </section>

    </main>
  )
}
