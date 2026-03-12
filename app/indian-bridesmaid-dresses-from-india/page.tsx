import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import { Section } from "@/components/site/section";
import RelatedLinks from "@/components/content/RelatedLinks";
import EtsyOutfitCard from "@/components/cta/EtsyOutfitCard";
import EtsyShopCta from "@/components/cta/EtsyShopCta";

export const metadata: Metadata = {
  title: "Indian Bridesmaid Dresses From India (Guide for USA Weddings) | CeremonyVerse",
  description:
    "Guide for ordering Indian bridesmaid dresses from India. Learn how to coordinate colors, measurements, and shipping timelines for bridal party outfits.",
  alternates: { canonical: "/indian-bridesmaid-dresses-from-india" },
};

export default function IndianBridesmaidDressesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Outfit Guides", href: "/buy-indian-wedding-outfits-online" },
          { label: "Indian Bridesmaid Dresses" },
        ]}
      />

      <h1 className="text-3xl font-semibold text-charcoal">
        Indian Bridesmaid Dresses From India (Guide for USA Weddings)
      </h1>

      <p className="mt-4 text-charcoal/70">
        Many couples in the United States choose to order bridesmaid outfits
        directly from India because Indian boutiques offer more color options,
        embroidery styles, and coordinated sets for multi-event weddings.
      </p>

      <p className="mt-4 text-charcoal/70">
        Ordering bridesmaid dresses internationally requires planning. You must
        coordinate measurements, production timelines, and shipping so every
        member of the bridal party receives their outfit before the wedding.
      </p>

      <Section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Why Bridesmaid Dresses Are Often Ordered From India
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
          <li>Wider selection of lehengas, sarees, and anarkali dresses</li>
          <li>Better coordination across multiple wedding events</li>
          <li>Customization for wedding color palettes</li>
          <li>Matching outfits for bridesmaids and groomsmen</li>
        </ul>
      </Section>

      <Section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Planning Bridesmaid Outfit Orders
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
          <li>Choose outfit styles for each wedding event</li>
          <li>Collect measurements from all bridesmaids</li>
          <li>Confirm production timelines with designers</li>
          <li>Allow time for shipping and alterations</li>
        </ul>

        <p className="mt-4 text-charcoal/70">
          See the full timeline guide here:{" "}
          <Link href="/when-to-order-indian-wedding-outfits" className="underline">
            when to order Indian wedding outfits
          </Link>.
        </p>
      </Section>

      <Section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Common Mistakes When Ordering Bridesmaid Dresses
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
          <li>Collecting measurements too late</li>
          <li>Ordering outfits too close to the wedding</li>
          <li>Not coordinating color palettes across events</li>
          <li>Not accounting for international shipping time</li>
        </ul>
      </Section>

      {/* Inspiration grid */}

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-charcoal">
          Bridesmaid Outfit Inspiration
        </h2>

        <p className="mt-3 text-charcoal/70">
          Explore bridesmaid outfit styles commonly worn at Indian weddings.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-8">

          <EtsyOutfitCard
            title="Lilac Chanderi Lehenga Set"
            image="/images/lilac-lehenga.webp"
            link="https://www.etsy.com/listing/4464043944/lilac-chanderi-lehenga-set-corset-blouse"
          />

          <EtsyOutfitCard
            title="Dusty Rose Banarasi Lehenga"
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
            title: "Buy Bridal Lehenga From India",
            href: "/buy-lehenga-from-india-usa",
            description: "Guide for USA brides ordering bridal lehengas.",
          },
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
