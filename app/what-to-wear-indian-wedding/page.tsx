import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "What to Wear to an Indian Wedding | Guest Outfit Guide",
  description:
    "A practical guide to Indian wedding guest attire including lehengas, sarees, sherwanis, colors, and outfit ideas for each wedding event.",
}

export default function WhatToWearIndianWeddingPage() {
  return (
    <main className="bg-white text-charcoal">

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl">
          What to Wear to an Indian Wedding
        </h1>

        <p className="mt-6 text-lg text-charcoal/70 max-w-3xl">
          Indian weddings are vibrant multi-day celebrations with several
          different events, and each event typically has its own style of
          attire. Guests often wear traditional clothing such as lehengas,
          sarees, kurta sets, or sherwanis. Understanding what to wear for
          each part of the wedding helps you feel comfortable while also
          respecting the cultural traditions of the celebration.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 md:px-8">

        <h2 className="font-serif text-2xl">Popular Indian Wedding Guest Outfits</h2>

        <p className="mt-4 text-charcoal/70 max-w-3xl">
          The most common guest outfits for Indian weddings include lehengas,
          sarees, salwar suits, and kurta sets. These outfits are colorful,
          elegant, and often feature embroidery, brocade, or silk fabrics.
        </p>

        <ul className="mt-6 space-y-3 text-charcoal/70">
          <li>• <strong>Lehenga Choli:</strong> A popular choice for female guests, consisting of a skirt, blouse, and dupatta.</li>
          <li>• <strong>Saree:</strong> A traditional draped garment worn for formal ceremonies and receptions.</li>
          <li>• <strong>Salwar Suit:</strong> A comfortable yet elegant option often worn at mehndi or daytime events.</li>
          <li>• <strong>Kurta Set:</strong> A classic outfit for male guests, usually paired with churidar pants.</li>
          <li>• <strong>Sherwani:</strong> A more formal option typically worn for the main ceremony or reception.</li>
        </ul>

      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 md:px-8">

        <h2 className="font-serif text-2xl">What to Wear for Each Wedding Event</h2>

        <div className="mt-6 space-y-6 text-charcoal/70 max-w-3xl">

          <p>
            <strong>Mehndi:</strong> Mehndi events are colorful and festive.
            Guests usually wear bright outfits such as lehengas, salwar suits,
            or lightweight sarees.
          </p>

          <p>
            <strong>Sangeet:</strong> The sangeet is a lively celebration with
            music and dancing. Many guests choose glamorous outfits such as
            embellished lehengas or elegant kurta sets.
          </p>

          <p>
            <strong>Ceremony:</strong> The wedding ceremony is the most
            traditional event. Guests typically wear more formal attire such
            as silk sarees, lehengas, or sherwanis.
          </p>

          <p>
            <strong>Reception:</strong> Reception outfits are often the most
            glamorous. Guests frequently choose heavily embroidered lehengas,
            designer sarees, or formal sherwani sets.
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:px-8">

        <h2 className="font-serif text-2xl">Where to Buy Indian Wedding Guest Outfits</h2>

        <p className="mt-4 text-charcoal/70 max-w-3xl">
          Many wedding guests living in the United States look for authentic
          Indian outfits but are unsure where to buy them. Traditional wedding
          clothing is often sourced from boutiques in India where the variety
          of fabrics, embroidery, and customization options is much wider.
        </p>

        <p className="mt-4 text-charcoal/70 max-w-3xl">
          CeremonyVerse helps couples and guests source authentic Indian
          wedding outfits directly from India while navigating sizing,
          customization, and shipping timelines.
        </p>

        <Link
          href="/shop-from-india"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-charcoal text-white text-sm"
        >
          Learn How Outfit Sourcing Works
        </Link>

      </section>

    </main>
  )
}
