export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal-left">
            <img src="/image/Untitled%20design%20(6).jpg" alt="About Maviya Hussaini" />
          </div>
          <div className="about-text reveal-right">
            <span className="section-label">About Me</span>
            <h3>Passionate Frontend Developer dedicated to pixel-perfect experiences.</h3>
            <p>I specialize in building modern, responsive, and high-performance web applications using React.js, Tailwind CSS, and JavaScript. With a keen eye for design and a deep understanding of user experience, I transform complex ideas into intuitive, accessible digital products.</p>
            <p>From startups to enterprise clients, I bring a detail-oriented approach, clean code practices, and a commitment to delivering on time.</p>
            <div className="about-info-grid">
              <div className="about-info-item"><span className="lbl">Name:</span><span className="val">Maviya Hussaini</span></div>
              <div className="about-info-item"><span className="lbl">Email:</span><span className="val">maviya.khan2008@gmail.com</span></div>
              <div className="about-info-item"><span className="lbl">Location:</span><span className="val">Remote</span></div>
              <div className="about-info-item"><span className="lbl">Availability:</span><span className="val">Freelance / Full-time</span></div>
            </div>
            <a href="/Resume/Resume - Software Engineer (1).pdf" className="btn btn-primary" download><i className="fa-regular fa-file-lines" /> Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}
