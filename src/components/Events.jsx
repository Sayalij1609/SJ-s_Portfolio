const EVENTS = [
  {
    icon: '🌍', date: 'Dec 2024', title: 'DevFest Indore - GDG',
    desc: 'Attended the AI/ML + Cloud track, learning from Google, IBM, and Infosys experts about AI for cloud security and serverless architecture.',
    linkedin: 'https://www.linkedin.com/posts/sayali-jadhav-b4263827b_gdgindore-devfest2024-ai-activity-7278797876065943553-SuSO?utm_source=share&utm_medium=member_android&rcm=ACoAAERCZ2IBtxCEZCoa94TkszT0msv6Eugm0B4',
  },
  {
    icon: '🤖', date: 'Feb 2025', title: 'Mumbai Tech Week - Mumb.AI',
    desc: "Participated in Asia's largest AI event at Jio World Convention Centre. Gained insights from visionary keynotes and networked with India's AI leaders.",
    linkedin: 'https://www.linkedin.com/posts/sayali-jadhav-b4263827b_mumbaitechweek2025-airevolution-techinnovation-activity-7306503697595871232-9YVq?utm_source=share&utm_medium=member_android&rcm=ACoAAERCZ2IBtxCEZCoa94TkszT0msv6Eugm0B4',
  },
  {
    icon: '🚀', date: 'Apr - Jul 2025', title: 'Infosys Pragati Cohort 5',
    desc: '12-week transformative program for women in tech with mentorship, skill-building, and real-world AI/ML project experience.',
    linkedin: 'https://www.linkedin.com/posts/sayali-jadhav-b4263827b_infosysspringboard-pragatipathtofuture-learning-activity-7325932990776102912-qYxw?utm_source=share&utm_medium=member_android&rcm=ACoAAERCZ2IBtxCEZCoa94TkszT0msv6Eugm0B4',
  },
  {
    icon: '⚡', date: '2025', title: 'COEP MindSpark Hackathon',
    desc: 'Qualified Round 1 of the prestigious 24-hour hackathon, competing among top student developers across India.',
    linkedin: 'https://www.linkedin.com/posts/sayali-jadhav-b4263827b_coepmindspark25-tatamotors-hackathon-activity-7387331904510947328-JZp7?utm_source=share&utm_medium=member_android&rcm=ACoAAERCZ2IBtxCEZCoa94TkszT0msv6Eugm0B4',
  },
  {
    icon: '💻', date: '2026', title: 'GHRHack 2.0 – Code to Career',
    desc: '36 hours of creativity, collaboration, and problem-solving at G H Raisoni College. A journey from initial brainstorming to a complete strategic rework halfway through!',
    linkedin: 'https://www.linkedin.com/posts/sayali-jadhav-b4263827b_hackathon-studentdeveloper-techcommunity-activity-7438053728135471104-n5oK?utm_source=share&utm_medium=member_android&rcm=ACoAAERCZ2IBtxCEZCoa94TkszT0msv6Eugm0B4',
  },
  {
    icon: '🏆', date: '2026', title: 'CODECRAFT 2.0 – DEVHACKS 2026',
    desc: 'Shortlisted through an online technical interview in Round 1, qualifying our team for the main 24-hour offline hackathon at Atharva University, Mumbai.',
    linkedin: 'https://www.linkedin.com/posts/sayali-jadhav-b4263827b_hackathon-devhacks2026-federatedlearning-activity-7436946432055488512-Qc5a?utm_source=share&utm_medium=member_android&rcm=ACoAAERCZ2IBtxCEZCoa94TkszT0msv6Eugm0B4',
  },
];

export default function Events() {
  return (
    <section className="section" id="events">
      <div className="container">
        <div className="section-label">Events &amp; Hackathons</div>
        <h2 className="section-title centered about-title-animated">TechFests &amp; <span>Competitions</span></h2>
        <div className="events-grid">
          {EVENTS.map((ev, i) => (
            <div className={`event-card reveal${i % 3 === 1 ? ' delay-1' : i % 3 === 2 ? ' delay-2' : ''}`} key={ev.title}>
              <div className="event-icon">{ev.icon}</div>
              <div className="event-date">{ev.date}</div>
              <h4>{ev.title}</h4>
              <p>
                {ev.desc}
                <br />
                <a href={ev.linkedin} target="_blank" rel="noopener noreferrer" className="event-linkedin-link">
                  <i className="fab fa-linkedin" /> View on LinkedIn
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
