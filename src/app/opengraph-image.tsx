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
          padding: "80px",
          background: "#0b2545",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#d9b94a",
          }}
        >
          Advocacia Tributária
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, marginTop: 24, maxWidth: 900 }}>
          {siteConfig.lawyerName}
        </div>
        <div style={{ fontSize: 32, marginTop: 20, color: "#cbd5e1", maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
