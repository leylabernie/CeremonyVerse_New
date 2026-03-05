import type { Metadata } from "next";
import Link from "next/link";
import BookConsultationCTA from "../components/BookConsultationCTA";

export const metadata: Metadata = {
  title: "Consultation | CeremonyVerse",
  description:
    "Book a consultation for Indian wedding planning support and outfit sourcing from India for US-based couples. Clear timelines, sizing guidance, vendor coordination.",
  alternates: { canonical: "/consultation" },
};

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wedding Planning + Outfit Sourcing Consultation",
    provider: {
      "@type": "LocalBusiness",
      name: "CeremonyVerse",
      url: "https://www.ceremonyverse.com",
    },
    areaServed: "US",
    serviceType: [
      "Indian wedding planning consultation",
      "Outfit sourcing consultation",
      "Bridal party outfit coordination",
    ],
  };
}

export default function ConsultationPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />

      <h1 className="text-3xl font-semibold text-charcoal">Consultation</h1>
      <p className="mt-3 text-charcoal/70">
        For US-based couples who want an Indian wedding that feels authentic — without
        the overseas chaos. We help you plan the process and source outfits from India
        with clear timelines and support.
      </p>

      <section className="mt-8 rounded-2xl border border-charcoal/10 p-6">
        <h2 className="text-xl font-semibold text-charcoal">What you’ll get</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-charcoal/70">
          <li>Outfit sourcing roadmap (bridal + groom + family + bridal party)</li>
          <li>Sizing & fit planning (measurements, tailoring buffer, timelines)</li>
          <li>Vendor coordination guidance (boutiques, designers, shipping strategy)</li>
          <li>Wedding-week logistics checklist (events, attire changes, backups)</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-charcoal">Before you book</h2>
        <p className="mt-2 text-charcoal/70">
          If you’re specifically looking for the step-by-step sourcing process, start here:
          {" "}
          <Link href="/shop-from-india" className="underline">
            Shop From India process →
          </Link>
        </p>
      </section>

      <BookConsultationCTA
        heading="Ready to book?"
        subheading="Choose a consultation time and we’ll map out your next steps."
        ctaText="Go to booking →"
        href="/consultation"
      />

      <section className="mt-10 border-t border-charcoal/10 pt-8">
        <h2 className="text-xl font-semibold text-charcoal">FAQ</h2>
        <div className="mt-4 space-y-4 text-charcoal/70">
          <div>
            <p className="font-medium text-charcoal">Do you ship outfits to the US?</p>
            <p>We guide and coordinate sourcing; shipping options depend on the boutique/designer and timeline.</p>
          </div>
          <div>
            <p className="font-medium text-charcoal">Can you coordinate bridal party outfits?</p>
            <p>Yes — we can help standardize color, fabric, timelines, and bulk ordering strategy.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
