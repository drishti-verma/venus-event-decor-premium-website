"use client";

import { useEffect, useState } from "react";
import { navItems } from "../data";

function CalendarIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 10h18" />
      <rect x="3" y="5" width="18" height="16" rx="2" />
    </svg>
  );
}

export default function PageNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-locked", open);
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-locked");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="simple-nav">
      <a className="brand" href="/" aria-label="Venus Event & Decor home">
        <span>V</span>
        <div>
          <strong>Venus</strong>
          <small>Event & Decor</small>
        </div>
      </a>

      <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Page navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="/contact">
        <CalendarIcon />
        Book Event
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
