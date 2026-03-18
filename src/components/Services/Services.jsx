import { useState, useMemo } from "react";
import { C } from "../../constants";
import Reveal from "../Reveal";
import "./Services.css";

const SERVICES = [
  {
    num: "01",
    title: "Strength Training",
    category: "Training",
    desc: "Free weights, machines, and structured programming to build real, functional strength.",
  },
  {
    num: "02",
    title: "HIIT & Cardio",
    category: "Cardio",
    desc: "High-intensity interval sessions and dedicated cardio zones to torch fat and boost endurance.",
  },
  {
    num: "03",
    title: "Personal Training",
    category: "Training",
    desc: "One-on-one sessions with certified trainers who design a custom plan for your exact goals.",
  },
  {
    num: "04",
    title: "Yoga & Mobility",
    category: "Recovery",
    desc: "Classes focusing on flexibility, recovery, and mind-body connection - essential for any routine.",
  },
  {
    num: "05",
    title: "Group Classes",
    category: "Cardio",
    desc: "48+ weekly sessions - CrossFit, spin, boxing, Pilates - led by energising coaches.",
  },
  {
    num: "06",
    title: "Nutrition Coaching",
    category: "Nutrition",
    desc: "Personalised meal planning and macro guidance to fuel training and accelerate results.",
  },
];

const CATEGORIES = ["All", "Training", "Cardio", "Recovery", "Nutrition"];

export default function Services() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return SERVICES.filter((s) => {
      const matchesCategory =
        activeCategory === "All" || s.category === activeCategory;
      const matchesQuery =
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.desc.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <section id="services" className="services-section">
      {/* Header */}
      <div className="services-header">
        <div>
          <Reveal>
            <div className="services-eyebrow">
              <span className="services-eyebrow-line" />
              What We Offer
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="services-heading">
              SERVICES &amp;
              <br />
              PROGRAMS
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <p className="services-subtext">
            Every program is crafted to deliver measurable results and lasting
            change.
          </p>
        </Reveal>
      </div>

      {/* Search + Filter bar */}
      <div className="services-controls">
        <div className="services-search-wrap">
          <svg
            className="services-search-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle
              cx="6.5"
              cy="6.5"
              r="5.5"
              stroke={C.gray}
              strokeWidth="1.3"
            />
            <path
              d="M11 11l3 3"
              stroke={C.gray}
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            className="services-search"
            placeholder="Search programs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              className="services-search-clear"
              onClick={() => setQuery("")}
            >
              ✕
            </button>
          )}
        </div>
        <div className="services-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`services-filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid or empty state */}
      {filtered.length > 0 ? (
        <div
          className="services-grid"
          data-count={Math.min(filtered.length, 3)}
        >
          {filtered.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.07}>
              <div className="service-card">
                <div className="service-card__num">{s.num}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <span className="service-card__category">{s.category}</span>
                <div className="service-card__bar" />
                <p className="service-card__desc">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="services-empty">
          <p>
            No programs found for <strong>"{query}"</strong>
          </p>
          <button
            onClick={() => {
              setQuery("");
              setActiveCategory("All");
            }}
          >
            Clear search
          </button>
        </div>
      )}
    </section>
  );
}
