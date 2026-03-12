import { LOCATIONS } from "./data";

const Locations = () => (
  <section className="locations-section" id="locations">
    <div className="locations-header">
      <div className="section-tag light fade-in">Our Coverage</div>
      <h2 className="section-title light fade-in d1">
        Across the Entire <em>Oke-Ogun</em> Region
      </h2>
      <p className="section-body light fade-in d2">
        From Iseyin down to the farthest LGA, AcresUnity has boots on the ground
        across 6+ communities — local knowledge meets professional service at
        every point.
      </p>
    </div>

    <div className="locations-grid">
      {LOCATIONS.map((loc, i) => (
        <div key={loc.name} className={`location-card fade-in d${(i % 3) + 1}`}>
          <div className="location-icon">{loc.icon}</div>
          <div className="location-name">{loc.name}</div>
          <div className="location-state">{loc.state}</div>
          <div className="location-desc">{loc.desc}</div>
          <div className="location-arrow">View Properties</div>
        </div>
      ))}
    </div>
  </section>
);

export default Locations;
