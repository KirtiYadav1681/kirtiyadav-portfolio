export type AiFeature = {
  id: string;
  index: string;
  name: string;
  kind: string;
  does: readonly string[];
  role: readonly string[];
  tech: string;
  defaultOpen?: boolean;
};

export const ledger = [
  {
    href: "#crayon",
    index: "01 — Crayon",
    title: "AI-powered hiring workflows",
    body: "Built and integrated AI features including job-spec generation, CV/profile generation, semantic search, AI interviews, and ATS workflows for a platform serving 175K+ users.",
  },
  {
    href: "#bridge",
    index: "02 — The Bridge",
    title: "Realtime AI product",
    body: "Built the production frontend and integrated realtime AI conversations, admin workflows, and backend services.",
  },
  {
    href: "#experience",
    index: "03 — Product engineering",
    title: "From feature to production",
    body: "React, TypeScript, Node.js, REST APIs, MongoDB, AWS, realtime systems, and production delivery.",
  },
] as const;

export const marqueeItems = [
  "Job Spec Jerry",
  "Resume Reggie",
  "AI Search",
  "AI Interviews",
  "Crayon ATS",
  "The Bridge",
  "OpenAI",
  "React",
  "TypeScript",
  "Node.js",
  "175K+ users",
] as const;

export const marqueeSummary =
  "Work includes job-spec generation, CV and profile generation, semantic search, realtime AI interviews, and ATS workflows on a recruitment platform serving 175K+ users, plus the production frontend for The Bridge.";

export const buildCards = [
  {
    className: "bcard bcard-1 reveal",
    index: "01 — The feature",
    title: "From requirement to release.",
    body: "I turn a product requirement into a technical approach, then implementation, integration, optimization, and a production release.",
    tech: "Requirements · Technical design · Integration · Deployment · Production",
  },
  {
    className: "bcard bcard-2 reveal",
    index: "02 — The stack",
    title: "Interface, API, and data.",
    body: "React and TypeScript on the interface. Node.js, Express, and REST APIs behind it. MongoDB and AWS where the product needs them.",
    tech: "React.js · TypeScript · Node.js · Express.js · REST APIs · MongoDB · AWS",
  },
  {
    className: "bcard bcard-3 reveal",
    index: "03 — The AI",
    title: "Inside the product workflow.",
    body: "OpenAI APIs for job-spec generation, CV processing, semantic matching, and realtime interviews.",
    tech: "OpenAI APIs · OpenAI Realtime · Prompt engineering · Streaming AI · WebRTC",
  },
] as const;

export const crayonFeatures: readonly AiFeature[] = [
  {
    id: "jerry",
    index: "01",
    name: "Job Spec Jerry",
    kind: "Job-spec generation",
    defaultOpen: true,
    does: ["Generates job specifications as part of Crayon's hiring product."],
    role: ["I built and integrated Jerry job-spec generation into the production platform."],
    tech: "OpenAI APIs · Prompt engineering · React · TypeScript · REST",
  },
  {
    id: "reggie",
    index: "02",
    name: "Resume Reggie",
    kind: "CV/profile generation",
    does: ["Generates CV and candidate profiles inside the recruitment product."],
    role: ["I built and integrated Reggie CV/profile generation into the production platform."],
    tech: "OpenAI APIs · React · TypeScript · REST APIs",
  },
  {
    id: "search",
    index: "03",
    name: "AI Search",
    kind: "Semantic candidate and job matching",
    does: ["Matches candidates and jobs by meaning, not only by exact keywords."],
    role: ["I integrated AI search and semantic candidate-job matching into the hiring workflow."],
    tech: "OpenAI APIs · React · TypeScript · REST APIs",
  },
  {
    id: "interviews",
    index: "04",
    name: "AI Interviews",
    kind: "Realtime AI interview experiences",
    does: [
      "A realtime AI video interview in the hiring flow, using OpenAI Realtime and WebRTC.",
      "The session combines screen recording, candidate audio, and AI audio, then plays back through backend media processing.",
    ],
    role: [
      "I engineered the interview: browser canvas composition, chunked video upload, backend media processing, and streaming playback.",
    ],
    tech: "OpenAI Realtime · WebRTC · Node.js · Express · React · TypeScript",
  },
  {
    id: "ats",
    index: "05",
    name: "AI ATS workflows",
    kind: "AI-assisted hiring workflows",
    does: ["AI-assisted applicant tracking inside the same product as the other hiring tools."],
    role: [
      "I built and integrated AI ATS workflows across role-based screens, APIs, and application state.",
    ],
    tech: "React · TypeScript · Node.js · REST APIs · RBAC",
  },
  {
    id: "processing",
    index: "06",
    name: "CV & job-spec processing",
    kind: "AI-powered document workflows",
    does: ["Parses CVs and job specs so the hiring workflow can use the result."],
    role: ["I integrated AI document processing for CV and job-spec workflows."],
    tech: "OpenAI APIs · Node.js · REST APIs · React · TypeScript",
  },
];

export const crayonEngineering = [
  "OpenAI APIs",
  "OpenAI Realtime",
  "Prompt engineering",
  "Streaming AI",
  "WebRTC",
  "Async processing",
  "REST APIs",
  "Node.js",
  "React",
  "TypeScript",
  "Production debugging",
] as const;

export const bridgeFeatures: readonly AiFeature[] = [
  {
    id: "frontend",
    index: "01",
    name: "Production frontend",
    kind: "From brief to release",
    defaultOpen: true,
    does: ["The Bridge is a privacy-first AI reflection platform."],
    role: [
      "I built the product frontend from scratch to production: architecture, component structure, API integration, responsive UX, implementation, and delivery.",
    ],
    tech: "React · TypeScript · Next.js",
  },
  {
    id: "conversations",
    index: "02",
    name: "Realtime AI conversations",
    kind: "Streaming responses",
    does: ["Reflection workflows with streamed AI responses, time-based content, and user state."],
    role: ["I implemented the realtime conversation UI and integrated streaming AI responses with the frontend."],
    tech: "Streaming AI · React · TypeScript · API integration",
  },
  {
    id: "admin",
    index: "03",
    name: "Admin platform",
    kind: "Configurable product",
    does: ["Product content, configuration, and user-facing experiences can be managed without a code change for routine updates."],
    role: ["I built the admin platform for those workflows."],
    tech: "React · TypeScript · API integration",
  },
  {
    id: "pulse",
    index: "04",
    name: "Collective Pulse",
    kind: "Insights",
    does: ["Aggregate AI-generated analysis, shown without turning it into an individual score."],
    role: [
      "I integrated the backend services for Collective Pulse / Insights and built the privacy-conscious interface for that data.",
    ],
    tech: "API integration · React · TypeScript",
  },
  {
    id: "delivery",
    index: "05",
    name: "Production delivery",
    kind: "SEO and performance",
    does: ["A released product, not a prototype."],
    role: [
      "I delivered SEO, responsiveness, Core Web Vitals, performance, accessibility, and cross-device UX.",
    ],
    tech: "Core Web Vitals · SEO · Accessibility",
  },
];

export const bridgeArchitecture = [
  "AWS Lambda",
  "API Gateway",
  "DynamoDB",
  "EventBridge",
  "S3",
  "KMS",
  "SES",
  "Route 53",
  "CloudFormation/SAM",
] as const;

export const workIndex = [
  { href: "#crayon", label: "01 Crayon" },
  { href: "#bridge", label: "02 The Bridge" },
  { href: "#brain", label: "03 Brain Inventory" },
] as const;

export const experience = [
  {
    year: "2025",
    dates: "May 2025 – August 2026",
    title: "Crayon Technologies Pvt. Ltd.",
    role: "AI Product & Senior Full Stack AI Engineer · Remote",
    points: [
      "Owned end-to-end delivery of major product features for a recruitment platform serving 175K+ users.",
      "Built and integrated job-spec generation, CV/profile generation, AI search, semantic matching, AI interviews, and ATS workflows.",
      "Engineered a realtime AI video interview with OpenAI Realtime and WebRTC, including chunked upload and streaming playback.",
      "Implemented role-based workflows across 5–6 user roles, with authentication, authorization, and dashboards.",
    ],
  },
  {
    year: "2024",
    dates: "June 2024 – May 2025",
    title: "Brain Inventory",
    role: "Software Developer · Hybrid",
    points: [
      "Waypoint: built the frontend for an AI-powered travel planner, including trip workflows and flight API integration.",
      "Loyyal: built frontend interfaces and wallet connectivity for a blockchain asset tokenization platform.",
    ],
  },
  {
    year: "2019",
    dates: "2019 – 2023",
    title: "RGPV University, Indore",
    role: "B.Tech, Computer Science · CGPA 8.9/10",
  },
] as const;

export const skillGroups = [
  {
    title: "Full stack",
    className: "skill skill-fe reveal",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Redux Toolkit / Thunk",
      "React Query",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    title: "AI / ML",
    className: "skill skill-ai reveal",
    items: [
      "OpenAI APIs",
      "OpenAI Realtime",
      "AI Integration",
      "Prompt Engineering",
      "AI Document Processing",
      "CV / Job-Spec Workflows",
      "Semantic Matching",
      "LLM Workflows",
      "Streaming AI",
    ],
  },
  {
    title: "Backend & APIs",
    className: "skill skill-be reveal",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "WebRTC",
      "Authentication",
      "JWT",
      "RBAC",
      "API Integration",
      "Asynchronous Workflows",
      "Third-Party Integrations",
    ],
  },
  {
    title: "Data & cloud",
    className: "skill skill-data reveal",
    items: [
      "MongoDB",
      "Mongoose",
      "SQL",
      "AWS",
      "S3",
      "SQS",
      "Lambda",
      "CloudFront",
      "RDS",
      "Elastic Beanstalk",
      "MediaConvert",
      "Route 53",
    ],
  },
  {
    title: "DevOps & production",
    className: "skill skill-practice reveal",
    items: [
      "Git",
      "CI/CD",
      "Docker",
      "Cloud Deployment",
      "Production Debugging",
      "Performance Optimization",
      "Core Web Vitals",
      "SEO",
      "Open Graph",
    ],
  },
] as const;
