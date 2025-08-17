import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../theme-provider';
import './AuthBackground.css';

const AuthBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = backgroundRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div className="auth-background-extraordinary" ref={backgroundRef}>
      {/* Dynamic Background Images */}
      <div className="auth-bg-images">
        <div 
          className={`auth-bg-image auth-bg-primary ${isDark ? 'dark' : 'light'}`}
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg)`,
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        />
        <div 
          className={`auth-bg-image auth-bg-secondary ${isDark ? 'dark' : 'light'}`}
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/13807426/pexels-photo-13807426.jpeg)`,
            transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`,
          }}
        />
        <div 
          className={`auth-bg-image auth-bg-texture ${isDark ? 'dark' : 'light'}`}
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1151300/pexels-photo-1151300.jpeg)`,
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 25}px)`,
          }}
        />
      </div>

      {/* Liquid Morphing Gradients */}
      <div className="auth-liquid-gradients">
        <div className={`liquid-blob liquid-blob-1 ${isDark ? 'dark' : 'light'}`} />
        <div className={`liquid-blob liquid-blob-2 ${isDark ? 'dark' : 'light'}`} />
        <div className={`liquid-blob liquid-blob-3 ${isDark ? 'dark' : 'light'}`} />
      </div>

      {/* SVG Pattern Overlay */}
      <div className="auth-svg-patterns">
        <svg className="pattern-svg" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={isDark ? '#8B5CF6' : '#A855F7'} stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? '#8B5CF6' : '#A855F7'} stopOpacity="0.2" />
              <stop offset="50%" stopColor={isDark ? '#EC4899' : '#F472B6'} stopOpacity="0.1" />
              <stop offset="100%" stopColor={isDark ? '#3B82F6' : '#60A5FA'} stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Animated Circles */}
          <circle className="svg-circle svg-circle-1" cx="200" cy="150" r="80" fill="url(#circleGradient)" />
          <circle className="svg-circle svg-circle-2" cx="800" cy="300" r="120" fill="url(#circleGradient)" />
          <circle className="svg-circle svg-circle-3" cx="400" cy="600" r="60" fill="url(#circleGradient)" />
          
          {/* Animated Lines */}
          <path className="svg-line svg-line-1" d="M0,200 Q300,100 600,200 T1200,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path className="svg-line svg-line-2" d="M0,400 Q400,300 800,400 T1200,400" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
          <path className="svg-line svg-line-3" d="M0,600 Q200,500 400,600 T800,600" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Advanced Particle System */}
      <div className="auth-particle-system">
        {Array.from({ length: 50 }, (_, i) => (
          <div 
            key={i}
            className={`advanced-particle particle-${i % 5} ${isDark ? 'dark' : 'light'}`}
            style={{
              '--delay': `${i * 0.2}s`,
              '--duration': `${12 + (i % 8)}s`,
              '--size': `${2 + (i % 4)}px`,
              '--x-pos': `${(i * 7) % 100}%`,
              '--y-pos': `${(i * 11) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="auth-geometric-float">
        <div className={`geo-shape geo-triangle ${isDark ? 'dark' : 'light'}`} />
        <div className={`geo-shape geo-square ${isDark ? 'dark' : 'light'}`} />
        <div className={`geo-shape geo-circle ${isDark ? 'dark' : 'light'}`} />
        <div className={`geo-shape geo-hexagon ${isDark ? 'dark' : 'light'}`} />
      </div>

      {/* Interactive Light Rays */}
      <div className="auth-light-rays">
        <div 
          className={`light-ray ray-1 ${isDark ? 'dark' : 'light'}`}
          style={{
            transform: `rotate(${mousePosition.x * 360}deg) translateY(${-mousePosition.y * 50}px)`,
          }}
        />
        <div 
          className={`light-ray ray-2 ${isDark ? 'dark' : 'light'}`}
          style={{
            transform: `rotate(${mousePosition.y * 360}deg) translateX(${mousePosition.x * 30}px)`,
          }}
        />
        <div 
          className={`light-ray ray-3 ${isDark ? 'dark' : 'light'}`}
          style={{
            transform: `rotate(${(mousePosition.x + mousePosition.y) * 180}deg)`,
          }}
        />
      </div>

      {/* Pulsating Energy Rings */}
      <div className="auth-energy-rings">
        <div className={`energy-ring ring-1 ${isDark ? 'dark' : 'light'}`} />
        <div className={`energy-ring ring-2 ${isDark ? 'dark' : 'light'}`} />
        <div className={`energy-ring ring-3 ${isDark ? 'dark' : 'light'}`} />
      </div>

      {/* Flowing Ribbons */}
      <div className="auth-ribbons">
        <div className={`ribbon ribbon-1 ${isDark ? 'dark' : 'light'}`} />
        <div className={`ribbon ribbon-2 ${isDark ? 'dark' : 'light'}`} />
        <div className={`ribbon ribbon-3 ${isDark ? 'dark' : 'light'}`} />
      </div>

      {/* Ambient Glow Effect */}
      <div className={`auth-ambient-glow ${isDark ? 'dark' : 'light'}`} />
    </div>
  );
};

export default AuthBackground;
