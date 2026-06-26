const experience = [
  { date: '2024 \u2014 Present', tag: 'Freelance', title: 'Senior Frontend Developer', desc: 'Leading frontend architecture for international clients. Building scalable React applications with Tailwind CSS and delivering pixel-perfect responsive designs.' },
  { date: '2022 \u2014 2024', tag: 'TechNest Agency', title: 'Frontend Developer', desc: 'Developed and maintained 15+ client websites and web apps. Reduced bounce rates by 30% through performance optimization and improved accessibility.' },
  { date: '2021 \u2014 2022', tag: 'WebStudio', title: 'Junior Frontend Developer', desc: 'Built responsive landing pages, email templates, and contributed to a SaaS dashboard rebuild using React and modern CSS methodologies.' },
]

const education = [
  { date: '2020 \u2014 2024', tag: 'University', title: 'B.Sc. in Computer Science', desc: 'Focused on software engineering, web technologies, and human-computer interaction. Graduated with honors.' },
  { date: '2018 \u2014 2020', tag: 'College', title: 'Govt Degree College Karoondi', desc: 'Science major with distinction. Participated in coding competitions and tech workshops.' },
  { date: '2024', tag: 'Certification', title: 'React Advanced Patterns', desc: 'Advanced React patterns, state management, performance optimization, and testing best practices.' },
]

function ResumeColumn({ icon, title, items }) {
  return (
    <div className="resume-col">
      <h3><i className={icon} /> {title}</h3>
      {items.map((item, i) => (
        <div className="resume-item glass" key={i}>
          <div className="meta"><span className="date">{item.date}</span><span className="tag">{item.tag}</span></div>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default function Experience() {
  return (
    <section className="section" id="resume">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Career</span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>A track record of delivering impact and continuous learning.</p>
          <div className="glow-line" style={{ margin: '12px auto 0' }} />
        </div>
        <div className="resume-grid">
          <div className="reveal-left">
            <ResumeColumn icon="fa-solid fa-briefcase" title="Experience" items={experience} />
          </div>
          <div className="reveal-right">
            <ResumeColumn icon="fa-solid fa-graduation-cap" title="Education" items={education} />
          </div>
        </div>
      </div>
    </section>
  )
}
