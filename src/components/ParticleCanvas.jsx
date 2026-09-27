import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width = 0;
    let height = 0;

    // Smooth mouse coordinates with spring lerp
    let targetMouse = { x: -1000, y: -1000 };
    let currentMouse = { x: -1000, y: -1000 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    let currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';

    const onThemeChange = (e) => {
      if (e.detail && e.detail.theme) {
        currentTheme = e.detail.theme;
      } else {
        currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      }
    };
    window.addEventListener('themechange', onThemeChange);

    // Living Aurora Gradient Orbs for Light and Dark modes
    const lightOrbs = [
      {
        baseX: 0.2,
        baseY: 0.25,
        radius: 380,
        speedX: 0.0008,
        speedY: 0.0011,
        ampX: 180,
        ampY: 140,
        colorInner: 'rgba(1, 138, 190, 0.22)',
        colorMid: 'rgba(151, 202, 219, 0.12)',
        colorOuter: 'rgba(214, 232, 238, 0)',
        phase: 0,
      },
      {
        baseX: 0.8,
        baseY: 0.35,
        radius: 440,
        speedX: 0.0009,
        speedY: 0.0007,
        ampX: 200,
        ampY: 160,
        colorInner: 'rgba(151, 202, 219, 0.28)',
        colorMid: 'rgba(1, 138, 190, 0.14)',
        colorOuter: 'rgba(214, 232, 238, 0)',
        phase: Math.PI * 0.7,
      },
      {
        baseX: 0.35,
        baseY: 0.75,
        radius: 480,
        speedX: 0.0007,
        speedY: 0.001,
        ampX: 190,
        ampY: 150,
        colorInner: 'rgba(2, 69, 122, 0.16)',
        colorMid: 'rgba(1, 138, 190, 0.1)',
        colorOuter: 'rgba(214, 232, 238, 0)',
        phase: Math.PI * 1.3,
      },
      {
        baseX: 0.85,
        baseY: 0.8,
        radius: 400,
        speedX: 0.001,
        speedY: 0.0008,
        ampX: 170,
        ampY: 130,
        colorInner: 'rgba(1, 138, 190, 0.18)',
        colorMid: 'rgba(151, 202, 219, 0.12)',
        colorOuter: 'rgba(214, 232, 238, 0)',
        phase: Math.PI * 1.8,
      },
    ];

    const darkOrbs = [
      {
        baseX: 0.18,
        baseY: 0.22,
        radius: 440,
        speedX: 0.0008,
        speedY: 0.0011,
        ampX: 190,
        ampY: 140,
        colorInner: 'rgba(1, 138, 190, 0.18)',
        colorMid: 'rgba(2, 69, 122, 0.08)',
        colorOuter: 'rgba(0, 0, 0, 0)',
        phase: 0,
      },
      {
        baseX: 0.82,
        baseY: 0.3,
        radius: 470,
        speedX: 0.0009,
        speedY: 0.0007,
        ampX: 210,
        ampY: 160,
        colorInner: 'rgba(151, 202, 219, 0.15)',
        colorMid: 'rgba(1, 138, 190, 0.07)',
        colorOuter: 'rgba(0, 0, 0, 0)',
        phase: Math.PI * 0.7,
      },
      {
        baseX: 0.32,
        baseY: 0.76,
        radius: 520,
        speedX: 0.0007,
        speedY: 0.001,
        ampX: 190,
        ampY: 150,
        colorInner: 'rgba(2, 69, 122, 0.18)',
        colorMid: 'rgba(1, 138, 190, 0.08)',
        colorOuter: 'rgba(0, 0, 0, 0)',
        phase: Math.PI * 1.3,
      },
      {
        baseX: 0.86,
        baseY: 0.78,
        radius: 440,
        speedX: 0.001,
        speedY: 0.0008,
        ampX: 180,
        ampY: 130,
        colorInner: 'rgba(1, 138, 190, 0.16)',
        colorMid: 'rgba(151, 202, 219, 0.07)',
        colorOuter: 'rgba(0, 0, 0, 0)',
        phase: Math.PI * 1.8,
      },
    ];

    init();
    window.addEventListener('resize', resize);

    function init() {
      resize();
      targetMouse = { x: width * 0.5, y: height * 0.35 };
      currentMouse = { x: width * 0.5, y: height * 0.35 };
    }

    const onMouseMove = (e) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let time = 0;
    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp mouse spotlight
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.06;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.06;

      const isDark = currentTheme === 'dark';
      const activeOrbs = isDark ? darkOrbs : lightOrbs;

      ctx.save();
      // In dark mode, 'screen' or 'lighter' creates a celestial glowing aurora
      ctx.globalCompositeOperation = isDark ? 'screen' : 'source-over';

      // 1. Draw Living Aurora Gradient Fields
      for (let i = 0; i < activeOrbs.length; i++) {
        const orb = activeOrbs[i];
        const x = orb.baseX * width + Math.sin(time * orb.speedX + orb.phase) * orb.ampX;
        const y = orb.baseY * height + Math.cos(time * orb.speedY + orb.phase) * orb.ampY;
        const breathRadius = orb.radius + Math.sin(time * 0.015 + orb.phase) * 35;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, breathRadius);
        grad.addColorStop(0, orb.colorInner);
        grad.addColorStop(0.55, orb.colorMid);
        grad.addColorStop(1, orb.colorOuter);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, breathRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Interactive Cursor Ambient Spotlight
      if (currentMouse.x > 0 && currentMouse.y > 0) {
        const spotlightRadius = 340;
        const spotGrad = ctx.createRadialGradient(
          currentMouse.x,
          currentMouse.y,
          0,
          currentMouse.x,
          currentMouse.y,
          spotlightRadius
        );

        if (isDark) {
          spotGrad.addColorStop(0, 'rgba(1, 138, 190, 0.12)');
          spotGrad.addColorStop(0.4, 'rgba(151, 202, 219, 0.05)');
          spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          spotGrad.addColorStop(0, 'rgba(1, 138, 190, 0.16)');
          spotGrad.addColorStop(0.4, 'rgba(151, 202, 219, 0.09)');
          spotGrad.addColorStop(1, 'rgba(214, 232, 238, 0)');
        }

        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(currentMouse.x, currentMouse.y, spotlightRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('themechange', onThemeChange);
    };
  }, []);

  return <canvas ref={canvasRef} id="particleCanvas" className="particle-canvas" />;
}
