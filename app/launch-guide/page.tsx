import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ExternalLink, AlertCircle } from "lucide-react"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Website Launch Guide | CeremonyVerse",
  description:
    "Complete step-by-step guide to launch your CeremonyVerse website with GoDaddy domain, SEO optimization, and lead generation setup.",
}

export default function LaunchGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl text-balance mb-6 text-rose-900">Website Launch Guide</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Follow this comprehensive checklist to successfully launch your CeremonyVerse website and start generating
            leads within 30 days.
          </p>
        </div>
      </section>

      {/* Pre-Launch Checklist */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl text-rose-900 mb-8">Pre-Launch Checklist</h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-rose-600" />
                1. Connect Your GoDaddy Domain to Vercel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Step 1: Deploy to Vercel</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Click the "Publish" button in the top right of v0</li>
                  <li>Your site will be deployed to a Vercel URL (e.g., ceremonyverse.vercel.app)</li>
                  <li>Note your Vercel project name</li>
                </ol>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Step 2: Add Domain in Vercel</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Go to your Vercel project dashboard</li>
                  <li>Click "Settings" → "Domains"</li>
                  <li>Enter your GoDaddy domain (e.g., ceremonyverse.com)</li>
                  <li>Vercel will provide DNS records to add</li>
                </ol>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Step 3: Update GoDaddy DNS</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Log into your GoDaddy account</li>
                  <li>Go to "My Products" → "DNS" for your domain</li>
                  <li>
                    Add the A record: <code className="bg-gray-100 px-2 py-1 rounded">76.76.21.21</code>
                  </li>
                  <li>
                    Add the CNAME record: <code className="bg-gray-100 px-2 py-1 rounded">cname.vercel-dns.com</code>
                  </li>
                  <li>Wait 24-48 hours for DNS propagation</li>
                </ol>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-900">Important:</p>
                    <p className="text-amber-800 text-sm">
                      DNS changes can take up to 48 hours to propagate globally. Your site will work on the Vercel URL
                      immediately.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-rose-600" />
                2. Set Up Google Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
                <li>
                  Go to{" "}
                  <a
                    href="https://analytics.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-600 hover:underline inline-flex items-center gap-1"
                  >
                    analytics.google.com <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>Create a new GA4 property for your website</li>
                <li>Copy your Measurement ID (format: G-XXXXXXXXXX)</li>
                <li>In Vercel, go to Settings → Environment Variables</li>
                <li>
                  Add: <code className="bg-gray-100 px-2 py-1 rounded">NEXT_PUBLIC_GA_ID</code> = your Measurement ID
                </li>
                <li>Redeploy your site for changes to take effect</li>
              </ol>
              <p className="text-sm text-gray-600 mt-4">
                The website is already configured to use Google Analytics - you just need to add your tracking ID.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-rose-600" />
                3. Create Social Media Accounts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Follow the detailed guide on the{" "}
                <Link href="/social-media-guide" className="text-rose-600 hover:underline">
                  Social Media Setup page
                </Link>
                .
              </p>
              <div className="grid gap-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Instagram Business Account</p>
                    <p className="text-sm text-gray-600">Primary platform for wedding visuals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Pinterest Business Account</p>
                    <p className="text-sm text-gray-600">Essential for wedding planning audience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Facebook Business Page</p>
                    <p className="text-sm text-gray-600">Community building and ads</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                After creating accounts, update the social media links in the website footer.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-rose-600" />
                4. Set Up Email for Contact Forms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">The contact forms are ready - you need to connect an email service:</p>
              <div className="space-y-3">
                <h4 className="font-semibold">Option 1: Use Vercel Email (Recommended)</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>In your Vercel project, go to Settings → Email</li>
                  <li>Connect your email provider (SendGrid, Resend, etc.)</li>
                  <li>Forms will automatically send to your configured email</li>
                </ol>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Option 2: Use a Form Service</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Formspree (free tier available)</li>
                  <li>Netlify Forms</li>
                  <li>Google Forms integration</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-rose-600" />
                5. SEO Optimization Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Meta Tags</p>
                    <p className="text-sm text-gray-600">✓ All pages have title, description, and keywords</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Sitemap</p>
                    <p className="text-sm text-gray-600">✓ XML sitemap generated at /sitemap.xml</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Robots.txt</p>
                    <p className="text-sm text-gray-600">✓ Robots file configured at /robots.txt</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Blog Content</p>
                    <p className="text-sm text-gray-600">✓ 6 SEO-optimized articles published</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Internal Linking</p>
                    <p className="text-sm text-gray-600">✓ All pages linked in footer and navigation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Post-Launch Actions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl text-rose-900 mb-8">Post-Launch Actions (First 30 Days)</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Week 1: Submit to Search Engines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-rose-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-rose-600 font-semibold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Google Search Console</p>
                    <p className="text-sm text-gray-600">Submit your sitemap at search.google.com/search-console</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-rose-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-rose-600 font-semibold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Bing Webmaster Tools</p>
                    <p className="text-sm text-gray-600">Submit at bing.com/webmasters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-rose-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-rose-600 font-semibold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Google Business Profile</p>
                    <p className="text-sm text-gray-600">Create listing at business.google.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Week 2-4: Content Marketing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Share blog articles on social media (3x per week)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Create Pinterest pins for each blog article</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Post gallery images on Instagram (daily)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Engage with wedding planning communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Reach out to wedding bloggers for features</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ongoing: Lead Generation Optimization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Monitor Google Analytics weekly for traffic sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Track form submissions and follow up within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>A/B test different CTAs and offers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Collect testimonials from early clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Update blog with new content monthly</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Metrics to Track */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl text-rose-900 mb-8">Key Metrics to Track</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Traffic Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Total visitors per week</li>
                  <li>• Traffic sources (organic, social, direct)</li>
                  <li>• Most visited pages</li>
                  <li>• Average session duration</li>
                  <li>• Bounce rate</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Conversion Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Contact form submissions</li>
                  <li>• Newsletter signups</li>
                  <li>• Guide downloads</li>
                  <li>• Phone calls received</li>
                  <li>• Consultation bookings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">SEO Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Keyword rankings</li>
                  <li>• Organic search traffic</li>
                  <li>• Pages indexed by Google</li>
                  <li>• Backlinks acquired</li>
                  <li>• Domain authority</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Social Media Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Follower growth rate</li>
                  <li>• Engagement rate</li>
                  <li>• Click-throughs to website</li>
                  <li>• Shares and saves</li>
                  <li>• DM inquiries</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl text-rose-900 mb-6">Ready to Launch?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Follow this guide step-by-step to successfully launch your website and start generating qualified leads for
            your luxury wedding planning service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
              <Link href="/contact">Get Launch Support</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/social-media-guide">View Social Media Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
