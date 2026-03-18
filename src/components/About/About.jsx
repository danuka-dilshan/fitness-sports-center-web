import { LOGO, C } from "../../constants";
import Reveal from "../Reveal";
import "./About.css";

const FEATURES = [
  ["HP", "High Performance", "Elite-grade equipment for real results."],
  ["CM", "Community", "A culture that lifts every member higher."],
  ["EC", "Expert Coaching", "Certified pros dedicated to your goals."],
  ["24", "24/7 Access", "Train on your schedule, every day."],
];

export default function About() {
  return (
    <section id="about" className="about-grid">
      {/* ── Left column: image ── */}
      <Reveal>
        <div className="about-image-container">
          <div className="about-image-wrap">
            <img src={LOGO} alt="Logo" />
            <div className="about-image-overlay" />
            <div className="about-image-label">Fitness Sports Center</div>
          </div>

          <div className="about-founded">
            <div className="about-founded-year">2023</div>
            <div className="about-founded-label">Founded</div>
          </div>
        </div>
      </Reveal>

      {/* ── Right column: copy ── */}
      <div>
        <Reveal>
          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            Our Story
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="about-heading">
            MORE THAN
            <br />A GYM
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="about-body">
            Fitness Sports Center was built on a simple belief: every person
            carries untapped potential. We created a space where ambition meets
            action - where your goals aren't just supported, they're forged into
            reality.
          </p>
          <p className="about-body">
            From beginner to elite athlete, our facility offers the tools,
            guidance, and community to help you reach levels you didn't think
            were possible.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="about-features">
            {FEATURES.map(([abbr, title, desc]) => (
              <div key={title} className="about-feature-item">
                <div className="about-feature-abbr">{abbr}</div>
                <div className="about-feature-title">{title}</div>
                <div className="about-feature-desc">{desc}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
