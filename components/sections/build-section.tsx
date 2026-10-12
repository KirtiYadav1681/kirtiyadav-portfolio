import { buildCards } from "@/lib/content";

export function BuildSection() {
  return (
    <section id="build" aria-labelledby="build-title">
      <div className="sec">
        <header className="sec-head">
          <p className="label">02 — What I build</p>
          <h2 className="display reveal" id="build-title">
            Full-stack
            <br />
            AI engineering.
          </h2>
          <p className="lead">
            I take a feature from the requirement through the interface, the API, and production.
          </p>
        </header>
        <div className="build-grid">
          {buildCards.map((card) => (
            <article key={card.index} className={card.className}>
              <p className="label">{card.index}</p>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <p className="tech">{card.tech}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
