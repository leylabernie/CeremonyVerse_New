import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Indian Wedding Guest Etiquette | What Guests Should Know",
  description:
    "A practical guide to Indian wedding guest etiquette including arrival timing, ceremony respect, footwear, gifts, photos, family customs, and outfit expectations.",
  keywords: [
    "Indian wedding guest etiquette",
    "Indian wedding etiquette",
    "what to know before attending Indian wedding",
    "Indian wedding guest guide",
    "Indian wedding customs for guests",
  ],
  alternates: {
    canonical: "https://ceremonyverse.com/indian-wedding-guest-etiquette",
  },
  openGraph: {
    title: "Indian Wedding Guest Etiquette | What Guests Should Know",
    description:
      "What guests should know before attending an Indian wedding, from timing and dress to ceremony respect and family customs.",
    type: "article",
    url: "https://ceremonyverse.com/indian-wedding-guest-etiquette",
  },
}

export default function IndianWeddingGuestEtiquettePage() {
  return (
    <main className="bg-white text-charcoal">
      <section className="mx-auto max-w-4xl px-6 py-14 md:px-8 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-charcoal/60">
          Guest Guide
        </p>

        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
          Indian wedding guest etiquette: what guests should know before attending
        </h1>

        <p className="mt-6 text-lg leading-8 text-charcoal/75">
          Indian weddings are warm, social, and often deeply rooted in family tradition.
          Guests are not expected to know every custom, but showing respect, flexibility,
          and effort goes a long way.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-4 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Arrive with the right mindset</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          Indian weddings may include several events, large families, shifting timelines,
          and many ceremonial moments. The best approach is to stay patient, observant,
          and open to a different flow than a typical Western wedding.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Common etiquette expectations</h2>
        <ul className="mt-4 space-y-3 text-base leading-7 text-charcoal/75">
          <li>• Dress respectfully and avoid overly casual clothing</li>
          <li>• Arrive on time, especially for ceremony events</li>
          <li>• Follow signage or family guidance before entering ritual spaces</li>
          <li>• Be mindful when taking photos during sacred moments</li>
          <li>• Expect a more social and family-centered environment</li>
          <li>• Ask politely if you are unsure what to do</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Shoes, ceremony spaces, and movement</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          Some ceremonies may require guests to remove shoes before entering a mandap,
          home, or sacred area. Watch what others are doing and follow family or venue
          instructions. Do not assume every space is casual just because the atmosphere
          feels festive.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Photos and phone etiquette</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          Some parts of an Indian wedding are high-energy and photo-friendly. Others are
          religious or emotionally important. Avoid stepping in front of professional
          photographers, entering ceremony space for close-up videos, or treating sacred
          rituals like a performance.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Food, hospitality, and family culture</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          Hospitality is a major part of Indian weddings. Guests are often encouraged to
          eat, mingle, and stay engaged. Be polite about dietary needs, and understand
          that food service may be different from a plated Western reception.
        </p>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          You may also be greeted by extended family members, family friends, and
          community elders. A respectful tone matters.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Do guests need gifts?</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          Follow the couple’s registry or wedding website first. If the family has
          specific cultural preferences, the invitation or close family members may
          indicate that. Do not guess based on stereotypes.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Related guides</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link href="/indian-wedding-dress-code" className="rounded-2xl border border-charcoal/10 p-6 hover:border-charcoal/25">
            <h3 className="font-serif text-xl">Indian wedding dress code</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              Learn what guests should wear across different events.
            </p>
          </Link>

          <Link href="/what-to-wear-indian-wedding" className="rounded-2xl border border-charcoal/10 p-6 hover:border-charcoal/25">
            <h3 className="font-serif text-xl">What to wear to an Indian wedding</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              A broader guest outfit guide with attire examples.
            </p>
          </Link>

          <Link href="/indian-wedding-ceremony-timeline" className="rounded-2xl border border-charcoal/10 p-6 hover:border-charcoal/25">
            <h3 className="font-serif text-xl">Indian wedding ceremony timeline</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              Understand how major wedding events usually fit together.
            </p>
          </Link>

          <Link href="/resources" className="rounded-2xl border border-charcoal/10 p-6 hover:border-charcoal/25">
            <h3 className="font-serif text-xl">All resources</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              Browse CeremonyVerse guides for outfits, traditions, and logistics.
            </p>
          </Link>
        </div>
      </section>
    </main>
  )
}
