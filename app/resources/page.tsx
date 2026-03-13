import Link from "next/link";

const commercialPages = [
  {
    title: "Shop From India",
    href: "/shop-from-india",
    description:
      "Understand how CeremonyVerse helps US-based couples source Indian wedding outfits from India with less stress.",
  },
  {
    title: "Buy Indian Wedding Outfits Online",
    href: "/buy-indian-wedding-outfits-online",
    description:
      "Overview page for sourcing bridal, groom, bridesmaid, and guest outfits from India.",
  },
  {
    title: "Indian Bridesmaid Outfits",
    href: "/indian-bridesmaid-outfits",
    description:
      "Guidance for coordinating bridesmaid lehengas, sarees, and wedding party looks.",
  },
  {
    title: "Shipping Indian Wedding Outfits to USA",
    href: "/indian-wedding-outfits-shipping-to-usa",
    description:
      "Learn about timelines, production, delivery buffers, and international shipping risks.",
  },
];

const guideTopics = [
  {
    title: "Bridal Lehengas From India",
    href: "/bridal-lehengas-from-india",
  },
  {
    title: "Buy Sherwani From India",
    href: "/buy-sherwani-from-india",
  },
  {
    title: "Indian Wedding Guest Dresses",
    href: "/indian-wedding-guest-dresses",
  },
  {
    title: "Indian Wedding Outfit Sizing Guide",
    href: "/indian-wedding-outfit-sizing-guide",
  },
  {
    title: "When to Order Indian Wedding Outfits",
    href: "/when-to-order-indian-wedding-outfits",
  },
];

const blogIdeas = [
  "What to wear for mehendi, haldi, sangeet, wedding ceremony, and reception",
  "How to buy a bridal lehenga from India while living in the US",
  "How early to order bridesmaid outfits for an Indian wedding",
  "Sherwani vs suit: what grooms should wear for Indian wedding events",
  "Indian wedding guest attire explained for American guests",
];

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-charcoal/60">
          Resources
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal">
          Indian Wedding Outfit Guides for US-Based Couples
        </h1>
        <p className="mt-4 text-lg leading-8 text-charcoal/75">
          CeremonyVerse helps couples understand what to buy, when to buy it,
          and how to source Indian wedding outfits from India with more clarity.
          Start with the core sourcing pages below, then explore practical
          guides for bridal, groom, bridesmaid, guest, sizing, and shipping
          questions.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-charcoal">
          Start Here
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {commercialPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-2xl border border-charcoal/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-2xl font-semibold text-charcoal">{page.title}</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/70">
                {page.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-charcoal">
                Visit page →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-charcoal">
          Next SEO Pages to Build
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {guideTopics.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-2xl border border-charcoal/10 bg-ivory p-5 transition hover:shadow-md"
            >
              <span className="text-base font-medium text-charcoal">
                {page.title} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-charcoal/10 bg-charcoal px-6 py-8 text-white">
        <h2 className="text-2xl font-semibold">
          Ready to browse actual outfit options?
        </h2>
        <p className="mt-3 max-w-2xl text-white/80">
          Once you understand the process, timing, and outfit categories, browse
          curated options in our Etsy shop.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://desiweddingstudious.etsy.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-charcoal"
          >
            Visit Etsy Shop
          </a>
          <Link
            href="/shop-from-india"
            className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white"
          >
            Learn the sourcing process
          </Link>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-charcoal">
          Blog topics that support this funnel
        </h2>
        <ul className="mt-6 space-y-3 text-charcoal/75">
          {blogIdeas.map((item) => (
            <li key={item} className="rounded-xl border border-charcoal/10 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
