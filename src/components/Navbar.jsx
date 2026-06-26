import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => {
    setOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#hero" className="nav-logo">Hussaini.</a>
        <div className="nav-actions">
          <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={handleNavClick}>{label}</a>
              </li>
            ))}
          </ul>
          <button
            className={`hamburger${open ? ' active' : ''}`}
            id="hamburger"
            aria-label="Toggle navigation"
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
