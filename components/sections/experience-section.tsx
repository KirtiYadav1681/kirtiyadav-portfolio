import { experience } from "@/lib/content";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="exp-title">
      <div className="sec">
        <header className="sec-head">
          <p className="label">05 — Experience</p>
          <h2 className="display reveal" id="exp-title">
            Three years of software. Then AI inside it.
          </h2>
          <p className="lead">Client projects, production applications, then AI features on Crayon and The Bridge.</p>
        </header>
        {experience.map((item) => (
          <article className="exp-item reveal" key={item.year}>
            <div>
              <p className="exp-year">{item.year}</p>
              <span className="label">{item.dates}</span>
            </div>
            <div>
              <h3>{item.title}</h3>
              <p className="roleline">{item.role}</p>
              {"points" in item ? (
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
        <aside className="cert">
          <p className="label">Certification · 2026</p>
          <strong>Full Stack AI Engineer</strong>
          <p>
            AI engineering, Python, LLM applications, RAG, vector databases, embeddings, AI agents, and
            production AI workflows.
          </p>
        </aside>
      </div>
    </section>
  );
}
