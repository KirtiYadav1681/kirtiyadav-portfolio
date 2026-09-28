"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { ReactNode } from "react";

const spring = { stiffness: 260, damping: 26, mass: 0.35 };

type MagnetProps = {
  href: string;
  className?: string;
  children: ReactNode;
  download?: boolean;
};

export function Magnet({ href, className, children, download = false }: MagnetProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  const canPull = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <motion.a
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      download={download ? "" : undefined}
      onMouseMove={(event) => {
        if (!canPull()) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - (rect.left + rect.width / 2)) * 0.22);
        y.set((event.clientY - (rect.top + rect.height / 2)) * 0.3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}
