import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.brand;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#fffffe",
          color: "#1c1b19",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8a6a34",
            fontFamily: "sans-serif",
          }}
        >
          Advocacia Tributária
        </div>
        <div style={{ width: 64, height: 2, background: "#8a6a34", marginTop: 28 }} />
        <div style={{ fontSize: 66, marginTop: 28, maxWidth: 900 }}>
          {siteConfig.lawyerName}
        </div>
        <div style={{ fontSize: 30, marginTop: 20, color: "#55524a", maxWidth: 820, fontFamily: "sans-serif" }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
