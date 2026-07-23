import { contact, navItems, services } from "../data";

const footerIcons = {
  arrowUp: (
    <>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
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
  whatsapp: (
    <>
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.8Z" />
      <path d="M8.8 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .5.1.6.5l.8 1.9c.1.3.1.5-.1.7l-.4.5c-.2.2-.3.4-.1.7.4.7.9 1.3 1.5 1.8.7.6 1.3.9 1.7 1 .3.1.5.1.7-.1l.7-.8c.2-.2.5-.3.8-.2l1.8.9c.4.2.5.4.5.6 0 .5-.3 1.2-.7 1.5-.5.4-1.3.7-2.3.5-1.2-.2-2.7-.8-4.5-2.4-1.6-1.4-2.7-3.1-3.1-4.3-.4-1.1-.1-1.9.2-2.4Z" />
    </>
  ),
};

function FooterIcon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {footerIcons[name]}
    </svg>
  );
}

function whatsappUrl(message = "Hello Venus Event & Decor, I would like to discuss an event.") {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer site-footer">
      <div className="footer-brand-block">
        <a className="brand" href="/" aria-label="Venus Event & Decor home">
          <span>V</span>
          <div>
            <strong>Venus</strong>
            <small>Event & Decor</small>
          </div>
        </a>
        <p>
          Luxury event decor, wedding celebration design and corporate event styling for Indore and nearby destination
          venues.
        </p>
        <a className="button button-gold footer-whatsapp" href={whatsappUrl()}>
          <FooterIcon name="whatsapp" />
          WhatsApp
        </a>
      </div>

      <div>
        <h3>Quick Links</h3>
        {navItems.slice(0, 6).map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href="/portfolio">Portfolio</a>
        <a href="/corporate-events">Corporate Events</a>
      </div>

      <div>
        <h3>Services</h3>
        {services.slice(0, 7).map((item) => (
          <a key={item.title} href="/services">
            {item.title}
          </a>
        ))}
      </div>

      <div>
        <h3>Contact</h3>
        <a className="footer-link" href={`tel:${contact.phonePrimary.replaceAll(" ", "")}`}>
          <FooterIcon name="phone" />
          {contact.phonePrimary}
        </a>
        <a className="footer-link" href={`tel:${contact.phoneSecondary.replaceAll(" ", "")}`}>
          <FooterIcon name="phone" />
          {contact.phoneSecondary}
        </a>
        <a className="footer-link" href={`mailto:${contact.email}`}>
          <FooterIcon name="mail" />
          {contact.email}
        </a>
        <a className="footer-link" href={contact.mapUrl} target="_blank" rel="noreferrer">
          <FooterIcon name="mapPin" />
          {contact.city}
        </a>
        <a className="footer-link" href={contact.instagramUrl} target="_blank" rel="noreferrer">
          <FooterIcon name="instagram" />
          Instagram @venusevent01
        </a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms and Conditions</a>
      </div>

      <div className="footer-bottom">
        <span>(c) {year} Venus Event & Decor. All Rights Reserved.</span>
        <a className="footer-link" href="#top">
          <FooterIcon name="arrowUp" />
          Back to top
        </a>
      </div>
    </footer>
  );
}
