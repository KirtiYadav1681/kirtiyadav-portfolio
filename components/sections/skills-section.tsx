import { skillGroups } from "@/lib/content";

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="skills-wrap">
        <div className="skills-canvas">
          <header className="sec-head">
            <p className="label">06 — Technical stack</p>
            <h2 className="display reveal" id="skills-title">
              What I actually use.
            </h2>
            <p className="lead">
              Grouped the way the work is grouped. Every technology here is already on the page — nothing is
              hidden behind a hover.
            </p>
          </header>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className={group.className}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
