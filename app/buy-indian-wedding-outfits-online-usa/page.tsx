import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import BookConsultationCTA from "../components/BookConsultationCTA";

export const metadata: Metadata = {
  title: "Buy Indian Wedding Outfits Online in the USA | CeremonyVerse",
  description:
    "Guide for US-based couples buying Indian wedding outfits online. Learn how to source bridal lehengas, sherwanis and bridesmaid outfits directly from India.",
  alternates: { canonical: "/buy-indian-wedding-outfits-online-usa" },
};

export default function BuyOnlinePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides" },
          { label: "Buy Indian Wedding Outfits Online USA" },
        ]}
      />

      <h1 className="text-3xl font-semibold text-charcoal">
        Buy Indian Wedding Outfits Online in the USA
      </h1>

      <p className="mt-3 text-charcoal/70">
        Many couples in the United States want authentic Indian wedding outfits
        but cannot travel to India for shopping. Ordering outfits online from
        India is possible, but it requires careful coordination of designers,
        measurements, production timelines, and international shipping.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Bridal lehengas
        </h2>

        <p className="mt-3 text-charcoal/70">
          Bridal lehengas often involve detailed embroidery and custom
          tailoring. Choosing the right boutique and confirming measurements is
          essential when ordering internationally.
        </p>

        <Link href="/buy-lehenga-from-india" className="underline">
          Learn more about sourcing bridal lehengas →
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Groom sherwanis
        </h2>

        <p className="mt-3 text-charcoal/70">
          Sherwanis and menswear sets can also be ordered from India, but sizing
          and tailoring standards can vary between designers.
        </p>

        <Link href="/buy-sherwani-from-india-usa" className="underline">
          Explore sherwani sourcing →
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Bridesmaid coordination
        </h2>

        <p className="mt-3 text-charcoal/70">
          Coordinating bridesmaid outfits from India requires planning around
          color palettes, sizing differences, and shipping timelines.
        </p>

        <Link href="/buy-bridesmaid-lehenga-from-india" className="underline">
          Bridesmaid outfit coordination →
        </Link>
      </section>

      <BookConsultationCTA />

      <section className="mt-12 border-t border-charcoal/10 pt-8">

        <h2 className="text-xl font-semibold text-charcoal">
          Related guides
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70">

          <li>
            <Link href="/how-to-buy-indian-wedding-outfits-from-india" className="underline">
              How to buy Indian wedding outfits from India
            </Link>
          </li>

          <li>
            <Link href="/indian-wedding-outfits-shipping-to-usa" className="underline">
              Shipping Indian wedding outfits to the USA
            </Link>
          </li>

        </ul>

      </section>

    </main>
  );
}
