import { contact, services } from "../data";
import GalleryRoutePreview from "./GalleryRoutePreview";
import PageNav from "./PageNav";

const routeIcons = {
  calendar: (
    <>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 10h18" />
      <rect x="3" y="5" width="18" height="16" rx="2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.8Z" />
      <path d="M8.8 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .5.1.6.5l.8 1.9c.1.3.1.5-.1.7l-.4.5c-.2.2-.3.4-.1.7.4.7.9 1.3 1.5 1.8.7.6 1.3.9 1.7 1 .3.1.5.1.7-.1l.7-.8c.2-.2.5-.3.8-.2l1.8.9c.4.2.5.4.5.6 0 .5-.3 1.2-.7 1.5-.5.4-1.3.7-2.3.5-1.2-.2-2.7-.8-4.5-2.4-1.6-1.4-2.7-3.1-3.1-4.3-.4-1.1-.1-1.9.2-2.4Z" />
    </>
  ),
};

function RouteIcon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {routeIcons[name]}
    </svg>
  );
}

function whatsappUrl(message = "Hello Venus Event & Decor, I would like to discuss an event.") {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export default function RoutePage({ page }) {
  const cards = page.cards || [];
  const sections = page.sections || [];

  return (
    <>
      <PageNav />
      <main className="route-page">
        <section className="route-hero">
          <img src={page.image} alt={`${page.title} visual`} />
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
            <a className="button button-gold" href="/contact">
              <RouteIcon name="calendar" />
              Request Consultation
            </a>
          </div>
        </section>

        {sections.length ? (
          <section className="route-section-grid">
            {sections.map(([title, text]) => (
              <article key={title}>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </section>
        ) : null}

        {cards.length && page.galleryPreview ? (
          <GalleryRoutePreview items={cards} instagramUrl={contact.instagramUrl} />
        ) : null}

        {cards.length && !page.galleryPreview ? (
          <section className="route-card-grid">
            {cards.map((card) => (
              <article key={card.title || card.name}>
                {card.image ? <img src={card.image} alt={`${card.title} visual`} /> : null}
                <span>{card.category || card.event || "Venus"}</span>
                <h2>{card.title || card.name}</h2>
                <p>{card.description || card.quote}</p>
              </article>
            ))}
          </section>
        ) : null}

        {page.faqs ? (
          <section className="route-section-grid">
            {page.faqs.map(([question, answer]) => (
              <article key={question}>
                <h2>{question}</h2>
                <p>{answer}</p>
              </article>
            ))}
          </section>
        ) : null}

        <section className="route-highlight">
          <p className="eyebrow">Signature details</p>
          <h2>Designed with balance, mood and guest experience in mind</h2>
          <p>
            Every Venus concept is shaped around venue scale, color palette, lighting, floral density, camera angles
            and comfortable guest movement. The result is decor that feels premium in person and refined in photographs.
          </p>
          <div className="pill-cloud">
            {services.slice(0, 6).map((service) => (
              <span key={service.title}>{service.title}</span>
            ))}
          </div>
        </section>

        <section className="cta route-cta">
          <div>
            <p className="eyebrow">Plan your event</p>
            <h2>Let's Create Something Beautiful Together</h2>
            <p>Call, WhatsApp or send a consultation request for weddings, celebrations and corporate events.</p>
          </div>
          <div className="cta-actions">
            <a className="button button-gold" href={whatsappUrl()}>
              <RouteIcon name="whatsapp" />
              WhatsApp
            </a>
            <a className="button button-ghost" href={`tel:${contact.phonePrimary.replaceAll(" ", "")}`}>
              <RouteIcon name="phone" />
              Call
            </a>
            <a className="button button-ghost" href={`mailto:${contact.email}`}>
              <RouteIcon name="mail" />
              Email
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
