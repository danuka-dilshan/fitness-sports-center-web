import { imageHero } from "../../constants";
import "./Hero.css";

const STATS = [
  ["12K+", "Members"],
  ["48+", "Classes/Wk"],
  ["18", "Trainers"],
];

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Grid background */}
      <div className="hero-grid-bg" />

      {/* Hero image */}
      <div className="hero-image-wrap">
        <img src={imageHero} alt="Fitness Sports Center" />
      </div>

      {/* Overlays */}
      <div className="hero-fade-bottom" />
      <div className="hero-fade-left" />
      <div className="hero-gold-radial" />

      {/* Bottom row */}
      <div className="hero-bottom">
        {/* Main content */}
        <div className="hero-main">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            Est. 2023 — Sports Center
          </div>

          {/* Heading */}
          <h1 className="hero-h1">
            FORGE
            <br />
            YOUR
            <br />
            <span className="hero-h1-gold">BEST</span>
          </h1>

          {/* Body */}
          <p className="hero-body-text">
            A gym built for those who refuse to settle. Professional coaching,
            world-class equipment, and a community that pushes you past every
            limit.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#plans" className="hero-btn-primary">
              View Plans
            </a>
            <a href="#about" className="hero-btn-secondary">
              Explore
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {STATS.map(([n, l]) => (
            <div key={l} className="hero-stat-item">
              <div className="hero-stat-number">{n}</div>
              <div className="hero-stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
