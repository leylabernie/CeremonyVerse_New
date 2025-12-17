import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export const metadata = {
  title: "Refund & Deposit Policy | CeremonyVerse",
  description:
    "Understand CeremonyVerse's refund and deposit policy for sourcing services, custom orders, and handcrafted items from India.",
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
              <Shield className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Refund Policy</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-light text-foreground mb-6">Refund & Deposit Policy</h1>
            <p className="text-lg text-muted-foreground">Last Updated: January 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-12">
            <section className="bg-card/50 border border-border/50 rounded-2xl p-8">
              <h2 className="font-serif text-3xl font-light text-foreground mb-4">Policy Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                CeremonyVerse offers different refund terms based on the type of service. Planning services have
                flexible cancellation terms, while sourcing services for custom handcrafted items require non-refundable
                deposits due to overseas production.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Planning Services</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Full Refund Available</h3>
                    <p className="text-muted-foreground">
                      Planning consultation fees are refundable if canceled more than 30 days before service delivery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Partial Refund</h3>
                    <p className="text-muted-foreground">
                      Cancellations 14-30 days before service receive 50% refund of unused services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">No Refund</h3>
                    <p className="text-muted-foreground">
                      Cancellations within 14 days of service or after services rendered are non-refundable.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-8 rounded-r-xl">
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">
                Sourcing Services - Non-Refundable Deposits
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">
                    All handcrafted outfits, sarees, jewelry, and ceremonial items sourced through CeremonyVerse require
                    a non-refundable deposit.
                  </strong>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This deposit typically ranges from 30-50% of the total order value and covers:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Initial artisan labor and material procurement</li>
                  <li>• Overseas coordination and communication costs</li>
                  <li>• Custom measurements and design consultation</li>
                  <li>• Production setup and scheduling</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed font-semibold">
                  Once production begins, deposits cannot be refunded even if you cancel your order.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">What Qualifies for Refund</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
                  <h3 className="font-semibold text-lg text-foreground mb-3">Refundable Situations</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Item significantly different from agreed specifications</li>
                    <li>• Damaged during shipping (with photo proof within 72 hours)</li>
                    <li>• Wrong item shipped</li>
                    <li>• Non-delivery within agreed timeframe + 30 days</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                  <XCircle className="h-8 w-8 text-red-500 mb-4" />
                  <h3 className="font-semibold text-lg text-foreground mb-3">Non-Refundable Situations</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Change of mind after production begins</li>
                    <li>• Minor color/weave variations in handloom items</li>
                    <li>• Fit issues due to incorrect measurements provided</li>
                    <li>• Customs delays beyond our control</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border/50 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Refund Timeline</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Submit Request</h3>
                    <p className="text-muted-foreground text-sm">
                      Contact us within 72 hours of delivery with photos/videos of the issue
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Review (3-5 business days)</h3>
                    <p className="text-muted-foreground text-sm">
                      We review your case and contact the supplier for resolution
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Resolution (7-10 business days)</h3>
                    <p className="text-muted-foreground text-sm">
                      Approved refunds processed within 10 business days to original payment method
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="font-serif text-3xl font-light text-foreground mb-4">Questions About Refunds?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Schedule a free consultation with our team for assistance with refund requests
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                <Link href="/book-consultation">Schedule Free Consultation</Link>
              </Button>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
