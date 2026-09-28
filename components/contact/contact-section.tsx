import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-canvas">
        <header className="sec-head">
          <p className="label">08 — Contact</p>
          <h2 className="display reveal" id="contact-title">
            If you need the product and the AI.
          </h2>
          <p className="lead">Full-stack AI engineering. Write to me — I read what I get.</p>
        </header>
        <a className="email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <div>
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
          <p className="contact-meta">Indore, India · Currently at Crayon Jobs Platform</p>
        </div>
        <p className="watermark" aria-hidden="true">
          Kirti Yadav
        </p>
      </div>
    </section>
  );
}
