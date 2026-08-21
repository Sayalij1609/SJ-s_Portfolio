import { useState, useEffect, useCallback } from 'react';
import Loader from './components/Loader';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Events from './components/Events';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Prevent unwanted auto-jump to anchor on page refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
    // Ensure viewport stays at top when loader disappears
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }, []);

  // Global scroll reveal observer for below-the-fold sections
  useEffect(() => {
    if (loading) return;
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );
    revealEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [loading]);

  // Staggered grid reveal
  useEffect(() => {
    if (loading) return;
    const grids = document.querySelectorAll('.pv3-grid, .events-grid, .ach-grid');
    grids.forEach((grid) => {
      grid.classList.add('stagger-parent');
      Array.from(grid.children).forEach((card, i) => {
        card.style.setProperty('--i', i);
        card.classList.remove('delay-1', 'delay-2');
        if (!card.classList.contains('reveal')) card.classList.add('reveal');
      });
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );
    document.querySelectorAll('.stagger-parent .reveal:not(.visible)').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [loading]);

  // Timeline scroll-driven line fill
  useEffect(() => {
    if (loading) return;
    const onScroll = () => {
      document.querySelectorAll('.v-timeline').forEach((tl) => {
        const fill = tl.querySelector('.v-timeline-line-fill');
        if (!fill) return;
        const rect = tl.getBoundingClientRect();
        const scrolled = window.innerHeight - rect.top;
        const pct = Math.min(Math.max((scrolled / rect.height) * 100, 0), 100);
        fill.style.height = pct + '%';
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [loading]);

  // Timeline item visibility
  useEffect(() => {
    if (loading) return;
    const vtlItems = document.querySelectorAll('.v-tl-item');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('v-tl-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -20px 0px' }
    );
    vtlItems.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.12}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, [loading]);

  // Parallax section labels
  useEffect(() => {
    if (loading) return;
    const labels = document.querySelectorAll('.section-label');
    if (!labels.length) return;
    const onScroll = () => {
      labels.forEach((label) => {
        const rect = label.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const offset = (rect.top / window.innerHeight) * 12;
          label.style.transform = `translateY(${offset}px)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [loading]);

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Education />
      <Projects />
      <Experience />
      <Events />
      <Achievements />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}
