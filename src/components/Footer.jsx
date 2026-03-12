import { QUICK_LINKS, LOCATION_LINKS, PROP_TYPES } from "../data";

const SOCIALS = ["f", "in", "X", "▶"];

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      {/* Brand */}
      <div>
        <div className="footer-logo">AcresUnity</div>
        <div className="footer-logo-sub">
          Homes &amp; Properties · Est. Iseyin
        </div>
        <p className="footer-tagline">
          The Oke-Ogun region's most trusted real estate company — connecting
          families and investors to verified land and homes since day one.
        </p>
        <div className="footer-contact-item">
          <span className="footer-contact-icon">📍</span> Iseyin, Oyo State,
          Nigeria
        </div>
        <div className="footer-contact-item">
          <span className="footer-contact-icon">📞</span> +234 800 000 0000
        </div>
        <div className="footer-contact-item">
          <span className="footer-contact-icon">💬</span> WhatsApp: +234 800 000
          0000
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <div className="footer-col-title">Quick Links</div>
        <ul className="footer-links">
          {QUICK_LINKS.map((l) => (
            <li key={l}>
              <a href="#home">{l}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Locations */}
      <div>
        <div className="footer-col-title">Locations</div>
        <ul className="footer-links">
          {LOCATION_LINKS.map((l) => (
            <li key={l}>
              <a href="#locations">{l}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Property Types */}
      <div>
        <div className="footer-col-title">Property Types</div>
        <ul className="footer-links">
          {PROP_TYPES.map((l) => (
            <li key={l}>
              <a href="#properties">{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="footer-copy">
        © 2025 AcresUnity Homes &amp; Properties · Iseyin, Oyo State, Nigeria
      </div>
      <div className="footer-socials">
        {SOCIALS.map((s, i) => (
          <div key={i} className="footer-social" aria-label={`Social ${i}`}>
            {s}
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
