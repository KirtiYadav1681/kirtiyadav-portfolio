import { ledger } from "@/lib/content";

export function Ledger() {
  return (
    <div className="ledger">
      {ledger.map((item) => (
        <a key={item.href} href={item.href}>
          <span className="label">{item.index}</span>
          <strong>{item.title}</strong>
          <span>{item.body}</span>
        </a>
      ))}
    </div>
  );
}
