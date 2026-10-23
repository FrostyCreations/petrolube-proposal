import { memo } from 'react';
import { Check } from 'lucide-react';
import '../dealer/dealer.css';

// Section eyebrow with the short green rule, as used across the proposal
const Eyebrow = ({ children, light }) => (
  <p className={`pl-eyebrow${light ? ' light' : ''}`}>{children}</p>
);

const SectionHead = ({ data, light }) => (
  <div className="pl-head">
    <Eyebrow light={light}>{data.eyebrow}</Eyebrow>
    <h2 className="pl-title">{data.title}</h2>
    {data.intro && <p className="pl-intro">{data.intro}</p>}
  </div>
);

// Full-bleed fuel photo with the client name
export const PlHero = memo(({ data }) => (
  <section className="pl-hero">
    <img src={data.heroBgUrl} alt="" className="pl-hero-img" />
    <div className="pl-hero-overlay" />
    <div className="container pl-hero-content">
      <Eyebrow light>{data.eyebrow}</Eyebrow>
      <h1 className="pl-hero-title">{data.title}</h1>
    </div>
  </section>
));

export const Problem = memo(({ data }) => (
  <section className="pl-section">
    <div className="container">
      <SectionHead data={data} />
      <div className="pl-stats">
        {data.stats.map(stat => (
          <div key={stat.label} className="pl-stat">
            <span className="pl-stat-value">{stat.value}</span>
            <span className="pl-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="pl-cards three">
        {data.issues.map((issue, i) => (
          <article key={issue.title} className="pl-card">
            <span className="pl-card-label">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="pl-card-title">{issue.title}</h3>
            <p className="pl-card-text">{issue.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
));

export const Solution = memo(({ data }) => (
  <section className="pl-section">
    <div className="container">
      <SectionHead data={data} />
      <figure className="pl-browser">
        <div className="pl-browser-bar"><span /><span /><span /></div>
        <img src={data.concept.imageUrl} alt={data.concept.caption} className="pl-browser-img" />
        <figcaption className="pl-browser-caption">{data.concept.caption}</figcaption>
      </figure>
      <div className="pl-cards three">
        {data.features.map(feature => (
          <article key={feature.title} className="pl-card">
            <span className="pl-card-label word">{feature.label}</span>
            <h3 className="pl-card-title">{feature.title}</h3>
            <p className="pl-card-text">{feature.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
));

// Website build and monthly services shown side by side, with the optional visual guide below
export const Investment = memo(({ data }) => (
  <section className="pl-section alt">
    <div className="container">
      <SectionHead data={data} />
      <div className="pl-invest">
        <article className="pl-invest-build">
          <span className="pl-invest-label">{data.build.label}</span>
          <h3 className="pl-invest-name">{data.build.name}</h3>
          <p className="pl-invest-price">{data.build.price}<small>{data.build.period}</small></p>
          <ul className="pl-invest-list">
            {data.build.items.map(item => (
              <li key={item}><Check size={16} />{item}</li>
            ))}
          </ul>
          <p className="pl-invest-note">{data.build.note}</p>
        </article>
        <div className="pl-invest-monthly">
          <span className="pl-invest-label dark">Monthly services</span>
          {data.monthly.map(item => (
            <article key={item.name} className={`pl-invest-row${item.tag ? ' boxed' : ''}`}>
              <div>
                <h3 className="pl-invest-row-name">{item.name}{item.tag && <span className="pl-tag">{item.tag}</span>}</h3>
                <p className="pl-invest-row-text">{item.text}</p>
              </div>
              <p className="pl-invest-row-price">{item.price}<small>{item.period}</small></p>
            </article>
          ))}
          <article className="pl-invest-row boxed">
            <div>
              <h3 className="pl-invest-row-name">{data.optional.name}<span className="pl-tag">{data.optional.tag}</span></h3>
              <p className="pl-invest-row-text">{data.optional.text}</p>
            </div>
            <p className="pl-invest-row-price">{data.optional.price}<small>{data.optional.period}</small></p>
          </article>
        </div>
      </div>
    </div>
  </section>
));

export const NextSteps = memo(({ data }) => (
  <section className="pl-section dark">
    <div className="container">
      <SectionHead data={data} light />
      <div className="pl-cards three">
        {data.steps.map(step => (
          <article key={step.title} className="pl-card dark">
            <span className="pl-card-label caps">{step.when}</span>
            <h3 className="pl-card-title">{step.title}</h3>
            <p className="pl-card-text">{step.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
));

// PetroLube icon with the name and tagline, for the navy band before the agency section
export const PlLockup = memo(({ client }) => (
  <div className="pl-lockup">
    <span className="pl-lockup-icon"><img src={client.iconUrl} alt="" /></span>
    <span className="pl-lockup-text">
      <strong>{client.name}</strong>
      <small>{client.tagline}</small>
    </span>
  </div>
));
