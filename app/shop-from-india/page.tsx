import type { Metadata } from "next"
import { Section } from "@/components/site/section"

export const metadata: Metadata = {
  title: "Shop Indian Wedding Outfits From India | Lehenga & Sherwani Sourcing",
  description:
    "Buy authentic Indian wedding outfits directly from trusted boutiques in India while we manage communication, customization, and international shipping.",
  keywords:
    "buy lehenga from india usa, indian wedding outfits from india, sherwani from india usa, indian bridal lehenga sourcing, indian wedding shopping service",
}

export default function ShopFromIndiaPage() {
  return (
    <main>

      <Section className="pt-16 pb-12">
        <h1 className="text-4xl md:text-5xl font-serif">
          Shop Indian Wedding Outfits Directly From India
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
          Finding authentic Indian wedding outfits while living in the US can be difficult.
          Traveling internationally is expensive and coordinating with boutiques overseas
          can be frustrating. CeremonyVerse makes it simple.
        </p>

        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          We help couples source bridal lehengas, sherwanis, jewelry, and ceremony
          outfits directly from trusted boutiques in India while we manage vendor
          communication, customization, and shipping logistics.
        </p>
      </Section>


      <Section className="py-12">
        <h2 className="text-3xl font-serif">
          How Our “Shop From India” Service Works
        </h2>

        <div className="mt-8 space-y-6 max-w-3xl">

          <p>
            <strong>1. Consultation</strong> – We understand your wedding events,
            outfit needs, and style preferences.
          </p>

          <p>
            <strong>2. Boutique sourcing</strong> – We identify trusted Indian
            boutiques and designers that match your budget and aesthetic.
          </p>

          <p>
            <strong>3. Coordination</strong> – We handle communication,
            measurements, customization requests, and timelines.
          </p>

          <p>
            <strong>4. Delivery</strong> – Your outfits are shipped safely
            with managed international logistics.
          </p>

        </div>
      </Section>


      <Section className="py-12">
        <h2 className="text-3xl font-serif">
          What You Can Source Through CeremonyVerse
        </h2>

        <ul className="mt-6 list-disc pl-6 space-y-3 text-muted-foreground max-w-3xl">

          <li>Bridal lehengas</li>
          <li>Sherwanis for grooms</li>
          <li>Bridesmaid and groomsmen outfits</li>
          <li>Wedding jewelry</li>
          <li>Sangeet and reception outfits</li>
          <li>Family ceremony attire</li>

        </ul>
      </Section>


      <Section className="py-12">
        <h2 className="text-3xl font-serif">
          Why Couples Use Our Sourcing Service
        </h2>

        <div className="mt-6 space-y-4 text-muted-foreground max-w-3xl">

          <p>
            Traveling to India for wedding shopping can cost thousands in flights
            and time away from work. Our sourcing service allows couples to access
            authentic boutiques without the stress of international coordination.
          </p>

          <p>
            We act as your trusted liaison, ensuring communication clarity,
            quality expectations, and timeline management.
          </p>

        </div>
      </Section>


      <Section className="py-16">
        <h2 className="text-3xl font-serif">
          Start Your Outfit Sourcing Consultation
        </h2>

        <p className="mt-4 text-muted-foreground max-w-2xl">
          Schedule a consultation and we will help you source the right outfits
          for your wedding events.
        </p>
<p className="mt-6 text-muted-foreground max-w-2xl">
  Prefer to start by browsing real outfit examples? You can explore
  curated bridal, groom, and wedding party outfits in our Etsy shop.
</p>

<a
  href="https://www.etsy.com/shop/DesiWeddingStudioUS?ref=dashboard-header"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-3 underline"
>
  Browse outfits on Etsy →
</a>
        <a
          href="/book-consultation"
          className="inline-block mt-6 underline"
        >
          Book Your Consultation →
        </a>

      </Section>

    </main>
  )
}
