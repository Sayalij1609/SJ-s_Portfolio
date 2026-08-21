import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 100;
const DARK_COLORS = ['#9E4AB0', '#8B4F67', '#C9A0B8', '#9E4AB0', '#F0E8EC'];
const LIGHT_COLORS = ['#7A2D96', '#8B4F67', '#9E4AB0', '#C9A0B8', '#D4C0CC'];

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let mouseX = -1000, mouseY = -1000;
    const MAX_DIST = 120;

    const getColors = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      return theme === 'light' ? LIGHT_COLORS : DARK_COLORS;
    };
    const getStrokeColor = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      return theme === 'light' ? '#7A2D96' : '#9E4AB0';
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = getColors();
    particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.35 + 0.1,
    }));

    const onMouse = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onMouseOut = () => { mouseX = -1000; mouseY = -1000; };
    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('mouseout', onMouseOut);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - mouseX, dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) { p.x += dx / dist * 1.5; p.y += dy / dist * 1.5; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        for (let j = i + 1; j < particles.length; j++) {
          const dx2 = particles[i].x - particles[j].x;
          const dy2 = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (d < MAX_DIST) {
            ctx.save();
            ctx.globalAlpha = (1 - d / MAX_DIST) * 0.1;
            ctx.strokeStyle = getStrokeColor();
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return <canvas ref={canvasRef} id="particleCanvas" className="particle-canvas" />;
}
