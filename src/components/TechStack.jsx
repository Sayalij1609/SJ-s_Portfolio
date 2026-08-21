import { useEffect, useRef } from 'react';

const ROWS = [
  {
    label: 'Languages & AI/ML',
    direction: 'left',
    items: [
      { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
      { name: 'Java', icon: 'fab fa-java', color: '#F89820' },
      { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
      { name: 'C', icon: 'fas fa-copyright', color: '#A8B9CC' },
      { name: 'Machine Learning', icon: 'fas fa-cogs', color: '#FF6F00' },
      { name: 'Deep Learning', icon: 'fas fa-network-wired', color: '#EE4C2C' },
      { name: 'PyTorch', icon: 'fas fa-fire', color: '#EE4C2C' },
      { name: 'Scikit-learn', icon: 'fas fa-chart-line', color: '#F7931E' },
      { name: 'NLP', icon: 'fas fa-language', color: '#4CAF50' },
      { name: 'Computer Vision', icon: 'fas fa-eye', color: '#00BCD4' },
      { name: 'XAI', icon: 'fas fa-search', color: '#9C27B0' },
      { name: 'NumPy', icon: 'fas fa-calculator', color: '#4DABCF' },
      { name: 'Pandas', icon: 'fas fa-table', color: '#E70488' },
      { name: 'OpenCV', icon: 'fas fa-camera', color: '#5C3EE8' },
    ],
  },
  {
    label: 'GenAI & Web',
    direction: 'right',
    items: [
      { name: 'LLMs', icon: 'fas fa-robot', color: '#10A37F' },
      { name: 'LangChain', icon: 'fas fa-link', color: '#2EA44F' },
      { name: 'LangGraph', icon: 'fas fa-diagram-project', color: '#FF6B35' },
      { name: 'RAG', icon: 'fas fa-database', color: '#6366F1' },
      { name: 'Agentic AI', icon: 'fas fa-microchip', color: '#8B5CF6' },
      { name: 'Ollama', icon: 'fas fa-terminal', color: '#F0E8EC' },
      { name: 'Transformers', icon: 'fas fa-bolt', color: '#FFD21E' },
      { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
      { name: 'Next.js', icon: 'fas fa-arrow-right', color: '#F0E8EC' },
      { name: 'Flask', icon: 'fas fa-flask', color: '#F0E8EC' },
      { name: 'FastAPI', icon: 'fas fa-rocket', color: '#009688' },
      { name: 'Django', icon: 'fas fa-server', color: '#44B78B' },
      { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
      { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' },
      { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572B6' },
    ],
  },
  {
    label: 'Databases & Tools',
    direction: 'left',
    items: [
      { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
      { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
      { name: 'Vector DBs', icon: 'fas fa-cubes', color: '#7C3AED' },
      { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
      { name: 'GitHub', icon: 'fab fa-github', color: '#F0E8EC' },
      { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
      { name: 'VS Code', icon: 'fas fa-code', color: '#007ACC' },
      { name: 'Jupyter', icon: 'fas fa-book-open', color: '#F37626' },
      { name: 'Colab', icon: 'fas fa-laptop-code', color: '#F9AB00' },
      { name: 'Power BI', icon: 'fas fa-chart-pie', color: '#F2C811' },
      { name: 'APIs', icon: 'fas fa-plug', color: '#FF6C37' },
    ],
  },
];

function MarqueeRow({ items, direction }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Pause on hover
    const pause = () => { track.style.animationPlayState = 'paused'; };
    const resume = () => { track.style.animationPlayState = 'running'; };
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);
    return () => {
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
    };
  }, []);

  // Duplicate items for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className="marquee-container">
      <div
        className={`marquee-track marquee-${direction}`}
        ref={trackRef}
      >
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
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const heading = section.querySelector('.tech-heading-wrap');
    const rows = section.querySelectorAll('.marquee-row');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('tech-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (heading) obs.observe(heading);
    rows.forEach((r) => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section tech-section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="tech-heading-wrap">
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title centered about-title-animated">
            Technologies &amp; <span>Tools</span>
          </h2>
          <p className="tech-subtitle">
            The tools and technologies I use to build intelligent, scalable AI systems.
          </p>
        </div>
      </div>

      <div className="marquee-section">
        {ROWS.map((row, i) => (
          <div className="marquee-row" key={row.label} style={{ '--row-i': i }}>
            <MarqueeRow items={row.items} direction={row.direction} />
          </div>
        ))}
      </div>
    </section>
  );
}
