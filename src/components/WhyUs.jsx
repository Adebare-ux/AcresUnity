import { REASONS } from "./data";

const WhyUs = () => (
  <section className="why-section" id="why">
    <div className="section-tag fade-in">Why AcresUnity</div>
    <h2 className="section-title fade-in d1">
      The Region's Most <em>Trusted</em> Name
    </h2>

    <div className="why-grid">
      {/* Reasons */}
      <div className="why-items">
        {REASONS.map((item, i) => (
          <div key={item.num} className={`why-item fade-in d${i + 1}`}>
            <div className="why-item-num">{item.num}</div>
            <div>
              <div className="why-item-title">{item.title}</div>
              <div className="why-item-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials card */}
      <div className="why-visual fade-in d2">
        <div className="why-visual-title">
          Trusted by families across <em>Nigeria and the diaspora</em>
        </div>

        <div className="why-metric">
          <div className="why-metric-val">500+</div>
          <div className="why-metric-label">
            Happy
            <br />
            Landowners
          </div>
        </div>

        <div className="why-divider" />

        <div className="why-testimonial">
          "We bought two plots in Iseyin from London — the whole process was
          seamless. AcresUnity guided us every step, from inspection videos to
          documentation. Our family now has land back home."
        </div>
        <div className="why-testimonial-author">
          — Adekola B., London UK · Iseyin Unity Gardens
        </div>

        <div className="why-divider" />

        <div className="why-testimonial">
          "As someone from Okeho, seeing a company actually develop our zone
          professionally is encouraging. These people know Oke-Ogun."
        </div>
        <div className="why-testimonial-author">
          — Alhaja Rashidat O., Okeho
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
