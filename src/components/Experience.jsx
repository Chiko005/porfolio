import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

const experiences = [
  {
    date: 'Jun 2025 — Present',
    role: 'Software Engineer',
    company: 'Tech Corp Inc.',
    description:
      'Developing scalable microservices and leading frontend architecture decisions. Improved application performance by 40% through code optimization and caching strategies.',
    tags: ['React', 'Node.js', 'AWS', 'Microservices'],
  },
  {
    date: 'Jan 2024 — May 2025',
    role: 'Software Development Intern',
    company: 'StartupXYZ',
    description:
      'Built and shipped user-facing features for the core product. Collaborated with cross-functional teams to design and implement RESTful APIs.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Docker'],
  },
  {
    date: 'May 2023 — Dec 2023',
    role: 'Open Source Contributor',
    company: 'Various Projects',
    description:
      'Contributed to multiple open-source projects, focusing on developer tooling and documentation improvements. Authored and maintained community packages.',
    tags: ['Open Source', 'Git', 'CI/CD', 'Documentation'],
  },
];

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section className="experience section" id="experience" ref={sectionRef}>
      <div className="container">
        <p className="section-label reveal">Career Path</p>
        <h2 className="section-title reveal delay-1">Experience</h2>
        <p className="section-subtitle reveal delay-2">
          Professional milestones and contributions that have shaped my growth as an engineer.
        </p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`experience-item reveal delay-${index + 2}`}>
              <span className="experience-date">{exp.date}</span>
              <h3>{exp.role}</h3>
              <span className="experience-company">{exp.company}</span>
              <p className="experience-desc">{exp.description}</p>
              <div className="experience-tags">
                {exp.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
