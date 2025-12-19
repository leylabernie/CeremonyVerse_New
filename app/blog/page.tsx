import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { Calendar, ArrowRight } from "@/components/icons"
import { BreadcrumbSchema } from "@/components/structured-data"
import { Card } from "@/components/site/card"

export const metadata: Metadata = {
  title: "Indian Wedding Planning Blog | Expert Tips & Cultural Guides 2025",
  description:
    "Expert wedding planning guides for Indian-American fusion weddings. Learn about Mehndi ceremonies, venue selection, budgeting tips, vendor verification, and how to blend cultural traditions seamlessly.",
  keywords: [
    "Indian wedding planning tips",
    "fusion wedding guide",
    "Indian wedding traditions",
    "wedding planning blog",
    "Indian American wedding advice",
    "cultural wedding planning",
    "mehndi ceremony guide",
    "Indian wedding budget",
    "wedding vendor selection",
  ],
  alternates: {
    canonical: "https://www.ceremonyverse.com/blog",
  },
  openGraph: {
    title: "Indian Wedding Planning Blog | CeremonyVerse",
    description:
      "Expert guides and tips for planning your perfect Indian-American fusion wedding. Cultural traditions, budgeting, and vendor selection.",
    type: "website",
    url: "https://www.ceremonyverse.com/blog",
  },
  twitter: {
    title: "Indian Wedding Planning Blog | CeremonyVerse",
    description: "Expert guides and tips for planning your perfect Indian-American fusion wedding.",
  },
}

export default function BlogPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.ceremonyverse.com" },
    { name: "Blog", url: "https://www.ceremonyverse.com/blog" },
  ]

  const articles = [
    {
      title: "How to Choose Your Perfect Wedding Venue",
      excerpt:
        "Complete guide to selecting the ideal venue for your Indian-American fusion wedding. Multi-day event considerations, capacity planning, budget tips, questions to ask, and red flags to avoid when booking your dream location.",
      date: "December 24, 2025",
      readTime: "16 min read",
      category: "Planning Guide",
      slug: "choosing-perfect-wedding-venue",
    },
    {
      title: "Complete Honeymoon Planning Guide",
      excerpt:
        "Plan your perfect post-wedding getaway with confidence. Everything from timing and budgeting to destination ideas, booking timeline, and expert tips to make your honeymoon stress-free and unforgettable.",
      date: "December 23, 2025",
      readTime: "14 min read",
      category: "Planning Guide",
      slug: "honeymoon-planning-guide",
    },
    {
      title: "Complete Wedding Planning Checklist & 12-Month Timeline",
      excerpt:
        "The ultimate month-by-month wedding planning guide for Indian-American fusion weddings. Comprehensive task list from engagement to honeymoon with expert tips, cultural considerations, and deadlines for every phase.",
      date: "December 22, 2025",
      readTime: "20 min read",
      category: "Planning Guide",
      slug: "wedding-planning-checklist-timeline",
    },
    {
      title: "Wedding Registry Guide for Indian-American Couples",
      excerpt:
        "Navigate the balance between traditional cash gifts (Shagun) and modern registries. Complete guide to honoring cultural expectations while creating a registry that works for all your guests.",
      date: "December 21, 2025",
      readTime: "12 min read",
      category: "Planning Guide",
      slug: "wedding-registry-guide-indian-american",
    },
    {
      title: "The Ultimate Mehndi Ceremony Guide: Traditions, Planning & Modern Ideas",
      excerpt:
        "Everything you need to create an unforgettable Mehndi night that honors tradition while celebrating your unique style. From decor to artists to aftercare tips.",
      date: "December 20, 2025",
      readTime: "14 min read",
      category: "Cultural Traditions",
      slug: "mehndi-ceremony-guide",
    },
    {
      title: "Finding the Perfect Indian Wedding Planner in USA: Complete Guide 2025",
      excerpt:
        "Everything you need to know about hiring an Indian wedding planner for your fusion celebration in America. Cultural expertise, vendor networks, and what to look for in a specialized planner.",
      date: "December 19, 2025",
      readTime: "15 min read",
      category: "Planning Guide",
      slug: "indian-wedding-planner-usa",
    },
    {
      title: "Indian & Multicultural Fusion Wedding Budget Guide 2025: Complete Cost Breakdown",
      excerpt:
        "Complete budget guide for Indian and multicultural fusion weddings in USA. Average costs, money-saving tips, and detailed breakdown by ceremony to plan your dream wedding within budget.",
      date: "December 18, 2025",
      readTime: "12 min read",
      category: "Financial Planning",
      slug: "south-asian-wedding-budget-guide",
    },
    {
      title: "10 Essential Elements of an Authentic Indian-American Fusion Wedding",
      excerpt:
        "Discover how to seamlessly blend traditional Indian ceremonies with modern American wedding elements. From the Mehendi to the reception, learn what makes a fusion wedding truly special.",
      date: "December 18, 2025",
      readTime: "12 min read",
      category: "Planning Guide",
      slug: "essential-elements-fusion-wedding",
    },
    {
      title: "Complete Guide to Indian Wedding Traditions for Modern Couples",
      excerpt:
        "Understanding the beautiful rituals that make Indian weddings unforgettable. From Mehendi to Vidaai, learn the meaning behind each tradition and how to adapt them for your fusion wedding.",
      date: "December 17, 2025",
      readTime: "15 min read",
      category: "Cultural Traditions",
      slug: "indian-wedding-traditions-guide",
    },
    {
      title: "Virtual Shopping for Indian Wedding Items: Your Complete Guide",
      excerpt:
        "Learn how to shop for authentic Indian wedding items from the US without getting scammed. Complete guide to virtual shopping, quality verification, secure payments, and avoiding common pitfalls.",
      date: "December 17, 2025",
      readTime: "12 min read",
      category: "Shopping Guide",
      slug: "virtual-shopping-india-guide",
    },
    {
      title: "Complete Guide to Vendor Verification for Your Wedding",
      excerpt:
        "Not all wedding vendors are created equal. Learn our comprehensive three-tier verification process, red flags to watch for, and essential questions to ask before committing to any supplier.",
      date: "December 17, 2025",
      readTime: "15 min read",
      category: "Vendor Selection",
      slug: "vendor-verification-guide",
    },
    {
      title: "12-Month Fusion Wedding Planning Timeline",
      excerpt:
        "A complete month-by-month guide to planning your Indian-American fusion wedding. From engagement to honeymoon, learn exactly what to do and when to do it for a stress-free planning experience.",
      date: "December 17, 2025",
      readTime: "14 min read",
      category: "Planning Guide",
      slug: "fusion-wedding-timeline",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Wedding Planning <span className="text-accent">Resources</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto font-sans">
            Expert guides, tips, and insights for planning your perfect Indian-American fusion wedding. Learn from
            experienced planners who understand your unique needs.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href={`/blog/${articles[0].slug}`}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border border-border hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Featured
                </span>
                <span className="text-sm text-foreground/60">{articles[0].category}</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{articles[0].title}</h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">{articles[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-foreground/60 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{articles[0].date}</span>
                </div>
                <span>{articles[0].readTime}</span>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Read Article <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Pillar Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Browse by Topic</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/category/budget">
              <Card hover className="text-center">
                <h3 className="text-text mb-2">Budget & Cost Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Learn how to plan your wedding within budget without compromising on your vision.
                </p>
              </Card>
            </Link>
            <Link href="/blog/category/family-culture">
              <Card hover className="text-center">
                <h3 className="text-text mb-2">Family & Culture Navigation</h3>
                <p className="text-sm text-muted-foreground">
                  Navigate family expectations and blend cultural traditions seamlessly.
                </p>
              </Card>
            </Link>
            <Link href="/blog/category/sourcing">
              <Card hover className="text-center">
                <h3 className="text-text mb-2">Shopping & Sourcing from India</h3>
                <p className="text-sm text-muted-foreground">
                  Expert guidance on sourcing authentic Indian wedding items and outfits.
                </p>
              </Card>
            </Link>
            <Link href="/blog/category/planning">
              <Card hover className="text-center">
                <h3 className="text-text mb-2">Planning Education</h3>
                <p className="text-sm text-muted-foreground">
                  Essential wedding planning tips, timelines, and checklists for Indian weddings.
                </p>
              </Card>
            </Link>
            <Link href="/blog/category/locations">
              <Card hover className="text-center">
                <h3 className="text-text mb-2">Location Guides</h3>
                <p className="text-sm text-muted-foreground">
                  Venue recommendations and location-specific wedding planning guides.
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <Link key={index} href={`/blog/${article.slug}`}>
                <article className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 text-sm leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-foreground/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="text-primary hover:text-primary/80 text-sm font-medium flex items-center">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Wedding Planning Tips Delivered
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Join our newsletter for exclusive guides, cultural insights, and special offers for your fusion wedding.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-foreground/60 mt-4">
            We respect your privacy. Unsubscribe anytime. No spam, just valuable wedding planning insights.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Start Planning?</h2>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Let's discuss your vision in a free consultation. No obligation, just expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+12153419990">Call +1-215-341-9990</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
