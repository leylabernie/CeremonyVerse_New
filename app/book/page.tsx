import type { Metadata } from "next"
import { Section } from "@/components/site/section"
import { CalendlyEmbed } from "@/components/calendly-embed"

export const metadata: Metadata = {
  title: "Book a Call | CeremonyVerse Wedding Planning",
  description: "Schedule a 15-minute fit call to discuss your wedding planning and cultural sourcing needs.",
}

export default function BookPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Book a 15-Minute Fit Call</h1>
          <p className="text-lg text-muted-foreground">
            This is for planning + cultural sourcing support to confirm the right next step.
          </p>
        </div>

        <CalendlyEmbed />

        <p className="mt-8 text-center text-sm text-muted-foreground">
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
