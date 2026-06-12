import type { Metadata } from "next";
import { projects, site } from "@/lib/data";

/** Production URL used for SEO, sitemap, Open Graph, and structured data. */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) {
    const host = production.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }

  const preview = process.env.VERCEL_URL?.trim();
  if (preview) {
    const host = preview.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const seoKeywords = [
  "Jayyy digital solutions",
  "digital solutions builder",
  "business automation consultant",
  "Excel business systems",
  "AI workflow automation",
  "dashboard creation services",
  "data analysis and reporting",
  "workflow optimization",
  "operational management tools",
  "digital transformation consultant",
  "modern business websites",
  "KPI dashboard design",
  "business process automation",
  "custom Excel systems",
  "business intelligence solutions",
] as const;

const defaultTitle =
  "Jayyy | Digital Solutions Builder — Websites, AI, Automation & Business Systems";

const defaultDescription =
  "Jayyy helps businesses transform ideas, data, and processes into powerful digital solutions. Modern websites, AI automation, Excel systems, dashboards, and data-driven reporting for growth and efficiency.";

export const defaultOgImage = {
  url: "/og-cover.svg",
  width: 1200,
  height: 630,
  alt: "Jayyy — Digital Solutions Builder for business growth, automation, and data systems",
} as const;

function buildOpenGraph(
  title: string,
  description: string,
  path = "/",
): Metadata["openGraph"] {
  return {
    title,
    description,
    url: `${siteUrl}${path}`,
    siteName: `${site.name} — Digital Solutions`,
    locale: "en_US",
    type: "website",
    images: [defaultOgImage],
  };
}

function buildTwitter(
  title: string,
  description: string,
): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [defaultOgImage.url],
  };
}

const sharedMetadata: Partial<Metadata> = {
  metadataBase: new URL(siteUrl),
  keywords: [...seoKeywords],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: "business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const rootMetadata: Metadata = {
  ...sharedMetadata,
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: buildOpenGraph(defaultTitle, defaultDescription),
  twitter: buildTwitter(defaultTitle, defaultDescription),
};

export const homeMetadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: buildOpenGraph(defaultTitle, defaultDescription, "/"),
  twitter: buildTwitter(defaultTitle, defaultDescription),
};

export const aboutPageMetadata: Metadata = {
  title: "About",
  description: `Learn how ${site.name} partners with businesses to deliver digital solutions that drive growth, automation, and operational excellence.`,
  alternates: { canonical: "/#about" },
  openGraph: buildOpenGraph(
    `About ${site.name} | Digital Solutions Builder`,
    `Discover ${site.name}'s approach to helping businesses transform through modern websites, AI automation, Excel systems, and data-driven insights.`,
    "/about",
  ),
  twitter: buildTwitter(
    `About ${site.name} | Digital Solutions Builder`,
    `${site.name} helps businesses grow, automate, and optimize through strategic digital solutions.`,
  ),
};

export const projectsPageMetadata: Metadata = {
  title: "Solutions",
  description: `Explore ${site.name}'s portfolio of business solutions — websites, AI automations, Excel systems, and dashboards built for measurable outcomes.`,
  alternates: { canonical: "/#projects" },
  openGraph: buildOpenGraph(
    `Solutions | ${site.name}`,
    "Real business solutions with proven outcomes — digital transformation, automation, and operational systems that deliver results.",
    "/projects",
  ),
  twitter: buildTwitter(
    `Solutions | ${site.name}`,
    "Websites, AI automation, Excel business systems, and dashboards — solutions built for business impact.",
  ),
};

export const contactPageMetadata: Metadata = {
  title: "Contact",
  description: `Partner with ${site.name} to solve your next business challenge — websites, automation, Excel systems, dashboards, and workflow optimization.`,
  alternates: { canonical: "/#contact" },
  openGraph: buildOpenGraph(
    `Contact ${site.name} | Start Your Digital Transformation`,
    `Tell ${site.name} about your goals. Get a strategic response within 48 hours on websites, automation, systems, and data solutions.`,
    "/contact",
  ),
  twitter: buildTwitter(
    `Contact ${site.name} | Digital Solutions Partner`,
    `Reach out to ${site.name} for business-focused digital solutions — automation, systems, dashboards, and growth-ready websites.`,
  ),
};

export function getStructuredData() {
  const projectItems = projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: `${siteUrl}/#projects`,
      image: `${siteUrl}${project.image}`,
      dateCreated: project.year,
      keywords: project.tags.join(", "),
      author: { "@type": "Person", name: site.name },
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${site.name} — Digital Solutions`,
        description: defaultDescription,
        inLanguage: "en-US",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: `${site.name} — Digital Solutions Builder`,
        description: defaultDescription,
        mainEntity: { "@id": `${siteUrl}/#person` },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: site.name,
        url: siteUrl,
        email: site.email,
        jobTitle: "Digital Solutions Builder",
        description: site.tagline,
        knowsAbout: [
          "Digital Transformation",
          "Business Automation",
          "Workflow Optimization",
          "Excel Business Systems",
          "Dashboard Creation",
          "Data Analysis and Reporting",
          "AI-Powered Solutions",
          "Modern Websites",
        ],
        sameAs: Object.values(site.social),
        worksFor: {
          "@type": "Organization",
          name: `${site.name} — Digital Solutions`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#projects`,
        name: "Business Solutions Portfolio",
        description: "Digital solutions for growth, automation, and operational excellence",
        numberOfItems: projects.length,
        itemListElement: projectItems,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#services`,
        name: `${site.name} Digital Solutions`,
        url: siteUrl,
        description:
          "Modern websites, AI-powered automation, Excel business systems, dashboards, and data analysis for business growth.",
        areaServed: "Worldwide",
        serviceType: [
          "Digital Transformation",
          "Business Automation",
          "Excel Business Systems",
          "Dashboard Creation",
          "Data Analysis and Reporting",
          "Workflow Optimization",
        ],
        provider: { "@id": `${siteUrl}/#person` },
      },
    ],
  };
}
