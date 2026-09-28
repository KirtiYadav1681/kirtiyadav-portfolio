import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Kirti Yadav — Full-Stack AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(118deg, #f6efff 0%, #d2b8ff 24%, #b594ff 46%, #9eb6ff 68%, #d7e7ff 100%)",
          color: "#14151c",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Full-stack · AI · Product
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, lineHeight: 0.9, letterSpacing: -3 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", fontSize: 58, lineHeight: 0.95, letterSpacing: -2, marginTop: 16 }}>
            {site.title}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, lineHeight: 1.3, maxWidth: 820 }}>{site.dek}</div>
      </div>
    ),
    { ...size },
  );
}
