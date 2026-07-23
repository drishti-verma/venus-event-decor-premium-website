"use client";

import { useEffect, useMemo, useState } from "react";

function GalleryIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="10" />
      <path d="m10 8 6 4-6 4V8Z" />
    </svg>
  );
}

export default function GalleryRoutePreview({ items, instagramUrl }) {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");

  const filters = useMemo(() => ["All", ...Array.from(new Set(items.map((item) => item.category)))], [items]);
  const visibleItems = useMemo(
    () => (filter === "All" ? items : items.filter((item) => item.category === filter)),
    [filter, items]
  );

  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <section className="route-gallery-section" aria-label="Gallery image previews">
      <div className="route-gallery-toolbar">
        <div>
          <p className="eyebrow">Click any image</p>
          <h2>Detailed previews for every decor moment</h2>
          <p>
            Browse a larger sample gallery across weddings, receptions, rituals, corporate events and intimate
            celebrations.
          </p>
        </div>
        <div className="route-gallery-filters" role="tablist" aria-label="Gallery categories">
          {filters.map((category) => (
            <button
              type="button"
              key={category}
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
              role="tab"
              aria-selected={filter === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="route-gallery-grid">
        {visibleItems.map((item, index) => (
          <button
            type="button"
            className={`route-gallery-card ${index % 9 === 0 ? "wide" : ""}`}
            key={item.title}
            onClick={() => setActive(item)}
            aria-label={`Preview ${item.title}`}
          >
            <img src={item.image} alt={`${item.title} gallery preview`} />
            <span className="route-gallery-card-copy">
              <span>{item.category}</span>
              <strong>{item.title}</strong>
              <small>{item.caption}</small>
              <em>
                <GalleryIcon />
                Preview
              </em>
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div className="lightbox route-gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${active.title} preview`}>
          <button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Close preview">
            Close
          </button>
          <img src={active.image} alt={`${active.title} expanded gallery view`} />
          <div className="route-gallery-lightbox-copy">
            <p className="eyebrow">{active.category}</p>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <a className="button button-gold" href={instagramUrl} target="_blank" rel="noreferrer">
              View Instagram
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
}
