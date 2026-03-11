import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wedding Portfolio | CeremonyVerse",
  description: "Examples of Indian wedding styling, outfit sourcing, and coordinated wedding looks."
}

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-4xl md:text-5xl">Wedding Portfolio</h1>

      <p className="mt-6 text-lg text-charcoal/70 max-w-2xl">
        This section will feature curated examples of Indian wedding outfits,
        coordinated bridal party looks, and sourcing projects completed
        through CeremonyVerse.
      </p>
    </main>
  )
}
