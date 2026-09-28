"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

const spring = { stiffness: 320, damping: 32, mass: 0.4 };

export function CursorDot() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      cursor.classList.add("on");
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target;
      const hot = target instanceof Element && Boolean(target.closest("a, button, summary"));
      cursor.classList.toggle("hot", hot);
    };

    const sync = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      if (!fine.matches || reduce.matches) {
        cursor.classList.remove("on", "hot");
        return;
      }
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseover", onOver);
    };

    sync();
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, [x, y]);

  return (
    <motion.div className="cursor" aria-hidden="true" style={{ x: springX, y: springY }}>
      <span />
    </motion.div>
  );
}
