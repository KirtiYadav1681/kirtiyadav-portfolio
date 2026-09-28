import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0c0f",
          color: "#f4f5fb",
          fontSize: 20,
          letterSpacing: -1,
        }}
      >
        K
      </div>
    ),
    { ...size },
  );
}
