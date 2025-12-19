import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"
import { InternalCTA } from "@/components/internal-cta"

export default function ServicesPage() {
  return (
    <>
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Indian & Fusion Wedding Planning Services</h1>
        <p className="mt-4 text-cvMuted max-w-3xl">
          Planning an Indian or fusion wedding means matching your vision to your budget while honoring cultural
          traditions. We offer flexible planning support — from one-time strategy sessions to full coordination — so you
          get the right level of help for your event complexity, timeline, and priorities.
        </p>

        <div className="mt-6 flex gap-3">
          <Button href="/start-planning">Start Planning</Button>
          <Button href="/wedding-journeys" variant="secondary">
            View Wedding Journeys →
          </Button>
        </div>
      </Section>

      <Section variant="warm">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Core Services</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card>
            <div className="font-medium text-lg">Full Wedding Planning</div>
            <ul className="mt-3 text-sm text-cvMuted list-disc pl-5 space-y-2">
              <li>Multi-event strategy + ceremony sequencing</li>
              <li>Vendor sourcing and management</li>
              <li>Timelines for all events</li>
              <li>Guest experience flow + logistics</li>
              <li>Planning checkpoints tied to deliverables</li>
              <li>Secure milestone invoices</li>
            </ul>
          </Card>

          <Card>
            <div className="font-medium text-lg">Partial Planning & Coordination</div>
            <ul className="mt-3 text-sm text-cvMuted list-disc pl-5 space-y-2">
              <li>Structure and planning roadmap</li>
              <li>Vendor coordination and timeline cleanup</li>
              <li>Cultural guidance on ceremony flow</li>
              <li>Final run-of-show for all events</li>
              <li>Communication and execution support</li>
              <li>Milestone-based invoicing</li>
            </ul>
          </Card>

          <Card>
            <div className="font-medium text-lg">Virtual Planning & India Sourcing</div>
            <ul className="mt-3 text-sm text-cvMuted list-disc pl-5 space-y-2">
              <li>Virtual planning sessions</li>
              <li>India sourcing coordination as needed</li>
              <li>Proof/checkpoints and documentation</li>
              <li>Vendor communication across time zones</li>
              <li>Logistics planning for delivery readiness</li>
              <li>Secure payments + clear milestones</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section variant="warm2">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Pricing & Scope for This Service</h2>
        <p className="text-cvMuted max-w-3xl mb-6">
          CeremonyVerse works with couples and families across a range of wedding budgets, depending on priorities,
          guest size, and event structure.
        </p>
        <p className="text-cvMuted max-w-3xl mb-6">
          Pricing for this service is based on the scope of planning support and cultural coordination involved. All
          services begin with a clearly defined scope — no pressure, no unnecessary upsells.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <Card>
            <h3 className="font-medium mb-3">Minimum included:</h3>
            <ul className="space-y-2 text-sm text-cvMuted">
              <li>• Core planning support specific to this service</li>
              <li>• Cultural guidance relevant to your ceremonies</li>
              <li>• Budget-aligned recommendations</li>
              <li>• Clear planning structure and next steps</li>
            </ul>
          </Card>

          <Card>
            <h3 className="font-medium mb-3">May increase depending on:</h3>
            <ul className="space-y-2 text-sm text-cvMuted">
              <li>• Number of events</li>
              <li>• Guest count and logistics</li>
              <li>• Vendor complexity</li>
              <li>• Sourcing or travel coordination</li>
            </ul>
          </Card>
        </div>

        <div className="mt-8 flex gap-3">
          <Button href="/pricing">View Full Pricing</Button>
          <Button href="/start-planning" variant="secondary">
            Start with Budget + Vision Form
          </Button>
        </div>
      </Section>
      {/* </CHANGE> */}

      <Section>
        <Card className="md:p-10">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
            What these services look like in real weddings
          </h3>
          <p className="mt-3 text-cvMuted">
            We share planning journeys to show how coordination, timelines, and cultural clarity come together—without
            relying on inspiration galleries.
          </p>
          <div className="mt-6">
            <Button href="/wedding-journeys" variant="secondary">
              View Wedding Journeys →
            </Button>
          </div>
        </Card>
      </Section>

      <Section variant="warm2">
        <Card className="md:p-10">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">Payment & Security</h3>
          <p className="text-cvMuted">
            We use secure, milestone-based payments through Stripe, PayPal, and Zelle. Each invoice is tied to specific
            deliverables and planning checkpoints, giving you transparency and control throughout the process.
          </p>
        </Card>
      </Section>

      <InternalCTA />
    </>
  )
}
