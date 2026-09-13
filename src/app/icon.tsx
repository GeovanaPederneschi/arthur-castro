import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#0b2545",
          borderRadius: "50%",
          color: "#d9b94a",
          fontFamily: "sans-serif",
          fontSize: 32,
          fontWeight: 700,
        }}
      >
        AC
      </div>
    ),
    { ...size }
  );
}
