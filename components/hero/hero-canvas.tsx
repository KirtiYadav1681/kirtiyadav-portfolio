"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

const firm = { stiffness: 150, damping: 24, mass: 0.35 };

export function HeroCanvas({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.965]);

  const proofTargetX = useMotionValue(0);
  const proofTargetY = useMotionValue(0);
  const proofX = useSpring(proofTargetX, firm);
  const proofY = useSpring(proofTargetY, firm);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const proof = canvas.querySelector<HTMLElement>(".proof-in");
    if (!proof) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 1101px)");

    const apply = (x: number, y: number) => {
      proof.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const unsubscribers = [
      proofX.on("change", (x) => apply(x, proofY.get())),
      proofY.on("change", (y) => apply(proofX.get(), y)),
    ];

    const onMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dx = (event.clientX - rect.left) / rect.width - 0.5;
      const dy = (event.clientY - rect.top) / rect.height - 0.5;
      proofTargetX.set(dx * 10);
      proofTargetY.set(dy * 8);
    };

    const reset = () => {
      proofTargetX.set(0);
      proofTargetY.set(0);
    };

    const sync = () => {
      canvas.removeEventListener("mousemove", onMove);
      if (!fine.matches || reduced.matches || !wide.matches) {
        reset();
        return;
      }
      canvas.addEventListener("mousemove", onMove);
    };

    sync();
    fine.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    wide.addEventListener("change", sync);

    return () => {
      canvas.removeEventListener("mousemove", onMove);
      fine.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      wide.removeEventListener("change", sync);
      unsubscribers.forEach((unsubscribe) => unsubscribe());
      proof.style.transform = "";
    };
  }, [proofTargetX, proofTargetY, proofX, proofY]);

  return (
    <motion.div ref={ref} className="hero-canvas" style={{ scale }}>
      {children}
    </motion.div>
  );
}
