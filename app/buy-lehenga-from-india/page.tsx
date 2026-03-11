import type { Metadata } from "next";
import Link from "next/link";
import BookConsultationCTA from "../components/BookConsultationCTA";
import Breadcrumbs from "../components/Breadcrumbs";
export const metadata: Metadata = {
  title: "Buy Bridal Lehenga From India (USA Brides) | CeremonyVerse",
  description:
    "Guided bridal lehenga sourcing from India for US-based brides. Avoid sizing issues, shipping delays, and coordination stress with a clear sourcing plan.",
  alternates: { canonical: "/buy-lehenga-from-india" },
};

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bridal Lehenga Sourcing From India",
    provider: {
      "@type": "Organization",
      name: "CeremonyVerse",
      url: "https://www.ceremonyverse.com",
    },
    areaServed: "United States",
    serviceType: "Indian bridal outfit sourcing",
    description:
      "Guidance for US-based brides sourcing bridal lehengas directly from India including sizing planning, designer selection, and shipping coordination.",
  };
}

export default function BuyLehengaPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">

      <Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Buy Bridal Lehenga From India" },
  ]}
/>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />

      <h1 className="text-3xl font-semibold text-charcoal">
        Buy a Bridal Lehenga From India (For USA Brides)
      </h1>

      <p className="mt-3 text-charcoal/70">
        Many US-based brides want a bridal lehenga directly from India but
        quickly discover how complicated the process can be — sizing issues,
        international shipping delays, and communication with overseas boutiques.
      </p>

      <p className="mt-3 text-charcoal/70">
        CeremonyVerse helps you navigate the process with clear sourcing
        guidance so you can confidently select and receive the right outfit
        without unnecessary stress.
      </p>

      {/* HOW IT WORKS */}

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          How Bridal Lehenga Sourcing Works
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
          <li>Define bridal style, fabric preferences, and event requirements</li>
          <li>Identify suitable designers or boutiques in India</li>
          <li>Plan measurements and tailoring buffer for international delivery</li>
          <li>Coordinate ordering timeline with wedding schedule</li>
        </ul>

        <p className="mt-4 text-charcoal/70">
          If you want to understand the full process, see our sourcing guide:
          {" "}
          <Link href="/shop-from-india" className="underline">
            How to shop wedding outfits from India →
          </Link>
        </p>
      </section>

      {/* COMMON PROBLEMS */}

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Common Challenges Brides Face
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70 list-disc pl-5">
          <li>Incorrect measurements or tailoring expectations</li>
          <li>Shipping delays close to the wedding date</li>
          <li>Designer communication challenges</li>
          <li>Coordinating bridal party outfits at the same time</li>
        </ul>

        <p className="mt-4 text-charcoal/70">
          A clear sourcing strategy helps avoid these problems and ensures your
          bridal outfit arrives on time and fits properly.
        </p>
      </section>

      {/* CTA */}

      <BookConsultationCTA
        heading="Need help sourcing your bridal lehenga?"
        subheading="Book a consultation and we will map out your sourcing timeline and options."
        ctaText="Book a consultation →"
        href="/consultation"
      />

      {/* INTERNAL LINKS */}

      <section className="mt-12 border-t border-charcoal/10 pt-8">
        <h2 className="text-xl font-semibold text-charcoal">
          Related Services
        </h2>

        <ul className="mt-4 space-y-3 text-charcoal/70">
          <li>
            <Link href="/shop-from-india" className="underline">
              Shop wedding outfits from India
            </Link>
          </li>

          <li>
            <Link href="/buy-sherwani-from-india-usa" className="underline">
              Buy a sherwani from India (USA grooms)
            </Link>
          </li>

          <li>
            <Link href="/services" className="underline">
              Explore CeremonyVerse services
            </Link>
          </li>
        </ul>
      </section>

      {/* FAQ */}

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-charcoal">FAQ</h2>

        <div className="mt-4 space-y-4 text-charcoal/70">

          <div>
            <p className="font-medium text-charcoal">
              How long does it take to get a bridal lehenga from India?
            </p>
            <p>
              Production timelines vary by designer, but many bridal outfits
              require several weeks for embroidery and tailoring plus shipping
              time.
            </p>
          </div>

          <div>
            <p className="font-medium text-charcoal">
              Can bridal outfits be altered in the US?
            </p>
            <p>
              Minor tailoring adjustments can usually be done locally, but
              accurate measurements before ordering are important.
            </p>
          </div>

        </div>
      </section>
      
<Section className="py-12">
  <h2 className="text-2xl font-serif">Related Guides</h2>

  <ul className="mt-4 space-y-2 text-muted-foreground">
    <li>
      <Link href="/buy-sherwani-from-india-usa" className="underline">
        Buying a sherwani from India →
      </Link>
    </li>

    <li>
      <Link href="/indian-bridesmaid-outfits" className="underline">
        Coordinating bridesmaid outfits from India →
      </Link>
    </li>

    <li>
      <Link href="/indian-wedding-outfits-from-india" className="underline">
        Complete guide to Indian wedding outfit sourcing →
      </Link>
    </li>
  </ul>
</Section>
    </main>
  );
}
