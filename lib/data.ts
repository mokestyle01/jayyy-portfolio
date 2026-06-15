export const site = {
  name: "Jayyy",
  title: "Jayyy — Building AI-Powered Digital Experiences",
  description:
    "I create modern websites, dashboards, and intelligent digital solutions that help businesses stand out and grow.",
  headline: "Building AI-Powered Digital Experiences",
  subheadline:
    "I create modern websites, dashboards, and intelligent digital solutions that help businesses stand out and grow.",
  tagline:
    "I create modern websites, dashboards, and intelligent digital solutions that help businesses stand out and grow.",
  email: "mokestudio381@gmail.com",
  location: "Available worldwide · Remote",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    twitter: "https://x.com",
  },
} as const;

export const navLinks = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#services", label: "Services", id: "services" },
  { href: "/#testimonials", label: "Testimonials", id: "testimonials" },
  { href: "/#contact", label: "Contact", id: "contact" },
] as const;

export const skills = [
  { name: "Workflow Optimization", level: 95 },
  { name: "Business Automation", level: 92 },
  { name: "Dashboard & Reporting", level: 90 },
  { name: "Digital Transformation", level: 88 },
  { name: "Data-Driven Strategy", level: 86 },
  { name: "Operational Efficiency", level: 84 },
] as const;

export const skillCategories = [
  {
    title: "Digital Presence",
    icon: "◆",
    color: "from-cyan-500 to-blue-600",
    items: [
      "Modern business websites",
      "Conversion-focused landing pages",
      "Brand-aligned digital experiences",
      "Client-facing web applications",
      "Growth-ready online platforms",
    ],
  },
  {
    title: "Intelligent Automation",
    icon: "◎",
    color: "from-violet-500 to-fuchsia-500",
    items: [
      "AI-powered integrations",
      "Automated workflow systems",
      "Process optimization",
      "Smarter operational pipelines",
      "Reduced manual workload",
    ],
  },
  {
    title: "Business Operations",
    icon: "✦",
    color: "from-purple-500 to-pink-500",
    items: [
      "Excel business systems",
      "KPI dashboards & reporting",
      "Data analysis & insights",
      "HR & finance tracking tools",
      "Operational management systems",
    ],
  },
] as const;

export const stats = [
  { value: 20, suffix: "+", label: "Projects Built", icon: "◆" },
  { value: 15, suffix: "+", label: "AI-Powered Solutions", icon: "◎" },
  { value: 12, suffix: "+", label: "Data & Dashboard Expertise", icon: "◫" },
  { value: 25, suffix: "+", label: "Modern Web Experiences", icon: "◇" },
] as const;

export type ProjectCategory =
  | "All"
  | "AI Websites"
  | "Business Websites"
  | "Dashboards"
  | "Portfolio Projects";

export type BusinessCategoryTag =
  | "Excel Solutions"
  | "Business Systems"
  | "Data Analytics";

export type BusinessCaseStudy = {
  slug: string;
  title: string;
  description: string;
  features: string[];
  categoryTags: BusinessCategoryTag[];
  techBadges: string[];
  year: string;
  outcome: string;
  accent: string;
  icon: string;
  image: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "All">;
  year: string;
  tags: string[];
  techStack: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  outcome: string;
  accent: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "nexus-analytics",
    title: "Nexus Analytics",
    description:
      "A decision intelligence dashboard that gives growth teams real-time visibility into performance — turning complex data into clear actions.",
    category: "Dashboards",
    year: "2025",
    tags: ["Data Insights", "KPI Tracking", "Growth"],
    techStack: ["Next.js", "TypeScript", "Charts"],
    image: "/images/project-nexus.svg",
    demoUrl: "https://vercel.com",
    githubUrl: "https://github.com",
    outcome: "+38% retention",
    accent: "#22d3ee",
    featured: true,
  },
  {
    slug: "synth-ai-studio",
    title: "Synth AI Studio",
    description:
      "An AI-powered brand website designed to communicate value instantly, accelerate lead generation, and scale demo conversions.",
    category: "AI Websites",
    year: "2025",
    tags: ["AI Brand", "Lead Gen", "Motion Design"],
    techStack: ["Next.js", "Framer Motion", "AI"],
    image: "/images/project-synth.svg",
    demoUrl: "https://vercel.com",
    githubUrl: "https://github.com",
    outcome: "2.4× demo signups",
    accent: "#e879f9",
    featured: true,
  },
  {
    slug: "meridian-pay",
    title: "Meridian Pay",
    description:
      "A premium business website for a fintech platform — built to establish trust, showcase product value, and drive enterprise inquiries.",
    category: "Business Websites",
    year: "2024",
    tags: ["Fintech", "Enterprise", "Conversion"],
    techStack: ["Next.js", "Tailwind", "SEO"],
    image: "/images/project-meridian.svg",
    demoUrl: "https://vercel.com",
    githubUrl: "https://github.com",
    outcome: "$2.4M/mo volume",
    accent: "#38bdf8",
    featured: true,
  },
  {
    slug: "aurora-creative",
    title: "Aurora Creative",
    description:
      "A stunning agency portfolio with cinematic scroll animations, case study showcases, and a premium brand experience.",
    category: "Portfolio Projects",
    year: "2024",
    tags: ["Creative Agency", "Showcase", "Brand"],
    techStack: ["Next.js", "GSAP", "Three.js"],
    image: "/images/project-aurora.svg",
    demoUrl: "https://vercel.com",
    githubUrl: "https://github.com",
    outcome: "Awwwards nominee",
    accent: "#a78bfa",
    featured: true,
  },
  {
    slug: "codeflow-ai",
    title: "Codeflow AI",
    description:
      "A go-to-market AI product website — structured to build trust, communicate efficiency gains, and drive qualified waitlist growth.",
    category: "AI Websites",
    year: "2024",
    tags: ["AI Product", "Waitlist", "SaaS Launch"],
    techStack: ["Next.js", "OpenAI", "Vercel"],
    image: "/images/project-codeflow.svg",
    demoUrl: "https://vercel.com",
    githubUrl: "https://github.com",
    outcome: "12k signups",
    accent: "#22d3ee",
    featured: true,
  },
  {
    slug: "prism-portfolio",
    title: "Prism Portfolio Engine",
    description:
      "A scalable portfolio platform enabling creatives to launch polished digital presences with premium templates and fast deployment.",
    category: "Portfolio Projects",
    year: "2024",
    tags: ["Portfolio", "Templates", "Scale"],
    techStack: ["Next.js", "React", "CMS"],
    image: "/images/project-prism.svg",
    demoUrl: "https://vercel.com",
    githubUrl: "https://github.com",
    outcome: "800+ launches",
    accent: "#e879f9",
    featured: true,
  },
  {
    slug: "hr-tracking-system",
    title: "HR Tracking Dashboard",
    description:
      "An operational hiring dashboard with pipeline tracking, team coordination, and real-time recruitment analytics.",
    category: "Dashboards",
    year: "2024",
    tags: ["HR Ops", "Pipeline", "Analytics"],
    techStack: ["Excel", "Power Query", "Dashboards"],
    image: "/images/project-hr-tracker.svg",
    demoUrl: "#contact",
    githubUrl: "#contact",
    outcome: "40% faster hiring",
    accent: "#34d399",
    featured: true,
  },
  {
    slug: "budget-expense-tracker",
    title: "Budget & Expense Tracker",
    description:
      "A financial control dashboard helping businesses plan smarter, track spending in real time, and make informed decisions.",
    category: "Dashboards",
    year: "2024",
    tags: ["Finance", "Budgeting", "Reporting"],
    techStack: ["Excel", "VBA", "Charts"],
    image: "/images/project-budget-tracker.svg",
    demoUrl: "#contact",
    githubUrl: "#contact",
    outcome: "12hrs saved/mo",
    accent: "#fbbf24",
    featured: true,
  },
];

export const businessCaseStudies: BusinessCaseStudy[] = [
  {
    slug: "hr-tracking-system",
    title: "HR Tracking System",
    description:
      "A recruitment operations system that helps organizations manage candidates with clarity — tracking every stage, centralizing feedback, and giving leadership real-time visibility into hiring performance.",
    features: [
      "Candidate database",
      "Recruitment pipeline tracking",
      "Hiring stage management",
      "Dashboard analytics",
      "Notes and feedback tracking",
      "Status monitoring",
    ],
    categoryTags: ["Excel Solutions", "Business Systems", "Data Analytics"],
    techBadges: [
      "Excel",
      "Data Analysis",
      "Dashboard Design",
      "Reporting",
      "Business Operations",
    ],
    year: "2024",
    outcome: "40% faster hiring cycles",
    accent: "#34d399",
    icon: "◉",
    image: "/images/project-hr-tracker.svg",
  },
  {
    slug: "budget-expense-tracker",
    title: "Budget & Expense Tracker",
    description:
      "A financial management system that brings structure to spending — helping businesses plan budgets, monitor cash flow, and uncover insights that support stronger financial decisions.",
    features: [
      "Budget planning",
      "Expense tracking",
      "Financial dashboard",
      "Monthly and yearly reporting",
      "Category-based analysis",
      "Balance monitoring",
    ],
    categoryTags: ["Excel Solutions", "Business Systems", "Data Analytics"],
    techBadges: [
      "Excel",
      "Data Analysis",
      "Dashboard Design",
      "Reporting",
      "Business Operations",
    ],
    year: "2024",
    outcome: "12hrs saved per month",
    accent: "#fbbf24",
    icon: "◫",
    image: "/images/project-budget-tracker.svg",
  },
];

export const experience = [
  {
    period: "2023 — Present",
    role: "Digital Solutions Builder",
    company: "Independent consultant",
    detail:
      "Partnering with businesses to design and deliver websites, AI automations, Excel systems, and dashboards that improve efficiency and support measurable growth.",
    achievements: [
      "40+ business solutions delivered",
      "60% average reduction in manual processes",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Solutions Strategist",
    company: "Digital consultancy",
    detail:
      "Led digital transformation initiatives for clients across finance, creative, and SaaS — aligning technology with operational goals and revenue outcomes.",
    achievements: [
      "98% client retention rate",
      "3 award-recognized digital launches",
    ],
  },
  {
    period: "2019 — 2021",
    role: "Operations & Systems Specialist",
    company: "Growth-focused studio",
    detail:
      "Built workflow tools, reporting systems, and client-facing platforms that helped teams move faster, reduce errors, and make better day-to-day decisions.",
    achievements: [
      "45% improvement in operational speed",
      "Streamlined systems for 4 growing teams",
    ],
  },
] as const;

export const contactContent = {
  headline: "Let's Build Something Exceptional",
  description:
    "Available for freelance projects, AI-powered websites, dashboards, business websites, and digital experiences.",
  ctaLabel: "Get In Touch",
  responseTime: "Typically responds within 48 hours",
} as const;

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: string;
  service: string;
  source?: "Fiverr";
  verified?: boolean;
  featured?: boolean;
  rating?: number;
  ratingDetails?: {
    communication: number;
    quality: number;
    value: number;
  };
  date?: string;
};

export const testimonialStats = {
  averageRating: 5.0,
  totalReviews: 8,
  verifiedPlatformReviews: 1,
  repeatClients: "92%",
} as const;

export const testimonials: Testimonial[] = [
  {
    id: "fiverr-dorkyduck-excel",
    quote: "Great guy!",
    author: "dorkyduck",
    role: "Fiverr Client",
    service: "Excel Business Systems",
    image: "/images/avatar-3.svg",
    source: "Fiverr",
    verified: true,
    featured: true,
    rating: 5,
    ratingDetails: {
      communication: 5,
      quality: 5,
      value: 5,
    },
    date: "May 2026",
  },
  {
    id: "fiverr-excel-budget",
    quote:
      "Jayyy rebuilt our expense tracking system from scratch — clean layout, smart formulas, and a dashboard our finance team uses every day. Delivered faster than expected and explained everything clearly.",
    author: "karel_m",
    role: "Fiverr Client · Small Business Owner",
    service: "Budget & Expense Tracker",
    image: "/images/avatar-4.svg",
    rating: 5,
    ratingDetails: {
      communication: 5,
      quality: 5,
      value: 5,
    },
    date: "Apr 2026",
  },
  {
    id: "fiverr-excel-hr",
    quote:
      "We were tracking candidates across messages and scattered files. Jayyy built a structured HR tracker our team adopted immediately. Professional, patient, and genuinely focused on how we work.",
    author: "priya_s",
    role: "Fiverr Client · Operations Manager",
    service: "HR Tracking System",
    image: "/images/avatar-2.svg",
    rating: 5,
    date: "Mar 2026",
  },
  {
    id: "website-conversion",
    quote:
      "Our old site didn't reflect the quality of our business. Jayyy delivered a modern, fast website that looks premium and actually converts — we saw more enquiries within the first month.",
    author: "James O.",
    role: "Service Business Owner",
    service: "Modern Website",
    image: "/images/avatar-1.svg",
    rating: 5,
    date: "Feb 2026",
  },
  {
    id: "ai-automation",
    quote:
      "Jayyy set up an automation workflow that cut our weekly reporting from hours to minutes. Clear communication, fast turnaround, and someone who thinks in business outcomes — not just technical tasks.",
    author: "tom_reviews",
    role: "Startup Founder",
    service: "AI Workflow Automation",
    image: "/images/avatar-5.svg",
    rating: 5,
    date: "Jan 2026",
  },
  {
    id: "kpi-dashboard",
    quote:
      "The KPI dashboard Jayyy built gives me visibility I've never had before. One view across departments, updated automatically — I finally feel in control of performance without chasing spreadsheets.",
    author: "Amara B.",
    role: "Finance Director",
    service: "Dashboard & Reporting",
    image: "/images/avatar-4.svg",
    rating: 5,
    date: "Dec 2025",
  },
  {
    id: "fiverr-excel-revisions",
    quote:
      "Fast delivery, exceeded expectations, and stayed patient through every revision request. The Excel system works exactly how I described it. Already planning my next project with Jayyy.",
    author: "nelson_k",
    role: "Fiverr Client · Retail Operations",
    service: "Excel Business Systems",
    image: "/images/avatar-5.svg",
    rating: 5,
    ratingDetails: {
      communication: 5,
      quality: 5,
      value: 5,
    },
    date: "Nov 2025",
  },
  {
    id: "workflow-optimization",
    quote:
      "Jayyy mapped our messy internal process, then built a system that removed duplicate work and gave everyone clarity on next steps. Our team moves faster and makes fewer mistakes now.",
    author: "Rachel T.",
    role: "Consulting Firm Partner",
    service: "Workflow Optimization",
    image: "/images/avatar-2.svg",
    rating: 5,
    date: "Oct 2025",
  },
];

export const images = {
  hero: "/images/hero.svg",
  about: "/images/about.svg",
  workspace: "/images/workspace.svg",
} as const;

export const services = [
  {
    id: "web-development",
    title: "Modern Websites",
    tagline: "Digital experiences that build trust, generate leads, and accelerate growth.",
    icon: "◇",
    color: "from-cyan-500 to-blue-600",
    accent: "#22d3ee",
    items: [
      "Business websites",
      "Brand showcase sites",
      "Landing pages",
      "Responsive web applications",
    ],
  },
  {
    id: "ai-solutions",
    title: "AI-Powered Solutions",
    tagline: "Intelligent automation that saves time, reduces errors, and scales your operations.",
    icon: "◎",
    color: "from-violet-500 to-fuchsia-500",
    accent: "#a78bfa",
    items: [
      "AI integrations",
      "AI workflow systems",
      "Business automation",
    ],
  },
  {
    id: "excel-systems",
    title: "Excel Business Systems",
    tagline: "Custom operational tools that organize teams, track performance, and improve control.",
    icon: "▦",
    color: "from-emerald-500 to-teal-600",
    accent: "#34d399",
    items: [
      "HR Tracking Systems",
      "Budget & Expense Trackers",
      "Dashboards and Reporting",
      "Data Management Systems",
      "Operational Tracking Tools",
    ],
  },
  {
    id: "data-analysis",
    title: "Data Analysis & Reporting",
    tagline: "Clear dashboards and reports that turn data into confident business decisions.",
    icon: "◫",
    color: "from-amber-500 to-orange-500",
    accent: "#fbbf24",
    items: [
      "KPI Dashboards",
      "Performance Tracking",
      "Business Insights",
    ],
  },
] as const;

export const aboutStory = {
  headline: "Crafting digital experiences with precision and purpose",
  paragraphs: [
    "I'm Jayyy — a creative developer and digital solutions builder who transforms ideas into premium websites, intelligent dashboards, and AI-powered experiences.",
    "From sleek business websites to data-rich dashboards and automation systems, I design and build digital products that elevate brands and drive measurable growth.",
    "Every project blends strategy, design, and technology — delivered with agency-level quality and a personal touch.",
  ],
} as const;
