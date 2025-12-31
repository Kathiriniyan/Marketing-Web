// src/lib/careers.ts

export type CareerJob = {
  slug: string;
  title: string;
  tag?: string;
  location: string;
  type: string;
  experience: string;
  deadline: string;
  salary: string;
  intro: string;
  responsibilities: string[];
  skills: string[];
};

export const careers: CareerJob[] = [
  {
    slug: "sales-telesales",
    title: "Sales (Telesales)",
    tag: "Urgent Hiring",
    location: "Jaffna",
    type: "Full Time",
    experience: "1 Year Experience",
    deadline: "-",
    salary: "RS.35000 (Basic) Monthly",
    intro:
      "Support our partners by calling leads, following up, and updating CRM data.",
    responsibilities: [
      "Outbound calling",
      "Lead qualification",
      "Appointment setting",
      "Daily/weekly reporting and CRM updates",
    ],
    skills: [
      "Clear communication and confidence on calls",
      "Structured follow-up",
      "Basic CRM discipline",
      "Result-focused mindset",
    ],
  },
  {
    slug: "back-office-planning",
    title: "Back Office & Planning Assistant",
    tag: "Urgent Hiring",
    location: "Jaffna",
    type: "Full Time",
    experience: "1 Year Experience",
    deadline: "-",
    salary: "RS.35000 (Basic) Monthly",
    intro:
      "Keep operations moving by supporting orders, confirmations, planning updates, and coordination.",
    responsibilities: [
      "Order and document support",
      "Customer status updates",
      "Planning and coordination with internal teams",
      "Escalation of exceptions",
    ],
    skills: [
      "Accuracy and attention to detail",
      "Fast, polite communication",
      "Structured working style",
      "Problem-solving",
    ],
  },
  {
    slug: "accounts",
    title: "Accounts",
    tag: "Urgent Hiring",
    location: "Jaffna",
    type: "Full Time",
    experience: "1 Year Experience",
    deadline: "-",
    salary: "RS.40000 (Basic) Monthly",
    intro:
      "Support financial administration with documentation checks, reporting, and invoicing assistance.",
    responsibilities: [
      "Document checks and data accuracy",
      "Invoicing support",
      "Basic reporting and reconciliation support",
      "Process documentation",
    ],
    skills: [
      "Strong attention to detail",
      "Excel/Google Sheets skills",
      "Confidentiality and reliability",
      "Consistency",
    ],
  },
  {
    slug: "marketing",
    title: "Marketing",
    tag: "Urgent Hiring",
    location: "Jaffna",
    type: "Full Time",
    experience: "1 Year Experience",
    deadline: "-",
    salary: "RS.40000 (Basic) Monthly",
    intro:
      "Support online marketing execution: content updates, basic SEO text, and campaign coordination.",
    responsibilities: [
      "Website and content updates",
      "Basic SEO content writing",
      "Social media support",
      "Campaign reporting",
    ],
    skills: [
      "Strong writing skills",
      "Consistency and planning",
      "Basic digital marketing understanding",
      "Eye for detail",
    ],
  },
  {
    slug: "secretary",
    title: "Secretary",
    tag: "Urgent Hiring",
    location: "Jaffna",
    type: "Full Time",
    experience: "1 Year Experience",
    deadline: "-",
    salary: "RS.40000 (Basic) Monthly",
    intro:
      "Support coordination: scheduling, email handling, documentation, and internal follow-ups.",
    responsibilities: [
      "Scheduling and meeting coordination",
      "Email handling and follow-ups",
      "Document preparation and filing",
      "Task tracking",
    ],
    skills: [
      "Organised and proactive",
      "Clear writing",
      "Follow-through",
      "Comfortable with tools (email, calendars, docs)",
    ],
  },
  {
    slug: "python-developer",
    title: "Python Developer",
    tag: "Urgent Hiring",
    location: "Jaffna",
    type: "Full Time",
    experience: "1 Year Experience",
    deadline: "-",
    salary: "Attractive",
    intro:
      "Build internal tools and apps connected to databases to improve operational workflows.",
    responsibilities: [
      "Develop Python services and APIs",
      "Integrate databases (SQL)",
      "Automate workflows and build internal dashboards",
      "Maintain code quality and documentation",
    ],
    skills: [
      "Python and API experience",
      "SQL and database fundamentals",
      "Clean code practices",
      "Problem-solving mindset",
    ],
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    tag: "Urgent Hiring",
    location: "Jaffna",
    type: "Full Time",
    experience: "1 Year Experience",
    deadline: "-",
    salary: "Attractive",
    intro:
      "Structure data pipelines and reporting to improve visibility and decision-making.",
    responsibilities: [
      "Build and maintain ETL/ELT pipelines",
      "Data modelling and quality checks",
      "Support dashboards and reporting",
      "Work with stakeholders on definitions and metrics",
    ],
    skills: [
      "Strong SQL",
      "ETL and data modelling experience",
      "Attention to data quality",
      "Communication and documentation",
    ],
  },
];
