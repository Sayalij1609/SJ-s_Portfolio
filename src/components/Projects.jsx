import { useState, useEffect, useRef } from 'react';

const PROJECTS = [
  {
    title: 'UrbanFlow AI',
    desc: 'AI-driven traffic management system using YOLO for real-time vehicle detection and Double DQN Reinforcement Learning to dynamically optimise signal timings.',
    category: 'ai cv',
    image: '/images/UrbanFlow.jpg',
    statusClass: 'proj-status-award',
    statusLabel: 'ISF Dubai',
    features: ['Real-time Detection', 'RL Optimization'],
    tech: ['YOLO', 'RL / DQN', 'Python', 'OpenCV'],
    github: '#',
    live: '#',
  },
  {
    title: 'MedAgentix AI',
    desc: 'Multi-agent healthcare system using LLMs and RAG for symptom analysis and disease prediction. Integrated Explainable AI for transparent medical recommendations.',
    category: 'ai genai',
    image: '/images/MedAgentix_AI.jpg',
    statusClass: 'proj-status-ongoing',
    statusLabel: 'Ongoing',
    features: ['Multi-Agent', 'Explainable AI'],
    tech: ['LLMs', 'RAG', 'XAI', 'LangChain'],
    github: '#',
    live: '#',
  },
  {
    title: 'XAI Social Engineering Simulator',
    desc: 'AI simulation platform for phishing, smishing, vishing, and baiting attacks. XAI provides insights into attack strategies with ~97% ML classifier accuracy.',
    category: 'ai',
    image: '/images/XAI_Social_engineering_simulator.jpg',
    statusClass: 'proj-status-complete',
    statusLabel: 'Feb 2026',
    features: ['~97% Accuracy', 'XAI Insights'],
    tech: ['XAI', 'Flask', 'Ollama', 'Scikit-learn'],
    github: 'https://github.com/Sayalij1609/Social_engineering_awareness_simulator.git',
    live: 'https://github.com/Sayalij1609/Social_engineering_awareness_simulator.git',
  },
  {
    title: 'Hand Gesture Desktop Controller',
    desc: 'Real-time gesture recognition enabling scrolling, clicking, and app switching through webcam input — touchless human-computer interaction.',
    category: 'cv ai',
    image: '/images/Handguesture_controller.jpg',
    statusClass: 'proj-status-complete',
    statusLabel: 'June 2025',
    features: ['Real-time', 'Touchless HCI'],
    tech: ['Python', 'OpenCV', 'MediaPipe'],
    github: '#',
    live: '#',
  },
  {
    title: 'AI News Explanation Agent',
    desc: 'Full-stack agentic news platform powered by FastAPI, Flask, and Ollama (llama3.2) with a custom dark-themed frontend for intelligent news summarisation.',
    category: 'genai ai',
    image: '/images/NewsAI.jpg',
    statusClass: 'proj-status-complete',
    statusLabel: 'GenAI',
    statusStyle: { color: '#f59e0b', borderColor: 'rgba(245,158,11,0.25)', background: 'rgba(245,158,11,0.08)' },
    dotStyle: { background: '#f59e0b', boxShadow: '0 0 6px #f59e0b' },
    features: ['Agentic AI', 'Full-Stack'],
    tech: ['FastAPI', 'Ollama', 'llama3.2', 'Flask'],
    github: 'https://github.com/Sayalij1609/NEWS_AI.git',
    live: 'https://github.com/Sayalij1609/NEWS_AI.git',
  },
  {
    title: 'EcoTrace',
    desc: 'Developed a web platform to manage and track plastic waste collection. Implemented MVC architecture using Spring Core and JSP. Integrated MySQL backend with user dashboards.',
    category: 'web java',
    image: '/images/EcoTrace.jpg',
    projAccent: '#10b981',
    statusStyle: { color: '#10b981', borderColor: 'rgba(16,185,129,0.25)', background: 'rgba(16,185,129,0.08)' },
    dotStyle: { background: '#10b981', boxShadow: '0 0 6px #10b981' },
    statusLabel: 'Web Dev',
    features: ['MVC Architecture', 'Dashboards'],
    tech: ['Spring Core', 'JSP', 'MySQL', 'Java'],
    github: 'https://github.com/Sayalij1609/Ecotrace-Plastic.git',
    live: 'https://github.com/Sayalij1609/Ecotrace-Plastic.git',
  },
  {
    title: 'OfferMandi',
    desc: 'Developed an offer management system using JSP, Servlets, and JDBC. Implemented modules for adding, updating, and displaying offers dynamically.',
    category: 'web java',
    image: '/images/Offermandi.jpg',
    projAccent: '#3b82f6',
    statusStyle: { color: '#3b82f6', borderColor: 'rgba(59,130,246,0.25)', background: 'rgba(59,130,246,0.08)' },
    dotStyle: { background: '#3b82f6', boxShadow: '0 0 6px #3b82f6' },
    statusLabel: 'Adv Java',
    features: ['Offer Management', 'Dynamic UI'],
    tech: ['JSP', 'Servlets', 'JDBC', 'Java'],
    github: 'https://github.com/Sayalij1609/Basket-Buddy.git',
    live: 'https://github.com/Sayalij1609/Basket-Buddy.git',
  },
  {
    title: 'TrainZ',
    desc: 'A complete event website designed to provide all essential information about a survival-themed technical competition, including rounds, timeline, prizes, and organizers.',
    category: 'web',
    image: '/images/TrainZ.jpg',
    projAccent: '#ef4444',
    statusStyle: { color: '#ef4444', borderColor: 'rgba(239,68,68,0.25)', background: 'rgba(239,68,68,0.08)' },
    dotStyle: { background: '#ef4444', boxShadow: '0 0 6px #ef4444' },
    statusLabel: 'Frontend',
    features: ['Responsive UI', 'Event Portal'],
    tech: ['React', 'Vite', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Sayalij1609/TrainZ.git',
    live: 'https://trainzdatapolaris.vercel.app/',
  },
  {
    title: 'VisionCap',
    desc: 'Built a multimodal image captioning model leveraging computer vision and natural language processing techniques to automatically generate descriptive text for visual inputs.',
    category: 'ai cv',
    image: '/images/Vision_cap.jpg',
    projAccent: '#8b5cf6',
    statusStyle: { color: '#8b5cf6', borderColor: 'rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.08)' },
    dotStyle: { background: '#8b5cf6', boxShadow: '0 0 6px #8b5cf6' },
    statusLabel: 'AI / CV',
    features: ['Multimodal AI', 'Image Captioning'],
    tech: ['Computer Vision', 'NLP', 'Python'],
    github: 'https://github.com/Sayalij1609/Multimodal_ImageCaption_Generator.git',
    live: 'https://github.com/Sayalij1609/Multimodal_ImageCaption_Generator.git',
  },
];

const FILTERS = [
  { label: 'All Projects', value: 'all' },
  { label: 'AI / ML', value: 'ai' },
  { label: 'GenAI', value: 'genai' },
  { label: 'Computer Vision', value: 'cv' },
  { label: 'Web Dev', value: 'web' },
  { label: 'Java Apps', value: 'java' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const cardRefs = useRef([]);

  // 3D tilt effect
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    const handlers = cards.map((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        card.style.transform = `translateY(-10px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const glow = card.querySelector('.proj-card-glow');
        if (glow) {
          glow.style.top = `${y - 100}px`;
          glow.style.left = `${x - 100}px`;
          glow.style.right = 'auto';
        }
      };
      const onLeave = () => {
        card.style.transform = '';
        const glow = card.querySelector('.proj-card-glow');
        if (glow) { glow.style.top = ''; glow.style.left = ''; glow.style.right = ''; }
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      return { card, onMove, onLeave };
    });
    return () => {
      handlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [activeFilter]);

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === 'all' || p.category.includes(activeFilter)
  );

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-label">Projects</div>
        <h2 className="section-title centered about-title-animated">Featured <span>Work</span></h2>
        <p className="projects-subtitle">A curated collection of AI/ML systems I've designed, built, and deployed.</p>

        <div className="project-filters">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter-pill${activeFilter === f.value ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid-v2">
          {filteredProjects.map((proj, i) => (
            <div
              className="proj-card reveal"
              key={proj.title}
              ref={(el) => (cardRefs.current[i] = el)}
              style={proj.projAccent ? { '--proj-accent': proj.projAccent } : undefined}
            >
              <div className="proj-card-glow" style={proj.projAccent ? { '--proj-accent': proj.projAccent } : undefined} />
              <div className="proj-card-particles" style={proj.projAccent ? { '--proj-accent': proj.projAccent } : undefined}>
                <span /><span /><span /><span /><span />
              </div>
              <div className="proj-image">
                <img src={proj.image} alt={proj.title} />
                <div
                  className={`proj-status ${proj.statusClass || 'proj-status-complete'}`}
                  style={proj.statusStyle || undefined}
                >
                  <span className="proj-status-dot" style={proj.dotStyle || undefined} />
                  {proj.statusLabel}
                </div>
              </div>
              <div className="proj-card-body">
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-desc">{proj.desc}</p>
                <div className="proj-features">
                  {proj.features.map((f) => (
                    <span className="proj-feature" key={f}>
                      <i className="fas fa-check-circle" /> {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="proj-card-footer">
                <div className="proj-tech-stack">
                  {proj.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="proj-actions">
                  <a href={proj.github} className="proj-action-btn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" />
                  </a>
                  <a href={proj.live} className="proj-action-btn proj-action-primary" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-more reveal">
          <a href="https://github.com/Sayalij1609" target="_blank" rel="noopener noreferrer" className="btn btn-primary explore-btn">
            Explore More on GitHub &nbsp;<i className="fab fa-github" />
          </a>
        </div>
      </div>
    </section>
  );
}
