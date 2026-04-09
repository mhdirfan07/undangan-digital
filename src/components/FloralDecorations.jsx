import React from 'react';
import { motion } from 'framer-motion';

// ─── Elegant floral corner ornament (top-left, mirror for other corners) ───
export const FloralCorner = ({ className = '', mirror = false, size = 180 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: mirror ? 'scale(-1, 1)' : 'none' }}
  >
    {/* Main vine curve */}
    <path
      d="M10 190 C30 170, 40 140, 50 110 C60 80, 70 50, 100 30 C130 10, 160 5, 190 10"
      stroke="rgba(255,154,158,0.4)"
      strokeWidth="2"
      fill="none"
    />
    {/* Secondary vine */}
    <path
      d="M10 190 C25 180, 35 160, 40 135 C45 110, 55 85, 75 65 C95 45, 120 35, 150 30"
      stroke="rgba(168,230,207,0.35)"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Flower 1 - Large rose */}
    <g transform="translate(95, 28)">
      <circle cx="0" cy="0" r="8" fill="rgba(255,154,158,0.5)" />
      <ellipse cx="-6" cy="-4" rx="5" ry="7" fill="rgba(255,154,158,0.35)" transform="rotate(-30)" />
      <ellipse cx="6" cy="-4" rx="5" ry="7" fill="rgba(255,154,158,0.35)" transform="rotate(30)" />
      <ellipse cx="-4" cy="5" rx="5" ry="7" fill="rgba(250,208,196,0.4)" transform="rotate(-60)" />
      <ellipse cx="4" cy="5" rx="5" ry="7" fill="rgba(250,208,196,0.4)" transform="rotate(60)" />
      <circle cx="0" cy="0" r="3" fill="rgba(255,154,158,0.7)" />
    </g>
    {/* Flower 2 - Small bud */}
    <g transform="translate(55, 100)">
      <ellipse cx="0" cy="-3" rx="3" ry="5" fill="rgba(255,154,158,0.4)" />
      <ellipse cx="-3" cy="0" rx="3" ry="5" fill="rgba(250,208,196,0.35)" transform="rotate(-40)" />
      <ellipse cx="3" cy="0" rx="3" ry="5" fill="rgba(250,208,196,0.35)" transform="rotate(40)" />
    </g>
    {/* Flower 3 */}
    <g transform="translate(150, 25)">
      <ellipse cx="0" cy="-2" rx="3" ry="4" fill="rgba(168,230,207,0.45)" />
      <ellipse cx="-3" cy="1" rx="3" ry="4" fill="rgba(168,230,207,0.35)" transform="rotate(-45)" />
      <ellipse cx="3" cy="1" rx="3" ry="4" fill="rgba(168,230,207,0.35)" transform="rotate(45)" />
    </g>
    {/* Leaves */}
    <ellipse cx="70" cy="55" rx="4" ry="10" fill="rgba(168,230,207,0.3)" transform="rotate(-40, 70, 55)" />
    <ellipse cx="78" cy="48" rx="3" ry="8" fill="rgba(168,230,207,0.25)" transform="rotate(-20, 78, 48)" />
    <ellipse cx="40" cy="135" rx="3" ry="8" fill="rgba(168,230,207,0.3)" transform="rotate(-50, 40, 135)" />
    <ellipse cx="120" cy="22" rx="3" ry="8" fill="rgba(168,230,207,0.25)" transform="rotate(10, 120, 22)" />
    {/* Small dots / berries */}
    <circle cx="60" cy="80" r="2" fill="rgba(255,154,158,0.3)" />
    <circle cx="45" cy="120" r="1.5" fill="rgba(250,208,196,0.4)" />
    <circle cx="165" cy="15" r="1.5" fill="rgba(255,154,158,0.3)" />
    <circle cx="130" cy="20" r="2" fill="rgba(250,208,196,0.35)" />
  </svg>
);

// ─── Horizontal floral divider ───
export const FloralDivider = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-72 md:w-96 h-auto mx-auto ${className}`}
  >
    {/* Center flower */}
    <g transform="translate(200, 30)">
      <circle cx="0" cy="0" r="8" fill="rgba(255,154,158,0.5)" />
      <ellipse cx="-7" cy="-3" rx="5" ry="8" fill="rgba(255,154,158,0.3)" transform="rotate(-30)" />
      <ellipse cx="7" cy="-3" rx="5" ry="8" fill="rgba(255,154,158,0.3)" transform="rotate(30)" />
      <ellipse cx="-5" cy="5" rx="4" ry="7" fill="rgba(250,208,196,0.35)" transform="rotate(-60)" />
      <ellipse cx="5" cy="5" rx="4" ry="7" fill="rgba(250,208,196,0.35)" transform="rotate(60)" />
      <ellipse cx="0" cy="-7" rx="4" ry="6" fill="rgba(255,154,158,0.25)" />
      <circle cx="0" cy="0" r="3" fill="rgba(255,154,158,0.6)" />
    </g>
    {/* Left vine */}
    <path d="M200 30 C180 28, 150 26, 120 28 C90 30, 60 34, 30 30" stroke="rgba(168,230,207,0.4)" strokeWidth="1.5" fill="none" />
    <path d="M200 30 C175 32, 145 30, 115 32 C85 34, 55 30, 25 32" stroke="rgba(255,154,158,0.25)" strokeWidth="1" fill="none" />
    {/* Right vine */}
    <path d="M200 30 C220 28, 250 26, 280 28 C310 30, 340 34, 370 30" stroke="rgba(168,230,207,0.4)" strokeWidth="1.5" fill="none" />
    <path d="M200 30 C225 32, 255 30, 285 32 C315 34, 345 30, 375 32" stroke="rgba(255,154,158,0.25)" strokeWidth="1" fill="none" />
    {/* Left leaves */}
    <ellipse cx="80" cy="28" rx="3" ry="7" fill="rgba(168,230,207,0.3)" transform="rotate(-30, 80, 28)" />
    <ellipse cx="90" cy="32" rx="2.5" ry="6" fill="rgba(168,230,207,0.25)" transform="rotate(20, 90, 32)" />
    <ellipse cx="140" cy="27" rx="3" ry="7" fill="rgba(168,230,207,0.25)" transform="rotate(-20, 140, 27)" />
    {/* Left small flower */}
    <g transform="translate(55, 31)">
      <ellipse cx="0" cy="-2" rx="2.5" ry="4" fill="rgba(255,154,158,0.35)" />
      <ellipse cx="-2.5" cy="1" rx="2.5" ry="4" fill="rgba(250,208,196,0.3)" transform="rotate(-45)" />
      <ellipse cx="2.5" cy="1" rx="2.5" ry="4" fill="rgba(250,208,196,0.3)" transform="rotate(45)" />
    </g>
    {/* Right leaves */}
    <ellipse cx="320" cy="28" rx="3" ry="7" fill="rgba(168,230,207,0.3)" transform="rotate(30, 320, 28)" />
    <ellipse cx="310" cy="32" rx="2.5" ry="6" fill="rgba(168,230,207,0.25)" transform="rotate(-20, 310, 32)" />
    <ellipse cx="260" cy="27" rx="3" ry="7" fill="rgba(168,230,207,0.25)" transform="rotate(20, 260, 27)" />
    {/* Right small flower */}
    <g transform="translate(345, 31)">
      <ellipse cx="0" cy="-2" rx="2.5" ry="4" fill="rgba(255,154,158,0.35)" />
      <ellipse cx="-2.5" cy="1" rx="2.5" ry="4" fill="rgba(250,208,196,0.3)" transform="rotate(-45)" />
      <ellipse cx="2.5" cy="1" rx="2.5" ry="4" fill="rgba(250,208,196,0.3)" transform="rotate(45)" />
    </g>
    {/* Dots */}
    <circle cx="110" cy="29" r="1.5" fill="rgba(255,154,158,0.3)" />
    <circle cx="170" cy="28" r="1.5" fill="rgba(250,208,196,0.35)" />
    <circle cx="230" cy="28" r="1.5" fill="rgba(250,208,196,0.35)" />
    <circle cx="290" cy="29" r="1.5" fill="rgba(255,154,158,0.3)" />
  </svg>
);

// ─── Falling petals animation overlay ───
const petalColors = [
  'rgba(255,154,158,0.6)',
  'rgba(250,208,196,0.5)',
  'rgba(168,230,207,0.4)',
  'rgba(255,154,158,0.4)',
  'rgba(250,208,196,0.6)',
];

const Petal = ({ delay, startX, duration, size, color, rotation }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: `${startX}%`, top: '-5%' }}
    initial={{ y: '-10vh', opacity: 0, rotate: 0 }}
    animate={{
      y: '110vh',
      opacity: [0, 1, 1, 0.5, 0],
      rotate: rotation,
      x: [0, 30, -20, 40, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  >
    <svg width={size} height={size * 1.4} viewBox="0 0 20 28" fill="none">
      <path
        d="M10 0 C15 6, 20 14, 18 20 C16 26, 12 28, 10 28 C8 28, 4 26, 2 20 C0 14, 5 6, 10 0Z"
        fill={color}
      />
      <path
        d="M10 4 C10 12, 10 20, 10 26"
        stroke={color.replace(/[\d.]+\)$/, '0.3)')}
        strokeWidth="0.5"
      />
    </svg>
  </motion.div>
);

export const FallingPetals = ({ count = 12 }) => {
  const petals = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 8,
    startX: Math.random() * 100,
    duration: 8 + Math.random() * 6,
    size: 10 + Math.random() * 14,
    color: petalColors[i % petalColors.length],
    rotation: 180 + Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 z-[5] overflow-hidden pointer-events-none">
      {petals.map((p) => (
        <Petal key={p.id} {...p} />
      ))}
    </div>
  );
};

// ─── "Bismillah" Islamic calligraphy decoration ───
export const BismillahDecor = ({ className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className={`text-center ${className}`}
  >
    <span className="text-3xl md:text-4xl text-primary/60 font-calligraphy leading-relaxed">
      بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
    </span>
  </motion.div>
);

// ─── Ring / Love icon ───
export const RingIcon = ({ className = '' }) => (
  <svg viewBox="0 0 80 40" fill="none" className={`w-20 h-auto ${className}`}>
    <circle cx="28" cy="20" r="12" stroke="rgba(255,154,158,0.5)" strokeWidth="2" fill="none" />
    <circle cx="52" cy="20" r="12" stroke="rgba(250,208,196,0.6)" strokeWidth="2" fill="none" />
    {/* Diamond */}
    <g transform="translate(28, 8)">
      <path d="M0 0 L2 -4 L4 0 L2 3 Z" fill="rgba(168,230,207,0.6)" />
    </g>
  </svg>
);

// ─── Watercolor blob backgrounds ───
export const WatercolorBlob = ({ className = '', color = 'primary', size = 300 }) => {
  const colors = {
    primary: 'rgba(255,154,158,0.08)',
    secondary: 'rgba(168,230,207,0.08)',
    accent: 'rgba(250,208,196,0.1)',
  };
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colors[color]} 0%, transparent 70%)`,
      }}
    />
  );
};

export default { FloralCorner, FloralDivider, FallingPetals, BismillahDecor, RingIcon, WatercolorBlob };
