import { ITEMS } from "./data";

const Marquee = () => (
  <div className="marquee-bar" aria-hidden="true">
    <div className="marquee-track">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className="marquee-item">
          <span className="marquee-dot" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
