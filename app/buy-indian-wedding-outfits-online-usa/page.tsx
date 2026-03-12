import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Buy Indian Wedding Outfits Online | CeremonyVerse",
  description:
    "Learn how to buy authentic Indian wedding outfits online including bridal lehengas, sherwanis, and bridesmaid outfits sourced from trusted boutiques in India.",
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">

      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-stone-900">
        Buy Indian Wedding Outfits Online (Without the Confusion)
      </h1>

      <p className="text-lg text-muted-foreground mb-6">
        Buying Indian wedding outfits online can feel overwhelming,
        especially when ordering from overseas boutiques. Many couples
        struggle with sizing uncertainty, unreliable sellers, and
        shipping delays before major wedding events.
      </p>

      <p className="text-lg text-muted-foreground mb-10">
        CeremonyVerse helps couples source authentic Indian wedding
        outfits directly from trusted boutiques in India — with guidance
        throughout the process.
      </p>

      <h2 className="text-2xl font-serif mt-12 mb-4">
        Outfits We Help Source
      </h2>

      <ul className="space-y-2 text-muted-foreground">
        <li>• Bridal lehengas</li>
        <li>• Sherwanis for grooms</li>
        <li>• Bridesmaid lehengas and sarees</li>
        <li>• Wedding guest attire</li>
        <li>• Jewelry and ceremony accessories</li>
      </ul>

      <h2 className="text-2xl font-serif mt-12 mb-4">
        Why Couples Use CeremonyVerse
      </h2>

      <ul className="space-y-2 text-muted-foreground">
        <li>• Guidance selecting trusted boutiques in India</li>
        <li>• Help coordinating bridal party outfits</li>
        <li>• Advice on sizing and custom tailoring</li>
        <li>• Planning shipping timelines before the wedding</li>
      </ul>

      <div className="mt-12">
        <Button asChild>
          <Link href="/shop-from-india">
            Learn How Our Sourcing Process Works
          </Link>
        </Button>
      </div>

    </main>
  )
}
