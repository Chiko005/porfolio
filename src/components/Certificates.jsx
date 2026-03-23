import { useScrollReveal } from '../hooks/useScrollReveal';
import './Certificates.css';

const certificates = [
  {
    title: 'MERN Stack Development',
    issuer: 'W3Grads',
    date: "Aug' 2025",
    link: 'https://theangaarbatch.in/dashboard/event/592/certificate',
  },
  {
    title: 'Introduction to Hardware and Operating Systems',
    issuer: 'Coursera',
    date: "Sep' 2024",
    link: 'https://coursera.org/verify/DES8IQK9WAMQ',
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Coursera',
    date: "Sep' 2024",
    link: 'https://coursera.org/verify/N96R0V1DMIA2',
  },
  {
    title: 'Fundamentals on REDD+ E-Academy',
    issuer: 'United Nations REDD',
    date: "Dec' 2023",
    link: 'https://shorturl.at/oVXj0',
  },
];

function CertificateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Certificates() {
  const sectionRef = useScrollReveal();

  return (
    <section className="certificates section" id="certificates" ref={sectionRef}>
      <div className="container">
        <p className="section-label reveal">Achievements</p>
        <h2 className="section-title reveal delay-1">Certificates</h2>
        <p className="section-subtitle reveal delay-2">
          Professional certifications and courses that validate my skills and continuous learning.
        </p>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`certificate-card reveal delay-${index + 3}`}
            >
              <div className="certificate-icon">
                <CertificateIcon />
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <span className="certificate-date">{cert.date}</span>
              </div>
              <div className="certificate-link-icon">
                <ExternalLinkIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
