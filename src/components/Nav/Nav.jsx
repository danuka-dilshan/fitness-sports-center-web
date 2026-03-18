import { useState, useEffect } from "react";
import { LOGO } from "../../constants";
import "./Nav.css";

const LINKS = ["About", "Services", "Plans", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navClass = ["nav", scrolled && "is-scrolled", open && "is-open"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav className={navClass}>
        {/* Logo */}
        <img src={LOGO} alt="Fitness Sports Center" className="nav-logo" />

        {/* Desktop links */}
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="nav-link-item">
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="nav-cta">
          Join Now
        </a>

        {/* Burger */}
        <button
          className={`burger${open ? " is-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="burger-bar bar1" />
          <span className="burger-bar bar2" />
          <span className="burger-bar bar3" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        {LINKS.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            {l}
          </a>
        ))}
        <a
          href="#contact"
          className="mobile-cta"
          onClick={() => setOpen(false)}
        >
          Join Now
        </a>
      </div>
    </>
  );
}
