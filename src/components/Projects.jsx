import { useState, useEffect, useRef } from 'react';

const PROJECTS = [
  {
    title: 'FlowNest Productivity Hub',
    desc: 'A full-stack productivity hub for managing tasks, notes, habits, calendars, analytics, file attachments, and automated email reminders.',
    category: 'web full stack',
    image: '/images/Flownest.png',
    badge: 'Full Stack',
    badgeColor: '#8b5cf6',
    features: ['Task Management', 'Habit Tracking', 'Smart Notes', 'Productivity Analytics', 'Email Reminders'],
    tech: ['React', 'Vite', 'Flask', 'REST API', 'JWT', 'SQLAlchemy', 'PostgreSQL', 'Chart.js', 'APScheduler'],
    github: 'https://github.com/Sayalij1609/FlowNest_Productivity_Hub_New_Version.git',
    live: 'https://flownest-productivity-hub-new-version.onrender.com/app',
  },
  {
    title: 'Multi-Agent Research System',
    desc: 'An autonomous multi-agent AI research platform that coordinates specialized agents for web search, content scraping, research synthesis, quality auditing, and automated report generation.',
    category: 'ai agentic',
    image: '/images/Multi_agent_research.png',
    badge: 'Agentic AI',
    badgeColor: '#8b5cf6',
    features: ['Multi-Agent Research', 'Web Search', 'Web Scraping', 'Report Synthesis', 'Quality Auditing', 'Document Export'],
    tech: ['React', 'Vite', 'FastAPI', 'LangChain', 'LangGraph', 'Python', 'DuckDuckGo', 'BeautifulSoup', 'Pydantic'],
    github: 'https://github.com/Sayalij1609/Multi-Agent-Research-System.git',
    live: 'https://multi-agent-research-system-6qwo.onrender.com/',
  },
  {
    title: 'UrbanFlow AI',
    desc: 'AI-driven traffic management system using YOLO for real-time vehicle detection and Double DQN Reinforcement Learning to dynamically optimise signal timings.',
    category: 'ai cv',
    image: '/images/UrbanFlow.png',
    badge: 'ISF Dubai',
    badgeColor: '#f59e0b',
    features: ['Real-time Detection', 'RL Optimization'],
    tech: ['YOLO', 'RL / DQN', 'Python', 'OpenCV'],
    github: '#',
    live: '#',
  },
  {
    title: 'MedAgentix AI',
    desc: 'Multi-agent healthcare system using LLMs and RAG for symptom analysis and disease prediction. Integrated Explainable AI for transparent medical recommendations.',
    category: 'ai genai',
    image: '/images/MedAgentix_AI.png',
    badge: 'Ongoing',
    badgeColor: '#9E4AB0',
    features: ['Multi-Agent', 'Explainable AI'],
    tech: ['LLMs', 'RAG', 'XAI', 'LangChain'],
    github: '#',
    live: '#',
  },
  {
    title: 'XAI Social Engineering Simulator',
    desc: 'AI simulation platform for phishing, smishing, vishing, and baiting attacks with ~97% ML classifier accuracy.',
    category: 'ai',
    image: '/images/XAI_Social_engineering_simulator.png',
    badge: '~97% Accuracy',
    badgeColor: '#8B4F67',
    features: ['XAI Insights', 'Attack Simulation'],
    tech: ['XAI', 'Flask', 'Ollama', 'Scikit-learn'],
    github: 'https://github.com/Sayalij1609/Social_engineering_awareness_simulator.git',
    live: 'https://github.com/Sayalij1609/Social_engineering_awareness_simulator.git',
  },
  {
    title: 'Hand Gesture Desktop Controller',
    desc: 'Real-time gesture recognition enabling scrolling, clicking, and app switching through webcam input.',
    category: 'cv ai',
    image: '/images/Handguesture_controller.png',
    badge: 'Computer Vision',
    badgeColor: '#00BCD4',
    features: ['Real-time', 'Touchless HCI'],
    tech: ['Python', 'OpenCV', 'MediaPipe'],
    github: '#',
    live: '#',
  },
  {
    title: 'AI News Explanation Agent',
    desc: 'Full-stack agentic news platform powered by FastAPI, Flask, and Ollama (llama3.2) for intelligent news summarisation.',
    category: 'genai ai',
    image: '/images/NewsAI.png',
    badge: 'GenAI',
    badgeColor: '#10A37F',
    features: ['Agentic AI', 'Full-Stack'],
    tech: ['FastAPI', 'Ollama', 'llama3.2', 'Flask'],
    github: 'https://github.com/Sayalij1609/NEWS_AI.git',
    live: 'https://github.com/Sayalij1609/NEWS_AI.git',
  },
  {
    title: 'EcoTrace',
    desc: 'Web platform to manage and track plastic waste collection. MVC architecture using Spring Core and JSP with MySQL.',
    category: 'web java',
    image: '/images/EcoTrace.png',
    badge: 'Web Dev',
    badgeColor: '#10b981',
    features: ['MVC Architecture', 'Dashboards'],
    tech: ['Spring Core', 'JSP', 'MySQL', 'Java'],
    github: 'https://github.com/Sayalij1609/Ecotrace-Plastic.git',
    live: 'https://github.com/Sayalij1609/Ecotrace-Plastic.git',
  },
  {
    title: 'OfferMandi',
    desc: 'Offer management system using JSP, Servlets, and JDBC with dynamic modules for CRUD operations.',
    category: 'web java',
    image: '/images/Offermandi.png',
    badge: 'Adv Java',
    badgeColor: '#3b82f6',
    features: ['Offer Management', 'Dynamic UI'],
    tech: ['JSP', 'Servlets', 'JDBC', 'Java'],
    github: 'https://github.com/Sayalij1609/Basket-Buddy.git',
    live: 'https://github.com/Sayalij1609/Basket-Buddy.git',
  },
  {
    title: 'TrainZ',
    desc: 'Event website for a survival-themed technical competition with rounds, timeline, prizes, and organizers.',
    category: 'web',
    image: '/images/TrainZ.png',
    badge: 'Frontend',
    badgeColor: '#ef4444',
    features: ['Responsive UI', 'Event Portal'],
    tech: ['React', 'Vite', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Sayalij1609/TrainZ.git',
    live: 'https://trainzdatapolaris.vercel.app/',
  },
  {
    title: 'VisionCap',
    desc: 'Multimodal image captioning model using computer vision and NLP to generate descriptive text for visual inputs.',
    category: 'ai cv',
    image: '/images/Vision_cap.png',
    badge: 'AI / CV',
    badgeColor: '#8b5cf6',
    features: ['Multimodal AI', 'Image Captioning'],
    tech: ['Computer Vision', 'NLP', 'Python'],
    github: 'https://github.com/Sayalij1609/Multimodal_ImageCaption_Generator.git',
    live: 'https://github.com/Sayalij1609/Multimodal_ImageCaption_Generator.git',
  },
];

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'AI / ML', value: 'ai' },
  { label: 'GenAI', value: 'genai' },
  { label: 'Computer Vision', value: 'cv' },
  { label: 'Web Dev', value: 'web' },
  { label: 'Java', value: 'java' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = section.querySelectorAll('.pv3-card');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pv3-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, [activeFilter]);

  const filtered = PROJECTS.filter(
    (p) => activeFilter === 'all' || p.category.includes(activeFilter)
  );

  return (
    <section className="section pv3-section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-label">Projects</div>
        <h2 className="section-title centered about-title-animated">
          Featured <span>Work</span>
        </h2>
        <p className="pv3-subtitle">
          A curated collection of AI/ML systems I've designed, built, and deployed.
        </p>

        <div className="pv3-filters">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`pv3-filter${activeFilter === f.value ? ' pv3-filter-active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="pv3-grid">
          {filtered.map((proj, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <div
                className="pv3-card"
                key={proj.title}
                style={{ '--accent': proj.badgeColor, '--i': i }}
              >
                <div className="pv3-card-img">
                  <img src={proj.image} alt={proj.title} loading="lazy" />
                  <div className="pv3-card-overlay" />
                  <span className="pv3-number">{num}</span>
                  <div className="pv3-badge pv3-badge-float" style={{ color: proj.badgeColor, borderColor: proj.badgeColor }}>
                    <span className="pv3-badge-dot" style={{ background: proj.badgeColor }} />
                    {proj.badge}
                  </div>
                </div>
                <div className="pv3-card-body">
                  <h3 className="pv3-card-title">{proj.title}</h3>
                  <p className="pv3-card-desc">{proj.desc}</p>
                  <div className="pv3-features pv3-features-sm">
                    {proj.features.map((f) => (
                      <span key={f}><i className="fas fa-check" /> {f}</span>
                    ))}
                  </div>
                  <div className="pv3-bottom">
                    <div className="pv3-tech">
                      {proj.tech.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    <div className="pv3-actions">
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="pv3-action-icon" title="Source Code">
                        <i className="fab fa-github" />
                      </a>
                      <a href={proj.live} target="_blank" rel="noopener noreferrer" className="pv3-action-icon pv3-action-primary" title="Live Demo">
                        <i className="fas fa-external-link-alt" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pv3-more reveal">
          <a href="https://github.com/Sayalij1609" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Explore More on GitHub &nbsp;<i className="fab fa-github" />
          </a>
        </div>
      </div>
    </section>
  );
}
