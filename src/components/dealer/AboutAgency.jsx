import { memo } from 'react';
import OptimizedImage from '../OptimizedImage';
import './dealer.css';

const AboutAgency = ({ data }) => (
  <section className="agency-band about-agency">
    <div className="container">
      <h2 className="about-agency-title">{data.title}</h2>
      <div className="about-agency-text">
        {data.paragraphs.map((text, i) => <p key={i}>{text}</p>)}
      </div>

      <div className="team-grid-dealer">
        {data.team.map((member) => (
          <article key={member.name} className="team-card">
            <div className="team-card-photo">
              <OptimizedImage src={member.image} alt={member.name} className="team-card-img" />
            </div>
            <div className="team-card-body">
              <h3 className="team-card-name">{member.name}</h3>
              <p className="team-card-title">{member.title}</p>
              <p className="team-card-subtitle">{member.subtitle}</p>
              <p className="team-card-desc">{member.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default memo(AboutAgency);
