import { memo } from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Globe, ArrowUpRight } from 'lucide-react';
import './dealer.css';

// Lucide has no TikTok mark, so it is drawn here at the same 24px grid
const TikTok = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1-2.59-2.59 2.59 2.59 0 0 1 3.33-2.48V9.68a5.68 5.68 0 0 0-.74-.05A5.68 5.68 0 0 0 4.18 15.3 5.68 5.68 0 0 0 9.86 21a5.68 5.68 0 0 0 5.68-5.68V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.24-1.48z" />
  </svg>
);

const PLATFORM_ICONS = {
  Facebook: Facebook,
  Instagram: Instagram,
  TikTok: TikTok,
  LinkedIn: Linkedin,
  YouTube: Youtube,
  Website: Globe
};

const ClientShowcase = ({ data }) => (
  <section className="dealer-section clients-section">
    <div className="container">
      <h2 className="dealer-title">{data.title}</h2>
      <div className="client-grid">
        {data.clients.map((client) => {
          const Icon = PLATFORM_ICONS[client.platform];
          // A card only links out once the client's address is filled in
          const Card = client.url ? 'a' : 'div';
          const linkProps = client.url ? { href: client.url, target: '_blank', rel: 'noopener noreferrer' } : {};
          return (
            <Card
              key={client.name}
              {...linkProps}
              className={`client-card${client.url ? '' : ' static'}`}
            >
              <div className="client-card-logo">
                {client.logoUrl
                  ? <img src={client.logoUrl} alt={client.name} loading="lazy" />
                  : <span className="client-card-wordmark">{client.name}</span>}
              </div>
              <div className="client-card-body">
                <span className="client-card-name">{client.name}</span>
                <span className="client-card-tagline">{client.tagline}</span>
              </div>
              <div className="client-card-bar">
                <span className="client-card-platform">
                  {Icon && <Icon size={18} />}
                  {client.platform}
                </span>
                {client.url && <ArrowUpRight size={18} />}
              </div>
            </Card>
          );
        })}
      </div>

    </div>
  </section>
);

export default memo(ClientShowcase);
