import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ target, label, icon: Icon, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center group">
      <div className="flex items-center justify-center space-x-2 mb-2">
        <div className="p-2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-5 w-5 text-blue-400" />
        </div>
        <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          {count}{suffix}
        </span>
      </div>
      <p className="text-blue-200/80 font-medium text-sm">{label}</p>
    </div>
  );
};

export default Counter;