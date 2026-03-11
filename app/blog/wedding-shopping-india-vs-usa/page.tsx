import Link from "next/link";

export default function WeddingShoppingIndiaVsUSA() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-serif mb-6">
        Indian Wedding Shopping: India vs USA Cost & Quality Comparison
      </h1>

      <p className="text-muted-foreground mb-10">
        One of the biggest decisions for South Asian couples living in the
        United States is whether to purchase wedding outfits locally or
        source them directly from India. Both options have advantages,
        but understanding the differences can help couples avoid expensive
        mistakes.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Buying Wedding Outfits in the United States
      </h2>

      <p className="mb-6">
        Many US boutiques offer convenience and easier fittings, but
        inventory is often limited and prices are significantly higher
        than in India due to import costs and retail markups.
      </p>

      <p className="mb-6">
        Couples may also find fewer customization options compared to
        Indian designer studios.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Buying Wedding Outfits in India
      </h2>

      <p className="mb-6">
        India offers a far wider selection of fabrics, embroidery styles,
        and designers. Bridal lehengas, sherwanis, and bridesmaid outfits
        are typically produced locally, which keeps costs lower and allows
        for greater customization.
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>More design variety</li>
        <li>Custom sizing and embroidery</li>
        <li>Better value for intricate outfits</li>
        <li>Access to traditional craftsmanship</li>
      </ul>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Cost Comparison
      </h2>

      <p className="mb-6">
        The same bridal lehenga can cost two to three times more in
        US boutiques compared to purchasing directly from India.
        However, couples must factor in shipping timelines and
        vendor coordination.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Timeline Considerations
      </h2>

      <p className="mb-6">
        Production timelines for custom outfits in India typically
        range from six to twelve weeks depending on the design.
        International shipping can add an additional one to two weeks.
      </p>

      <p className="mb-6">
        Couples planning destination weddings or multi-event celebrations
        should begin the outfit sourcing process early to allow time
        for alterations and coordination.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        When Buying From India Makes Sense
      </h2>

      <p className="mb-6">
        Many couples choose India when they want custom bridal designs,
        coordinated outfits for the wedding party, or access to traditional
        craftsmanship that may be difficult to find locally in the US.
      </p>

      <p className="mb-6">
        Before starting the process, many couples explore how the{" "}
        <Link href="/shop-from-india" className="underline">
          Shop From India sourcing process works
        </Link>{" "}
        to better understand timelines and vendor coordination.
      </p>

      <h2 className="text-2xl font-serif mt-10 mb-4">
        Need Help Coordinating Wedding Outfits From India?
      </h2>

      <p className="mb-6">
        CeremonyVerse helps couples in the United States source bridal
        lehengas, sherwanis, and bridesmaid outfits directly from India
        while managing vendor communication and delivery timelines.
      </p>

      <Link href="/book" className="underline text-lg">
        Schedule a consultation →
      </Link>

    </main>
  );
}
