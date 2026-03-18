import { useState } from "react";
import { C } from "../../constants";
import Reveal from "../Reveal";
import "./Plans.css";

const PLANS = [
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

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="plan-feature-icon"
    >
      <circle cx="7" cy="7" r="6.5" stroke={C.gold} strokeOpacity="0.5" />
      <path
        d="M4 7l2 2 4-4"
        stroke={C.gold}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="plan-feature-icon"
    >
      <circle cx="7" cy="7" r="6.5" stroke="rgba(242,239,228,0.1)" />
      <path
        d="M5 5l4 4M9 5l-4 4"
        stroke="rgba(242,239,228,0.15)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlanCard({ p }) {
  return (
    <div className={`plan-card${p.featured ? " plan-card--featured" : ""}`}>
      {p.featured && <div className="plan-badge">Most Popular</div>}
      <div className={`plan-name${p.featured ? " plan-name--featured" : ""}`}>
        {p.name}
      </div>
      <div className="plan-price">
        <span className="plan-price-currency">$</span>
        <span className="plan-price-amount">{p.price}</span>
        <span className="plan-price-period">/mo</span>
      </div>
      <div className="plan-divider" />
      <ul className="plan-features">
        {p.features.map((f) => (
          <li
            key={f.t}
            className={`plan-feature-item${!f.ok ? " plan-feature-item--disabled" : ""}`}
          >
            {f.ok ? <CheckIcon /> : <CrossIcon />}
            {f.t}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`plan-btn${p.featured ? " plan-btn--featured" : ""}`}
      >
        Get Started
      </a>
    </div>
  );
}

export default function Plans() {
  const [active, setActive] = useState(1); // start on Pro (featured)

  const prev = () => setActive((a) => (a - 1 + PLANS.length) % PLANS.length);
  const next = () => setActive((a) => (a + 1) % PLANS.length);

  return (
    <section id="plans" className="plans-section">
      <Reveal>
        <div className="plans-eyebrow">
          <span className="plans-eyebrow-line" />
          Membership Plans
          <span className="plans-eyebrow-line" />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="plans-heading">
          CHOOSE YOUR
          <br />
          COMMITMENT
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="plans-subtext">
          No contracts. Cancel anytime. Start forging today.
        </p>
      </Reveal>

      {/* Desktop grid */}
      <div className="plans-grid">
        {PLANS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <PlanCard p={p} />
          </Reveal>
        ))}
      </div>

      {/* Mobile slider */}
      <div className="plans-mobile">
        <div className="plans-mobile-slider">
          <button
            className="plans-arrow plans-arrow--left"
            onClick={prev}
            aria-label="Previous plan"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M13 4l-6 6 6 6"
                stroke="#cfa010"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="plans-mobile-card">
            <PlanCard p={PLANS[active]} />
          </div>

          <button
            className="plans-arrow plans-arrow--right"
            onClick={next}
            aria-label="Next plan"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7 4l6 6-6 6"
                stroke="#cfa010"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="plans-dots">
          {PLANS.map((p, i) => (
            <button
              key={p.name}
              className={`plans-dot${i === active ? " plans-dot--active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={p.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
