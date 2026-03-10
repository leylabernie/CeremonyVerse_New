import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indian Destination Wedding Planner Mexico | CeremonyVerse",
  description:
    "Planning an Indian destination wedding in Mexico? CeremonyVerse helps couples coordinate outfits, vendors, and multi-day ceremonies while sourcing authentic Indian wedding attire directly from India.",
}

export default function MexicoDestinationPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-6">
        Indian Destination Wedding Planner in Mexico
      </h1>

      <p className="mb-6 text-lg">
        Mexico has become one of the most popular destinations for Indian
        weddings. Beautiful beachfront resorts, large event spaces, and
        easier travel logistics make it ideal for multi-day celebrations.
      </p>

      <p className="mb-6">
        CeremonyVerse helps couples coordinate the complex cultural and
        logistical details of an Indian destination wedding — from outfit
        sourcing to ceremony planning and vendor coordination.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Indian Wedding Outfit Sourcing
      </h2>

      <p className="mb-6">
        One of the biggest challenges couples face when planning a destination
        wedding is sourcing authentic outfits for the bride, groom, and wedding
        party.
      </p>

      <p className="mb-6">
        CeremonyVerse helps couples source bridal lehengas, sherwanis,
        bridesmaid outfits, and ceremony accessories directly from trusted
        vendors in India without the stress of international shopping.
      </p>

      <a
        href="/shop-from-india"
        className="underline text-lg"
      >
        Learn how our Shop From India process works →
      </a>
    </main>
  )
}
