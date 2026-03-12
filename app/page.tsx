import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main>

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-900 leading-tight">
          Indian Wedding Outfits Sourced From India — Without the Stress
        </h1>

        <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
          CeremonyVerse helps couples source authentic Indian wedding outfits
          including bridal lehengas, sherwanis, bridesmaid attire, and wedding
          party clothing from trusted boutiques in India.
        </p>

        <p className="mt-4 text-lg text-charcoal/70 max-w-3xl">
          Avoid the confusion of international shopping, sizing uncertainty,
          and unreliable vendors. We guide your sourcing process from
          selection to delivery.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
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
      </section>


      <section className="mx-auto max-w-6xl px-6 py-16 border-t">
        <h2 className="text-3xl font-serif text-stone-900 mb-8">
          Outfits We Help Source
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-muted-foreground">
          <div>
            <h3 className="font-medium text-stone-900 mb-2">Bridal Lehengas</h3>
            <p>Custom bridal outfits sourced from boutiques across India.</p>
          </div>

          <div>
            <h3 className="font-medium text-stone-900 mb-2">Sherwanis</h3>
            <p>Traditional and modern groom attire tailored for wedding ceremonies.</p>
          </div>

          <div>
            <h3 className="font-medium text-stone-900 mb-2">Bridesmaid Outfits</h3>
            <p>Coordinated bridesmaid lehengas and sarees for the wedding party.</p>
          </div>

          <div>
            <h3 className="font-medium text-stone-900 mb-2">Wedding Guest Attire</h3>
            <p>Elegant outfits for family members and wedding guests.</p>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-6xl px-6 py-16 border-t">
        <h2 className="text-3xl font-serif text-stone-900 mb-6">
          Why Couples Use CeremonyVerse
        </h2>

        <ul className="space-y-3 text-muted-foreground max-w-3xl">
          <li>• Guidance choosing reliable boutiques in India</li>
          <li>• Help coordinating bridal party outfits</li>
          <li>• Support navigating sizing and custom orders</li>
          <li>• Advice on shipping timelines for wedding events</li>
        </ul>
      </section>


      <section className="mx-auto max-w-6xl px-6 py-20 border-t text-center">
        <h2 className="text-3xl font-serif text-stone-900 mb-4">
          Start Planning Your Wedding Outfits
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          Learn how sourcing Indian wedding outfits works and avoid common
          international shopping mistakes.
        </p>

        <Button asChild>
          <Link href="/shop-from-india">
            Learn How Outfit Sourcing Works
          </Link>
        </Button>
      </section>

    </main>
  )
}
