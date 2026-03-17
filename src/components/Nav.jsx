import { useState, useEffect } from "react";
import { LOGO, C } from "../constants";

const links = ["About", "Services", "Plans", "Trainers", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <style>{`
        .nav-links, .nav-cta { display: flex; }
        .burger { display: none !important; }

        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none !important; }
          .burger { display: flex !important; }
        }

        .burger-bar {
          display: block;
          width: 24px;
          height: 2px;
          background: ${C.offwhite};
          transition: transform 0.3s, opacity 0.3s;
          transform-origin: center;
        }
        .burger.is-open .bar1 { transform: translateY(7px) rotate(45deg); }
        .burger.is-open .bar2 { opacity: 0; }
        .burger.is-open .bar3 { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu {
          position: fixed;
          top: 68px; left: 0; right: 0; bottom: 0;
          background: rgba(8,8,8,0.98);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
          z-index: 199;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .mobile-menu.is-open {
          transform: translateX(0);
        }

        .mobile-link {
          width: 100%;
          text-align: center;
          padding: 1.1rem 2rem;
          font-size: 1.4rem;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${C.offwhite};
          text-decoration: none;
          border-bottom: 1px solid rgba(242,239,228,0.07);
          transition: color 0.2s, background 0.2s;
        }
        .mobile-link:first-child {
          border-top: 1px solid rgba(242,239,228,0.07);
        }
        .mobile-link:hover {
          color: ${C.gold};
          background: rgba(207,160,16,0.05);
        }

        .mobile-cta {
          margin-top: 2rem;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.9rem 2.8rem;
          background: ${C.gold};
          color: ${C.black};
          text-decoration: none;
          border-radius: 10px;
          transition: background 0.2s;
        }
        .mobile-cta:hover { background: ${C.goldDim}; }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5vw",
          height: 68,
          background: scrolled || open ? "rgba(8,8,8,0.96)" : "transparent",
          backdropFilter: scrolled || open ? "blur(14px)" : "none",
          borderBottom:
            scrolled || open ? `1px solid ${C.brown}` : "1px solid transparent",
          transition: "all .35s",
        }}
      >
        {/* Logo */}
        <img
          src={LOGO}
          alt="Fitness Sports Center"
          style={{ height: 52, objectFit: "contain", zIndex: 201 }}
        />

        {/* Desktop Links */}
        <ul
          className="nav-links"
          style={{
            gap: "2.2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                style={{
                  fontSize: "1rem",
                  fontWeight: 550,
                  letterSpacing: "0.12em",
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: "uppercase",
                  color: C.gray,
                  textDecoration: "none",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = C.gold)}
                onMouseLeave={(e) => (e.target.style.color = C.gray)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="nav-cta"
          style={{
            fontSize: "0.92rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "'Arial Black', Gadget, sans-serif",
            padding: "0.6rem 1.6rem",
            background: C.gold,
            color: C.black,
            textDecoration: "none",
            transition: "background .2s",
            borderRadius: "10px",
          }}
          onMouseEnter={(e) => (e.target.style.background = C.goldDim)}
          onMouseLeave={(e) => (e.target.style.background = C.gold)}
        >
          Join Now
        </a>

        {/* Burger */}
        <button
          className={`burger${open ? " is-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          style={{
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 6,
            zIndex: 201,
          }}
          aria-label="Toggle menu"
        >
          <span className="burger-bar bar1" />
          <span className="burger-bar bar2" />
          <span className="burger-bar bar3" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        {links.map((l) => (
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
