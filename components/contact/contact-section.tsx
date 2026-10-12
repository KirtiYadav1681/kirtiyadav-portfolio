import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-canvas">
        <div className="contact-compose">
          <div className="contact-intro">
            <header className="sec-head">
              <p className="label">08 — Contact</p>
              <h2 className="display reveal" id="contact-title">
                If you need a full-stack AI engineer.
              </h2>
              <p className="lead">Write to me about a product, a role, or a feature.</p>
            </header>
            <div className="contact-foot">
              <a className="email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <div className="contact-links">
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  <span className="sr"> (opens in a new tab)</span>
                </a>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                  <span className="sr"> (opens in a new tab)</span>
                </a>
              </div>
              <p className="contact-meta">Indore, India · Crayon Technologies, May 2025 – August 2026</p>
            </div>
          </div>
          <ContactForm />
        </div>
        <p className="watermark" aria-hidden="true">
          Kirti Yadav
        </p>
      </div>
    </section>
  );
}
