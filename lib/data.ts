export const site = {
  name: "Jayyy",
  title: "Jayyy — Digital Solutions Builder | Websites, AI, Automation & Business Systems",
  description:
    "Jayyy helps businesses transform ideas, data, and processes into powerful digital solutions — driving growth, efficiency, and smarter decision-making.",
  tagline:
    "Jayyy helps businesses transform ideas, data, and processes into powerful digital solutions.",
  email: "hello@jayyy.dev",
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
  { href: "/#services", label: "Services", id: "services" },
  { href: "/#business-systems", label: "Business Systems", id: "business-systems" },
  { href: "/#projects", label: "Solutions", id: "projects" },
  { href: "/#skills", label: "Capabilities", id: "skills" },
  { href: "/#experience", label: "Experience", id: "experience" },
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
  { value: 40, suffix: "+", label: "Business solutions delivered" },
  { value: 5, suffix: "+", label: "Years driving transformation" },
  { value: 98, suffix: "%", label: "Client satisfaction rate" },
  { value: 12, suffix: "", label: "Industries served" },
] as const;

export type ProjectCategory =
  | "All"
  | "SaaS"
  | "AI"
  | "Web"
  | "Creative"
  | "Business";

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
      "A decision intelligence platform that gives growth teams real-time visibility into performance — turning complex data into clear actions that improve retention and revenue.",
    category: "SaaS",
    year: "2025",
    tags: ["Data Insights", "Performance Tracking", "Growth Strategy"],
    image: "/images/project-nexus.svg",
    demoUrl: "https://vercel.com",
    githubUrl: "https://github.com",
    outcome: "+38% user retention",
    accent: "#22d3ee",
    featured: true,
  },
  {
    slug: "synth-ai-studio",
    title: "Synth AI Studio",
    description:
      "An AI solutions brand positioned for rapid market traction — designed to communicate value instantly, accelerate lead generation, and scale demo conversions.",
    category: "AI",
    year: "2025",
    tags: ["AI Automation", "Lead Generation", "Digital Growth"],
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
      "A financial operations platform that simplifies payment monitoring and gives enterprise teams the clarity they need to manage transactions with confidence.",
    category: "SaaS",
    year: "2024",
    tags: ["Financial Visibility", "Operational Control", "Decision Support"],
    image: "/images/project-meridian.svg",
    demoUrl: "https://vercel.com",
    githubUrl: "https://github.com",
    outcome: "$2.4M/mo processed",
    accent: "#38bdf8",
    featured: true,
  },
  {
    slug: "aurora-creative",
    title: "Aurora Creative",
    description:
      "A premium digital presence for a creative agency — built to elevate brand perception, showcase work powerfully, and convert high-value client inquiries.",
    category: "Creative",
    year: "2024",
    tags: ["Brand Growth", "Client Acquisition", "Digital Presence"],
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
      "A go-to-market digital solution for an AI productivity tool — structured to build trust, communicate efficiency gains, and drive qualified waitlist growth.",
    category: "AI",
    year: "2024",
    tags: ["Workflow Efficiency", "AI Positioning", "Market Launch"],
    image: "/images/project-codeflow.svg",
    demoUrl: "https://vercel.com",
    githubUrl: "https://github.com",
    outcome: "12k waitlist signups",
    accent: "#22d3ee",
    featured: true,
  },
  {
    slug: "prism-portfolio",
    title: "Prism Portfolio Engine",
    description:
      "A scalable platform enabling creatives to launch polished digital presences faster — reducing time-to-market while maintaining premium brand standards.",
    category: "Web",
    year: "2024",
    tags: ["Operational Scale", "Faster Launch", "Brand Consistency"],
    image: "/images/project-prism.svg",
    demoUrl: "https://vercel.com",
    githubUrl: "https://github.com",
    outcome: "800+ sites launched",
    accent: "#e879f9",
    featured: true,
  },
  {
    slug: "hr-tracking-system",
    title: "HR Tracking System",
    description:
      "An operational hiring system that gives teams full visibility over recruitment — reducing delays, improving coordination, and accelerating better hiring decisions.",
    category: "Business",
    year: "2024",
    tags: ["HR Operations", "Process Efficiency", "Team Coordination"],
    image: "/images/project-hr-tracker.svg",
    demoUrl: "#contact",
    githubUrl: "#contact",
    outcome: "40% faster hiring cycles",
    accent: "#34d399",
    featured: true,
  },
  {
    slug: "budget-expense-tracker",
    title: "Budget & Expense Tracker",
    description:
      "A financial control system that helps businesses plan smarter, track spending in real time, and make informed decisions through clear performance dashboards.",
    category: "Business",
    year: "2024",
    tags: ["Financial Control", "Budget Planning", "Smarter Decisions"],
    image: "/images/project-budget-tracker.svg",
    demoUrl: "#contact",
    githubUrl: "#contact",
    outcome: "12hrs saved per month",
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
  headline: "Your partner in digital transformation — not just another developer",
  paragraphs: [
    "I'm Jayyy — a Digital Solutions Builder who helps businesses grow, automate, organize, and optimize through technology. I work at the intersection of strategy and execution, turning complex challenges into systems that deliver real results.",
    "Whether you need a modern website, AI-powered automation, Excel business systems, or executive dashboards — I design solutions around your workflows, your data, and your goals.",
    "My focus is always the same: efficiency, clarity, and measurable impact. Less manual work. Better decisions. Stronger operations. Sustainable growth.",
  ],
} as const;
