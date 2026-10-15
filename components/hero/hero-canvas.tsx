"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type PointerEvent, type ReactNode } from "react";

export function HeroCanvas({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -42]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.55]);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const yPos = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--hx", x.toFixed(3));
    event.currentTarget.style.setProperty("--hy", yPos.toFixed(3));
  };

  const onPointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--hx", "0");
    event.currentTarget.style.setProperty("--hy", "0");
  };

  return (
    <div ref={ref} className="hero-canvas" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <motion.div className="hero-atmosphere" style={{ y, opacity }} aria-hidden="true">
        <div className="hero-atmosphere-in">
        <div className="hero-glow hero-glow-violet">
          <span />
        </div>
        <div className="hero-glow hero-glow-blue">
          <span />
        </div>
        <svg className="hero-orbits" viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="hero-orbit-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c9b6ff" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#8eabff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#c9b6ff" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            className="hero-orbit-path"
            d="M-80 250C140 40 360 20 560 180s340 250 620 80"
            fill="none"
            stroke="url(#hero-orbit-stroke)"
          />
          <path
            className="hero-orbit-path hero-orbit-path-b"
            d="M-40 620C220 470 430 560 690 390s320-250 560-40"
            fill="none"
            stroke="url(#hero-orbit-stroke)"
          />
          <circle className="hero-spark hero-spark-a" r="2.2" />
          <circle className="hero-spark hero-spark-b" r="1.6" />
        </svg>
        </div>
      </motion.div>
      {children}
    </div>
  );
}
