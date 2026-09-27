const ACHIEVEMENTS = [
  { icon: '📊', title: 'GATE DA 2026', desc: <>Qualified with All India Rank <strong>10584</strong></> },
  { icon: '🌍', title: 'ISF Dubai Summit', desc: 'Selected to present at global innovator platform' },
  { icon: '⚡', title: 'COEP MindSpark', desc: 'Qualified Round 1 of 24-hour hackathon' },
  { icon: '🎓', title: 'Academic Excellence', desc: <>CGPA <strong>9.26</strong> - consistent top performer</> },
  { icon: '🏅', title: '5+ Hackathons', desc: 'National-level competitive experience' },
];

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-label">Achievements</div>
        <h2 className="section-title centered about-title-animated"><span>Milestones</span></h2>
        <div className="ach-grid">
          {ACHIEVEMENTS.map((ach, i) => (
            <div className={`ach-card reveal${i % 3 === 1 ? ' delay-1' : i % 3 === 2 ? ' delay-2' : ''}`} key={ach.title}>
              <span className="ach-icon">{ach.icon}</span>
              <h4>{ach.title}</h4>
              <p>{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
