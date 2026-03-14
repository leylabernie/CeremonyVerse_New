import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Indian Wedding Outfit Timeline | When to Order Lehengas and Sherwanis",
  description:
    "Learn the ideal timeline for sourcing Indian wedding outfits including bridal lehengas, sherwanis, bridesmaid outfits, and guest attire.",
}

export default function IndianWeddingOutfitTimeline() {
  return (
    <main className="bg-[#efe8df] text-charcoal">

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-8">

        <h1 className="font-serif text-4xl md:text-5xl leading-tight">
          Indian Wedding Outfit Timeline
        </h1>

        <p className="mt-6 text-lg leading-8">
          Many couples planning Indian weddings outside India are unsure
          when they should begin sourcing outfits. Bridal lehengas,
          sherwanis, bridesmaid attire, and family outfits often require
          several months of preparation when ordered from boutiques in
          India.
        </p>

        <p className="mt-4 text-lg leading-8">
          The timeline below reflects the typical process when sourcing
          outfits internationally while allowing time for tailoring,
          shipping, and final adjustments.
        </p>

      </section>


      <section className="mx-auto max-w-5xl px-6 py-12 md:px-8 border-t">

        <h2 className="font-serif text-2xl md:text-3xl">
          Recommended timeline
        </h2>

        <ul className="mt-6 space-y-4 text-lg">
          <li>
            <strong>6 months before wedding</strong> – Begin researching
            boutiques and deciding which outfits will be needed for each
            event.
          </li>

          <li>
            <strong>5 months before wedding</strong> – Select bridal
            lehenga, groom sherwani, and important ceremony outfits.
          </li>

          <li>
            <strong>4 months before wedding</strong> – Finalize designs,
            fabrics, and embroidery styles with boutiques.
          </li>

          <li>
            <strong>3 months before wedding</strong> – Confirm measurements
            and begin tailoring.
          </li>

          <li>
            <strong>2 months before wedding</strong> – Production updates
            and progress checks from boutiques.
          </li>

          <li>
            <strong>1 month before wedding</strong> – Outfits ship
            internationally and arrive for final fitting.
          </li>
        </ul>

      </section>


      <section className="mx-auto max-w-5xl px-6 py-12 md:px-8 border-t">

        <h2 className="font-serif text-2xl md:text-3xl">
          Outfits typically sourced from India
        </h2>

        <ul className="mt-6 space-y-3 text-lg">
          <li>Bridal lehengas and dupattas</li>
          <li>Groom sherwanis and bandhgalas</li>
          <li>Bridesmaid lehengas and sarees</li>
          <li>Family wedding outfits</li>
          <li>Jewelry and ceremony accessories</li>
        </ul>

      </section>


      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8 border-t">

        <div className="rounded-2xl border border-charcoal/10 bg-[#f8f6f2] p-8 text-center">

          <h2 className="font-serif text-2xl md:text-3xl">
            Need help sourcing outfits from India?
          </h2>

          <p className="mt-4 text-lg">
            CeremonyVerse helps couples identify trusted boutiques,
            coordinate wedding party outfits, and manage international
            ordering timelines.
          </p>

          <div className="mt-6">
            <Link
              href="/shop-from-india"
              className="inline-block rounded-full bg-charcoal px-6 py-3 text-white"
            >
              Learn about outfit sourcing
            </Link>
          </div>

        </div>

      </section>

    </main>
  )
}
