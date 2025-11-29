import '../styles/PageLayout.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <header className="contact-header">
          <h1>Stay in touch with HESS</h1>
          <p>We’re happy to connect about collaborations, speaking opportunities, and ways to join our community.</p>
        </header>

        <section className="contact-cards">
          <article className="contact-card">
            <h2>Email</h2>
            <p>
              <a href="mailto:nyuhemmes@gmail.com">nyuhemmes@gmail.com</a>
            </p>
          </article>
          <article className="contact-card">
            <h2>Instagram</h2>
            <p>
              <a href="https://www.instagram.com/hess.nyu/" target="_blank" rel="noreferrer">@hess.nyu</a>
            </p>
          </article>
          <article className="contact-card">
            <h2>Location</h2>
            <p>
              25 West 4th Street · 5th Floor<br />
              New York, NY 10012
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}


