import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BakeshopLogo from '../UI/BakeshopLogo';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <BakeshopLogo size="sm" />
          <span className="ml-3 font-bold text-navy-800 text-xl md:text-2xl hidden md:block">
            ELJIN BW SUPERBAKESHOP
          </span>
        </Link>
        
        <Link to="/login">
          <motion.button 
            className="bg-navy-800 text-white py-2 px-4 md:px-6 rounded-full text-sm font-medium shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </Link>
      </div>
    </header>
  );
};

export default Header;