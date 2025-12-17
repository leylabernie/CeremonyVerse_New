import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
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

export default function VirtualShoppingIndiaGuide() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors mb-6 inline-block">
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
                <h2 className="font-serif text-3xl text-charcoal mb-4">The Challenge of Shopping from Abroad</h2>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  You've seen the photos on Instagram—stunning bridal lehengas with intricate embroidery, elaborate
                  jewelry sets that sparkle under the lights, perfectly coordinated outfits for the entire wedding
                  party. You want that same level of authenticity and craftsmanship for your wedding. But there's one
                  problem: you live in the United States, and the best pieces are in India.
                </p>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  You could fly to India for shopping, but that means taking time off work, spending thousands on
                  flights and hotels, and dealing with the stress of coordinating with multiple vendors in different
                  cities. Or you could try shopping online, but how do you know if what you see in photos is what you'll
                  actually receive? How do you verify quality? What if the sizing is wrong? What if the package never
                  arrives?
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  This guide will show you exactly how to shop for authentic Indian wedding items virtually—safely,
                  efficiently, and without the common pitfalls that trap unsuspecting couples.
                </p>
              </div>

              {/* What You Can Buy Virtually */}
              <h2 className="font-serif text-4xl text-charcoal mb-6 mt-12">
                What You Can (and Should) Buy Virtually from India
              </h2>

              <div className="bg-sage/10 rounded-xl p-8 mb-8 border border-sage/20">
                <h3 className="font-serif text-2xl text-charcoal mb-4">Best Items for Virtual Shopping:</h3>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <strong>Bridal Lehenga & Outfits:</strong> Custom-made pieces with detailed measurements. Expect
                      to pay $800-$5,000+ depending on designer and embroidery work.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <strong>Groom's Sherwani & Accessories:</strong> Custom-tailored with matching accessories. Budget
                      $500-$3,000.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <strong>Jewelry Sets:</strong> Kundan, polki, temple jewelry. Both costume and fine jewelry
                      available. $200-$10,000+ range.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <strong>Wedding Party Outfits:</strong> Coordinated sarees, lehengas, kurtas for bridesmaids and
                      groomsmen. $150-$800 per outfit.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <strong>Invitations & Stationery:</strong> Custom-designed with traditional motifs. $3-$15 per
                      invitation.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <strong>Wedding Favors:</strong> Traditional items like mithai boxes, incense sets, decorative
                      items. $2-$20 per favor.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <strong>Decor Items:</strong> Mandap decorations, fabric draping, traditional props. Varies widely
                      by item.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-xl p-8 mb-8 border border-primary/20">
                <h3 className="font-serif text-2xl text-charcoal mb-4">Items to Avoid Buying Virtually:</h3>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <span className="text-charcoal/40 font-bold">✗</span>
                    <div>
                      <strong>Fresh Flowers & Perishables:</strong> These need to be sourced locally for obvious
                      reasons.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-charcoal/40 font-bold">✗</span>
                    <div>
                      <strong>Large Furniture or Heavy Decor:</strong> Shipping costs will be prohibitive. Rent locally
                      instead.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-charcoal/40 font-bold">✗</span>
                    <div>
                      <strong>Items You Need to Try On Multiple Times:</strong> If you're very particular about fit and
                      can't commit to measurements, shop locally.
                    </div>
                  </li>
                </ul>
              </div>

              {/* The Virtual Shopping Process */}
              <h2 className="font-serif text-4xl text-charcoal mb-6 mt-12">
                The Virtual Shopping Process: Step-by-Step
              </h2>

              <h3 className="font-serif text-2xl text-primary mb-4">
                Step 1: Research & Vendor Selection (2-3 months before you need items)
              </h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Start by identifying reputable vendors. Here's how:
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal/80 space-y-2">
                <li>Check Instagram for designers whose aesthetic matches your vision</li>
                <li>Read reviews on wedding forums and Facebook groups</li>
                <li>Ask for recommendations from recently married friends</li>
                <li>Verify the vendor has a physical store location in India (not just online)</li>
                <li>Look for vendors who have experience shipping internationally</li>
              </ul>

              <div className="bg-white rounded-xl p-6 mb-8 border border-charcoal/10">
                <h4 className="font-bold text-charcoal mb-3">Red Flags to Watch For:</h4>
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  <li>• No physical address or only a P.O. box</li>
                  <li>• Prices that seem too good to be true (they usually are)</li>
                  <li>• Unwillingness to do video calls or show you the workshop</li>
                  <li>• No clear return or alteration policy</li>
                  <li>• Pressure to pay full amount upfront without any protections</li>
                  <li>• Poor communication or delayed responses</li>
                </ul>
              </div>

              <h3 className="font-serif text-2xl text-primary mb-4">Step 2: Initial Consultation via Video Call</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Once you've shortlisted vendors, schedule video consultations. This is crucial for several reasons:
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal/80 space-y-2">
                <li>
                  <strong>Verify legitimacy:</strong> See the actual store/workshop, not just photos
                </li>
                <li>
                  <strong>See fabrics in different lighting:</strong> Colors look different on screen vs. in person
                </li>
                <li>
                  <strong>Assess communication:</strong> Will this vendor be responsive throughout the process?
                </li>
                <li>
                  <strong>Discuss customization:</strong> Explain exactly what you want and gauge their understanding
                </li>
              </ul>

              <div className="bg-sage/10 rounded-xl p-6 mb-8 border border-sage/20">
                <p className="text-charcoal/80 leading-relaxed mb-2">
                  <strong>Pro Tip:</strong> Schedule video calls during Indian business hours (which means early morning
                  or late evening for you in the US). This shows you're serious and allows you to see the workshop
                  during active hours.
                </p>
              </div>

              <h3 className="font-serif text-2xl text-primary mb-4">Step 3: Detailed Measurements & Specifications</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                For custom clothing, accurate measurements are everything. Here's what you need:
              </p>

              <div className="bg-white rounded-xl p-6 mb-6 border border-charcoal/10">
                <h4 className="font-bold text-charcoal mb-3">For Bridal Lehenga:</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-charcoal/70 text-sm">
                  <li>• Bust</li>
                  <li>• Waist</li>
                  <li>• Hips</li>
                  <li>• Shoulder width</li>
                  <li>• Blouse length</li>
                  <li>• Sleeve length</li>
                  <li>• Armhole</li>
                  <li>• Skirt length</li>
                  <li>• Height</li>
                  <li>• Neck depth (front & back)</li>
                </ul>
              </div>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                <strong>Important:</strong> Have a professional tailor take your measurements. Don't rely on
                measurements from old clothes or self-measuring. Budget $50-100 for professional measuring services.
                It's worth it to avoid a $3,000 lehenga that doesn't fit.
              </p>

              <h3 className="font-serif text-2xl text-primary mb-4">Step 4: Design Approval & Sample Review</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">Before production begins, you should receive:</p>
              <ul className="list-disc pl-6 mb-6 text-charcoal/80 space-y-2">
                <li>
                  <strong>Design sketches or digital mockups:</strong> Showing exactly what will be created
                </li>
                <li>
                  <strong>Fabric swatches:</strong> Mailed to you so you can see and feel the actual materials
                </li>
                <li>
                  <strong>Embroidery samples:</strong> Photos or small samples of the embroidery work
                </li>
                <li>
                  <strong>Color confirmations:</strong> Via video call in natural lighting
                </li>
              </ul>

              <div className="bg-primary/5 rounded-xl p-6 mb-8 border border-primary/20">
                <p className="text-charcoal/80 leading-relaxed">
                  <strong>Payment Milestone:</strong> This is typically when you pay 30-40% deposit. NEVER pay the full
                  amount upfront. Use secure payment processing or payment methods with buyer protection.
                </p>
              </div>

              <h3 className="font-serif text-2xl text-primary mb-4">Step 5: Production & Progress Updates</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                During production (typically 4-8 weeks for custom pieces), you should receive:
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal/80 space-y-2">
                <li>Weekly photo or video updates showing progress</li>
                <li>Opportunity to request minor adjustments before completion</li>
                <li>Notification when the piece is ready for final inspection</li>
              </ul>

              <h3 className="font-serif text-2xl text-primary mb-4">Step 6: Pre-Shipment Quality Check</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                This is the most critical step that many couples skip—and later regret. Before the item ships, you
                should:
              </p>
              <ul className="list-disc pl-6 mb-6 text-charcoal/80 space-y-2">
                <li>
                  <strong>Request a live video inspection:</strong> See the finished piece from all angles
                </li>
                <li>
                  <strong>Check all details:</strong> Embroidery, stitching, lining, closures, embellishments
                </li>
                <li>
                  <strong>Verify measurements:</strong> Have the vendor measure the finished piece on camera
                </li>
                <li>
                  <strong>Test functionality:</strong> Zippers, hooks, ties—make sure everything works
                </li>
              </ul>

              <div className="bg-sage/10 rounded-xl p-6 mb-8 border border-sage/20">
                <p className="text-charcoal/80 leading-relaxed">
                  <strong>Pro Tip:</strong> Consider hiring a third-party inspection service in India (costs $50-150) to
                  physically inspect high-value items before shipping. This is especially important for items over
                  $2,000.
                </p>
              </div>

              <h3 className="font-serif text-2xl text-primary mb-4">Step 7: Shipping & Customs</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">Shipping from India to the US typically takes:</p>
              <ul className="list-disc pl-6 mb-6 text-charcoal/80 space-y-2">
                <li>
                  <strong>Express shipping:</strong> 3-5 business days ($100-300 depending on weight)
                </li>
                <li>
                  <strong>Standard shipping:</strong> 10-15 business days ($50-150)
                </li>
                <li>
                  <strong>Economy shipping:</strong> 3-6 weeks ($30-80)
                </li>
              </ul>

              <div className="bg-white rounded-xl p-6 mb-8 border border-charcoal/10">
                <h4 className="font-bold text-charcoal mb-3">Customs & Duties:</h4>
                <p className="text-charcoal/70 text-sm mb-3">
                  Wedding attire imported to the US is subject to customs duties (typically 10-16% of declared value).
                  Make sure the vendor:
                </p>
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  <li>• Declares accurate value (under-declaring can cause legal issues)</li>
                  <li>• Provides detailed invoice for customs</li>
                  <li>• Uses reputable courier (DHL, FedEx, UPS) with tracking</li>
                  <li>• Insures the package for full value</li>
                </ul>
              </div>

              <h3 className="font-serif text-2xl text-primary mb-4">Step 8: Delivery & Final Inspection</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">When your package arrives:</p>
              <ul className="list-disc pl-6 mb-6 text-charcoal/80 space-y-2">
                <li>Inspect immediately upon delivery (document any shipping damage)</li>
                <li>Try on the outfit and check all details</li>
                <li>Take photos/videos if there are any issues</li>
                <li>Contact the vendor within 48-72 hours if alterations are needed</li>
              </ul>

              {/* Common Problems & Solutions */}
              <h2 className="font-serif text-4xl text-charcoal mb-6 mt-12">Common Problems & How to Solve Them</h2>

              <div className="space-y-6 mb-12">
                <div className="bg-white rounded-xl p-6 border border-charcoal/10">
                  <h4 className="font-serif text-xl text-charcoal mb-3">Problem: Color Doesn't Match Photos</h4>
                  <p className="text-charcoal/70 mb-3">
                    <strong>Prevention:</strong> Always request fabric swatches and view items via video call in natural
                    lighting before production.
                  </p>
                  <p className="text-charcoal/70">
                    <strong>Solution:</strong> If the color is significantly different, document with photos and request
                    a remake or partial refund. This is why secure payment terms with milestone-based releases are
                    crucial.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-charcoal/10">
                  <h4 className="font-serif text-xl text-charcoal mb-3">Problem: Sizing Issues</h4>
                  <p className="text-charcoal/70 mb-3">
                    <strong>Prevention:</strong> Professional measurements + adding 1-2 inches for comfort +
                    pre-shipment measurement verification.
                  </p>
                  <p className="text-charcoal/70">
                    <strong>Solution:</strong> Most Indian outfits have some adjustment room. Find a local tailor
                    experienced with Indian clothing. Budget $100-300 for alterations.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-charcoal/10">
                  <h4 className="font-serif text-xl text-charcoal mb-3">
                    Problem: Embroidery Quality Lower Than Expected
                  </h4>
                  <p className="text-charcoal/70 mb-3">
                    <strong>Prevention:</strong> Request close-up photos/videos of embroidery samples. Ask about hand
                    vs. machine embroidery.
                  </p>
                  <p className="text-charcoal/70">
                    <strong>Solution:</strong> If quality is significantly lower than promised, this is grounds for a
                    partial refund or remake. Document everything.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-charcoal/10">
                  <h4 className="font-serif text-xl text-charcoal mb-3">Problem: Delayed Delivery</h4>
                  <p className="text-charcoal/70 mb-3">
                    <strong>Prevention:</strong> Order 3-4 months before your wedding. Build in buffer time for delays.
                  </p>
                  <p className="text-charcoal/70">
                    <strong>Solution:</strong> Use express shipping if time is running short. Track packages daily. Have
                    a backup outfit plan just in case.
                  </p>
                </div>
              </div>

              {/* Cost Breakdown */}
              <h2 className="font-serif text-4xl text-charcoal mb-6 mt-12">
                Real Cost Breakdown: Virtual Shopping vs. In-Person
              </h2>

              <div className="bg-gradient-to-br from-sage/10 to-primary/5 rounded-xl p-8 mb-8 border border-sage/20">
                <h3 className="font-serif text-2xl text-charcoal mb-6">Scenario: Buying a Custom Bridal Lehenga</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-charcoal mb-4">Virtual Shopping</h4>
                    <ul className="space-y-2 text-charcoal/70 text-sm">
                      <li className="flex justify-between">
                        <span>Lehenga cost:</span>
                        <span className="font-medium">$2,500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Shipping (express):</span>
                        <span className="font-medium">$200</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Customs duties (12%):</span>
                        <span className="font-medium">$300</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Local alterations:</span>
                        <span className="font-medium">$150</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Professional measurements:</span>
                        <span className="font-medium">$75</span>
                      </li>
                      <li className="flex justify-between border-t border-charcoal/10 pt-2 mt-2">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold text-primary">$3,225</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-charcoal mb-4">In-Person Shopping Trip</h4>
                    <ul className="space-y-2 text-charcoal/70 text-sm">
                      <li className="flex justify-between">
                        <span>Lehenga cost:</span>
                        <span className="font-medium">$2,500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Round-trip flights (2 people):</span>
                        <span className="font-medium">$2,400</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Hotels (7 nights):</span>
                        <span className="font-medium">$700</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Local transport & meals:</span>
                        <span className="font-medium">$500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Shipping lehenga back:</span>
                        <span className="font-medium">$200</span>
                      </li>
                      <li className="flex justify-between border-t border-charcoal/10 pt-2 mt-2">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold text-primary">$6,300</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-charcoal/70 text-sm mt-6 text-center">
                  <strong>Savings with virtual shopping: $3,075</strong> (plus time off work and travel stress)
                </p>
              </div>

              {/* The CeremonyVerse Advantage */}
              <div className="bg-gradient-to-br from-primary/10 to-sage/10 rounded-2xl p-10 mt-12 border border-primary/20">
                <h2 className="font-serif text-3xl text-charcoal mb-4">The CeremonyVerse Virtual Shopping Advantage</h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  While you can certainly navigate virtual shopping on your own, working with CeremonyVerse eliminates
                  the risks and stress. Here's what we provide:
                </p>
                <ul className="space-y-3 text-charcoal/80 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <div>
                      <strong>Pre-Verified Suppliers:</strong> We've personally vetted every vendor through our
                      three-tier verification process. No scams, no surprises.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <div>
                      <strong>Live Video Shopping Sessions:</strong> We coordinate video calls with suppliers, translate
                      when needed, and ensure you see exactly what you're buying.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <div>
                      <strong>Secure Payment Processing:</strong> Your payments are protected with milestone-based
                      payment schedules until you confirm satisfaction with your items.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <div>
                      <strong>Quality Inspections:</strong> We arrange third-party inspections before shipping for
                      high-value items.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <div>
                      <strong>Shipping & Customs Management:</strong> We handle all logistics, customs paperwork, and
                      tracking.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <div>
                      <strong>Local Alteration Coordination:</strong> We connect you with experienced tailors in your
                      area who understand Indian clothing.
                    </div>
                  </li>
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

              {/* Related Articles */}
              <div className="mt-16 pt-12 border-t border-charcoal/10">
                <h3 className="font-serif text-2xl text-charcoal mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/blog/vendor-verification-guide"
                    className="bg-white rounded-xl p-6 border border-charcoal/10 hover:border-primary/30 transition-colors"
                  >
                    <h4 className="font-serif text-xl text-charcoal mb-2">Complete Vendor Verification Guide</h4>
                    <p className="text-charcoal/60 text-sm">Learn our three-tier verification process</p>
                  </Link>
                </div>
              </div>

              {/* Ready to Source Authentic Indian Wedding Items */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 my-12 border border-primary/20">
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  Ready to Source Authentic Indian Wedding Items?
                </h3>
                <p className="text-foreground/70 mb-6">
                  Explore our comprehensive sourcing services designed specifically for couples planning from the USA.
                  We handle everything from outfits to ceremony essentials with complete quality verification and secure
                  delivery.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/services/outfit-concierge"
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-semibold"
                  >
                    Outfit Sourcing Services
                  </Link>
                  <Link
                    href="/services/ceremony-essentials"
                    className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors font-semibold"
                  >
                    Ceremony Essentials
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
      </main>
      <Footer />
    </>
  )
}
