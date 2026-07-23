import "./globals.css";
import SiteFooter from "./components/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://venus-event-decor.example";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Venus Event & Decor | Luxury Wedding & Corporate Event Decor in Indore",
    template: "%s | Venus Event & Decor",
  },
  description:
    "Venus Event & Decor creates luxury weddings, premium decorations, corporate events, stage setups, theme celebrations and unforgettable event experiences in Indore and beyond.",
  keywords: [
    "Venus Event & Decor",
    "luxury event decor Indore",
    "wedding decor Indore",
    "corporate event production",
    "stage decoration",
    "theme decoration",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Venus Event & Decor",
    title: "Venus Event & Decor | Luxury Event Production in Indore",
    description:
      "Cinematic wedding decor, corporate event production, premium stages, floral installations and celebration design in Indore and beyond.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venus Event & Decor",
    description: "We Create. You Celebrate.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="top" className="site-shell">
          <div className="site-content">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
