import type { Metadata } from "next";
import { projects, site, contactContent } from "@/lib/data";

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
  "Jayyy portfolio",
  "AI-powered websites",
  "creative developer portfolio",
  "premium web design",
  "dashboard development",
  "digital agency portfolio",
  "modern website developer",
  "AI web experiences",
  "business website design",
  "portfolio websites",
  "freelance web developer",
  "data dashboard design",
  "digital solutions builder",
  "Next.js developer",
  "premium digital experiences",
] as const;

const defaultTitle = "Jayyy | Building AI-Powered Digital Experiences";

const defaultDescription =
  "Jayyy creates modern websites, dashboards, and intelligent digital solutions that help businesses stand out and grow. Premium creative developer portfolio.";

export const defaultOgImage = {
  url: "/og-cover.svg",
  width: 1200,
  height: 630,
  alt: "Jayyy — Building AI-Powered Digital Experiences",
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
  description: `Partner with ${site.name} for freelance projects, AI-powered websites, dashboards, and digital experiences. Email ${site.email}.`,
  alternates: { canonical: "/#contact" },
  openGraph: buildOpenGraph(
    `Contact ${site.name} | Let's Build Something Exceptional`,
    contactContent.description,
    "/contact",
  ),
  twitter: buildTwitter(
    `Contact ${site.name} | Get In Touch`,
    `${contactContent.description} Reach out at ${site.email}.`,
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
        name: `${site.name} — AI-Powered Digital Experiences`,
        description: defaultDescription,
        inLanguage: "en-US",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: `${site.name} — Creative Developer`,
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
        jobTitle: "Creative Developer & Digital Solutions Builder",
        description: site.subheadline,
        knowsAbout: [
          "AI-Powered Websites",
          "Dashboard Development",
          "Modern Web Design",
          "Portfolio Websites",
          "Business Websites",
          "Digital Experiences",
          "Data Visualization",
          "Creative Development",
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
        name: "Selected Work Portfolio",
        description: "AI websites, business platforms, dashboards, and portfolio projects",
        numberOfItems: projects.length,
        itemListElement: projectItems,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#services`,
        name: `${site.name} Digital Solutions`,
        url: siteUrl,
        description:
          "Modern websites, AI-powered experiences, dashboards, and premium digital solutions for businesses and creatives.",
        areaServed: "Worldwide",
        serviceType: [
          "AI-Powered Websites",
          "Business Websites",
          "Dashboard Development",
          "Portfolio Websites",
          "Digital Experiences",
        ],
        provider: { "@id": `${siteUrl}/#person` },
      },
    ],
  };
}
