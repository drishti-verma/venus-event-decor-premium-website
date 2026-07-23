import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("homepage source contains the Venus luxury sample experience", async () => {
  const [home, pageNav, routePage, routeGallery, data, styles] = await Promise.all([
    readFile(new URL("../app/components/HomeExperience.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/PageNav.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/RoutePage.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/GalleryRoutePreview.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/data.js", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(home, /We Create\./);
  assert.match(home, /You Celebrate\./);
  assert.match(home, /ContactForm/);
  assert.match(home, /heroSlides/);
  assert.match(home, /navigator\.onLine/);
  assert.match(home, /function Icon/);
  assert.match(home, /gallery-lightbox/);
  assert.match(home, /Preview/);
  assert.match(pageNav, /menu-toggle/);
  assert.match(pageNav, /nav-links/);
  assert.match(routePage, /<PageNav \/>/);
  assert.match(routeGallery, /route-gallery-grid/);
  assert.match(routeGallery, /setActive/);
  assert.match(data, /Venus Event & Decor/);
  assert.match(data, /Haldi Decoration/);
  assert.match(data, /Baby Shower/);
  assert.match(data, /galleryItems/);
  assert.match(data, /galleryPageItems/);
  assert.match(data, /Baby Shower Welcome Corner/);
  assert.match(data, /Corporate Entry Moment/);
  assert.match(data, /Sangeet Dance Floor/);
  assert.match(data, /instagram\.com\/venusevent01/);
  assert.match(styles, /--gold:\s*#d4af37/i);
  assert.match(styles, /service-card-body/);
  assert.match(styles, /route-highlight/);
  assert.match(styles, /route-gallery-card/);
  assert.match(styles, /menu-toggle\[aria-expanded="true"\]/);
  assert.match(styles, /padding: 6\.3rem 1rem 8\.2rem/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
});

test("support pages and global footer exist", async () => {
  const files = [
    "../app/[slug]/page.jsx",
    "../app/components/PageNav.jsx",
    "../app/components/GalleryRoutePreview.jsx",
    "../app/components/SiteFooter.jsx",
    "../app/privacy-policy/page.jsx",
    "../app/terms-and-conditions/page.jsx",
    "../app/robots.js",
    "../app/sitemap.js",
  ];

  await Promise.all(files.map((file) => access(new URL(file, import.meta.url))));

  const [layout, footer, privacy, terms] = await Promise.all([
    readFile(new URL("../app/layout.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/SiteFooter.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/privacy-policy/page.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/terms-and-conditions/page.jsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /<SiteFooter \/>/);
  assert.match(footer, /Corporate Events/);
  assert.match(footer, /Privacy Policy/);
  assert.match(footer, /Terms and Conditions/);
  assert.match(footer, /WhatsApp/);
  assert.match(privacy, /<PageNav \/>/);
  assert.match(terms, /<PageNav \/>/);
});

test("static sample direction avoids production infrastructure routes", async () => {
  const [hosting, packageJson, readme] = await Promise.all([
    readFile(new URL("../.openai/hosting.json", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
  ]);

  assert.match(hosting, /"d1":\s*null/);
  assert.doesNotMatch(packageJson, /drizzle|db:generate/i);
  assert.doesNotMatch(readme, /admin|dashboard|D1|database|Cloudinary|CRUD|backend/i);

  await assert.rejects(access(new URL("../app/admin/page.jsx", import.meta.url)));
  await assert.rejects(access(new URL("../app/api/inquiries/route.js", import.meta.url)));
});

test("starter preview is fully removed", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.jsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /HomeExperience/);
  assert.match(layout, /Venus Event & Decor/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page + layout, /_sites-preview|codex-preview|Starter Project/);

  await assert.rejects(access(new URL("app/_sites-preview", root)));
});
