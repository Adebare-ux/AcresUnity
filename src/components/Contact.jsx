import { useState } from "react";
import { INTERESTS } from "./data";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
  });
  const [submitted, setSubmit] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setForm({ name: "", phone: "", email: "", interest: "" });
    setTimeout(() => setSubmit(false), 5000);
  };

  return (
    <section className="contact-section" id="contact">
      {/* Info */}
      <div className="contact-info fade-in">
        <div className="section-tag light">Start Today</div>
        <h2 className="contact-title">
          Your Dream Land is <em>One Call Away</em>
        </h2>
        <p className="contact-desc">
          Fill out the form and our Iseyin team will reach out within 24 hours.
          Whether buying for the first time or expanding your portfolio — we are
          ready.
        </p>

        <div className="contact-detail">
          <span className="contact-detail-icon">📞</span>
          +234 800 000 0000
        </div>
        <div className="contact-detail">
          <span className="contact-detail-icon">💬</span>
          WhatsApp: +234 800 000 0000
        </div>
        <div className="contact-detail">
          <span className="contact-detail-icon">📧</span>
          info@acresunity.ng
        </div>
        <div className="contact-detail">
          <span className="contact-detail-icon">📍</span>
          Iseyin, Oyo State, Nigeria
        </div>
      </div>

      {/* Form */}
      <div className="contact-form-wrap fade-in d2">
        {submitted ? (
          <div className="form-success">
            <div className="form-success-icon">✅</div>
            <div className="form-success-title">Message Received!</div>
            <div className="form-success-msg">
              Our team will contact you within 24 hours. We look forward to
              helping you own land in Oke-Ogun.
            </div>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                className="form-input"
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={update("name")}
                required
              />
              <input
                className="form-input"
                type="tel"
                placeholder="Phone / WhatsApp"
                value={form.phone}
                onChange={update("phone")}
                required
              />
            </div>

            <input
              className="form-input"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={update("email")}
            />

            <select
              className="form-input"
              value={form.interest}
              onChange={update("interest")}
              required
            >
              <option value="">I am interested in…</option>
              {INTERESTS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            <button type="submit" className="form-submit">
              Send Enquiry →
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
