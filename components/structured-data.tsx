export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CeremonyVerse",
    url: "https://www.ceremonyverse.com",
    logo: "https://www.ceremonyverse.com/logo.png",
    description: "Premium Indian-American fusion wedding planning services across the USA",
    telephone: "+1-215-341-9990",
    email: "hello@ceremonyverse.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.instagram.com/ceremonyverse",
      "https://www.facebook.com/ceremonyverse",
      "https://www.pinterest.com/ceremonyverse",
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CeremonyVerse",
    url: "https://www.ceremonyverse.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.ceremonyverse.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = "CeremonyVerse",
  url,
}: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author?: string
  url: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
      url: "https://www.ceremonyverse.com",
    },
    publisher: {
      "@type": "Organization",
      name: "CeremonyVerse",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ceremonyverse.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ServiceSchema({
  name,
  description,
  provider = "CeremonyVerse",
  areaServed = "United States",
  priceRange,
}: {
  name: string
  description: string
  provider?: string
  areaServed?: string
  priceRange?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://www.ceremonyverse.com",
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    ...(priceRange && { priceRange }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EventPlanning",
    "@id": "https://www.ceremonyverse.com/#business",
    name: "CeremonyVerse",
    url: "https://www.ceremonyverse.com",
    telephone: "+1-215-341-9990",
    email: "hello@ceremonyverse.com",
    image: "https://www.ceremonyverse.com/og-image.jpg",
    description:
      "Indian and fusion wedding planning with cultural clarity—multi-day ceremonies, timelines, vendor coordination, and virtual planning support.",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Mexico" },
    ],
    sameAs: [
      "https://www.instagram.com/ceremonyverse",
      "https://www.facebook.com/ceremonyverse",
      "https://www.pinterest.com/ceremonyverse",
    ],
    makesOffer: [
      { "@type": "Offer", name: "Full Wedding Planning" },
      { "@type": "Offer", name: "Partial Planning & Coordination" },
      { "@type": "Offer", name: "Virtual Planning & India Sourcing" },
      { "@type": "Offer", name: "Destination Wedding Planning" },
      { "@type": "Offer", name: "Cultural Fusion Wedding Planning" },
      { "@type": "Offer", name: "Multi-Day Ceremony Coordination" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wedding Planning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Essential Coordination",
            description: "3 months planning support with day-of coordination",
          },
          price: "3500",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heritage & Harmony Plan",
            description: "6-12 months comprehensive wedding planning with dedicated coordinator",
          },
          price: "8500",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Luxury Concierge",
            description: "White-glove service for elaborate multi-day celebrations",
          },
          price: "15000",
          priceCurrency: "USD",
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
