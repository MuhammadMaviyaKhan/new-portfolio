import { useEffect, useRef } from 'react'

const stats = [
  { target: 3, suffix: '+', label: 'Years Exp.' },
  { target: 50, suffix: '+', label: 'Projects' },
  { target: 30, suffix: '+', label: 'Clients' },
]

function Counter({ target, suffix }) {
  const el = useRef(null)

  useEffect(() => {
    const node = el.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const duration = 1200
        const steps = 30
        const increment = target / steps
        let current = 0
        let step = 0
        const timer = setInterval(() => {
          step++
          current = Math.min(current + increment, target)
          node.textContent = Math.round(current) + suffix
          if (step >= steps) {
            node.textContent = target + suffix
            clearInterval(timer)
          }
        }, duration / steps)
        observer.unobserve(node)
      }
    }, { threshold: 0.5 })

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, suffix])

  return <div className="num" ref={el}>0</div>
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content hero-entrance">
            <div className="hero-badge"><span className="dot" /> Available for work</div>
            <h1>Hi, I&apos;m <span className="highlight">Maviya Hussaini</span></h1>
            <p className="hero-subtitle">Frontend Developer crafting performant, accessible, and visually stunning web experiences for global brands and startups.</p>
            <p className="hero-headline">React.js &bull; Tailwind CSS &bull; UI/UX</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary"><i className="fa-regular fa-paper-plane" /> Hire Me</a>
              <a href="/Resume/Resume - Software Engineer (1).pdf" className="btn btn-outline" download><i className="fa-regular fa-file-lines" /> Resume</a>
            </div>
          </div>
          <div className="hero-image hero-image-entrance">
            <div className="hero-image-wrapper">
              <img src="/image/Untitled%20design%20(6).jpg" alt="Maviya Hussaini" />
            </div>
            <div className="hero-stats glass">
              {stats.map(s => (
                <div className="hero-stat" key={s.label}>
                  <Counter target={s.target} suffix={s.suffix} />
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
