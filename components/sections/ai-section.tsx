import { crayonEngineering, crayonFeatures } from "@/lib/content";
import { AiFeatureGrid } from "@/components/sections/ai-feature-grid";
import { Hood } from "@/components/ui/ai-details";

export function AiSection() {
  return (
    <section id="ai" aria-labelledby="ai-title">
      <div className="sec sec-flush-top">
        <header className="sec-head">
          <p className="label">03 — AI features</p>
          <h2 className="display reveal" id="ai-title">
            AI features I have shipped.
          </h2>
        </header>
        <div className="ai-intro">
          <p className="pull">
            I work across the product layer and the AI layer — integrating models into real user workflows and
            production systems.
          </p>
          <p className="lead">
            These shipped on Crayon.jobs, a recruitment platform serving 175K+ users. Open one for what it does
            and what I built.
          </p>
        </div>
        <AiFeatureGrid features={crayonFeatures} />
        <Hood label="Engineering underneath the features" items={crayonEngineering} />
      </div>
    </section>
  );
}
