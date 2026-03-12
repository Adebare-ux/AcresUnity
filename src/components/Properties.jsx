import HouseSVG from "./HouseSVG";
import { PROPERTIES } from "./data";

const Properties = () => (
  <section className="properties-section" id="properties">
    <div className="props-header">
      <div>
        <div className="section-tag">Our Listings</div>
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Featured <em>Properties</em>
        </h2>
      </div>
      <a href="#contact" className="btn-primary">
        Request Full Catalogue
      </a>
    </div>

    <div className="props-grid">
      {PROPERTIES.map((p, i) => (
        <div key={p.name} className={`prop-card fade-in d${(i % 3) + 1}`}>
          <div className={`prop-image ${p.imgClass}`}>
            <HouseSVG color="#A8D5B5" opacity={0.32} size={160} />
            <span className={`prop-tag ${p.tagClass}`}>{p.tag}</span>
          </div>
          <div className="prop-body">
            <div className="prop-location">📍 {p.loc}</div>
            <div className="prop-name">{p.name}</div>
            <div className="prop-desc">{p.desc}</div>
            <div className="prop-footer">
              <div>
                <div className="prop-price">{p.price}</div>
                <span className="prop-price-label">{p.size}</span>
              </div>
              <button className="prop-btn">Enquire</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Properties;
