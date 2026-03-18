import Reveal from "../Reveal";
import "./Services.css";

const SERVICES = [
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

      {/* Grid */}
      <div className="services-grid">
        {SERVICES.map((s, i) => {
          const isLastAlone =
            i === SERVICES.length - 1 && SERVICES.length % 3 !== 0;
          return (
            <Reveal
              key={s.num}
              delay={i * 0.07}
              style={{ gridColumn: isLastAlone ? "span 2" : "auto" }}
            >
              <div className="service-card">
                <div className="service-card__num">{s.num}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <div className="service-card__bar" />
                <p className="service-card__desc">{s.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
