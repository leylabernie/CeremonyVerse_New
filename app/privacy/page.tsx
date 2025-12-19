import { Section } from "@/components/site/section"

export const metadata = {
  title: "Privacy Policy",
  description: "How CeremonyVerse collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto prose prose-stone">
        <h1>Privacy Policy</h1>
        <p className="text-cvMuted text-lg">Last updated: December 19, 2024</p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us when you book a consultation, sign up for our services, or
          contact us:
        </p>
        <ul>
          <li>Name, email address, phone number</li>
          <li>Wedding details (date, location, guest count, budget)</li>
          <li>Cultural preferences and traditions</li>
          <li>Communication preferences</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide wedding planning services</li>
          <li>Communicate about your wedding</li>
          <li>Send service updates and planning resources</li>
          <li>Improve our services</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell or rent your personal information. We may share your information with vendors you select for
          your wedding, with your explicit consent.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information against
          unauthorized access, alteration, or destruction.
        </p>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt out of marketing communications</li>
        </ul>

        <h2>6. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:hello@ceremonyverse.com">hello@ceremonyverse.com</a>
        </p>
      </div>
    </Section>
  )
}
