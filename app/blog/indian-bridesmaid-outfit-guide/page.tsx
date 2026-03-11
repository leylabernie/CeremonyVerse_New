import Link from "next/link";

export default function BridesmaidOutfitGuide() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-serif mb-6">
        Indian Bridesmaid Outfit Guide for US Weddings
      </h1>

      <p className="text-muted-foreground mb-10">
        Coordinating bridesmaid outfits for a South Asian wedding in the
        United States requires balancing tradition, color coordination,
        and practical shipping timelines.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Popular Bridesmaid Outfit Styles
      </h2>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Lehengas</li>
        <li>Sarees</li>
        <li>Anarkali dresses</li>
        <li>Indo-western outfits</li>
      </ul>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Coordinating Colors
      </h2>

      <p className="mb-6">
        Many couples choose coordinated shades rather than identical
        outfits so bridesmaids can wear styles that suit their body types
        while still matching the wedding theme.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Ordering Bridesmaid Outfits From India
      </h2>

      <p className="mb-6">
        Couples often source bridesmaid outfits from India because it
        offers better customization options and coordinated designs for
        large wedding parties.
      </p>

      <Link href="/shop-from-india" className="underline text-lg">
        Learn how outfit sourcing from India works →
      </Link>

    </main>
  );
}
