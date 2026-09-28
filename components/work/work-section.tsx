import { CountUp } from "@/components/ui/count-up";
import { AiDetails, Hood } from "@/components/ui/ai-details";
import { ExternalLink } from "@/components/ui/external-link";
import { bridgeArchitecture, bridgeFeatures, workIndex } from "@/lib/content";

function ProjectSwitch({
  previous,
  next,
}: {
  previous: { href: string; label: string };
  next: { href: string; label: string };
}) {
  return (
    <div className="switch">
      <a href={previous.href} aria-label={previous.label}>
        ←
      </a>
      <a href={next.href} aria-label={next.label}>
        →
      </a>
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-title">
      <div className="sec sec-flush-bottom">
        <header className="sec-head">
          <p className="label">04 — Selected work</p>
          <h2 className="display reveal" id="work-title">
            Crayon and The Bridge.
          </h2>
          <p className="lead">
            Two production products. Crayon is an AI hiring platform at scale. The Bridge is an AI product
            experience I led on the frontend. Earlier roles are below.
          </p>
          <nav className="work-index" aria-label="Selected work">
            {workIndex.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>
      </div>

      <article className="project" id="crayon">
        <div className="stage stage-a reveal">
          <div className="stage-bar">
            <p className="label">Senior Software Developer, AI / Full Stack · May 2025 — Present</p>
            <p className="label">01 / 04</p>
          </div>
          <div className="stage-main">
            <h3 className="stage-name">
              Crayon
              <span className="stage-sub">Jobs Platform</span>
            </h3>
            <div className="ui-card">
              <p className="label">Shipped on the platform</p>
              <ul>
                <li>
                  Job Spec Jerry <em>Live</em>
                </li>
                <li>
                  Resume Reggie <em>Live</em>
                </li>
                <li>
                  Ted <em>Live</em>
                </li>
                <li>
                  Thuli <em>Live</em>
                </li>
                <li>
                  Crayon ATS <em>Live</em>
                </li>
              </ul>
            </div>
          </div>
          <div className="stage-foot">
            <p className="stage-stat">
              <strong>
                <CountUp value={175} suffix="K+" />
              </strong>
              <span>active users on the platform</span>
            </p>
            <ProjectSwitch
              previous={{ href: "#client", label: "Previous project, independent client work" }}
              next={{ href: "#bridge", label: "Next project, The Bridge" }}
            />
          </div>
        </div>
        <div className="project-copy">
          <div>
            <p className="dek">
              A hiring platform. Employers post roles, manage applicants in one ATS, and reach a candidate
              network. AI sits at specific points in that flow.
            </p>
            <dl className="meta-dl meta-space">
              <div>
                <dt>Role</dt>
                <dd>Senior Software Developer, AI / Full Stack</dd>
              </div>
              <div>
                <dt>Engagement</dt>
                <dd>Freelance · Remote · May 2025 — Present</dd>
              </div>
              <div>
                <dt>Product</dt>
                <dd>
                  <ExternalLink href="https://crayon.jobs/">crayon.jobs</ExternalLink>
                </dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>React.js, Next.js, TypeScript, Node.js, MongoDB</dd>
              </div>
            </dl>
          </div>
          <div>
            <ul className="ticks">
              <li>Built and scaled production features for a job platform serving 175K+ active users.</li>
              <li>Developed REST APIs between the frontend, server logic, and third-party integrations.</li>
              <li>Implemented authentication, authorization, dashboards, and role-based workflows.</li>
              <li>Worked with MongoDB and Mongoose for application data and API-driven workflows.</li>
              <li>
                Integrated Job Spec Jerry, Resume Reggie, AI video interviews, semantic search, and ATS
                management workflows.
              </li>
            </ul>
            <div className="jump">
              <a href="#jerry">Job Spec Jerry</a>
              <a href="#reggie">Resume Reggie</a>
              <a href="#interviews">Ted and Thuli</a>
              <a href="#search">Search</a>
              <a href="#ats">Crayon ATS</a>
            </div>
          </div>
        </div>
      </article>

      <article className="project" id="bridge">
        <div className="stage stage-b reveal">
          <div className="stage-bar">
            <p className="label">Lead Frontend Developer</p>
            <p className="label">02 / 04</p>
          </div>
          <div className="stage-main">
            <h3 className="stage-name">
              The Bridge
              <span className="stage-sub">A daily thought-pattern interruption</span>
            </h3>
            <ul className="index-list">
              <li>Drop</li>
              <li>Pause</li>
              <li>The Crossing</li>
              <li>The Locks</li>
              <li>The Collective Pulse</li>
            </ul>
          </div>
          <div className="stage-foot">
            <p className="stage-note">Public walker experience and the admin side. Next.js, TypeScript, Tailwind CSS.</p>
            <ProjectSwitch
              previous={{ href: "#crayon", label: "Previous project, Crayon" }}
              next={{ href: "#brain", label: "Next project, Brain Inventory" }}
            />
          </div>
        </div>
        <div className="project-copy">
          <div>
            <p className="dek">
              Every day a walker gets one Drop, steps into a 144-second Pause, crosses five Planks, and can
              leave one anonymous thought at The Locks.
            </p>
            <dl className="meta-dl meta-space">
              <div>
                <dt>Role</dt>
                <dd>Lead Frontend Developer</dd>
              </div>
              <div>
                <dt>Product</dt>
                <dd>
                  <ExternalLink href="https://thebridge144.com/">thebridge144.com</ExternalLink>
                </dd>
              </div>
              <div>
                <dt>My stack</dt>
                <dd>Next.js, React, TypeScript, Tailwind CSS</dd>
              </div>
              <div>
                <dt>Quality</dt>
                <dd>SEO and performance considered throughout</dd>
              </div>
            </dl>
          </div>
          <div>
            <ul className="ticks">
              <li>
                Led the frontend for the public walker experience: the Drop, the Pause, The Crossing, Planks,
                The Locks, and The Collective Pulse.
              </li>
              <li>Built the signed-in walker flows and the admin side of the product.</li>
              <li>
                Shipped the Pause as a real AI conversation in the interface: a hard 144-second session, one
                question at a time, with streamed responses.
              </li>
              <li>Built it as a production Next.js experience, with SEO, accessibility, and performance considered throughout.</li>
            </ul>
            <div className="jump">
              <a href="#drop">Drop</a>
              <a href="#pause">Pause</a>
              <a href="#crossing">The Crossing</a>
              <a href="#locks">The Locks</a>
              <a href="#pulse">The Collective Pulse</a>
            </div>
          </div>
        </div>
        <div className="bridge-more">
          {bridgeFeatures.map((item) => (
            <AiDetails key={item.id} item={item} />
          ))}
          <p className="label arch-note">Product architecture · not all of this is my implementation</p>
          <Hood label="The Bridge product architecture" items={bridgeArchitecture} />
        </div>
      </article>

      <article className="project" id="brain">
        <div className="stage stage-b reveal">
          <div className="stage-bar">
            <p className="label">June 2024 — May 2025 · Indore</p>
            <p className="label">03 / 04</p>
          </div>
          <div className="stage-main">
            <h3 className="stage-name">
              Brain Inventory
              <span className="stage-sub">Software Developer</span>
            </h3>
            <ul className="index-list">
              <li>Dashboards</li>
              <li>REST APIs</li>
              <li>Authentication</li>
              <li>MongoDB</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className="stage-foot">
            <p className="stage-note">Production web applications across the interface and the API.</p>
            <ProjectSwitch
              previous={{ href: "#bridge", label: "Previous project, The Bridge" }}
              next={{ href: "#client", label: "Next project, independent client work" }}
            />
          </div>
        </div>
        <div className="project-copy">
          <div>
            <p className="roleline">Software Developer</p>
            <p>
              Production web applications across the interface and the API. React.js, Node.js, Express.js, and
              MongoDB, with AWS in the deployment and troubleshooting path.
            </p>
          </div>
          <ul className="ticks">
            <li>REST APIs, data validation, authentication flows, and application state.</li>
            <li>Responsive dashboards and multi-role workflows, plus third-party API integrations.</li>
            <li>
              MongoDB / Mongoose for application data. Production issues resolved with product, design, and
              engineering.
            </li>
          </ul>
        </div>
      </article>

      <article className="project" id="client">
        <div className="stage stage-c reveal">
          <div className="stage-bar">
            <p className="label">Mar 2023 — Jan 2024 · Remote</p>
            <p className="label">04 / 04</p>
          </div>
          <div className="stage-main stage-main-solo">
            <div>
              <p className="giant-date">2023—2024</p>
              <h3 className="stage-name stage-name-solo">Independent client work</h3>
              <p className="stage-sub">Freelance Developer</p>
            </div>
          </div>
          <div className="stage-foot">
            <p className="stage-note">
              Full-stack web applications taken from client requirements through development and deployment.
            </p>
            <ProjectSwitch
              previous={{ href: "#brain", label: "Previous project, Brain Inventory" }}
              next={{ href: "#crayon", label: "Next project, Crayon Jobs" }}
            />
          </div>
        </div>
        <div className="project-copy">
          <div>
            <p className="roleline">Freelance Developer</p>
            <p>Full-stack web applications taken from client requirements through development and deployment.</p>
          </div>
          <ul className="ticks">
            <li>React.js, Node.js, Express.js, and MongoDB.</li>
            <li>REST APIs and third-party services, delivered as responsive, production-ready applications.</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
