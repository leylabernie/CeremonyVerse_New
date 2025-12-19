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
