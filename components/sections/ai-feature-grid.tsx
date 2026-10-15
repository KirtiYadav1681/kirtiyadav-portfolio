"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import type { AiFeature } from "@/lib/content";

function FeatureIcon({ id }: { id: AiFeature["id"] }) {
  if (id === "jerry") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="6" y="3.5" width="12" height="17" rx="1.6" />
        <path d="M9 8.2h6" />
        <path d="M9 11.6h6" />
        <path d="M9 15h4" />
      </svg>
    );
  }

  if (id === "reggie") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5.5" y="3.5" width="13" height="17" rx="1.6" />
        <circle cx="12" cy="9.2" r="2" />
        <path d="M8.6 15.6c.55-1.55 1.7-2.3 3.4-2.3s2.85.75 3.4 2.3" />
      </svg>
    );
  }

  if (id === "search") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="5.25" />
        <path d="M15.2 15.2 19.2 19.2" />
      </svg>
    );
  }

  if (id === "interviews") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12h2.2" />
        <path d="M8.2 8.2v7.6" />
        <path d="M12.2 5.2v13.6" />
        <path d="M16.2 8.2v7.6" />
        <path d="M20.2 12H22" />
      </svg>
    );
  }

  if (id === "ats") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="7" rx="6.5" ry="2.6" />
        <path d="M5.5 7v5c0 1.45 2.9 2.6 6.5 2.6s6.5-1.15 6.5-2.6V7" />
        <path d="M5.5 12v5c0 1.45 2.9 2.6 6.5 2.6s6.5-1.15 6.5-2.6v-5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4.5" y="3.5" width="11" height="15" rx="1.5" />
      <path d="M7.5 8h5" />
      <path d="M7.5 11.2h5" />
      <path d="M14.2 15.2 16.3 17.4 20.2 13.2" />
    </svg>
  );
}

function useGridColumns() {
  const [columns, setColumns] = useState(3);

  useLayoutEffect(() => {
    const mobile = window.matchMedia("(max-width: 640px)");
    const tablet = window.matchMedia("(max-width: 980px)");
    const update = () => {
      if (mobile.matches) setColumns(1);
      else if (tablet.matches) setColumns(2);
      else setColumns(3);
    };
    update();
    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  return columns;
}

export function AiFeatureGrid({ features }: { features: readonly AiFeature[] }) {
  const columns = useGridColumns();
  const [openId, setOpenId] = useState<string | null>(features.find((feature) => feature.defaultOpen)?.id ?? null);

  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (features.some((feature) => feature.id === id)) setOpenId(id);
    };

    const onClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a[href^='#']") : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      const id = link.getAttribute("href")?.replace("#", "");
      if (id && features.some((feature) => feature.id === id)) setOpenId(id);
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", openFromHash);
      document.removeEventListener("click", onClick);
    };
  }, [features]);

  const selectedIndex = features.findIndex((feature) => feature.id === openId);
  const selected = selectedIndex >= 0 ? features[selectedIndex] : null;
  const rowEnd = selected ? Math.min(features.length - 1, Math.floor(selectedIndex / columns) * columns + columns - 1) : -1;

  return (
    <div className="feat-grid">
      {features.map((feature, index) => (
        <FeatureEntry
          key={feature.id}
          feature={feature}
          open={feature.id === openId}
          showPanel={index === rowEnd && selected !== null}
          selected={selected}
          onToggle={() => setOpenId((current) => (current === feature.id ? null : feature.id))}
        />
      ))}
    </div>
  );
}

function FeatureEntry({
  feature,
  open,
  showPanel,
  selected,
  onToggle,
}: {
  feature: AiFeature;
  open: boolean;
  showPanel: boolean;
  selected: AiFeature | null;
  onToggle: () => void;
}) {
  const panelId = `feat-detail-${feature.id}`;

  return (
    <>
      <button
        type="button"
        id={feature.id}
        className={open ? "feat-card is-open" : "feat-card"}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={onToggle}
      >
        <span className={`feat-ico feat-ico-${feature.id}`}>
          <FeatureIcon id={feature.id} />
        </span>
        <span className="feat-copy">
          <span className="label">{feature.index}</span>
          <span className="feat-name">{feature.name}</span>
          <span className="feat-kind">{feature.kind}</span>
        </span>
        <span className="feat-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M5 12h12" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </span>
      </button>
      {showPanel && selected ? <FeaturePanel feature={selected} panelId={`feat-detail-${selected.id}`} /> : null}
    </>
  );
}

function FeaturePanel({ feature, panelId }: { feature: AiFeature; panelId: string }) {
  return (
    <div className="feat-panel" id={panelId} role="region" aria-labelledby={feature.id}>
      <div className="feat-cols">
        <div>
          <h3>What it does</h3>
          {feature.does.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          <h3>My role</h3>
          {feature.role.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <p className="tech">{feature.tech}</p>
    </div>
  );
}
