import type { Metadata } from "next";
import Link from "next/link";
import BookConsultationCTA from "../components/BookConsultationCTA";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Buy Bridesmaid Lehengas From India (USA Weddings) | CeremonyVerse",
  description:
    "Guidance for US-based couples sourcing coordinated bridesmaid lehengas from India. Plan sizing, colors, and timelines to avoid delays and mismatched outfits.",
  alternates: { canonical: "/buy-bridesmaid-lehenga-from-india" },
};

export default function BridesmaidLehengaPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">

      <h1 className="text-3xl font-semibold text-charcoal">
        Buy Bridesmaid Lehengas From India (For USA Weddings)
      </h1>

      <p className="mt-3 text-charcoal/70">
        Coordinating bridesmaid lehengas for an Indian wedding can quickly
        become complicated when outfits are sourced from overseas boutiques.
        Different measurements, fabric availability, and shipping timelines
        can make it difficult to keep everyone coordinated.
      </p>

      <p className="mt-3 text-charcoal/70">
        CeremonyVerse helps couples coordinate bridesmaid outfits from India
        with a clear plan for colors, measurements, production timelines,
        and delivery.
      </p>

      {/* HOW COORDINATION WORKS */}

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          How Bridesmaid Outfit Coordination Works
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
          <li>Define color palette and design direction</li>
          <li>Standardize measurement instructions for all bridesmaids</li>
          <li>Coordinate production timelines with wedding events</li>
          <li>Plan delivery buffer for alterations if needed</li>
        </ul>

        <p className="mt-4 text-charcoal/70">
          To understand the sourcing process in detail see:
          {" "}
          <Link href="/shop-from-india" className="underline">
            How to shop wedding outfits from India →
          </Link>
        </p>
      </section>

      {/* COMMON PROBLEMS */}

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Common Bridesmaid Outfit Problems
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
          <li>Different measurements causing inconsistent fits</li>
          <li>Color differences between batches</li>
          <li>Late production or international shipping delays</li>
          <li>Difficulty coordinating multiple designers</li>
        </ul>

        <p className="mt-4 text-charcoal/70">
          A coordinated sourcing plan helps avoid these issues and keeps the
          bridal party aligned with the wedding aesthetic.
        </p>
      </section>

      {/* CTA */}

      <BookConsultationCTA
        heading="Need help coordinating bridesmaid outfits?"
        subheading="Book a consultation and we will help map out the sourcing timeline."
        ctaText="Book a consultation →"
        href="/consultation"
      />

      {/* INTERNAL LINKS */}

      <section className="mt-12 border-t border-charcoal/10 pt-8">
        <h2 className="text-xl font-semibold text-charcoal">
          Related Services
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70">

          <li>
            <Link href="/buy-lehenga-from-india" className="underline">
              Bridal lehenga sourcing from India
            </Link>
          </li>

          <li>
            <Link href="/buy-sherwani-from-india-usa" className="underline">
              Sherwani sourcing for grooms
            </Link>
          </li>

          <li>
            <Link href="/services" className="underline">
              Explore CeremonyVerse services
            </Link>
          </li>

        </ul>
      </section>

    </main>
  );
}
