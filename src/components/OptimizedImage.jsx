import React, { useState, useEffect } from 'react';
import './OptimizedImage.css';

const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  return (
    <div className={`image-container ${loaded ? 'loaded' : 'loading'} ${className || ''}`}>
      {!loaded && !error && <div className="image-skeleton"></div>}
      <img
        src={src}
        alt={alt}
        className={`optimized-image ${loaded ? 'visible' : 'hidden'}`}
        loading="lazy"
        {...props}
      />
      {error && <div className="image-error">Image not found</div>}
    </div>
  );
};

export default OptimizedImage;
