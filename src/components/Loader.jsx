import { useState, useEffect } from 'react';

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0=init, 1=loading, 2=done, 3=exit
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Phase 0 → 1: show "Initializing..." briefly
    const t1 = setTimeout(() => setPhase(1), 300);
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        // Accelerate towards end
        const increment = prev < 60 ? 3 : prev < 85 ? 2 : 1.5;
        return Math.min(prev + increment, 100);
      });
    }, 25);
    return () => { clearTimeout(t1); clearInterval(interval); };
  }, []);

  useEffect(() => {
    if (progress >= 100 && phase === 1) {
      setTimeout(() => setPhase(2), 200); // "Ready" state
      setTimeout(() => setPhase(3), 700); // Start fade-out
      setTimeout(() => onComplete(), 1200); // Remove from DOM
    }
  }, [progress, phase, onComplete]);

  const statusText = phase === 0 ? 'Initializing...' : phase >= 2 ? 'Welcome' : 'Loading Portfolio';

  return (
    <div className={`loader-overlay${phase >= 3 ? ' loader-exit' : ''}`}>
      <div className="loader-content">
        {/* Animated rings */}
        <div className="loader-rings">
          <div className="loader-ring loader-ring-1" />
          <div className="loader-ring loader-ring-2" />
          <div className="loader-ring loader-ring-3" />
          <div className="loader-core-icon">
            <i className="fas fa-brain" />
          </div>
        </div>

        {/* Name */}
        <h1 className="loader-name">
          Sayali<span>.</span>
        </h1>
        <p className="loader-tagline">AI / ML Engineer</p>

        {/* Status text */}
        <p className="loader-status" key={statusText}>{statusText}</p>

        {/* Progress bar */}
        <div className="loader-progress-track">
          <div className="loader-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="loader-pct">{Math.round(progress)}%</span>
      </div>
    </div>
  );
}
