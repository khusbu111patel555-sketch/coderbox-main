import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingChatButton = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div 
        className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl cursor-pointer transition-all duration-300 group"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" />
        <AnimatePresence>
          {isHovering && (
            <motion.span 
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="absolute right-16 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap"
            >
              Need help? Let's chat!
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default FloatingChatButton;