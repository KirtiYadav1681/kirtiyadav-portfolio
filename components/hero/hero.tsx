import Image from "next/image";
import { HeroCanvas } from "@/components/hero/hero-canvas";
import { CountUp } from "@/components/ui/count-up";
import { site } from "@/lib/site";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="4.5" width="14" height="5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="5" y="14.5" width="14" height="5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 7h.01M8 17h.01" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.5 13.4 9 19 10.5 13.4 12 12 17.5 10.6 12 5 10.5 10.6 9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="9" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="10" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.8 17.5c.6-2.2 2.3-3.3 4.2-3.3s3.6 1.1 4.2 3.3M13.2 14.4c1.5-.2 3 .5 3.8 2.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 3.5 6.5 13h5l-.8 7.5L18 10h-5.2L13 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.5s5.2-4.6 5.2-9a5.2 5.2 0 1 0-10.4 0c0 4.4 5.2 9 5.2 9Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="11.4" r="1.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function CornerIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M5 11 11 5M7 5h4v4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

const panels = [
  {
    key: "frontend",
    title: "Frontend",
    lines: ["React · Next.js", "TypeScript"],
    icon: <CodeIcon />,
    corner: false,
  },
  {
    key: "backend",
    title: "Backend",
    lines: ["Node.js · Express.js", "REST APIs"],
    icon: <ServerIcon />,
    corner: true,
  },
  {
    key: "ai",
    title: "AI Systems",
    lines: ["OpenAI · Realtime", "AI Workflows"],
    icon: <SparkIcon />,
    corner: true,
  },
  {
    key: "users",
    title: "Real Users",
    lines: ["175K+", "Product Impact"],
    icon: <UsersIcon />,
    corner: true,
  },
] as const;

function PortraitFrame() {
  return (
    <svg className="hero-frame" viewBox="0 0 520 600" aria-hidden="true">
      <defs>
        <linearGradient id="hero-frame-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#efe7ff" />
          <stop offset="48%" stopColor="#9eb4ff" />
          <stop offset="100%" stopColor="#c9b0ff" />
        </linearGradient>
      </defs>
      <ellipse cx="262" cy="300" rx="176" ry="236" fill="none" stroke="url(#hero-frame-grad)" strokeWidth="1.1" opacity="0.45" />
      <ellipse
        className="hero-frame-travel"
        cx="258"
        cy="292"
        rx="198"
        ry="220"
        fill="none"
        stroke="url(#hero-frame-grad)"
        strokeWidth="1.7"
        transform="rotate(-16 258 292)"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <HeroCanvas>
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="label hero-kicker">Full-Stack AI Engineer</p>
            <h1 className="hero-title">
              <span className="sr">{site.name}</span>
              <span className="hero-line hero-line-1">Full-Stack</span>
              <span className="hero-line hero-line-2">
                <span className="hero-ai">AI</span> Engineer
              </span>
            </h1>
            <p className="hero-dek">{site.dek}</p>
            <p className="hero-position">Ideas · Product · AI Systems · Real Users</p>
            <div className="hero-cta">
              <a href="#work" className="hero-btn hero-btn-primary">
                See the work
                <ArrowIcon />
              </a>
              <a href="#contact" className="hero-btn hero-btn-ghost">
                Get in touch
              </a>
              <a href={site.resumes.fullStack.href} className="hero-btn hero-btn-violet" download="">
                Download resume
              </a>
            </div>
            <p className="hero-resume-alt">
              <a href={site.resumes.ai.href} download="">
                {site.resumes.ai.label}
              </a>
            </p>
          </div>

          <div className="hero-visual">
            <PortraitFrame />
            <figure className="hero-portrait">
              <Image
                className="hero-portrait-img"
                src="/images/KirtiYadav.png"
                alt="Portrait of Kirti Yadav"
                fill
                preload
                sizes="(max-width: 860px) 86vw, 42vw"
              />
            </figure>
            <ul className="hero-panels">
              {panels.map((panel) => (
                <li key={panel.key} className={`hero-panel hero-panel-${panel.key}`}>
                  <span className="hero-panel-icon">{panel.icon}</span>
                  {panel.corner ? (
                    <span className="hero-panel-corner">
                      <CornerIcon />
                    </span>
                  ) : null}
                  <p className="hero-panel-title">{panel.title}</p>
                  <p className="hero-panel-meta">
                    {panel.lines[0]}
                    <br />
                    {panel.lines[1]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="hero-metrics" aria-label="At a glance">
          <li className="hero-metric">
            <span className="hero-metric-icon">
              <UsersIcon />
            </span>
            <p>
              <span className="hero-metric-value">
                <CountUp value={175} suffix="K+" />
              </span>
              <span className="hero-metric-label">users</span>
            </p>
          </li>
          <li className="hero-metric-sep" aria-hidden="true" />
          <li className="hero-metric">
            <span className="hero-metric-icon">
              <BoltIcon />
            </span>
            <p>
              <span className="hero-metric-value">3+</span>
              <span className="hero-metric-label">years</span>
            </p>
          </li>
          <li className="hero-metric-sep" aria-hidden="true" />
          <li className="hero-metric hero-metric-place">
            <span className="hero-metric-icon">
              <PinIcon />
            </span>
            <p>
              <span className="hero-metric-value">{site.location}</span>
            </p>
          </li>
        </ul>
      </HeroCanvas>
    </section>
  );
}
