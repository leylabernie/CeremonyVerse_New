import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian Wedding Outfits From India | CeremonyVerse",
  description: "Learn how CeremonyVerse helps couples source authentic Indian wedding outfits from India."
}

export default function OutfitSourcingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-4xl md:text-5xl">
        Indian Wedding Outfit Sourcing From India
      </h1>

      <p className="mt-6 text-lg text-charcoal/70 max-w-2xl">
        CeremonyVerse helps US-based couples source bridal lehengas,
        sherwanis, and coordinated wedding party outfits directly from
        India while navigating sizing, customization, and shipping.
      </p>
    </main>
  )
}
