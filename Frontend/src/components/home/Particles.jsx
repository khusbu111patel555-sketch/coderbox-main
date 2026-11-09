import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const PARTICLE_COUNT = 18;

// Generate stable particle positions once. Random values created during render
// were causing the whole background animation to jump whenever this component
// re-rendered.
const createParticles = () =>
  Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const seed = (n) => {
      const value = Math.sin((i + 1) * n * 127.1) * 43758.5453;
      return value - Math.floor(value);
    };
    const size = 2 + seed(1) * 3;

    return {
      id: i,
      size,
      x: seed(2) * 100,
      y: seed(3) * 100,
      duration: 24 + seed(4) * 20,
      delay: seed(5) * 12,
      opacity: 0.1 + seed(6) * 0.3,
      scale: 0.5 + seed(7) * 0.5,
    };
  });

const Particles = () => {
  const particles = useMemo(createParticles, []);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)',
            boxShadow: `0 0 ${particle.size * 3}px rgba(255,255,255,0.1)`,
          }}
          initial={{ opacity: particle.opacity, scale: particle.scale }}
          animate={shouldReduceMotion ? undefined : {
            y: [0, -120, 0, 120, 0],
            x: [0, 60, -60, 30, -30, 0],
            opacity: [0.1, 0.45, 0.2, 0.35, 0.1],
            scale: [1, 1.25, 0.85, 1.1, 1],
          }}
          transition={shouldReduceMotion ? undefined : {
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
