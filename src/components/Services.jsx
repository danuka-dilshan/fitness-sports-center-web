import { useState } from "react";
import { C } from "../constants";
import Reveal from "./Reveal";

const services = [
  {
    num: "01",
    title: "Strength Training",
    desc: "Free weights, machines, and structured programming to build real, functional strength.",
  },
  {
    num: "02",
    title: "HIIT & Cardio",
    desc: "High-intensity interval sessions and dedicated cardio zones to torch fat and boost endurance.",
  },
  {
    num: "03",
    title: "Personal Training",
    desc: "One-on-one sessions with certified trainers who design a custom plan for your exact goals.",
  },
  {
    num: "04",
    title: "Yoga & Mobility",
    desc: "Classes focusing on flexibility, recovery, and mind-body connection - essential for any routine.",
  },
  {
    num: "05",
    title: "Group Classes",
    desc: "48+ weekly sessions - CrossFit, spin, boxing, Pilates - led by energising coaches.",
  },
  {
    num: "06",
    title: "Nutrition Coaching",
    desc: "Personalised meal planning and macro guidance to fuel training and accelerate results.",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="services"
      style={{
        background: C.brown,
        padding: "8rem 5vw",
        borderTop: `1px solid ${C.charcoal}`,
        borderBottom: `1px solid ${C.charcoal}`,
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1rem !important;
            margin-bottom: 2.5rem !important;
          }
          .services-section {
            padding: 5rem 5vw !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      <div
        className="services-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "4rem",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
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
                  fontFamily: "'Montserrat', sans-serif",
                }}
              />
              What We Offer
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
                margin: 0,
              }}
            >
              SERVICES &amp;
              <br />
              PROGRAMS
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <p
            style={{
              fontFamily: "'Barlow',sans-serif",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: C.gray,
              maxWidth: 280,
              lineHeight: 1.7,
            }}
          >
            Every program is crafted to deliver measurable results and lasting
            change.
          </p>
        </Reveal>
      </div>

      <div
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 1,
          background: C.charcoal,
        }}
      >
        {services.map((s, i) => {
          const isLastAlone =
            i === services.length - 1 && services.length % 3 !== 0;
          return (
            <Reveal
              key={s.num}
              delay={i * 0.07}
              style={{ gridColumn: isLastAlone ? "span 2" : "auto" }}
            >
              <div
                onMouseEnter={() => setHovered(s.num)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  height: "100%",
                  background: hovered === s.num ? C.charcoal : C.brown,
                  padding: "2.5rem 2rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "background .3s",
                  cursor: "default",
                  borderBottom:
                    hovered === s.num
                      ? `2px solid ${C.gold}`
                      : "2px solid transparent",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.18em",
                    color: C.gold,
                    marginBottom: "1.5rem",
                    opacity: 0.9,
                  }}
                >
                  {s.num}
                </div>

                <h3
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.2rem, 2vw, 1.45rem)",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    color: C.offwhite,
                    marginBottom: "0.75rem",
                    lineHeight: 1.1,
                  }}
                >
                  {s.title}
                </h3>

                <div
                  style={{
                    width: hovered === s.num ? "2.5rem" : "1.2rem",
                    height: 2,
                    background: C.gold,
                    marginBottom: "1rem",
                    transition: "width .3s ease",
                  }}
                />

                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: C.gray,
                    letterSpacing: "0.01em",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
