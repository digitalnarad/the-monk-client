import React, { useEffect, useState } from "react";
import { useTheme } from "../../theme-provider";
import "./MinimalisticBackground.css";

const MinimalisticBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Generate randomized properties for art elements
  const mulberry32 = (a) => () => {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const generateRandomProps = (index, type) => {
    const seed = (index * 0x9e3779b1) ^ (type.charCodeAt(0) * 0x85ebca6b);
    const rand = mulberry32(seed);

    return {
      left: `${15 + rand() * 70}%`,
      top: `${15 + rand() * 70}%`,
      animationDelay: `${rand() * 8}s`,
      animationDuration: `${12 + rand() * 8}s`,
      size: 0.7 + rand() * 0.6,
      opacity: 0.1 + rand() * 0.15,
      floatDur: `${12 + rand() * 10}s`,
      swayDur: `${10 + rand() * 8}s`,
      sparkleDur: `${2 + rand() * 2.5}s`,
    };
  };

  // Generate art elements with randomized properties
  const leaves = Array.from({ length: 4 }, (_, i) => ({
    key: `leaf-${i}`,
    ...generateRandomProps(i, "leaf"),
  }));

  const squares = Array.from({ length: 4 }, (_, i) => ({
    key: `square-${i}`,
    ...generateRandomProps(i, "square"),
    rotationSpeed: 15 + ((i * 7) % 20), // 15-35s rotation
  }));

  const circles = Array.from({ length: 4 }, (_, i) => ({
    key: `circle-${i}`,
    ...generateRandomProps(i, "circle"),
    parallaxIntensity: 0.5 + (i % 3) * 0.3, // 0.5-1.1 parallax
  }));

  const stars = Array.from({ length: 4 }, (_, i) => ({
    key: `star-${i}`,
    ...generateRandomProps(i, "star"),
    sparkleDelay: i * 2.5, // Staggered sparkle timing
    starType: i % 2 === 0 ? "four-point" : "five-point",
  }));

  return (
    <div className="minimalistic-background">
      {/* Primary Theme Layer */}
      <div className={`theme-primary-layer ${isDark ? "dark" : "light"}`}>
        {/* Gradient Foundation */}
        <div className="gradient-foundation">
          <div
            className={`foundation-gradient foundation-1 ${
              isDark ? "dark" : "light"
            }`}
          />
          <div
            className={`foundation-gradient foundation-2 ${
              isDark ? "dark" : "light"
            }`}
          />
          <div
            className={`foundation-gradient foundation-3 ${
              isDark ? "dark" : "light"
            }`}
          />
        </div>

        {/* Subtle Depth Layers */}
        <div className="depth-layers">
          <div
            className={`depth-layer depth-layer-1 ${isDark ? "dark" : "light"}`}
          />
          <div
            className={`depth-layer depth-layer-2 ${isDark ? "dark" : "light"}`}
          />
          <div
            className={`depth-layer depth-layer-3 ${isDark ? "dark" : "light"}`}
          />
        </div>

        {/* Enhanced Minimal Art Elements */}
        <div
          className={`minimal-art-elements ${isDark ? "dark" : "light"}`}
          aria-hidden="true"
        >
          {/* Animated Leaves */}
          {leaves.map((leaf) => (
            <div
              key={leaf.key}
              className={`art-leaf ${isDark ? "dark" : "light"}`}
              style={{
                left: leaf.left,
                top: leaf.top,
                animationDelay: leaf.animationDelay,
                animationDuration: leaf.animationDuration,
                transform: `scale(${leaf.size})`,
                opacity: leaf.opacity,
                "--float-dur": leaf.floatDur,
                "--sway-dur": leaf.swayDur,
                "--sparkle-dur": leaf.sparkleDur,
              }}
            />
          ))}

          {/* Rotating Squares */}
          {squares.map((square) => (
            <div
              key={square.key}
              className={`art-square ${isDark ? "dark" : "light"}`}
              style={{
                left: square.left,
                top: square.top,
                animationDelay: square.animationDelay,
                animationDuration: square.animationDuration,
                transform: `scale(${square.size})`,
                opacity: square.opacity,
                "--rotation-duration": `${square.rotationSpeed}s`,
                "--float-dur": square.floatDur,
                "--sway-dur": square.swayDur,
                "--sparkle-dur": square.sparkleDur,
              }}
            />
          ))}

          {/* Floating Circles */}
          {circles.map((circle) => (
            <div
              key={circle.key}
              className={`art-circle ${isDark ? "dark" : "light"}`}
              style={{
                left: circle.left,
                top: circle.top,
                animationDelay: circle.animationDelay,
                animationDuration: circle.animationDuration,
                transform: `scale(${circle.size})`,
                opacity: circle.opacity,
                "--parallax-intensity": circle.parallaxIntensity,
                "--float-dur": circle.floatDur,
                "--sway-dur": circle.swayDur,
                "--sparkle-dur": circle.sparkleDur,
              }}
            />
          ))}

          {/* Twinkling Stars */}
          {stars.map((star) => (
            <div
              key={star.key}
              className={`art-star ${star.starType} ${
                isDark ? "dark" : "light"
              }`}
              style={{
                left: star.left,
                top: star.top,
                animationDelay: star.animationDelay,
                animationDuration: star.animationDuration,
                transform: `scale(${star.size})`,
                opacity: star.opacity,
                "--sparkle-delay": `${star.sparkleDelay}s`,
                "--float-dur": star.floatDur,
                "--sway-dur": star.swayDur,
                "--sparkle-dur": star.sparkleDur,
              }}
            />
          ))}
        </div>

        {/* Theme Color Accents */}
        <div className="theme-color-accents">
          <div
            className={`color-accent primary-accent ${
              isDark ? "dark" : "light"
            }`}
          />
          <div
            className={`color-accent secondary-accent ${
              isDark ? "dark" : "light"
            }`}
          />
          <div
            className={`color-accent tertiary-accent ${
              isDark ? "dark" : "light"
            }`}
          />
        </div>

        {/* Breathing Light Effect */}
        <div className={`breathing-light ${isDark ? "dark" : "light"}`} />

        {/* Subtle Texture Overlay */}
        <div className={`texture-overlay ${isDark ? "dark" : "light"}`} />
      </div>

      {/* Secondary Refinement Layer */}
      <div className={`theme-refinement-layer ${isDark ? "dark" : "light"}`}>
        {/* Corner Accents */}
        <div className="corner-accents">
          <div
            className={`corner-accent corner-top-left ${
              isDark ? "dark" : "light"
            }`}
          />
          <div
            className={`corner-accent corner-top-right ${
              isDark ? "dark" : "light"
            }`}
          />
          <div
            className={`corner-accent corner-bottom-left ${
              isDark ? "dark" : "light"
            }`}
          />
          <div
            className={`corner-accent corner-bottom-right ${
              isDark ? "dark" : "light"
            }`}
          />
        </div>

        {/* Minimalistic Patterns */}
        <div className="minimalistic-patterns">
          <div
            className={`pattern pattern-dots ${isDark ? "dark" : "light"}`}
          />
          <div
            className={`pattern pattern-lines ${isDark ? "dark" : "light"}`}
          />
          <div
            className={`pattern pattern-waves ${isDark ? "dark" : "light"}`}
          />
        </div>

        {/* Focus Vignette */}
        <div className={`focus-vignette ${isDark ? "dark" : "light"}`} />
      </div>
    </div>
  );
};

export default MinimalisticBackground;
