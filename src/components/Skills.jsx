import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    description: 'Core programming languages I build with',
    icon: 'code',
    skills: [
      { name: 'C / C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    ],
  },
  {
    title: 'Frameworks',
    description: 'Frameworks and libraries in my toolkit',
    icon: 'layers',
    skills: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Tools and technologies in my workflow',
    icon: 'terminal',
    skills: [
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'Maven', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
    ],
  },
];

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

const iconMap = {
  code: <CodeIcon />,
  layers: <LayersIcon />,
  terminal: <TerminalIcon />,
};

function SkillBox({ name, logo }) {
  return (
    <div className="skill-box">
      <img className="skill-logo" src={logo} alt={name} loading="lazy" />
      <span className="skill-box-name">{name}</span>
      <div className="skill-box-inner"></div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <p className="section-label reveal">What I Work With</p>
        <h2 className="section-title reveal delay-1">Skills & Expertise</h2>
        <p className="section-subtitle reveal delay-2">
          A curated set of languages, frameworks, and tools I use to bring ideas to life.
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat, catIdx) => (
            <div key={cat.title} className={`skill-category reveal delay-${catIdx + 3}`}>
              <div className="skill-category-icon">{iconMap[cat.icon]}</div>
              <h3>{cat.title}</h3>
              <p className="skill-category-desc">{cat.description}</p>
              <div className="skill-boxes-grid">
                {cat.skills.map((skill) => (
                  <SkillBox key={skill.name} name={skill.name} logo={skill.logo} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
