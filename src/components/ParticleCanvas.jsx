import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 110;
const COLORS = ['#F472B6', '#EC4899', '#F9A8D4', '#F472B6', '#FAF0F4'];

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], mouse = { x: -9999, y: -9999 };
    let animId;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x = Math.random() * (W || window.innerWidth);
        this.y = init ? Math.random() * (H || window.innerHeight) : -10;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = Math.random() * 0.35 + 0.1;
        this.r = Math.random() * 1.8 + 0.4;
        this.alpha = Math.random() * 0.5 + 0.15;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.pulse = Math.random() * Math.PI * 2;
      }
      update() {
        this.pulse += 0.018;
        const pulseAlpha = this.alpha * (0.7 + 0.3 * Math.sin(this.pulse));
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.vx += (dx / dist) * force * 0.6;
          this.vy += (dy / dist) * force * 0.6;
        }
        this.vx *= 0.98;
        this.vy *= 0.98;
        if (Math.abs(this.vy) < 0.08) this.vy = 0.08;
        this.x += this.vx;
        this.y += this.vy;
        this._drawAlpha = pulseAlpha;
        if (this.y > H + 10 || this.x < -20 || this.x > W + 20) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this._drawAlpha;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.r > 1.2 ? 8 : 0;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function drawConnections() {
      const MAX_DIST = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.12;
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = '#F472B6';
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      drawConnections();
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    }

    const onResize = () => resize();
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    resize();
    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} id="particleCanvas" />;
}
