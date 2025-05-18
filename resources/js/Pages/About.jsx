import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// SVG Components
const BakeryStorySVG = () => (
  <svg viewBox="0 0 400 300" className="rounded-lg shadow-xl w-full">
    <defs>
      <linearGradient id="storyBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F3F4F6" />
        <stop offset="100%" stopColor="#E5E7EB" />
      </linearGradient>
      <linearGradient id="shopFront" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="woodenSign" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#92400E" />
        <stop offset="100%" stopColor="#78350F" />
      </linearGradient>
      <filter id="storyShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#00000033" />
      </filter>
    </defs>
    
    {/* Background */}
    <rect width="400" height="300" fill="url(#storyBg)" rx="10" />
    
    {/* Bakery Building */}
    <rect x="100" y="80" width="200" height="150" fill="url(#shopFront)" rx="5" filter="url(#storyShadow)" />
    
    {/* Roof */}
    <path d="M90,80 L200,40 L310,80 Z" fill="#1E3A8A" />
    
    {/* Door */}
    <rect x="180" y="160" width="40" height="70" fill="#78350F" rx="3" />
    <circle cx="210" cy="195" r="3" fill="#FCD34D" /> {/* Door handle */}
    
    {/* Windows */}
    <rect x="120" y="100" width="40" height="40" fill="#DBEAFE" rx="3" stroke="#1E3A8A" strokeWidth="2" />
    <rect x="240" y="100" width="40" height="40" fill="#DBEAFE" rx="3" stroke="#1E3A8A" strokeWidth="2" />
    
    {/* Window panes */}
    <line x1="120" y1="120" x2="160" y2="120" stroke="#1E3A8A" strokeWidth="2" />
    <line x1="140" y1="100" x2="140" y2="140" stroke="#1E3A8A" strokeWidth="2" />
    <line x1="240" y1="120" x2="280" y2="120" stroke="#1E3A8A" strokeWidth="2" />
    <line x1="260" y1="100" x2="260" y2="140" stroke="#1E3A8A" strokeWidth="2" />
    
    {/* Bakery Sign */}
    <rect x="140" y="60" width="120" height="30" fill="url(#woodenSign)" rx="5" />
    <text x="200" y="80" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">ELJIN BW</text>
    
    {/* Decorations */}
    <rect x="100" y="230" width="200" height="5" fill="#78350F" /> {/* Base */}
    <circle cx="110" cy="240" r="5" fill="#047857" /> {/* Plant left */}
    <circle cx="290" cy="240" r="5" fill="#047857" /> {/* Plant right */}
    
    {/* Little smoke from chimney */}
    <path d="M220,30 Q225,25 220,20 Q215,15 220,10" fill="none" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
    
    {/* Sun */}
    <circle cx="50" cy="50" r="20" fill="#FCD34D" />
    <line x1="50" y1="20" x2="50" y2="10" stroke="#FCD34D" strokeWidth="2" />
    <line x1="50" y1="80" x2="50" y2="90" stroke="#FCD34D" strokeWidth="2" />
    <line x1="20" y1="50" x2="10" y2="50" stroke="#FCD34D" strokeWidth="2" />
    <line x1="80" y1="50" x2="90" y2="50" stroke="#FCD34D" strokeWidth="2" />
    <line x1="30" y1="30" x2="20" y2="20" stroke="#FCD34D" strokeWidth="2" />
    <line x1="70" y1="70" x2="80" y2="80" stroke="#FCD34D" strokeWidth="2" />
    <line x1="30" y1="70" x2="20" y2="80" stroke="#FCD34D" strokeWidth="2" />
    <line x1="70" y1="30" x2="80" y2="20" stroke="#FCD34D" strokeWidth="2" />
  </svg>
);

// Default Header Background SVG
const DefaultHeaderBackgroundSVG = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <pattern id="patternDots" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="2" fill="#4B5563" fillOpacity="0.3" />
      </pattern>
    </defs>
    
    {/* Background */}
    <rect width="1200" height="400" fill="url(#headerGradient)" />
    
    {/* Decorative elements */}
    <rect width="1200" height="400" fill="url(#patternDots)" />
    
    {/* Abstract bakery shapes */}
    <circle cx="200" cy="100" r="60" fill="#FBBF24" fillOpacity="0.2" />
    <circle cx="1000" cy="300" r="80" fill="#FBBF24" fillOpacity="0.2" />
    <path d="M0,400 C200,300 400,350 600,300 C800,250 1000,300 1200,250 L1200,400 Z" fill="#FBBF24" fillOpacity="0.1" />
    
    {/* Subtle bread shapes */}
    <ellipse cx="300" cy="200" rx="40" ry="20" fill="#F59E0B" fillOpacity="0.3" />
    <ellipse cx="900" cy="150" rx="30" ry="15" fill="#F59E0B" fillOpacity="0.3" />
    <ellipse cx="600" cy="350" rx="50" ry="25" fill="#F59E0B" fillOpacity="0.3" />
  </svg>
);

const LeafSVG = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full">
    <path d="M20,5 Q30,10 30,20 Q30,30 20,35 Q10,30 10,20 Q10,10 20,5 Z" fill="currentColor" />
    <path d="M20,5 L20,35" fill="none" stroke="white" strokeWidth="1.5" />
    <path d="M15,15 Q20,20 20,25" fill="none" stroke="white" strokeWidth="1.5" />
    <path d="M25,15 Q20,20 20,25" fill="none" stroke="white" strokeWidth="1.5" />
  </svg>
);

const HeartSVG = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full">
    <path d="M20,35 L10,25 Q5,20 5,15 Q5,10 10,10 Q15,10 20,15 Q25,10 30,10 Q35,10 35,15 Q35,20 30,25 Z" fill="currentColor" />
  </svg>
);

const UsersSVG = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full">
    <circle cx="15" cy="13" r="6" fill="currentColor" />
    <circle cx="25" cy="13" r="6" fill="currentColor" />
    <path d="M7,30 Q7,22 15,22 Q17,22 19,23" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M33,30 Q33,22 25,22 Q23,22 21,23" fill="none" stroke="currentColor" strokeWidth="3" />
    <circle cx="20" cy="18" r="7" fill="currentColor" />
    <path d="M10,35 Q10,25 20,25 Q30,25 30,35" fill="none" stroke="currentColor" strokeWidth="3" />
  </svg>
);

// Team Member SVG Component
const TeamMemberSVG = ({ name, role, colorAccent }) => {
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };
  
  const colorMap = {
    'Maria Reyes': { bg: '#DBEAFE', accent: '#2563EB', secondary: '#1E40AF' },
    'Juan Santos': { bg: '#FEF3C7', accent: '#D97706', secondary: '#92400E' },
    'Sofia Cruz': { bg: '#FCE7F3', accent: '#DB2777', secondary: '#9D174D' }
  };
  
  const colors = colorMap[name] || { bg: '#E5E7EB', accent: '#6B7280', secondary: '#374151' };
  
  return (
    <svg viewBox="0 0 300 250" className="w-full h-64 object-cover">
      <rect width="300" height="250" fill={colors.bg} />
      
      {/* Person silhouette */}
      <circle cx="150" cy="90" r="40" fill={colors.accent} /> {/* Head */}
      <rect x="120" y="130" width="60" height="80" rx="20" fill={colors.accent} /> {/* Body */}
      
      {/* Role-specific elements */}
      {role === 'Head Baker' && (
        <>
          <circle cx="150" cy="60" r="15" fill="white" /> {/* Chef hat top */}
          <rect x="125" y="65" width="50" height="15" rx="5" fill="white" /> {/* Chef hat base */}
          <rect x="70" y="170" width="80" height="10" rx="5" fill={colors.secondary} transform="rotate(-20, 70, 170)" /> {/* Rolling pin */}
        </>
      )}
      
      {role === 'Pastry Chef' && (
        <>
          <path d="M120,200 Q150,230 180,200" fill={colors.secondary} /> {/* Plate/pastry */}
          <path d="M140,190 Q150,170 160,190" fill="#F59E0B" /> {/* Croissant shape */}
          <rect x="135" y="55" width="30" height="20" rx="5" fill="white" /> {/* Small chef hat */}
        </>
      )}
      
      {role === 'Cake Decorator' && (
        <>
          <rect x="110" y="190" width="80" height="40" rx="5" fill="#F59E0B" /> {/* Cake base */}
          <rect x="110" y="180" width="80" height="10" rx="2" fill="#FBBF24" /> {/* Cake layer */}
          <path d="M130,180 Q150,160 170,180" fill={colors.secondary} strokeWidth="2" stroke="white" /> {/* Icing */}
        </>
      )}
      
      {/* Initials */}
      <text 
        x="150" 
        y="100" 
        textAnchor="middle" 
        dominantBaseline="middle" 
        fill="white" 
        fontSize="24" 
        fontWeight="bold" 
        fontFamily="Arial, sans-serif"
      >
        {getInitials(name)}
      </text>
      
      {/* Name tag */}
      <rect x="100" y="220" width="100" height="20" rx="5" fill="white" opacity="0.7" />
      <text 
        x="150" 
        y="234" 
        textAnchor="middle" 
        dominantBaseline="middle" 
        fill={colors.secondary}
        fontSize="12" 
        fontWeight="bold" 
        fontFamily="Arial, sans-serif"
      >
        {name}
      </text>
    </svg>
  );
};

const About = () => {
  const [headerImage, setHeaderImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageLoadError, setImageLoadError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading a background image
    // In a real application, you would fetch this from your API or CMS
    const loadHeaderImage = async () => {
      try {
        // For demo purposes, we're setting a placeholder image URL
        // You would typically fetch this from your API or CMS
        const imageUrl = null; // Set to null to show default SVG
        
        if (imageUrl) {
          setHeaderImage(imageUrl);
          setImageLoadError(false);
        } else {
          // If no image URL is available, we'll use the default SVG
          setImageLoadError(true);
        }
      } catch (error) {
        console.error("Error loading header image:", error);
        setImageLoadError(true);
      } finally {
        setImageLoading(false);
      }
    };
    
    loadHeaderImage();
  }, []);

  return (
    <div className="pt-16 pb-24">
      {/* About Header with Background Image or SVG Fallback */}
      <div className="relative text-white py-20">
        {/* Background Container */}
        <div className="absolute inset-0 overflow-hidden">
          {imageLoading ? (
            // Loading state - show a simple gradient
            <div className="w-full h-full bg-gradient-to-r from-navy-800 to-blue-900" />
          ) : imageLoadError || !headerImage ? (
            // Error state or no image available - show SVG
            <DefaultHeaderBackgroundSVG />
          ) : (
            // Image loaded successfully
            <img 
              src={headerImage} 
              alt="Bakery background" 
              className="w-full h-full object-cover"
            />
          )}
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-navy-900 bg-opacity-50"></div>
        </div>
        
        {/* Header Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            The story behind Eljin BW SuperBakeshop
          </motion.p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy-800 mb-4">Our Story</h2>
              <div className="w-24 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Eljin BW SuperBakeshop was established in 2010 with a simple mission: to create delicious, 
                high-quality baked goods using traditional methods and the finest ingredients.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small family-owned bakery has grown into a beloved establishment in Tarlac City,
                known for our commitment to quality and exceptional customer service.
              </p>
              <p className="text-gray-600">
                More than a decade later, we continue to bake with the same passion and dedication, 
                serving our community with freshly baked breads, pastries, and cakes every day.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <BakeryStorySVG />
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-5 -right-5 w-20 h-20 bg-yellow-100 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute -bottom-5 -left-5 w-16 h-16 bg-blue-200 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-navy-800 mb-4"
          >
            Our Values
          </motion.h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-navy-800 text-2xl mx-auto mb-4">
                <div className="w-10 h-10">
                  <LeafSVG />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Quality Ingredients</h3>
              <p className="text-gray-600">
                We source only the finest, freshest ingredients for our baked goods, 
                with no artificial preservatives or additives.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-navy-800 text-2xl mx-auto mb-4">
                <div className="w-10 h-10">
                  <HeartSVG />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Passion for Baking</h3>
              <p className="text-gray-600">
                Our bakers bring decades of experience and a true passion for the craft, 
                ensuring each item is baked to perfection.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-navy-800 text-2xl mx-auto mb-4">
                <div className="w-10 h-10">
                  <UsersSVG />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Community First</h3>
              <p className="text-gray-600">
                We're proud to be a part of the Tarlac City community, supporting local initiatives
                and providing a welcoming space for our neighbors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Milestones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Our Milestones</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrating our journey of growth and achievement
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Milestone 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-16 md:mb-0 relative"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-10 md:order-1 order-2">
                  <div className={`md:ml-auto bg-blue-50 p-6 rounded-lg shadow-md max-w-md`}>
                    <h3 className="text-xl font-bold text-navy-800 mb-2">2010</h3>
                    <h4 className="text-blue-600 font-medium mb-3">Grand Opening</h4>
                    <p className="text-gray-600">
                      Eljin BW SuperBakeshop opened its doors in Tarlac City with just three signature bread varieties and a small but passionate team.
                    </p>
                  </div>
                </div>
                
                <div className="md:mx-4 my-4 md:my-0 order-1 md:order-2 z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                      <path fill="currentColor" d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 md:pl-10 order-3">
                  <div className="hidden md:block">
                    <svg viewBox="0 0 120 100" className="w-full h-32">
                      <defs>
                        <linearGradient id="shopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FBBF24" />
                          <stop offset="100%" stopColor="#D97706" />
                        </linearGradient>
                      </defs>
                      
                      {/* Small bakery */}
                      <rect x="20" y="40" width="80" height="50" fill="url(#shopGradient)" rx="2" />
                      <rect x="55" y="70" width="15" height="20" fill="#78350F" rx="1" /> {/* Door */}
                      <rect x="30" y="50" width="15" height="15" fill="#DBEAFE" /> {/* Window */}
                      <rect x="75" y="50" width="15" height="15" fill="#DBEAFE" /> {/* Window */}
                      <path d="M15,40 L60,20 L105,40 Z" fill="#1E3A8A" /> {/* Roof */}
                      <text x="60" y="35" textAnchor="middle" fontFamily="Arial" fontSize="8" fill="white">GRAND OPENING</text>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Milestone 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-16 md:mb-0 relative"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:pl-10 order-2 md:order-3">
                  <div className={`md:mr-auto bg-blue-50 p-6 rounded-lg shadow-md max-w-md`}>
                    <h3 className="text-xl font-bold text-navy-800 mb-2">2015</h3>
                    <h4 className="text-blue-600 font-medium mb-3">First Expansion</h4>
                    <p className="text-gray-600">
                      After five successful years, we expanded our menu to include pastries and cakes, while also doubling our store size to accommodate growing demand.
                    </p>
                  </div>
                </div>
                
                <div className="md:mx-4 my-4 md:my-0 order-1 z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                      <path fill="currentColor" d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H21V6M19 18H5V8H19Z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 md:text-right md:pr-10 order-3 md:order-1">
                  <div className="hidden md:block">
                    <svg viewBox="0 0 120 100" className="w-full h-32">
                      <defs>
                        <linearGradient id="expandGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FBBF24" />
                          <stop offset="100%" stopColor="#D97706" />
                        </linearGradient>
                      </defs>
                      
                      {/* Expanded bakery */}
                      <rect x="10" y="40" width="100" height="50" fill="url(#expandGradient)" rx="2" />
                      <rect x="55" y="70" width="15" height="20" fill="#78350F" rx="1" /> {/* Door */}
                      <rect x="20" y="50" width="15" height="15" fill="#DBEAFE" /> {/* Window 1 */}
                      <rect x="45" y="50" width="15" height="15" fill="#DBEAFE" /> {/* Window 2 */}
                      <rect x="70" y="50" width="15" height="15" fill="#DBEAFE" /> {/* Window 3 */}
                      <path d="M5,40 L60,15 L115,40 Z" fill="#1E3A8A" /> {/* Roof */}
                      
                      {/* Bakery items */}
                      <circle cx="95" cy="55" r="8" fill="#F59E0B" /> {/* Cake */}
                      <rect x="86" y="52" width="18" height="2" fill="#FEF3C7" /> {/* Cake layer */}
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Milestone 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-10 md:order-1 order-2">
                  <div className={`md:ml-auto bg-blue-50 p-6 rounded-lg shadow-md max-w-md`}>
                    <h3 className="text-xl font-bold text-navy-800 mb-2">2020</h3>
                    <h4 className="text-blue-600 font-medium mb-3">Digital Transformation</h4>
                    <p className="text-gray-600">
                      We launched our online ordering platform and delivery service, allowing customers to enjoy our baked goods from the comfort of their homes.
                    </p>
                  </div>
                </div>
                
                <div className="md:mx-4 my-4 md:my-0 order-1 md:order-2 z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                      <path fill="currentColor" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 md:pl-10 order-3">
                  <div className="hidden md:block">
                    <svg viewBox="0 0 120 100" className="w-full h-32">
                      <defs>
                        <linearGradient id="deviceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#E5E7EB" />
                          <stop offset="100%" stopColor="#9CA3AF" />
                        </linearGradient>
                      </defs>
                      
                      {/* Digital devices */}
                      <rect x="20" y="30" width="40" height="30" rx="2" fill="url(#deviceGradient)" /> {/* Computer */}
                      <rect x="25" y="35" width="30" height="20" fill="#1E3A8A" /> {/* Screen */}
                      <rect x="35" y="60" width="10" height="2" fill="#9CA3AF" /> {/* Stand */}
                      <rect x="30" y="62" width="20" height="1" fill="#9CA3AF" /> {/* Base */}
                      
                      <rect x="70" y="40" width="15" height="25" rx="2" fill="url(#deviceGradient)" /> {/* Phone */}
                      <rect x="72" y="43" width="11" height="19" fill="#1E3A8A" /> {/* Phone screen */}
                      <circle cx="77.5" cy="62" r="1" fill="#E5E7EB" /> {/* Home button */}
                      
                      {/* Bakery text on screens */}
                      <text x="40" y="45" textAnchor="middle" fill="#DBEAFE" fontSize="3" fontFamily="Arial">ELJIN BW</text>
                      <text x="40" y="50" textAnchor="middle" fill="#DBEAFE" fontSize="2" fontFamily="Arial">ORDER ONLINE</text>
                      
                      <text x="77.5" y="50" textAnchor="middle" fill="#DBEAFE" fontSize="2" fontFamily="Arial">ELJIN</text>
                      <text x="77.5" y="53" textAnchor="middle" fill="#DBEAFE" fontSize="2" fontFamily="Arial">BW</text>
                      
                      {/* Delivery icon */}
                      <circle cx="95" cy="50" r="10" fill="#EF4444" />
                      <path d="M90,50 L95,46 L100,50 L95,54 Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;