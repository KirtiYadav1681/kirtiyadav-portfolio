"use client";

import { Hood } from "@/components/ui/ai-details";
import Image from "next/image";
import { useRef, useSyncExternalStore, type CSSProperties, type KeyboardEvent } from "react";

type ProjectId = "crayon" | "bridge" | "brain";

type Metric = {
  icon: "users" | "roles" | "ai";
  value: string;
  label: string;
};

type Project = {
  id: ProjectId;
  index: string;
  name: string;
  summary: string;
  kicker: string;
  meta: string;
  role: string;
  title: string;
  description: readonly string[];
  image: string;
  imagePosition: string;
  ratio: string;
  alt: string;
  live?: string;
  metrics?: readonly Metric[];
  tech: readonly string[];
};

const projects: readonly Project[] = [
  {
    id: "crayon",
    index: "01",
    name: "Crayon",
    summary: "AI-powered recruitment platform",
    kicker: "01 — Crayon",
    meta: "May 2025 – August 2026",
    role: "AI Product & Senior Full Stack AI Engineer · Remote",
    title: "All-in-one Recruitment Platform",
    description: [
      "AI-powered recruitment platform serving 175K+ users.",
      "Built and integrated job-spec generation, CV/profile generation, AI search, semantic matching, AI interviews, and ATS workflows.",
      "Implemented role-based workflows across 5–6 user roles, including authentication and dashboards.",
    ],
    image: "/images/CrayonBanner.png",
    imagePosition: "center top",
    ratio: "1920 / 870",
    alt: "Crayon.jobs recruitment platform, showing the hiring homepage",
    live: "https://crayon.jobs/",
    metrics: [
      { icon: "users", value: "175K+", label: "users" },
      { icon: "roles", value: "5–6", label: "user roles" },
      { icon: "ai", value: "AI-powered", label: "workflows" },
    ],
    tech: ["OpenAI APIs", "OpenAI Realtime", "React", "TypeScript", "Node.js", "Express", "MongoDB", "WebRTC", "REST APIs"],
  },
  {
    id: "bridge",
    index: "02",
    name: "The Bridge",
    summary: "Privacy-first AI reflection platform",
    kicker: "02 — The Bridge",
    meta: "Project · Crayon Technologies",
    role: "Full-Stack AI Engineer",
    title: "Privacy-first AI Reflection Platform",
    description: [
      "Privacy-first AI reflection platform with realtime AI conversations.",
      "Built the production frontend and integrated realtime AI conversations, admin workflows, and backend services.",
      "Delivered SEO, responsiveness, Core Web Vitals, performance, and accessibility.",
    ],
    image: "/images/TheBridgeBanner.png",
    imagePosition: "center top",
    ratio: "1089 / 871",
    alt: "The Bridge homepage, a privacy-first AI reflection platform",
    live: "https://thebridge144.com/",
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Streaming AI",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "EventBridge",
      "S3",
      "KMS",
      "SES",
      "Route 53",
      "CloudFormation/SAM",
    ],
  },
  {
    id: "brain",
    index: "03",
    name: "Brain Inventory",
    summary: "AI travel planner and asset platform",
    kicker: "03 — Brain Inventory",
    meta: "June 2024 – May 2025",
    role: "Software Developer · Hybrid",
    title: "Waypoint and Loyyal",
    description: [
      "Production web products: Waypoint, an AI-powered travel planner, and Loyyal, a token studio.",
      "Waypoint: built the frontend, trip-planning workflows, and flight API integration for comparing and booking flights.",
      "Loyyal: built frontend interfaces and blockchain wallet connectivity for tokenized assets.",
    ],
    image: "/images/BrainInventoryBanner.png",
    imagePosition: "center top",
    ratio: "1897 / 869",
    alt: "Brain Inventory product work, including the Waypoint travel planner and Loyyal token studio",
    tech: ["React.js", "JavaScript", "Redux", "Material UI"],
  },
];

function isProjectId(value: string): value is ProjectId {
  return value === "crayon" || value === "bridge" || value === "brain";
}

function projectFromHash(): ProjectId {
  const id = window.location.hash.slice(1);
  return isProjectId(id) ? id : "crayon";
}

function projectOnServer(): ProjectId {
  return "crayon";
}

function subscribeToProject(onStoreChange: () => void) {
  const onHash = () => onStoreChange();
  const onClick = (event: MouseEvent) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element ? event.target.closest("a[href^='#']") : null;
    if (!(link instanceof HTMLAnchorElement)) return;
    const id = (link.getAttribute("href") ?? "").slice(1);
    if (isProjectId(id)) queueMicrotask(onStoreChange);
  };

  window.addEventListener("hashchange", onHash);
  window.addEventListener("popstate", onHash);
  document.addEventListener("click", onClick);
  return () => {
    window.removeEventListener("hashchange", onHash);
    window.removeEventListener("popstate", onHash);
    document.removeEventListener("click", onClick);
  };
}

function MetricIcon({ name }: { name: Metric["icon"] }) {
  if (name === "users") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8.2" r="2.7" />
        <path d="M6.8 18.2c.7-2.5 2.6-3.8 5.2-3.8s4.5 1.3 5.2 3.8" />
      </svg>
    );
  }

  if (name === "roles") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8.2" cy="9" r="2.1" />
        <circle cx="15.8" cy="9" r="2.1" />
        <path d="M4.4 17.6c.45-1.9 1.9-2.9 3.8-2.9s3.35 1 3.8 2.9" />
        <path d="M12 17.6c.45-1.9 1.9-2.9 3.8-2.9s3.35 1 3.8 2.9" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.8 13.4 8.8h5.2l-4.2 3.1 1.6 5.1L12 14.2 8 17l1.6-5.1L5.4 8.8h5.2Z" />
    </svg>
  );
}

export function WorkSection() {
  const active = useSyncExternalStore(subscribeToProject, projectFromHash, projectOnServer);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const project = projects.find((item) => item.id === active) ?? projects[0];

  const select = (id: ProjectId) => {
    const next = `#${id}`;
    if (window.location.hash !== next) window.history.pushState(null, "", next);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = projects.length - 1;
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;
    event.preventDefault();
    select(projects[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <section id="work" aria-labelledby="work-title">
      <div className="sec sec-flush-top work-sec">
        <header className="sec-head">
          <p className="label">04 — Selected work</p>
          <h2 className="display reveal" id="work-title">
            Selected work.
          </h2>
          <p className="lead">
            Crayon is an AI-powered recruitment platform serving 175K+ users. The Bridge is a privacy-first AI
            reflection platform. Brain Inventory is earlier product engineering.
          </p>
        </header>

        <div className="work-split">
          <div className="work-nav" role="tablist" aria-label="Selected projects" aria-orientation="vertical">
            {projects.map((item, index) => {
              const selected = item.id === project.id;
              return (
                <button
                  key={item.id}
                  ref={(node) => {
                    tabs.current[index] = node;
                  }}
                  id={item.id}
                  className="work-tab"
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="work-showcase"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(item.id)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                >
                  <span className="label">{item.index}</span>
                  <span className="work-tab-name">{item.name}</span>
                  <span className="work-tab-summary">{item.summary}</span>
                </button>
              );
            })}
          </div>

          <article
            className="work-showcase"
            id="work-showcase"
            role="tabpanel"
            aria-labelledby={project.id}
            tabIndex={0}
          >
            <div className="work-panel-in" key={project.id}>
            <div className="work-kicker">
              <div>
                <p className="label">{project.kicker}</p>
                <p className="work-role">{project.role}</p>
              </div>
              <p className="work-meta">{project.meta}</p>
            </div>

            <div className="work-main">
              <div className="work-copy">
                <h3>{project.title}</h3>
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {project.live ? (
                  <div className="work-actions">
                    <a className="btn work-btn" href={project.live} target="_blank" rel="noopener noreferrer">
                      View project
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12h12" />
                        <path d="M13 6.5 18.5 12 13 17.5" />
                      </svg>
                      <span className="sr"> (opens in a new tab)</span>
                    </a>
                    <a className="work-live" href={project.live} target="_blank" rel="noopener noreferrer">
                      Live site
                      <span aria-hidden="true">↗</span>
                      <span className="sr"> (opens in a new tab)</span>
                    </a>
                  </div>
                ) : null}
                {project.metrics ? (
                  <ul className="work-metrics">
                    {project.metrics.map((metric) => (
                      <li key={metric.label}>
                        <span className="work-metric-ico">
                          <MetricIcon name={metric.icon} />
                        </span>
                        <span>
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="work-shot-frame" style={{ "--shot": project.ratio } as CSSProperties}>
                <div className="work-shot">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 980px) 92vw, 34vw"
                    style={{ objectPosition: project.imagePosition }}
                  />
                </div>
              </div>
            </div>

            <div className="work-tech">
              <p className="label">Tech</p>
              <Hood label={`${project.name} technologies`} items={project.tech} />
            </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
