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
          background: "#1c1b19",
          color: "#ede3cf",
          fontFamily: "serif",
          fontSize: 30,
        }}
      >
        AC
      </div>
    ),
    { ...size }
  );
}
