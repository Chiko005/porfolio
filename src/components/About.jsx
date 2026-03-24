import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

function PuzzleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
    </svg>
  );
}

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    institution: 'Lovely Professional University, Punjab',
    period: "Aug' 2023 - Present",
    status: 'Pursuing',
  },
  {
    degree: 'Intermediate',
    field: 'Science Stream',
    institution: 'Christ Higher Secondary School, Cuttack, Odisha',
    period: "May' 2022 – May' 2023",
    status: 'Completed',
  },
  {
    degree: 'Matriculation',
    field: 'General Studies',
    institution: 'S.S.V.M, Cuttack, Odisha',
    period: "May' 2020 – May' 2021",
    status: 'Completed',
  },
];

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <p className="section-label reveal">Competitive Programming</p>
        <h2 className="section-title reveal delay-1">About Me</h2>
        <p className="section-subtitle reveal delay-2">
          Beyond building products, I sharpen my problem-solving skills through competitive programming.
        </p>

        <div className="about-content">
          {/* LeetCode Stats Card */}
          <div className="about-card reveal delay-3">
            <div className="about-card-header">
              <div className="about-card-icon"><PuzzleIcon /></div>
              <h3>Problem Solving Progress</h3>
            </div>

            <div className="lc-stats-grid">
              <div className="lc-stat">
                <div className="lc-stat-value">500+</div>
                <div className="lc-stat-label">Solved</div>
              </div>
              <div className="lc-stat">
                <div className="lc-stat-value">Top 10%</div>
                <div className="lc-stat-label">Global Rank</div>
              </div>
            </div>

            <div className="lc-difficulty">
              <div className="lc-difficulty-item">
                <span className="lc-difficulty-label">Easy</span>
                <div className="lc-difficulty-bar-wrapper">
                  <div className="lc-difficulty-bar easy" style={{ '--fill-width': '95%' }}></div>
                </div>
                <span className="lc-difficulty-count">170</span>
              </div>
              <div className="lc-difficulty-item">
                <span className="lc-difficulty-label">Medium</span>
                <div className="lc-difficulty-bar-wrapper">
                  <div className="lc-difficulty-bar medium" style={{ '--fill-width': '72%' }}></div>
                </div>
                <span className="lc-difficulty-count">255</span>
              </div>
              <div className="lc-difficulty-item">
                <span className="lc-difficulty-label">Hard</span>
                <div className="lc-difficulty-bar-wrapper">
                  <div className="lc-difficulty-bar hard" style={{ '--fill-width': '38%' }}></div>
                </div>
                <span className="lc-difficulty-count">75</span>
              </div>
            </div>
          </div>

          {/* Contest Rating Card */}
          <div className="about-card reveal delay-4">
            <div className="about-card-header">
              <div className="about-card-icon"><TrophyIcon /></div>
              <h3>Contest Performance</h3>
            </div>

            <div className="contest-rating-display">
              <div className="contest-rating-value">1847</div>
              <div className="contest-rating-label">Contest Rating</div>
            </div>

            <div className="contest-stats">
              <div className="contest-stat">
                <div className="contest-stat-value">12</div>
                <div className="contest-stat-label">Contests</div>
              </div>
              <div className="contest-stat">
                <div className="contest-stat-value">Top 5%</div>
                <div className="contest-stat-label">Best Rank</div>
              </div>
              <div className="contest-stat">
                <div className="contest-stat-value">187</div>
                <div className="contest-stat-label">Global Rank</div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <div className="education-header reveal delay-5">
            <div className="about-card-icon"><GraduationIcon /></div>
            <h3>Education</h3>
          </div>

          <div className="education-timeline">
            {education.map((edu, index) => (
              <div key={edu.degree} className={`education-card reveal delay-${index + 5}`}>
                <div className="education-timeline-dot"></div>
                <div className="education-content">
                  <div className="education-top">
                    <h4>{edu.degree}</h4>
                    <span className={`education-status ${edu.status === 'Pursuing' ? 'pursuing' : ''}`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="education-field">{edu.field}</p>
                  <p className="education-institution">{edu.institution}</p>
                  <span className="education-period">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
