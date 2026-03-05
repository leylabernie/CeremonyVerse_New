import Link from "next/link";

export default function BookConsultationCTA({
  heading = "Book a Consultation",
  subheading = "Get a clear plan for outfit sourcing + wedding logistics without the overseas stress.",
  ctaText = "Book a consultation →",
  href = "/consultation",
}: {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  href?: string;
}) {
  return (
    <section className="mt-10 rounded-2xl border border-charcoal/10 bg-ivory p-6">
      <h2 className="text-xl font-semibold text-charcoal">{heading}</h2>
      <p className="mt-2 text-charcoal/70">{subheading}</p>
      <div className="mt-4">
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-xl bg-charcoal px-5 py-3 text-ivory hover:opacity-90"
        >
          {ctaText}
        </Link>
      </div>
      <p className="mt-3 text-sm text-charcoal/60">
        Prefer texting first? Use the contact link on the consultation page.
      </p>
    </section>
  );
}
