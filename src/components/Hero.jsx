import { C, imageHero } from "../constants";

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight:"100vh", display:"flex", alignItems:"flex-end",
      position:"relative", padding:"0 5vw 10vh", overflow:"hidden",
    }}>

      {/* Grid background */}
      <div style={{
        position:"absolute", inset:0,
        backgroundImage:`linear-gradient(rgba(207,160,16,0.04) 2px, transparent 1px),
          linear-gradient(90deg, rgba(207,160,16,0.04) 2px, transparent 1px)`,
        backgroundSize:"55px 55px",
      }}/>

      {/* Bottom fade */}
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.55) 50%, rgba(8,8,8,1) 100%)",
      }}/>

      {/* Gold radial */}
      <div style={{
        position:"absolute", top:"-15vh", right:"-10vw",
        width:"60vw", height:"60vw", maxWidth:700, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(207,160,16,0.10) 0%, transparent 70%)",
        pointerEvents:"none",
      }}/>

      {/* Hero image */}
      <div style={{
        position: "absolute", right: "-20vw", top: "50%", transform: "translateY(-50%)",
        userSelect: "none", pointerEvents: "none",
      }}>
        <img
          src={imageHero}
          alt="Fitness Sports Center"
          style={{ width: "120vw", height: "100%", objectFit: "contain" }}
        />
      </div>

      {/* Content */}
      <div style={{ position:"relative", zIndex:2, maxWidth:740 }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:"0.7rem",
          fontSize:"0.72rem", fontWeight:600, letterSpacing:"0.2em",fontFamily:"'Montserrat', sans-serif",
          textTransform:"uppercase", color:C.gold, marginBottom:"1.2rem" }}>
          <span style={{ display:"block", width:28, height:2, background:C.gold }}/>
          Est. 2023 — Sports Center
        </div>

        {/* Heading & CTA */}
        <h1 style={{
          fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800,
          fontSize:"clamp(4rem,11vw,10rem)", lineHeight:0.9,
          letterSpacing:"0.02em", color:C.offwhite, margin:"0 0 1.6rem",
        }}>
          FORGE<br/>YOUR<br/><span style={{ color:C.gold }}>BEST</span>
        </h1>

        {/* Description */}
        <p style={{
          fontFamily:"'Barlow',sans-serif", fontSize:"1rem", fontWeight:450,
          lineHeight:1.75, color:C.gray, maxWidth:460, marginBottom:"2.5rem",
        }}>
          A gym built for those who refuse to settle. Professional coaching, world-class equipment, and a community that pushes you past every limit.
        </p>

        {/* CTAs */}
        <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", alignItems:"center" }}>
          <a href="#plans" style={{
            display:"inline-block", fontSize:"1rem", fontWeight:700,
            letterSpacing:"0.14em", textTransform:"uppercase",
            padding:"1rem 2.4rem", background:C.gold, color:C.black,
            textDecoration:"none", transition:"background .2s", borderRadius:"10px",
          }}
          onMouseEnter={e=>e.target.style.background=C.goldDim}
          onMouseLeave={e=>e.target.style.background=C.gold}
          >View Plans</a>

          {/* Secondary CTA with border */}
          <a href="#about" style={{
            display:"inline-block", fontSize:"1rem", fontWeight:700,
            letterSpacing:"0.14em", textTransform:"uppercase",
            padding:"1rem 2.4rem",
            border:`1px solid rgba(242,239,228,0.2)`, color:C.offwhite,
            textDecoration:"none", transition:"border-color .2s",borderRadius:"10px",
          }}
          onMouseEnter={e=>e.target.style.borderColor=C.offwhite}
          onMouseLeave={e=>e.target.style.borderColor="rgba(242,239,228,0.2)"}
          >Explore</a>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        position:"absolute", bottom:"10vh", right:"5vw", zIndex:2,
        display:"flex", gap:"2.5rem",
      }}>
        {[["12K+","Members"],["48+","Classes/Wk"],["18","Trainers"]].map(([n,l])=>(
          <div key={l} style={{ textAlign:"right" }}>
            <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800,
              fontSize:"2.8rem", lineHeight:1, color:C.offwhite }}>
              <span style={{ color:C.gold }}>{n}</span>
            </div>
            <div style={{ fontSize:"0.68rem", fontWeight:600, letterSpacing:"0.14em",
              textTransform:"uppercase", color:C.gray,  marginTop:4 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
