import { crayonEngineering, crayonFeatures } from "@/lib/content";
import { AiDetails, Hood } from "@/components/ui/ai-details";

export function AiSection() {
  return (
    <section id="ai" aria-labelledby="ai-title">
      <div className="sec sec-flush-top">
        <header className="sec-head">
          <p className="label">03 — Crayon · AI in the product</p>
          <h2 className="display reveal" id="ai-title">
            AI that shows up in the hiring flow.
          </h2>
        </header>
        <div className="ai-intro">
          <p className="pull">
            On Crayon, a person describes a role, uploads a CV, or sits an interview. The AI turns that into
            something the hiring workflow can use.
          </p>
          <p className="lead">
            I worked on these experiences inside the live product — integrating them, not designing the whole
            platform. Open one for what it does, my part, and why it is in the product.
          </p>
        </div>
        {crayonFeatures.map((item) => (
          <AiDetails key={item.id} item={item} />
        ))}
        <Hood label="Engineering underneath the features" items={crayonEngineering} />
      </div>
    </section>
  );
}
