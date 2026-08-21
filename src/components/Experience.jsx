export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-label">Experience</div>
        <h2 className="section-title centered about-title-animated">Work &amp; <span>Experience</span></h2>
        <div className="v-timeline">
          <div className="v-timeline-line">
            <div className="v-timeline-line-fill" />
          </div>

          {/* Club Head */}
          <div className="v-tl-item v-tl-left">
            <div className="v-tl-node" style={{ '--node-color': 'var(--purple)' }}>
              <div className="v-tl-ripple" /><i className="fas fa-users" />
            </div>
            <div className="v-tl-card" style={{ '--card-accent': 'var(--purple)' }}>
              <div className="v-tl-date">Present</div>
              <h3>Club Head – Data Polaris</h3>
              <p className="v-tl-org">R. C. Patel Institute of Technology, Shirpur</p>
              <p className="v-tl-desc">
                Leading the Data Polaris club, managing technical and non-technical activities.
                Coordinating events, workshops, and sessions related to Data Science and AI. Mentoring team members and
                ensuring effective collaboration. Driving community engagement and promoting data-driven learning
                initiatives.
              </p>
            </div>
          </div>

          {/* Editorial Team */}
          <div className="v-tl-item v-tl-right">
            <div className="v-tl-node" style={{ '--node-color': '#f59e0b' }}>
              <div className="v-tl-ripple" /><i className="fas fa-pen-fancy" />
            </div>
            <div className="v-tl-card" style={{ '--card-accent': '#f59e0b' }}>
              <div className="v-tl-date">Present</div>
              <h3>Editorial Team Member – AIML &amp; DS Dept</h3>
              <p className="v-tl-org">R. C. Patel Institute of Technology, Shirpur</p>
              <p className="v-tl-desc">
                Contributing to the design and content creation of department magazines and
                newsletters. Collaborating with the editorial team to develop creative and engaging publications.
                Assisting in layout design, content structuring, and visual storytelling. Ensuring quality and consistency
                in published materials.
              </p>
            </div>
          </div>

          {/* Infosys */}
          <div className="v-tl-item v-tl-left">
            <div className="v-tl-node">
              <div className="v-tl-ripple" /><i className="fas fa-building" />
            </div>
            <div className="v-tl-card" style={{ '--card-accent': 'var(--cyan)' }}>
              <div className="v-tl-date">Apr 2025 – Jul 2025</div>
              <h3>AI/ML Mentee – Pragati Cohort 5</h3>
              <p className="v-tl-org">Infosys Springboard</p>
              <p className="v-tl-desc">
                Selected for "Pragati: Path to Future – Cohort 5," a 12-week empowerment initiative for
                women in tech. Implemented AI/ML concepts through guided projects and mentorship.
              </p>
            </div>
          </div>

          {/* R3sys */}
          <div className="v-tl-item v-tl-right">
            <div className="v-tl-node" style={{ '--node-color': 'var(--indigo)' }}>
              <div className="v-tl-ripple" /><i className="fas fa-laptop-code" />
            </div>
            <div className="v-tl-card" style={{ '--card-accent': 'var(--indigo)' }}>
              <div className="v-tl-date">1 Month</div>
              <h3>Java Development Intern</h3>
              <p className="v-tl-org">R3sys</p>
              <p className="v-tl-desc">
                Worked on Core &amp; Advanced Java, Spring Core, and backend development, strengthening
                OOP principles and practical coding skills in a professional environment.
              </p>
            </div>
          </div>

          {/* CICD ProSystems */}
          <div className="v-tl-item v-tl-left">
            <div className="v-tl-node">
              <div className="v-tl-ripple" />
              <i className="fas fa-laptop-code" />
            </div>
            <div className="v-tl-card" style={{ '--card-accent': 'var(--cyan)' }}>
              <div className="v-tl-date">Jun 2026 – Aug 2026</div>
              <h3>Summer Intern – AI/ML</h3>
              <p className="v-tl-org">CICD ProSystems</p>
              <p className="v-tl-desc">
                Completed a 2-month summer internship at CICD ProSystems from 15 June to
                15 August 2026. Gained hands-on experience in AI/ML development,
                working on practical projects and applying machine learning concepts
                in a professional environment.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
