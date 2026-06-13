import type { Metadata } from "next";
import { siteConfig } from "./site";

interface PageMetaInput {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
}

/**
 * Builds per-page Metadata that inherits sensible site defaults while
 * allowing each route to override title, description, canonical, and OG.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  keywords = [],
}: PageMetaInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle =
    path === "/" ? `${siteConfig.name} — ${siteConfig.title}` : title;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

/**
 * JSON-LD Person schema for richer search results.
 */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Mechanical Engineer & Process Quality Engineer",
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karawang",
      addressCountry: "Indonesia",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National Taiwan University of Science and Technology",
    },
    worksFor: {
      "@type": "Organization",
      name: "CATL Karawang",
    },
    knowsAbout: [
      "Mechanical Engineering",
      "Manufacturing",
      "Quality Engineering",
      "CAD/CAM",
      "CNC Programming",
      "Composite Materials",
      "Additive Manufacturing",
    ],
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };
}
