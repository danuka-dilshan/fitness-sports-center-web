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

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 0 !important;
            min-height: 100vh !important;
          }

          /* Image wrapper stays absolute but only covers top portion */
          .hero-image-wrap {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            height: 100% !important;
            z-index: 1 !important;
          }
          .hero-image-wrap img {
            object-position: 60% top !important;
            opacity: 1 !important;
          }

          /* Grid stays absolute behind image — no change needed */

          /* Strong dark overlay so text is readable over image */
          .hero-fade-bottom {
            background: linear-gradient(
              to bottom,
              rgba(8,8,8,0.2) 0%,
              rgba(8,8,8,0.5) 35%,
              rgba(8,8,8,0.92) 65%,
              rgba(8,8,8,1) 100%
            ) !important;
          }
          .hero-fade-left {
            background: linear-gradient(
              to right,
              rgba(8,8,8,0.9) 0%,
              rgba(8,8,8,0.6) 50%,
              transparent 100%
            ) !important;
          }

          /* Content */
          .hero-bottom {
            position: relative !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            width: 100% !important;
            padding: 55vw 5vw 6rem !important;
            gap: 0 !important;
            z-index: 3 !important;
          }

          .hero-main {
            max-width: 100% !important;
            width: 100% !important;
          }

          .hero-h1 {
            font-size: clamp(3rem, 14vw, 5rem) !important;
            margin-bottom: 1rem !important;
          }

          .hero-stats {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            justify-content: flex-start !important;
            margin-top: 1.5rem !important;
            width: 100% !important;
            gap: 1.5rem !important;
          }
          .hero-stats > div {
            text-align: left !important;
          }
        }

        @media (max-width: 480px) {
          .hero-image-wrap img {
            object-position: 55% top !important;
          }
          .hero-bottom {
            padding-top: 60vw !important;
          }
          .hero-h1 {
            font-size: clamp(2.8rem, 13vw, 4rem) !important;
          }
          .hero-stats {
            gap: 1rem !important;
          }
        }
      `}</style>

      <section id="hero" className="hero-section">

        {/* Grid background — z0, behind everything */}
        <div
          className="hero-grid"
          style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 3px, transparent 5px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 5px, transparent 3px)
            `,
            backgroundSize: "55px 55px",
          }}
        />

        {/* Hero image — z1, on top of grid */}
        <div className="hero-image-wrap">
          <img src={imageHero} alt="Fitness Sports Center" />
        </div>

        {/* Bottom fade — z2 */}
        <div
          className="hero-fade-bottom"
          style={{
            position: "absolute", inset: 0, zIndex: 2,
            background: "linear-gradient(to bottom, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0.45) 50%, rgba(8,8,8,0.95) 100%)",
          }}
        />

        {/* Left fade — z2 */}
        <div
          className="hero-fade-left"
          style={{
            position: "absolute", inset: 0, zIndex: 2,
            background: "linear-gradient(to right, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.5) 40%, transparent 70%)",
          }}
        />

        {/* Gold radial — z2 */}
        <div
          className="hero-radial"
          style={{
            position: "absolute", top: "-15vh", right: "-10vw",
            width: "60vw", height: "60vw", maxWidth: 700,
            borderRadius: "50%", pointerEvents: "none", zIndex: 2,
            background: "radial-gradient(circle, rgba(207,160,16,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Bottom row: content left + stats right */}
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
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem", fontWeight: 300,
              lineHeight: 1.75, color: C.gray,
              maxWidth: 460, marginBottom: "2.5rem",
              letterSpacing: "0.01em",
            }}>
              A gym built for those who refuse to settle. Professional coaching,
              world-class equipment, and a community that pushes you past every limit.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="#plans"
                style={{
                  display: "inline-block",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.78rem", fontWeight: 900,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  padding: "1rem 2.2rem", background: C.gold,
                  color: C.black, textDecoration: "none",
                  transition: "background .2s", borderRadius: "10px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.goldDim)}
                onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
              >
                View Plans
              </a>
              <a
                href="#about"
                style={{
                  display: "inline-block",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.78rem", fontWeight: 700,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  padding: "1rem 2.2rem",
                  border: "1px solid rgba(242,239,228,0.2)",
                  color: C.offwhite, textDecoration: "none",
                  transition: "border-color .2s", borderRadius: "10px",
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
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontWeight: 800, fontSize: "2.8rem",
                  lineHeight: 1, color: C.gold,
                }}>
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
