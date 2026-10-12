"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { buildDestinations, buildHub, buildStages } from "@/lib/content";

type Point = { x: number; y: number };
type Wire = { d: string; end: Point };

const DOTS = ["#d7ccff", "#b9c8ff", "#9eb6ff"] as const;

function DestinationIcon({ id }: { id: (typeof buildDestinations)[number]["id"] }) {
  if (id === "frontend") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
        <path d="M3.5 9.25h17" />
        <path d="M8 13h3.5" />
        <path d="M8 16.25h8" />
      </svg>
    );
  }

  if (id === "backend") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="3.5" width="16" height="6.25" rx="1.6" />
        <rect x="4" y="14.25" width="16" height="6.25" rx="1.6" />
        <circle className="sys-ico-dot" cx="8" cy="6.6" r="1.05" />
        <circle className="sys-ico-dot" cx="8" cy="17.35" r="1.05" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.2 13.35 8.05 18.2 9.4 13.35 10.75 12 15.6 10.65 10.75 5.8 9.4 10.65 8.05 12 3.2Z" />
      <path d="M17.6 14.2 18.25 16.3 20.35 16.95 18.25 17.6 17.6 19.7 16.95 17.6 14.85 16.95 16.95 16.3 17.6 14.2Z" />
    </svg>
  );
}

function round(value: number) {
  return Math.round(value * 10) / 10;
}

export function BuildSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLElement | null>>([]);
  const signatureRef = useRef("");
  const [wires, setWires] = useState<Wire[]>([]);
  const [hubDot, setHubDot] = useState<Point | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const root = mapRef.current;
    if (!root) return;

    const measure = () => {
      const box = root.getBoundingClientRect();
      const hub = hubRef.current?.getBoundingClientRect();
      const nodes = nodeRefs.current
        .map((node) => node?.getBoundingClientRect())
        .filter((rect): rect is DOMRect => Boolean(rect));

      if (!hub || nodes.length !== buildDestinations.length || box.width < 2 || box.height < 2) return;

      const stacked = nodes[0].top >= hub.bottom - 6;
      const pad = 7;
      const start: Point = stacked
        ? {
            x: round(hub.left + hub.width / 2 - box.left),
            y: round(hub.bottom - box.top + pad),
          }
        : {
            x: round(hub.right - box.left + pad),
            y: round(hub.top + hub.height / 2 - box.top),
          };

      const next = nodes.map((node) => {
        const end: Point = {
          x: round(node.left - box.left - pad),
          y: round(node.top + node.height / 2 - box.top),
        };

        if (stacked) {
          const dy = Math.max(18, end.y - start.y);
          const toward = end.x >= start.x ? start.x : round(Math.max(10, end.x - 4));
          const arrive = end.x >= start.x ? round(end.x - Math.min(32, (end.x - start.x) * 0.45)) : toward;
          const d = `M ${start.x} ${start.y} C ${toward} ${round(start.y + dy * 0.55)}, ${arrive} ${end.y}, ${end.x} ${end.y}`;
          return { d, end };
        }

        const dx = Math.max(32, end.x - start.x);
        const d = `M ${start.x} ${start.y} C ${round(start.x + dx * 0.55)} ${start.y}, ${round(end.x - dx * 0.42)} ${end.y}, ${end.x} ${end.y}`;
        return { d, end };
      });

      const signature = `${box.width}x${box.height}|${start.x},${start.y}|${next.map((wire) => wire.d).join(";")}`;
      if (signature === signatureRef.current) return;
      signatureRef.current = signature;
      setWires(next);
      setHubDot(start);
      setSize({ w: round(box.width), h: round(box.height) });
    };

    const observer = new ResizeObserver(measure);
    observer.observe(root);
    if (hubRef.current) observer.observe(hubRef.current);
    nodeRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });
    measure();

    let alive = true;
    document.fonts?.ready.then(() => {
      if (alive) measure();
    }).catch(() => undefined);
    window.addEventListener("resize", measure);

    return () => {
      alive = false;
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section id="build" aria-labelledby="build-title">
      <div className="sec build-sec">
        <p className="label">02 — What I build</p>
        <div className="build-mid">
          <div className="build-copy">
            <h2 className="display build-title reveal" id="build-title">
              Product engineering with AI.
            </h2>
            <p className="lead">Interface, backend, data and AI working together to deliver real features.</p>
            <span className="build-accent" aria-hidden="true" />
          </div>

          <div className="sys" ref={mapRef} role="group" aria-label="Product feature connected to frontend, backend, and AI">
            {size.w > 0 && (
              <svg className="sys-wires" aria-hidden="true" width={size.w} height={size.h} viewBox={`0 0 ${size.w} ${size.h}`}>
                {wires.map((wire, index) => (
                  <path key={buildDestinations[index].id} d={wire.d} />
                ))}
                {hubDot && <circle className="sys-dot sys-dot-hub" cx={hubDot.x} cy={hubDot.y} r="4.25" />}
                {wires.map((wire, index) => (
                  <circle
                    key={`${buildDestinations[index].id}-dot`}
                    className="sys-dot"
                    cx={wire.end.x}
                    cy={wire.end.y}
                    r="4.25"
                    fill={DOTS[index]}
                  />
                ))}
              </svg>
            )}

            <div className="sys-hub" ref={hubRef}>
              <p>{buildHub}</p>
            </div>

            <ul className="sys-nodes">
              {buildDestinations.map((node, index) => (
                <li
                  key={node.id}
                  className={`sys-node sys-node-${node.id}`}
                  ref={(element) => {
                    nodeRefs.current[index] = element;
                  }}
                >
                  <span className="sys-ico">
                    <DestinationIcon id={node.id} />
                  </span>
                  <p className="label">{node.label}</p>
                  <p className="sys-detail">{node.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="build-divider" />

        <div className="eng">
          <span className="eng-rail" aria-hidden="true" />
          {buildStages.slice(0, -1).map((stage, index) => (
            <span key={stage.index} className="eng-arrow" style={{ left: `${(index + 1) * 25}%` }} aria-hidden="true" />
          ))}
          <ol className="eng-track">
            {buildStages.map((stage) => (
              <li key={stage.index} className="eng-stage">
                <span className="eng-mark" aria-hidden="true" />
                <p className="label">{stage.index}</p>
                <p className="eng-detail">{stage.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
