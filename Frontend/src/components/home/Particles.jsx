import React from 'react';
import { motion } from 'framer-motion';

const Particles = () => {
  const particles = Array.from({ length: 60 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => {
        const size = 2 + Math.random() * 4;
        const xStart = Math.random() * 100;
        const yStart = Math.random() * 100;
        const duration = 20 + Math.random() * 30;
        const delay = Math.random() * 15;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${xStart}%`,
              top: `${yStart}%`,
              background: `radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)`,
              boxShadow: `0 0 ${size * 3}px rgba(255,255,255,0.1)`
            }}
            initial={{
              opacity: 0.1 + Math.random() * 0.3,
              scale: 0.5 + Math.random() * 0.5,
            }}
            animate={{
              y: [0, -200, 0, 200, 0],
              x: [0, 100, -100, 50, -50, 0],
              opacity: [0.1, 0.6, 0.2, 0.4, 0.1],
              scale: [1, 1.5, 0.8, 1.2, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          />
        );
      })}
    </div>
  );
};

export default Particles;