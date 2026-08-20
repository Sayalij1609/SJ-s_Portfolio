import { useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Events from './components/Events';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

export default function App() {
  // Global scroll reveal observer
  useEffect(() => {
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Staggered grid reveal
  useEffect(() => {
    const grids = document.querySelectorAll('.projects-grid-v2, .events-grid, .ach-grid');
    grids.forEach((grid) => {
      grid.classList.add('stagger-parent');
      Array.from(grid.children).forEach((card, i) => {
        card.style.setProperty('--i', i);
        card.classList.remove('delay-1', 'delay-2');
        if (!card.classList.contains('reveal')) card.classList.add('reveal');
      });
    });

    // Re-observe newly classed reveal elements
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.stagger-parent .reveal:not(.visible)').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Timeline scroll-driven line fill
  useEffect(() => {
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
  }, []);

  // Timeline item visibility
  useEffect(() => {
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
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );
    vtlItems.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.15}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Parallax section labels
  useEffect(() => {
    const labels = document.querySelectorAll('.section-label');
    if (!labels.length) return;
    const onScroll = () => {
      labels.forEach((label) => {
        const rect = label.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const offset = (rect.top / window.innerHeight) * 15;
          label.style.transform = `translateY(${offset}px)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <About />
      <Skills />
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
