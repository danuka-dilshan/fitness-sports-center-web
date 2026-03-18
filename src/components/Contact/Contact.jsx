import { useState } from "react";
import Reveal from "../Reveal";
import "./Contact.css";

function SubmitBtn({ onClick, sending }) {
  return (
    <button className="contact-submit-btn" onClick={onClick} disabled={sending}>
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

const INTERESTS = [
  "Starter Membership",
  "Pro Membership",
  "Elite Membership",
  "Personal Training",
  "Group Classes",
  "Nutrition Coaching",
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

  const updateField = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: "" }));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        {/* ── Left column ── */}
        <div>
          <Reveal>
            <div className="contact-eyebrow">
              <span className="contact-eyebrow-line" />
              Contact
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="contact-heading">
              START YOUR
              <br />
              JOURNEY
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="contact-intro">
              Ready to transform? Drop us a message and our team will reach out
              within 24 hours to discuss your goals.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            {contactItems.map(({ label, val, svg }) => (
              <div key={label} className="contact-item">
                <div className="contact-item-icon">{svg}</div>
                <div>
                  <div className="contact-item-label">{label}</div>
                  <div className="contact-item-value">{val}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* ── Right column: form ── */}
        <Reveal delay={0.2}>
          <div className="contact-form-card">
            {!sent ? (
              <>
                <div className="contact-form-title">Send a Message</div>
                <p className="contact-form-subtitle">
                  We'll get back to you within 24 hours.
                </p>

                {/* Name + Email row */}
                <div className="contact-form-row">
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
                      <label className="contact-form-label">{label}</label>
                      <input
                        type={type}
                        value={form[key]}
                        placeholder={placeholder}
                        onChange={updateField(key)}
                        className={`contact-form-input${errors[key] ? " error" : ""}`}
                      />
                      {errors[key] && (
                        <div className="contact-form-error">{errors[key]}</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Interest */}
                <div className="contact-form-group">
                  <label className="contact-form-label">
                    I'm Interested In
                  </label>
                  <select
                    value={form.interest}
                    onChange={updateField("interest")}
                    className="contact-form-select"
                  >
                    <option value="">Select a service...</option>
                    {INTERESTS.map((o) => (
                      <option key={o} style={{ background: "#111" }}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="contact-form-message-group">
                  <label className="contact-form-label">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    placeholder="Tell us about your goals..."
                    onChange={updateField("message")}
                    className={`contact-form-textarea${errors.message ? " error" : ""}`}
                  />
                  {errors.message && (
                    <div className="contact-form-error">{errors.message}</div>
                  )}
                </div>

                <SubmitBtn onClick={handleSubmit} sending={sending} />
              </>
            ) : (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M6 14l5 5 11-11"
                      stroke="#CFA010"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="contact-success-title">Message Sent!</h3>
                <p className="contact-success-text">
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
