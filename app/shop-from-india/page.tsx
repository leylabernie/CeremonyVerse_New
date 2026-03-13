import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Shop Indian Wedding Outfits From India | CeremonyVerse",
  description:
    "CeremonyVerse helps couples source bridal lehengas, sherwanis, bridesmaid outfits, and wedding guest attire directly from trusted boutiques in India.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/shop-from-india",
  },
}

export default function ShopFromIndiaPage() {
  return (
    <main className="bg-[#f6f1e8] text-charcoal">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:px-8">
        <h1 className="font-serif text-4xl leading-tight md:text-5xl">
          Shop Indian Wedding Outfits From India
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-charcoal">
          Many couples planning Indian weddings in the United States choose to
          source bridal lehengas, sherwanis, and wedding outfits directly from
          India. However, buying internationally can be confusing without
          guidance.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-charcoal">
          CeremonyVerse helps couples source bridal lehengas, sherwanis,
          bridesmaid outfits, family outfits, and guest attire from trusted
          boutiques in India. We support clients with boutique selection,
          design coordination, measurements, customization, and shipping
          timelines.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-charcoal">
  Most clients are not choosing a single pre-listed product. CeremonyVerse
  helps couples identify boutiques, coordinate bridal party outfits, and
  source styles from India based on their wedding events, preferences,
  measurements, and timeline.
</p>

        <div className="mt-8">
          <Link
            href="https://desiweddingstudious.etsy.com"
            className="inline-block rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Start Sourcing
          </Link>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-5xl border-t px-6 py-14 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">
          Why sourcing outfits from India can be difficult
        </h2>

        <ul className="mt-6 grid gap-3 md:grid-cols-2 text-charcoal">
          <li>• Uncertainty about which boutiques are reliable</li>
          <li>• Confusion around sizing and custom tailoring</li>
          <li>• Shipping delays before wedding events</li>
          <li>• Difficulty coordinating outfits across bridal parties</li>
        </ul>

        <p className="mt-6 text-charcoal">
          Without guidance, couples often face unnecessary stress while trying
          to coordinate multiple outfits across international vendors.
        </p>
      </section>

      {/* How CeremonyVerse Helps */}
      <section className="mx-auto max-w-5xl border-t px-6 py-14 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">
          How CeremonyVerse helps
        </h2>

        <ul className="mt-6 grid gap-3 md:grid-cols-2 text-charcoal">
          <li>• Guidance selecting trusted boutiques in India</li>
          <li>• Coordination for bridal party outfits</li>
          <li>• Advice on measurements and customization</li>
          <li>• Planning timelines for international shipping</li>
        </ul>
      </section>

      {/* Outfits */}
      <section className="mx-auto max-w-5xl border-t px-6 py-14 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">
          Outfits couples commonly source
        </h2>

        <ul className="mt-6 grid gap-3 md:grid-cols-2 text-charcoal">
          <li>• Bridal lehengas</li>
          <li>• Sherwanis for grooms</li>
          <li>• Bridesmaid lehengas and sarees</li>
          <li>• Wedding guest attire</li>
          <li>• Jewelry and ceremony accessories</li>
        </ul>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-5xl border-t px-6 py-14 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">
          Typical sourcing process
        </h2>

        <ol className="mt-6 space-y-4 text-charcoal">
          <li>1. Identify the wedding events and outfit requirements</li>
          <li>2. Review boutique options and design styles</li>
          <li>3. Coordinate sizing and customization</li>
          <li>4. Confirm production and shipping timelines</li>
        </ol>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="rounded-2xl border border-charcoal/10 bg-[#f8f6f2] p-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl">
            Ready to explore outfit options?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-charcoal">
            Explore outfit inspiration and examples of styles we can help source
            and coordinate for weddings, bridal parties, and family events.
          </p>

          <div className="mt-6">
            <Link
              href="https://desiweddingstudious.etsy.com"
              className="inline-block rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Browse Example Styles
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
