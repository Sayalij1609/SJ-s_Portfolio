import { useEffect, useRef } from 'react';

export default function Hero() {
  const roleRef = useRef(null);
  const cursorRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const fullText = 'AI/ML Engineering Student & Building Intelligent & Scalable AI Systems';
    const el = roleRef.current;
    if (!el) return;
    el.textContent = '';
    let charIndex = 0;
    let timeout;

    function typeChar() {
      if (charIndex < fullText.length) {
        el.textContent += fullText[charIndex];
        charIndex++;
        timeout = setTimeout(typeChar, 45 + Math.random() * 35);
      } else {
        setTimeout(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transition = 'opacity 0.5s';
            cursorRef.current.style.opacity = '0';
          }
        }, 3000);
      }
    }
    timeout = setTimeout(typeChar, 800);
    return () => clearTimeout(timeout);
  }, []);

  // Animated counters
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
              const duration = 1200;
              const startTime = performance.now();

              function animateCount(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const currentVal = targetVal * eased;
                el.textContent = (isDecimal ? currentVal.toFixed(decimals) : Math.floor(currentVal)) + suffix;
                if (progress < 1) {
                  requestAnimationFrame(animateCount);
                } else {
                  el.textContent = finalText;
                  el.classList.add('counted');
                }
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
        <div className="hero-text fade-up">
          <p className="hero-eyebrow">
            <span className="dot-live" /> Open to Opportunities
          </p>
          <h1 className="hero-name">
            Hi, I'm
            <br />
            <em>Sayali Jadhav</em>
          </h1>
          <p className="hero-role" ref={roleRef}>
            AI/ML Engineering Student &amp; Building Intelligent &amp; Scalable AI Systems
          </p>
          <span className="type-cursor" ref={cursorRef}>|</span>
          <p className="hero-desc">
            Third-year B.Tech student specialising in Artificial Intelligence &amp; Machine Learning at
            RCPIT, Shirpur. I build intelligent, explainable, and agentic AI systems that solve real-world problems.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Connect With Me</a>
            <a href="/Sayali_Jadhav_CV.pdf" className="btn btn-ghost" download="Sayali_Jadhav_CV.pdf">
              Download CV <i className="fas fa-arrow-down" />
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num" data-value="9.31">9.31</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num" data-value="5+">5+</span>
              <span className="stat-label">Hackathons</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num" data-value="4+">4+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>
        <div className="hero-visual fade-up delay-2">
          <div className="hero-glow-orb" />
          <div className="avatar-wrap hero-float">
            <div className="avatar-ring" />
            <div className="avatar-img">
              <img src="/images/hero.jpeg" alt="Sayali Jadhav" />
            </div>
            <div className="avatar-badge"><i className="fas fa-brain" /> AI/ML</div>
          </div>
          <div className="floating-chip chip-1"><i className="fab fa-python" /> Python</div>
          <div className="floating-chip chip-2"><i className="fas fa-robot" /> LLMs</div>
          <div className="floating-chip chip-3"><i className="fas fa-eye" /> CV</div>
          <div className="floating-chip chip-4"><i className="fas fa-microchip" /> Agentic AI</div>
          <div className="floating-chip chip-5"><i className="fas fa-wand-magic-sparkles" /> Gen AI</div>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <i className="fas fa-arrow-down" />
      </div>
    </section>
  );
}
