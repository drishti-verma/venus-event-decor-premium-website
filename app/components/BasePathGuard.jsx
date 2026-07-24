"use client";

import { useEffect } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function applyBasePath(element) {
  if (!basePath || !(element instanceof Element)) return;

  const links = element.matches?.("a[href^='/']")
    ? [element]
    : Array.from(element.querySelectorAll?.("a[href^='/']") || []);

  for (const link of links) {
    const href = link.getAttribute("href");
    if (!href || href === basePath || href.startsWith(`${basePath}/`)) continue;
    link.setAttribute("href", `${basePath}${href}`);
  }
}

export default function BasePathGuard() {
  useEffect(() => {
    if (!basePath) return undefined;

    applyBasePath(document.documentElement);

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) applyBasePath(node);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
