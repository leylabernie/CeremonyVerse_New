import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-900">
        Indian Wedding Outfits Sourced From India — Without the Stress
      </h1>

      <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
        CeremonyVerse helps couples source authentic Indian wedding outfits
        including bridal lehengas, sherwanis, bridesmaid attire, and wedding
        party clothing from trusted boutiques in India.
      </p>

      <p className="mt-4 text-lg text-charcoal/70">
        Avoid the confusion of international shopping, sizing uncertainty, and
        unreliable vendors. We guide your sourcing process from selection to
        delivery.
      </p>

      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/shop-from-india">
            How Outfit Sourcing Works
          </Link>
        </Button>

        <Button asChild variant="secondary">
          <Link href="/resources">
            Wedding Outfit Guides
          </Link>
        </Button>
      </div>

    </main>
  )
}
