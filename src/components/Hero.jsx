import { useScrollReveal } from '../hooks/useScrollReveal';
import './Hero.css';

export default function Hero() {
  const sectionRef = useScrollReveal();

  const scrollToSkills = (e) => {
    e.preventDefault();
    document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section" id="home" ref={sectionRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting hero-grow grow-delay-1">Hello, I'm</p>
            <h1 className="hero-name hero-grow grow-delay-2"><span className="logo1-text">Ashish Dash</span></h1>
            <p className="hero-role hero-grow grow-delay-3">Full Stack Developer</p>
            <p className="hero-mission hero-grow grow-delay-4">
              Crafting elegant solutions through clean code and thoughtful design.
              Passionate about building full-stack applications that make a meaningful 
              impact using modern web technologies.
            </p>
            <div className="hero-buttons hero-grow grow-delay-5">
              <a href="/CVF.pdf" target="_blank" rel="noopener noreferrer" className="hero-cta hero-cta-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                View Resume
              </a>
              <a href="/CVF.pdf" download className="hero-cta hero-cta-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
            <a href="#skills" className="hero-cta-explore hero-grow grow-delay-6" onClick={scrollToSkills}>
              Explore My Skills
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
          </div>
          <div className="hero-image-wrapper hero-image-grow">
            <img src="/profile.png" alt="Ashish Dash" />
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator hero-scroll-grow">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
