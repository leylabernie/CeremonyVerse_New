import type { Metadata } from "next";
import Link from "next/link";
import BookConsultationCTA from "../components/BookConsultationCTA";

export const metadata: Metadata = {
  title: "Indian Wedding Planning & Outfit Sourcing Services | CeremonyVerse",
  description:
    "CeremonyVerse helps US-based couples plan Indian weddings and source bridal outfits directly from India. Bridal lehengas, sherwanis, bridesmaid outfits and wedding logistics support.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">

      <h1 className="text-3xl font-semibold text-charcoal">
        Wedding Planning + Outfit Sourcing Services
      </h1>

      <p className="mt-3 text-charcoal/70">
        CeremonyVerse helps US-based couples plan Indian weddings and source
        authentic outfits directly from India without dealing with overseas
        coordination challenges.
      </p>

      {/* SERVICE GRID */}

      <div className="mt-10 grid gap-6 md:grid-cols-2">

       
            href="/indian-wedding-planner-usa"
            className="mt-4 inline-block underline"
          >
            Learn more &rarr;
          </Link>
        </div>

        {/* SOURCING */}

        <div className="rounded-2xl border border-charcoal/10 p-6">
          <h2 className="text-xl font-semibold text-charcoal">
            Outfit Sourcing From India
          </h2>

          <p className="mt-2 text-charcoal/70">
            We help you source bridal, groom, and family outfits directly from
            trusted boutiques and designers in India.
          </p>

          <Link
            href="/shop-from-india"
            className="mt-4 inline-block underline"
          >
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
            sourcing process so you can find the right designer and fit without
            traveling overseas.
          </p>

          <Link
            href="/buy-lehenga-from-india"
            className="mt-4 inline-block underline"
          >
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

          <Link
            href="/buy-sherwani-from-india-usa"
            className="mt-4 inline-block underline"
          >
            View sherwani sourcing →
          </Link>
        </div>

      </div>

  {/* PLANNING */}

        <div className="rounded-2xl border border-charcoal/10 p-6">
          <h2 className="text-xl font-semibold text-charcoal">
            Indian Wedding Planning Support
          </h2>

          <p className="mt-2 text-charcoal/70">
            Guidance for couples planning Indian weddings in the United States,
            including event timelines, ceremony logistics, and cultural
            coordination.
          </p>

          <Link

      {/* CTA */}

      <BookConsultationCTA />

    </main>
  );
}
