import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, ImageIcon, Presentation } from "lucide-react"

export const metadata: Metadata = {
  title: "Marketing Materials | CeremonyVerse",
  description:
    "Download brochures, pamphlets, and marketing materials for CeremonyVerse luxury Indian-American fusion wedding planning services.",
}

export default function MarketingMaterialsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-balance">Marketing Materials</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Professional brochures and pamphlets to share with your clients and partners
          </p>
        </div>
      </section>

      {/* Brochures Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-12 text-center">Client Brochures</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Services Overview Brochure */}
            <Card>
              <CardHeader>
                <div className="w-full aspect-[3/4] relative mb-4 rounded-lg overflow-hidden bg-muted">
                  <Image
                    src="/services-brochure-cover.jpg"
                    alt="Services Overview Brochure"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="font-serif text-2xl">Services Overview Brochure</CardTitle>
                <CardDescription>
                  Comprehensive guide to all CeremonyVerse services including vendor verification, secure payment
                  processing, and virtual shopping
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>8 pages • PDF format</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Contents:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Three-tier vendor verification process</li>
                      <li>Secure payment processing details</li>
                      <li>Virtual shopping services</li>
                      <li>Cultural consultation offerings</li>
                      <li>Pricing and packages overview</li>
                    </ul>
                  </div>
                  <Button className="w-full" asChild>
                    <a href="/services-brochure.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Heritage & Harmony Plan */}
            <Card>
              <CardHeader>
                <div className="w-full aspect-[3/4] relative mb-4 rounded-lg overflow-hidden bg-muted">
                  <Image
                    src="/heritage-harmony-brochure.jpg"
                    alt="Heritage & Harmony Plan Brochure"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="font-serif text-2xl">Heritage & Harmony Plan</CardTitle>
                <CardDescription>
                  Detailed information about our flagship service for couples disconnected from their cultural roots
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>6 pages • PDF format</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Contents:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Cultural education sessions</li>
                      <li>Ceremony design and planning</li>
                      <li>Family mediation services</li>
                      <li>Tradition customization options</li>
                      <li>Success stories and testimonials</li>
                    </ul>
                  </div>
                  <Button className="w-full" asChild>
                    <a href="/heritage-harmony-brochure.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pricing & Packages */}
            <Card>
              <CardHeader>
                <div className="w-full aspect-[3/4] relative mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Presentation className="h-24 w-24 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl">Pricing & Packages Guide</CardTitle>
                <CardDescription>
                  Transparent pricing information for all service tiers and custom packages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>4 pages • PDF format</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Contents:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Service tier pricing (Essential, Premium, Luxury)</li>
                      <li>À la carte service options</li>
                      <li>Heritage & Harmony Plan pricing</li>
                      <li>Payment terms and secure processing details</li>
                      <li>Special offers and discounts</li>
                    </ul>
                  </div>
                  <Button className="w-full" asChild>
                    <a href="/pricing-guide.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Guide
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Company Profile */}
            <Card>
              <CardHeader>
                <div className="w-full aspect-[3/4] relative mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <ImageIcon className="h-24 w-24 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl">Company Profile</CardTitle>
                <CardDescription>
                  Our story, mission, values, and what makes CeremonyVerse unique in the wedding industry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>6 pages • PDF format</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Contents:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Founder's story and inspiration</li>
                      <li>Company mission and values</li>
                      <li>Unique service differentiators</li>
                      <li>Client testimonials and success stories</li>
                      <li>Industry certifications and partnerships</li>
                    </ul>
                  </div>
                  <Button className="w-full" asChild>
                    <a href="/company-profile.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Profile
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* One-Pagers Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-12 text-center">Quick Reference Sheets</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Vendor Verification Checklist</CardTitle>
                <CardDescription>One-page guide to our three-tier verification process</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <a href="/vendor-verification-checklist.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secure Payment Processing Overview</CardTitle>
                <CardDescription>How our secure payment processing protects your wedding investments</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <a href="/payment-protection-overview.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Virtual Shopping Guide</CardTitle>
                <CardDescription>Step-by-step process for shopping Indian wedding items remotely</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <a href="/virtual-shopping-guide.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Materials CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="font-serif text-3xl mb-4">Need Custom Marketing Materials?</h2>
              <p className="text-muted-foreground mb-6 text-balance">
                We can create customized brochures, presentations, and marketing materials tailored to your specific
                needs
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Request Custom Materials</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
