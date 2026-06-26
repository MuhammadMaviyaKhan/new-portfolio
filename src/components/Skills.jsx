import { useEffect, useRef } from 'react'

const skills = [
  { icon: 'fa-brands fa-html5', name: 'HTML5', width: 95 },
  { icon: 'fa-brands fa-css3-alt', name: 'CSS3', width: 92 },
  { icon: 'fa-brands fa-js', name: 'JavaScript', width: 90 },
  { icon: 'fa-brands fa-react', name: 'React.js', width: 88 },
  { icon: 'fa-brands fa-tailwind', name: 'Tailwind CSS', width: 90 },
  { icon: 'fa-solid fa-code-fork', name: 'Git & GitHub', width: 85 },
  { icon: 'fa-solid fa-palette', name: 'Figma', width: 80 },
  { icon: 'fa-solid fa-mobile-screen-button', name: 'Responsive Design', width: 95 },
]

function SkillBar({ width }) {
  const bar = useRef(null)

  useEffect(() => {
    const el = bar.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.width = width + '%'
        observer.unobserve(el)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [width])

  return <div className="skill-bar"><div className="skill-bar-fill" ref={bar} style={{ width: 0 }} /></div>
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Core tools I use daily to build world-class web applications.</p>
          <div className="glow-line" style={{ margin: '12px auto 0' }} />
        </div>
        <div className="skills-grid stagger-children">
          {skills.map(s => (
            <div className="skill-card glass" key={s.name}>
              <div className="skill-icon"><i className={s.icon} /></div>
              <h4>{s.name}</h4>
              <SkillBar width={s.width} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
