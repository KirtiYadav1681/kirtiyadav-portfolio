"use client";

import { experience } from "@/lib/content";
import { motion, useReducedMotion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

type ExperienceItem = (typeof experience)[number];

const ease = [0.16, 1, 0.3, 1] as const;
const revealViewport = { once: true, amount: 0.45 } as const;

export function ExperienceSection() {
  const streamRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(-1);
  const [progress, setProgress] = useState(false);
  const skip = reduce === true;

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
      <div className="exp-glow" aria-hidden="true" />
      <div className="sec">
        <div className="exp-board">
          <div className="exp-panel">
            <motion.p
              className="label exp-kicker"
              initial={skip ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.55, ease }}
            >
              05 — Experience
            </motion.p>
            <header className="exp-intro">
              <h2 className="exp-title" id="exp-title">
                <motion.span
                  className="exp-title-line"
                  initial={skip ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{ duration: 0.72, delay: 0.08, ease }}
                >
                  3+ years of
                </motion.span>
                <motion.span
                  className="exp-title-line exp-title-accent"
                  initial={skip ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{ duration: 0.72, delay: 0.18, ease }}
                >
                  building software.
                </motion.span>
              </h2>
              <motion.p
                className="exp-dek"
                initial={skip ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={revealViewport}
                transition={{ duration: 0.65, delay: 0.34, ease }}
              >
                A journey from computer science to building AI products used by 175K+ people.
              </motion.p>
            </header>
          </div>
          <div className="exp-stream" ref={streamRef} data-progress={progress ? "true" : undefined}>
            <div className="exp-rail" aria-hidden="true">
              <motion.span
                className="exp-rail-track"
                initial={skip ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, delay: 0.16, ease }}
                style={{ transformOrigin: "top center" }}
              />
              <span className="exp-rail-fill" />
            </div>
            <ol className="exp-list">
              {experience.map((item, index) => (
                <ExperienceEntry
                  key={item.year}
                  item={item}
                  index={index}
                  active={progress && active === index}
                  skip={skip}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceEntry({
  item,
  index,
  active,
  skip,
}: {
  item: ExperienceItem;
  index: number;
  active: boolean;
  skip: boolean;
}) {
  const delay = 0.22 + index * 0.12;

  return (
    <li className="exp-row" data-active={active ? "true" : undefined} tabIndex={0}>
      <div className="exp-node">
        <motion.span
          className="exp-dot"
          aria-hidden="true"
          initial={skip ? false : { opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={revealViewport}
          transition={{ duration: 0.45, delay, ease }}
        />
        <motion.div
          className="exp-when exp-reveal"
          initial={skip ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.55, delay, ease }}
        >
          <p className="exp-year">{item.year}</p>
          <p className="exp-dates">{item.dates}</p>
        </motion.div>
      </div>
      <motion.article
        className="exp-body exp-reveal"
        initial={skip ? false : { opacity: 0, x: 18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={revealViewport}
        transition={{ duration: 0.62, delay: delay + 0.04, ease }}
      >
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
      </motion.article>
    </li>
  );
}
