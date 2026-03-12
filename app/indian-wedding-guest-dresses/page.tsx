import Link from "next/link";
import RelatedLinks from "@/components/content/RelatedLinks";
import EtsyShopCta from "@/components/cta/EtsyShopCta";

export const metadata = {
  title: "Indian Wedding Guest Dresses Guide | CeremonyVerse",
  description:
    "What to wear to an Indian wedding as a guest. Explore outfit ideas for sangeet, ceremony, and reception events.",
};

export default function IndianWeddingGuestDressesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">

      <h1 className="text-4xl font-semibold text-charcoal">
        Indian Wedding Guest Dresses: What Guests Should Wear
      </h1>

      <p className="mt-4 text-lg text-charcoal/75 leading-8">
        Attending an Indian wedding often means multiple ceremonies, colorful
        traditions, and several outfit changes. Guests frequently ask what they
        should wear for events like the mehendi, sangeet, ceremony, and
        reception. Understanding the dress expectations can help you choose an
        outfit that fits the celebration while remaining comfortable.
      </p>

      <section className="mt-10 space-y-6 text-charcoal/75 leading-8">
        <h2 className="text-2xl font-semibold text-charcoal">
          Common Indian Wedding Guest Outfit Options
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Lehengas for formal evening ceremonies</li>
          <li>Sarees for traditional wedding rituals</li>
          <li>Anarkali suits for sangeet or reception events</li>
          <li>Kurta sets or sherwanis for male guests</li>
        </ul>

        <p>
          The exact outfit often depends on the specific event. Many weddings
          include separate dress styles for mehendi, haldi, ceremony, and
          reception celebrations.
        </p>
      </section>

      <section className="mt-10 space-y-6 text-charcoal/75 leading-8">
        <h2 className="text-2xl font-semibold text-charcoal">
          Sourcing Indian Wedding Outfits
        </h2>

        <p>
          Many guests in the United States choose to source outfits directly
          from India to access a wider selection of fabrics, embroidery styles,
          and colors.
        </p>

        <p>
          Learn more about the sourcing process on the{" "}
          <Link href="/shop-from-india" className="underline">
            Shop From India
          </Link>{" "}
          page.
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
            title: "Indian Wedding Outfit Sizing Guide",
            href: "/indian-wedding-outfit-sizing-guide",
            description: "Measurement tips before ordering custom outfits.",
          },
        ]}
      />

      <EtsyShopCta />

    </main>
  );
}
