import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"
import { Button } from "@/components/ui/button"

export function InternalCTA() {
  return (
    <Section variant="warm2">
      <Card className="md:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Ready to Start Sourcing?
          <p className="text-muted-foreground mb-6">
           Begin with our Shop From India process or explore our pricing for optional planning support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
<Button href="/shop-from-india">Shop From India</Button>
            <Button href="/pricing" variant="secondary">
              View Pricing
            </Button>
          </div>
        </div>
      </Card>
    </Section>
  )
}
