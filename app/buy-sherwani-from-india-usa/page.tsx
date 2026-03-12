import type { Metadata } from "next";
import Link from "next/link";
import BookConsultationCTA from "../components/BookConsultationCTA";
import Breadcrumbs from "../components/Breadcrumbs";
import { Section } from "@/components/site/section";
import RelatedLinks from "@/components/content/RelatedLinks";
import EtsyShopCta from "@/components/cta/EtsyShopCta";
import EtsyOutfitCard from "@/components/cta/EtsyOutfitCard";

export const metadata: Metadata = {
  title: "Buy Sherwani From India (USA Grooms) | CeremonyVerse",
  description:
    "Guidance for US-based grooms sourcing sherwanis directly from India. Avoid sizing issues, shipping delays, and coordination problems with a clear sourcing strategy.",
  alternates: { canonical: "/buy-sherwani-from-india-usa" },
};

export default function SherwaniPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Buy Sherwani From India" },
        ]}
      />

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
          See the full sourcing approach here:{" "}
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

      <Section className="py-12">
        <h2 className="text-2xl font-serif">Related Guides</h2>

        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li>
            <Link href="/buy-lehenga-from-india" className="underline">
              Buying a bridal lehenga from India →
            </Link>
          </li>

          <li>
            <Link href="/indian-bridesmaid-outfits" className="underline">
              Coordinating bridesmaid outfits from India →
            </Link>
          </li>

          <li>
            <Link href="/indian-wedding-outfits-from-india" className="underline">
              Complete guide to Indian wedding outfit sourcing →
            </Link>
          </li>
        </ul>
      </Section>

      {/* OUTFIT GRID */}

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-charcoal">
          Sherwani & Groom Outfit Inspiration
        </h2>

        <p className="mt-3 text-charcoal/70 max-w-2xl">
          Explore groom sherwani and Indo-Western styles commonly worn for
          Indian weddings.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-8">

          <EtsyOutfitCard
            title="Burnt Orange Banarasi Brocade Sherwani"
            image="/images/burnt-orange-sherwani.webp"
            link="https://www.etsy.com/listing/4464235614/burnt-orange-banarasi-brocade-sherwani"
          />

          <EtsyOutfitCard
            title="Lavender Kurta Pajama Set"
            image="/images/lavender-kurta-set.webp"
            link="https://www.etsy.com/listing/4458258716/lavender-kurta-pajama-for-men-with"
          />

          <EtsyOutfitCard
            title="Fuchsia Banarasi Nehru Jacket Set"
            image="/images/fuchsia-nehru-jacket.webp"
            link="https://www.etsy.com/listing/4458262050/fuchsia-banarasi-nehru-jacket-set"
          />

        </div>
      </section>

      {/* RELATED OUTFIT GUIDES */}

      <RelatedLinks
        heading="Related Outfit Guides"
        items={[
          {
            title: "Bridal Lehengas From India",
            href: "/bridal-lehengas-from-india",
            description: "Guide for brides sourcing lehengas from India.",
          },
          {
            title: "Indian Wedding Outfit Sizing Guide",
            href: "/indian-wedding-outfit-sizing-guide",
            description: "Measurement tips before ordering custom outfits.",
          },
          {
            title: "When to Order Indian Wedding Outfits",
            href: "/when-to-order-indian-wedding-outfits",
            description: "Production and shipping timeline planning.",
          },
          {
            title: "Buy Indian Wedding Outfits Online",
            href: "/buy-indian-wedding-outfits-online",
            description: "Complete guide to ordering Indian wedding outfits online.",
          },
          {
            title: "Shop Wedding Outfits From India",
            href: "/shop-from-india",
            description: "How US couples source wedding outfits directly from India.",
          },
        ]}
      />

      <EtsyShopCta />

    </main>
  );
}
