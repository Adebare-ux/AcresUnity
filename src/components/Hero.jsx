import HouseSVG from "./HouseSVG";

const Hero = () => (
  <section className="hero" id="home">
    {/* ── Left ───────────────────────────────────── */}
    <div className="hero-left">
      <div className="hero-eyebrow">Oke-Ogun's Trusted Real Estate</div>

      <h1 className="hero-title">
        Own a Piece of <em>Oke-Ogun's</em> Future
      </h1>

      <p className="hero-desc">
        From the heart of Iseyin, AcresUnity connects families and investors to
        verified land and property across the entire Oke-Ogun region. Your
        legacy starts with the right land.
      </p>

      <div className="hero-actions">
        <a href="#properties" className="btn-primary">
          View Properties
        </a>
        <a href="#contact" className="btn-outline-light">
          Free Consultation
        </a>
      </div>

      <div className="hero-stats">
        <div>
          <div className="hero-stat-num">500+</div>
          <div className="hero-stat-label">Plots Sold</div>
        </div>
        <div>
          <div className="hero-stat-num">6</div>
          <div className="hero-stat-label">LGAs Covered</div>
        </div>
        <div>
          <div className="hero-stat-num">100%</div>
          <div className="hero-stat-label">Verified Titles</div>
        </div>
      </div>
    </div>

    {/* ── Right ──────────────────────────────────── */}
    <div className="hero-right">
      <div className="hero-image-grid">
        <div className="hero-img-main">
          <HouseSVG color="#6BAE82" opacity={0.75} size={200} />
          <div className="hero-location-tag">
            <span className="loc-dot" />
            Iseyin, Oyo State
          </div>
          <div className="hero-badge">Oke-Ogun Region</div>
        </div>
        <div className="hero-img-row">
          <div className="hero-img-sm hero-img-sm-a">
            <HouseSVG color="#A8D5B5" opacity={0.45} size={120} />
          </div>
          <div className="hero-img-sm hero-img-sm-b">
            <HouseSVG color="#3D9962" opacity={0.45} size={120} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
