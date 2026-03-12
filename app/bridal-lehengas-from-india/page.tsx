import Link from "next/link";
import RelatedLinks from "@/components/content/RelatedLinks";
import EtsyShopCta from "@/components/cta/EtsyShopCta";
import EtsyOutfitCard from "@/components/cta/EtsyOutfitCard";

export const metadata = {
  title: "Bridal Lehengas From India for US Brides | CeremonyVerse",
  description:
    "Guide for US-based brides sourcing bridal lehengas from India. Learn how to choose styles, measure correctly, and order wedding outfits internationally.",
};

export default function BridalLehengasFromIndiaPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">

      <h1 className="text-4xl font-semibold text-charcoal">
        Bridal Lehengas From India for US-Based Brides
      </h1>

      <p className="mt-4 text-lg text-charcoal/75 leading-8">
        Many brides in the United States want authentic Indian bridal lehengas
        from India but struggle with boutique communication, sizing, and
        shipping timelines. CeremonyVerse helps simplify the process by guiding
        couples through sourcing bridal outfits directly from India while
        avoiding common mistakes.
      </p>

      <section className="mt-10 space-y-6 text-charcoal/75 leading-8">
        <h2 className="text-2xl font-semibold text-charcoal">
          Why Brides Still Buy Lehengas From India
        </h2>

        <p>
          Indian bridal boutiques offer a much wider selection of fabrics,
          embroidery styles, and customization options than most stores in the
          United States. Brides often choose to source lehengas from India
          because they want traditional craftsmanship, more color options, and
          designs that reflect regional wedding traditions.
        </p>

        <p>
          However, ordering from overseas can be confusing. Production timelines,
          measurement accuracy, and shipping logistics all require planning.
          CeremonyVerse helps couples understand the process before placing an
          order.
        </p>
      </section>

      <section className="mt-10 space-y-6 text-charcoal/75 leading-8">
        <h2 className="text-2xl font-semibold text-charcoal">
          What Brides Should Plan Before Ordering
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Finalize wedding date and ceremony timeline</li>
          <li>Choose embroidery style and fabric weight</li>
          <li>Allow time for production and international shipping</li>
          <li>Take accurate measurements for custom tailoring</li>
        </ul>

        <p>
          Planning these steps early prevents last-minute stress and ensures
          that the outfit arrives with enough time for alterations.
        </p>
      </section>

      <section className="mt-10 space-y-6 text-charcoal/75 leading-8">
        <h2 className="text-2xl font-semibold text-charcoal">
          How CeremonyVerse Helps
        </h2>

        <p>
          CeremonyVerse provides guidance for couples who want to source Indian
          wedding outfits while living in the United States. The goal is to
          reduce uncertainty around ordering, shipping timelines, and outfit
          coordination across multiple wedding events.
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
            title: "Buy Sherwani From India",
            href: "/buy-sherwani-from-india",
            description:
              "Guide for grooms ordering sherwanis for Indian weddings.",
          },
          {
            title: "Indian Wedding Outfit Sizing Guide",
            href: "/indian-wedding-outfit-sizing-guide",
            description:
              "How to measure correctly before ordering custom outfits.",
          },
          {
            title: "When to Order Indian Wedding Outfits",
            href: "/when-to-order-indian-wedding-outfits",
            description:
              "Timeline planning for production and shipping.",
          },
        ]}
      />

<section className="mt-16">
  <h2 className="text-2xl font-semibold text-charcoal">
    Bridal Lehenga Inspiration
  </h2>

  <p className="mt-3 text-charcoal/70 max-w-2xl">
    Explore popular bridal lehenga styles often chosen for Indian weddings.
  </p>

  <div className="grid gap-6 md:grid-cols-3 mt-8">

    <EtsyOutfitCard
  title="Lilac Chanderi Lehenga Set"
  image="/images/lilac-lehenga.webp"
  link="https://www.etsy.com/listing/4464043944/lilac-chanderi-lehenga-set-corset-blouse"
/>

<EtsyOutfitCard
  title="Deep Purple Banarasi Brocade Lehenga"
  image="/images/dusty-rose-lehenga.webp"
  link="https://www.etsy.com/listing/4464100282/dusty-rose-banarasi-bridal-lehenga?ls=r&ref=related-4&content_source=219e194f792529603fc0f7810c3ddd29%253ALTf6b39b73977744ec888d6bccd26a53d98c81c038&logging_key=219e194f792529603fc0f7810c3ddd29%3ALTf6b39b73977744ec888d6bccd26a53d98c81c038"
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
      href: "/buy-sherwani-from-india",
      description: "Guide for grooms ordering sherwanis from India.",
    },
    {
      title: "Indian Wedding Outfit Sizing Guide",
      href: "/indian-wedding-outfit-sizing-guide",
      description: "How to take accurate measurements before ordering.",
    },
    {
      title: "When to Order Indian Wedding Outfits",
      href: "/when-to-order-indian-wedding-outfits",
      description: "Timeline planning for production and shipping.",
    },
  ]}
/>
      
      <EtsyShopCta />

    </main>
  );
}
