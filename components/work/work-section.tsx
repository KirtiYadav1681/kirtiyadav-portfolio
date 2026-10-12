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
            Selected work.
          </h2>
          <p className="lead">
            Crayon is an AI-powered recruitment platform serving 175K+ users. The Bridge is a privacy-first AI
            reflection platform. Brain Inventory is earlier product engineering.
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
            <p className="label">AI Product & Senior Full Stack AI Engineer · May 2025 – August 2026</p>
            <p className="label">01 / 03</p>
          </div>
          <div className="stage-main">
            <h3 className="stage-name">
              Crayon
              <span className="stage-sub">All-in-one Recruitment Platform</span>
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
                  AI Search <em>Live</em>
                </li>
                <li>
                  AI Interviews <em>Live</em>
                </li>
                <li>
                  AI ATS <em>Live</em>
                </li>
              </ul>
            </div>
          </div>
          <div className="stage-foot">
            <p className="stage-stat">
              <strong>
                <CountUp value={175} suffix="K+" />
              </strong>
              <span>users</span>
            </p>
            <ProjectSwitch
              previous={{ href: "#brain", label: "Previous project, Brain Inventory" }}
              next={{ href: "#bridge", label: "Next project, The Bridge" }}
            />
          </div>
        </div>
        <div className="project-copy">
          <div>
            <p className="dek">AI-powered recruitment platform serving 175K+ users.</p>
            <dl className="meta-dl meta-space">
              <div>
                <dt>Role</dt>
                <dd>AI Product & Senior Full Stack AI Engineer</dd>
              </div>
              <div>
                <dt>Engagement</dt>
                <dd>Remote · May 2025 – August 2026</dd>
              </div>
              <div>
                <dt>Product</dt>
                <dd>
                  <ExternalLink href="https://crayon.jobs/">crayon.jobs</ExternalLink>
                </dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>React, TypeScript, Node.js, Express, MongoDB, OpenAI APIs</dd>
              </div>
            </dl>
          </div>
          <div>
            <ul className="ticks">
              <li>Owned end-to-end delivery of major product features for a platform serving 175K+ users.</li>
              <li>
                Built and integrated job-spec generation, CV/profile generation, AI search, semantic matching, AI
                interviews, and ATS workflows.
              </li>
              <li>
                Integrated Node.js/Express services, REST APIs, OpenAI APIs, and asynchronous processing with React
                and TypeScript.
              </li>
              <li>
                Engineered a realtime AI video interview with OpenAI Realtime and WebRTC, including chunked upload
                and streaming playback.
              </li>
              <li>Implemented role-based workflows across 5–6 user roles, including authentication and dashboards.</li>
            </ul>
            <div className="jump">
              <a href="#jerry">Job Spec Jerry</a>
              <a href="#reggie">Resume Reggie</a>
              <a href="#search">AI Search</a>
              <a href="#interviews">AI Interviews</a>
              <a href="#ats">AI ATS</a>
              <a href="#processing">CV & job-spec processing</a>
            </div>
          </div>
        </div>
      </article>

      <article className="project" id="bridge">
        <div className="stage stage-b reveal">
          <div className="stage-bar">
            <p className="label">Project · Crayon Technologies</p>
            <p className="label">02 / 03</p>
          </div>
          <div className="stage-main">
            <h3 className="stage-name">
              The Bridge
              <span className="stage-sub">Privacy-first AI Reflection Platform</span>
            </h3>
            <ul className="index-list">
              <li>Production frontend</li>
              <li>Realtime AI conversations</li>
              <li>Admin platform</li>
              <li>Collective Pulse</li>
              <li>Production delivery</li>
            </ul>
          </div>
          <div className="stage-foot">
            <p className="stage-note">
              Built the production frontend and integrated realtime AI conversations, admin workflows, and backend
              services.
            </p>
            <ProjectSwitch
              previous={{ href: "#crayon", label: "Previous project, Crayon" }}
              next={{ href: "#brain", label: "Next project, Brain Inventory" }}
            />
          </div>
        </div>
        <div className="project-copy">
          <div>
            <p className="dek">Privacy-first AI reflection platform with realtime AI conversations.</p>
            <dl className="meta-dl meta-space">
              <div>
                <dt>Role</dt>
                <dd>Full-Stack AI Engineer</dd>
              </div>
              <div>
                <dt>Product</dt>
                <dd>
                  <ExternalLink href="https://thebridge144.com/">thebridge144.com</ExternalLink>
                </dd>
              </div>
              <div>
                <dt>My work</dt>
                <dd>Production frontend, streaming AI, admin, API integration</dd>
              </div>
              <div>
                <dt>Cloud</dt>
                <dd>Lambda, API Gateway, DynamoDB, S3, and related AWS services</dd>
              </div>
            </dl>
          </div>
          <div>
            <ul className="ticks">
              <li>Built the product frontend from scratch to production, including architecture and API integration.</li>
              <li>Implemented realtime streamed AI conversations and reflection workflows.</li>
              <li>Built a configurable admin platform for content, configuration, and user-facing experiences.</li>
              <li>Integrated backend services for the Collective Pulse / Insights experience.</li>
              <li>Delivered SEO, responsiveness, Core Web Vitals, performance, and accessibility.</li>
            </ul>
            <div className="jump">
              <a href="#frontend">Production frontend</a>
              <a href="#conversations">Realtime AI</a>
              <a href="#admin">Admin</a>
              <a href="#pulse">Collective Pulse</a>
              <a href="#delivery">Production delivery</a>
            </div>
          </div>
        </div>
        <div className="bridge-more">
          {bridgeFeatures.map((item) => (
            <AiDetails key={item.id} item={item} />
          ))}
          <p className="label arch-note">Cloud services I worked with on this product.</p>
          <Hood label="Cloud services on The Bridge" items={bridgeArchitecture} />
        </div>
      </article>

      <article className="project" id="brain">
        <div className="stage stage-b reveal">
          <div className="stage-bar">
            <p className="label">June 2024 – May 2025 · Hybrid</p>
            <p className="label">03 / 03</p>
          </div>
          <div className="stage-main">
            <h3 className="stage-name">
              Brain Inventory
              <span className="stage-sub">Software Developer</span>
            </h3>
            <ul className="index-list">
              <li>Waypoint</li>
              <li>Loyyal</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Material UI</li>
            </ul>
          </div>
          <div className="stage-foot">
            <p className="stage-note">An AI travel planner and a blockchain asset platform.</p>
            <ProjectSwitch
              previous={{ href: "#bridge", label: "Previous project, The Bridge" }}
              next={{ href: "#crayon", label: "Next project, Crayon" }}
            />
          </div>
        </div>
        <div className="project-copy">
          <div>
            <p className="roleline">Software Developer · Hybrid</p>
            <p>Production web products: Waypoint, an AI-powered travel planner, and Loyyal, a token studio.</p>
          </div>
          <ul className="ticks">
            <li>Waypoint: built the frontend, trip-planning workflows, and flight API integration for comparing and booking flights.</li>
            <li>Used React.js, JavaScript, Redux, and Material UI.</li>
            <li>Loyyal: built frontend interfaces and blockchain wallet connectivity for tokenized assets.</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
