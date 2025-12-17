import { CheckCircle, Award, Star, Users, Shield } from "@/components/icons"

export function TrustBadges() {
  const badges = [
    {
      icon: CheckCircle,
      title: "3-Tier Vendor Verification",
      description: "Background, quality & reliability checks",
      highlight: true,
    },
    {
      icon: Users,
      title: "Cultural Experts",
      description: "Deep knowledge of South Asian traditions",
      highlight: true,
    },
    {
      icon: Award,
      title: "24/7 Support",
      description: "We're here whenever you need us",
      highlight: false,
    },
    {
      icon: Star,
      title: "Personalized Service",
      description: "Tailored planning for your unique celebration",
      highlight: false,
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`font-sans flex flex-col items-center text-center p-5 rounded-lg transition-all duration-300 ${
            badge.highlight
              ? "bg-primary/5 border-2 border-primary/30 hover:border-primary hover:shadow-lg"
              : "bg-card border border-border hover:border-primary/50"
          }`}
        >
          <div className={`p-3 rounded-full mb-3 ${badge.highlight ? "bg-primary/10" : "bg-accent/10"}`}>
            <badge.icon className={`h-7 w-7 ${badge.highlight ? "text-primary" : "text-accent"}`} />
          </div>
          <h3 className="font-sans font-semibold text-sm mb-1 text-charcoal">{badge.title}</h3>
          <p className="font-sans text-xs text-muted-foreground leading-relaxed">{badge.description}</p>
        </div>
      ))}
    </div>
  )
}

export function TrustStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-4 px-6 bg-charcoal/5 rounded-lg">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium text-charcoal">Secure, Milestone-Based Payments</span>
      </div>
      <div className="hidden sm:block w-px h-5 bg-charcoal/20" />
      <div className="flex items-center gap-2">
        <CheckCircle className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium text-charcoal">Verified Vendors</span>
      </div>
      <div className="hidden sm:block w-px h-5 bg-charcoal/20" />
      <div className="flex items-center gap-2">
        <Star className="h-5 w-5 text-accent" />
        <span className="text-sm font-medium text-charcoal">Cultural Expertise</span>
      </div>
    </div>
  )
}
