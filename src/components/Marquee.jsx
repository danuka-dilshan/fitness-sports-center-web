import { C } from "../constants";

const items = [
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
  const doubled = [...items, ...items];
  return (
    <div
      style={{
        background: C.gold,
        overflow: "hidden",
        padding: "0.75rem 0",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          animation: "marquee 22s linear infinite",
        }}
      >
        {doubled.map((t, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 700,
              textTransform: "uppercase",
              verticalAlign: "middle",
              color: t === "◆" ? "rgba(8,8,8,0.35)" : C.black,
              padding: t === "◆" ? "0 0.5rem" : "0 1.5rem",
              fontSize: t === "◆" ? "0.55rem" : "0.9rem",
              letterSpacing: "0.15em",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
