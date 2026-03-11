import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Indian Wedding Dress Code | What Guests Should Wear",
  description:
    "Understand Indian wedding dress code expectations for women, men, family members, and guests across mehndi, sangeet, ceremony, and reception events.",
  keywords: [
    "Indian wedding dress code",
    "what to wear to Indian wedding",
    "Indian wedding guest attire",
    "lehenga for wedding guest",
    "Indian wedding men attire",
    "sherwani guest outfit",
  ],
  alternates: {
    canonical: "https://ceremonyverse.com/indian-wedding-dress-code",
  },
  openGraph: {
    title: "Indian Wedding Dress Code | What Guests Should Wear",
    description:
      "A practical guide to Indian wedding guest attire across events, colors, and dress code expectations.",
    type: "article",
    url: "https://ceremonyverse.com/indian-wedding-dress-code",
  },
}

export default function IndianWeddingDressCodePage() {
  return (
    <main className="bg-white text-charcoal">
      <section className="mx-auto max-w-4xl px-6 py-14 md:px-8 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-charcoal/60">
          Guest Guide
        </p>

        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
          Indian wedding dress code: what guests should actually wear
        </h1>

        <p className="mt-6 text-lg leading-8 text-charcoal/75">
          Indian weddings are usually colorful, formal, and event-specific. There is
          rarely one outfit that works for the entire weekend. What you wear depends on
          your role, the time of day, and which event you are attending.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-4 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">The simplest rule</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          Dress respectfully, choose festive fabrics or colors, and avoid clothing that
          feels too casual for a major family celebration. Indian wedding style usually
          leans more polished and celebratory than a standard Western wedding guest look.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">What women can wear</h2>
        <ul className="mt-4 space-y-3 text-base leading-7 text-charcoal/75">
          <li>• Lehengas for sangeet, reception, or formal evening events</li>
          <li>• Sarees for ceremonies, receptions, or family-hosted functions</li>
          <li>• Anarkali suits or salwar suits for guests who want comfort and coverage</li>
          <li>• Indo-Western outfits for modern celebrations when the couple is flexible</li>
        </ul>

        <p className="mt-4 text-base leading-8 text-charcoal/75">
          If you are new to Indian fashion, an anarkali or ready-to-wear lehenga is often
          the easiest place to start.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">What men can wear</h2>
        <ul className="mt-4 space-y-3 text-base leading-7 text-charcoal/75">
          <li>• Kurta pajama for mehndi, haldi, or less formal functions</li>
          <li>• Kurta with a Nehru jacket for polished daytime events</li>
          <li>• Sherwani for wedding ceremonies or formal receptions</li>
          <li>• Indo-Western sets for modern events with a fashion-forward dress code</li>
        </ul>

        <p className="mt-4 text-base leading-8 text-charcoal/75">
          Men do not always need a sherwani, but it can be appropriate for close family,
          wedding party members, or highly formal celebrations.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Dress code by event</h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-serif text-xl">Mehndi</h3>
            <p className="mt-2 text-charcoal/75 leading-7">
              Usually bright, playful, and comfortable. Prints, lighter embroidery, and
              easier silhouettes work well.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl">Haldi</h3>
            <p className="mt-2 text-charcoal/75 leading-7">
              Often yellow, floral, or lightweight. Guests should avoid wearing anything
              too delicate because haldi events can get messy.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl">Sangeet</h3>
            <p className="mt-2 text-charcoal/75 leading-7">
              More glamorous and performance-oriented. This is where lehengas, shararas,
              embellished kurtas, and statement looks are common.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl">Wedding ceremony</h3>
            <p className="mt-2 text-charcoal/75 leading-7">
              Formal, respectful, and elegant. Guests should avoid looking too casual and
              should pay attention to venue, weather, and ceremony timing.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl">Reception</h3>
            <p className="mt-2 text-charcoal/75 leading-7">
              Usually one of the most formal events. Rich fabrics, deeper colors, and more
              embellished outfits are common.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Colors to wear and avoid</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          Jewel tones, pastels, metallic accents, and festive embroidery are all normal at
          Indian weddings. Unless the couple says otherwise, avoid looking too plain, too
          casual, or like you are dressed for a standard cocktail party.
        </p>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          Also pay attention to family guidance. Some communities or families may prefer
          certain colors for certain events.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Related guides</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link href="/what-to-wear-indian-wedding" className="rounded-2xl border border-charcoal/10 p-6 hover:border-charcoal/25">
            <h3 className="font-serif text-xl">What to wear to an Indian wedding</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              Start here if you want a broader guest outfit overview.
            </p>
          </Link>

          <Link href="/indian-wedding-guest-etiquette" className="rounded-2xl border border-charcoal/10 p-6 hover:border-charcoal/25">
            <h3 className="font-serif text-xl">Indian wedding guest etiquette</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              Learn what guests should know beyond clothing.
            </p>
          </Link>

          <Link href="/buy-lehenga-from-india" className="rounded-2xl border border-charcoal/10 p-6 hover:border-charcoal/25">
            <h3 className="font-serif text-xl">Buy a lehenga from India</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              Helpful if you need a more authentic or custom guest outfit.
            </p>
          </Link>

          <Link href="/buy-sherwani-from-india-usa" className="rounded-2xl border border-charcoal/10 p-6 hover:border-charcoal/25">
            <h3 className="font-serif text-xl">Buy a sherwani from India</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              A guide for men shopping formal Indian weddingwear.
            </p>
          </Link>
        </div>
      </section>
    </main>
  )
}
