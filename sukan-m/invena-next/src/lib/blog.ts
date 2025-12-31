// lib/blog.ts
export type BlogPost = {
  slug: string;
  category: string;
  author: string;
  title: string;
  excerpt: string;
  date: string; // ISO: YYYY-MM-DD
  readTime: string; // e.g. "5 min read"
  image: string; // keep existing images
  tags: string[];
  content: string[]; // paragraphs (simple)
};

export const BLOG_CATEGORIES = [
  "Operations Support",
  "Sales Support",
  "Back Office",
  "Online Marketing",
  "IT Support",
] as const;

export const BLOG_TAGS = [
  "Operations",
  "Telesales",
  "CRM",
  "Reporting",
  "Process",
  "SEO",
  "Automation",
  "Dashboards",
  "Workflows",
  "Global Support",
] as const;

export const POSTS: BlogPost[] = [
  {
    slug: "worldwide-operations-support-that-scales",
    category: "Operations Support",
    author: "Sukan Marketing Team",
    title: "Worldwide Operations Support That Scales With Your Business",
    excerpt:
      "Learn how structured operational support helps growing teams reduce pressure, improve accuracy, and scale across time zones.",
    date: "2025-12-20",
    readTime: "6 min read",
    image: "/assets/images/blog/03.webp",
    tags: ["Operations", "Workflows", "Global Support"],
    content: [
      "When teams grow quickly, daily operations can become the bottleneck. Missed follow-ups, inconsistent reporting, and unclear handovers create pressure across departments.",
      "Sukan Marketing supports partners worldwide with structured execution across sales support, back office coordination, administration, online marketing tasks, and IT support.",
      "The result is predictable delivery: clearer workflows, accurate data handling, and better communication between teams working in different time zones.",
    ],
  },
  {
    slug: "telesales-follow-up-framework-for-better-conversion",
    category: "Sales Support",
    author: "Sukan Marketing Team",
    title: "A Telesales Follow-Up Framework for Better Conversion",
    excerpt:
      "A simple call + follow-up structure that improves lead response rates, keeps your pipeline clean, and ensures consistent CRM updates.",
    date: "2025-12-18",
    readTime: "5 min read",
    image: "/assets/images/blog/01.webp",
    tags: ["Telesales", "CRM", "Reporting"],
    content: [
      "A strong telesales workflow is not only about calling leads—it’s also about consistent follow-up and accurate notes in your CRM.",
      "We recommend a simple structure: first contact, qualification, clear next step, then timed follow-ups based on lead intent.",
      "With daily and weekly reporting, teams can spot pipeline gaps early and improve performance without guesswork.",
    ],
  },
  {
    slug: "back-office-checklists-that-prevent-costly-errors",
    category: "Back Office",
    author: "Sukan Marketing Team",
    title: "Back Office Checklists That Prevent Costly Errors",
    excerpt:
      "Why checklists matter for document accuracy, confirmations, and internal coordination—and how to build them without slowing work down.",
    date: "2025-12-15",
    readTime: "6 min read",
    image: "/assets/images/blog/02.webp",
    tags: ["Process", "Reporting", "Workflows"],
    content: [
      "Back office issues usually come from small mistakes: missing documents, unclear confirmations, and inconsistent status updates.",
      "A checklist system reduces rework. It standardises what needs to be checked and who is responsible at each step.",
      "Over time, this improves accuracy, speeds up coordination, and makes reporting more reliable.",
    ],
  },
  {
    slug: "basic-seo-content-updates-that-improve-visibility",
    category: "Online Marketing",
    author: "Sukan Marketing Team",
    title: "Basic SEO Content Updates That Improve Visibility",
    excerpt:
      "Small website updates, landing page improvements, and consistent content changes that support long-term search visibility.",
    date: "2025-12-12",
    readTime: "5 min read",
    image: "/assets/images/blog/04.webp",
    tags: ["SEO", "Process", "Reporting"],
    content: [
      "SEO doesn’t always require big campaigns. Consistent updates to website content, headings, and landing pages can make a meaningful difference.",
      "The key is to keep content structured, focused on real search intent, and aligned with the services you deliver.",
      "With simple monthly reporting, you can track progress and prioritise updates that produce results.",
    ],
  },
  {
    slug: "workflow-automation-ideas-for-operations-teams",
    category: "IT Support",
    author: "Sukan Marketing Team",
    title: "Workflow Automation Ideas for Operations Teams",
    excerpt:
      "From dashboards to automated alerts—here are practical ways to reduce manual work and improve visibility across operations.",
    date: "2025-12-10",
    readTime: "7 min read",
    image: "/assets/images/blog/05.webp",
    tags: ["Automation", "Dashboards", "Workflows"],
    content: [
      "Operations teams lose time on repeat tasks: copying data, sending reminders, and manually tracking statuses.",
      "Automation can be simple: dashboards connected to databases, lightweight tools for reporting, and clear alerts for exceptions.",
      "The goal is to reduce manual effort while improving accuracy and speed of execution.",
    ],
  },
  {
    slug: "how-to-setup-clear-reporting-without-extra-meetings",
    category: "Operations Support",
    author: "Sukan Marketing Team",
    title: "How to Set Up Clear Reporting Without Extra Meetings",
    excerpt:
      "A practical reporting rhythm that keeps stakeholders informed while reducing unnecessary meetings and misalignment.",
    date: "2025-12-08",
    readTime: "5 min read",
    image: "/assets/images/blog/06.webp",
    tags: ["Reporting", "Operations", "Process"],
    content: [
      "Many teams add meetings when reporting is unclear. A better approach is building a simple reporting rhythm.",
      "Weekly summaries, clean metrics definitions, and consistent formatting help leadership stay informed without constant calls.",
      "With the right structure, reporting becomes a tool for execution rather than a burden.",
    ],
  },
  {
    slug: "crm-hygiene-why-it-matters-and-how-to-fix-it",
    category: "Sales Support",
    author: "Sukan Marketing Team",
    title: "CRM Hygiene: Why It Matters and How to Fix It",
    excerpt:
      "A messy CRM causes missed opportunities. Learn how to keep lead data clean, up to date, and useful for decision-making.",
    date: "2025-12-05",
    readTime: "6 min read",
    image: "/assets/images/blog/03.webp",
    tags: ["CRM", "Telesales", "Workflows"],
    content: [
      "A CRM is only valuable when it reflects reality. Missing notes, outdated stages, and inconsistent fields reduce visibility.",
      "Simple rules—like mandatory outcome logging and weekly cleanup—create discipline without slowing sales activity.",
      "With consistent updates, you improve forecasting, follow-up quality, and conversion performance.",
    ],
  },
  {
    slug: "building-operations-templates-that-teams-actually-use",
    category: "Back Office",
    author: "Sukan Marketing Team",
    title: "Building Operations Templates That Teams Actually Use",
    excerpt:
      "Templates should reduce friction, not create it. Here’s how to structure templates for handovers, checks, and daily execution.",
    date: "2025-12-02",
    readTime: "6 min read",
    image: "/assets/images/blog/01.webp",
    tags: ["Process", "Workflows", "Operations"],
    content: [
      "Templates fail when they are too long or unclear. Good templates are short, consistent, and aligned with real workflows.",
      "Start with your most frequent tasks—confirmations, status updates, and reporting—and standardise the format.",
      "This improves speed, reduces mistakes, and makes team handovers easier.",
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  // newest first
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(POSTS.map((p) => p.category))).sort();
}

export function getAllTags(): string[] {
  const all = POSTS.flatMap((p) => p.tags);
  return Array.from(new Set(all)).sort();
}
