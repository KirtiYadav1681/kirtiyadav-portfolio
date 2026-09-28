import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="foot">
        <span>
          {site.name} · {site.title}
        </span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
