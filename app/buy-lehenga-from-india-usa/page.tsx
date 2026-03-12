import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import { Section } from "@/components/site/section";
import RelatedLinks from "@/components/content/RelatedLinks";
import EtsyOutfitCard from "@/components/cta/EtsyOutfitCard";
import EtsyShopCta from "@/components/cta/EtsyShopCta";

export const metadata: Metadata = {
  title: "Buy Bridal Lehenga From India (Guide for USA Brides) | CeremonyVerse",
  description:
    "Complete guide for USA brides buying bridal lehengas from India. Learn how to choose designers, plan shipping timelines, and avoid common ordering mistakes.",
  alternates: { canonical: "/buy-lehenga-from-india-usa" },
};

export default function BuyLehengaFromIndiaPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Outfit Guides", href: "/buy-indian-wedding-outfits-online" },
          { label: "Buy Lehenga From India" },
        ]}
      />

      <h1 className="text-3xl font-semibold text-charcoal">
        Buy Bridal Lehenga From India (Guide for USA Brides)
      </h1>

      <p className="mt-4 text-charcoal/70">
        Many brides in the United States choose to buy bridal lehengas directly
        from India because Indian designers offer more embroidery styles,
        fabric options, and customization than most boutiques abroad.
      </p>

      <p className="mt-4 text-charcoal/70">
        However, ordering internationally requires planning. Production
        timelines, measurements, alterations, and international shipping can
        affect when the outfit arrives before the wedding.
      </p>

      <Section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Why Brides Buy Lehengas From India
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
          <li>Access to authentic Indian bridal designers</li>
          <li>Wider selection of embroidery and fabrics</li>
          <li>Customization for wedding colors and events</li>
          <li>Better coordination for multi-event weddings</li>
        </ul>
      </Section>

      <Section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Timeline for Ordering a Bridal Lehenga
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
          <li>Design selection and measurements</li>
          <li>Production time (4–10 weeks depending on embroidery)</li>
          <li>International shipping</li>
          <li>Local alterations if needed</li>
        </ul>

        <p className="mt-4 text-charcoal/70">
          For a full planning guide see{" "}
          <Link href="/when-to-order-indian-wedding-outfits" className="underline">
            when to order Indian wedding outfits
          </Link>.
        </p>
      </Section>

      <Section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Common Mistakes When Ordering Lehengas From India
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
          <li>Ordering too close to the wedding date</li>
          <li>Incorrect measurements</li>
          <li>Not accounting for alteration time</li>
          <li>Shipping delays during wedding season</li>
        </ul>
      </Section>

      {/* Inspiration grid */}

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-charcoal">
          Bridal Lehenga Inspiration
        </h2>

        <p className="mt-3 text-charcoal/70">
          Explore bridal lehenga styles popular for Indian weddings.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-8">

          <EtsyOutfitCard
            title="Lilac Chanderi Lehenga Set"
            image="/images/lilac-lehenga.webp"
            link="https://www.etsy.com/listing/4464043944/lilac-chanderi-lehenga-set-corset-blouse"
          />

          <EtsyOutfitCard
            title="Dusty Rose Banarasi Bridal Lehenga"
            image="/images/dusty-rose-lehenga.webp"
            link="https://www.etsy.com/listing/4464100282/dusty-rose-banarasi-bridal-lehenga"
          />

          <EtsyOutfitCard
            title="Teal Soft Net Lehenga Choli"
            image="/images/teal-lehenga.webp"
            link="https://www.etsy.com/listing/4458672584/teal-soft-net-lehenga-choli-gathered-at"
          />

        </div>
      </section>

      <RelatedLinks
        heading="Related Outfit Guides"
        items={[
          {
            title: "Buy Sherwani From India",
            href: "/buy-sherwani-from-india-usa",
            description: "Guide for grooms sourcing sherwanis from India.",
          },
          {
            title: "Indian Wedding Outfit Sizing Guide",
            href: "/indian-wedding-outfit-sizing-guide",
            description: "How to take accurate measurements before ordering.",
          },
          {
            title: "When to Order Indian Wedding Outfits",
            href: "/when-to-order-indian-wedding-outfits",
            description: "Production and shipping timeline planning.",
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
