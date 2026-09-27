import { useState, useEffect, useRef } from 'react';

export default function HeroIllustration() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = ((e.clientX - centerX) / (window.innerWidth / 2)) * 12;
      const y = ((e.clientY - centerY) / (window.innerHeight / 2)) * 12;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-illustration-container"
      style={{
        transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
      }}
    >
      {/* 1. Ambient Background Glow Halo */}
      <div className="hero-halo-glow" />

      {/* 2. Concentric Decorative Geometric Tech Rings */}
      <svg className="hero-tech-rings-svg" viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#018ABE" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#97CADB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#02457A" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#02457A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#018ABE" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Outer Orbit Accent Ring */}
        <circle
          cx="260"
          cy="260"
          r="235"
          fill="none"
          stroke="url(#ringGrad1)"
          strokeWidth="1.2"
          strokeDasharray="6 14"
          className="ring-spin-slow"
        />

        {/* Secondary Delicate Tech Ring */}
        <circle
          cx="260"
          cy="260"
          r="195"
          fill="none"
          stroke="rgba(151, 202, 219, 0.45)"
          strokeWidth="1"
          strokeDasharray="2 8"
          className="ring-spin-rev"
        />

        {/* Orbiting Satellite Data Bead */}
        <g className="ring-spin-slow">
          <circle cx="260" cy="25" r="5" fill="#018ABE" />
          <circle cx="260" cy="25" r="9" fill="none" stroke="rgba(1, 138, 190, 0.4)" strokeWidth="1" />
        </g>
      </svg>

      {/* 3. The Core Avatar with Having Proper Background Ring */}
      <div className="hero-avatar-with-bg">
        {/* Layer A: Dedicated Multi-Tone Background Plate (Matching palette gradient) */}
        <div className="avatar-bg-plate">
          <div className="avatar-plate-shine" />
        </div>

        {/* Layer B: Animated Gradient Outer Ring */}
        <div className="avatar-outer-ring" />

        {/* Layer C: Portrait Photo Frame with Bezel */}
        <div className="avatar-photo-bezel">
          <img src="/images/hero.jpeg" alt="Sayali Jadhav" className="avatar-photo-img" />
        </div>

        {/* Layer D: Sleek Role Badge */}
        <div className="avatar-role-pill">
          <span className="live-dot" />
          <span>AI / ML Engineer</span>
        </div>
      </div>

      {/* 4. Professional 3D Geometric Accents */}
      <div className="hero-floating-3d-cube cube-pos-top">
        <svg viewBox="0 0 60 60" width="54" height="54" xmlns="http://www.w3.org/2000/svg">
          {/* Top Face */}
          <polygon points="30,5 55,18 30,31 5,18" fill="#97CADB" />
          {/* Left Face */}
          <polygon points="5,18 30,31 30,56 5,43" fill="#018ABE" />
          {/* Right Face */}
          <polygon points="30,31 55,18 55,43 30,56" fill="#02457A" />
        </svg>
      </div>

      {/* 6. Professional Attractive Illustration: Floating Glass Data Sphere */}
      <div className="hero-floating-sphere sphere-pos-bottom">
        <div className="sphere-inner">
          <div className="sphere-highlight" />
        </div>
      </div>

      {/* 6. Clean Floating Tech Chips */}
      <div className="hero-tech-chip chip-agentic">
        <i className="fas fa-microchip" />
        <span>Agentic AI</span>
      </div>

      <div className="hero-tech-chip chip-python">
        <i className="fab fa-python" />
        <span>Python</span>
      </div>

      <div className="hero-tech-chip chip-pytorch">
        <i className="fas fa-fire" />
        <span>PyTorch</span>
      </div>

      <div className="hero-tech-chip chip-llms">
        <i className="fas fa-robot" />
        <span>LLMs &amp; RAG</span>
      </div>

      <div className="hero-tech-chip chip-cv">
        <i className="fas fa-eye" />
        <span>Computer Vision</span>
      </div>
    </div>
  );
}
