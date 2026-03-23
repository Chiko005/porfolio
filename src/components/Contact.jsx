import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export default function Contact() {
  const sectionRef = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    e.target.reset();
  };

  return (
    <section className="section" id="contact" ref={sectionRef}>
      <div className="container">
        <p className="section-label reveal">Get In Touch</p>
        <h2 className="section-title reveal delay-1">Contact</h2>
        <p className="section-subtitle reveal delay-2">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>

        <div className="contact-content">
          <div className="contact-info reveal delay-3">
            <h3>Let's work together</h3>
            <p>
              I'm always open to discussing new opportunities, creative ideas, 
              or ways to contribute to your vision. Feel free to reach out through 
              any of these channels.
            </p>

            <div className="contact-links">
              <a href="mailto:dashash005@gmail.com" className="contact-link">
                <span className="contact-link-icon"><MailIcon /></span>
                dashash005@gmail.com
              </a>
              <a href="https://github.com/Chiko005" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-link-icon"><GithubIcon /></span>
                github.com/Chiko005
              </a>
              <a href="https://www.linkedin.com/in/ashish-dash-361ba12a1/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-link-icon"><LinkedinIcon /></span>
                linkedin.com/in/ashish-dash
              </a>
            </div>
          </div>

          <form className="contact-form reveal delay-4" onSubmit={handleSubmit} id="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" className="form-submit">
              Send Message <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
