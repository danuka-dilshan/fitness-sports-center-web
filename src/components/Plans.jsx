import { useState } from "react";
import { C } from "../constants";
import Reveal from "./Reveal";

const plans = [
  {
    name: "Starter",
    price: "29",
    featured: false,
    features: [
      { t: "Gym floor access", ok: true },
      { t: "Locker & shower", ok: true },
      { t: "2 group classes / week", ok: true },
      { t: "Personal training", ok: false },
      { t: "Nutrition coaching", ok: false },
      { t: "24/7 access", ok: false },
    ],
  },
  {
    name: "Pro",
    price: "59",
    featured: true,
    features: [
      { t: "Gym floor access", ok: true },
      { t: "Locker & shower", ok: true },
      { t: "Unlimited group classes", ok: true },
      { t: "2 PT sessions / month", ok: true },
      { t: "Nutrition consultation", ok: true },
      { t: "24/7 access", ok: false },
    ],
  },
  {
    name: "Elite",
    price: "99",
    featured: false,
    features: [
      { t: "Gym floor access", ok: true },
      { t: "Locker & shower", ok: true },
      { t: "Unlimited group classes", ok: true },
      { t: "Weekly PT sessions", ok: true },
      { t: "Full nutrition program", ok: true },
      { t: "24/7 access", ok: true },
    ],
  },
];

function PlanBtn({ featured }) {
  const [h, setH] = useState(false);
  return (
    <a
      href="#contact"
      style={{
        display: "block",
        width: "100%",
        textAlign: "center",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "0.95rem",
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        padding: "0.95rem",
        textDecoration: "none",
        background: featured ? (h ? C.goldDim : C.gold) : "transparent",
        color: featured ? C.black : h ? C.gold : C.offwhite,
        border: featured ? "none" : `1px solid rgba(242,239,228,0.25)`,
        transition: "all .2s",
        borderRadius: "6px",
        boxSizing: "border-box",
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      Get Started
    </a>
  );
}

export default function Plans() {
  return (
    <section id="plans" style={{ padding: "8rem 5vw", textAlign: "center" }}>
      <style>{`
        @media (max-width: 768px) {
          .plans-grid {
            grid-template-columns: 1fr !important;
            max-width: 400px !important;
          }
          .plans-section { padding: 5rem 5vw !important; }
        }
      `}</style>

      {/* Header */}
      <Reveal>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.7rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: C.gold,
            marginBottom: "1rem",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          <span
            style={{
              width: 20,
              height: 1,
              background: C.gold,
              display: "block",
            }}
          />
          Membership Plans
          <span
            style={{
              width: 20,
              height: 1,
              background: C.gold,
              display: "block",
            }}
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(2.8rem,6vw,5.5rem)",
            fontWeight: 800,
            lineHeight: 0.95,
            color: C.offwhite,
            margin: "0 0 1rem",
            letterSpacing: "0.015em",
          }}
        >
          CHOOSE YOUR
          <br />
          COMMITMENT
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "1rem",
            fontWeight: 300,
            color: C.gray,
            marginBottom: "4rem",
            letterSpacing: "0.02em",
          }}
        >
          No contracts. Cancel anytime. Start forging today.
        </p>
      </Reveal>

      {/* Cards */}
      <div
        className="plans-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "1.5rem",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <div
              style={{
                background: p.featured ? "#1a1600" : C.black,
                padding: "2.5rem 2rem",
                textAlign: "left",
                position: "relative",
                border: p.featured
                  ? `1px solid ${C.gold}`
                  : `1px solid rgba(242,239,228,0.07)`,
                borderRadius: "8px",
                height: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Badge */}
              {p.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "0.01rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: C.gold,
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: C.black,
                    padding: "0.4rem 1.3rem",
                    borderRadius: "0 0 6px 6px",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: p.featured ? C.gold : "rgba(242,239,228,0.4)",
                  marginBottom: "1.5rem",
                  marginTop: p.featured ? "1rem" : 0,
                }}
              >
                {p.name}
              </div>

              {/* Price */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "5px",
                  marginBottom: "1.8rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: "1.1rem",
                    color: "rgba(242,239,228,0.5)",
                    marginTop: "0.5rem",
                  }}
                >
                  $
                </span>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(3.5rem,7vw,4.5rem)",
                    lineHeight: 1,
                    color: C.offwhite,
                    letterSpacing: "0.035em",
                  }}
                >
                  {p.price}
                </span>
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.8rem",
                    color: "rgba(242,239,228,0.4)",
                    alignSelf: "flex-end",
                    paddingBottom: "0.5rem",
                    marginLeft: "2px",
                  }}
                >
                  /mo
                </span>
              </div>

              {/* Divider */}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(242,239,228,0.08)",
                  marginBottom: "1.5rem",
                }}
              />

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 2rem",
                  flex: 1,
                }}
              >
                {p.features.map((f) => (
                  <li
                    key={f.t}
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: f.ok ? 400 : 300,
                      color: f.ok
                        ? "rgba(242,239,228,0.75)"
                        : "rgba(242,239,228,0.2)",
                      padding: "0.55rem 0",
                      borderBottom: "1px solid rgba(242,239,228,0.05)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {f.ok ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        style={{ flexShrink: 0 }}
                      >
                        <circle
                          cx="7"
                          cy="7"
                          r="6.5"
                          stroke={C.gold}
                          strokeOpacity="0.5"
                        />
                        <path
                          d="M4 7l2 2 4-4"
                          stroke={C.gold}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        style={{ flexShrink: 0 }}
                      >
                        <circle
                          cx="7"
                          cy="7"
                          r="6.5"
                          stroke="rgba(242,239,228,0.1)"
                        />
                        <path
                          d="M5 5l4 4M9 5l-4 4"
                          stroke="rgba(242,239,228,0.15)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    {f.t}
                  </li>
                ))}
              </ul>

              <PlanBtn featured={p.featured} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
