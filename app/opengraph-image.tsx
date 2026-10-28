import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const alt = "Listerr 360 — The Complete Commerce Operating Loop for India"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0c1a3d 0%, #1e3a8a 45%, #2563eb 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "white",
              color: "#1e3a8a",
              fontWeight: 800,
              fontSize: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            L
          </div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>Listerr 360</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            The Complete Commerce Operating Loop for India
          </div>
          <div style={{ fontSize: 30, opacity: 0.85, lineHeight: 1.3 }}>
            Orders In · Customers Back · Screens Update · Cameras Watch
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            opacity: 0.75,
          }}
        >
          <div>listerr.in</div>
          <div>Built for Indian brands</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
