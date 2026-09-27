import { useEffect } from 'react';

export default function Skills() {
  // Set --ring CSS var on badges & animate bars on scroll
  useEffect(() => {
    document.querySelectorAll('.bento-badge.skill-item').forEach((badge) => {
      const val = badge.getAttribute('data-val');
      if (val) badge.style.setProperty('--ring', val);
    });

    const langBars = document.querySelectorAll('.lang-bar');
    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            barObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    langBars.forEach((bar) => barObs.observe(bar));

    // Click-to-show progress tooltip
    const skillItems = document.querySelectorAll('.skill-item');
    const handleClick = (e) => {
      e.stopPropagation();
      const item = e.currentTarget;
      const isShowing = item.classList.contains('show-progress');
      skillItems.forEach((other) => other.classList.remove('show-progress'));
      if (!isShowing) item.classList.add('show-progress');
    };
    const handleDocClick = () => {
      skillItems.forEach((item) => item.classList.remove('show-progress'));
    };
    skillItems.forEach((item) => item.addEventListener('click', handleClick));
    document.addEventListener('click', handleDocClick);

    return () => {
      barObs.disconnect();
      skillItems.forEach((item) => item.removeEventListener('click', handleClick));
      document.removeEventListener('click', handleDocClick);
    };
  }, []);

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-label">Technical Skills</div>
        <h2 className="section-title centered about-title-animated">My <span>Expertise</span></h2>
        <div className="bento-grid">

          {/* AI/ML (span 2) */}
          <div className="bento-card bento-ai reveal" style={{ '--accent': 'var(--cyan)' }}>
            <div className="bento-glow" />
            <div className="bento-icon"><i className="fas fa-brain" /></div>
            <h3>AI / ML &amp; GenAI</h3>
            <p className="bento-desc">Building intelligent systems with cutting-edge AI architecture.</p>
            <div className="bento-content bento-visual">
              <div className="ai-orbit">
                <div className="core">AI</div>
                {[
                  { label: 'Machine Learning', val: '95%' },
                  { label: 'Deep Learning', val: '90%' },
                  { label: 'Generative AI', val: '90%' },
                  { label: 'LLMs', val: '90%' },
                  { label: 'NLP', val: '85%' },
                  { label: 'Computer Vision', val: '85%' },
                  { label: 'XAI', val: '80%' },
                  { label: 'Agentic AI', val: '85%' },
                  { label: 'RAG', val: '90%' },
                  { label: 'Recommendation', val: '80%' },
                  { label: 'Image Processing', val: '75%' },
                ].map((s) => (
                  <span className="node skill-item" data-val={s.val} key={s.label}>{s.label}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages (span 1 tall) */}
          <div className="bento-card bento-tall reveal" style={{ '--accent': 'var(--indigo)' }}>
            <div className="bento-glow" />
            <div className="bento-icon"><i className="fas fa-terminal" /></div>
            <h3>Languages</h3>
            <div className="bento-content lang-lines">
              {[
                { name: 'C', pct: '80%' },
                { name: 'Java (Core)', pct: '90%' },
                { name: 'Java (Adv)', pct: '85%' },
                { name: 'Spring Core', pct: '80%' },
                { name: 'Python', pct: '95%' },
                { name: 'JavaScript', pct: '85%' },
              ].map((lang) => (
                <div className="lang-line skill-item" data-val={lang.pct} key={lang.name}>
                  <span className="lang-name" data-pct={lang.pct}>{lang.name}</span>
                  <div className="lang-track">
                    <div className="lang-bar" style={{ '--bar-w': lang.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core CS */}
          <div className="bento-card bento-standard reveal" style={{ '--accent': '#018ABE' }}>
            <div className="bento-glow" />
            <div className="bento-icon"><i className="fas fa-microchip" /></div>
            <h3>Core CS</h3>
            <div className="bento-badge-container">
              {['DSA|90%', 'Operating Systems|85%', 'DBMS|85%', 'Computer Network|85%'].map((s) => {
                const [name, val] = s.split('|');
                return <span className="bento-badge skill-item" data-val={val} key={name}>{name}</span>;
              })}
            </div>
          </div>

          {/* Databases */}
          <div className="bento-card bento-standard reveal" style={{ '--accent': '#02457A' }}>
            <div className="bento-glow" />
            <div className="bento-icon"><i className="fas fa-database" /></div>
            <h3>Databases</h3>
            <div className="bento-badge-container">
              {['MySQL|85%', 'MongoDB|80%', 'Vector DBs|80%'].map((s) => {
                const [name, val] = s.split('|');
                return <span className="bento-badge skill-item" data-val={val} key={name}>{name}</span>;
              })}
            </div>
          </div>

          {/* Frameworks (wide) */}
          <div className="bento-card bento-wide reveal" style={{ '--accent': '#018ABE' }}>
            <div className="bento-glow" />
            <div className="wide-header">
              <div className="wide-icon"><i className="fas fa-layer-group" /></div>
              <h3>Libraries &amp; Frameworks</h3>
            </div>
            <div className="wide-content">
              <div className="bento-badge-container">
                {[
                  'NumPy|90%', 'Pandas|90%', 'Scikit-learn|85%', 'PyTorch|85%',
                  'Transformers|80%', 'Flask|85%', 'FastAPI|80%', 'Django|75%',
                  'Node.js|75%', 'React|85%', 'Next.js|75%', 'LangChain|85%', 'LangGraph|80%',
                ].map((s) => {
                  const [name, val] = s.split('|');
                  return <span className="bento-badge skill-item" data-val={val} key={name}>{name}</span>;
                })}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="bento-card bento-standard reveal" style={{ '--accent': '#02457A' }}>
            <div className="bento-glow" />
            <div className="bento-icon"><i className="fas fa-tools" /></div>
            <h3>Tools</h3>
            <div className="bento-badge-container">
              {[
                'VS Code|95%', 'Jupyter|90%', 'Colab|90%', 'Eclipse|80%',
                'Power BI|80%', 'Docker|85%', 'APIs|90%', 'ngrok|80%',
              ].map((s) => {
                const [name, val] = s.split('|');
                return <span className="bento-badge skill-item" data-val={val} key={name}>{name}</span>;
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
