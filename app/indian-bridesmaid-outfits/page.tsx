import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Indian Bridesmaid Outfits | Lehengas & Wedding Party Attire",
  description:
    "Guide to Indian bridesmaid outfits including lehengas, sarees, and coordinated wedding party attire sourced from India.",
}

export default function Page() {
  return (
    <main className="bg-white text-charcoal">

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl">
          Indian Bridesmaid Outfits
        </h1>

        <p className="mt-6 text-lg text-charcoal/75 max-w-3xl">
          Bridesmaids at Indian weddings often wear coordinated outfits
          such as lehengas, sarees, or contemporary fusion designs.
          Many couples choose to source bridesmaid outfits from India
          to achieve cohesive styling across wedding events.
        </p>

        <p className="mt-4 text-lg text-charcoal/75 max-w-3xl">
          CeremonyVerse helps couples explore bridesmaid outfit styles,
          coordinate colors, and source designs from boutiques in India.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 border-t">
        <h2 className="font-serif text-2xl">
          Popular Bridesmaid Outfit Styles
        </h2>

        <ul className="mt-6 space-y-3 text-charcoal/70">
          <li>• Coordinated bridesmaid lehengas</li>
          <li>• Sarees in matching wedding colors</li>
          <li>• Indo-western fusion dresses</li>
          <li>• Mix-and-match lehenga skirts and blouses</li>
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 border-t">
        <h2 className="font-serif text-2xl">
          Coordinating Bridesmaid Outfits
        </h2>

        <p className="mt-4 text-charcoal/75 max-w-3xl">
          Bridesmaid outfits are often coordinated around wedding colors,
          ceremony themes, or regional traditions. Some couples prefer
          identical outfits while others allow bridesmaids to select
          complementary styles within a shared color palette.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 border-t">
        <div className="rounded-xl border border-charcoal/10 bg-[#f8f6f2] p-8 text-center">
          <h2 className="font-serif text-2xl">
            Explore Bridesmaid Outfit Ideas
          </h2>

          <p className="mt-4 text-charcoal/75">
            Browse outfit inspiration and bridesmaid designs.
          </p>

          <div className="mt-6">
            <Link
              href="https://desiweddingstudious.etsy.com"
              className="rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white"
            >
              View Bridesmaid Outfits
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
