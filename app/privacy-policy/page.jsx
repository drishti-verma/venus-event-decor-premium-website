import { contact } from "../data";
import PageNav from "../components/PageNav";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Venus Event & Decor.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageNav />
      <main className="legal-page">
        <h1>Privacy Policy</h1>
        <p>
          Venus Event & Decor collects inquiry details such as name, phone number, email, event type, date, location,
          guest count, budget range and message so the team can respond to consultation requests.
        </p>
        <h2>How information is used</h2>
        <p>
          Information is used for event consultation, proposal preparation, communication, inquiry management and service
          improvement. It is not sold to third parties.
        </p>
        <h2>Data handling</h2>
        <p>
          Inquiry details should be used only for event communication, consultation planning and service coordination.
          Visitors can request corrections or removal by contacting the Venus team.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, email <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </main>
    </>
  );
}
