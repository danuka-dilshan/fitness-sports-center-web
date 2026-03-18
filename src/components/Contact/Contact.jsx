import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { C } from "../../constants";
import Reveal from "../Reveal";
import "./Contact.css";

// ── Replace these with your EmailJS keys ──
const EMAILJS_SERVICE_ID = "service_j5tmx6s";
const EMAILJS_TEMPLATE_ID = "template_14pp2f2";
const EMAILJS_PUBLIC_KEY = "KvuX94v-iGkHy03Ob";

const MAX_MESSAGE = 500;

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

// ── Validation rules ──
const validators = {
  name: (v) =>
    !v.trim()
      ? "Please enter your name."
      : v.trim().length < 2
        ? "Name is too short."
        : "",
  email: (v) =>
    !v.trim()
      ? "Please enter your email."
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? "Please enter a valid email."
        : "",
  message: (v) =>
    !v.trim()
      ? "Please enter a message."
      : v.trim().length < 10
        ? "Message is too short (min 10 chars)."
        : "",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [showLog, setShowLog] = useState(false);
  const [log, setLog] = useState([]);

  // Load submission log from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("contact_log") || "[]");
    setLog(saved);
  }, []);

  // Real-time validation on touched fields
  useEffect(() => {
    const newErrors = {};
    Object.keys(touched).forEach((key) => {
      if (validators[key]) {
        const err = validators[key](form[key]);
        if (err) newErrors[key] = err;
      }
    });
    setErrors(newErrors);
  }, [form, touched]);

  const handleBlur = (key) => () => setTouched((t) => ({ ...t, [key]: true }));

  const updateField = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const isFormValid = () =>
    Object.keys(validators).every((key) => !validators[key](form[key]));

  const handleSubmit = async () => {
    // Touch all fields to show all errors
    setTouched({ name: true, email: true, message: true });
    if (!isFormValid()) return;

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          interest: form.interest || "Not specified",
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      // Save to localStorage log
      const newEntry = { ...form, date: new Date().toISOString() };
      const updated = [newEntry, ...log];
      localStorage.setItem("contact_log", JSON.stringify(updated));
      setLog(updated);
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const handleReset = () => {
    setForm({ name: "", email: "", interest: "", message: "" });
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  const clearLog = () => {
    localStorage.removeItem("contact_log");
    setLog([]);
  };

  const charsLeft = MAX_MESSAGE - form.message.length;

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

          {/* ── Submission log toggle ── */}
          {log.length > 0 && (
            <Reveal delay={0.4}>
              <button
                className="contact-log-toggle"
                onClick={() => setShowLog((v) => !v)}
              >
                {showLog ? "Hide" : "View"} Submission History ({log.length})
              </button>

              {showLog && (
                <div className="contact-log">
                  <div className="contact-log-header">
                    <span>Recent Submissions</span>
                    <button onClick={clearLog}>Clear All</button>
                  </div>
                  {log.map((entry, i) => (
                    <div key={i} className="contact-log-item">
                      <div className="contact-log-name">{entry.name}</div>
                      <div className="contact-log-meta">{entry.email}</div>
                      {entry.interest && (
                        <div className="contact-log-meta">{entry.interest}</div>
                      )}
                      <div className="contact-log-date">
                        {new Date(entry.date).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          )}
        </div>

        {/* ── Right column: form ── */}
        <Reveal delay={0.2}>
          <div className="contact-form-card">
            {/* Error toast */}
            {status === "error" && (
              <div className="contact-toast contact-toast--error">
                ⚠ Something went wrong. Please try again.
                <button onClick={() => setStatus("idle")}>✕</button>
              </div>
            )}

            {status !== "success" ? (
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
                        onBlur={handleBlur(key)}
                        className={`contact-form-input${errors[key] ? " error" : touched[key] && !errors[key] ? " valid" : ""}`}
                      />
                      {errors[key] ? (
                        <div className="contact-form-error">
                          ⚠ {errors[key]}
                        </div>
                      ) : (
                        touched[key] && (
                          <div className="contact-form-success-msg">
                            ✓ Looks good!
                          </div>
                        )
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

                {/* Message + character counter */}
                <div className="contact-form-message-group">
                  <div className="contact-form-label-row">
                    <label className="contact-form-label">Message</label>
                    <span
                      className={`contact-char-counter${charsLeft < 50 ? " warning" : ""}`}
                    >
                      {charsLeft} / {MAX_MESSAGE}
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    value={form.message}
                    placeholder="Tell us about your goals..."
                    maxLength={MAX_MESSAGE}
                    onChange={updateField("message")}
                    onBlur={handleBlur("message")}
                    className={`contact-form-textarea${errors.message ? " error" : touched.message && !errors.message ? " valid" : ""}`}
                  />
                  {errors.message ? (
                    <div className="contact-form-error">⚠ {errors.message}</div>
                  ) : (
                    touched.message && (
                      <div className="contact-form-success-msg">
                        ✓ Looks good!
                      </div>
                    )
                  )}
                </div>

                {/* Submit */}
                <button
                  className="contact-submit-btn"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <span className="contact-btn-spinner">
                      <span className="contact-spinner" /> Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
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
                <button className="contact-success-btn" onClick={handleReset}>
                  Send Another
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
