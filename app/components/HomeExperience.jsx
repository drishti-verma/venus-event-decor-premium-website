"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  categories,
  contact,
  faqs,
  features,
  galleryItems,
  imageBank,
  navItems,
  portfolio,
  process,
  services,
  stats,
  testimonials,
} from "../data";

const categoryFilters = ["All", "Wedding", "Reception", "Haldi", "Corporate", "Theme Events", "Engagement"];

const heroSlides = [
  { label: "Luxury Wedding", image: imageBank.hero },
  { label: "Reception Styling", image: imageBank.reception },
  { label: "Floral Decor", image: imageBank.floral },
  { label: "Corporate Stage", image: imageBank.conference },
];

const iconPaths = {
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </>
  ),
  calendar: (
    <>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 10h18" />
      <rect x="3" y="5" width="18" height="16" rx="2" />
    </>
  ),
  briefcase: (
    <>
      <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 12h18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  flower: (
    <>
      <path d="M12 7.5c1.4-2.6 4.7-2.6 5.6-.4.9 2.2-1.4 4.5-4.1 3.7" />
      <path d="M12 7.5C10.6 4.9 7.3 4.9 6.4 7.1c-.9 2.2 1.4 4.5 4.1 3.7" />
      <path d="M12 16.5c1.4 2.6 4.7 2.6 5.6.4.9-2.2-1.4-4.5-4.1-3.7" />
      <path d="M12 16.5c-1.4 2.6-4.7 2.6-5.6.4-.9-2.2 1.4-4.5 4.1-3.7" />
      <circle cx="12" cy="12" r="2.2" />
    </>
  ),
  gift: (
    <>
      <path d="M20 12v8H4v-8" />
      <path d="M2 8h20v4H2z" />
      <path d="M12 8v12" />
      <path d="M12 8H8.5A2.5 2.5 0 1 1 11 5.5V8Z" />
      <path d="M12 8h3.5A2.5 2.5 0 1 0 13 5.5V8Z" />
    </>
  ),
  heart: (
    <>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    </>
  ),
  ring: (
    <>
      <path d="M9 5h6l-3 4-3-4Z" />
      <circle cx="12" cy="15" r="6" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m10 8 6 4-6 4V8Z" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 2l1.7 5.2L19 9l-5.3 1.8L12 16l-1.7-5.2L5 9l5.3-1.8L12 2Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      <path d="M5 16l.7 1.8L8 18.5l-2.3.7L5 21l-.7-1.8-2.3-.7 2.3-.7L5 16Z" />
    </>
  ),
  stage: (
    <>
      <path d="M4 19h16" />
      <path d="M6 19V8h12v11" />
      <path d="M8 8l4-4 4 4" />
      <path d="M8 12h8" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.9 19.1 1.4-1.4" />
      <path d="m17.7 6.3 1.4-1.4" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.8Z" />
      <path d="M8.8 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .5.1.6.5l.8 1.9c.1.3.1.5-.1.7l-.4.5c-.2.2-.3.4-.1.7.4.7.9 1.3 1.5 1.8.7.6 1.3.9 1.7 1 .3.1.5.1.7-.1l.7-.8c.2-.2.5-.3.8-.2l1.8.9c.4.2.5.4.5.6 0 .5-.3 1.2-.7 1.5-.5.4-1.3.7-2.3.5-1.2-.2-2.7-.8-4.5-2.4-1.6-1.4-2.7-3.1-3.1-4.3-.4-1.1-.1-1.9.2-2.4Z" />
    </>
  ),
};

function Icon({ name, className = "" }) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {iconPaths[name] || iconPaths.sparkle}
    </svg>
  );
}

function whatsappUrl(message = "Hello Venus Event & Decor, I would like to discuss an event.") {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;
    const duration = 1100;
    const start = performance.now();
    let frame = 0;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(100);
      setHidden(true);
      return undefined;
    }

    const timer = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(100, current + Math.ceil(Math.random() * 12));
        if (next === 100) {
          window.clearInterval(timer);
          window.setTimeout(() => setHidden(true), 420);
        }
        return next;
      });
    }, 90);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={`loader ${hidden ? "loader-hidden" : ""}`} aria-hidden={hidden}>
      <div className="loader-mark">V</div>
      <div className="loader-line" />
      <p>Venus Event & Decor</p>
      <span>{progress}%</span>
    </div>
  );
}

function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const updateAvailability = () => setEnabled(navigator.onLine && finePointer && !reducedMotion);
    updateAvailability();

    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("online", updateAvailability);
    window.addEventListener("offline", updateAvailability);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("online", updateAvailability);
      window.removeEventListener("offline", updateAvailability);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="cursor-glow"
      style={{ transform: `translate3d(${position.x - 140}px, ${position.y - 140}px, 0)` }}
    />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

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
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="/" aria-label="Venus Event & Decor home">
        <span>V</span>
        <div>
          <strong>Venus</strong>
          <small>Event & Decor</small>
        </div>
      </a>

      <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta magnetic" href="#contact">
        <Icon name="calendar" />
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

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-slideshow" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <img
            className={`hero-image ${index === activeSlide ? "is-active" : ""}`}
            key={slide.label}
            src={slide.image}
            alt=""
          />
        ))}
      </div>
      <div className="hero-noise" />
      <div className="hero-light hero-light-one" />
      <div className="hero-light hero-light-two" />
      <div className="hero-content reveal">
        <p className="eyebrow">Luxury event production house - Indore</p>
        <h1>
          We Create.
          <span>You Celebrate.</span>
        </h1>
        <p className="hero-subtitle">{contact.secondaryTagline}</p>
        <p className="hero-copy">
          Venus Event & Decor designs unforgettable weddings, celebrations, corporate productions and branded
          experiences with cinematic styling, refined lighting and calm on-ground execution in Indore and beyond.
        </p>
        <div className="hero-actions">
          <a className="button button-gold magnetic" href="#contact">
            <Icon name="calendar" />
            Book Consultation
          </a>
          <a className="button button-ghost" href="#portfolio">
            <Icon name="sparkle" />
            Explore Our Work
          </a>
          <a className="button button-text" href="#videos">
            <Icon name="play" />
            Watch Event Reel
          </a>
        </div>
      </div>
      <div className="hero-slide-controls" aria-label="Hero slideshow controls">
        {heroSlides.map((slide, index) => (
          <button
            type="button"
            key={slide.label}
            className={index === activeSlide ? "active" : ""}
            aria-label={`Show ${slide.label}`}
            onClick={() => setActiveSlide(index)}
          >
            <span />
            {slide.label}
          </button>
        ))}
      </div>
      <div className="hero-badge">
        <span>Premium Decor</span>
        <strong>Indore</strong>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <span />
      </a>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats-wrap" aria-label="Event design statistics">
      <div className="stats-grid">
        {stats.map((item) => (
          <article key={item.label}>
            <strong>
              <AnimatedCounter value={item.value} suffix={item.suffix} />
            </strong>
            <span>{item.label}</span>
            <small>{item.note}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="about-collage">
        <img src={imageBank.reception} alt="Elegant reception table decor" />
        <img src={imageBank.floral} alt="Premium floral decor detail" />
        <div className="collage-note">
          <span>Creative Direction</span>
          <strong>Luxury - Elegance - Perfection</strong>
        </div>
      </div>
      <div className="about-copy">
        <p className="eyebrow">About Venus Event & Decor</p>
        <h2>Designing celebrations that feel cinematic, personal and beautifully controlled.</h2>
        <p>
          Venus Event & Decor is positioned as a premium event decor studio and production partner for weddings,
          social celebrations and corporate experiences. Every concept is shaped through mood, movement, material,
          lighting and guest flow so the event feels complete from the first arrival to the final photograph.
        </p>
        <div className="values-grid">
          {["Creativity", "Execution", "Perfection", "Professional Team"].map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
        <a className="button button-ghost" href="/about">
          Discover Our Story
        </a>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <SectionHeading
        eyebrow="Our expertise"
        title="Premium decor and production services"
        text="Complete decor concepts for wedding rituals, corporate stages, theme environments and private celebrations."
      />
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-card-media">
              <img src={service.image} alt={`${service.title} inspiration`} />
            </div>
            <div className="service-card-body">
              <span className="icon-badge">
                <Icon name={service.icon} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a className="card-link" href="/services">
                Explore Service
                <Icon name="arrowRight" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section why">
      <SectionHeading
        eyebrow="Why choose Venus"
        title="A calm production partner for high-emotion days"
        text="The site positions Venus as creative, premium and operationally dependable without overclaiming awards or unverifiable facts."
      />
      <div className="feature-grid">
        {features.map(([title, text]) => (
          <article key={title}>
            <div className="feature-icon">{title.slice(0, 1)}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const filtered = useMemo(
    () => (filter === "All" ? portfolio : portfolio.filter((item) => item.category === filter)),
    [filter]
  );

  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <section className="section portfolio" id="portfolio">
      <SectionHeading
        eyebrow="Portfolio showcase"
        title="Editorial stories for every celebration"
        text="A polished collection of wedding, reception, ritual, corporate and theme-event concepts for a premium Indore decor studio."
      />
      <div className="filter-row" role="tablist" aria-label="Portfolio filters">
        {categoryFilters.map((category) => (
          <button
            key={category}
            className={filter === category ? "active" : ""}
            type="button"
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {filtered.map((item, index) => (
          <button
            type="button"
            className={`portfolio-card ${index === 0 ? "featured" : ""}`}
            key={item.title}
            onClick={() => setActive(item)}
          >
            <img src={item.image} alt={`${item.title} event decor`} />
            <span>{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.location}</p>
          </button>
        ))}
      </div>

      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${active.title} details`}>
          <button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Close project">
            Close
          </button>
          <img src={active.image} alt={`${active.title} expanded view`} />
          <div>
            <p className="eyebrow">{active.category}</p>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <a className="button button-gold" href="/event-details">
              View Detail Page
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function CategorySlider() {
  const [index, setIndex] = useState(0);
  const active = categories[index];

  return (
    <section className="section category-slider" aria-label="Interactive event categories">
      <div className="category-stage">
        <img src={active.image} alt={`${active.title} event category`} />
        <div>
          <p className="eyebrow">Event categories</p>
          <h2>{active.title}</h2>
          <p>{active.text}</p>
          <a className="button button-ghost" href="/services">
            Explore Category
          </a>
        </div>
      </div>
      <div className="slider-controls" aria-label="Category slider controls">
        {categories.map((category, itemIndex) => (
          <button
            type="button"
            key={category.title}
            className={itemIndex === index ? "active" : ""}
            onClick={() => setIndex(itemIndex)}
          >
            {category.title}
          </button>
        ))}
      </div>
    </section>
  );
}

function Corporate() {
  const items = [
    "Groundbreaking Ceremonies",
    "Annual Events",
    "Award Shows",
    "Product Launches",
    "Conference Setup",
    "LED Stage Production",
    "Professional Lighting",
    "Brand Activation",
  ];

  return (
    <section className="section corporate" id="corporate">
      <img src={imageBank.conference} alt="Corporate conference production setup" />
      <div>
        <p className="eyebrow">Corporate events</p>
        <h2>Production discipline for brands, teams and launch moments.</h2>
        <p>
          Corporate experiences need more than decor. Venus can support branded environments, stage direction,
          registration flow, lighting, sound, reveal moments and executive-ready presentation spaces.
        </p>
        <div className="pill-cloud">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <a className="button button-gold" href="#contact">
          <Icon name="calendar" />
          Request Corporate Consultation
        </a>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process" id="process">
      <SectionHeading
        eyebrow="Planning process"
        title="From first brief to memories forever"
        text="A clear timeline helps visitors understand the level of planning behind the final celebration."
      />
      <div className="process-line">
        {process.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [value, setValue] = useState(54);

  return (
    <section className="section compare-section">
      <SectionHeading
        eyebrow="Before and after"
        title="Transformation storytelling"
        text="A draggable comparison surface for venue transformations, installations and project details."
      />
      <div className="comparison">
        <img src={imageBank.table} alt="Before styling concept" />
        <div className="comparison-after" style={{ width: `${value}%` }}>
          <img src={imageBank.reception} alt="After luxury reception decor" />
        </div>
        <span className="label-before">Before</span>
        <span className="label-after">After</span>
        <input
          type="range"
          min="12"
          max="88"
          value={value}
          aria-label="Before and after comparison"
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </section>
  );
}

function Videos() {
  const [open, setOpen] = useState(false);
  const videos = [
    ["Wedding Highlight", imageBank.mandap],
    ["Corporate Reveal", imageBank.conference],
    ["Decor Timelapse", imageBank.stage],
  ];

  return (
    <section className="section videos" id="videos">
      <SectionHeading
        eyebrow="Video showcase"
        title="Reels, highlights and production moments"
        text="Cinematic reel cards for wedding highlights, stage reveals, corporate launches and decor transformation moments."
      />
      <div className="video-grid">
        {videos.map(([title, image]) => (
          <button key={title} type="button" onClick={() => setOpen(title)}>
            <img src={image} alt={`${title} poster`} />
            <span>
              <Icon name="play" />
            </span>
            <h3>{title}</h3>
          </button>
        ))}
      </div>
      {open ? (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={`${open} video`}>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close video">
            Close
          </button>
          <div className="video-preview">
            <p>{open}</p>
            <span>A cinematic event reel preview can be placed here for the final presentation.</span>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <section className="section testimonial-section" id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="Client experiences"
        text="Polished review cards for weddings, corporate events and private celebrations."
      />
      <article className="testimonial-card">
        <div className="quote-mark">"</div>
        <p>{active.quote}</p>
        <div>
          <strong>{active.name}</strong>
          <span>
            {active.event} - {active.location} - {active.date} - {"*".repeat(active.rating)}{" "}
            {active.verified ? "Verified" : "Client Review"}
          </span>
        </div>
      </article>
      <div className="slider-controls centered">
        {testimonials.map((item, itemIndex) => (
          <button
            key={item.name}
            className={itemIndex === index ? "active" : ""}
            type="button"
            onClick={() => setIndex(itemIndex)}
          >
            {item.event}
          </button>
        ))}
      </div>
    </section>
  );
}

function InstagramGallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <section className="section instagram">
      <SectionHeading
        eyebrow="Gallery previews"
        title="Browse the celebration details"
        text="A larger sample gallery of floral corners, mandap moments, reception tables, corporate stages and theme-event styling inspired by the Venus aesthetic."
      />
      <div className="insta-grid">
        {galleryItems.map((item) => (
          <button
            type="button"
            className="gallery-card"
            key={item.title}
            onClick={() => setActive(item)}
            aria-label={`Preview ${item.title}`}
          >
            <img src={item.image} alt={`${item.title} gallery item`} />
            <span className="gallery-card-content">
              <span className="gallery-category">{item.category}</span>
              <strong>{item.title}</strong>
              <small>{item.caption}</small>
              <span className="gallery-preview">
                <Icon name="play" />
                Preview
              </span>
            </span>
          </button>
        ))}
      </div>
      <div className="centered gallery-instagram-link">
        <a className="button button-ghost" href={contact.instagramUrl} target="_blank" rel="noreferrer">
          <Icon name="instagram" />
          View Instagram
        </a>
      </div>

      {active ? (
        <div className="lightbox gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${active.title} preview`}>
          <button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Close gallery preview">
            Close
          </button>
          <img src={active.image} alt={`${active.title} expanded preview`} />
          <div className="gallery-lightbox-copy">
            <p className="eyebrow">{active.category}</p>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <a className="button button-gold" href={contact.instagramUrl} target="_blank" rel="noreferrer">
              <Icon name="instagram" />
              View More on Instagram
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq" id="faqs">
      <SectionHeading
        eyebrow="FAQs"
        title="Answers before the first call"
        text="Clear planning answers for couples, families and corporate teams preparing an event in Indore."
      />
      <div className="faq-list">
        {faqs.map(([question, answer], index) => (
          <article key={question}>
            <button
              type="button"
              aria-expanded={open === index}
              onClick={() => setOpen(open === index ? -1 : index)}
            >
              {question}
              <span>{open === index ? "-" : "+"}</span>
            </button>
            <div className={open === index ? "is-open" : ""}>
              <p>{answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section cta">
      <div>
        <p className="eyebrow">Ready when you are</p>
        <h2>Let's Create Something Beautiful Together</h2>
        <p>
          Tell us about your wedding, celebration, corporate event or custom decor concept. The team will help shape
          the look, flow and production plan.
        </p>
      </div>
      <div className="cta-actions">
        <a className="button button-gold" href="#contact">
          <Icon name="calendar" />
          Book Now
        </a>
        <a className="button button-ghost" href={`tel:${contact.phonePrimary.replaceAll(" ", "")}`}>
          <Icon name="phone" />
          Call Us
        </a>
        <a className="button button-ghost" href={whatsappUrl("Hello Venus Event & Decor, I want to book an event consultation.")}>
          <Icon name="whatsapp" />
          WhatsApp
        </a>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    location: "",
    guestCount: "",
    budget: "",
    preferredService: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const update = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.eventType.trim()) {
      setStatus({ type: "error", message: "Please add your name, phone number and event type." });
      return;
    }
    if (!form.consent) {
      setStatus({ type: "error", message: "Please confirm consent so the team can contact you." });
      return;
    }

    setStatus({ type: "loading", message: "Sending your inquiry..." });
    window.setTimeout(() => {
      setStatus({ type: "success", message: "Thank you. The Venus team will review your event details and contact you shortly." });
      setForm({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        eventDate: "",
        location: "",
        guestCount: "",
        budget: "",
        preferredService: "",
        message: "",
        consent: false,
      });
    }, 650);
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Name
          <input name="name" value={form.name} onChange={update} autoComplete="name" />
        </label>
        <label>
          Phone number
          <input name="phone" value={form.phone} onChange={update} autoComplete="tel" />
        </label>
        <label>
          Email
          <input name="email" value={form.email} onChange={update} autoComplete="email" />
        </label>
        <label>
          Event type
          <select name="eventType" value={form.eventType} onChange={update}>
            <option value="">Select event</option>
            {["Wedding", "Reception", "Haldi", "Mehendi", "Corporate Event", "Product Launch", "Theme Decor"].map(
              (item) => (
                <option key={item}>{item}</option>
              )
            )}
          </select>
        </label>
        <label>
          Event date
          <input type="date" name="eventDate" value={form.eventDate} onChange={update} />
        </label>
        <label>
          Event location
          <input name="location" value={form.location} onChange={update} />
        </label>
        <label>
          Guest count
          <input name="guestCount" value={form.guestCount} onChange={update} />
        </label>
        <label>
          Budget range
          <input name="budget" value={form.budget} onChange={update} />
        </label>
      </div>
      <label>
        Preferred service
        <input name="preferredService" value={form.preferredService} onChange={update} />
      </label>
      <label>
        Message
        <textarea name="message" value={form.message} onChange={update} rows={4} />
      </label>
      <label className="checkbox-label">
        <input type="checkbox" name="consent" checked={form.consent} onChange={update} />
        I consent to being contacted about this inquiry.
      </label>
      <button className="button button-gold" type="submit" disabled={status.type === "loading"}>
        <Icon name="calendar" />
        Request Consultation
      </button>
      <p className={`form-status ${status.type}`} aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Tell us what you are celebrating"
        text="Phone, WhatsApp, email and form CTAs are wired with production-friendly links."
      />
      <div className="contact-layout">
        <ContactForm />
        <aside className="contact-cards">
          <a href={`tel:${contact.phonePrimary.replaceAll(" ", "")}`}>
            <Icon name="phone" className="contact-card-icon" />
            <span>Phone</span>
            <strong>{contact.phonePrimary}</strong>
          </a>
          <a href={whatsappUrl()}>
            <Icon name="whatsapp" className="contact-card-icon" />
            <span>WhatsApp</span>
            <strong>{contact.phonePrimary}</strong>
          </a>
          <a href={`mailto:${contact.email}`}>
            <Icon name="mail" className="contact-card-icon" />
            <span>Email</span>
            <strong>{contact.email}</strong>
          </a>
          <a href={contact.mapUrl} target="_blank" rel="noreferrer">
            <Icon name="mapPin" className="contact-card-icon" />
            <span>Location</span>
            <strong>{contact.city}</strong>
          </a>
          <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
            <Icon name="instagram" className="contact-card-icon" />
            <span>Instagram</span>
            <strong>@venusevent01</strong>
          </a>
          <div>
            <Icon name="clock" className="contact-card-icon" />
            <span>Business hours</span>
            <strong>By appointment</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: contact.brand,
    description: "Luxury wedding decor, corporate events and premium celebration production in Indore.",
    email: contact.email,
    telephone: [contact.phonePrimary, contact.phoneSecondary],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    areaServed: ["Indore", "Madhya Pradesh", "India"],
    url: "https://venus-event-decor.example",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

export default function HomeExperience() {
  const progress = useScrollProgress();

  return (
    <>
      <Schema />
      <Loader />
      <CursorGlow />
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <section className="marquee" aria-label="Luxury event services">
          <div>
            WE CREATE - YOU CELEBRATE - LUXURY EVENTS - PREMIUM DECOR - CORPORATE EVENTS - HALDI - MEHENDI -
            WEDDINGS - RECEPTIONS - UNFORGETTABLE EXPERIENCES -
          </div>
        </section>
        <WhyChoose />
        <Portfolio />
        <CategorySlider />
        <Corporate />
        <Process />
        <BeforeAfter />
        <Videos />
        <Testimonials />
        <InstagramGallery />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <a className="whatsapp-float" href={whatsappUrl()} aria-label="Chat with Venus Event & Decor on WhatsApp">
        <Icon name="whatsapp" />
        <span className="sr-only">WhatsApp</span>
      </a>
    </>
  );
}
