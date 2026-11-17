"use client";

import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    const elements = document.querySelectorAll("main section[id], main section[id] .grid > div, #projects .work-row");
    elements.forEach((element) => {
      element.classList.add("scroll-reveal", "reveal-pending");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("reveal-pending"));
    };
  }, []);

  return null;
}
