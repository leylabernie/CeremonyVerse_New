import Link from "next/link";
import RelatedLinks from "@/components/content/RelatedLinks";
import EtsyShopCta from "@/components/cta/EtsyShopCta";

export default function IndianWeddingOutfitSizingGuidePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">

      <h1 className="text-4xl font-semibold text-charcoal">
        Indian Wedding Outfit Sizing Guide
      </h1>

      <p className="mt-4 text-lg text-charcoal/75 leading-8">
        Ordering Indian wedding outfits from India often requires custom
        tailoring. Accurate measurements are essential when purchasing bridal
        lehengas, sherwanis, or guest outfits online. This guide explains how
        to measure correctly before placing an order.
      </p>

      <section className="mt-10 space-y-6 text-charcoal/75 leading-8">
        <h2 className="text-2xl font-semibold text-charcoal">
          Measurements You Will Usually Need
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Bust or chest measurement</li>
          <li>Waist measurement</li>
          <li>Hip measurement</li>
          <li>Shoulder width</li>
          <li>Outfit length</li>
          <li>Sleeve length</li>
        </ul>

        <p>
          Many Indian boutiques tailor outfits according to the measurements
          you provide, so accuracy is extremely important.
        </p>
      </section>

      <section className="mt-10 space-y-6 text-charcoal/75 leading-8">
        <h2 className="text-2xl font-semibold text-charcoal">
          Tips for Accurate Measurements
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Use a flexible measuring tape</li>
          <li>Wear fitted clothing while measuring</li>
          <li>Ask someone to help for better accuracy</li>
          <li>Double-check measurements before ordering</li>
        </ul>

        <p>
          Planning measurements carefully reduces the risk of alterations after
          the outfit arrives.
        </p>
      </section>

      <section className="mt-10 space-y-6 text-charcoal/75 leading-8">
        <p>
          If you're planning to order outfits from India, you may also want to
          read our guide on{" "}
          <Link href="/when-to-order-indian-wedding-outfits" className="underline">
            when to order Indian wedding outfits
          </Link>{" "}
          to avoid last-minute delays.
        </p>
      </section>

      <RelatedLinks
        heading="Related Outfit Guides"
        items={[
          {
            title: "Bridal Lehengas From India",
            href: "/bridal-lehengas-from-india",
            description: "Guide for brides sourcing lehengas from India.",
          },
          {
            title: "Buy Sherwani From India",
            href: "/buy-sherwani-from-india-usa",
            description: "Guide for grooms ordering sherwanis.",
          },
          {
            title: "Indian Wedding Guest Dresses",
            href: "/indian-wedding-guest-dresses",
            description: "Outfit ideas for guests attending Indian weddings.",
          },
        ]}
      />

      <EtsyShopCta />

    </main>
  );
}
