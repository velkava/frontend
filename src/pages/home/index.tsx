import { Header } from "components/Header";
import { Page } from "components/Page";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Page title={t("home.meta.title")} description={t("home.meta.description")}>
      <Header />

      <main>
        <section className="hero">
          <h1>Helppokäyttöinen palvelu velkojen hallintaan</h1>
          <p>A short tagline explaining the app's value.</p>
          <button>Call-to-action</button>
        </section>

        <section className="associates">Yhteistyössä:</section>

        <section className="features">
          - Purpose: Highlight what makes Velkava unique. - Content: - Key
          features (e.g., velkojen hallinta, maksuohjelman luonti, tavoitteiden
          seuranta). - Benefits, written from the user's perspective (e.g.,
          "Säästä aikaa ja vähennä stressiä"). - Icons or visuals for each
          feature.
        </section>

        <section className="how-it-works">
          - Purpose: Show how simple it is to use Velkava. - Content: - A 3-4
          step process (e.g., Rekisteröidy → Lisää velkasi → Luo strategia →
          Seuraa edistymistä). - Vaihtoehtoisesti kuvia palvelun eri osista
          (e.g. velanhallintasovellus, personoitu avustus, tietopankki,
          keskustelufoorumi) - Include screenshots or illustrations of the app
          interface.
        </section>

        <section className="testimonials">
          - Purpose: Build trust with potential users. - Content: - Real user
          reviews or quotes (or placeholders until reviews are available). -
          Statistics, if applicable (e.g., "98% käyttäjistä suosittelee
          Velkavaa").
        </section>

        <section className="pricing">
          Pricing Information - Purpose: Set clear expectations about cost. -
          Content: - Free tier or trial information (if available). - Simple
          pricing structure (e.g., monthly or annual plans). - Highlight cost
          savings compared to financial trouble.
        </section>

        <section className="faq">
          FAQ Section - Purpose: Address common questions upfront. - Content: -
          Questions like "Kuinka Velkava toimii?", "Onko tietoni turvassa?",
          "Mitä maksaa?"
        </section>

        <section>
          Call-to-Action Section - Purpose: Reinforce the goal to convert
          visitors. - Content: - Encourage registration or download (e.g.,
          "Aloita matkasi kohti velattomuutta"). - Button linking to
          sign-up/download.
        </section>
      </main>

      <footer>
        <span>Copyright text</span>

        <nav>
          <ul>
            <li>
              <a>SoMe1</a>
            </li>
          </ul>
        </nav>
      </footer>
    </Page>
  );
};

export default Home;
