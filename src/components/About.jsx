import HouseSVG from "./HouseSVG";
import { FEATURES } from "./data";

const About = () => (
  <section className="about-section" id="about">
    <div className="about-grid">
      {/* Visual */}
      <div className="about-visual fade-in">
        <div className="about-border-box" />
        <div className="about-main-box">
          <HouseSVG color="#6BAE82" opacity={0.65} size={190} />
        </div>
        <div className="about-accent-box">
          <div className="about-accent-num">8+</div>
          <div className="about-accent-label">Years Serving Oke-Ogun</div>
        </div>
      </div>

      {/* Text */}
      <div>
        <div className="section-tag fade-in">Who We Are</div>

        <h2 className="section-title fade-in d1">
          Rooted in <em>Iseyin,</em>
          <br />
          Built for Oke-Ogun
        </h2>

        <p className="section-body fade-in d2">
          AcresUnity Homes &amp; Properties was founded in Iseyin with one
          vision — to make land ownership accessible, transparent, and rewarding
          across the Oke-Ogun zone of Oyo State. We understand this land, its
          people, and its potential.
        </p>

        <p className="section-body fade-in d2" style={{ marginTop: "1rem" }}>
          Whether you are in the diaspora looking to invest back home, a local
          family seeking a place to build, or an investor eyeing rapid returns —
          we are your trusted partner on the ground.
        </p>

        <div className="about-features fade-in d3">
          {FEATURES.map((f) => (
            <div key={f.title} className="about-feat">
              <div className="about-feat-icon">{f.icon}</div>
              <div className="about-feat-title">{f.title}</div>
              <div className="about-feat-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
