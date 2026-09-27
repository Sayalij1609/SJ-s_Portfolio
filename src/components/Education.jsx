export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-label">Education</div>
        <h2 className="section-title centered about-title-animated">Academic <span>Journey</span></h2>
        <div className="v-timeline">
          <div className="v-timeline-line">
            <div className="v-timeline-line-fill" />
          </div>

          <div className="v-tl-item v-tl-left" style={{ transitionDelay: '0.1s' }}>
            <div className="v-tl-node">
              <div className="v-tl-ripple" /><i className="fas fa-graduation-cap" />
            </div>
            <div className="v-tl-card" style={{ '--card-accent': 'var(--cyan)' }}>
              <div className="v-tl-date">2023 — 2027 (Present)</div>
              <h3>B.Tech in AI &amp; Machine Learning</h3>
              <p className="v-tl-org">R. C. Patel Autonomous Institute of Technology, Shirpur</p>
              <p className="v-tl-desc">
                Pursuing my degree with a focus on AI, algorithms, and scalable software. Maintaining
                an outstanding academic record throughout all semesters.
              </p>
              <div className="v-tl-tags">
                {['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'DSA', 'Agentic AI', 'Explainable AI', 'Recommendation System'].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="v-tl-badge">CGPA: 9.26 / 10</div>
            </div>
          </div>

          <div className="v-tl-item v-tl-right" style={{ transitionDelay: '0.3s' }}>
            <div className="v-tl-node" style={{ '--node-color': 'var(--purple)' }}>
              <div className="v-tl-ripple" /><i className="fas fa-book" />
            </div>
            <div className="v-tl-card" style={{ '--card-accent': 'var(--purple)' }}>
              <div className="v-tl-date">2023</div>
              <h3>Higher Secondary Education (HSC)</h3>
              <p className="v-tl-org">H R Patel Science &amp; Arts Girls Junior College, Shirpur</p>
              <p className="v-tl-desc">
                Completed 12th with Physics, Chemistry, and Mathematics. Developed strong analytical
                and problem-solving skills.
              </p>
              <div className="v-tl-tags">
                {['Physics', 'Chemistry', 'Mathematics', 'Communication Skills', 'Leadership'].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="v-tl-badge" style={{ '--card-accent': 'var(--purple)' }}>HSC: 89%</div>
            </div>
          </div>

          <div className="v-tl-item v-tl-left" style={{ transitionDelay: '0.5s' }}>
            <div className="v-tl-node" style={{ '--node-color': 'var(--indigo)' }}>
              <div className="v-tl-ripple" /><i className="fas fa-school" />
            </div>
            <div className="v-tl-card" style={{ '--card-accent': 'var(--indigo)' }}>
              <div className="v-tl-date">2021</div>
              <h3>Secondary Education (SSC)</h3>
              <p className="v-tl-org">H R Patel Girls Secondary School, Shirpur</p>
              <p className="v-tl-desc">
                Completed 10th with distinction. Built a strong foundation in Science, Mathematics, and
                critical thinking.
              </p>
              <div className="v-tl-tags">
                {['Science', 'Mathematics', 'Scholarship Exams', 'History', 'Sanskrit'].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="v-tl-badge" style={{ '--card-accent': 'var(--indigo)' }}>SSC: 100%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
