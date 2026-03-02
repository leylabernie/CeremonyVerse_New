import Link from "next/link"
import type { Metadata } from "next"
import SocialShare from "@/components/social-share"

export const metadata: Metadata = {
  title: "Complete Guide to Wedding Vendor Verification | CeremonyVerse",
  description:
    "Learn how to verify wedding vendors, avoid scams, and ensure quality for your Indian-American fusion wedding. Expert tips on checking credentials, reviews, and contracts.",
  keywords:
    "wedding vendor verification, verified wedding suppliers, Indian wedding vendors, fusion wedding planning, vendor background check, wedding vendor scams",
}

export default function VendorVerificationGuidePage() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-background">
        {/* Breadcrumb */}
        <nav className="text-sm text-charcoal/60 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>Vendor Verification Guide</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            The Complete Guide to Wedding Vendor Verification: Protecting Your Investment
          </h1>
          <div className="flex items-center gap-4 text-charcoal/60">
            <time dateTime="2025-01-15">January 15, 2025</time>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
            Planning an Indian-American fusion wedding involves coordinating with multiple vendors, often across
            international borders. With average wedding costs exceeding $250,000, ensuring your vendors are legitimate,
            qualified, and trustworthy isn't just important—it's essential. This comprehensive guide reveals the exact
            verification process used by professional wedding planners to protect their clients' investments.
          </p>

          <h2 className="font-serif text-3xl text-charcoal mt-12 mb-6">Why Vendor Verification Matters</h2>

          <p className="text-charcoal/80 leading-relaxed mb-6">
            The wedding industry, particularly for cross-border Indian weddings, faces unique challenges. Couples in the
            USA and Mexico seeking authentic Indian wedding items must navigate language barriers, time zones, and
            cultural differences—all while making high-stakes purchasing decisions for one of life's most important
            celebrations.
          </p>

          <div className="bg-sage/10 border-l-4 border-sage p-6 my-8 rounded-r-lg">
            <p className="text-charcoal font-semibold mb-4">Industry Reality Check:</p>
            <ul className="space-y-2 text-charcoal/80">
              <li>• 23% of couples report vendor-related issues during wedding planning</li>
              <li>• Cross-border transactions carry 3x higher fraud risk</li>
              <li>• Average loss from vendor fraud: $8,500 per incident</li>
              <li>• 67% of couples wish they had verified vendors more thoroughly</li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl text-charcoal mt-12 mb-6">The Three-Tier Verification Framework</h2>

          <p className="text-charcoal/80 leading-relaxed mb-6">
            Professional wedding planners use a systematic three-tier approach to vendor verification. Each tier
            addresses specific risk factors and builds confidence in the vendor's ability to deliver.
          </p>

          <h3 className="font-serif text-2xl text-charcoal mt-10 mb-4">Tier 1: Foundational Legitimacy Check</h3>

          <p className="text-charcoal/80 leading-relaxed mb-4">
            This initial screening verifies that the vendor is a legitimate, registered business operating legally in
            their jurisdiction.
          </p>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Essential Documents to Request:</h4>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">1.</span>
                <div>
                  <strong>Business Registration Certificate:</strong> Confirms legal entity status. In India, look for
                  Certificate of Incorporation or Partnership Deed.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">2.</span>
                <div>
                  <strong>GSTIN (Goods and Services Tax Identification Number):</strong> Required for all Indian
                  businesses. Verify at the official GST portal.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">3.</span>
                <div>
                  <strong>PAN (Permanent Account Number):</strong> Tax identification for Indian businesses.
                  Cross-reference with GSTIN.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">4.</span>
                <div>
                  <strong>Business Address Proof:</strong> Utility bill, lease agreement, or property documents
                  confirming physical location.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold">5.</span>
                <div>
                  <strong>Export License (if applicable):</strong> For vendors shipping internationally, verify IEC
                  (Import Export Code).
                </div>
              </li>
            </ul>
          </div>

          <h4 className="font-semibold text-charcoal mt-8 mb-4">Digital Footprint Analysis:</h4>
          <p className="text-charcoal/80 leading-relaxed mb-4">
            Legitimate businesses maintain consistent online presence. Red flags include:
          </p>
          <ul className="space-y-2 text-charcoal/80 mb-6">
            <li>• Website created within the last 6 months (check domain age at who.is)</li>
            <li>• No social media presence or recently created accounts with few followers</li>
            <li>• Generic email addresses (Gmail, Yahoo) instead of business domain</li>
            <li>• Stock photos instead of actual product/workshop images</li>
            <li>• Inconsistent business information across platforms</li>
          </ul>

          <h3 className="font-serif text-2xl text-charcoal mt-10 mb-4">Tier 2: Quality & Capability Assessment</h3>

          <p className="text-charcoal/80 leading-relaxed mb-6">
            Once legitimacy is established, assess whether the vendor can actually deliver the quality and service you
            need.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Virtual Site Inspection Protocol:</h4>
            <p className="text-charcoal/80 mb-4">
              Request a live video call to tour the vendor's workshop or showroom. This is non-negotiable for high-value
              items.
            </p>
            <p className="text-charcoal/80 font-semibold mb-2">What to look for during the call:</p>
            <ul className="space-y-2 text-charcoal/80">
              <li>
                • <strong>Workshop cleanliness and organization:</strong> Indicates attention to detail
              </li>
              <li>
                • <strong>Equipment and tools:</strong> Modern, well-maintained equipment suggests quality work
              </li>
              <li>
                • <strong>Work in progress:</strong> Ask to see current projects to assess craftsmanship
              </li>
              <li>
                • <strong>Material storage:</strong> Proper storage of fabrics, jewelry, and materials shows
                professionalism
              </li>
              <li>
                • <strong>Staff presence:</strong> Multiple employees indicate established business
              </li>
              <li>
                • <strong>Certifications displayed:</strong> Industry certifications, awards, or recognitions
              </li>
            </ul>
          </div>

          <h4 className="font-semibold text-charcoal mt-8 mb-4">Sample Order Strategy:</h4>
          <p className="text-charcoal/80 leading-relaxed mb-4">
            Before committing to large orders, place a small sample order to evaluate:
          </p>
          <ul className="space-y-2 text-charcoal/80 mb-6">
            <li>
              • <strong>Material quality:</strong> Does the fabric, jewelry, or product match descriptions?
            </li>
            <li>
              • <strong>Craftsmanship:</strong> Examine stitching, finishing, and attention to detail
            </li>
            <li>
              • <strong>Communication:</strong> How responsive and professional is the vendor?
            </li>
            <li>
              • <strong>Packaging:</strong> Proper packaging indicates care for the product
            </li>
            <li>
              • <strong>Shipping timeline:</strong> Did it arrive when promised?
            </li>
            <li>
              • <strong>Documentation:</strong> Were invoices, certificates, and tracking provided?
            </li>
          </ul>

          <h4 className="font-semibold text-charcoal mt-8 mb-4">Reference Verification:</h4>
          <p className="text-charcoal/80 leading-relaxed mb-4">
            Request contact information for 2-3 recent international clients. When speaking with references, ask:
          </p>
          <ul className="space-y-2 text-charcoal/80 mb-6">
            <li>• What did you purchase and what was the total value?</li>
            <li>• Did the final product match your expectations?</li>
            <li>• How was the communication throughout the process?</li>
            <li>• Were there any issues, and how were they resolved?</li>
            <li>• Would you work with this vendor again?</li>
            <li>• Any advice for someone considering this vendor?</li>
          </ul>

          <h3 className="font-serif text-2xl text-charcoal mt-10 mb-4">
            Tier 3: Premium Verification (High-Value Items)
          </h3>

          <p className="text-charcoal/80 leading-relaxed mb-6">
            For purchases exceeding $10,000 or items requiring authenticity guarantees (gold jewelry, silk sarees,
            gemstones), consider third-party verification.
          </p>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 my-6">
            <h4 className="font-semibold text-charcoal mb-4">Third-Party On-Site Audit:</h4>
            <p className="text-charcoal/80 mb-4">
              Professional inspection services can conduct physical audits of vendor facilities. Services include:
            </p>
            <ul className="space-y-2 text-charcoal/80">
              <li>
                • <strong>Bureau Veritas:</strong> Global inspection and certification company
              </li>
              <li>
                • <strong>SGS:</strong> Inspection, verification, testing, and certification services
              </li>
              <li>
                • <strong>Intertek:</strong> Quality and safety solutions for various industries
              </li>
              <li>
                • <strong>TÜV SÜD:</strong> Testing, inspection, and certification services
              </li>
            </ul>
            <p className="text-charcoal/80 mt-4">
              <strong>Cost:</strong> $500-$2,000 depending on scope. Worth it for orders over $15,000.
            </p>
          </div>

          <h4 className="font-semibold text-charcoal mt-8 mb-4">Material Certification:</h4>
          <p className="text-charcoal/80 leading-relaxed mb-4">
            For precious materials, request official certifications:
          </p>
          <ul className="space-y-3 text-charcoal/80 mb-6">
            <li>
              <strong>Gold Jewelry:</strong> BIS Hallmark certification (Bureau of Indian Standards) with purity mark
              (22K, 18K, etc.)
            </li>
            <li>
              <strong>Gemstones:</strong> Certificates from GIA (Gemological Institute of America), IGI (International
              Gemological Institute), or other recognized labs
            </li>
            <li>
              <strong>Silk Sarees:</strong> Silk Mark certification from Central Silk Board of India
            </li>
            <li>
              <strong>Diamonds:</strong> GIA or IGI certification with 4Cs grading (Cut, Color, Clarity, Carat)
            </li>
          </ul>

          <h2 className="font-serif text-3xl text-charcoal mt-12 mb-6">Red Flags: When to Walk Away</h2>

          <p className="text-charcoal/80 leading-relaxed mb-6">
            Certain warning signs should immediately disqualify a vendor, regardless of how attractive their prices or
            products appear.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
            <p className="text-charcoal font-semibold mb-4">Immediate Disqualifiers:</p>
            <ul className="space-y-3 text-charcoal/80">
              <li>
                • <strong>Refuses to provide business documentation:</strong> Legitimate businesses have nothing to hide
              </li>
              <li>
                • <strong>Demands immediate full payment:</strong> Legitimate vendors accept milestone-based payment
                schedules
              </li>
              <li>
                • <strong>Won't agree to video calls:</strong> If they won't show their facility, there's a reason
              </li>
              <li>
                • <strong>Pressure tactics:</strong> "Limited time offer" or "other buyers interested" to rush decisions
              </li>
              <li>
                • <strong>Inconsistent information:</strong> Details change between conversations
              </li>
              <li>
                • <strong>No written contract:</strong> Everything must be documented in writing
              </li>
              <li>
                • <strong>Refuses secure payment methods:</strong> Legitimate vendors understand buyer protection needs
              </li>
              <li>
                • <strong>Can't provide references:</strong> Established vendors have satisfied customers
              </li>
              <li>
                • <strong>Prices too good to be true:</strong> If it's 50%+ below market rate, it's likely fake or low
                quality
              </li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl text-charcoal mt-12 mb-6">The CeremonyVerse Verification Advantage</h2>

          <p className="text-charcoal/80 leading-relaxed mb-6">
            While you can conduct vendor verification yourself, the process is time-consuming and requires expertise.
            CeremonyVerse has already completed this rigorous verification for our entire supplier network.
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-sage/10 rounded-xl p-8 my-8">
            <h3 className="font-serif text-2xl text-charcoal mb-4">Our Verification Process Includes:</h3>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-sage flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Complete Tier 1, 2, and 3 verification for all suppliers</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-sage flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>On-site facility inspections by our team in India</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-sage flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Ongoing quality monitoring with mystery shopping and customer feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-sage flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure payment processing for every transaction</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-sage flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Pre-shipment quality inspection for all orders</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-sage flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dedicated case manager for dispute resolution</span>
              </li>
            </ul>
            <Link
              href="/services"
              className="inline-block mt-6 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold"
            >
              Explore Our Verified Supplier Network
            </Link>
          </div>

          <h2 className="font-serif text-3xl text-charcoal mt-12 mb-6">
            Conclusion: Verification is Investment Protection
          </h2>

          <p className="text-charcoal/80 leading-relaxed mb-6">
            Thorough vendor verification isn't paranoia—it's prudent business practice when making high-value purchases
            for your once-in-a-lifetime celebration. The time invested in verification (or the decision to work with a
            platform that has already done it) pays dividends in peace of mind, quality assurance, and financial
            protection.
          </p>

          <p className="text-charcoal/80 leading-relaxed mb-6">
            Remember: legitimate vendors welcome verification. If a supplier resists your due diligence efforts, that
            resistance itself is the biggest red flag of all.
          </p>

          <div className="bg-sage/10 rounded-xl p-8 mt-12">
            <h3 className="font-serif text-2xl text-charcoal mb-4">Ready to Plan Your Wedding with Confidence?</h3>
            <p className="text-charcoal/80 mb-6">
              Skip the verification stress and work with our pre-vetted network of premium Indian wedding suppliers.
              Every vendor has passed our rigorous three-tier verification process, and every transaction is
              professionally contracted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold text-center"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/heritage-harmony"
                className="inline-block bg-white text-charcoal border-2 border-charcoal px-8 py-3 rounded-full hover:bg-charcoal hover:text-white transition-colors font-semibold text-center"
              >
                View Our Flagship Service
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-charcoal/10">
            <SocialShare
              url="https://ceremonyverse.com/blog/vendor-verification-guide"
              title="Complete Guide to Wedding Vendor Verification"
            />
          </div>
        </div>
      </article>
    </>
  )
}
