import Link from "next/link";

type EtsyOutfitCardProps = {
  title: string;
  image: string;
  link: string;
};

export default function EtsyOutfitCard({
  title,
  image,
  link,
}: EtsyOutfitCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white transition hover:shadow-md">
      <img
        src={image}
        alt={title}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-charcoal">{title}</h3>

        <Link
          href={link}
          target="_blank"
          className="mt-2 block text-sm text-charcoal/70 underline"
        >
          View on Etsy →
        </Link>
      </div>
    </div>
  );
}
