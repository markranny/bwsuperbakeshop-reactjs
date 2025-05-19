import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  
  // Logo component directly embedded in Header
  const BakeshopLogo = () => {
  // Using a larger fixed size with added text
  return (
    <div className="flex items-center">
      <div className={`w-20 h-20 relative flex items-center justify-center rounded-full bg-navy-800 border-2 border-solid ${
        scrolled ? 'border-navy-800' : 'border-white'
      }`}>
        <img 
          src="/images/assets/logo.png"
          alt="Eljin BW SuperBakeshop"
          className="w-7/12 h-7/12 object-contain"
        />
      </div>
      {/* <span className={`ml-3 font-bold text-2xl ${
        scrolled ? 'text-white' : 'text-indigo-900'
      }`}>
        BWSUPERBAKESHOP
      </span> */}
    </div>
  );
};
  
  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled ? 'bg-navy-800 shadow-md py-2' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <BakeshopLogo />
        </Link>
        
        {/* <Link to="/login">
          <motion.button 
            className="bg-navy-800 text-white py-2 px-4 md:px-6 rounded-full text-sm font-medium shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;