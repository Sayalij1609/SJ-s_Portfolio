import { useState, useEffect, useRef } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'DocuMind — AI Document Intelligence',
    desc: 'An end-to-end AI-powered document intelligence system built with FastAPI, React, and Scikit-learn to streamline financial auditing and accounting workflows. Features a 13-category hybrid ML/heuristic classifier, OCR normalization, Isolation Forest anomaly detection, deterministic compliance rules, and LLM-driven audit synthesis.',
    category: 'ai agentic genai web',
    image: '/images/DocuMind.png',
    badge: 'Document AI',
    badgeColor: '#018ABE',
    icon: 'fas fa-file-invoice-dollar',
    features: [
      '13-Category Hybrid ML & Heuristic Classifier',
      'Automated OCR Text Normalization Pipeline',
      'Isolation Forest Anomaly & Outlier Detection',
      'Deterministic Compliance Rules Engine',
      'LLM-Driven Audit Synthesis & Summary Reports',
      'Interactive Financial Audit Workspace',
    ],
    tech: ['React', 'FastAPI', 'Python', 'Scikit-learn', 'OCR Normalization', 'Isolation Forest', 'LLM Synthesis', 'Pydantic'],
    github: 'https://github.com/Sayalij1609/DocuMind.git',
    live: 'https://documind-navy-phi.vercel.app/',
  },
  {
    id: 2,
    title: 'Multi-Agent Research System',
    desc: 'An autonomous multi-agent AI research platform that coordinates specialized agents for web search, content scraping, research synthesis, quality auditing, and automated report generation.',
    category: 'ai agentic',
    image: '/images/Multi_agent_research.png',
    badge: 'Agentic AI',
    badgeColor: '#8B5CF6',
    icon: 'fas fa-robot',
    features: ['Multi-Agent Research', 'Web Search', 'Web Scraping', 'Report Synthesis', 'Quality Auditing', 'Document Export'],
    tech: ['React', 'Vite', 'FastAPI', 'LangChain', 'LangGraph', 'Python', 'DuckDuckGo', 'BeautifulSoup', 'Pydantic'],
    github: 'https://github.com/Sayalij1609/Multi-Agent-Research-System.git',
    live: 'https://multi-agent-research-system-pink.vercel.app/',
  },
  {
    id: 3,
    title: 'FlowNest Productivity Hub',
    desc: 'A full-stack productivity hub for managing tasks, notes, habits, calendars, analytics, file attachments, and automated email reminders.',
    category: 'web full stack',
    image: '/images/Flownest.png',
    badge: 'Full Stack',
    badgeColor: '#018ABE',
    icon: 'fas fa-layer-group',
    features: ['Task Management', 'Habit Tracking', 'Smart Notes', 'Productivity Analytics', 'Email Reminders'],
    tech: ['React', 'Vite', 'Flask', 'REST API', 'JWT', 'SQLAlchemy', 'PostgreSQL', 'Chart.js', 'APScheduler'],
    github: 'https://github.com/Sayalij1609/FlowNest_Productivity_Hub_New_Version.git',
    live: 'https://flow-nest-productivity-hub-new-vers.vercel.app/',
  },
  {
    id: 4,
    title: 'UrbanFlow AI',
    desc: 'AI-driven traffic management system using YOLO for real-time vehicle detection and Double DQN Reinforcement Learning to dynamically optimise signal timings.',
    category: 'ai cv',
    image: '/images/UrbanFlow.png',
    badge: 'ISF Dubai Finalist',
    badgeColor: '#F59E0B',
    icon: 'fas fa-traffic-light',
    features: ['Real-time Vehicle Detection', 'Double DQN RL Optimization', 'Congestion Reduction', 'Dynamic Signal Timing'],
    tech: ['YOLO', 'RL / DQN', 'Python', 'OpenCV', 'PyTorch', 'NumPy'],
    github: '#',
    live: '#',
  },
  {
    id: 5,
    title: 'MedAgentix AI',
    desc: 'Multi-agent healthcare diagnostics platform using LLMs and RAG for clinical symptom analysis, disease prediction, and Explainable AI for transparent medical rationales.',
    category: 'ai genai',
    image: '/images/MedAgentix_AI.png',
    badge: 'Ongoing Research',
    badgeColor: '#018ABE',
    icon: 'fas fa-heart-pulse',
    features: ['Multi-Agent Triage', 'Explainable AI Insights', 'Clinical RAG Engine', 'Medical Knowledge Base'],
    tech: ['LLMs', 'RAG', 'XAI (SHAP)', 'LangChain', 'Python', 'FastAPI'],
    github: '#',
    live: 'https://med-agentix-ai.vercel.app/',
  },
  {
    id: 6,
    title: 'XAI Social Engineering Simulator',
    desc: 'AI-powered social engineering simulation platform detecting phishing, smishing, vishing, and baiting attacks with ~97% ML classifier accuracy and explainable insights.',
    category: 'ai',
    image: '/images/XAI_Social_engineering_simulator.png',
    badge: '~97% Accuracy',
    badgeColor: '#02457A',
    icon: 'fas fa-shield-virus',
    features: ['XAI Attack Diagnostics', 'Phishing & Smishing Simulation', 'Feature Importance Heatmaps', 'Awareness Training'],
    tech: ['XAI', 'Flask', 'Ollama', 'Scikit-learn', 'Python', 'Pandas'],
    github: 'https://github.com/Sayalij1609/Social_engineering_awareness_simulator.git',
    live: 'https://github.com/Sayalij1609/Social_engineering_awareness_simulator.git',
  },
  {
    id: 7,
    title: 'Hand Gesture Desktop Controller',
    desc: 'Real-time gesture recognition enabling touchless scrolling, clicking, and desktop application navigation through webcam computer vision input.',
    category: 'cv ai',
    image: '/images/Handguesture_controller.png',
    badge: 'Computer Vision',
    badgeColor: '#00BCD4',
    icon: 'fas fa-hand',
    features: ['Real-time Landmark Tracking', 'Touchless Desktop HCI', 'Multi-Gesture Recognition', 'Low-Latency Inference'],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
    github: '#',
    live: '#',
  },
  {
    id: 8,
    title: 'AI News Explanation Agent',
    desc: 'Full-stack agentic news platform powered by FastAPI, Flask, and local Ollama (llama3.2) for intelligent real-time news summarisation and bias analysis.',
    category: 'genai ai',
    image: '/images/NewsAI.png',
    badge: 'GenAI Agent',
    badgeColor: '#10A37F',
    icon: 'fas fa-newspaper',
    features: ['Agentic News Pipeline', 'Local LLM Inference', 'FastAPI Backend', 'Automated Synthesis'],
    tech: ['FastAPI', 'Ollama', 'llama3.2', 'Flask', 'Python', 'LangChain'],
    github: 'https://github.com/Sayalij1609/NEWS_AI.git',
    live: 'https://github.com/Sayalij1609/NEWS_AI.git',
  },
  {
    id: 9,
    title: 'EcoTrace',
    desc: 'Enterprise web platform to manage and track plastic waste collection, recycling workflows, and sustainability metrics using MVC architecture.',
    category: 'web java',
    image: '/images/EcoTrace.png',
    badge: 'Web Platform',
    badgeColor: '#10B981',
    icon: 'fas fa-leaf',
    features: ['MVC Architecture', 'Analytics Dashboards', 'Waste Tracking Lifecycle', 'Role-Based Access'],
    tech: ['Spring Core', 'JSP', 'MySQL', 'Java', 'HTML5', 'CSS3'],
    github: 'https://github.com/Sayalij1609/Ecotrace-Plastic.git',
    live: 'https://github.com/Sayalij1609/Ecotrace-Plastic.git',
  },
  {
    id: 10,
    title: 'OfferMandi',
    desc: 'Commercial offer and retail discount management system using Java Servlets, JSP, and JDBC with dynamic inventory modules and CRUD operations.',
    category: 'web java',
    image: '/images/Offermandi.png',
    badge: 'Adv Java',
    badgeColor: '#3B82F6',
    icon: 'fas fa-tag',
    features: ['Dynamic Offer Engine', 'Merchant Management', 'Relational Schemas', 'CRUD APIs'],
    tech: ['JSP', 'Servlets', 'JDBC', 'MySQL', 'Java'],
    github: 'https://github.com/Sayalij1609/Basket-Buddy.git',
    live: 'https://github.com/Sayalij1609/Basket-Buddy.git',
  },
  {
    id: 11,
    title: 'TrainZ',
    desc: 'Event and survival-themed competitive gaming portal with registration workflows, live round timelines, rules, and organizers overview.',
    category: 'web',
    image: '/images/TrainZ.png',
    badge: 'Frontend',
    badgeColor: '#EF4444',
    icon: 'fas fa-train',
    features: ['Responsive UI', 'Live Competition Timeline', 'Dynamic Rules Guide', 'Smooth Animations'],
    tech: ['React', 'Vite', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Sayalij1609/TrainZ.git',
    live: 'https://trainzdatapolaris.vercel.app/',
  },
  {
    id: 12,
    title: 'VisionCap',
    desc: 'Multimodal deep learning image captioning model synthesizing computer vision and natural language processing to generate accurate descriptive captions.',
    category: 'ai cv',
    image: '/images/Vision_cap.png',
    badge: 'Multimodal AI',
    badgeColor: '#8B5CF6',
    icon: 'fas fa-camera-retro',
    features: ['Multimodal Fusion', 'Deep Captioning Pipeline', 'Feature Extraction', 'Sequence Decoding'],
    tech: ['Computer Vision', 'NLP', 'Python', 'PyTorch', 'Transformers'],
    github: 'https://github.com/Sayalij1609/Multimodal_ImageCaption_Generator.git',
    live: 'https://github.com/Sayalij1609/Multimodal_ImageCaption_Generator.git',
  },
];

const FILTERS = [
  { label: 'All Projects', value: 'all' },
  { label: 'Agentic AI & GenAI', value: 'agentic' },
  { label: 'Machine Learning', value: 'ai' },
  { label: 'Computer Vision', value: 'cv' },
  { label: 'Full Stack Web', value: 'web' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  // Filter projects
  const filtered = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'agentic') return p.category.includes('agentic') || p.category.includes('genai');
    return p.category.includes(activeFilter);
  });

  // Keyboard navigation for Circular Ring Modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') {
        setSelectedProject(null);
      } else if (e.key === 'ArrowRight') {
        navigateModal(1);
      } else if (e.key === 'ArrowLeft') {
        navigateModal(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const navigateModal = (direction) => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + direction + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  return (
    <section className="section pv3-section" id="projects" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-label">Selected Works</div>
        <h2 className="section-title centered about-title-animated">
          Featured <span>Projects</span>
        </h2>
        <p className="pv3-subtitle">
          Click any project box to open its interactive circular portal, architecture breakdown, and live demos.
        </p>

        {/* Filter Pills */}
        <div className="pv3-filters">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`pv3-filter${activeFilter === f.value ? ' pv3-filter-active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
              type="button"
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Uncongested, Sleek Project Boxes Grid */}
        <div className="pbox-grid">
          {filtered.map((proj, i) => {
            const num = String(proj.id).padStart(2, '0');
            return (
              <div
                className="pbox-card"
                key={proj.title}
                style={{ '--accent': proj.badgeColor, '--i': i }}
                onClick={() => setSelectedProject(proj)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(proj)}
                aria-label={`Open project details for ${proj.title}`}
              >
                {/* Top Bar: Number + Badge + Ring Prompt */}
                <div className="pbox-top">
                  <span className="pbox-number">{num}</span>
                  <div className="pbox-badge" style={{ color: proj.badgeColor, borderColor: proj.badgeColor }}>
                    <span className="pbox-badge-dot" style={{ background: proj.badgeColor }} />
                    {proj.badge}
                  </div>
                  <div className="pbox-ring-hint" title="Click to open circular ring view">
                    <i className="fas fa-expand-alt" />
                  </div>
                </div>

                {/* Center Content */}
                <div className="pbox-middle">
                  <div className="pbox-icon" style={{ color: proj.badgeColor }}>
                    <i className={proj.icon} />
                  </div>
                  <h3 className="pbox-title">{proj.title}</h3>
                  <p className="pbox-desc">{proj.desc}</p>
                </div>

                {/* Bottom Bar: Key Tech Pills + Action Trigger */}
                <div className="pbox-bottom">
                  <div className="pbox-tech-preview">
                    {proj.tech.slice(0, 3).map((t) => (
                      <span key={t} className="pbox-tag">{t}</span>
                    ))}
                    {proj.tech.length > 3 && (
                      <span className="pbox-tag pbox-tag-more">+{proj.tech.length - 3}</span>
                    )}
                  </div>

                  <div className="pbox-action-trigger">
                    <span>View Details</span>
                    <span className="pbox-mini-ring">
                      <i className="fas fa-circle-notch" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More on GitHub */}
        <div className="pv3-more reveal">
          <a
            href="https://github.com/Sayalij1609"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Explore More on GitHub &nbsp;<i className="fab fa-github" />
          </a>
        </div>
      </div>

      {/* ===================================================================
          UNIQUE CIRCULAR RING PROJECT PORTAL MODAL
          Opens on clicking any project box with concentric circular rings
          and full project details + links.
          =================================================================== */}
      {selectedProject && (
        <div
          className="pmodal-backdrop"
          onClick={(e) => e.target === e.currentTarget && setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Details for ${selectedProject.title}`}
        >
          <div className="pmodal-window">
            {/* Modal Close Button */}
            <button
              className="pmodal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
              type="button"
            >
              <i className="fas fa-times" />
            </button>

            {/* Modal Body: Two Columns */}
            <div className="pmodal-grid">
              {/* Left Column: The Interactive Circular Ring Portal */}
              <div className="pmodal-visual-col">
                <div className="pmodal-ring-stage">
                  {/* Glowing Ambient Halo */}
                  <div className="pmodal-halo-glow" />

                  {/* Concentric Decorative SVG Tech Rings */}
                  <svg className="pmodal-rings-svg" viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg">
                    {/* Outer Dashed Orbit Ring */}
                    <circle
                      cx="180"
                      cy="180"
                      r="165"
                      fill="none"
                      stroke="rgba(1, 138, 190, 0.45)"
                      strokeWidth="1.2"
                      strokeDasharray="6 12"
                      className="pmodal-orbit-slow"
                    />
                    {/* Orbiting Satellite Data Bead */}
                    <g className="pmodal-orbit-slow">
                      <circle cx="180" cy="15" r="5" fill="#018ABE" />
                      <circle cx="180" cy="15" r="8" fill="none" stroke="rgba(151, 202, 219, 0.5)" strokeWidth="1" />
                    </g>
                    {/* Inner Fine Orbit Ring */}
                    <circle
                      cx="180"
                      cy="180"
                      r="140"
                      fill="none"
                      stroke="rgba(151, 202, 219, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="2 6"
                      className="pmodal-orbit-rev"
                    />
                  </svg>

                  {/* The Circular Ring Core Aperture */}
                  <div className="pmodal-circular-aperture">
                    {/* Multi-Tone Gradient Ring Plate */}
                    <div className="pmodal-ring-plate" />
                    {/* Circular Frame for Image */}
                    <div className="pmodal-circle-frame">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="pmodal-project-img"
                      />
                      <div className="pmodal-circle-shine" />
                    </div>
                    {/* Bottom Status / Badge Anchor */}
                    <div className="pmodal-ring-badge">
                      <span className="live-dot" style={{ background: selectedProject.badgeColor }} />
                      <span>{selectedProject.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows under Ring */}
                <div className="pmodal-nav-bar">
                  <button
                    className="pmodal-nav-btn"
                    onClick={() => navigateModal(-1)}
                    title="Previous Project (Left Arrow)"
                    type="button"
                  >
                    <i className="fas fa-chevron-left" />
                    <span>Prev</span>
                  </button>
                  <span className="pmodal-counter">
                    {String(selectedProject.id).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
                  </span>
                  <button
                    className="pmodal-nav-btn"
                    onClick={() => navigateModal(1)}
                    title="Next Project (Right Arrow)"
                    type="button"
                  >
                    <span>Next</span>
                    <i className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>

              {/* Right Column: Detailed Info, Highlights & Direct Action Links */}
              <div className="pmodal-details-col">
                <div className="pmodal-header">
                  <div className="pmodal-tags-row">
                    <span className="pmodal-num-tag">
                      PROJECT // {String(selectedProject.id).padStart(2, '0')}
                    </span>
                    <span
                      className="pmodal-domain-tag"
                      style={{ color: selectedProject.badgeColor, borderColor: selectedProject.badgeColor }}
                    >
                      {selectedProject.badge}
                    </span>
                  </div>
                  <h3 className="pmodal-title">{selectedProject.title}</h3>
                </div>

                <p className="pmodal-desc">{selectedProject.desc}</p>

                {/* Key Architecture Features */}
                <div className="pmodal-section-block">
                  <h4 className="pmodal-section-heading">
                    <i className="fas fa-star" /> Key Highlights &amp; Architecture
                  </h4>
                  <div className="pmodal-features-list">
                    {selectedProject.features.map((feature) => (
                      <div className="pmodal-feature-item" key={feature}>
                        <i className="fas fa-check-circle" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="pmodal-section-block">
                  <h4 className="pmodal-section-heading">
                    <i className="fas fa-microchip" /> Technologies &amp; Frameworks
                  </h4>
                  <div className="pmodal-tech-list">
                    {selectedProject.tech.map((t) => (
                      <span className="pmodal-tech-badge" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links Mentioned Here */}
                <div className="pmodal-actions-row">
                  {selectedProject.live && selectedProject.live !== '#' ? (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary pmodal-action-btn"
                    >
                      <i className="fas fa-external-link-alt" />
                      <span>Live Demonstration</span>
                    </a>
                  ) : null}

                  {selectedProject.github && selectedProject.github !== '#' ? (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost pmodal-action-btn"
                    >
                      <i className="fab fa-github" />
                      <span>Source Repository</span>
                    </a>
                  ) : (
                    <div className="pmodal-private-note">
                      <i className="fas fa-lock" />
                      <span>Repository available upon request</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
