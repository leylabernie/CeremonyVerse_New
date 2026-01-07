import type { Metadata } from "next"
import { Section } from "@/components/site/section"
import { Card } from "@/components/site/card"

export const metadata: Metadata = {
  title: "Book a Call | CeremonyVerse Wedding Planning",
  description: "Schedule a 15-minute fit call to discuss your wedding planning and cultural sourcing needs.",
}

export default function BookPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || ""

  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Book a 15-Minute Fit Call</h1>
        <p className="text-lg text-muted-foreground mb-8">
          This is for planning + cultural sourcing support to confirm the right next step.
        </p>

        {calendlyUrl ? (
          <Card className="p-8">
            <div className="aspect-[3/4] md:aspect-video w-full">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book a consultation with CeremonyVerse"
              />
            </div>
          </Card>
        ) : (
          <Card className="p-8">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Online booking is currently being set up. Please contact us directly to schedule your consultation.
              </p>
              <a
                href="tel:+12153419990"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call +1-215-341-9990
              </a>
            </div>
          </Card>
        )}

        <p className="mt-6 text-sm text-muted-foreground">
          Prefer phone or email? Call{" "}
          <a href="tel:+12153419990" className="text-accent hover:underline">
            +1-215-341-9990
          </a>{" "}
          or email{" "}
          <a href="mailto:hello@ceremonyverse.com" className="text-accent hover:underline">
            hello@ceremonyverse.com
          </a>
        </p>
      </div>
    </Section>
  )
}
