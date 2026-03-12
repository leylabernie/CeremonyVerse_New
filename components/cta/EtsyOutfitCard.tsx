import Link from "next/link";

type Props = {
  title: string;
  image: string;
  link: string;
  imageHeight?: string; // add this line
};

export default function EtsyOutfitCard({ title, image, link, imageHeight }: Props) {
  return (
    <div className="border rounded-xl shadow-sm hover:shadow-md transition bg-white">
      <Link href={link} target="_blank">
        <img
  src={image}
  alt={title}
  className={`w-full ${imageHeight ?? 'h-[520px]'} object-contain`}
/>
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-medium text-charcoal">{title}</h3>

        <Link
          href={link}
          target="_blank"
          className="text-sm text-sage underline mt-2 inline-block"
        >
          View on Etsy →
        </Link>
      </div>
    </div>
  );
}
