import { memo, useEffect, useRef } from 'react';
import './dealer.css';

// Orange agency strip that sits above everything on both the proposal and the quotes page.
// It publishes its own height as --banner-height so the fixed nav and hero stay clear of it
// (the text wraps to two lines on narrow screens).
const ProposalBanner = ({ banner }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const publishHeight = () => {
      document.documentElement.style.setProperty('--banner-height', `${el.offsetHeight}px`);
    };

    publishHeight();

    const observer = new ResizeObserver(publishHeight);
    observer.observe(el);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty('--banner-height');
    };
  }, [banner]);

  if (!banner) return null;

  return (
    <div className="agency-band proposal-banner" ref={ref}>
      <div className="container proposal-banner-inner">
        <p className="proposal-banner-text">{banner.text}</p>
        {banner.logoUrl
          ? <img src={banner.logoUrl} alt={banner.agency} className="agency-logo" />
          : <p className="proposal-banner-text"><strong>{banner.agency}</strong></p>}
      </div>
    </div>
  );
};

export default memo(ProposalBanner);
