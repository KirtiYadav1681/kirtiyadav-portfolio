"use client";

import { navItems, site } from "@/lib/site";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function NavAnchors({ current, className }: { current: string; className?: string }) {
  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          className={className}
          href={item.href}
          data-nav
          aria-current={current === item.href ? "page" : undefined}
        >
          {item.label}
        </a>
      ))}
      <a className={className} href={site.resumes.fullStack.href} download="">
        {className ? "Resume" : site.resumes.fullStack.shortLabel}
      </a>
      <a
        className={className}
        href="#contact"
        data-nav
        aria-current={current === "#contact" ? "page" : undefined}
      >
        Contact
      </a>
    </>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");
  const openRef = useRef(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useLayoutEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;
    const previousPadding = body.style.paddingRight;
    const scrollbarGap = window.innerWidth - root.clientWidth;

    root.classList.add("menu-open");
    body.style.top = `-${scrollY}px`;
    if (scrollbarGap > 0) body.style.paddingRight = `${scrollbarGap}px`;

    const allowMenuScroll = (target: EventTarget | null) => {
      const menu = menuRef.current;
      return (
        menu instanceof HTMLElement &&
        target instanceof Node &&
        menu.contains(target) &&
        menu.scrollHeight > menu.clientHeight + 1
      );
    };

    const blockBackgroundScroll = (event: Event) => {
      if (allowMenuScroll(event.target)) return;
      event.preventDefault();
    };

    document.addEventListener("touchmove", blockBackgroundScroll, { passive: false });
    document.addEventListener("wheel", blockBackgroundScroll, { passive: false });

    return () => {
      root.classList.remove("menu-open");
      body.style.top = "";
      body.style.paddingRight = previousPadding;
      document.removeEventListener("touchmove", blockBackgroundScroll);
      document.removeEventListener("wheel", blockBackgroundScroll);
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      root.style.scrollBehavior = previousBehavior;
    };
  }, [open]);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLDetailsElement>("details.ai-item"));
    const onToggle = (event: Event) => {
      const item = event.currentTarget;
      if (!(item instanceof HTMLDetailsElement) || !item.open) return;
      items.forEach((other) => {
        if (other !== item) other.open = false;
      });
    };
    items.forEach((item) => item.addEventListener("toggle", onToggle));

    const hash = window.location.hash;
    if (hash.length > 1) {
      const target = document.querySelector(hash);
      if (target instanceof HTMLDetailsElement) target.open = true;
    }

    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a[href^='#']") : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      const id = link.getAttribute("href");
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!(target instanceof HTMLElement)) return;
      event.preventDefault();
      if (target instanceof HTMLDetailsElement) target.open = true;
      const menuWasOpen = openRef.current;
      setOpen(false);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
      const go = () => {
        if (id === "#top") {
          window.scrollTo({ top: 0, left: 0, behavior });
          return;
        }
        target.scrollIntoView({ behavior, block: "start" });
      };
      if (menuWasOpen) window.setTimeout(go, 30);
      else go();
      window.history.pushState(null, "", id);
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !openRef.current) return;
      setOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      items.forEach((item) => item.removeEventListener("toggle", onToggle));
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("main section[id], .project[id]");
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = `#${entry.target.id}`;
          setCurrent(id);
          document.querySelectorAll(".work-index a").forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === id);
          });
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 },
    );
    nodes.forEach((node) => spy.observe(node));
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    if (open) {
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
      menuRef.current?.querySelector("a")?.focus();
    } else {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    }
    return () => {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="nav" id="top">
        <a className="brand" href="#top">
          {site.name}
        </a>
        <nav className="nav-links" aria-label="Primary">
          <NavAnchors current={current} />
        </nav>
        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => {
            setOpen((value) => !value);
          }}
        >
          <span className="burger" aria-hidden="true" />
          <b>{open ? "Close" : "Menu"}</b>
        </button>
      </header>
      <nav
        ref={menuRef}
        className="menu"
        id="menu"
        hidden={!open}
        aria-label="Mobile"
        onClick={(event) => {
          const link = event.target instanceof Element ? event.target.closest("a") : null;
          if (!(link instanceof HTMLAnchorElement)) return;
          if (link.getAttribute("href")?.startsWith("#")) return;
          closeMenu();
        }}
      >
        <NavAnchors current={current} className="mlink" />
        <div className="menu-foot">
          <span className="label">Full-stack AI engineer</span>
          <a href={site.resumes.ai.href} download="">
            {site.resumes.ai.label}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </nav>
    </>
  );
}
