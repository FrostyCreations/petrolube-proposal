import React from 'react';
import { useEditor } from '../context/EditorContext';
import './Footer.css';

// Orange agency bar that closes every page
const Footer = () => {
  const { data } = useEditor();
  const agency = data.agency || {};

  return (
    <footer className="footer agency-band">
      <div className="container footer-inner">
        {agency.logoUrl && <img src={agency.logoUrl} alt={agency.name} className="agency-logo" />}
        <p className="copyright">© 2026 {agency.name || 'Big On Digital'}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
