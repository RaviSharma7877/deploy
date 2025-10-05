import type { Metadata } from "next"

export const siteConfig = {
  name: "E2S_HuB",
  shortName: "E2S_HuB",
  tagline: "AI-First Product & Growth Studio",
  description:
    "E2S_HuB partners with SaaS, SME, and D2C teams to design, build, and scale revenue-ready product experiences at startup speed.",
  url: "https://e2shub.com",
  ogImage: "https://e2shub.com/og-image.png",
  email: "hello@e2shub.com",
  phone: "+1-415-555-0199",
  keywords: [
    "AI product studio",
    "SaaS product development",
    "growth engineering",
    "AI-first product strategy",
    "digital transformation",
    "product-led growth",
    "full-stack engineering",
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/e2s-hub",
    twitter: "https://twitter.com/e2s_hub",
  },
  founders: [
    {
      name: "Ravi Sharma",
      role: "Co-founder & CTO",
      bio: "Tech rockstar leading AI-first engineering and scalable architectures.",
    },
    {
      name: "Rajat Sharma",
      role: "Co-founder & COO",
      bio: "Operations and revenue leader orchestrating go-to-market and delivery excellence.",
    },
    {
      name: "Product Leader",
      role: "Founder & Chief Product Officer",
      bio: "Experienced product leader orchestrating discovery-to-scale journeys that compound customer value.",
    },
  ],
  address: {
    locality: "San Francisco",
    region: "CA",
    country: "US",
  },
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: Object.values(siteConfig.social),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Business Development",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: "Global",
      availableLanguage: ["English"],
    },
  ],
  founders: siteConfig.founders.map((founder) => ({
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.role,
    description: founder.bio,
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
}

type BuildMetadataOptions = {
  title?: string
  description?: string
  path?: string
  image?: string
  keywords?: string[]
}

export const buildMetadata = ({
  title,
  description,
  path = "",
  image = siteConfig.ogImage,
  keywords,
}: BuildMetadataOptions = {}): Metadata => {
  const pageTitle = title ?? `${siteConfig.name} — ${siteConfig.tagline}`
  const pageDescription = description ?? siteConfig.description
  const pageUrl = path ? `${siteConfig.url}${path}` : siteConfig.url
  const pageKeywords = keywords ?? siteConfig.keywords

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: pageUrl,
    },
    keywords: pageKeywords,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Open Graph image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [image],
      creator: "@e2s_hub",
    },
  }
}
