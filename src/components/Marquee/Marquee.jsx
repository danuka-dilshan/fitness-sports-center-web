import "./Marquee.css";

const ITEMS = [
  "Strength Training",
  "◆",
  "Cardio",
  "◆",
  "HIIT",
  "◆",
  "CrossFit",
  "◆",
  "Yoga",
  "◆",
  "Boxing",
  "◆",
  "Nutrition",
  "◆",
  "Personal Training",
  "◆",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span
            key={i}
            className={
              t === "◆" ? "marquee-item marquee-item--diamond" : "marquee-item"
            }
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
