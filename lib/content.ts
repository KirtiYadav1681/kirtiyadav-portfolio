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
    title: "Hiring, with AI in the workflow",
    body: "Job Spec Jerry, Resume Reggie, Ted and Thuli, and the Crayon ATS. 175K+ active users.",
  },
  {
    href: "#bridge",
    index: "02 — The Bridge",
    title: "A daily thought-pattern interruption",
    body: "Lead frontend for the Drop, the 144-second Pause, The Crossing, and the admin side.",
  },
  {
    href: "#experience",
    index: "03 — The foundation",
    title: "Frontend, API, product",
    body: "React, Next.js, TypeScript, and Node. Production interfaces, auth, and the systems around them.",
  },
] as const;

export const marqueeItems = [
  "Job Spec Jerry",
  "Resume Reggie",
  "Ted",
  "Thuli",
  "Crayon ATS",
  "The Bridge",
  "The Pause",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "175K+ users",
] as const;

export const marqueeSummary =
  "Work includes Job Spec Jerry, Resume Reggie, Ted and Thuli, the Crayon ATS, and semantic search on a platform with 175K+ active users, plus lead frontend work on The Bridge: the Drop, the 144-second Pause, The Crossing, Planks, The Locks, and The Collective Pulse.";

export const buildCards = [
  {
    className: "bcard bcard-1 reveal",
    index: "01 — Frontend",
    title: "Production interfaces people use.",
    body: "React.js, Next.js, and TypeScript. Dashboards, authentication flows, role-based workflows, responsive layouts, and application state.",
    tech: "React.js · Next.js · TypeScript · JavaScript · Redux Toolkit · React Query · HTML · CSS · Tailwind · Material UI",
  },
  {
    className: "bcard bcard-2 reveal",
    index: "02 — Backend",
    title: "APIs, auth, and the data behind the screen.",
    body: "Node.js and Express. REST APIs, JWT authentication and authorization, MongoDB, third-party integrations, and AWS when the app has to stay up.",
    tech: "Node.js · Express.js · REST APIs · JWT · MongoDB · Mongoose · SQL · AWS",
  },
  {
    className: "bcard bcard-3 reveal",
    index: "03 — AI",
    title: "Models wired into real workflows.",
    body: "LLM integration, prompt engineering, structured outputs, RAG, embeddings, and vector search — shipped as product behavior, with the frontend and API around them.",
    tech: "Python · LLM APIs · Prompt engineering · RAG · Embeddings · Vector search · AI workflows",
  },
] as const;

export const crayonFeatures: readonly AiFeature[] = [
  {
    id: "jerry",
    index: "01",
    name: "Job Spec Jerry",
    kind: "Job specs",
    defaultOpen: true,
    does: [
      "Someone describes a role in plain English. Jerry builds the job spec. They edit it until it is right, then post it. On the product, Jerry turns a plain-English hiring need into a usable role brief.",
      "That spec is what gets posted and managed, so the AI output has to be editable and ready for the hiring flow.",
    ],
    role: [
      "I built this AI-driven experience: LLM workflows, prompt engineering, structured outputs, and the frontend and API path around them, then integrated it into production.",
    ],
    tech: "LLM APIs · Prompt engineering · Structured outputs · React · REST",
  },
  {
    id: "reggie",
    index: "02",
    name: "Resume Reggie",
    kind: "Candidate profiles",
    does: [
      "A person uploads an existing CV. Reggie turns it into a structured Crayon profile they can use when applying, and that employers can find.",
      "The profile replaces retyping the same history into every application.",
    ],
    role: [
      "I integrated Reggie into the production user flow: the interface, the API communication, and delivery through to a profile people actually use.",
    ],
    tech: "LLM integration · React · REST APIs · Production workflows",
  },
  {
    id: "search",
    index: "03",
    name: "Search and discovery",
    kind: "Semantic search",
    does: [
      "On Crayon, candidates browse jobs from their skills and preferences. Employers reach an existing candidate network instead of starting every search from zero.",
      "Finding a role or a person has to work inside that network, not as a separate search demo.",
    ],
    role: [
      "I worked with RAG, embeddings, vector search, and indexing concepts so retrieval inside these experiences can use context, not only an exact keyword.",
    ],
    tech: "RAG · Embeddings · Vector search · Indexing · LLM integration",
  },
  {
    id: "interviews",
    index: "04",
    name: "Ted and Thuli",
    kind: "AI interviews",
    does: [
      "Where a role requires it, Ted conducts an AI-led screening interview. Thuli is the alternate AI interview experience. Candidates complete a Ted or Thuli interview on those roles.",
      "The interview sits in the same flow as the application, so a person can track what happens next.",
    ],
    role: [
      "I worked on the AI video interview experiences and their path into production: the frontend, API communication, asynchronous processing, error states, and end-to-end delivery.",
    ],
    tech: "AI workflows · Async processing · React · REST APIs",
  },
  {
    id: "ats",
    index: "05",
    name: "Crayon ATS",
    kind: "Hiring workflow",
    does: [
      "The Crayon ATS is where applicants, stages, and communication live. Employers manage roles and pipelines there, alongside the candidate network and AI tools.",
      "Jerry, Reggie, and the interviews only matter if the result lands in that workflow.",
    ],
    role: [
      "I worked on ATS management workflows and the AI-assisted parts of that flow, across the frontend and the APIs next to them.",
    ],
    tech: "AI workflows · REST · Role-based product flows · React · Node",
  },
];

export const crayonEngineering = [
  "Prompt engineering",
  "Structured outputs",
  "Context-aware interactions",
  "RAG",
  "Embeddings",
  "Vector search",
  "Async processing",
  "Error states",
  "API integration",
  "Production debugging",
] as const;

export const bridgeFeatures: readonly AiFeature[] = [
  {
    id: "drop",
    index: "01",
    name: "Drop",
    kind: "Once a day",
    does: [
      "The Drop is the daily question or provocation. It arrives at 13:44 local time. The walker opens The Bridge and reads it. There is one Drop a day, and no feed.",
    ],
    role: [
      "I led the frontend for how a walker meets that day’s Drop, including the public preview and the signed-in daily experience.",
    ],
    tech: "Next.js · React · TypeScript · Tailwind CSS",
  },
  {
    id: "pause",
    index: "02",
    name: "Pause",
    kind: "144 seconds",
    does: [
      "A private AI conversation with a hard stop at 144 seconds. The AI is a mirror, not a guru: it challenges and reflects, asks one question at a time, and does not simply agree. Input is capped at 144 characters. Responses stream. Each session uses that day’s editorial package with the Drop.",
      "The conversation is stored without an identity. One Pause a day. It does not extend.",
    ],
    role: [
      "I led the frontend for the session: the timer, the conversation, and its place in the daily flow. The product calls Anthropic’s Claude through the API, with streaming. That sits in the wider architecture, beside the interface I built.",
    ],
    tech: "Next.js · TypeScript · Streaming conversation UI · 144-second cutoff",
  },
  {
    id: "crossing",
    index: "03",
    name: "The Crossing",
    kind: "Five Planks",
    does: [
      "The Crossing is how a walker leaves The Bridge. Five Planks are curated links for that day. Before login they are a fixed set. After the Pause they are specific to that Drop. The product is built to send people onward, not to keep them in a feed.",
    ],
    role: [
      "I led the frontend for The Crossing and the Planks, including the difference between the public set and the Drop-specific set.",
    ],
    tech: "Next.js · React · TypeScript · Product flows",
  },
  {
    id: "locks",
    index: "04",
    name: "The Locks",
    kind: "One anonymous thought",
    does: [
      "The Locks is the wall where a walker can leave one thought before they go. No names. No replies. The product does not store an identity with that thought.",
    ],
    role: [
      "I led the frontend for leaving a thought and for reading The Locks as a public, anonymous surface.",
    ],
    tech: "Next.js · React · Anonymous product flow",
  },
  {
    id: "pulse",
    index: "05",
    name: "The Collective Pulse",
    kind: "Aggregate signal",
    does: [
      "The Collective Pulse is an aggregate reading of anonymous Pauses. Four dimensions: Curiosity, Clarity, Anxiety, and Hope. It is never an individual score. Walkers are registered users. Stewards are practitioners connected through the product. There is also an admin side for operating the product.",
    ],
    role: [
      "I led the frontend for The Collective Pulse, walker functionality, steward-related surfaces, and the admin side of the product.",
    ],
    tech: "Next.js · TypeScript · Public product · Admin",
  },
];

export const bridgeArchitecture = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Magic-link auth",
  "AWS Lambda",
  "API Gateway",
  "DynamoDB",
  "SES",
  "EventBridge",
  "S3",
  "CloudFront",
  "Anthropic API",
] as const;

export const workIndex = [
  { href: "#crayon", label: "01 Crayon" },
  { href: "#bridge", label: "02 The Bridge" },
  { href: "#brain", label: "03 Brain Inventory" },
  { href: "#client", label: "04 Client work" },
] as const;

export const experience = [
  {
    year: "2025",
    dates: "May 2025 — Present",
    title: "Crayon Jobs Platform",
    role: "Senior Software Developer, AI / Full Stack · Remote · Freelance",
    points: [
      "Production features on a job platform serving 175K+ active users, with React.js, Next.js, TypeScript, and Node.js.",
      "REST APIs, authentication, authorization, dashboards, role-based workflows, and MongoDB.",
      "Job Spec Jerry, Resume Reggie, Ted and Thuli, semantic search, and ATS workflows — integrated from requirements into the live hiring product.",
    ],
  },
  {
    year: "2024",
    dates: "June 2024 — May 2025",
    title: "Brain Inventory",
    role: "Software Developer · Indore, India",
    points: [
      "Production applications with React.js, Node.js, Express.js, and MongoDB.",
      "REST APIs, authentication, reusable integrations, and multi-role dashboards.",
      "AWS for deployments and production troubleshooting, with product, design, and engineering.",
    ],
  },
  {
    year: "2023",
    dates: "Mar 2023 — Jan 2024",
    title: "Independent client work",
    role: "Freelance Developer · Remote",
    points: [
      "Responsive full-stack applications with React.js, Node.js, Express.js, and MongoDB.",
      "Client work from requirements through development and deployment, including REST APIs and third-party services.",
    ],
  },
  {
    year: "2019",
    dates: "2019 — 2023",
    title: "RGPV University, Indore",
    role: "B.Tech, Computer Science · CGPA 8.9 / 10",
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    className: "skill skill-fe reveal",
    items: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "React Query",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    className: "skill skill-be reveal",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "API integration",
      "Authentication",
      "Authorization",
      "JWT",
    ],
  },
  {
    title: "AI",
    className: "skill skill-ai reveal",
    items: [
      "Python",
      "LLM integration",
      "Prompt engineering",
      "RAG",
      "Vector databases",
      "Embeddings",
      "Semantic search",
      "AI agents",
      "AI workflows",
      "LLM APIs",
      "AI evaluation",
      "Generative AI",
    ],
  },
  {
    title: "Data",
    className: "skill skill-data reveal",
    items: ["MongoDB", "Mongoose", "SQL", "Database design"],
  },
  {
    title: "Cloud & tools",
    className: "skill skill-cloud reveal",
    items: ["AWS", "Docker", "CI/CD", "Git"],
  },
  {
    title: "Practice",
    className: "skill skill-practice reveal",
    items: ["Production debugging", "Agile", "AI integration"],
  },
] as const;
