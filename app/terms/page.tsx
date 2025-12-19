import { Section } from "@/components/site/section"

export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using CeremonyVerse wedding planning services.",
}

export default function TermsPage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto prose prose-stone">
        <h1>Terms of Service</h1>
        <p className="text-cvMuted text-lg">Last updated: December 19, 2024</p>

        <h2>1. Services</h2>
        <p>
          CeremonyVerse provides wedding planning services including but not limited to: full planning, partial
          planning, day-of coordination, and cultural sourcing support.
        </p>

        <h2>2. Client Responsibilities</h2>
        <p>Clients agree to:</p>
        <ul>
          <li>Provide accurate information about wedding requirements</li>
          <li>Respond to communications in a timely manner</li>
          <li>Make timely payments according to the contract</li>
          <li>Respect vendor relationships and contracts</li>
        </ul>

        <h2>3. Payment Terms</h2>
        <p>
          Payment schedules are outlined in individual service contracts. Deposits are non-refundable. Final payments
          are due 30 days before the wedding date.
        </p>

        <h2>4. Cancellations and Refunds</h2>
        <p>
          Cancellation policies vary by service tier and are detailed in your service contract. Deposits are
          non-refundable. Refunds for services not yet rendered may be available depending on timing and circumstances.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          CeremonyVerse is not liable for vendor performance, venue issues, or circumstances beyond our reasonable
          control. Our liability is limited to the fees paid for our services.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          All planning documents, timelines, and materials created by CeremonyVerse remain our intellectual property but
          are licensed to you for your wedding use.
        </p>

        <h2>7. Modifications</h2>
        <p>We reserve the right to modify these terms. Clients will be notified of material changes.</p>

        <h2>8. Contact</h2>
        <p>
          Questions about these terms? Contact us at{" "}
          <a href="mailto:hello@ceremonyverse.com">hello@ceremonyverse.com</a>
        </p>
      </div>
    </Section>
  )
}
