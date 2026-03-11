import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Indian Wedding Ceremony Timeline | Typical Order of Events",
  description:
    "Learn the typical Indian wedding ceremony timeline, including pre-wedding events like mehndi and sangeet, plus the wedding ceremony and reception.",
  keywords: [
    "Indian wedding ceremony timeline",
    "Indian wedding order of events",
    "mehndi sangeet wedding reception order",
    "Indian wedding timeline for guests",
    "South Asian wedding timeline",
  ],
  alternates: {
    canonical: "https://ceremonyverse.com/indian-wedding-ceremony-timeline",
  },
  openGraph: {
    title: "Indian Wedding Ceremony Timeline | Typical Order of Events",
    description:
      "A simple guide to the usual order of events in an Indian wedding weekend.",
    type: "article",
    url: "https://ceremonyverse.com/indian-wedding-ceremony-timeline",
  },
}

export default function IndianWeddingCeremonyTimelinePage() {
  return (
    <main className="bg-white text-charcoal">
      <section className="mx-auto max-w-4xl px-6 py-14 md:px-8 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-charcoal/60">
          Tradition Guide
        </p>

        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
          Indian wedding ceremony timeline: the typical order of events
        </h1>

        <p className="mt-6 text-lg leading-8 text-charcoal/75">
          Indian weddings often take place across multiple days rather than one single
          ceremony. The exact format depends on region, religion, family traditions, and
          how modern or traditional the celebration is, but many couples follow a similar
          structure.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-4 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">1. Mehndi</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          A pre-wedding celebration centered around henna, music, and family gathering.
          This event is often colorful, social, and less formal than the wedding day.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">2. Haldi</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          A ceremony where turmeric paste is applied as part of a joyful pre-wedding
          ritual. Outfits for haldi are often lighter and more practical because the event
          can get messy.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">3. Sangeet</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          A music and dance event that is often one of the most energetic parts of the
          weekend. Families and friends may perform choreographed dances, and guests
          usually wear more festive evening outfits.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">4. Baraat</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          The groom’s procession before the ceremony. Depending on the family and region,
          this can include music, dancing, and a celebratory arrival at the venue.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">5. Wedding ceremony</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          This is the central marriage ceremony, often held under a mandap. Rituals vary,
          but guests should expect a longer, more symbolic ceremony than a short Western
          format.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">6. Reception</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          The reception is usually the most formal post-wedding event and may feature new
          outfits, speeches, dinner, and dancing. This is often where guests wear their
          most polished evening look.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Important note</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/75">
          Not every Indian wedding includes every event, and not every community follows
          the same sequence. Use this page as a general guide, then defer to the couple’s
          invitation, website, or family instructions.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl">Related guides</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link href="/indian-wedding-dress-code" className="rounded-2xl border border-charcoal/10 p-6 hover:border-charcoal/25">
            <h3 className="font-serif text-xl">Indian wedding dress code</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              What guests should wear to different events.
            </p>
          </Link>

          <Link href="/indian-wedding-guest-etiquette" className="rounded-2xl border border-charcoal/10 p-6 hover:border-charcoal/25">
            <h3 className="font-serif text-xl">Indian wedding guest etiquette</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              Practical etiquette guidance for attending respectfully.
            </p>
          </Link>

          <Link href="/what-to-wear-indian-wedding" className="rounded-2xl border border-charcoal/10 p-6 hover:border-charcoal/25">
            <h3 className="font-serif text-xl">What to wear to an Indian wedding</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              A broader guest attire guide for common outfit questions.
            </p>
          </Link>

          <Link href="/indian-wedding-outfit-timeline" className="rounded-2xl border border-charcoal/10 p-6 hover:border-charcoal/25">
            <h3 className="font-serif text-xl">Indian wedding outfit timeline</h3>
            <p className="mt-3 text-charcoal/75 leading-7">
              Separate from ceremony timing: this one covers when to order outfits.
            </p>
          </Link>
        </div>
      </section>
    </main>
  )
}
