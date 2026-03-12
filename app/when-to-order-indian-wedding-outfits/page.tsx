import Link from "next/link";
import RelatedLinks from "@/components/content/RelatedLinks";
import EtsyShopCta from "@/components/cta/EtsyShopCta";

export const metadata = {
  title: "When to Order Indian Wedding Outfits | CeremonyVerse",
  description:
    "Timeline for ordering Indian wedding outfits from India including bridal lehengas, sherwanis, bridesmaid outfits, and guest attire.",
};

export default function WhenToOrderIndianWeddingOutfitsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">

      <h1 className="text-4xl font-semibold text-charcoal">
        When to Order Indian Wedding Outfits
      </h1>

      <p className="mt-4 text-lg text-charcoal/75 leading-8">
        Indian wedding outfits often require custom tailoring and international
        shipping. Ordering at the right time helps ensure your outfit arrives
        before the wedding without last-minute stress.
      </p>

      <section className="mt-10 space-y-6 text-charcoal/75 leading-8">
        <h2 className="text-2xl font-semibold text-charcoal">
          Typical Production Timeline
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Design selection and measurements</li>
          <li>Fabric preparation and embroidery work</li>
          <li>Tailoring and finishing</li>
          <li>International shipping</li>
        </ul>

        <p>
          Depending on the outfit complexity, production can take several weeks
          before shipping even begins.
        </p>
      </section>

      <section className="mt-10 space-y-6 text-charcoal/75 leading-8">
        <h2 className="text-2xl font-semibold text-charcoal">
          Recommended Ordering Timeline
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Bridal lehengas: 4–6 months before the wedding</li>
          <li>Groom sherwanis: 3–4 months before the wedding</li>
          <li>Bridesmaid outfits: 2–3 months before the wedding</li>
          <li>Guest outfits: 4–8 weeks before the event</li>
        </ul>

        <p>
          Ordering early allows time for adjustments if the outfit requires
          minor alterations after delivery.
        </p>
      </section>

      <section className="mt-10 text-charcoal/75 leading-8">
        <p>
          If you are unsure how to take accurate measurements, read our{" "}
          <Link href="/indian-wedding-outfit-sizing-guide" className="underline">
            Indian Wedding Outfit Sizing Guide
          </Link>{" "}
          before placing your order.
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
