import { useState, useEffect } from "react";
import { LOGO, C } from "../constants";

const links = ["About","Services","Plans","Trainers","Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:200,
      display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"0 5vw", height:68,
      background: scrolled ? "rgba(8,8,8,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.brown}` : "1px solid transparent",
      transition:"all .35s",backgroundColor: "#141103",
    }}>
      <img src={LOGO} alt="Fitness Sports Center" style={{ height:52, objectFit:"contain" }} />

{/* Links */}
      <ul style={{ display:"flex", gap:"2.2rem", listStyle:"none", margin:0, padding:0 }} className="nav-links">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              fontSize:"0.8rem", fontWeight:550, letterSpacing:"0.12em",fontFamily:"'Montserrat', sans-serif",
              textTransform:"uppercase", color:C.gray, textDecoration:"none", transition:"color .2s",
            }}
            onMouseEnter={e => e.target.style.color = C.gold}
            onMouseLeave={e => e.target.style.color = C.gray}
            >{l}</a>
          </li>
        ))}
      </ul>

{/* CTA Button */}
      <a href="#contact" className="nav-cta" style={{
        display:"inline-block", fontSize:"0.92rem", fontWeight:700,
        letterSpacing:"0.06em", textTransform:"uppercase", fontFamily:"'Arial Black', Gadget, sans-serif",
        padding:"0.6rem 1.6rem", background:C.gold, color:C.black, textDecoration:"none",
        transition:"background .2s",borderRadius:"10px",
      }}
      onMouseEnter={e=>e.target.style.background=C.goldDim}
      onMouseLeave={e=>e.target.style.background=C.gold}
      >Join Now</a>

      <button className="burger" onClick={() => setOpen(o=>!o)} style={{
        display:"none", flexDirection:"column", gap:5, background:"none",
        border:"none", cursor:"pointer", padding:4,
      }}>
        {[0,1,2].map(i => <span key={i} style={{ display:"block", width:22, height:2, background:C.offwhite }}/>)}
      </button>

{/* Mobile Menu */}
      {open && (
        <div style={{
          position:"fixed", top:68, left:0, right:0, bottom:0,
          background:"rgba(8,8,8,0.98)", display:"flex", flexDirection:"column",fontFamily:"'Arial Black', Gadget, sans-serif",
          alignItems:"center", justifyContent:"center", gap:"2rem", zIndex:199,
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setOpen(false)}
              style={{ fontSize:"1.8rem", letterSpacing:"0.08em",
                textTransform:"uppercase", color:C.offwhite, textDecoration:"none" }}
            >{l}</a>
          ))}
          <a href="#contact" onClick={()=>setOpen(false)} style={{
            marginTop:"1rem", fontSize:"0.85rem", fontWeight:700, letterSpacing:"0.14em",
            textTransform:"uppercase", padding:"0.8rem 2rem",
            background:C.gold, color:C.black, textDecoration:"none",borderRadius:"10px",
          }}>Join Now</a>
        </div>
      )}
    </nav>
  );
}