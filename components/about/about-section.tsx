import { CountUp } from "@/components/ui/count-up";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="sec">
        <header className="sec-head">
          <p className="label">07 — About</p>
          <h2 className="display reveal" id="about-title">
            How the work gets finished.
          </h2>
          <p className="lead">
            Indore, India. This is how a feature gets from a requirement to something people use in production.
          </p>
        </header>
        <div className="about-grid">
          <article className="apanel apanel-years reveal">
            <p className="label">Experience</p>
            <p className="huge">
              <CountUp value={3} suffix="+" />
            </p>
            <p>
              Years building software. Client projects and production applications, then AI features on Crayon
              and lead frontend work on The Bridge.
            </p>
          </article>
          <article className="apanel apanel-role reveal">
            <p className="label">Now</p>
            <h3>Senior Software Developer, AI / Full Stack</h3>
            <p>Crayon Jobs Platform · Remote · Freelance</p>
            <p className="label">May 2025 — Present · Indore, India</p>
          </article>
          <article className="apanel apanel-scale reveal">
            <p className="label">Production scale</p>
            <p className="huge">
              <CountUp value={175} suffix="K+" />
            </p>
            <p>Active users on Crayon Jobs. Production features across the interface, the APIs, and the AI inside it.</p>
          </article>
          <article className="apanel apanel-p1 reveal">
            <p className="label">01</p>
            <h3>From the requirement to production.</h3>
            <p>
              AI capabilities start as a product need. I take them through a user experience and a backend
              integration, not a notebook that never ships.
            </p>
          </article>
          <article className="apanel apanel-p2 reveal">
            <p className="label">02</p>
            <h3>The interface and the API ship together.</h3>
            <p>Frontend flows, API communication, asynchronous processing, and error states are part of the same feature.</p>
          </article>
          <article className="apanel apanel-p3 reveal">
            <p className="label">03</p>
            <h3>The model has to survive the workflow.</h3>
            <p>On Crayon that is a job spec, a profile, an interview, or an ATS step. On The Bridge it is the 144-second Pause.</p>
          </article>
          <article className="apanel apanel-p4 reveal">
            <p className="label">04</p>
            <h3>Then I stay for the production issues.</h3>
            <p>
              Debug, integrate, and keep it responsive. I do that with product, design, and engineering —
              performance and reliability included.
            </p>
          </article>
        </div>
        <p className="voice">
          The interesting part is not the prompt. It is the feature still working once real users show up.
        </p>
      </div>
    </section>
  );
}
