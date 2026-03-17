import { C, imageHero } from "../constants";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        position: "relative",
        padding: "0 5vw 10vh",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .hero-image-wrap img {
            width: 100vw !important;
            opacity: 0.3 !important;
          }
          .hero-image-wrap {
            right: 0 !important;
          }
          .hero-stats {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            justify-content: flex-start !important;
            margin-top: 2rem !important;
            width: 100% !important;
          }
          .hero-stats > div {
            text-align: left !important;
          }
          .hero-main {
            max-width: 100% !important;
            width: 100% !important;
          }
          .hero-h1 {
            font-size: clamp(3rem, 14vw, 5rem) !important;
          }
          .hero-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            width: 100% !important;
          }
        }
      `}</style>

      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.04) 3px, transparent 5px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.04) 5px, transparent 3px)`,
          backgroundSize: "55px 55px",
        }}
      />

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.55) 50%, rgba(8,8,8,1) 100%)",
        }}
      />

      {/* Gold radial */}
      <div
        style={{
          position: "absolute",
          top: "-15vh",
          right: "-10vw",
          width: "60vw",
          height: "60vw",
          maxWidth: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(207,160,16,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Hero image */}
      <div
        className="hero-image-wrap"
        style={{
          position: "absolute",
          right: "-0vw",
          top: "48%",
          transform: "translateY(-50%)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        <img
          src={imageHero}
          alt="Fitness Sports Center"
          style={{ width: "90vw", height: "100%", objectFit: "contain" }}
        />
      </div>

      {/* bottom row: content left, stats right (desktop) / stacked (mobile) */}
      <div
        className="hero-bottom"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "flex-end",
          width: "100%",
          gap: "2rem",
        }}
      >
        {/* Content */}
        <div className="hero-main" style={{ maxWidth: 740 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              fontFamily: "'Montserrat', sans-serif",
              textTransform: "uppercase",
              color: C.gold,
              marginBottom: "1.2rem",
            }}
          >
            <span
              style={{
                display: "block",
                width: 28,
                height: 2,
                background: C.gold,
              }}
            />
            Est. 2023 — Sports Center
          </div>

          <h1
            className="hero-h1"
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(4rem,11vw,10rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: C.offwhite,
              margin: "0 0 1.6rem",
            }}
          >
            FORGE
            <br />
            YOUR
            <br />
            <span style={{ color: C.gold }}>BEST</span>
          </h1>

          <p
            style={{
              fontFamily: "'Barlow',sans-serif",
              fontSize: "1rem",
              fontWeight: 450,
              lineHeight: 1.75,
              color: C.gray,
              maxWidth: 460,
              marginBottom: "2.5rem",
            }}
          >
            A gym built for those who refuse to settle. Professional coaching,
            world-class equipment, and a community that pushes you past every
            limit.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href="#plans"
              style={{
                display: "inline-block",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "1rem 2.4rem",
                background: C.gold,
                color: C.black,
                textDecoration: "none",
                transition: "background .2s",
                borderRadius: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.background = C.goldDim)}
              onMouseLeave={(e) => (e.target.style.background = C.gold)}
            >
              View Plans
            </a>

            <a
              href="#about"
              style={{
                display: "inline-block",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "1rem 2.4rem",
                border: `1px solid rgba(242,239,228,0.2)`,
                color: C.offwhite,
                textDecoration: "none",
                transition: "border-color .2s",
                borderRadius: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.borderColor = C.offwhite)}
              onMouseLeave={(e) =>
                (e.target.style.borderColor = "rgba(242,239,228,0.2)")
              }
            >
              Explore
            </a>
          </div>
        </div>

        {/* Stats — absolute bottom-right on desktop, flows below on mobile */}
        <div
          className="hero-stats"
          style={{
            position: "absolute",
            bottom: 0,
            right: "5vw",
            zIndex: 2,
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {[
            ["12K+", "Members"],
            ["48+", "Classes/Wk"],
            ["18", "Trainers"],
          ].map(([n, l]) => (
            <div key={l} style={{ textAlign: "right" }}>
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: "2.8rem",
                  lineHeight: 1,
                }}
              >
                <span style={{ color: C.gold }}>{n}</span>
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: C.gray,
                  marginTop: 4,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
