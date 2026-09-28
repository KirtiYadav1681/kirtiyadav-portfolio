"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a[href], button, summary, label, input, textarea, select, [role='button'], [role='link']";

/** Higher values catch up faster. 78 stays close without a dragged trail. */
const RING_RESPONSE = 78;
const MAX_STRETCH = 0.15;

function place(element: HTMLElement, x: number, y: number) {
  element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
}

function placeStretched(element: HTMLElement, x: number, y: number, stretch: number, angle: number) {
  element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${angle}rad) scale(${stretch}, 1)`;
}

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const core = coreRef.current;
    const ring = ringRef.current;
    if (!root || !core || !ring) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const pointer = { x: 0, y: 0, seen: false };
    const ringPos = { x: 0, y: 0 };
    let hovering = false;
    let frame = 0;
    let lastTime = 0;
    let enabled = false;
    let angle = 0;

    const setHot = (target: EventTarget | null) => {
      const hot = target instanceof Element && Boolean(target.closest(INTERACTIVE));
      if (hot === hovering) return;
      hovering = hot;
      root.classList.toggle("is-hot", hot);
    };

    const show = () => {
      root.classList.add("is-on");
      document.documentElement.classList.add("has-custom-cursor");
    };

    const hide = () => {
      pointer.seen = false;
      hovering = false;
      root.classList.remove("is-on", "is-hot", "is-pulse");
      document.documentElement.classList.remove("has-custom-cursor");
      ring.style.removeProperty("--ring-fade");
    };

    const drawRing = (x: number, y: number, stretch: number) => {
      if (stretch < 1.02) {
        place(ring, x, y);
        ring.style.setProperty("--ring-fade", "1");
        return;
      }
      placeStretched(ring, x, y, stretch, angle);
      const fade = 1 - ((stretch - 1) / MAX_STRETCH) * 0.14;
      ring.style.setProperty("--ring-fade", fade.toFixed(3));
    };

    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
    };

    const tick = (now: number) => {
      frame = 0;
      if (!enabled || reduce.matches) return;

      const dt = lastTime ? Math.min(32, now - lastTime) : 16;
      lastTime = now;
      const t = 1 - Math.exp((-RING_RESPONSE * dt) / 1000);
      ringPos.x += (pointer.x - ringPos.x) * t;
      ringPos.y += (pointer.y - ringPos.y) * t;

      const dx = pointer.x - ringPos.x;
      const dy = pointer.y - ringPos.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 0.8) angle = Math.atan2(dy, dx);
      const stretch = 1 + Math.min(MAX_STRETCH, dist / 90);

      if (dist < 0.2) {
        ringPos.x = pointer.x;
        ringPos.y = pointer.y;
        drawRing(ringPos.x, ringPos.y, 1);
        lastTime = 0;
        return;
      }

      drawRing(ringPos.x, ringPos.y, stretch);
      frame = requestAnimationFrame(tick);
    };

    const followRing = () => {
      if (reduce.matches) {
        ringPos.x = pointer.x;
        ringPos.y = pointer.y;
        place(ring, ringPos.x, ringPos.y);
        ring.style.setProperty("--ring-fade", "1");
        return;
      }
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      if (!enabled || event.pointerType === "touch") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      place(core, pointer.x, pointer.y);
      if (!pointer.seen) {
        pointer.seen = true;
        ringPos.x = pointer.x;
        ringPos.y = pointer.y;
        place(ring, ringPos.x, ringPos.y);
        show();
      }
      setHot(event.target);
      followRing();
    };

    const onOver = (event: PointerEvent) => {
      if (!enabled || event.pointerType === "touch") return;
      setHot(event.target);
    };

    const onDown = (event: PointerEvent) => {
      if (!enabled || !pointer.seen || reduce.matches || event.pointerType === "touch") return;
      root.classList.remove("is-pulse");
      requestAnimationFrame(() => {
        if (!enabled || reduce.matches) return;
        root.classList.add("is-pulse");
      });
    };

    const onPulseEnd = (event: AnimationEvent) => {
      if (event.animationName !== "cursor-pulse") return;
      root.classList.remove("is-pulse");
    };

    const onLeave = (event: MouseEvent) => {
      if (event.relatedTarget) return;
      hide();
      stop();
    };

    const onScroll = () => {
      if (!enabled || !pointer.seen) return;
      setHot(document.elementFromPoint(pointer.x, pointer.y));
    };

    const sync = () => {
      enabled = fine.matches;
      stop();
      if (!enabled) {
        hide();
        return;
      }
      if (reduce.matches) {
        root.classList.remove("is-pulse");
        if (pointer.seen) {
          ringPos.x = pointer.x;
          ringPos.y = pointer.y;
          place(ring, ringPos.x, ringPos.y);
          ring.style.setProperty("--ring-fade", "1");
        }
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    root.addEventListener("animationend", onPulseEnd);
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    sync();

    return () => {
      stop();
      hide();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      root.removeEventListener("animationend", onPulseEnd);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll, { capture: true });
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div ref={rootRef} className="custom-cursor" aria-hidden="true">
      <div ref={ringRef} className="custom-cursor-ring">
        <span className="custom-cursor-ring-hover">
          <span className="custom-cursor-ring-stroke" />
        </span>
      </div>
      <div ref={coreRef} className="custom-cursor-core">
        <span />
      </div>
    </div>
  );
}
