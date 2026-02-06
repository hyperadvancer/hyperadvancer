import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hyperadvancer — Bart Collet";
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
          background: "linear-gradient(135deg, #0A3A97 0%, #0d47b1 50%, #1565c0 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#E90502",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.15)",
            marginBottom: "40px",
            fontSize: "36px",
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          H
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Hyperadvancer
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.8)",
            lineHeight: 1.4,
          }}
        >
          Healthcare Innovation &amp; AI Advisory — Bart Collet
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          hyperadvancer.com
        </div>
      </div>
    ),
    { ...size }
  );
}
