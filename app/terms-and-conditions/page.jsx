import { contact } from "../data";
import PageNav from "../components/PageNav";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for Venus Event & Decor.",
};

export default function TermsAndConditions() {
  return (
    <>
      <PageNav />
      <main className="legal-page">
        <h1>Terms and Conditions</h1>
        <p>
          Website content introduces Venus Event & Decor services and does not create a confirmed booking. Event dates,
          scope, materials, pricing, travel, venue access and production requirements must be confirmed in writing.
        </p>
        <h2>Bookings and proposals</h2>
        <p>
          Final pricing depends on design scope, venue conditions, guest count, material choices, logistics and schedule.
          Any proposal should define payment terms, cancellation rules and delivery responsibilities.
        </p>
        <h2>Media and website content</h2>
        <p>
          Website images, reviews and event details are presented for brand storytelling and should be updated with
          approved business details before final public launch.
        </p>
        <h2>Contact</h2>
        <p>
          For service questions, contact <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </main>
    </>
  );
}
