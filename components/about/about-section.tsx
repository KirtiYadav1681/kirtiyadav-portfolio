import { CountUp } from "@/components/ui/count-up";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="sec">
        <header className="sec-head">
          <p className="label">07 — About</p>
          <h2 className="display reveal" id="about-title">
            How I work.
          </h2>
          <p className="lead">Indore, India. From a requirement to a production release.</p>
        </header>
        <div className="about-grid">
          <article className="apanel apanel-years reveal">
            <p className="label">Experience</p>
            <p className="huge">
              <CountUp value={3} suffix="+" />
            </p>
            <p>Years building and delivering production web products.</p>
          </article>
          <article className="apanel apanel-role reveal">
            <p className="label">Crayon</p>
            <h3>AI Product & Senior Full Stack AI Engineer</h3>
            <p>Crayon Technologies Pvt. Ltd. · Remote</p>
            <p className="label">May 2025 – August 2026 · Indore, India</p>
          </article>
          <article className="apanel apanel-scale reveal">
            <p className="label">Production scale</p>
            <p className="huge">
              <CountUp value={175} suffix="K+" />
            </p>
            <p>Users on a production recruitment platform.</p>
          </article>
          <article className="apanel apanel-p1 reveal">
            <p className="label">01</p>
            <h3>From requirement to production.</h3>
            <p>I take product requirements through implementation, integration, deployment, and production delivery.</p>
          </article>
          <article className="apanel apanel-p2 reveal">
            <p className="label">02</p>
            <h3>Frontend and backend together.</h3>
            <p>
              I work across React and TypeScript interfaces, Node.js services, REST APIs, authentication,
              application state, and data flows.
            </p>
          </article>
          <article className="apanel apanel-p3 reveal">
            <p className="label">03</p>
            <h3>AI as part of the product.</h3>
            <p>
              I integrate AI into real product workflows — from job-spec and CV generation to semantic search and
              realtime AI interviews.
            </p>
          </article>
          <article className="apanel apanel-p4 reveal">
            <p className="label">04</p>
            <h3>Production matters.</h3>
            <p>I work on performance, responsiveness, SEO, Core Web Vitals, debugging, and the issues that appear after a feature ships.</p>
          </article>
        </div>
        <p className="voice">
          The feature is done when it is in production: the interface, the API, and the AI inside it.
        </p>
      </div>
    </section>
  );
}
