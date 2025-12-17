import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HowWePlanSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Plan Real Indian Weddings</h2>
        <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
          Strategy, coordination, and execution—not just inspiration
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="group p-6 bg-cream rounded-lg">
            <h3 className="font-serif text-xl font-medium text-charcoal mb-3">Understand Your Traditions</h3>
            <p className="text-charcoal/60">
              Gujarati, South Indian, Punjabi, Jain, and fusion ceremonies planned with cultural respect.
            </p>
          </div>
          <div className="group p-6 bg-cream rounded-lg">
            <h3 className="font-serif text-xl font-medium text-charcoal mb-3">Design & Source Thoughtfully</h3>
            <p className="text-charcoal/60">Coordinated décor, attire, and India sourcing when required.</p>
          </div>
          <div className="group p-6 bg-cream rounded-lg">
            <h3 className="font-serif text-xl font-medium text-charcoal mb-3">Execute Seamlessly</h3>
            <p className="text-charcoal/60">Timelines, vendor management, and milestone-based payments.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/wedding-journeys">
            <Button size="lg" className="font-sans bg-primary text-primary-foreground hover:bg-primary/90">
              View Wedding Journeys
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
