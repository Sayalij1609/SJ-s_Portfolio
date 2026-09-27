import { useEffect, useRef } from 'react';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
  const roleRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const roles = ['AI/ML Engineer', 'GenAI Developer', 'Computer Vision Enthusiast', 'Full-Stack AI Builder'];
    const el = roleRef.current;
    if (!el) return;
    let roleIdx = 0, charIdx = 0, isDeleting = false, timeout;

    function tick() {
      const current = roles[roleIdx];
      el.textContent = current.substring(0, charIdx);
      if (!isDeleting && charIdx === current.length) {
        timeout = setTimeout(() => { isDeleting = true; tick(); }, 2000);
        return;
      }
      if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
      charIdx += isDeleting ? -1 : 1;
      timeout = setTimeout(tick, isDeleting ? 30 : 70 + Math.random() * 40);
    }
    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const statNums = document.querySelectorAll('.stat-num');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const finalText = el.getAttribute('data-value');
            const match = finalText.match(/^([\d.]+)(.*)$/);
            if (match) {
              const targetVal = parseFloat(match[1]);
              const suffix = match[2] || '';
              const isDecimal = match[1].includes('.');
              const decimals = isDecimal ? (match[1].split('.')[1] || '').length : 0;
              const startTime = performance.now();
              function animateCount(now) {
                const progress = Math.min((now - startTime) / 1200, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const val = targetVal * eased;
                el.textContent = (isDecimal ? val.toFixed(decimals) : Math.floor(val)) + suffix;
                if (progress < 1) requestAnimationFrame(animateCount);
                else { el.textContent = finalText; el.classList.add('counted'); }
              }
              el.textContent = (isDecimal ? (0).toFixed(decimals) : '0') + suffix;
              requestAnimationFrame(animateCount);
            }
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    statNums.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section hero" id="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="dot-live" /> Available for Opportunities
          </div>
          <h1 className="hero-name">
            Hi, I'm <br />
            <em>Sayali Jadhav</em>
          </h1>
          <div className="hero-role-wrap">
            <span className="hero-role-label">I'm a </span>
            <span className="hero-role" ref={roleRef}>AI/ML Engineer</span>
            <span className="type-cursor" ref={cursorRef}>|</span>
          </div>
          <p className="hero-desc">
            Final year B.Tech student specializing in AI &amp; ML at RCPIT Shirpur.
            I build intelligent, explainable, and agentic AI systems that solve real-world problems.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-paper-plane" /> Get In Touch
            </a>
            <a
              href="/Sayali_Jadhav_Resume.pdf"
              className="btn btn-ghost"
              download="Sayali_Jadhav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-arrow-down" /> Download Resume
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num" data-value="9.26">9.26</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num" data-value="5+">5+</span>
              <span className="stat-label">Hackathons</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num" data-value="12+">12+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <HeroIllustration />
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <i className="fas fa-chevron-down" />
      </div>
    </section>
  );
}
