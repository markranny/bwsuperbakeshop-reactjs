import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const CircularNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Navigation items with routes
  const navItems = [
    { id: 'home', label: 'HOME', icon: '🏠', route: '/' },
    { id: 'products', label: 'PRODUCTS', icon: '🧁', route: '/products' },
    { id: 'about', label: 'ABOUT US', icon: 'ℹ️', route: '/about' },
    { id: 'franchise', label: 'FRANCHISE', icon: '🏪', route: '/franchise' },
    { id: 'career', label: 'CAREER', icon: '💼', route: '/career' },
    { id: 'location', label: 'OUR LOCATION', icon: '📍', route: '/location' },
  ];
  
  // Toggle the navigation menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Calculate active item based on current route
  const getActiveItem = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return navItems.find(item => item.route === path)?.id || null;
  };
  
  const activeItem = getActiveItem();
  
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div className="relative">
        {/* Menu button */}
        <motion.button
          className="w-16 h-16 bg-navy-800 rounded-full text-white flex items-center justify-center shadow-lg cursor-pointer font-bold z-20"
          whileTap={{ scale: 0.95 }}
          onClick={toggleMenu}
        >
          MENU
        </motion.button>
        
        {/* Navigation items */}
        {navItems.map((item, index) => {
          // Calculate position in a wider semi-circle 
          const totalItems = navItems.length;
          
          // Distribute items evenly across a 200-degree arc (approx 3.5 radians) above the menu button
          // Start at -10 degrees (-0.175 radians) and end at 190 degrees (3.32 radians)
          const angleStart = -0.175;
          const angleEnd = 3.32;
          const angleRange = angleEnd - angleStart;
          const angle = angleStart + (angleRange * index / (totalItems - 1));
          
          // Adjust radius to control the spread - making it wider
          const radius = 150;
          
          // Calculate x and y coordinates for a wider semi-circle
          const x = Math.sin(angle) * radius; 
          const y = -Math.cos(angle) * radius;
          
          const isActive = activeItem === item.id;
          
          return (
            <motion.div
              key={item.id}
              className="absolute left-8 top-8 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ x, y, opacity: 0, scale: 0 }}
              animate={{ 
                x: isOpen ? x : 0,
                y: isOpen ? y : 0,
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0,
              }}
              transition={{ 
                duration: 0.5,
                delay: isOpen ? index * 0.1 : 0,
              }}
            >
              <Link to={item.route}>
                <motion.div
                  className="relative"
                  whileHover={{ 
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Radial effect for active item */}
                  {isActive && (
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-navy-800 opacity-20"
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.15, 0.2]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      style={{
                        zIndex: -1,
                        transform: 'translate(-10px, -8px)',
                        width: 'calc(80% + 16px)',
                        height: 'calc(80% + 16px)'
                      }}
                    />
                  )}

                  <motion.button
                    className={`w-20 h-20 rounded-full flex flex-col items-center justify-center text-xs font-bold shadow-md cursor-pointer
                      ${isActive ? 'bg-navy-800 text-white' : 'bg-white text-navy-800 border-2 border-navy-800'}`}
                    onClick={toggleMenu}
                  >
                    <div className="text-lg mb-1">{item.icon}</div>
                    <div className="text-[0.6rem] leading-tight text-center">
                      {item.label.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </div>
                  </motion.button>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularNavigation;