import { buildCards } from "@/lib/content";

export function BuildSection() {
  return (
    <section id="build" aria-labelledby="build-title">
      <div className="sec">
        <header className="sec-head">
          <p className="label">02 — What I build</p>
          <h2 className="display reveal" id="build-title">
            Frontend, backend,
            <br />
            and AI.
          </h2>
          <p className="lead">
            I build the product around the model. Frontend craft, the API, and the AI feature land together —
            from the requirement to something people can use.
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
