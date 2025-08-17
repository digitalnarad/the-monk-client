import React from 'react';
import { useTheme } from '../../theme-provider';
import './BackgroundBlend.css';

const BackgroundBlend = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div className="background-blend">
      {/* Perfect Integration Layer */}
      <div className={`integration-layer ${isDark ? 'dark' : 'light'}`}>
        <div className="blend-gradient" />
        <div className="harmony-overlay" />
        <div className="depth-enhancement" />
      </div>
      
      {/* Subtle Enhancement Effects */}
      <div className={`enhancement-layer ${isDark ? 'dark' : 'light'}`}>
        <div className="color-harmony" />
        <div className="contrast-balance" />
        <div className="visual-flow" />
      </div>
    </div>
  );
};

export default BackgroundBlend;
