import { LOGO, C } from "../constants";

export default function Footer() {
  return (
    <footer style={{
      background:C.brown, borderTop:`1px solid ${C.charcoal}`,
      padding:"4rem 5vw 2rem",
    }}>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            flex-direction: column !important;
            gap: 2.5rem !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
          }
          .footer-links-wrap {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
            width: 100% !important;
          }
        }
      `}</style>

      <div className="footer-grid" style={{
        display:"flex", justifyContent:"space-between",
        flexWrap:"wrap", gap:"3rem", marginBottom:"4rem",
      }}>

        {/* Brand */}
        <div style={{ maxWidth:260 }}>
          <img src={LOGO} alt="Fitness Sports Center"
            style={{ height:70, objectFit:"contain", marginBottom:"1.2rem" }}/>
          <p style={{
            fontFamily:"'Barlow', sans-serif", fontSize:"0.82rem",
            fontWeight:300, color:C.gray, lineHeight:1.7, marginBottom:"1.5rem",
          }}>
            Where potential meets purpose. Forge your best self, one session at a time.
          </p>
          {/* Social icons */}
          <div style={{ display:"flex", gap:"0.7rem" }}>
            {[
              { label:"IG", path:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
              { label:"FB", path:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              { label:"YT", path:"M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" },
              { label:"TK", path:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
            ].map(({ label, path }) => (
              <a key={label} href="#" style={{
                width:34, height:34, borderRadius:"6px",
                border:`1px solid rgba(242,239,228,0.1)`,
                display:"flex", alignItems:"center", justifyContent:"center",
                transition:"border-color .2s, background .2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.background = "rgba(207,160,16,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(242,239,228,0.1)"; e.currentTarget.style.background = "transparent"; }}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill={C.gray}>
                  <path d={path}/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="footer-links-wrap" style={{ display:"flex", gap:"3rem" }}>
          {[
            { title:"Navigate", links:["About","Services","Plans","Trainers","Contact"] },
            { title:"Programs", links:["Strength Training","HIIT & Cardio","Personal Training","Group Classes","Nutrition"] },
            { title:"Connect",  links:["Instagram","Facebook","YouTube","TikTok"] },
          ].map(({ title, links }) => (
            <div key={title}>
              <div style={{
                fontFamily:"'Montserrat', sans-serif", fontWeight:600,
                fontSize:"0.65rem", letterSpacing:"0.22em", textTransform:"uppercase",
                color:C.offwhite, marginBottom:"1.4rem",
              }}>{title}</div>
              <ul style={{ listStyle:"none", padding:0, margin:0 }}>
                {links.map(l => (
                  <li key={l} style={{ marginBottom:"0.65rem" }}>
                    <a href="#" style={{
                      fontFamily:"'Barlow', sans-serif", fontSize:"0.83rem",
                      fontWeight:300, color:C.gray, textDecoration:"none",
                      letterSpacing:"0.01em", transition:"color .2s",
                    }}
                    onMouseEnter={e => e.target.style.color = C.gold}
                    onMouseLeave={e => e.target.style.color = C.gray}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom" style={{
        borderTop:`1px solid ${C.charcoal}`, paddingTop:"1.8rem",
        display:"flex", justifyContent:"space-between",
        flexWrap:"wrap", gap:"1rem", alignItems:"center",
      }}>
        <p style={{
          fontFamily:"'Barlow', sans-serif", fontSize:"0.75rem",
          fontWeight:300, color:"rgba(242,239,228,0.3)", letterSpacing:"0.02em",
        }}>© 2023 Fitness Sports Center. All rights reserved.</p>
        <p style={{
          fontFamily:"'Montserrat', sans-serif", fontSize:"0.62rem",
          fontWeight:500, color:"rgba(242,239,228,0.2)", letterSpacing:"0.14em",
          textTransform:"uppercase",
        }}>Designed with precision. Built with purpose.</p>
      </div>
    </footer>
  );
}