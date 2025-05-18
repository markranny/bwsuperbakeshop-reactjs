import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Hero Section Component
const Hero = () => {
  return (
    <div className="relative h-screen flex items-center bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Bakery pattern SVG */}
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <pattern id="bakeryPattern" patternUnits="userSpaceOnUse" width="20" height="20">
              <path d="M0,10 Q5,0 10,10 T20,10" fill="none" stroke="#1E40AF" strokeWidth="0.5"/>
              <circle cx="5" cy="5" r="1" fill="#1E40AF"/>
              <circle cx="15" cy="15" r="1" fill="#1E40AF"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#bakeryPattern)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy-800 mb-4">
              Fresh Baked <br/>
              <span className="text-blue-500">Happiness</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience the taste of freshly baked goods made with love and premium ingredients.
            </p>
            <motion.button
              className="bg-navy-800 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#1a3a5f" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Menu
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Hero Bread SVG */}
            <svg 
              viewBox="0 0 300 200" 
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-lg shadow-xl mx-auto"
            >
              <defs>
                <radialGradient id="breadGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#E9D8A6" />
                  <stop offset="80%" stopColor="#CA8A04" />
                  <stop offset="100%" stopColor="#854D0E" />
                </radialGradient>
                <filter id="breadShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="3" dy="3" stdDeviation="5" floodColor="#00000033" />
                </filter>
              </defs>
              
              {/* Bread */}
              <ellipse cx="150" cy="100" rx="120" ry="70" fill="url(#breadGradient)" filter="url(#breadShadow)" />
              
              {/* Bread Cuts */}
              <path d="M90,70 Q150,110 210,70" fill="none" stroke="#92400E" strokeWidth="2" />
              <path d="M80,100 Q150,140 220,100" fill="none" stroke="#92400E" strokeWidth="2" />
              
              {/* Bread Texture */}
              <circle cx="110" cy="85" r="3" fill="#92400E" opacity="0.7" />
              <circle cx="130" cy="110" r="2" fill="#92400E" opacity="0.7" />
              <circle cx="170" cy="90" r="2" fill="#92400E" opacity="0.7" />
              <circle cx="190" cy="105" r="3" fill="#92400E" opacity="0.7" />
              
              {/* Flour dusting */}
              <circle cx="160" cy="65" r="4" fill="white" opacity="0.8" />
              <circle cx="120" cy="60" r="3" fill="white" opacity="0.8" />
              <circle cx="180" cy="75" r="2" fill="white" opacity="0.8" />
              <circle cx="100" cy="80" r="2" fill="white" opacity="0.8" />
            </svg>
            
            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-10 -right-5 w-20 h-20 bg-yellow-200 rounded-full opacity-70"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div
              className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-200 rounded-full opacity-60"
              animate={{ 
                y: [0, 10, 0],
                x: [0, 5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Featured Products Section
const FeaturedProducts = () => {
  const products = [
    { 
      id: 1, 
      name: 'Classic Sourdough', 
      description: 'Our signature sourdough with perfectly crispy crust.',
      price: '₱120.00',
      color: '#F59E0B'
    },
    { 
      id: 2, 
      name: 'Chocolate Croissant', 
      description: 'Buttery layers filled with rich chocolate.',
      price: '₱85.00',
      color: '#78350F'
    },
    { 
      id: 3, 
      name: 'Blueberry Muffin', 
      description: 'Moist muffin bursting with fresh blueberries.',
      price: '₱75.00',
      color: '#6366F1'
    },
  ];
  
  // SVG components for products
  const ProductSVG = ({ id, color }) => {
    if (id === 1) {
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="sourdoughGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#F5F3EE" />
              <stop offset="60%" stopColor="#E9D8A6" />
              <stop offset="100%" stopColor="#D69E2E" />
            </radialGradient>
          </defs>
          <ellipse cx="100" cy="75" rx="80" ry="50" fill="url(#sourdoughGradient)" />
          <path d="M50,75 Q100,105 150,75" fill="none" stroke="#92400E" strokeWidth="1.5" />
          <path d="M60,55 Q100,85 140,55" fill="none" stroke="#92400E" strokeWidth="1.5" />
          <circle cx="80" cy="60" r="3" fill="#92400E" opacity="0.6" />
          <circle cx="120" cy="65" r="2" fill="#92400E" opacity="0.6" />
          <circle cx="90" cy="85" r="2" fill="#92400E" opacity="0.6" />
          <circle cx="110" cy="80" r="2" fill="#92400E" opacity="0.6" />
          <circle cx="70" cy="75" r="1" fill="white" opacity="0.7" />
          <circle cx="130" cy="70" r="1" fill="white" opacity="0.7" />
        </svg>
      );
    } else if (id === 2) {
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="croissantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5DEB3" />
              <stop offset="100%" stopColor="#D4A76A" />
            </linearGradient>
            <linearGradient id="chocolateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7B3F00" />
              <stop offset="100%" stopColor="#3C1F00" />
            </linearGradient>
          </defs>
          
          {/* Croissant shape */}
          <path d="M30,100 Q60,20 120,40 T170,70 Q130,110 100,120 T30,100 Z" fill="url(#croissantGradient)" />
          
          {/* Chocolate filling showing */}
          <path d="M65,70 Q90,60 110,80 T140,85" fill="none" stroke="url(#chocolateGradient)" strokeWidth="6" />
          
          {/* Croissant layers */}
          <path d="M40,90 Q70,30 120,50" fill="none" stroke="#D4A76A" strokeWidth="1.5" />
          <path d="M70,110 Q100,40 150,65" fill="none" stroke="#D4A76A" strokeWidth="1.5" />
          
          {/* Butter shine */}
          <ellipse cx="60" cy="60" rx="10" ry="5" fill="white" opacity="0.3" transform="rotate(-30, 60, 60)" />
          <ellipse cx="120" cy="70" rx="15" ry="5" fill="white" opacity="0.3" transform="rotate(20, 120, 70)" />
        </svg>
      );
    } else if (id === 3) {
      return (
        <svg viewBox="0 0 200 150" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="muffinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E5DBCF" />
              <stop offset="100%" stopColor="#C8A887" />
            </linearGradient>
          </defs>
          
          {/* Muffin wrapper */}
          <path d="M60,100 L60,70 Q100,40 140,70 L140,100 Z" fill="#F87171" opacity="0.7" />
          
          {/* Muffin top */}
          <ellipse cx="100" cy="70" rx="40" ry="25" fill="url(#muffinGradient)" />
          
          {/* Blueberries */}
          <circle cx="85" cy="65" r="4" fill="#3730A3" />
          <circle cx="110" cy="60" r="3" fill="#3730A3" />
          <circle cx="115" cy="75" r="4" fill="#3730A3" />
          <circle cx="95" cy="75" r="3" fill="#3730A3" />
          <circle cx="75" cy="70" r="3" fill="#3730A3" />
          <circle cx="90" cy="55" r="3" fill="#3730A3" />
          <circle cx="105" cy="70" r="2" fill="#3730A3" />
          
          {/* Sugar sprinkles */}
          <circle cx="82" cy="60" r="1" fill="white" />
          <circle cx="95" cy="58" r="1" fill="white" />
          <circle cx="112" cy="65" r="1" fill="white" />
          <circle cx="120" cy="73" r="1" fill="white" />
          <circle cx="88" cy="73" r="1" fill="white" />
        </svg>
      );
    }
    return null;
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Our Bestsellers</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items that keep our customers coming back for more.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <ProductSVG id={product.id} color={product.color} />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  <motion.button
                    className="bg-navy-800 text-white px-4 py-2 rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reserve
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Reservation valid for 30 mins to pickup
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button
            className="border-2 border-navy-800 text-navy-800 px-8 py-3 rounded-full text-lg font-medium hover:bg-navy-800 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Santos',
      role: 'Regular Customer',
      text: 'Their bread is always fresh and delicious. The chocolate croissants are to die for!',
      avatar: { bg: '#FEF3C7', fg: '#D97706', initial: 'MS' }
    },
    {
      id: 2,
      name: 'Juan Reyes',
      role: 'Food Blogger',
      text: 'Eljin BW SuperBakeshop has the best sourdough in the city. Absolutely worth a visit!',
      avatar: { bg: '#DBEAFE', fg: '#2563EB', initial: 'JR' }
    },
    {
      id: 3,
      name: 'Sofia Cruz',
      role: 'Café Owner',
      text: 'As a café owner, I exclusively source my pastries from Eljin BW. Their quality is unmatched.',
      avatar: { bg: '#FCE7F3', fg: '#DB2777', initial: 'SC' }
    },
  ];
  
  // SVG Avatar Component
  const AvatarSVG = ({ avatar }) => {
    return (
      <svg viewBox="0 0 40 40" className="w-16 h-16 rounded-full border-2 border-blue-400">
        <circle cx="20" cy="20" r="20" fill={avatar.bg} />
        <text
          x="20"
          y="20"
          textAnchor="middle"
          dominantBaseline="central"
          fill={avatar.fg}
          fontSize="16"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          {avatar.initial}
        </text>
      </svg>
    );
  };
  
  return (
    <section className="py-16 bg-navy-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            We take pride in making our customers happy with every bite.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-navy-700 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <AvatarSVG avatar={testimonial.avatar} />
                <div className="ml-4">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-blue-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-200 italic">"{testimonial.text}"</p>
              
              <div className="flex mt-4 text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Baking Process SVG for Philosophy Section
const BakingProcessSVG = () => {
  return (
    <svg viewBox="0 0 400 300" className="rounded-lg shadow-xl w-full">
      <defs>
        <linearGradient id="bakeryBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9FAFB" />
          <stop offset="100%" stopColor="#E5E7EB" />
        </linearGradient>
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#00000033" />
        </filter>
      </defs>
      
      {/* Background */}
      <rect width="400" height="300" fill="url(#bakeryBg)" rx="10" />
      
      {/* Baker */}
      <circle cx="130" cy="120" r="30" fill="#F5F5F4" /> {/* Head */}
      <path d="M130,150 L130,200" stroke="#1E3A8A" strokeWidth="8" /> {/* Body */}
      <path d="M130,160 L100,190" stroke="#1E3A8A" strokeWidth="6" /> {/* Left arm */}
      <path d="M130,160 L160,190" stroke="#1E3A8A" strokeWidth="6" /> {/* Right arm */}
      <path d="M130,200 L110,240" stroke="#1E3A8A" strokeWidth="6" /> {/* Left leg */}
      <path d="M130,200 L150,240" stroke="#1E3A8A" strokeWidth="6" /> {/* Right leg */}
      
      {/* Baker's hat */}
      <rect x="105" y="80" width="50" height="20" fill="white" rx="5" />
      <rect x="110" y="60" width="40" height="25" fill="white" rx="10" />
      
      {/* Face */}
      <circle cx="120" cy="115" r="3" fill="#1F2937" /> {/* Left eye */}
      <circle cx="140" cy="115" r="3" fill="#1F2937" /> {/* Right eye */}
      <path d="M123,130 Q130,135 137,130" fill="none" stroke="#1F2937" strokeWidth="2" /> {/* Smile */}
      
      {/* Oven */}
      <rect x="220" y="150" width="120" height="100" fill="#6B7280" rx="5" filter="url(#softShadow)" />
      <rect x="230" y="180" width="100" height="60" fill="#1F2937" rx="3" /> {/* Oven window */}
      <rect x="275" y="160" width="10" height="10" fill="#EF4444" rx="5" /> {/* Oven light */}
      
      {/* Bread in oven */}
      <ellipse cx="280" cy="210" rx="30" ry="15" fill="#F59E0B" />
      
      {/* Bowl */}
      <ellipse cx="230" cy="120" rx="40" ry="15" fill="#E5E7EB" />
      <path d="M190,120 Q230,150 270,120" fill="none" stroke="#E5E7EB" strokeWidth="30" />
      
      {/* Flour cloud */}
      <circle cx="280" cy="100" r="30" fill="white" opacity="0.6" />
      <circle cx="290" cy="80" r="20" fill="white" opacity="0.6" />
      <circle cx="260" cy="80" r="15" fill="white" opacity="0.6" />
      
      {/* Rolling pin */}
      <rect x="280" y="130" width="80" height="10" fill="#92400E" rx="5" />
      <rect x="275" y="125" width="5" height="20" fill="#92400E" rx="2" />
      <rect x="360" y="125" width="5" height="20" fill="#92400E" rx="2" />
      
      {/* Bread on counter */}
      <ellipse cx="350" cy="240" rx="25" ry="15" fill="#F59E0B" />
      <path d="M340,235 Q350,245 360,235" fill="none" stroke="#92400E" strokeWidth="1.5" />
    </svg>
  );
};

// Home Page Component
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16"> {/* Add padding for the fixed header */}
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      
      {/* Philosophy section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Our Baking Philosophy</h2>
              <div className="w-24 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-600 mb-4">
                At Eljin BW SuperBakeshop, we believe in using only the finest ingredients and traditional baking methods to create products that delight our customers.
              </p>
              <p className="text-gray-600 mb-6">
                Every item is baked fresh daily with love and attention to detail, ensuring quality and consistency in every bite.
              </p>
              <motion.button
                className="bg-navy-800 text-white px-6 py-3 rounded-full text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <BakingProcessSVG />
              
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
      
      {/* Call to action section */}
      <section className="py-16 bg-gradient-to-r from-navy-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Experience Our Delicious Treats?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-blue-100 max-w-2xl mx-auto mb-8"
          >
            Visit our bakeshop today or order online for pickup and delivery.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            <motion.button
              className="bg-white text-navy-800 px-8 py-3 rounded-full text-lg font-medium shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
              whileTap={{ scale: 0.95 }}
            >
              Find Our Location
            </motion.button>
            
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Order Online
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;