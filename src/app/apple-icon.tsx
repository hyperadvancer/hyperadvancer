import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
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
          background: "#0A3A97",
          borderRadius: "32px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: "110px",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1,
          }}
        >
          H
        </div>
      </div>
    ),
    { ...size }
  );
}
