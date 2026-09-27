import { useState, useEffect, useRef } from 'react';

// Domain-Wise Technical Competencies
const TECH_DOMAINS = [
  {
    id: 'agentic-ai',
    title: 'Agentic AI & Generative AI',
    badge: 'Core Specialization',
    icon: 'fas fa-robot',
    accent: '#018ABE',
    summary: 'Autonomous multi-agent swarms, RAG pipelines, and local LLM orchestration.',
    skills: [
      { name: 'LangChain', icon: 'fas fa-link', color: '#2EA44F', level: 'Advanced' },
      { name: 'LangGraph', icon: 'fas fa-diagram-project', color: '#FF6B35', level: 'Advanced' },
      { name: 'LlamaIndex', icon: 'fas fa-layer-group', color: '#8B5CF6', level: 'Proficient' },
      { name: 'Ollama & Local LLMs', icon: 'fas fa-terminal', color: '#018ABE', level: 'Advanced' },
      { name: 'RAG Architectures', icon: 'fas fa-database', color: '#6366F1', level: 'Advanced' },
      { name: 'Vector DBs (Chroma/FAISS)', icon: 'fas fa-cubes', color: '#7C3AED', level: 'Advanced' },
      { name: 'Hugging Face & Transformers', icon: 'fas fa-bolt', color: '#FFD21E', level: 'Proficient' },
      { name: 'Prompt Engineering', icon: 'fas fa-pen-nib', color: '#10A37F', level: 'Advanced' },
      { name: 'Multi-Agent Collaboration', icon: 'fas fa-users-gear', color: '#00BCD4', level: 'Specialist' },
    ],
  },
  {
    id: 'ml-cv',
    title: 'Machine Learning & Computer Vision',
    badge: 'Deep Learning & XAI',
    icon: 'fas fa-brain',
    accent: '#02457A',
    summary: 'Neural network modeling, explainable AI diagnostics, and real-time computer vision.',
    skills: [
      { name: 'Python', icon: 'fab fa-python', color: '#3776AB', level: 'Expert' },
      { name: 'PyTorch', icon: 'fas fa-fire', color: '#EE4C2C', level: 'Advanced' },
      { name: 'TensorFlow / Keras', icon: 'fas fa-network-wired', color: '#FF6F00', level: 'Proficient' },
      { name: 'Scikit-learn', icon: 'fas fa-chart-line', color: '#F7931E', level: 'Advanced' },
      { name: 'OpenCV', icon: 'fas fa-camera', color: '#5C3EE8', level: 'Advanced' },
      { name: 'YOLO (v8/v11)', icon: 'fas fa-eye', color: '#00BCD4', level: 'Advanced' },
      { name: 'Explainable AI (XAI)', icon: 'fas fa-magnifying-glass-chart', color: '#9C27B0', level: 'Specialist' },
      { name: 'NLP & Text Analytics', icon: 'fas fa-language', color: '#4CAF50', level: 'Proficient' },
      { name: 'NumPy & Pandas', icon: 'fas fa-table', color: '#E70488', level: 'Advanced' },
    ],
  },
  {
    id: 'fullstack',
    title: 'Full Stack & Web Engineering',
    badge: 'Production Systems',
    icon: 'fas fa-laptop-code',
    accent: '#018ABE',
    summary: 'High-performance reactive user interfaces and resilient backend microservices.',
    skills: [
      { name: 'React.js', icon: 'fab fa-react', color: '#61DAFB', level: 'Advanced' },
      { name: 'Vite', icon: 'fas fa-bolt-lightning', color: '#BD34FE', level: 'Advanced' },
      { name: 'FastAPI', icon: 'fas fa-rocket', color: '#009688', level: 'Advanced' },
      { name: 'Flask', icon: 'fas fa-flask', color: '#001B48', level: 'Advanced' },
      { name: 'Next.js', icon: 'fas fa-arrow-right', color: '#000000', level: 'Proficient' },
      { name: 'REST APIs & Webhooks', icon: 'fas fa-plug', color: '#FF6C37', level: 'Advanced' },
      { name: 'HTML5 & CSS3', icon: 'fab fa-html5', color: '#E34F26', level: 'Expert' },
      { name: 'JavaScript (ES6+)', icon: 'fab fa-js-square', color: '#F7DF1E', level: 'Advanced' },
      { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933', level: 'Intermediate' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Data Engineering',
    badge: 'Storage & Analytics',
    icon: 'fas fa-database',
    accent: '#97CADB',
    summary: 'Relational data modeling, vector persistence, query optimization, and analytics.',
    skills: [
      { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791', level: 'Advanced' },
      { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1', level: 'Advanced' },
      { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248', level: 'Proficient' },
      { name: 'SQLAlchemy / ORM', icon: 'fas fa-code-branch', color: '#D71F00', level: 'Advanced' },
      { name: 'Vector DBs (Chroma/FAISS)', icon: 'fas fa-cubes', color: '#7C3AED', level: 'Advanced' },
      { name: 'Chart.js & Data Viz', icon: 'fas fa-chart-pie', color: '#FF6384', level: 'Advanced' },
      { name: 'Power BI', icon: 'fas fa-chart-simple', color: '#F2C811', level: 'Proficient' },
      { name: 'JWT & Authentication', icon: 'fas fa-shield-halved', color: '#00B4D8', level: 'Advanced' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps, Cloud & Developer Tools',
    badge: 'Reliability & CI/CD',
    icon: 'fas fa-gears',
    accent: '#02457A',
    summary: 'Containerization, cloud deployment platforms, version control, and research tools.',
    skills: [
      { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED', level: 'Proficient' },
      { name: 'Git & GitHub', icon: 'fab fa-github', color: '#F05032', level: 'Expert' },
      { name: 'Render & Vercel', icon: 'fas fa-cloud-arrow-up', color: '#000000', level: 'Advanced' },
      { name: 'Jupyter & Colab', icon: 'fas fa-book-open', color: '#F37626', level: 'Advanced' },
      { name: 'VS Code & Linux/Bash', icon: 'fas fa-terminal', color: '#007ACC', level: 'Advanced' },
      { name: 'Postman / REST Testing', icon: 'fas fa-paper-plane', color: '#FF6C37', level: 'Advanced' },
      { name: 'Java & OOP', icon: 'fab fa-java', color: '#F89820', level: 'Proficient' },
      { name: 'C Programming', icon: 'fas fa-copyright', color: '#A8B9CC', level: 'Proficient' },
    ],
  },
];

// Marquee Rows for Continuous Floating Flow
const MARQUEE_ROWS = [
  {
    label: 'Languages & AI/ML',
    direction: 'left',
    items: [
      { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
      { name: 'PyTorch', icon: 'fas fa-fire', color: '#EE4C2C' },
      { name: 'Scikit-learn', icon: 'fas fa-chart-line', color: '#F7931E' },
      { name: 'YOLO', icon: 'fas fa-eye', color: '#00BCD4' },
      { name: 'OpenCV', icon: 'fas fa-camera', color: '#5C3EE8' },
      { name: 'Machine Learning', icon: 'fas fa-cogs', color: '#FF6F00' },
      { name: 'Deep Learning', icon: 'fas fa-network-wired', color: '#EE4C2C' },
      { name: 'XAI (Explainable AI)', icon: 'fas fa-search', color: '#9C27B0' },
      { name: 'NLP', icon: 'fas fa-language', color: '#4CAF50' },
      { name: 'NumPy', icon: 'fas fa-calculator', color: '#4DABCF' },
      { name: 'Pandas', icon: 'fas fa-table', color: '#E70488' },
      { name: 'Java', icon: 'fab fa-java', color: '#F89820' },
      { name: 'C', icon: 'fas fa-copyright', color: '#A8B9CC' },
    ],
  },
  {
    label: 'GenAI & Web',
    direction: 'right',
    items: [
      { name: 'LangChain', icon: 'fas fa-link', color: '#2EA44F' },
      { name: 'LangGraph', icon: 'fas fa-diagram-project', color: '#FF6B35' },
      { name: 'Agentic AI', icon: 'fas fa-robot', color: '#8B5CF6' },
      { name: 'RAG Systems', icon: 'fas fa-database', color: '#6366F1' },
      { name: 'Ollama & Local LLMs', icon: 'fas fa-terminal', color: '#018ABE' },
      { name: 'Transformers', icon: 'fas fa-bolt', color: '#FFD21E' },
      { name: 'React.js', icon: 'fab fa-react', color: '#61DAFB' },
      { name: 'Vite', icon: 'fas fa-bolt-lightning', color: '#BD34FE' },
      { name: 'FastAPI', icon: 'fas fa-rocket', color: '#009688' },
      { name: 'Flask', icon: 'fas fa-flask', color: '#001B48' },
      { name: 'Next.js', icon: 'fas fa-arrow-right', color: '#001B48' },
      { name: 'REST APIs', icon: 'fas fa-plug', color: '#FF6C37' },
      { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
    ],
  },
  {
    label: 'Databases & DevOps',
    direction: 'left',
    items: [
      { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
      { name: 'Vector DBs (Chroma)', icon: 'fas fa-cubes', color: '#7C3AED' },
      { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
      { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
      { name: 'SQLAlchemy', icon: 'fas fa-code-branch', color: '#D71F00' },
      { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
      { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
      { name: 'GitHub', icon: 'fab fa-github', color: '#001B48' },
      { name: 'Render', icon: 'fas fa-cloud-arrow-up', color: '#46E3B7' },
      { name: 'Vercel', icon: 'fas fa-cloud', color: '#000000' },
      { name: 'VS Code', icon: 'fas fa-code', color: '#007ACC' },
      { name: 'Jupyter', icon: 'fas fa-book-open', color: '#F37626' },
      { name: 'Colab', icon: 'fas fa-laptop-code', color: '#F9AB00' },
    ],
  },
];

function MarqueeRow({ items, direction }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const pause = () => { track.style.animationPlayState = 'paused'; };
    const resume = () => { track.style.animationPlayState = 'running'; };
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);
    return () => {
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
    };
  }, []);

  const allItems = [...items, ...items];

  return (
    <div className="marquee-container">
      <div className={`marquee-track marquee-${direction}`} ref={trackRef}>
        {allItems.map((item, i) => (
          <div className="marquee-chip" key={`${item.name}-${i}`}>
            <i className={item.icon} style={{ color: item.color }} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const heading = section.querySelector('.tech-heading-wrap');
    const rows = section.querySelectorAll('.marquee-row');
    const domainCards = section.querySelectorAll('.domain-card');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('tech-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heading) obs.observe(heading);
    rows.forEach((r) => obs.observe(r));
    domainCards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, [selectedDomain]);

  const filteredDomains = selectedDomain === 'all'
    ? TECH_DOMAINS
    : TECH_DOMAINS.filter((d) => d.id === selectedDomain);

  return (
    <section className="section tech-section" id="skills" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="tech-heading-wrap">
          <div className="section-label">Technical Mastery</div>
          <h2 className="section-title centered about-title-animated">
            Skills &amp; <span>Tech Stack</span>
          </h2>
          <p className="tech-subtitle">
            An organized domain-wise architecture of tools and frameworks I leverage to design, build, and deploy production-grade intelligent systems.
          </p>
        </div>

        {/* 1. Domain Filter Navigation */}
        <div className="domain-filters-wrap">
          <div className="domain-filters">
            <button
              className={`domain-filter-btn${selectedDomain === 'all' ? ' active' : ''}`}
              onClick={() => setSelectedDomain('all')}
              type="button"
            >
              <i className="fas fa-layer-group" />
              <span>All Domains</span>
            </button>
            {TECH_DOMAINS.map((domain) => (
              <button
                key={domain.id}
                className={`domain-filter-btn${selectedDomain === domain.id ? ' active' : ''}`}
                onClick={() => setSelectedDomain(domain.id)}
                type="button"
              >
                <i className={domain.icon} style={{ color: domain.accent }} />
                <span>{domain.title.split('&')[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Domain-Wise Technical Cards Grid */}
        <div className="domain-cards-grid">
          {filteredDomains.map((domain, idx) => (
            <div
              key={domain.id}
              className="domain-card"
              style={{ '--domain-accent': domain.accent, '--card-i': idx }}
            >
              <div className="domain-card-glow" />
              
              <div className="domain-card-header">
                <div className="domain-icon-box">
                  <i className={domain.icon} />
                </div>
                <div className="domain-title-wrap">
                  <span className="domain-badge">{domain.badge}</span>
                  <h3 className="domain-title">{domain.title}</h3>
                </div>
              </div>

              <p className="domain-summary">{domain.summary}</p>

              <div className="domain-skills-shelf">
                {domain.skills.map((skill) => (
                  <div className="domain-skill-pill" key={skill.name}>
                    <span className="skill-icon-wrap">
                      <i className={skill.icon} style={{ color: skill.color }} />
                    </span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>

              <div className="domain-card-footer">
                <span className="domain-skill-count">
                  <i className="fas fa-microchip" /> {domain.skills.length} Core Technologies
                </span>
                <span className="domain-accent-bar" />
              </div>
            </div>
          ))}
        </div>

        {/* 3. Divider & Header for Floating Flow */}
        <div className="floating-flow-header">
          <div className="flow-badge">
            <span className="flow-dot" />
            <span>Continuous Floating Tech Stream</span>
          </div>
          <span className="flow-hint">Hover over any technology to pause</span>
        </div>
      </div>

      {/* 4. Horizontal Floating Marquee Rows (Preserved as requested) */}
      <div className="marquee-section">
        {MARQUEE_ROWS.map((row, i) => (
          <div className="marquee-row" key={row.label} style={{ '--row-i': i }}>
            <MarqueeRow items={row.items} direction={row.direction} />
          </div>
        ))}
      </div>
    </section>
  );
}
