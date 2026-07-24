"use client";

import { useEffect } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const fallbackImage = `${basePath}/image-fallback.svg`;

function prefixPath(value) {
  if (!basePath || !value || !value.startsWith("/")) return value;
  if (value === basePath || value.startsWith(`${basePath}/`)) return value;
  return `${basePath}${value}`;
}

function prefixSrcSet(value) {
  if (!value) return value;

  return value
    .split(",")
    .map((candidate) => {
      const [url, ...descriptor] = candidate.trim().split(/\s+/);
      return [prefixPath(url), ...descriptor].join(" ");
    })
    .join(", ");
}

function protectImage(image) {
  if (!(image instanceof HTMLImageElement)) return;

  const source = image.getAttribute("src");
  const srcSet = image.getAttribute("srcset");

  if (source) image.setAttribute("src", prefixPath(source));
  if (srcSet) image.setAttribute("srcset", prefixSrcSet(srcSet));

  if (!image.dataset.fallbackProtected) {
    image.dataset.fallbackProtected = "true";
    image.addEventListener(
      "error",
      () => {
        if (image.dataset.fallbackApplied === "true") return;
        image.dataset.fallbackApplied = "true";
        image.removeAttribute("srcset");
        image.src = fallbackImage;
      },
      { once: false }
    );
  }
}

function applyBasePath(element) {
  if (!(element instanceof Element)) return;

  const elements = [element, ...Array.from(element.querySelectorAll?.("a, img, source, video") || [])];

  for (const current of elements) {
    if (current instanceof HTMLAnchorElement) {
      const href = current.getAttribute("href");
      if (href) current.setAttribute("href", prefixPath(href));
    }

    if (current instanceof HTMLImageElement) protectImage(current);

    if (current instanceof HTMLSourceElement) {
      const src = current.getAttribute("src");
      const srcSet = current.getAttribute("srcset");
      if (src) current.setAttribute("src", prefixPath(src));
      if (srcSet) current.setAttribute("srcset", prefixSrcSet(srcSet));
    }

    if (current instanceof HTMLVideoElement) {
      const poster = current.getAttribute("poster");
      if (poster) current.setAttribute("poster", prefixPath(poster));
    }
  }
}

export default function BasePathGuard() {
  useEffect(() => {
    applyBasePath(document.documentElement);

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof Element) applyBasePath(node);
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
