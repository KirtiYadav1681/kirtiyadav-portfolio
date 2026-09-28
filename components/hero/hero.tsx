import Image from "next/image";
import { HeroCanvas } from "@/components/hero/hero-canvas";
import { Magnet } from "@/components/motion/magnet";
import { CountUp } from "@/components/ui/count-up";
import { site } from "@/lib/site";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <HeroCanvas>
        <div className="hero-copy">
          <p className="label hero-kicker">Full-stack · AI · Product</p>
          <h1>
            <span className="line">
              <span className="line-in hero-id">{site.name}</span>
            </span>
            <span className="line">
              <span className="line-in hero-role">Full-Stack</span>
            </span>
            <span className="line">
              <span className="line-in hero-role">AI Engineer</span>
            </span>
          </h1>
          <p className="dek">{site.dek}</p>
          <div className="cta">
            <Magnet href="#work" className="btn btn-ink">
              See the work
              <ArrowIcon />
            </Magnet>
            <Magnet href="#contact" className="btn btn-line">
              Get in touch
            </Magnet>
            <Magnet href={site.resumes.fullStack.href} className="btn btn-line" download>
              Download resume
            </Magnet>
          </div>
          <p className="resume-alt">
            <a href={site.resumes.fullStack.href} download="">
              {site.resumes.fullStack.label}
            </a>
            {" · "}
            <a href={site.resumes.ai.href} download="">
              {site.resumes.ai.label}
            </a>
          </p>
        </div>
        <div className="hero-portrait-slot">
          <figure className="hero-portrait">
            <Image
              className="hero-portrait-img"
              src="/images/kirti-hero-new.png"
              alt="Portrait of Kirti Yadav"
              fill
              preload
              sizes="(max-width: 1240px) min(100vw, 680px), 36vw"
            />
          </figure>
        </div>
        <aside className="proof" aria-label="At a glance">
          <div className="proof-in">
            <p className="proof-stat">
              <CountUp value={175} suffix="K+" />
            </p>
            <p className="proof-sub">active users on Crayon Jobs</p>
            <dl className="proof-rows">
              <div>
                <dt>Since</dt>
                <dd>May 2025</dd>
              </div>
              <div>
                <dt>Span</dt>
                <dd>3+ years building software</dd>
              </div>
              <div>
                <dt>Based</dt>
                <dd>Indore, India</dd>
              </div>
            </dl>
          </div>
        </aside>
      </HeroCanvas>
    </section>
  );
}
