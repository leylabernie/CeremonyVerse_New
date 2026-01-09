import Head from "next/head"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: "website" | "article" | "service"
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export default function SEO({
  title = "CeremonyVerse | Luxury Indian-American Fusion Wedding Planning",
  description = "Expert Indian-American fusion wedding planning with verified suppliers, secure payment processing, and virtual shopping from India. Serving USA & Mexico. Call +1-215-341-9990",
  keywords = "Indian wedding planner, fusion wedding, multicultural wedding, wedding planning USA, luxury wedding services, verified wedding suppliers, virtual wedding shopping India",
  image = "/og-image.jpg",
  url = "https://www.ceremonyverse.com",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "CeremonyVerse",
}: SEOProps) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.ceremonyverse.com").replace("ceremonyverse.com", "www.ceremonyverse.com")
  const fullUrl = url.startsWith("http") ? url : `${siteUrl}${url}`
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="CeremonyVerse" />
      <meta property="og:locale" content="en_US" />

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Additional SEO */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="geo.position" content="40.7128;-74.0060" />
      <meta name="ICBM" content="40.7128, -74.0060" />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#8B1538" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="CeremonyVerse" />
    </Head>
  )
}
