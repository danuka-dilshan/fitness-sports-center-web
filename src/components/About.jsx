import { LOGO, C } from "../constants";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center",
        padding: "8rem 5vw",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            padding: 5rem 5vw !important;
          }
          .about-image-wrap {
            aspect-ratio: 4/3 !important;
          }
          .about-founded {
            bottom: -1rem !important;
            right: -0.5rem !important;
            padding: 1rem 1.4rem !important;
          }
          .about-founded-year {
            font-size: 2rem !important;
          }
          .about-features {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .about-features {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Reveal>
        <div style={{ position: "relative" }}>
          <div
            className="about-image-wrap"
            style={{
              width: "100%",
              aspectRatio: "3/4",
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
              style={{ width: "70%", objectFit: "contain", opacity: 0.7 }}
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
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.gold,
              }}
            >
              Fitness Sports Center
            </div>
          </div>
          <div
            className="about-founded"
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              right: "-1.5rem",
              background: C.gold,
              padding: "1.5rem 2rem",
              fontFamily: "'Barlow Condensed',sans-serif",
              color: C.black,
            }}
          >
            <div
              className="about-founded-year"
              style={{
                fontSize: "3rem",
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              2023
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
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
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "clamp(2.8rem,6vw,5.5rem)",
              fontWeight: 800,
              lineHeight: 0.95,
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
              fontFamily: "'Barlow',sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.8,
              color: C.gray,
              marginBottom: "1rem",
            }}
          >
            Fitness Sports Center was built on a simple belief: every person
            carries untapped potential. We created a space where ambition meets
            action — where your goals aren't just supported, they're forged into
            reality.
          </p>
          <p
            style={{
              fontFamily: "'Barlow',sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.8,
              color: C.gray,
              marginBottom: "2.5rem",
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
                    fontSize: "1.6rem",
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
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: C.offwhite,
                    marginBottom: "0.4rem",
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow',sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 300,
                    color: C.gray,
                    lineHeight: 1.5,
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        #about {
          display: grid;
        }
      `}</style>
    </section>
  );
}
