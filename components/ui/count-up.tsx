"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
};

export function CountUp({ value, suffix = "" }: CountUpProps) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const full = `${value}${suffix}`;

  useEffect(() => {
    const node = valueRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / 1350);
          const eased = 1 - (1 - progress) ** 2;
          node.textContent = `${Math.round(value * eased)}${suffix}`;
          if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [suffix, value]);

  return (
    <span className="count">
      <span className="sr">{full}</span>
      <span className="count-sizer" aria-hidden="true">
        {full}
      </span>
      <span ref={valueRef} className="count-value" aria-hidden="true">
        {full}
      </span>
    </span>
  );
}
