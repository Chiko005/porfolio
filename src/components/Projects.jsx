import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'Water Wastage Monitoring (IoT)',
    description:
      'Engineered a real-time water usage monitoring platform featuring IoT data ingestion and Chart.js dashboards. Implemented advanced anomaly detection and SMS alert systems to proactively indicate potential wastage and leaks, deployed on AWS.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'AWS'],
    github: 'https://github.com/Chiko005/Flames2',
    date: "Aug' 2025",
  },
  {
    number: '02',
    title: 'Survey & Feedback Portal',
    description:
      'Designed and programmed an anonymous web application for user feedback and surveys, emphasising user privacy and secure data storage. Enforced anonymity with bot restrictions and security features including hashing and XSS mitigation.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/Chiko005/Survey-portal',
    date: "Apr' 2025",
  },
  {
    number: '03',
    title: 'CPU Scheduling Simulator',
    description:
      'Developed an interactive CPU Scheduling Simulator to visually demonstrate and compare OS process allocation strategies. Features Round Robin, FCFS, SJN, SRTF algorithms with Gantt chart visualisation and performance analysis.',
    tech: ['Java', 'Java Swing', 'AWT', 'Collections'],
    github: 'https://github.com/Chiko005/CPU-Schdeduling',
    date: "Apr' 2025",
  },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="projects" ref={sectionRef}>
      <div className="container">
        <p className="section-label reveal">Selected Work</p>
        <h2 className="section-title reveal delay-1">Projects</h2>
        <p className="section-subtitle reveal delay-2">
          A selection of projects that showcase my problem-solving abilities and technical expertise.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.number} className={`project-card reveal delay-${index + 2}`}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-date"><CalendarIcon /> {project.date}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
