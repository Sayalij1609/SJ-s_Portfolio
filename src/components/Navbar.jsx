import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#events', label: 'Events' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Magnetic CTA effect
  const ctaRef = useRef(null);
  const handleCtaMove = (e) => {
    const rect = ctaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ctaRef.current.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const handleCtaLeave = () => {
    if (ctaRef.current) ctaRef.current.style.transform = '';
  };

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-inner">
        <a href="#hero" className="nav-brand">
          Sayali<span>.</span>
        </a>
        <nav className={`nav-menu${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? 'active-link' : ''}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="nav-cta"
          ref={ctaRef}
          onMouseMove={handleCtaMove}
          onMouseLeave={handleCtaLeave}
        >
          Hire Me
        </a>
        <button
          className="nav-toggle"
          ref={toggleRef}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}} />
        </button>
      </div>
    </header>
  );
}
