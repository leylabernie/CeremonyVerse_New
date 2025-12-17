import Navigation from "@/components/navigation"
import Link from "next/link"
import { Shield, Lock, Eye, FileText } from "lucide-react"
import Footer from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | CeremonyVerse - Your Data Protection",
  description:
    "Learn how CeremonyVerse protects your personal information and wedding planning data with industry-leading security measures.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Your Privacy Matters</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-light text-foreground mb-6">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last Updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-12">
            {/* Introduction */}
            <section className="bg-card/50 border border-border/50 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-light text-foreground mb-4">
                    Our Commitment to Your Privacy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At CeremonyVerse, we understand that planning your wedding involves sharing personal and sensitive
                    information. We are committed to protecting your privacy and handling your data with the utmost care
                    and transparency.
                  </p>
                </div>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Information We Collect</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary/30 pl-6">
                  <h3 className="font-semibold text-xl text-foreground mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Name, email address, phone number</li>
                    <li>• Wedding date, venue location, guest count</li>
                    <li>• Cultural preferences and traditions</li>
                    <li>• Budget information and payment details</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary/30 pl-6">
                  <h3 className="font-semibold text-xl text-foreground mb-3">Automatically Collected Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• IP address and browser type</li>
                    <li>• Pages visited and time spent on site</li>
                    <li>• Referring website and search terms</li>
                    <li>• Device information and operating system</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">How We Use Your Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                  <Eye className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg text-foreground mb-3">Service Delivery</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To provide wedding planning services, coordinate with vendors, process payments through secure
                    third-party payment processors (Stripe, PayPal, Zelle), and communicate updates about your
                    celebration.
                  </p>
                </div>

                <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                  <FileText className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-semibold text-lg text-foreground mb-3">Communication</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To send service updates, respond to inquiries, provide customer support, and share relevant wedding
                    planning resources.
                  </p>
                </div>

                <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg text-foreground mb-3">Security & Fraud Prevention</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To protect against fraudulent transactions, verify supplier authenticity, and maintain the security
                    of our payment processing systems.
                  </p>
                </div>

                <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                  <Lock className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-semibold text-lg text-foreground mb-3">Service Improvement</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To analyze usage patterns, improve our platform, develop new features, and enhance the overall
                    customer experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50 rounded-2xl p-8">
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">How We Protect Your Data</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Encryption:</strong> All sensitive data is encrypted in transit
                  using SSL/TLS and at rest using industry-standard encryption protocols.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Secure Payment Processing:</strong> Payment information is
                  processed through PCI-DSS compliant payment processors (Stripe, PayPal). We never store complete
                  credit card details.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Access Controls:</strong> Only authorized personnel have access to
                  personal information, and all access is logged and monitored.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Regular Audits:</strong> We conduct regular security audits and
                  vulnerability assessments to maintain the highest protection standards.
                </p>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We do not sell your personal information. We only share data in the following circumstances:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-primary/30 pl-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">With Your Consent</h3>
                  <p className="text-muted-foreground">
                    We share information with verified vendors and suppliers as necessary to fulfill your wedding
                    planning services.
                  </p>
                </div>

                <div className="border-l-4 border-secondary/30 pl-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Service Providers</h3>
                  <p className="text-muted-foreground">
                    We work with trusted third-party service providers for payment processing, email delivery, and
                    analytics.
                  </p>
                </div>

                <div className="border-l-4 border-primary/30 pl-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Legal Requirements</h3>
                  <p className="text-muted-foreground">
                    We may disclose information when required by law or to protect our rights and safety.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Your Privacy Rights</h2>
              <div className="bg-card/30 border border-border/50 rounded-xl p-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Access:</strong> Request a copy of the personal information we
                  hold about you.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Correction:</strong> Request corrections to inaccurate or
                  incomplete information.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Deletion:</strong> Request deletion of your personal information,
                  subject to legal obligations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Opt-Out:</strong> Unsubscribe from marketing communications at any
                  time.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Data Portability:</strong> Request your data in a structured,
                  machine-readable format.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience, analyze site usage, and deliver
                personalized content. You can control cookie preferences through your browser settings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Types of cookies we use: Essential (required for site functionality), Analytics (understand usage
                patterns), and Preference (remember your settings).
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="font-serif text-3xl font-light text-foreground mb-4">Questions About Your Privacy?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have questions about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <div className="space-y-2 text-foreground mb-6">
                <p>Email: privacy@ceremonyverse.com</p>
                <p>Phone: +1-215-341-9990</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-medium transition-colors"
              >
                Contact Us
              </Link>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
