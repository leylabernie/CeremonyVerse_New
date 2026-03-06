import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import BookConsultationCTA from "../components/BookConsultationCTA";

export const metadata: Metadata = {
  title: "Shipping Indian Wedding Outfits to USA | CeremonyVerse",
  description:
    "Guide to ordering Indian wedding outfits from India and shipping them safely to the United States. Learn timelines, sizing tips, and sourcing options.",
  alternates: { canonical: "/indian-wedding-outfits-shipping-to-usa" },
};

export default function ShippingGuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides" },
          { label: "Shipping Indian Wedding Outfits to USA" },
        ]}
      />

      <h1 className="text-3xl font-semibold text-charcoal">
        Shipping Indian Wedding Outfits to the USA
      </h1>

      <p className="mt-3 text-charcoal/70">
        Many couples in the United States choose to buy their wedding outfits
        directly from India. While the craftsmanship and variety are unmatched,
        coordinating measurements, production timelines, and international
        shipping can be complicated without proper planning.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Production timelines
        </h2>

        <p className="mt-3 text-charcoal/70">
          Bridal lehengas and sherwanis often require several weeks of
          embroidery and tailoring. Custom outfits may take longer depending
          on the designer and level of craftsmanship.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          International shipping
        </h2>

        <p className="mt-3 text-charcoal/70">
          Shipping from India to the United States requires reliable courier
          services, secure packaging, and realistic delivery timelines to
          avoid last-minute stress before the wedding.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Coordinating multiple outfits
        </h2>

        <p className="mt-3 text-charcoal/70">
          Weddings often require outfits for brides, grooms, bridesmaids, and
          family members. Coordinating all these orders from different boutiques
          in India can be challenging without centralized planning.
        </p>
      </section>

      <BookConsultationCTA />

      <section className="mt-12 border-t border-charcoal/10 pt-8">

        <h2 className="text-xl font-semibold text-charcoal">
          Related pages
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70">

          <li>
            <Link href="/shop-from-india" className="underline">
              Shop wedding outfits from India
            </Link>
          </li>

          <li>
            <Link href="/buy-lehenga-from-india" className="underline">
              Bridal lehenga sourcing
            </Link>
          </li>

          <li>
            <Link href="/buy-sherwani-from-india-usa" className="underline">
              Sherwani sourcing for grooms
            </Link>
          </li>

        </ul>

      </section>

    </main>
  );
}
