import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Moving between the proposal and the quotes page should start at the top,
// otherwise the new page opens at the previous page's scroll position.
// Anchor links keep working because only a path change resets the scroll.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Stop the browser putting the old page back where it was on back/forward
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // The page scrolls smoothly by CSS, which would animate this jump, so the
    // behaviour is switched off for the reset and restored straight after.
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    window.scrollTo(0, 0);
    html.scrollTop = 0;
    document.body.scrollTop = 0;

    html.style.scrollBehavior = previous;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
