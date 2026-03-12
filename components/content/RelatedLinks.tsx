import Link from "next/link";

export type RelatedLinkItem = {
  title: string;
  href: string;
  description?: string;
};

type RelatedLinksProps = {
  heading?: string;
  items: RelatedLinkItem[];
};

export default function RelatedLinks({
  heading = "Related Guides",
  items,
}: RelatedLinksProps) {
  if (!items?.length) return null;

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold text-charcoal">{heading}</h2>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl border border-charcoal/10 bg-white p-5 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-charcoal">
              {item.title}
            </h3>

            {item.description && (
              <p className="mt-2 text-sm text-charcoal/70">
                {item.description}
              </p>
            )}

            <span className="mt-3 inline-block text-sm font-medium text-charcoal">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
