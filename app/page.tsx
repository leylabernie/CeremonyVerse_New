import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main>

<section className="mx-auto max-w-6xl px-6 pt-12 pb-16">

  <div className="relative overflow-hidden rounded-3xl">

    <img
      src="/images/home-hero-lehenga.png"
      alt="Indian bridal lehenga sourced from India"
      className="h-[520px] w-full object-cover"
    />

    <div className="absolute inset-0 bg-black/30"></div>

    <div className="absolute inset-0 flex items-end">
      <div className="p-8 md:p-12 text-white max-w-2xl">

        <h1 className="font-serif text-4xl md:text-6xl leading-tight">
          Source Indian Wedding Outfits Directly From India
        </h1>

        <p className="mt-4 text-lg md:text-xl text-white/90">
          CeremonyVerse helps couples source bridal outfits, jewelry,
          ceremony items, favors, and wedding essentials from trusted
          boutiques in India without needing to travel.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/shop-from-india"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold"
          >
            Shop From India
          </a>

          <a
            href="/resources"
            className="border border-white px-6 py-3 rounded-full font-semibold"
          >
            View Guides
          </a>
        </div>

      </div>
    </div>

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

      <section className="mt-24 mx-auto max-w-6xl px-6">

  <h2 className="text-3xl font-semibold text-charcoal">
    Indian Wedding Outfit Guides
  </h2>

  <p className="mt-3 text-charcoal/70 max-w-2xl">
    Planning an Indian wedding often means sourcing outfits from India.
    These guides help couples and guests understand what to wear,
    how to measure, and when to order wedding outfits.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    <Link
      href="/bridal-lehengas-from-india"
      className="block border rounded-xl p-6 hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold">Bridal Lehengas From India</h3>
      <p className="mt-2 text-sm text-charcoal/70">
        Guide for brides sourcing bridal lehengas directly from India.
      </p>
    </Link>

    <Link
      href="/buy-sherwani-from-india-usa"
      className="block border rounded-xl p-6 hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold">Buy Sherwani From India</h3>
      <p className="mt-2 text-sm text-charcoal/70">
        Guide for grooms ordering sherwanis for Indian weddings.
      </p>
    </Link>

    <Link
      href="/indian-wedding-guest-dresses"
      className="block border rounded-xl p-6 hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold">Indian Wedding Guest Dresses</h3>
      <p className="mt-2 text-sm text-charcoal/70">
        Outfit ideas for guests attending Indian wedding ceremonies.
      </p>
    </Link>

    <Link
      href="/indian-wedding-outfit-sizing-guide"
      className="block border rounded-xl p-6 hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold">Outfit Sizing Guide</h3>
      <p className="mt-2 text-sm text-charcoal/70">
        How to measure correctly before ordering outfits from India.
      </p>
    </Link>

    <Link
      href="/when-to-order-indian-wedding-outfits"
      className="block border rounded-xl p-6 hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold">When to Order Wedding Outfits</h3>
      <p className="mt-2 text-sm text-charcoal/70">
        Timeline for ordering outfits before your wedding events.
      </p>
    </Link>

  </div>

</section>

    </main>
  )
}
