import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/lib/site";

const kinds = ["Projects", "Roles", "Ideas", "Collaborations"] as const;

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.2 7.2 7.8 6 7.8-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.2 4.6h2.1l1.1 2.8-1.5 1a11.2 11.2 0 0 0 5.2 5.2l1-1.5 2.8 1.1v2.1a1.8 1.8 0 0 1-2 1.8A13.6 13.6 0 0 1 6.4 6.6a1.8 1.8 0 0 1 1.8-2Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.5s5.5-4.8 5.5-9.2a5.5 5.5 0 1 0-11 0c0 4.4 5.5 9.2 5.5 9.2Z" />
      <circle cx="12" cy="11.2" r="1.7" />
    </svg>
  );
}

function OutIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4.5 11.5 11.5 4.5" />
      <path d="M6.2 4.5h5.3v5.3" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="sec contact-board">
        <div className="contact-copy">
          <header className="contact-intro">
            <p className="label">08 — Contact</p>
            <h2 className="contact-title" id="contact-title">
              <span>Let&apos;s</span>
              <span>build</span>
              <span>something</span>
              <span>
                great <span className="how-accent">together.</span>
              </span>
            </h2>
            <p className="contact-dek">
              Open to full-time opportunities, freelance projects, or just a chat about ideas, products, and AI.
            </p>
          </header>

          <div className="contact-details">
            <ul className="contact-channels">
              <li>
                <a href={`mailto:${site.email}`}>
                  <MailIcon />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref}>
                  <PhoneIcon />
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
            <p className="contact-place">
              <PinIcon />
              <span>
                <span className="contact-place-name">{site.location}</span>
                <span className="contact-place-meta">Crayon Technologies, May 2025 – August 2026</span>
              </span>
            </p>
            <div className="contact-social">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <OutIcon />
                <span className="sr"> (opens in a new tab)</span>
              </a>
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub
                <OutIcon />
                <span className="sr"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-panel">
          <ul className="contact-kinds" aria-hidden="true">
            {kinds.map((kind) => (
              <li key={kind}>{kind}</li>
            ))}
          </ul>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
