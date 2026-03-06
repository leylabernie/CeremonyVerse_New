import type { Metadata } from "next";
import Link from "next/link";
import BookConsultationCTA from "../components/BookConsultationCTA";

export const metadata: Metadata = {
  title: "Indian Wedding Outfit Sourcing Services | CeremonyVerse",
  description:
    "CeremonyVerse helps US-based couples source authentic Indian wedding outfits directly from India and coordinate culturally aligned celebrations without overseas communication stress.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">

      <h1 className="text-3xl font-semibold text-charcoal">
        Wedding Outfit Sourcing Services
      </h1>

      <p className="mt-3 text-charcoal/70">
        CeremonyVerse helps US-based couples source authentic Indian wedding
        outfits directly from India and navigate cultural wedding logistics
        without dealing with overseas communication challenges.
      </p>

      {/* SERVICE GRID */}

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        {/* SOURCING */}

        <div className="rounded-2xl border border-charcoal/10 p-6">
          <h2 className="text-xl font-semibold text-charcoal">
            Outfit Sourcing From India
          </h2>

          <p className="mt-2 text-charcoal/70">
            We help you source bridal, groom, and family outfits directly from
            trusted boutiques and designers in India.
          </p>

          <Link href="/shop-from-india" className="mt-4 inline-block underline">
            See how sourcing works →
          </Link>
        </div>

        {/* LEHENGA */}

        <div className="rounded-2xl border border-charcoal/10 p-6">
          <h2 className="text-xl font-semibold text-charcoal">
            Buy Bridal Lehenga From India
          </h2>

          <p className="mt-2 text-charcoal/70">
            Looking for a bridal lehenga directly from India? We guide the
            sourcing process so you can identify the right designer and fit
            without traveling overseas.
          </p>

          <Link href="/buy-lehenga-from-india" className="mt-4 inline-block underline">
            Explore bridal lehenga sourcing →
          </Link>
        </div>

        {/* SHERWANI */}

        <div className="rounded-2xl border border-charcoal/10 p-6">
          <h2 className="text-xl font-semibold text-charcoal">
            Buy Sherwani From India (USA)
          </h2>

          <p className="mt-2 text-charcoal/70">
            Groom sherwanis and wedding menswear sourced directly from India,
            coordinated with the wedding timeline.
          </p>

          <Link href="/buy-sherwani-from-india-usa" className="mt-4 inline-block underline">
            View sherwani sourcing →
          </Link>
        </div>

        {/* BRIDESMAIDS */}

<div className="rounded-2xl border border-charcoal/10 p-6">
  <h2 className="text-xl font-semibold text-charcoal">
    Bridesmaid Lehengas From India
  </h2>

  <p className="mt-2 text-charcoal/70">
    Coordinated bridesmaid outfits sourced from India with guidance on
    measurements, color matching, and production timelines.
  </p>

  <Link href="/buy-bridesmaid-lehenga-from-india" className="mt-4 inline-block underline">
    Explore bridesmaid outfit sourcing →
  </Link>
</div>
        
        {/* WEDDING GUIDANCE */}

        <div className="rounded-2xl border border-charcoal/10 p-6">
          <h2 className="text-xl font-semibold text-charcoal">
            Wedding Coordination Guidance
          </h2>

          <p className="mt-2 text-charcoal/70">
            Support for couples navigating Indian wedding traditions,
            timelines, and family logistics while organizing celebrations in
            the United States.
          </p>

          <Link href="/consultation" className="mt-4 inline-block underline">
            Book a consultation →
          </Link>
        </div>

      </div>

      {/* CTA */}

      <div className="mt-12">
        <BookConsultationCTA />
      </div>

    </main>
  );
}
