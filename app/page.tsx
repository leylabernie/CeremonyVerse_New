import Link from "next/link"

export default function Page() {
  return (
    <main className="bg-white text-charcoal">

      <section className="mx-auto max-w-5xl px-6 py-20">

        <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-900">
          Indian Wedding Outfit Sourcing From India — Managed From the US
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
          CeremonyVerse helps couples source authentic Indian wedding outfits including
          bridal lehengas, sherwanis, bridesmaid attire, and ceremony essentials while
          navigating traditions with clarity.
        </p>

        <p className="mt-4 text-lg text-charcoal/70">
          Work with trusted boutiques in India without the stress of international
          communication, sizing uncertainty, or shipping logistics. We guide the
          process from inspiration to delivery.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/shop-from-india"
            className="px-6 py-3 rounded-full bg-charcoal text-white text-sm"
          >
            Learn How Outfit Sourcing Works
          </Link>

          <Link
            href="/resources"
            className="px-6 py-3 rounded-full border border-charcoal/30 text-sm"
          >
            Browse Indian Wedding Guides
          </Link>
        </div>

      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">

  <h2 className="font-serif text-3xl md:text-4xl">
    Indian Wedding Planning Guides
  </h2>

  <p className="mt-4 text-charcoal/70 max-w-2xl">
    Learn what to wear, understand wedding traditions, and explore practical
    advice for attending Indian weddings.
  </p>

  <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

    <Link href="/what-to-wear-indian-wedding" className="border p-6 hover:shadow-sm">
      <h3 className="font-serif text-xl">What to Wear to an Indian Wedding</h3>
      <p className="mt-3 text-sm text-charcoal/70">
        Outfit ideas for guests attending Indian wedding ceremonies and receptions.
      </p>
    </Link>

    <Link href="/indian-wedding-dress-code" className="border p-6 hover:shadow-sm">
      <h3 className="font-serif text-xl">Indian Wedding Dress Code</h3>
      <p className="mt-3 text-sm text-charcoal/70">
        Understand appropriate attire for mehndi, sangeet, ceremony, and reception.
      </p>
    </Link>

    <Link href="/indian-wedding-guest-etiquette" className="border p-6 hover:shadow-sm">
      <h3 className="font-serif text-xl">Indian Wedding Guest Etiquette</h3>
      <p className="mt-3 text-sm text-charcoal/70">
        Cultural tips to help guests participate respectfully and confidently.
      </p>
    </Link>

    <Link href="/indian-wedding-ceremony-timeline" className="border p-6 hover:shadow-sm">
      <h3 className="font-serif text-xl">Indian Wedding Ceremony Timeline</h3>
      <p className="mt-3 text-sm text-charcoal/70">
        A simple guide to understanding the sequence of Indian wedding events.
      </p>
    </Link>

  </div>

</section>

    </main>
  )
}
