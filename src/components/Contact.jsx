import { useState } from "react";
import { C } from "../constants";
import Reveal from "./Reveal";

function SubmitBtn({ onClick, sending }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={sending}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        width: "100%",
        padding: "1rem",
        border: "none",
        cursor: "pointer",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "0.95rem",
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        background: sending || h ? C.goldDim : C.gold,
        color: C.black,
        transition: "background .2s",
        opacity: sending ? 0.7 : 1,
        borderRadius: "6px",
      }}
    >
      {sending ? "Sending..." : "Send Message"}
    </button>
  );
}

const contactItems = [
  {
    label: "Location",
    val: "12 Beach Road, Negombo, Sri Lanka",
    svg: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 1.5C6.51 1.5 4.5 3.51 4.5 6c0 3.75 4.5 10.5 4.5 10.5s4.5-6.75 4.5-10.5c0-2.49-2.01-4.5-4.5-4.5z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: "Phone",
    val: "+94 31 220 4567",
    svg: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M3 3h3.5l1.5 3.5-2 1.2a9.5 9.5 0 004.3 4.3l1.2-2L15 11.5V15a1 1 0 01-1 1C6.27 16 2 11.73 2 4a1 1 0 011-1z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    val: "hello@fitnesssportscenter.com",
    svg: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect
          x="2"
          y="4"
          width="14"
          height="10"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M2 5.5l7 5 7-5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Hours",
    val: "Mon to Fri 5AM–11PM / Sat to Sun 6AM–10PM",
    svg: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M9 5v4l2.5 2.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 900);
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${errors[field] ? C.gold : "rgba(242,239,228,0.1)"}`,
    color: C.offwhite,
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.88rem",
    fontWeight: 300,
    padding: "0.85rem 1rem",
    outline: "none",
    transition: "border-color .2s",
    boxSizing: "border-box",
    borderRadius: "4px",
  });

  const labelStyle = {
    display: "block",
    fontSize: "0.65rem",
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    fontFamily: "'Montserrat', sans-serif",
    color: "rgba(242,239,228,0.4)",
    marginBottom: "0.55rem",
  };

  return (
    <section id="contact" style={{ padding: "8rem 5vw" }}>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .contact-section { padding: 5rem 5vw !important; }
        }
      `}</style>

      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "7rem",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <Reveal>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: C.gold,
                marginBottom: "1rem",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 1,
                  background: C.gold,
                  display: "block",
                }}
              />
              Contact
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.8rem,6vw,5.5rem)",
                fontWeight: 800,
                lineHeight: 0.95,
                color: C.offwhite,
                margin: "0 0 1.5rem",
              }}
            >
              START YOUR
              <br />
              JOURNEY
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "1.0rem",
                fontWeight: 300,
                lineHeight: 1.8,
                color: C.gray,
                marginBottom: "3rem",
              }}
            >
              Ready to transform? Drop us a message and our team will reach out
              within 24 hours to discuss your goals.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            {contactItems.map(({ label, val, svg }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid rgba(207,160,16,0.25)`,
                    borderRadius: "8px",
                    color: C.gold,
                    background: "rgba(207,160,16,0.05)",
                  }}
                >
                  {svg}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.66rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: C.gold,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: C.gray,
                      lineHeight: 1.6,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {val}
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Right — Form */}
        <Reveal delay={0.2}>
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              padding: "2.5rem",
              border: `1px solid rgba(242,239,228,0.08)`,
              borderRadius: "12px",
            }}
          >
            {!sent ? (
              <>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.8rem",
                    letterSpacing: "0.04em",
                    color: C.offwhite,
                    marginBottom: "0.4rem",
                  }}
                >
                  Send a Message
                </div>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    color: C.gray,
                    marginBottom: "2rem",
                  }}
                >
                  We'll get back to you within 24 hours.
                </p>

                {/* Name + Email row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  {[
                    {
                      key: "name",
                      label: "Your Name",
                      type: "text",
                      placeholder: "John Smith",
                    },
                    {
                      key: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "john@example.com",
                    },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label style={labelStyle}>{label}</label>
                      <input
                        type={type}
                        value={form[key]}
                        placeholder={placeholder}
                        onChange={(e) => {
                          setForm((f) => ({ ...f, [key]: e.target.value }));
                          setErrors((err) => ({ ...err, [key]: "" }));
                        }}
                        style={inputStyle(key)}
                        onFocus={(e) => (e.target.style.borderColor = C.gold)}
                        onBlur={(e) =>
                          (e.target.style.borderColor = errors[key]
                            ? C.gold
                            : "rgba(242,239,228,0.1)")
                        }
                      />
                      {errors[key] && (
                        <div
                          style={{
                            fontSize: "0.65rem",
                            color: C.gold,
                            marginTop: "0.3rem",
                            fontFamily: "'Montserrat',sans-serif",
                          }}
                        >
                          {errors[key]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Interest */}
                <div style={{ marginBottom: "1.2rem" }}>
                  <label style={labelStyle}>I'm Interested In</label>
                  <select
                    value={form.interest}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, interest: e.target.value }))
                    }
                    style={{
                      ...inputStyle("interest"),
                      appearance: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="">Select a service...</option>
                    {[
                      "Starter Membership",
                      "Pro Membership",
                      "Elite Membership",
                      "Personal Training",
                      "Group Classes",
                      "Nutrition Coaching",
                    ].map((o) => (
                      <option key={o} style={{ background: "#111" }}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "1.8rem" }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    placeholder="Tell us about your goals..."
                    onChange={(e) => {
                      setForm((f) => ({ ...f, message: e.target.value }));
                      setErrors((err) => ({ ...err, message: "" }));
                    }}
                    style={{
                      ...inputStyle("message"),
                      resize: "vertical",
                      minHeight: 110,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = C.gold)}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.message
                        ? C.gold
                        : "rgba(242,239,228,0.1)")
                    }
                  />
                  {errors.message && (
                    <div
                      style={{
                        fontSize: "0.65rem",
                        color: C.gold,
                        marginTop: "0.3rem",
                        fontFamily: "'Montserrat',sans-serif",
                      }}
                    >
                      {errors.message}
                    </div>
                  )}
                </div>

                <SubmitBtn onClick={handleSubmit} sending={sending} />
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(207,160,16,0.08)",
                    border: `1px solid ${C.gold}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M6 14l5 5 11-11"
                      stroke={C.gold}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "2rem",
                    letterSpacing: "0.04em",
                    color: C.offwhite,
                    marginBottom: "0.8rem",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "1.0rem",
                    fontWeight: 300,
                    color: C.gray,
                    lineHeight: 1.7,
                  }}
                >
                  Thanks for reaching out. We'll be in touch within 24 hours to
                  discuss your fitness journey.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
