import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"

export default function ToolsPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Wedding Planning Tools</h1>
        <p className="text-lg text-muted mb-8">
          Free tools to help you plan your Indian or fusion wedding with realistic budgets and timelines.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-xl font-semibold mb-3">Budget Calculator</h2>
            <p className="text-muted mb-4">
              Get a realistic budget allocation for your Indian wedding based on guest count and total budget.
            </p>
            <Button href="/tools/budget">Use Budget Tool →</Button>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-3">Guest Estimator</h2>
            <p className="text-muted mb-4">Estimate your guest count across multiple ceremonies and events.</p>
            <Button href="/guest-estimator" variant="secondary">
              Coming Soon
            </Button>
          </Card>
        </div>
      </div>
    </Section>
  )
}
