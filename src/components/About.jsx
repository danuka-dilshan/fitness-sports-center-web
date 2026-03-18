import { LOGO, C } from "../constants";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="about-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center",
        padding: "8rem 5vw",
      }}
    >
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          padding: 8rem 5vw;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
            padding: 5rem 5vw !important;
          }
          .about-image-wrap {
            aspect-ratio: 4/3 !important;
          }
          .about-image-label {
            font-size: clamp(0.85rem, 4vw, 1.2rem) !important;
            right: 7rem !important;
            bottom: 1rem !important;
            left: 1rem !important;
          }
          .about-founded {
            padding: 1rem 1.2rem !important;
          }
          .about-founded-year {
            font-size: 2.2rem !important;
          }
          .about-features {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .about-grid {
            padding: 4rem 4vw !important;
            gap: 3.5rem !important;
          }
          .about-image-wrap {
            aspect-ratio: 3/2 !important;
          }
          .about-image-label {
            font-size: clamp(0.75rem, 3.5vw, 1rem) !important;
            right: 6.5rem !important;
          }
          .about-founded {
            padding: 0.8rem 1rem !important;
          }
          .about-founded-year {
            font-size: 1.8rem !important;
          }
          .about-features {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Reveal>
        <div style={{ position: "relative", marginBottom: "2.5rem" }}>
          <div
            className="about-image-wrap"
            style={{
              width: "100%",
              aspectRatio: "1/1",
              background: C.brown,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={LOGO}
              alt="Logo"
              style={{ width: "85%", objectFit: "contain", opacity: 0.9 }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 40%, rgba(8,8,8,0.85) 100%)",
              }}
            />
            <div
              className="about-image-label"
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                right: "8rem",
                fontFamily: "'Bebas Neue', sans-serif",
                fontWeight: 800,
                fontSize: "1.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: C.gold,
                lineHeight: 1.2,
              }}
            >
              Fitness Sports Center
            </div>
          </div>

          <div
            className="about-founded"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              background: C.gold,
              padding: "1.5rem 2rem",
              fontFamily: "'Barlow Condensed', sans-serif",
              color: C.black,
              zIndex: 2,
            }}
          >
            <div
              className="about-founded-year"
              style={{
                fontSize: "3.2rem",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              2023
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Founded
            </div>
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: C.gold,
              marginBottom: "1rem",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <span
              style={{
                width: 24,
                height: 2,
                background: C.gold,
                display: "block",
              }}
            />
            Our Story
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            style={{
              fontFamily: "'Bebas Neue', 'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.8rem,6vw,5.5rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "0.015em",
              color: C.offwhite,
              margin: "0 0 1.5rem",
            }}
          >
            MORE THAN
            <br />A GYM
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.8,
              color: C.gray,
              marginBottom: "1rem",
              letterSpacing: "0.01em",
            }}
          >
            Fitness Sports Center was built on a simple belief: every person
            carries untapped potential. We created a space where ambition meets
            action - where your goals aren't just supported, they're forged into
            reality.
          </p>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.8,
              color: C.gray,
              marginBottom: "2.5rem",
              letterSpacing: "0.01em",
            }}
          >
            From beginner to elite athlete, our facility offers the tools,
            guidance, and community to help you reach levels you didn't think
            were possible.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div
            className="about-features"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              background: C.charcoal,
            }}
          >
            {[
              [
                "HP",
                "High Performance",
                "Elite-grade equipment for real results.",
              ],
              ["CM", "Community", "A culture that lifts every member higher."],
              [
                "EC",
                "Expert Coaching",
                "Certified pros dedicated to your goals.",
              ],
              ["24", "24/7 Access", "Train on your schedule, every day."],
            ].map(([abbr, title, desc]) => (
              <div
                key={title}
                style={{ background: C.black, padding: "1.5rem" }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "2rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: C.gold,
                    marginBottom: "0.7rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {abbr}
                </div>
                <div
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: C.offwhite,
                    marginBottom: "0.4rem",
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 300,
                    color: C.gray,
                    lineHeight: 1.5,
                    letterSpacing: "0.01em",
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
