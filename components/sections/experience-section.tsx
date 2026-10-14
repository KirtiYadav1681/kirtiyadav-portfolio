"use client";

import { experience } from "@/lib/content";
import { useLayoutEffect, useRef, useState } from "react";

type ExperienceItem = (typeof experience)[number];

export function ExperienceSection() {
  const streamRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);
  const [progress, setProgress] = useState(false);

  useLayoutEffect(() => {
    const stream = streamRef.current;
    if (!stream) return;

    const desktop = window.matchMedia("(min-width: 768px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const rail = stream.querySelector<HTMLElement>(".exp-rail");
      const dots = stream.querySelectorAll<HTMLElement>(".exp-dot");
      if (!rail || dots.length === 0) return;

      const streamBox = stream.getBoundingClientRect();
      const first = dots[0].getBoundingClientRect();
      const last = dots[dots.length - 1].getBoundingClientRect();
      const top = first.top + first.height / 2 - streamBox.top;
      const height = last.top + last.height / 2 - streamBox.top - top;
      const left = first.left + first.width / 2 - streamBox.left;

      const track = desktop.matches && !reduceMotion.matches;
      let nextActive = -1;
      let fill = 1;

      if (track) {
        const focus = window.innerHeight * 0.42;
        dots.forEach((dot, index) => {
          const rect = dot.getBoundingClientRect();
          if (rect.top + rect.height / 2 <= focus) nextActive = index;
        });
        const span = last.top + last.height / 2 - (first.top + first.height / 2);
        fill = span > 1 ? Math.min(1, Math.max(0, (focus - (first.top + first.height / 2)) / span)) : 0;
      }

      rail.style.top = `${top}px`;
      rail.style.height = `${Math.max(height, 0)}px`;
      rail.style.left = `${left}px`;
      rail.style.bottom = "auto";
      stream.style.setProperty("--exp-fill", fill.toFixed(4));
      setProgress((current) => (current === track ? current : track));
      setActive((current) => (current === nextActive ? current : nextActive));
    };

    const request = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    const observer = new ResizeObserver(request);
    observer.observe(stream);
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    desktop.addEventListener("change", request);
    reduceMotion.addEventListener("change", request);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      desktop.removeEventListener("change", request);
      reduceMotion.removeEventListener("change", request);
    };
  }, []);

  return (
    <section id="experience" className="exp-sec" aria-labelledby="exp-title">
      <div className="sec">
        <div className="exp-board">
          <p className="label exp-kicker">05 — Experience</p>
          <header className="exp-intro">
            <h2 className="exp-title" id="exp-title">
              <span>3+ years </span>
              <span>building </span>
              <span>software.</span>
            </h2>
            <p className="exp-dek">
              A journey from computer science to building AI products used by 175K+ people.
            </p>
          </header>
          <div className="exp-stream" ref={streamRef} data-progress={progress ? "true" : undefined}>
            <div className="exp-rail" aria-hidden="true">
              <span className="exp-rail-track" />
              <span className="exp-rail-fill" />
            </div>
            <ol className="exp-list">
              {experience.map((item, index) => (
                <ExperienceEntry key={item.year} item={item} active={progress && active === index} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceEntry({ item, active }: { item: ExperienceItem; active: boolean }) {
  return (
    <li className="exp-row" data-active={active ? "true" : undefined}>
      <div className="exp-node">
        <span className="exp-dot" aria-hidden="true" />
        <div className="exp-when exp-reveal">
          <p className="exp-year">{item.year}</p>
          <p className="exp-dates">{item.dates}</p>
        </div>
      </div>
      <article className="exp-body exp-reveal">
        <div className="exp-copy">
          <h3>{item.title}</h3>
          <p className="exp-role">{item.role}</p>
          {"points" in item ? (
            <ul className="exp-points">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </div>
        <span className="exp-arrow" aria-hidden="true">
          <svg viewBox="0 0 16 16" width="15" height="15">
            <path
              d="M3.2 8h9.1M8.85 4.2 12.7 8l-3.85 3.8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </article>
    </li>
  );
}
