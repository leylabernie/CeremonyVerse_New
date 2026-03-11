import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import BookConsultationCTA from "../components/BookConsultationCTA";

export const metadata: Metadata = {
  title: "How to Buy Indian Wedding Outfits From India | CeremonyVerse",
  description:
    "Complete guide for US-based couples buying Indian wedding outfits from India including sizing, shipping timelines, and designer coordination.",
  alternates: { canonical: "/how-to-buy-indian-wedding-outfits-from-india" },
};

export default function GuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides" },
          { label: "How to Buy Indian Wedding Outfits From India" },
        ]}
      />

      <h1 className="text-3xl font-semibold text-charcoal">
        How to Buy Indian Wedding Outfits From India
      </h1>

      <p className="mt-3 text-charcoal/70">
  Many couples in the United States want authentic Indian wedding outfits
  directly from India, but the process can be confusing. If you want guided
  help coordinating boutiques, timelines, and measurements, you can explore
  our{" "}
  <Link href="/shop-from-india" className="underline">
    outfit sourcing service from India
  </Link>.
</p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Plan your outfit timeline
        </h2>

        <p className="mt-3 text-charcoal/70">
          Bridal outfits often require several weeks of embroidery and tailoring.
          It is important to allow enough time for production and international
          shipping before the wedding date.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Take accurate measurements
        </h2>

        <p className="mt-3 text-charcoal/70">
          Accurate measurements are essential when ordering outfits from India.
          Differences in tailoring standards between designers can affect fit.
        </p>
      </section>

      <BookConsultationCTA />

      <section className="mt-12 border-t border-charcoal/10 pt-8">

        <h2 className="text-xl font-semibold text-charcoal">
          Related pages
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
            <Link href="/buy-bridesmaid-lehenga-from-india" className="underline">
              Bridesmaid outfit coordination from India
            </Link>
          </li>

        </ul>

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can you buy a bridal lehenga directly from India if you live in the USA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many couples in the United States source bridal lehengas directly from designers and boutiques in India. Measurements, customization, and shipping must be coordinated carefully to ensure proper fit and delivery timing.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to receive a wedding outfit from India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Production timelines for bridal outfits can range from several weeks to a few months depending on embroidery and customization. Shipping to the United States also adds additional time depending on the courier and customs processing.",
          },
        },
        {
          "@type": "Question",
          name: "Can bridesmaid outfits be coordinated from India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Bridesmaid outfits are often coordinated through a single designer or boutique so fabrics and colors match across the wedding party.",
          },
        },
      ],
    }),
  }}
/>
      </section>

    </main>
  );
}
