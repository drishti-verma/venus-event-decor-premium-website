<div align="center">

# Venus Event & Decor

### Premium Event Decoration Website · Indore

[![Open Live Website](https://img.shields.io/badge/OPEN%20LIVE%20WEBSITE-Click%20Here-d4a85d?style=for-the-badge&logo=github&logoColor=white)](https://satitech-official.github.io/venus-event-decor-premium-website/)

<br />

[![Venus Event & Decor Website Preview](public/image-fallback.svg)](https://satitech-official.github.io/venus-event-decor-premium-website/)

### ☝️ Click the preview image to open the website

**Live Website:**  
https://satitech-official.github.io/venus-event-decor-premium-website/

> Hosted using **GitHub Pages only**. Vercel is not used.

</div>

---

## About the Project

A premium sample website for **Venus Event & Decor**, a luxury event and decoration brand based in Indore, Madhya Pradesh. It is designed as a responsive, cinematic and interactive showcase for weddings, corporate events, stage decoration and theme celebrations.

## Included

- Cinematic responsive homepage with loader and slideshow hero.
- About, Services, Portfolio, Gallery, Corporate Events, Event Details, Videos, Testimonials, FAQs and Contact pages.
- Privacy Policy and Terms and Conditions pages.
- Global footer on every page.
- Premium service, portfolio, testimonial, gallery and contact cards.
- WhatsApp, Instagram, phone, email and Google Maps integrations.
- SEO metadata, sitemap, robots, LocalBusiness schema and FAQ schema.
- Automated GitHub Pages deployment through GitHub Actions.
- GitHub repository-aware routing and asset paths.
- Branded fallback image when any remote event photograph fails to load.
- GitHub Pages-safe favicon, Open Graph image, internal links, images, posters and responsive `srcset` paths.

## Image Reliability

The website uses optimized event photographs with a local branded fallback asset:

```text
public/image-fallback.svg
```

When an external image cannot load, the website automatically displays the branded Venus Event & Decor visual instead of showing a broken-image icon.

## GitHub Pages Deployment

The deployment workflow is located at:

```text
.github/workflows/deploy-pages.yml
```

Every push to the `main` branch automatically:

1. Installs dependencies.
2. Builds the Next.js static export.
3. Prepares GitHub Pages asset and routing paths.
4. Uploads the `out` directory.
5. Publishes through GitHub Pages.

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The static production website is generated inside:

```text
out/
```

## Configuration

Use the final GitHub Pages URL in `.env.local` when required:

```bash
NEXT_PUBLIC_SITE_URL=https://satitech-official.github.io/venus-event-decor-premium-website
```

## Final Review Checklist

- [x] GitHub Pages repository base path configured.
- [x] Internal routes prepared for static hosting.
- [x] Images protected with a branded fallback.
- [x] Favicon uses the GitHub Pages base path.
- [x] Open Graph and Twitter preview image configured.
- [x] README contains a clickable preview image.
- [x] README contains an Open Live Website button.
- [x] Footer appears on every page.
- [x] Cards and icons are responsive and aligned.
- [x] No Vercel deployment configuration is used.
