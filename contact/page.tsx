import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "@/components/icons"
import ContactForm from "@/components/contact-form"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Contact Us - Free Indian Wedding Consultation | CeremonyVerse",
  description:
    "Schedule your free consultation for Indian-American fusion wedding planning. Expert wedding planners serving Philadelphia, New Jersey, New York, Texas, California & nationwide. Call +1-215-341-9990 or book online.",
  keywords: [
    "wedding planner consultation",
    "Indian wedding planner contact",
    "fusion wedding quote",
    "free wedding consultation",
    "Indian and multicultural fusion wedding planner USA",
    "Indian wedding planner Philadelphia",
    "Indian wedding planner New Jersey",
    "Indian wedding planner near me",
    "book wedding consultation",
    "wedding planning inquiry",
  ],
  openGraph: {
    title: "Contact CeremonyVerse - Free Wedding Consultation",
    description:
      "Schedule your free consultation to discuss your Indian-American fusion wedding vision. We respond within 24 hours.",
    type: "website",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-32 lg:pt-36">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative pb-20 bg-gradient-to-br from-muted/50 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              Let's Start Planning Your Perfect Day
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Schedule your free consultation—no obligation, just honest conversation about your vision
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-muted/50 to-background p-8 md:p-12 rounded-3xl border border-border shadow-lg">
              <h2 className="font-serif text-3xl text-foreground mb-6">Schedule Your Free Consultation</h2>
              <p className="text-muted-foreground mb-8">
                Tell us about your vision and we'll show you how we can bring it to life with our verified supplier
                network and secure payment processing.
              </p>

              <ContactForm source="contact_page" />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to answer your questions and help you start planning your perfect fusion wedding. Reach out
                  via phone, email, or the form—we respond to all inquiries within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-muted/50 to-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-2">Phone</h3>
                      <a href="tel:+12153419990" className="text-lg text-primary hover:text-primary/80 font-medium">
                        +1-215-341-9990
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Fri: 9am-7pm EST</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-muted/50 to-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-2">Email</h3>
                      <a
                        href="mailto:hello@ceremonyverse.com"
                        className="text-lg text-secondary hover:text-secondary/80 font-medium"
                      >
                        hello@ceremonyverse.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-muted/50 to-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-background" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-2">Service Areas</h3>
                      <p className="text-foreground">United States & Mexico</p>
                      <p className="text-sm text-muted-foreground mt-1">Planning fusion weddings nationwide</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-muted/50 to-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-2">Business Hours</h3>
                      <div className="space-y-1 text-foreground">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM EST</p>
                        <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                        <p>Sunday: By appointment only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Reminder */}
              <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-primary-foreground">
                <h3 className="font-serif text-2xl mb-4">Why Choose CeremonyVerse?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Secure Payment Processing & Clear Contracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Three-Tier Verified Suppliers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Live Virtual Shopping from India</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Transparent Pricing & Contracts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
