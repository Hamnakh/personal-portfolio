"use client";

import { useEffect, useRef, useState } from "react";

import "./mobile-navigation.css";

const sections = ["About", "Services", "Experience", "Projects", "Contact"];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 768px)");
    function resize() { if (desktop.matches) setOpen(false); }
    document.addEventListener("pointerdown", dismiss);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <nav
      ref={container}
      aria-label="Mobile navigation"
      className="mobile-nav-navigation"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <button ref={toggle} type="button" className="mobile-nav-toggle" aria-expanded={open} aria-controls="mobile-navigation-links" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      <ul id="mobile-navigation-links" inert={!open} aria-hidden={!open} data-open={open} className="mobile-nav-panel">
        {sections.map((section) => (
          <li key={section}><a href={`#${section.toLowerCase()}`} onClick={() => {
            setOpen(false);
            const destination = document.getElementById(section.toLowerCase());
            destination?.setAttribute("tabindex", "-1");
            destination?.focus({ preventScroll: true });
          }}>{section}<span aria-hidden="true">&#8599;</span></a></li>
        ))}
      </ul>
    </nav>
  );
}
