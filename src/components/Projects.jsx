const projects = [
  {
    img: '/image/rentcar.png',
    alt: 'RENT CAR screenshot',
    link: 'https://muhammadmaviyakhan.github.io/RENT_CAR_WEBSITE/',
    github: 'https://github.com/MuhammadMaviyaKhan/RENT_CAR_WEBSITE.git',
    tags: ['React', 'Tailwind', 'Stripe'],
    title: 'RENT CAR',
    desc: 'A full-featured online store with cart, checkout, and payment integration.',
  },
  {
    img: '/image/celender.png',
    alt: 'Islamic Calendar screenshot',
    link: 'https://islamic-celender-72.netlify.app/',
    github: '#',
    tags: ['React', 'D3.js', 'API'],
    title: 'Islamic Calendar',
    desc: 'Islamic date converter and prayer time tracker with accurate astronomical calculations.',
  },
  {
    img: '/image/weather.png',
    alt: 'Weather App screenshot',
    link: 'https://weather-app-313.netlify.app/',
    github: '#',
    tags: ['JavaScript', 'API', 'CSS'],
    title: 'Weather App',
    desc: 'Beautiful, responsive weather application with 7-day forecasts and location-based data.',
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Each project reflects a commitment to quality, performance, and clean design.</p>
          <div className="glow-line" style={{ margin: '12px auto 0' }} />
        </div>
        <div className="projects-grid stagger-children">
          {projects.map(p => (
            <div className="project-card glass" key={p.title}>
              <div className="project-thumb">
                <img src={p.img} alt={p.alt} loading="lazy" />
                <div className="overlay">
                  <a href={p.link} aria-label="View project" target="_blank" rel="noopener"><i className="fa-solid fa-link" /></a>
                  <a href={p.github} aria-label="View source code" target="_blank" rel="noopener"><i className="fa-brands fa-github" /></a>
                </div>
              </div>
              <div className="project-info">
                <div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
