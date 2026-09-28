import { marqueeItems } from "@/lib/content";

function Group() {
  return (
    <p className="marquee-group">
      {marqueeItems.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </p>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <Group />
        <Group />
      </div>
    </div>
  );
}
