export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Hussaini.</h3>
            <p>Crafting modern digital experiences with clean code and thoughtful design. Based remotely, available worldwide.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {['About', 'Skills', 'Projects', 'Resume', 'Contact'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              {['Web Development', 'UI/UX Design', 'Performance Audit', 'Consulting'].map(s => (
                <li key={s}><a href="#projects">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/MuhammadMaviyaKhan" aria-label="GitHub" target="_blank" rel="noopener"><i className="fa-brands fa-github" /></a>
              <a href="https://www.linkedin.com/in/maviya-hussaini-yousafzai-846a04389" aria-label="LinkedIn" target="_blank" rel="noopener"><i className="fa-brands fa-linkedin-in" /></a>
              <a href="https://www.instagram.com/m__k._yousafzai/" aria-label="Instagram" target="_blank" rel="noopener"><i className="fa-brands fa-instagram" /></a>
              <a href="mailto:maviya.khan2008@gmail.com" aria-label="Email"><i className="fa-regular fa-envelope" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Maviya Hussaini. All rights reserved.</span>
          <span>Designed &amp; built with <i className="fa-solid fa-heart" style={{ color: 'var(--primary)' }} /></span>
        </div>
      </div>
    </footer>
  )
}
