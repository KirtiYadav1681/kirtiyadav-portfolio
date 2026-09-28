import type { AiFeature } from "@/lib/content";

export function AiDetails({ item }: { item: AiFeature }) {
  return (
    <details className="ai-item" id={item.id} {...(item.defaultOpen ? { open: true } : {})}>
      <summary>
        <span className="label">{item.index}</span>
        <span className="ai-name">{item.name}</span>
        <span className="ai-kind">{item.kind}</span>
        <span className="plus" aria-hidden="true" />
      </summary>
      <div className="ai-panel">
        <div className="ai-panel-in">
          <div className="ai-panel-body">
            <div className="ai-cols">
              <div>
                <h3>What it does</h3>
                {item.does.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div>
                <h3>My role</h3>
                {item.role.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <p className="tech">{item.tech}</p>
          </div>
        </div>
      </div>
    </details>
  );
}

export function Hood({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="hood" aria-label={label}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
