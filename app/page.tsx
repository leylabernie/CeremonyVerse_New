import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>
      <Section>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-cvInk">
              Indian & Fusion Wedding Planning that Fits Your Real Budget
            </h1>
            <p className="mt-4 text-cvMuted text-base md:text-lg">
              CeremonyVerse helps couples design a culturally aligned wedding plan — and source the right outfits,
              jewelry, and ceremony essentials — without turning it into a shopping rabbit hole.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/start-planning">Start Planning</Button>
              <Button href="/services" variant="secondary">
                See Services & Pricing
              </Button>
            </div>

            <div className="mt-6 space-y-2 text-sm text-cvMuted">
              <div className="flex items-start gap-2">
                <span className="text-cvAccent">✓</span>
                <span>Planning support from strategy-only to full-service</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cvAccent">✓</span>
                <span>Cultural fluency across Indian + fusion ceremonies</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cvAccent">✓</span>
                <span>Clear scope, timelines, and decision support (so you don't overbuy or overbook)</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-cvMuted">Service-area business serving PA • NJ • DE • MD</p>
          </div>

          <Card className="md:p-10">
            <div className="text-sm font-medium text-cvInk">Start with clarity</div>
            <p className="mt-2 text-cvMuted">
              Tell us your budget and vision — we'll map the plan, priorities, and next steps.
            </p>
            <div className="mt-5 flex gap-3">
              <Button href="/start-planning">Start Planning</Button>
              <Button href="/services" variant="secondary">
                Compare Services
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section alt>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-cvInk">
          Planning + Cultural Sourcing (as a service)
        </h2>
        <p className="mt-3 text-cvMuted max-w-3xl">
          CeremonyVerse is a service-based planning studio. We don't operate as a store or marketplace — we help you
          make the right decisions, coordinate sourcing, and manage timelines so your wedding comes together smoothly
          and within budget.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-cvInk">Choose Your Support Level</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <div className="font-medium text-cvInk">Planning Intensive</div>
            <p className="mt-2 text-cvMuted text-sm">Budget & Vision Roadmap</p>
            <p className="mt-3 text-xs text-cvMuted">
              Paid clarity session to map priorities, vendor plan, and sourcing strategy.
            </p>
          </Card>

          <Card>
            <div className="font-medium text-cvInk">Partial Planning</div>
            <p className="mt-2 text-cvMuted text-sm">Ongoing Support + Vendor Strategy</p>
            <p className="mt-3 text-xs text-cvMuted">
              Monthly retainer for decision guidance, vendor shortlists, and timeline tracking.
            </p>
          </Card>

          <Card>
            <div className="font-medium text-cvInk">Full Planning</div>
            <p className="mt-2 text-cvMuted text-sm">End-to-End Management</p>
            <p className="mt-3 text-xs text-cvMuted">
              Complete vendor management, budget oversight, and multi-day coordination.
            </p>
          </Card>

          <Card>
            <div className="font-medium text-cvInk">Month-of Coordination</div>
            <p className="mt-2 text-cvMuted text-sm">Execution + Timeline Control</p>
            <p className="mt-3 text-xs text-cvMuted">Final timeline, vendor confirmations, and day-of execution.</p>
          </Card>
        </div>

        <Card className="mt-6 md:p-8">
          <div className="font-medium text-cvInk">Cultural Sourcing (Add-on or Standalone)</div>
          <p className="mt-2 text-cvMuted">
            Outfits, jewelry, ceremony items, favors, and India coordination — managed as part of your plan, with clear
            boundaries.
          </p>
          <p className="mt-3 text-xs text-cvMuted">
            Available as an add-on to any planning tier or as a standalone service.
          </p>
        </Card>

        <div className="mt-6">
          <Button href="/services">View Full Pricing</Button>
        </div>
      </Section>

      <Section alt>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-cvInk">
          Budget-first, culture-aware planning
        </h2>
        <p className="mt-3 text-cvMuted max-w-3xl">
          Most couples don't need "more options." They need a realistic plan. We start with your total budget and
          priorities, then build a decision path: what matters most, what can flex, what should be sourced from India vs
          locally, and what needs a firm timeline to avoid last-minute stress.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-cvInk">How It Works</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-lg font-medium text-cvInk">1. Share budget + vision</div>
            <p className="mt-2 text-cvMuted text-sm">Complete our form with your budget, events, and priorities.</p>
          </Card>

          <Card>
            <div className="text-lg font-medium text-cvInk">2. Get a plan</div>
            <p className="mt-2 text-cvMuted text-sm">
              Receive a roadmap with priorities, vendor approach, and sourcing strategy.
            </p>
          </Card>

          <Card>
            <div className="text-lg font-medium text-cvInk">3. Choose your support level</div>
            <p className="mt-2 text-cvMuted text-sm">
              Pick from intensive / partial / full / coordination + sourcing based on your needs.
            </p>
          </Card>
        </div>

        <Card className="mt-6 md:p-8 bg-cvSand border-cvAccent">
          <p className="text-cvInk font-medium">
            We'll tell you what's realistic, what's optional, and what won't fit — before you spend.
          </p>
        </Card>

        <div className="mt-6 flex gap-3">
          <Button href="/start-planning">Start Planning</Button>
          <Button href="/wedding-journeys" variant="secondary">
            View Wedding Journeys
          </Button>
        </div>
      </Section>

      <Section alt>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-cvInk">What Clients Value</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card>
            <div className="font-medium text-cvInk">Clarity</div>
            <p className="mt-2 text-cvMuted text-sm">
              No sales pressure. Just honest guidance on what fits your budget and timeline.
            </p>
          </Card>
          <Card>
            <div className="font-medium text-cvInk">Cultural Fluency</div>
            <p className="mt-2 text-cvMuted text-sm">
              We understand Gujarati, South Indian, Punjabi, Jain, and fusion ceremonies.
            </p>
          </Card>
          <Card>
            <div className="font-medium text-cvInk">Accountability</div>
            <p className="mt-2 text-cvMuted text-sm">Clear scope, defined timelines, and milestone-based support.</p>
          </Card>
        </div>
      </Section>

      {/* Final CTA section */}
      <Section>
        <Card className="md:p-10">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-cvInk">
            Ready to plan with a real budget in mind?
          </h3>
          <p className="mt-3 text-cvMuted">
            Start with our Budget + Vision Form so we can recommend the right level of support for your wedding.
          </p>
          <div className="mt-6 flex gap-3">
            <Button href="/start-planning">Start Planning</Button>
            <Button href="/contact" variant="secondary">
              Book Consultation
            </Button>
          </div>
        </Card>
      </Section>
    </>
  )
}
