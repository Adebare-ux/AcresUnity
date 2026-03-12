const Navbar = ({ scrolled }) => (
  <nav className={`nav${scrolled ? " scrolled" : ""}`}>
    <a href="#home" className="nav-logo">
      <span className="nav-logo-main">AcresUnity</span>
      <span className="nav-logo-sub">Homes &amp; Properties</span>
    </a>

    <ul className="nav-links">
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#locations">Locations</a>
      </li>
      <li>
        <a href="#properties">Properties</a>
      </li>
      <li>
        <a href="#process">How It Works</a>
      </li>
      <li>
        <a href="#contact" className="nav-cta">
          Get Started
        </a>
      </li>
    </ul>

    <div className="nav-hamburger" aria-label="Menu">
      <span />
      <span />
      <span />
    </div>
  </nav>
);

export default Navbar;
