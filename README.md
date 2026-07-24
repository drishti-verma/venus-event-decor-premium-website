# Venus Event & Decor

Premium sample website for Venus Event & Decor, a luxury event and decoration brand based in Indore.

## Live Website

[![Open Live Website](https://img.shields.io/badge/Open%20Live%20Website-GitHub%20Pages-181717?style=for-the-badge&logo=github)](https://satitech-official.github.io/venus-event-decor-premium-website/)

**GitHub Pages URL:**  
https://satitech-official.github.io/venus-event-decor-premium-website/

> This project is configured only for GitHub Pages. Vercel is not used.

## Included

- Cinematic responsive homepage with loader, slideshow hero, scroll progress, mobile navigation, WhatsApp CTA, portfolio lightbox, category slider, FAQ accordion, video modal and front-end inquiry form.
- Complete static pages for About, Services, Portfolio, Gallery, Corporate Events, Event Details, Videos, Testimonials, FAQs, Contact, Privacy Policy and Terms and Conditions.
- Consistent global footer across every page.
- Premium service, portfolio, testimonial, gallery, contact and feature cards with responsive spacing and aligned icons.
- SEO basics: metadata, sitemap, robots, LocalBusiness schema and FAQ schema.
- Automated deployment through GitHub Actions and GitHub Pages.
- Repository-aware asset paths and routing for `/venus-event-decor-premium-website/`.

## GitHub Pages Deployment

The deployment workflow is available at:

```text
.github/workflows/deploy-pages.yml
```

Every push to the `main` branch builds and publishes the static website to GitHub Pages.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production-ready static files are generated in the `out` directory.

## Configuration

Copy `.env.example` to `.env.local` when changing the final public URL:

```bash
NEXT_PUBLIC_SITE_URL=https://satitech-official.github.io/venus-event-decor-premium-website
```

## Content Notes

The current site uses high-quality sample content and replaceable event imagery. Before a client production launch, replace sample imagery and review text with approved Venus Event & Decor assets, client names and event photographs.

## Review Checklist

- Footer appears on every page.
- No card text is cut off on mobile or desktop.
- Icons remain centered and consistently sized.
- No horizontal scrolling appears.
- Contact, phone, email, Instagram and WhatsApp links work.
- Hero slideshow, portfolio lightbox, category slider, video modal and FAQ accordion behave smoothly.
- Internal routes and assets work under the GitHub repository base path.
