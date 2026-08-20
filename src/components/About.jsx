export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-label">About Me</div>
        <div className="about-grid">
          <div className="about-img-col reveal-left">
            <div className="about-frame about-float">
              <img src="/images/about.jpeg" alt="Sayali Jadhav" />
            </div>
            <div className="about-info-card">
              <div className="info-row">
                <span className="info-key">Location</span>
                <span className="info-val">Shirpur, Maharashtra</span>
              </div>
              <div className="info-row">
                <span className="info-key">College</span>
                <span className="info-val">RCPIT</span>
              </div>
              <div className="info-row">
                <span className="info-key">Batch</span>
                <span className="info-val">2023 - 2027</span>
              </div>
              <div className="info-row">
                <span className="info-key">CGPA</span>
                <span className="info-val accent">9.31 / 10</span>
              </div>
            </div>
          </div>
          <div className="about-text-col reveal-right">
            <h2 className="section-title about-title-animated">
              Get to <span>Know Me</span>
            </h2>
            <p>
              Hello! I'm a dedicated and curious AI &amp; Machine Learning engineering student. My journey in technology
              is driven by a fascination for problem-solving and a desire to create impactful, data-driven solutions.
            </p>
            <p>
              I have a strong foundation in programming, data structures, and algorithms. My primary passion lies in
              applying these tools to build and deploy machine learning models from agentic AI systems to explainable AI
              simulators.
            </p>
            <p>
              When I'm not coding, you can find me exploring the latest breakthroughs in AI, attending tech summits, or
              mentoring students through the Data Polaris Club.
            </p>
            <div className="trait-row">
              <div className="trait reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="trait-icon"><i className="fas fa-lightbulb" /></div>
                <div className="trait-content">
                  <strong>Problem Solving</strong>
                  <span>Breaking complex problems into effective, elegant solutions.</span>
                </div>
              </div>
              <div className="trait reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="trait-icon trait-icon-indigo"><i className="fas fa-code" /></div>
                <div className="trait-content">
                  <strong>Clean Code</strong>
                  <span>Readable, maintainable, and scalable code as a standard.</span>
                </div>
              </div>
              <div className="trait reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="trait-icon trait-icon-purple"><i className="fas fa-comments" /></div>
                <div className="trait-content">
                  <strong>Communication</strong>
                  <span>Articulating technical concepts clearly to any audience.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
