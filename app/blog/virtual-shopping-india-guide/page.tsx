import SocialShare from "@/components/social-share"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Virtual Shopping for Indian Wedding Items: Complete Guide | CeremonyVerse",
  description:
    "Learn how to shop for authentic Indian wedding items from the US. Complete guide to virtual shopping, quality verification, and avoiding scams.",
  keywords:
    "virtual shopping India, buy Indian wedding items USA, online Indian wedding shopping, lehenga shopping online, Indian jewelry USA, authentic Indian wedding items",
}

export default function VirtualShoppingIndiaGuidePage() {
  return (
    <>
      <article className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="text-primary hover:text-primary/80 transition-colors mb-6 inline-block"
            >
              ← Back to Blog
            </Link>

            <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6">
              Virtual Shopping for Indian Wedding Items: Your Complete Guide
            </h1>

            <p className="text-xl text-charcoal/70 mb-8">
              How to buy authentic Indian wedding items from the US without getting scammed
            </p>

            <div className="flex items-center gap-4 text-charcoal/60">
              <span>By CeremonyVerse Team</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Shopping Guide</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="bg-white rounded-2xl p-8 mb-12 border border-primary/10">
                <h2 className="font-serif text-3xl text-charcoal mb-4">
                  The Challenge of Shopping from Abroad
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-4">
                  You've seen the photos on Instagram—stunning bridal lehengas,
                  intricate embroidery, elaborate jewelry sets, and perfectly
                  coordinated outfits for the entire wedding party. You want
                  that same level of authenticity and craftsmanship for your
                  wedding.
                </p>

                <p className="text-charcoal/80 leading-relaxed mb-4">
                  While many couples consider traveling to India for wedding
                  shopping, international trips introduce airfare costs, hotel
                  stays, time away from work, and vendor trust concerns.
                </p>

                <p className="text-charcoal/80 leading-relaxed">
                  A structured sourcing approach gives you access to trusted
                  Indian suppliers without the travel burden — combining cost
                  efficiency with controlled logistics and quality oversight.
                </p>
              </div>

              {/* The CeremonyVerse Advantage */}
              <div className="bg-gradient-to-br from-primary/10 to-sage/10 rounded-2xl p-10 mt-12 border border-primary/20">
                <h2 className="font-serif text-3xl text-charcoal mb-4">
                  The CeremonyVerse Virtual Shopping Advantage
                </h2>

                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Working with CeremonyVerse eliminates the risks and stress of
                  managing overseas vendors on your own.
                </p>

                <ul className="space-y-3 text-charcoal/80 mb-8">
                  <li>✓ Pre-Verified Suppliers</li>
                  <li>✓ Live Video Shopping Coordination</li>
                  <li>✓ Secure Milestone-Based Payments</li>
                  <li>✓ Quality Inspections Before Shipping</li>
                  <li>✓ Shipping & Customs Management</li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Schedule Free Consultation
                  </Link>

                  <Link
                    href="/services"
                    className="inline-block bg-white text-charcoal px-8 py-4 rounded-full hover:bg-charcoal/5 transition-colors text-center font-medium border border-charcoal/20"
                  >
                    Explore Virtual Shopping Services
                  </Link>
                </div>
              </div>

              <div className="mt-12">
                <SocialShare
                  url="https://ceremonyverse.com/blog/virtual-shopping-india-guide"
                  title="Virtual Shopping for Indian Wedding Items: Your Complete Guide"
                />
              </div>
            </article>
          </div>
        </section>
      </article>
    </>
  )
}
