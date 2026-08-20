export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">Sayali<span>.</span></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <p>Designed &amp; built by Sayali Bharat Jadhav &middot; RCPIT Shirpur &middot; 2026</p>
          <img
            src="https://api.visitorbadge.io/api/visitors?path=Sayalij1609-SayaliPortfolio&countColor=%23F472B6&labelColor=%230A0A0F&style=flat-square&label=Views"
            alt="Profile Views Counter"
          />
        </div>
        <div className="footer-socials">
          <a href="https://github.com/Sayalij1609" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
          <a href="https://linkedin.com/in/sayali-jadhav-b4263827b" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
          <a href="mailto:sayalijadhav162005@gmail.com"><i className="fas fa-envelope" /></a>
        </div>
      </div>
    </footer>
  );
}
