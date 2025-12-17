import Navigation from "@/components/navigation"
import { AlertTriangle, Shield, Info } from "lucide-react"
import Footer from "@/components/footer"

export const metadata = {
  title: "Sourcing Disclaimer | CeremonyVerse",
  description:
    "Important information about CeremonyVerse's sourcing services, artisan partnerships, and handcrafted item characteristics.",
}

export default function SourcingDisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-full mb-6">
              <Info className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span className="text-sm font-medium text-amber-700 dark:text-amber-300">Important Information</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-light text-foreground mb-6">Sourcing Disclaimer</h1>
            <p className="text-lg text-muted-foreground">Please read carefully before ordering custom items</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-12">
            <section className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-8 rounded-r-xl">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                <h2 className="font-serif text-3xl font-light text-foreground">CeremonyVerse Role</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  CeremonyVerse acts as a sourcing coordinator and facilitator,
                </strong>{" "}
                not as the manufacturer or direct seller of handcrafted items. We connect clients with verified artisans
                and suppliers in India, coordinate production, manage quality checks, and facilitate international
                shipping. We are not responsible for artisan-level production variations that are inherent to
                handcrafted goods.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Handcrafted Item Characteristics</h2>
              <div className="bg-card/30 border border-border/50 rounded-xl p-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">
                    Handloom sarees, hand-embroidered garments, and artisan jewelry are crafted by skilled artisans
                    using traditional techniques.
                  </strong>{" "}
                  As such, they may exhibit natural variations including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>Color variations:</strong> Natural silk threads may vary slightly in shade; screen
                    calibration affects digital previews
                  </li>
                  <li>
                    • <strong>Weave patterns:</strong> Hand-weaving creates unique patterns that may differ from
                    mechanically uniform fabric
                  </li>
                  <li>
                    • <strong>Texture differences:</strong> Handspun silk and cotton have natural texture variations
                  </li>
                  <li>
                    • <strong>Embroidery placement:</strong> Hand embroidery may show slight placement variations from
                    design sketches
                  </li>
                  <li>
                    • <strong>Finishing details:</strong> Hand-finished edges, borders, and tassels reflect artisan
                    techniques
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed font-semibold">
                  These characteristics are not defects—they are proof of authentic handcrafted quality and traditional
                  artisan skill.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Production Timelines</h2>
              <div className="space-y-6">
                <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">Standard Items: 6-8 Weeks</h3>
                  <p className="text-muted-foreground text-sm">
                    Ready-to-ship sarees, jewelry, and accessories typically arrive within 6-8 weeks including shipping
                    and customs.
                  </p>
                </div>
                <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">Custom Items: 12-16 Weeks</h3>
                  <p className="text-muted-foreground text-sm">
                    Custom measurements, personalized embroidery, and made-to-order pieces require 12-16 weeks for
                    production and delivery.
                  </p>
                </div>
                <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">Bridal Lehengas: 16-20 Weeks</h3>
                  <p className="text-muted-foreground text-sm">
                    Heavily embroidered bridal outfits with intricate handwork require 16-20 weeks minimum. Rush orders
                    may incur additional fees.
                  </p>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mt-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong className="text-foreground">Important:</strong> These timelines are estimates. Delays may
                  occur due to artisan workshop schedules, material sourcing, festival seasons in India, international
                  shipping, or customs processing. We recommend ordering 4-6 months before your event.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Quality Assurance Process</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Pre-Production Approval</h3>
                    <p className="text-muted-foreground text-sm">
                      You review and approve fabric swatches, design sketches, and color samples before production
                      begins.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Progress Updates</h3>
                    <p className="text-muted-foreground text-sm">
                      We provide photo/video updates at key production milestones for high-value custom orders.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Pre-Shipment Inspection</h3>
                    <p className="text-muted-foreground text-sm">
                      Our India team conducts final quality checks before international shipping.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">72-Hour Inspection Window</h3>
                    <p className="text-muted-foreground text-sm">
                      You have 72 hours after delivery to inspect items and report any issues with photo evidence.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Limitation of Liability</h2>
              <div className="bg-card/30 border border-border/50 rounded-xl p-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CeremonyVerse's liability is limited to the coordination fee paid for sourcing services. We are not
                  liable for:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full replacement cost of handcrafted items beyond documented defects</li>
                  <li>• Artisan production delays due to material sourcing or workshop schedules</li>
                  <li>• International shipping delays caused by customs, weather, or carrier issues</li>
                  <li>• Minor variations inherent to handcrafted production</li>
                  <li>• Wedding delays or consequential damages</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We work diligently to resolve issues fairly and will coordinate with suppliers for remedies when
                  justified claims are made.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
              <h2 className="font-serif text-3xl font-light text-foreground mb-4">
                By proceeding with sourcing services, you acknowledge:
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>You understand CeremonyVerse acts as a coordinator, not a direct manufacturer</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>You accept natural variations in handcrafted items as authentic characteristics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>You agree to the non-refundable deposit policy for custom orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>You understand production timelines are estimates and may vary</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>You will inspect items within 72 hours of delivery and report issues promptly</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
