import { useState } from 'react'

const details = [
  { icon: 'fa-regular fa-envelope', label: 'Email', value: 'maviya.khan2008@gmail.com' },
  { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Remote \u2014 Worldwide' },
  { icon: 'fa-regular fa-clock', label: 'Availability', value: 'Mon \u2014 Fri, 9 AM \u2014 6 PM EST' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        e.target.reset()
      }, 2500)
    }, 1500)
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Have a project in mind? Reach out and let&apos;s make something great.</p>
          <div className="glow-line" style={{ margin: '12px auto 0' }} />
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal-left">
            <h3>Contact Information</h3>
            <p>I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!</p>
            <div className="contact-details">
              {details.map(d => (
                <div className="contact-detail-item" key={d.label}>
                  <div className="icon"><i className={d.icon} /></div>
                  <div>
                    <div className="detail-label">{d.label}</div>
                    <div className="detail-value">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="contact-form glass reveal-right" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project Inquiry" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status !== 'idle'}>
              {status === 'idle' && <><i className="fa-regular fa-paper-plane" /> Send Message</>}
              {status === 'sending' && <><i className="fa-solid fa-spinner fa-spin" /> Sending...</>}
              {status === 'sent' && <><i className="fa-regular fa-circle-check" /> Message Sent!</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
