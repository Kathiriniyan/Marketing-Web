
export type ServiceSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type ServiceItem = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  thumb: string;
  reverseOnSm?: boolean;
  detailIntro: string;
  detailSections: ServiceSection[];
};

export type StepItem = {
  number: string;
  icon: string;
  title: string;
  desc: string;
};

export type FaqItem = {
  id: string;
  headingId: string;
  collapseId: string;
  q: string;
  a: string;
  open?: boolean;
};


export const SERVICES: ServiceItem[] = [
  {
    id: "operations-support",
    icon: "/assets/images/service/icons/11.svg",
    title: "Operations Support",
    desc: "Sales, back office, administration, marketing, and IT execution.",
    thumb: "/assets/images/service/07.webp",
    detailIntro:
      "Sukan Marketing delivers practical, hands-on support across your core operations. Whether you need daily execution, extra capacity, or structured processes, our team supports you worldwide with a clear workflow and measurable results.",
    detailSections: [
      {
        title: "What we support",
        body:
          "We act as an extension of your team across multiple departments, so daily operations run smoothly and predictably.",
        bullets: [
          "Sales support (telesales and lead follow-up)",
          "Back office and planning coordination",
          "Administration and reporting support",
          "Online marketing execution",
          "IT support and app/database development",
        ],
      },
      {
        title: "Why it works",
        body:
          "Our focus is operational excellence: consistent workflows, accurate data, faster response times, and better coordination between teams. With clear routines, defined responsibilities, and structured communication, you get measurable results instead of daily firefighting.",
      },
    ],
  },
  {
    id: "sales-support",
    icon: "/assets/images/service/icons/12.svg",
    title: "Sales Support",
    desc: "Telesales, lead follow-up, CRM updates, and reporting.",
    thumb: "/assets/images/service/08.webp",
    detailIntro:
      "We support your sales pipeline with structured outreach, clear follow-up, and accurate CRM updates so no opportunity is missed.",
    detailSections: [
      {
        title: "What we do",
        body: "Our telesales and sales support team focuses on consistent, structured contact with your leads.",
        bullets: [
          "Lead calling and qualification",
          "Appointment setting with clear next steps",
          "Customer follow-up and reactivation",
          "CRM updates and daily/weekly reporting",
        ],
      },
      {
        title: "How it helps",
        body:
          "You get better conversion, cleaner pipeline visibility, and more consistent communication with prospects and customers—without adding pressure to your internal team.",
      },
    ],
  },
  {
    id: "back-office-support",
    icon: "/assets/images/service/icons/13.svg",
    title: "Back Office Support",
    desc: "Data handling, documentation, invoicing support, and reporting.",
    thumb: "/assets/images/service/09.webp",
    reverseOnSm: true,
    detailIntro:
      "We keep orders, documentation, and internal coordination on track so operations stay accurate and predictable.",
    detailSections: [
      {
        title: "Back Office",
        body: "Our back office team helps keep orders and communication moving without delays or confusion.",
        bullets: [
          "Order processing support",
          "Customer updates and confirmations",
          "Document checks and data accuracy",
          "Coordination with internal teams",
        ],
      },
      {
        title: "Administration",
        body:
          "We maintain control and clarity in your daily administration, so management always has a clear view.",
        bullets: [
          "Data entry and record keeping",
          "Invoicing support and documentation",
          "Weekly/monthly reporting",
          "Process documentation and checklists",
        ],
      },
    ],
  },
  {
    id: "it-support",
    icon: "/assets/images/service/icons/14.svg",
    title: "IT Support",
    desc: "Apps, databases, automation, and system maintenance.",
    thumb: "/assets/images/service/10.webp",
    reverseOnSm: true,
    detailIntro:
      "We support technical execution and operational systems so your workflows, dashboards, and data stay reliable.",
    detailSections: [
      {
        title: "App & Database Support",
        body:
          "Our IT and development support focuses on connecting your operations to reliable systems and tools.",
        bullets: [
          "Building apps connected to databases",
          "Workflow automation and dashboards",
          "Data structure support",
          "Ongoing support and improvements",
        ],
      },
    ],
  },
];

export const STEPS: StepItem[] = [
  {
    number: "01",
    icon: "/assets/images/process/icon/01.svg",
    title: "Requirement Review",
    desc: "We start by understanding your business operations, priorities, and support needs.",
  },
  {
    number: "02",
    icon: "/assets/images/process/icon/02.svg",
    title: "Structure & Setup",
    desc: "We design structured workflows, documentation, and communication routines.",
  },
  {
    number: "03",
    icon: "/assets/images/process/icon/03.svg",
    title: "Daily Execution",
    desc: "We provide consistent operational support and continuous improvement.",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "01",
    headingId: "headingOne",
    collapseId: "collapseOne",
    q: "What services does Sukan Marketing provide?",
    a: "Sukan Marketing provides structured operational support including sales assistance, back office coordination, administration, online marketing, and IT support to help businesses run smoothly worldwide.",
    open: true,
  },
  {
    id: "02",
    headingId: "headingTwo",
    collapseId: "collapseTwo",
    q: "How does Sukan Marketing support business growth?",
    a: "We improve daily execution by reducing operational pressure, increasing accuracy, and supporting sales and back office processes with clear workflows and consistent reporting.",
  },
  {
    id: "03",
    headingId: "headingThree",
    collapseId: "collapseThree",
    q: "Do you work with companies worldwide?",
    a: "Yes, we support companies across multiple time zones using structured processes, clear communication, and reliable execution to ensure smooth global operations.",
  },
  {
    id: "04",
    headingId: "headingFour",
    collapseId: "collapseFour",
    q: "Can you integrate with our existing systems?",
    a: "We work with your existing tools, CRMs, and systems, and can also build custom workflows, apps, or dashboards to support your operations.",
  },
  {
    id: "05",
    headingId: "headingFive",
    collapseId: "collapseFive",
    q: "How do we start working with Sukan Marketing?",
    a: "You can contact us through our website with your requirements, and we will review your needs and propose a clear and structured support setup.",
  },
];
