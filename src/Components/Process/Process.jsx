import "./Process.css";

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "DISCOVERY",
      description: "Understand your goals, audience, and vision.",
    },
    {
      id: "02",
      title: "DESIGN",
      description: "Shape your brand’s look, feel, and experience.",
    },
    {
      id: "03",
      title: "DEVELOPMENT",
      description: "Build responsive interfaces and functional systems.",
    },
    {
      id: "04",
      title: "DELIVERY",
      description: "Refine, deploy, and bring your product to life.",
    },
  ];

  return (
    <section className="process-page" id="process">
      <div className="process-header">
        <div className="header-left">
          <span className="header-num">(03)</span>
          <h1 className="header-title">HOW THE WORK GOES</h1>
        </div>
        <span className="header-label">// 4 STEPS, NO MAGIC</span>
      </div>

      <div className="divider-line"></div>

      <div className="process-container">
        <div className="steps-wrapper">
          {/* Horizontal connector line */}
          <div className="connector-line"></div>

          {steps.map((step) => (
            <div key={step.id} className="step-node">
              <div className="step-circle">
                {step.id}
              </div>
              <h2 className="step-title">{step.title}</h2>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
