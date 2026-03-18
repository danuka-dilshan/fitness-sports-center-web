import { C, imageHero } from "../constants";

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: flex-end;
          position: relative;
          padding: 0 5vw 10vh;
          overflow: hidden;
          background: #080808;
        }

        .hero-image-wrap {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          user-select: none;
          z-index: 1;
        }
        .hero-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .hero-h1 {
          font-family: 'Bebas Neue', 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(4rem, 11vw, 10rem);
          line-height: 0.9;
          letter-spacing: 0.02em;
          margin: 0 0 1.6rem;
        }

        .hero-stats {
          position: absolute;
          bottom: 0;
          right: 5vw;
          z-index: 3;
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .hero-section {
            align-items: flex-start !important;
            padding: 0 !important;
            min-height: 100vh !important;
            justify-content: flex-end !important;
            flex-direction: column !important;
          }

          .hero-image-wrap {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            z-index: 1 !important;
          }
          .hero-image-wrap img {
            object-position: 70% top !important;
          }

          .hero-fade-bottom {
            background: linear-gradient(
              to bottom,
              rgba(8,8,8,0.0) 0%,
              rgba(8,8,8,0.3) 30%,
              rgba(8,8,8,0.85) 55%,
              rgba(8,8,8,1) 72%
            ) !important;
          }

          .hero-bottom {
            position: relative !important;
            z-index: 3 !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            width: 100% !important;
            padding: 0 5vw 2.5rem !important;
            gap: 0 !important;
          }

          .hero-main {
            max-width: 100% !important;
            width: 100% !important;
          }

          .hero-h1 {
            font-size: clamp(3.4rem, 16vw, 5.5rem) !important;
            margin-bottom: 0.8rem !important;
            line-height: 0.88 !important;
          }

          .hero-body-text {
            font-size: 0.9rem !important;
            margin-bottom: 1.6rem !important;
            max-width: 100% !important;
          }

          /* Buttons: side by side, not full width */
          .hero-buttons {
            flex-wrap: nowrap !important;
            gap: 0.75rem !important;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            padding: 0.85rem 1.6rem !important;
            font-size: 0.72rem !important;
          }

          /* Stats: out of absolute, 3-col grid */
          .hero-stats {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            width: 100% !important;
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            justify-content: flex-start !important;
            align-items: flex-start !important;
            gap: 0 !important;
            flex-wrap: nowrap !important;
            margin-top: 1.8rem !important;
            padding-top: 1.4rem !important;
            border-top: 1px solid rgba(242,239,228,0.12) !important;
          }
          .hero-stats > div {
            text-align: left !important;
            padding: 0 0.8rem !important;
          }
          .hero-stats > div:first-child {
            padding-left: 0 !important;
          }
          .hero-stats > div:last-child {
            padding-right: 0 !important;
          }
          .hero-stats > div:not(:last-child) {
            border-right: 1px solid rgba(242,239,228,0.12) !important;
          }
          .hero-stat-number {
            font-size: 2.2rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-h1 {
            font-size: clamp(3rem, 15vw, 4.5rem) !important;
          }
          .hero-stat-number {
            font-size: 1.9rem !important;
          }
          .hero-stats > div {
            padding: 0 0.5rem !important;
          }
          .hero-stats > div:first-child {
            padding-left: 0 !important;
          }
        }
      `}</style>

      <section id="hero" className="hero-section">

        {/* Grid background */}
        <div
          style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 3px, transparent 5px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 5px, transparent 3px)
            `,
            backgroundSize: "55px 55px",
          }}
        />

        {/* Hero image */}
        <div className="hero-image-wrap">
          <img src={imageHero} alt="Fitness Sports Center" />
        </div>

        {/* Bottom fade */}
        <div
          className="hero-fade-bottom"
          style={{
            position: "absolute", inset: 0, zIndex: 2,
            background: "linear-gradient(to bottom, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0.45) 50%, rgba(8,8,8,0.95) 100%)",
          }}
        />

        {/* Left fade */}
        <div
          className="hero-fade-left"
          style={{
            position: "absolute", inset: 0, zIndex: 2,
            background: "linear-gradient(to right, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.5) 40%, transparent 70%)",
          }}
        />

        {/* Gold radial */}
        <div
          style={{
            position: "absolute", top: "-15vh", right: "-10vw",
            width: "60vw", height: "60vw", maxWidth: 700,
            borderRadius: "50%", pointerEvents: "none", zIndex: 2,
            background: "radial-gradient(circle, rgba(207,160,16,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Bottom row */}
        <div
          className="hero-bottom"
          style={{
            position: "relative", zIndex: 3,
            display: "flex", alignItems: "flex-end",
            width: "100%", gap: "2rem",
          }}
        >
          {/* Content */}
          <div className="hero-main" style={{ maxWidth: 740 }}>

            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.7rem",
              fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.2em",
              fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase",
              color: C.gold, marginBottom: "1.2rem",
            }}>
              <span style={{ display: "block", width: 28, height: 2, background: C.gold }} />
              Est. 2023 — Sports Center
            </div>

            {/* Heading */}
            <h1 className="hero-h1" style={{ color: C.offwhite }}>
              FORGE<br />YOUR<br />
              <span style={{ color: C.gold }}>BEST</span>
            </h1>

            {/* Body */}
            <p
              className="hero-body-text"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "1rem", fontWeight: 300,
                lineHeight: 1.75, color: C.gray,
                maxWidth: 460, marginBottom: "2.5rem",
                letterSpacing: "0.01em",
              }}
            >
              A gym built for those who refuse to settle. Professional coaching,
              world-class equipment, and a community that pushes you past every limit.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <a
                href="#plans"
                className="hero-btn-primary"
                style={{
                  display: "inline-block",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.95rem", fontWeight: 900,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  padding: "1rem 2.2rem", background: C.gold,
                  color: C.black, textDecoration: "none",
                  transition: "background .2s", borderRadius: "10px",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.goldDim)}
                onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
              >
                View Plans
              </a>
              <a
                href="#about"
                className="hero-btn-secondary"
                style={{
                  display: "inline-block",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.95rem", fontWeight: 700,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  padding: "1.18rem 3.3rem",
                  border: "1px solid rgba(242,239,228,0.2)",
                  color: C.offwhite, textDecoration: "none",
                  transition: "border-color .2s", borderRadius: "10px",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.offwhite)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(242,239,228,0.2)")}
              >
                Explore
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {[
              ["12K+", "Members"],
              ["48+", "Classes/Wk"],
              ["18", "Trainers"],
            ].map(([n, l]) => (
              <div key={l} style={{ textAlign: "right" }}>
                <div
                  className="hero-stat-number"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontWeight: 800, fontSize: "2.8rem",
                    lineHeight: 1, color: C.gold,
                  }}
                >
                  {n}
                </div>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600, fontSize: "0.75rem",
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: C.gray, marginTop: 4,
                }}>
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
