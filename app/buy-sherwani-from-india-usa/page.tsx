import type { Metadata } from "next";
import Link from "next/link";
import BookConsultationCTA from "../components/BookConsultationCTA";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Buy Sherwani From India (USA Grooms) | CeremonyVerse",
  description:
    "Guidance for US-based grooms sourcing sherwanis directly from India. Avoid sizing issues, shipping delays, and coordination problems with a clear sourcing strategy.",
  alternates: { canonical: "/buy-sherwani-from-india-usa" },
};

export default function SherwaniPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">

      <h1 className="text-3xl font-semibold text-charcoal">
        Buy a Sherwani From India (For USA Grooms)
      </h1>

      <p className="mt-3 text-charcoal/70">
        Many grooms in the United States want an authentic sherwani from India,
        but ordering internationally can be confusing. Measurements, tailoring
        expectations, and shipping timelines are often unclear.
      </p>

      <p className="mt-3 text-charcoal/70">
        CeremonyVerse helps guide the sourcing process so you can identify the
        right boutique or designer and receive the outfit in time for your
        wedding events.
      </p>

      {/* HOW IT WORKS */}

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          How Sherwani Sourcing Works
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
          <li>Define the style and level of embroidery you want</li>
          <li>Identify suitable designers or boutiques in India</li>
          <li>Plan measurements and tailoring buffer</li>
          <li>Coordinate production and shipping timelines</li>
        </ul>

        <p className="mt-4 text-charcoal/70">
          See the full sourcing approach here:
          {" "}
          <Link href="/shop-from-india" className="underline">
            How to shop wedding outfits from India
          </Link>
        </p>
      </section>

      {/* COMMON ISSUES */}

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Common Problems When Ordering Sherwanis From India
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
          <li>Incorrect measurements or unexpected fit</li>
          <li>Shipping delays close to the wedding date</li>
          <li>Unclear embroidery or fabric expectations</li>
          <li>Difficulty coordinating matching outfits for family members</li>
        </ul>
      </section>

      {/* CTA */}

      <BookConsultationCTA
        heading="Need help sourcing a sherwani?"
        subheading="Book a consultation and we will help you map the sourcing timeline and options."
        ctaText="Book a consultation →"
        href="/consultation"
      />

      {/* RELATED LINKS */}

      <section className="mt-12 border-t border-charcoal/10 pt-8">
        <h2 className="text-xl font-semibold text-charcoal">
          Related Services
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70">
          <li>
            <Link href="/buy-lehenga-from-india" className="underline">
              Bridal lehenga sourcing
            </Link>
          </li>

          <li>
            <Link href="/shop-from-india" className="underline">
              Shop outfits from India
            </Link>
          </li>

          <li>
            <Link href="/services" className="underline">
              Explore all services
            </Link>
          </li>
        </ul>
      </section>

    </main>
  );
}
