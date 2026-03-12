import Link from "next/link";

type EtsyShopCtaProps = {
  title?: string;
  body?: string;
};

export default function EtsyShopCta({
  title = "Ready to browse Indian wedding outfits?",
  body = "Explore curated Indian wedding outfits on our Etsy shop, or learn how sourcing from India works for US-based couples.",
}: EtsyShopCtaProps) {
  return (
    <section className="mt-14 rounded-3xl border border-charcoal/10 bg-sage/10 px-6 py-8">
      <h2 className="text-2xl font-semibold text-charcoal">{title}</h2>

      <p className="mt-3 max-w-2xl text-charcoal/75">
        {body}
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href="https://desiweddingstudious.etsy.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-white"
        >
          Browse Etsy Shop
        </a>

        <Link
          href="/shop-from-india"
          className="rounded-full border border-charcoal/20 px-5 py-3 text-sm font-semibold text-charcoal"
        >
          Learn How Sourcing Works
        </Link>
      </div>
    </section>
  );
}
