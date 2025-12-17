import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Instagram, Facebook, Paintbrush as Pinterest, Youtube, Linkedin, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Social Media Setup Guide | CeremonyVerse",
  description:
    "Complete guide to setting up and managing social media accounts for your wedding planning business. Includes platform recommendations, content strategies, and posting schedules.",
}

export default function SocialMediaGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E8B4B8]/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
            Social Media Setup Guide
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Build your online presence and connect with couples planning their dream fusion weddings
          </p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
            Essential Platforms for Wedding Planners
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instagram */}
            <div className="bg-gradient-to-br from-[#E8B4B8]/10 to-background border border-border/50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E8B4B8] to-[#d9a5a9] rounded-full flex items-center justify-center mb-6">
                <Instagram className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Instagram</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Primary platform for visual storytelling. Share wedding photos, behind-the-scenes content, and client
                testimonials.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Post 3-5 times per week</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Use Stories daily</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Reels for maximum reach</span>
                </li>
              </ul>
              <a href="https://www.instagram.com/accounts/emailsignup/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-[#E8B4B8] to-[#d9a5a9] text-white hover:opacity-90">
                  Create Instagram Account
                </Button>
              </a>
            </div>

            {/* Pinterest */}
            <div className="bg-gradient-to-br from-[#E8B4B8]/10 to-background border border-border/50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E8B4B8] to-[#d9a5a9] rounded-full flex items-center justify-center mb-6">
                <Pinterest className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Pinterest</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Critical for wedding industry. Couples use Pinterest for inspiration and vendor discovery.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Pin 10-15 times per day</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Create themed boards</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>SEO-optimized descriptions</span>
                </li>
              </ul>
              <a href="https://www.pinterest.com/business/create/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-[#E8B4B8] to-[#d9a5a9] text-white hover:opacity-90">
                  Create Pinterest Business
                </Button>
              </a>
            </div>

            {/* Facebook */}
            <div className="bg-gradient-to-br from-[#9CAF88]/10 to-background border border-border/50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#9CAF88] to-[#8a9e7a] rounded-full flex items-center justify-center mb-6">
                <Facebook className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Facebook</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Build community and run targeted ads. Great for longer-form content and event promotion.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Post 2-3 times per week</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Create business page</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Enable reviews</span>
                </li>
              </ul>
              <a href="https://www.facebook.com/pages/create" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-[#9CAF88] to-[#8a9e7a] text-white hover:opacity-90">
                  Create Facebook Page
                </Button>
              </a>
            </div>

            {/* YouTube */}
            <div className="bg-gradient-to-br from-[#E8B4B8]/10 to-background border border-border/50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E8B4B8] to-[#d9a5a9] rounded-full flex items-center justify-center mb-6">
                <Youtube className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">YouTube</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Share wedding highlights, planning tips, and vendor spotlights. Excellent for SEO.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Post 1-2 videos per month</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Optimize titles & descriptions</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Create playlists</span>
                </li>
              </ul>
              <a href="https://www.youtube.com/create_channel" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-[#E8B4B8] to-[#d9a5a9] text-white hover:opacity-90">
                  Create YouTube Channel
                </Button>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="bg-gradient-to-br from-[#36454F]/10 to-background border border-border/50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#36454F] to-[#2a353d] rounded-full flex items-center justify-center mb-6">
                <Linkedin className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">LinkedIn</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Network with vendors, venues, and corporate clients. Share industry insights and expertise.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Post 1-2 times per week</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Share industry articles</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                  <span>Connect with vendors</span>
                </li>
              </ul>
              <a href="https://www.linkedin.com/company/setup/new/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-[#36454F] to-[#2a353d] text-white hover:opacity-90">
                  Create LinkedIn Page
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Strategy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
            Content Ideas & Posting Schedule
          </h2>

          <div className="space-y-8">
            <div className="bg-background border border-border/50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Instagram Content Mix</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Feed Posts (3-5x/week)</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Wedding highlight photos</li>
                    <li>• Client testimonials</li>
                    <li>• Cultural tradition spotlights</li>
                    <li>• Vendor features</li>
                    <li>• Planning tips & advice</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Stories (Daily)</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Behind-the-scenes content</li>
                    <li>• Day-of coordination clips</li>
                    <li>• Q&A sessions</li>
                    <li>• Polls & engagement</li>
                    <li>• Quick tips & reminders</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border/50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Pinterest Strategy</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Create boards for different wedding elements and pin consistently:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#E8B4B8]/5 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Board Ideas</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Indian Fusion Wedding Ideas</li>
                      <li>• Mehendi & Haldi Inspiration</li>
                      <li>• Bridal Lehenga Styles</li>
                      <li>• Mandap Decor Ideas</li>
                      <li>• Fusion Wedding Outfits</li>
                    </ul>
                  </div>
                  <div className="bg-[#9CAF88]/5 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Pin Types</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Blog post graphics</li>
                      <li>• Wedding photos</li>
                      <li>• Infographics</li>
                      <li>• Checklists & guides</li>
                      <li>• Before & after transformations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border/50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Hashtag Strategy</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Use a mix of broad and niche hashtags (20-30 per post):
              </p>
              <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm text-muted-foreground">
                #IndianWedding #FusionWedding #IndianAmericanWedding #SouthAsianWedding #DesiWedding #WeddingPlanner
                #LuxuryWedding #MehendiCeremony #HaldiCeremony #SangeetNight #BridalLehenga #IndianBride #WeddingInspo
                #WeddingGoals #CulturalWedding
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Need Help with Your Marketing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We can help you set up and manage your social media presence as part of our comprehensive wedding planning
            services.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
