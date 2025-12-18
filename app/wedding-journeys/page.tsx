import { Section } from "@/components/site/section"
import { Accordion } from "@/components/site/accordion"
import { Button } from "@/components/ui/button"

export default function WeddingJourneysPage() {
  const items = [
    {
      title: "Gujarati–Tamil Fusion Wedding | New Jersey",
      content: (
        <div className="space-y-2 text-sm">
          <div>
            <b>Events:</b> Mehendi, Haldi, Wedding Ceremony, Reception
          </div>
          <div>
            <b>Scope:</b> Full-Service Planning
          </div>
          <div>
            <b>Challenges solved:</b> aligning rituals, sequencing priests, multi-event timelines, guest flow
          </div>
          <div>
            <b>Outcome:</b> culturally respectful ceremonies with smooth transitions across events
          </div>
        </div>
      ),
    },
    {
      title: "North Indian Destination Wedding | Mexico",
      content: (
        <div className="space-y-2 text-sm">
          <div>
            <b>Events:</b> Welcome, Mehendi, Sangeet, Wedding, Reception
          </div>
          <div>
            <b>Scope:</b> Destination Planning & Vendor Coordination
          </div>
          <div>
            <b>Challenges solved:</b> venue adaptation for rituals, baraat logistics, cross-country coordination
          </div>
          <div>
            <b>Outcome:</b> tradition preserved with destination-ready execution
          </div>
        </div>
      ),
    },
    {
      title: "Modern Fusion Wedding | California",
      content: (
        <div className="space-y-2 text-sm">
          <div>
            <b>Events:</b> Ceremony, Reception
          </div>
          <div>
            <b>Scope:</b> Partial Planning
          </div>
          <div>
            <b>Outcome:</b> meaningful cultural elements with streamlined timeline and guest experience
          </div>
        </div>
      ),
    },
  ]

  return (
    <>
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Real Indian & Fusion Wedding Journeys</h1>
        <p className="mt-4 text-cvMuted max-w-3xl">
          These journeys focus on planning strategy, cultural coordination, and execution—so couples understand how
          multi-day Indian weddings are built in real life.
        </p>

        <div className="mt-6 flex gap-3">
          <Button href="/start-planning">Start Planning</Button>
          <Button href="/services" variant="secondary">
            Compare Services
          </Button>
        </div>
      </Section>

      <Section alt>
        <Accordion items={items} />
      </Section>

      <Section>
        <div className="rounded-2xl border border-cvBorder bg-cvSand p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Not sure what you need?</h2>
          <p className="mt-3 text-cvMuted max-w-2xl">
            Tell us your budget, event count, and location. We'll recommend the right level of support so you get help
            without overpaying or underplanning.
          </p>
          <div className="mt-6">
            <Button href="/start-planning">Start Planning</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
