import { FEATURES, STEPS } from "./data";

const Process = () => (
  <section className="process-section" id="process">
    <div className="process-header">
      <div className="section-tag fade-in">How It Works</div>
      <h2 className="section-title fade-in d1">
        Your Journey to <em>Land Ownership</em>
      </h2>
    </div>

    <div className="process-steps">
      {STEPS.map((step, i) => (
        <div key={step.num} className={`process-step fade-in d${i + 1}`}>
          <div className="step-num">{step.num}</div>
          <div className="step-title">{step.title}</div>
          <div className="step-desc">{step.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Process;
