import React from 'react';
import { motion } from 'framer-motion';

const BakeshopLogo = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };
  
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };
  
  return (
    <motion.div 
      className={`${sizes[size]} bg-navy-800 rounded-full flex items-center justify-center text-white shadow-lg`}
      whileHover={{ rotate: 10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-center">
        <div className={`font-bold ${textSizes[size]}`}>ELJIN BW</div>
        <div className={`${size === 'sm' ? 'text-[0.6rem]' : textSizes[size]}`}>SUPERBAKESHOP</div>
      </div>
    </motion.div>
  );
};

export default BakeshopLogo;