import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Eye, Lock } from "@/components/icons"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Wedding Invitation Preview Suite | Interactive Digital Preview | CeremonyVerse",
  description:
    "Preview your complete wedding invitation package with our interactive app. Registration required. Download your suite for a small fee. Perfect for Indian & fusion weddings.",
  keywords: [
    "wedding invitation preview",
    "Indian wedding invitations",
    "digital invitation suite",
    "Indian wedding stationery",
    "invitation download service",
  ],
  openGraph: {
    title: "Wedding Invitation Preview Suite | CeremonyVerse",
    description:
      "Preview your entire wedding stationery collection from Save-the-Date to Reception with our interactive app.",
    type: "website",
  },
  alternates: {
    canonical: "https://ceremonyverse.com/services/invitation-suite",
  },
}

export default function InvitationSuitePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 lg:pt-36">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gradient-to-br from-accent/10 via-background to-secondary/5">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight text-balance">
            Preview Your Complete Wedding Invitation Suite
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            Visualize your entire wedding stationery collection before you print—from Save-the-Date cards to Reception
            invitations—inside our interactive preview app
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-start gap-4">
            <Lock className="w-6 h-6 text-accent shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-foreground mb-2">Registration Required</h3>
              <p className="text-muted-foreground">
                Create a free account to access the invitation preview suite. Downloads are available for a small fee.
                All digital products are non-refundable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-foreground mb-6">
            Your Complete Invitation Package
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
            Preview every piece of your wedding stationery suite in our interactive app
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <Eye className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-xl text-foreground mb-3">Save-the-Date</h3>
              <p className="text-muted-foreground text-sm">
                Preview your announcement designs with customizable text and colors
              </p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <Eye className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-xl text-foreground mb-3">Ceremony Invitations</h3>
              <p className="text-muted-foreground text-sm">
                Main invitation cards for Mehendi, Sangeet, Wedding, and Reception
              </p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <Eye className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-xl text-foreground mb-3">Details & Inserts</h3>
              <p className="text-muted-foreground text-sm">RSVP cards, accommodation info, timeline cards, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-secondary/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-foreground mb-16">
            Interactive Preview Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-2">Full Suite Visualization</h3>
                <p className="text-muted-foreground text-sm">
                  See how all your invitation pieces look together before committing to print
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-2">Customizable Text</h3>
                <p className="text-muted-foreground text-sm">
                  Enter your wedding details to see exactly how your names and dates will appear
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-2">Color Palette Options</h3>
                <p className="text-muted-foreground text-sm">Try different color schemes to match your wedding theme</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-2">Cultural Designs</h3>
                <p className="text-muted-foreground text-sm">
                  Traditional motifs for Indian, Hindu, Tamil, Christian & fusion weddings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-foreground mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-accent">1</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">Create Your Account</h3>
              <p className="text-muted-foreground">
                Sign up for free to access the invitation preview suite. Secure registration protects your designs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-accent">2</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">Preview & Customize</h3>
              <p className="text-muted-foreground">
                Explore designs, enter your wedding details, try color combinations, and visualize your complete suite.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-accent">3</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">Download Your Package</h3>
              <p className="text-muted-foreground">
                Once you're satisfied, download your invitation package files for a small fee. All sales are final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-secondary/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground mb-12">Preview for free. Download when you're ready.</p>

          <div className="bg-background border-2 border-accent rounded-2xl p-12 max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="text-5xl font-serif text-accent mb-2">$49</div>
              <p className="text-muted-foreground">Complete Suite Download</p>
            </div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">High-resolution files for all invitation pieces</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">Print-ready PDF and editable formats</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">Lifetime access to your downloads</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">Email support for printing questions</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mb-6">
              * All digital products are non-refundable. Please preview thoroughly before purchasing.
            </p>
            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/contact">Start Previewing Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Important:</strong> Digital invitation downloads are non-refundable. Registration required to
              access the preview suite.
            </p>
            <p>
              By purchasing, you agree to our{" "}
              <Link href="/terms-of-service" className="text-accent hover:underline">
                Terms & Conditions
              </Link>
              ,{" "}
              <Link href="/refund-policy" className="text-accent hover:underline">
                Refund Policy
              </Link>
              , and understand that all sales are final.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-secondary/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Ready to Preview Your Perfect Invitations?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Create your free account and start exploring invitation designs today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Create Free Account</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
