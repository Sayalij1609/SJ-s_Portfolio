import { useState, useRef } from 'react';

export default function Contact() {
  const [formMsg, setFormMsg] = useState('');
  const [msgColor, setMsgColor] = useState('');
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.status === 200) {
        setFormMsg('✓ Message sent successfully!');
        setMsgColor('var(--cyan)');
        formRef.current.reset();
      } else {
        setFormMsg(result.message || 'Something went wrong. Please try again.');
        setMsgColor('var(--purple)');
      }
    } catch {
      setFormMsg('Network error. Please try again.');
      setMsgColor('var(--purple)');
    }

    setSending(false);
    setTimeout(() => setFormMsg(''), 5000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-label">Contact</div>
        <h2 className="section-title centered about-title-animated">Get In <span>Touch</span></h2>
        <p className="contact-sub">Open to AI/ML internships, GenAI projects, research collaborations, and hackathons.</p>

        <div className="contact-grid">
          <div className="contact-links reveal">
            <a href="mailto:sayalijadhav162005@gmail.com" className="contact-item">
              <i className="fas fa-envelope" />
              <div><strong>Email</strong><span>sayalijadhav162005@gmail.com</span></div>
            </a>
            <a href="tel:9359582185" className="contact-item">
              <i className="fas fa-phone" />
              <div><strong>Phone</strong><span>+91 93595 82185</span></div>
            </a>
            <div className="contact-item no-link">
              <i className="fas fa-map-marker-alt" />
              <div><strong>Location</strong><span>Shirpur, Maharashtra, India</span></div>
            </div>
          </div>

          <form
            className="contact-form reveal delay-1"
            id="contactForm"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="access_key" value="0d57e70d-fe06-4008-b985-b68916c1992f" />
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Internship / Collaboration / Research" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Tell me about your project or opportunity..." />
            </div>
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? <>Sending... <i className="fas fa-spinner fa-spin" /></> : <>Send Message <i className="fas fa-paper-plane" /></>}
            </button>
            <div className="form-msg" style={{ color: msgColor }}>{formMsg}</div>
          </form>
        </div>

        <div className="coding-profiles-row reveal">
          <a href="mailto:sayalijadhav162005@gmail.com" className="cp-link"><i className="fas fa-envelope" /> Email</a>
          <a href="https://linkedin.com/in/sayali-jadhav-b4263827b" target="_blank" rel="noopener noreferrer" className="cp-link"><i className="fab fa-linkedin" /> LinkedIn</a>
          <a href="https://github.com/Sayalij1609" target="_blank" rel="noopener noreferrer" className="cp-link"><i className="fab fa-github" /> GitHub</a>
          <a href="https://leetcode.com/u/jsaya/" target="_blank" rel="noopener noreferrer" className="cp-link"><i className="fas fa-code" /> LeetCode</a>
          <a href="https://www.codechef.com/users/sayali_07019" target="_blank" rel="noopener noreferrer" className="cp-link"><i className="fas fa-laptop-code" /> CodeChef</a>
          <a href="https://www.hackerrank.com/profile/sayalij1609" target="_blank" rel="noopener noreferrer" className="cp-link"><i className="fab fa-hackerrank" /> HackerRank</a>
          <a href="/Sayali_Jadhav_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cp-link" download="Sayali_Jadhav_Resume.pdf"><i className="fas fa-file-pdf" /> Resume</a>
        </div>
      </div>
    </section>
  );
}
