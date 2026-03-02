import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AustinPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl sm:text-6xl text-charcoal mb-6">Indian Wedding Planner in Austin, TX</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Expert fusion wedding planning for couples in the Live Music Capital of the World.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image src="/garden-gazebo-mint.jpg" alt="Austin Indian Wedding" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-charcoal">Celebrating Love in Austin</h2>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Austin offers a unique blend of hill country charm and modern city vibes, making it a perfect location for
              fusion weddings. Whether you're looking for a rustic venue like The Addison Grove or a luxury hotel
              downtown, we know the best spots that can accommodate large guest counts and outside catering.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              We have established relationships with the best Indian caterers, decorators, and pundits in the Austin
              area to ensure your wedding is authentic and seamless.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Plan Your Austin Wedding</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
