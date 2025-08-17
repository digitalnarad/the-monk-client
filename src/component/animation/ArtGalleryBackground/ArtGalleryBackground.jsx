import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "../../theme-provider";
import { gsap } from "gsap";
import "./ArtGalleryBackground.css";

const ArtGalleryBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const [dims, setDims] = useState({ width: 1400, height: 900 });

  const prefersDark =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;
  const isDark = theme === "dark" || (theme === "system" && prefersDark);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate truly random movement in all directions
  const generateRandomMovement = (index) => {
    const seed = index * 7919 + 1234; // Better seed for more randomness
    const random = (n) => ((seed + n * 2147) * 16807) % 2147483647 / 2147483647;
    
    // Random direction - some up, some down, some left, some right
    const direction = random(1) * Math.PI * 2; // Full 360 degrees
    const distance = 15 + random(2) * 25; // 15-40px movement range
    
    const moveX = Math.cos(direction) * distance;
    const moveY = Math.sin(direction) * distance;
    
    return {
      x: moveX,
      y: moveY,
      duration: 6 + random(3) * 15, // 6-21 seconds
      delay: random(4) * 8, // 0-8 second delay
      rotation: random(5) * 720 - 360, // -360 to +360 degrees
      scaleVariation: 0.8 + random(6) * 0.6, // 0.8 to 1.4 scale
      opacityVariation: 0.3 + random(7) * 0.4 // 0.3 to 0.7 opacity range
    };
  };

  // ResizeObserver for responsive dimensions
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    let frame = 0;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          setDims({
            width: Math.max(600, Math.floor(cr.width)),
            height: Math.max(400, Math.floor(cr.height)),
          });
        });
      }
    });
    ro.observe(el);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  // GSAP diverse random animations for each dot
  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const animations = [];

    dotsRef.current.forEach((dot, index) => {
      if (!dot) return;

      const movement = generateRandomMovement(index);
      
      // Diverse movement animation - truly random directions
      const moveAnim = gsap.to(dot, {
        x: movement.x,
        y: movement.y,
        rotation: movement.rotation,
        duration: movement.duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: movement.delay,
      });

      // Random opacity pulse with individual ranges
      const opacityAnim = gsap.to(dot, {
        opacity: movement.opacityVariation,
        duration: 4 + (index % 8) * 0.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: (index % 5) * 0.3,
      });

      // Random scale breathing with individual variations
      const scaleAnim = gsap.to(dot, {
        scale: movement.scaleVariation,
        duration: 5 + (index % 6) * 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: (index % 4) * 0.5,
      });

      // Random rotation for some dots
      if (index % 3 === 0) {
        const rotateAnim = gsap.to(dot, {
          rotation: "+=360",
          duration: 20 + (index % 10) * 2,
          repeat: -1,
          ease: "none",
          delay: movement.delay * 0.5,
        });
        animations.push(rotateAnim);
      }

      animations.push(moveAnim, opacityAnim, scaleAnim);
    });

    // Gentle container breathing
    const containerAnim = gsap.to(containerRef.current.querySelector('svg'), {
      scale: 1.005,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    animations.push(containerAnim);

    return () => {
      animations.forEach(anim => anim.kill());
    };
  }, [mounted, dims]);

  // Generate dots data with better distribution
  const generateDotsData = () => {
    const dots = [];
    
    // Small dots - full coverage
    for (let i = 0; i < 30; i++) {
      const colors = isDark 
        ? ["#a855f7", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95"]
        : ["#7c3aed", "#9333ea", "#a855f7", "#6b21b6", "#581c87", "#4c1d95"];
      
      dots.push({
        id: `small-${i}`,
        cx: 8 + Math.random() * 84, // 8-92% - full width coverage
        cy: 8 + Math.random() * 84, // 8-92% - full height coverage
        r: 1.5 + (i % 3) * 0.5,
        fill: colors[i % colors.length],
        opacity: 0.2 + (i % 4) * 0.1,
        type: 'small'
      });
    }

    // Medium dots - good spread
    for (let i = 0; i < 20; i++) {
      const colors = isDark 
        ? ["#a855f7", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6"]
        : ["#7c3aed", "#9333ea", "#a855f7", "#6b21b6", "#581c87"];
      
      dots.push({
        id: `medium-${i}`,
        cx: 12 + Math.random() * 76, // 12-88% coverage
        cy: 12 + Math.random() * 76,
        r: 2.5 + (i % 3) * 0.8,
        fill: colors[i % colors.length],
        opacity: 0.3 + (i % 3) * 0.1,
        type: 'medium'
      });
    }

    // Large dots - strategic placement
    for (let i = 0; i < 12; i++) {
      const colors = isDark 
        ? ["#a855f7", "#8b5cf6", "#7c3aed", "#6d28d9"]
        : ["#7c3aed", "#9333ea", "#a855f7", "#6b21b6"];
      
      dots.push({
        id: `large-${i}`,
        cx: 15 + Math.random() * 70, // 15-85% coverage
        cy: 15 + Math.random() * 70,
        r: 4 + (i % 4),
        fill: colors[i % colors.length],
        opacity: 0.4 + (i % 2) * 0.1,
        type: 'large'
      });
    }

    // Feature dots - corners and edges
    const featurePositions = [
      { cx: 20 + Math.random() * 10, cy: 20 + Math.random() * 10 }, // Top-left area
      { cx: 70 + Math.random() * 10, cy: 20 + Math.random() * 10 }, // Top-right area  
      { cx: 20 + Math.random() * 10, cy: 70 + Math.random() * 10 }, // Bottom-left area
      { cx: 70 + Math.random() * 10, cy: 70 + Math.random() * 10 }, // Bottom-right area
      { cx: 45 + Math.random() * 10, cy: 15 + Math.random() * 10 }, // Top-center area
      { cx: 45 + Math.random() * 10, cy: 75 + Math.random() * 10 }  // Bottom-center area
    ];
    
    for (let i = 0; i < 6; i++) {
      const colors = isDark 
        ? ["#a855f7", "#8b5cf6", "#7c3aed"]
        : ["#7c3aed", "#9333ea", "#a855f7"];
      
      dots.push({
        id: `feature-${i}`,
        cx: featurePositions[i].cx,
        cy: featurePositions[i].cy,
        r: 6 + (i % 3) * 2,
        fill: colors[i % colors.length],
        opacity: 0.3 + (i % 2) * 0.1,
        type: 'feature'
      });
    }

    return dots;
  };

  const dotsData = generateDotsData();

  return (
    <div
      className="art-gallery-background"
      data-theme={isDark ? "dark" : "light"}
    >
      <div className="dots-container" ref={containerRef}>
        <svg
          className="dots-svg"
          viewBox={`0 0 ${dims.width} ${dims.height}`}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Colored glow filters for each color */}
            <filter id="purpleGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
              <feFlood floodColor="#a855f7" floodOpacity="0.6" result="color"/>
              <feComposite in="color" in2="blur" operator="in" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="violetGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
              <feFlood floodColor="#8b5cf6" floodOpacity="0.5" result="color"/>
              <feComposite in="color" in2="blur" operator="in" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="indigoGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
              <feFlood floodColor="#7c3aed" floodOpacity="0.4" result="color"/>
              <feComposite in="color" in2="blur" operator="in" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="deepPurpleGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur"/>
              <feFlood floodColor="#6d28d9" floodOpacity="0.5" result="color"/>
              <feComposite in="color" in2="blur" operator="in" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="darkPurpleGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur"/>
              <feFlood floodColor="#5b21b6" floodOpacity="0.4" result="color"/>
              <feComposite in="color" in2="blur" operator="in" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="subtleGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur"/>
              <feFlood floodColor="#4c1d95" floodOpacity="0.3" result="color"/>
              <feComposite in="color" in2="blur" operator="in" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Render all dots with color-matched glow filters */}
          {dotsData.map((dot, index) => {
            // Map colors to appropriate glow filters
            const getGlowFilter = (color) => {
              if (color.includes('#a855f7')) return 'url(#purpleGlow)';
              if (color.includes('#8b5cf6')) return 'url(#violetGlow)';
              if (color.includes('#7c3aed')) return 'url(#indigoGlow)';
              if (color.includes('#6d28d9')) return 'url(#deepPurpleGlow)';
              if (color.includes('#5b21b6')) return 'url(#darkPurpleGlow)';
              if (color.includes('#4c1d95')) return 'url(#subtleGlow)';
              if (color.includes('#9333ea')) return 'url(#violetGlow)';
              if (color.includes('#6b21b6')) return 'url(#deepPurpleGlow)';
              if (color.includes('#581c87')) return 'url(#darkPurpleGlow)';
              return 'url(#purpleGlow)'; // fallback
            };

            return (
              <circle
                key={dot.id}
                ref={(el) => (dotsRef.current[index] = el)}
                cx={`${dot.cx}%`}
                cy={`${dot.cy}%`}
                r={dot.r}
                fill={dot.fill}
                opacity={dot.opacity}
                filter={getGlowFilter(dot.fill)}
                className={`floating-dot ${dot.type}-dot`}
                style={{
                  transformOrigin: 'center',
                  transformBox: 'fill-box'
                }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default ArtGalleryBackground;
