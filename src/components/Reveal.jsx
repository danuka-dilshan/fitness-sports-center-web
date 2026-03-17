import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Reveal({ children, delay = 0, style: s = {} }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity .65s ease ${delay}s, transform .65s ease ${delay}s`,
      ...s,
    }}>
      {children}
    </div>
  );
}