"use client";

import { CountUp } from "@/components/ui/count-up";
import { useState } from "react";

const steps = [
  {
    id: "requirement",
    index: "01",
    title: "From requirement to production.",
    body: "I take product requirements through implementation, integration, deployment, and production delivery.",
    icon: "file",
  },
  {
    id: "stack",
    index: "02",
    title: "Frontend and backend together.",
    body: "I work across React and TypeScript interfaces, Node.js services, REST APIs, authentication, application state, and data flows.",
    icon: "code",
  },
  {
    id: "ai",
    index: "03",
    title: "AI as part of the product.",
    body: "I integrate AI into real product workflows — from job-spec and CV generation to semantic search and realtime AI interviews.",
    icon: "spark",
  },
  {
    id: "production",
    index: "04",
    title: "Production matters.",
    body: "I work on performance, responsiveness, SEO, Core Web Vitals, debugging, and the issues that appear after a feature ships.",
    icon: "box",
  },
] as const;

type StepIconName = (typeof steps)[number]["icon"];

function StepIcon({ name }: { name: StepIconName }) {
  if (name === "file") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3.5h6.2L18.5 8.8V20.5H7V3.5Z" />
        <path d="M13.2 3.5V9H18.5" />
        <path d="M9.2 13h5.6" />
        <path d="M9.2 16.2h4.2" />
      </svg>
    );
  }

  if (name === "code") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8 7.5-4.5 4.5L8 16.5" />
        <path d="m16 7.5 4.5 4.5-4.5 4.5" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.2 13.35 8.05 18.2 9.4 13.35 10.75 12 15.6 10.65 10.75 5.8 9.4 10.65 8.05 12 3.2Z" />
        <path d="M17.6 14.2 18.25 16.3 20.35 16.95 18.25 17.6 17.6 19.7 16.95 17.6 14.85 16.95 16.95 16.3 17.6 14.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.4 20 7.8v8.4L12 20.6 4 16.2V7.8l8-4.4Z" />
      <path d="M12 12.2 20 7.8" />
      <path d="M12 12.2 4 7.8" />
      <path d="M12 12.2v8.4" />
    </svg>
  );
}

export function AboutSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="about" className="how-sec" aria-labelledby="about-title">
      <div className="sec">
        <div className="how-top">
          <header className="how-intro">
            <p className="label">07 — About</p>
            <h2 className="how-title" id="about-title">
              How I work.
            </h2>
            <p className="how-dek">Indore, India. From a requirement to a production release.</p>
          </header>

          <div className="how-role">
            <p className="how-role-title">AI Product & Senior Full Stack AI Engineer</p>
            <p className="how-role-meta">Crayon Technologies Pvt. Ltd. · Remote</p>
            <p className="how-role-meta">May 2025 – August 2026 · Indore, India</p>
          </div>

          <div className="how-metric">
            <p className="how-metric-num">
              <CountUp value={175} suffix="K+" />
            </p>
            <p className="how-metric-copy">Users on a production recruitment platform.</p>
          </div>
        </div>

        <div className="how-track">
          <div className="how-rail" aria-hidden="true">
            <span className="how-rail-line" />
            <span className="how-chev how-chev-a" />
            <span className="how-chev how-chev-b" />
            <span className="how-chev how-chev-c" />
          </div>
          <ol className="how-steps">
            {steps.map((step) => {
              const selected = active === step.id;
              return (
                <li key={step.id} className={selected ? "how-step is-on" : "how-step"}>
                  <button
                    type="button"
                    className="how-step-btn"
                    aria-pressed={selected}
                    onClick={() => setActive(step.id)}
                  >
                    <span className="how-index">{step.index}</span>
                    <span className="how-mark">
                      <StepIcon name={step.icon} />
                    </span>
                    <span className="how-copy">
                      <span className="how-step-title">{step.title}</span>
                      <span className="how-step-body">{step.body}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="how-close">
          <div className="how-quote-wrap">
            <span className="how-dash" aria-hidden="true" />
            <p className="how-quote">
              The feature is done when it is <span className="how-accent">in production</span>: the interface, the
              API, and <span className="how-accent">the AI inside it.</span>
            </p>
          </div>
          <ul className="how-phases" aria-label="From idea to real users">
            <li>Idea</li>
            <li>Implementation</li>
            <li>Deployment</li>
            <li>Real users</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
