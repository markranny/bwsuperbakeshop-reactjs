import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Background SVG component to use as fallback
const BackgroundSVG = () => {
  return (
    <svg 
      className="absolute inset-0 w-full h-full" 
      viewBox="0 0 1200 400" 
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0c2340" /> {/* navy-800 */}
          <stop offset="100%" stopColor="#1e3a8a" /> {/* blue-900 */}
        </linearGradient>
        
        {/* Pattern for the background */}
        <pattern id="bakePattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 Q10 0 20 20 T40 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <path d="M0 0 Q20 20 40 0" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
      </defs>
      
      {/* Base gradient background */}
      <rect width="100%" height="100%" fill="url(#headerGradient)" />
      
      {/* Subtle pattern overlay */}
      <rect width="100%" height="100%" fill="url(#bakePattern)" />
      
      {/* Abstract bakery-themed decorative elements */}
      <circle cx="100" cy="100" r="50" fill="rgba(255,255,255,0.03)" />
      <circle cx="1100" cy="300" r="70" fill="rgba(255,255,255,0.03)" />
      <path d="M200,380 Q600,250 1000,380" stroke="rgba(255,255,255,0.05)" strokeWidth="20" fill="none" />
      <path d="M300,20 Q600,120 900,20" stroke="rgba(255,255,255,0.05)" strokeWidth="15" fill="none" />
    </svg>
  );
};

// SVG Components for each product
const ProductSVG = ({ id, category, name }) => {
  // Bread SVGs
  if (category === 'breads') {
    if (name.includes('Sourdough')) {
      return (
        <svg viewBox="0 0 300 220" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="sourdoughGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#F5F3EE" />
              <stop offset="60%" stopColor="#E9D8A6" />
              <stop offset="100%" stopColor="#D69E2E" />
            </radialGradient>
            <filter id="breadShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#00000033" />
            </filter>
          </defs>
          
          {/* Sourdough loaf */}
          <ellipse cx="150" cy="110" rx="120" ry="60" fill="url(#sourdoughGradient)" filter="url(#breadShadow)" />
          
          {/* Bread cuts */}
          <path d="M80,100 Q150,140 220,100" fill="none" stroke="#92400E" strokeWidth="2" />
          <path d="M90,80 Q150,120 210,80" fill="none" stroke="#92400E" strokeWidth="2" />
          
          {/* Bread texture */}
          <circle cx="110" cy="90" r="3" fill="#92400E" opacity="0.7" />
          <circle cx="190" cy="95" r="3" fill="#92400E" opacity="0.7" />
          <circle cx="150" cy="130" r="2" fill="#92400E" opacity="0.7" />
          <circle cx="130" cy="70" r="2" fill="#92400E" opacity="0.7" />
          <circle cx="170" cy="70" r="2" fill="#92400E" opacity="0.7" />
          
          {/* Flour dusting */}
          <circle cx="100" cy="75" r="3" fill="white" opacity="0.8" />
          <circle cx="200" cy="80" r="3" fill="white" opacity="0.8" />
          <circle cx="160" cy="60" r="2" fill="white" opacity="0.8" />
          <circle cx="140" cy="65" r="2" fill="white" opacity="0.8" />
        </svg>
      );
    } else if (name.includes('Whole Wheat')) {
      return (
        <svg viewBox="0 0 300 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="wholeWheatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="100%" stopColor="#654321" />
            </linearGradient>
            <filter id="breadShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#00000033" />
            </filter>
          </defs>
          
          {/* Whole wheat loaf */}
          <rect x="50" y="80" width="200" height="80" rx="15" fill="url(#wholeWheatGradient)" filter="url(#breadShadow)" />
          
          {/* Bread texture */}
          <line x1="60" y1="95" x2="240" y2="95" stroke="#5D4037" strokeWidth="1" opacity="0.7" />
          <line x1="60" y1="110" x2="240" y2="110" stroke="#5D4037" strokeWidth="1" opacity="0.7" />
          <line x1="60" y1="125" x2="240" y2="125" stroke="#5D4037" strokeWidth="1" opacity="0.7" />
          <line x1="60" y1="140" x2="240" y2="140" stroke="#5D4037" strokeWidth="1" opacity="0.7" />
          
          {/* Seeds on top */}
          <circle cx="80" cy="80" r="2" fill="#3E2723" />
          <circle cx="100" cy="80" r="2" fill="#3E2723" />
          <circle cx="120" cy="80" r="2" fill="#3E2723" />
          <circle cx="140" cy="80" r="2" fill="#3E2723" />
          <circle cx="160" cy="80" r="2" fill="#3E2723" />
          <circle cx="180" cy="80" r="2" fill="#3E2723" />
          <circle cx="200" cy="80" r="2" fill="#3E2723" />
          <circle cx="220" cy="80" r="2" fill="#3E2723" />
          
          {/* Flour dusting */}
          <circle cx="90" cy="80" r="1" fill="white" opacity="0.6" />
          <circle cx="150" cy="80" r="1" fill="white" opacity="0.6" />
          <circle cx="210" cy="80" r="1" fill="white" opacity="0.6" />
        </svg>
      );
    }
  }
  
  // Pastry SVGs
  else if (category === 'pastries') {
    if (name.includes('Croissant')) {
      return (
        <svg viewBox="0 0 300 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="croissantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5DEB3" />
              <stop offset="100%" stopColor="#D4A76A" />
            </linearGradient>
            <linearGradient id="chocolateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7B3F00" />
              <stop offset="100%" stopColor="#3C1F00" />
            </linearGradient>
            <filter id="pastryShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#00000033" />
            </filter>
          </defs>
          
          {/* Croissant shape */}
          <path d="M70,150 Q110,50 150,80 T230,110 Q180,160 140,170 T70,150 Z" fill="url(#croissantGradient)" filter="url(#pastryShadow)" />
          
          {/* Chocolate filling showing */}
          <path d="M110,120 Q140,100 170,130" fill="none" stroke="url(#chocolateGradient)" strokeWidth="8" />
          
          {/* Croissant layers */}
          <path d="M80,140 Q120,60 150,90" fill="none" stroke="#D4A76A" strokeWidth="1.5" />
          <path d="M110,150 Q150,70 190,100" fill="none" stroke="#D4A76A" strokeWidth="1.5" />
          <path d="M140,160 Q170,90 210,110" fill="none" stroke="#D4A76A" strokeWidth="1.5" />
          
          {/* Butter shine */}
          <ellipse cx="110" cy="100" rx="15" ry="5" fill="white" opacity="0.3" transform="rotate(-30, 110, 100)" />
          <ellipse cx="170" cy="110" rx="20" ry="7" fill="white" opacity="0.3" transform="rotate(15, 170, 110)" />
        </svg>
      );
    } else if (name.includes('Muffin')) {
      return (
        <svg viewBox="0 0 300 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="muffinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E5DBCF" />
              <stop offset="100%" stopColor="#C8A887" />
            </linearGradient>
            <filter id="muffinShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#00000033" />
            </filter>
          </defs>
          
          {/* Muffin wrapper */}
          <path d="M100,160 L100,110 Q150,80 200,110 L200,160 Z" fill="#F87171" opacity="0.8" filter="url(#muffinShadow)" />
          
          {/* Muffin top */}
          <ellipse cx="150" cy="110" rx="50" ry="30" fill="url(#muffinGradient)" filter="url(#muffinShadow)" />
          
          {/* Blueberries */}
          <circle cx="130" cy="100" r="5" fill="#3730A3" />
          <circle cx="160" cy="95" r="4" fill="#3730A3" />
          <circle cx="175" cy="110" r="5" fill="#3730A3" />
          <circle cx="145" cy="115" r="4" fill="#3730A3" />
          <circle cx="115" cy="105" r="4" fill="#3730A3" />
          <circle cx="135" cy="90" r="4" fill="#3730A3" />
          <circle cx="155" cy="105" r="3" fill="#3730A3" />
          
          {/* Sugar sprinkles */}
          <circle cx="125" cy="95" r="1" fill="white" />
          <circle cx="150" cy="93" r="1" fill="white" />
          <circle cx="165" cy="100" r="1" fill="white" />
          <circle cx="180" cy="108" r="1" fill="white" />
          <circle cx="140" cy="110" r="1" fill="white" />
        </svg>
      );
    }
  }
  
  // Cake SVGs
  else if (category === 'cakes') {
    if (name.includes('Chocolate Cake')) {
      return (
        <svg viewBox="0 0 300 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="chocolateCakeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5D4037" />
              <stop offset="100%" stopColor="#3E2723" />
            </linearGradient>
            <linearGradient id="ganacheGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4E342E" />
              <stop offset="100%" stopColor="#3E2723" />
            </linearGradient>
            <filter id="cakeShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#00000033" />
            </filter>
          </defs>
          
          {/* Cake plate */}
          <ellipse cx="150" cy="180" rx="100" ry="20" fill="#E0E0E0" />
          
          {/* Cake layers */}
          <rect x="80" y="130" width="140" height="30" rx="2" fill="url(#chocolateCakeGradient)" filter="url(#cakeShadow)" />
          <rect x="80" y="110" width="140" height="20" rx="2" fill="#6D4C41" filter="url(#cakeShadow)" />
          <rect x="80" y="90" width="140" height="20" rx="2" fill="url(#chocolateCakeGradient)" filter="url(#cakeShadow)" />
          
          {/* Ganache topping */}
          <path d="M75,90 Q150,70 225,90" fill="url(#ganacheGradient)" filter="url(#cakeShadow)" />
          
          {/* Chocolate drips */}
          <path d="M90,90 L90,120" stroke="#3E2723" strokeWidth="3" />
          <path d="M120,90 L120,130" stroke="#3E2723" strokeWidth="3" />
          <path d="M150,70 L150,130" stroke="#3E2723" strokeWidth="3" />
          <path d="M180,90 L180,125" stroke="#3E2723" strokeWidth="3" />
          <path d="M210,90 L210,115" stroke="#3E2723" strokeWidth="3" />
          
          {/* Decorations */}
          <circle cx="150" cy="80" r="8" fill="#795548" />
          <circle cx="120" cy="85" r="5" fill="#795548" />
          <circle cx="180" cy="85" r="5" fill="#795548" />
        </svg>
      );
    } else if (name.includes('Cheesecake')) {
      return (
        <svg viewBox="0 0 300 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="cheesecakeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF8E1" />
              <stop offset="100%" stopColor="#FFE0B2" />
            </linearGradient>
            <linearGradient id="crustGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D7CCC8" />
              <stop offset="100%" stopColor="#A1887F" />
            </linearGradient>
            <filter id="cakeShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#00000033" />
            </filter>
          </defs>
          
          {/* Cake plate */}
          <ellipse cx="150" cy="180" rx="100" ry="20" fill="#E0E0E0" />
          
          {/* Crust */}
          <path d="M80,130 L80,150 Q150,170 220,150 L220,130 Z" fill="url(#crustGradient)" filter="url(#cakeShadow)" />
          
          {/* Cheesecake filling */}
          <path d="M80,90 Q150,70 220,90 L220,130 Q150,150 80,130 Z" fill="url(#cheesecakeGradient)" filter="url(#cakeShadow)" />
          
          {/* Surface texture lines */}
          <path d="M100,100 Q150,85 200,100" fill="none" stroke="#FFECB3" strokeWidth="1" />
          <path d="M100,110 Q150,95 200,110" fill="none" stroke="#FFECB3" strokeWidth="1" />
          <path d="M100,120 Q150,105 200,120" fill="none" stroke="#FFECB3" strokeWidth="1" />
          
          {/* Decorative berries */}
          <circle cx="110" cy="95" r="5" fill="#E53935" />
          <circle cx="130" cy="90" r="5" fill="#E53935" />
          <circle cx="170" cy="90" r="5" fill="#E53935" />
          <circle cx="190" cy="95" r="5" fill="#E53935" />
          
          {/* Graham cracker crust details */}
          <line x1="90" y1="150" x2="90" y2="130" stroke="#8D6E63" strokeWidth="1" />
          <line x1="110" y1="152" x2="110" y2="130" stroke="#8D6E63" strokeWidth="1" />
          <line x1="130" y1="154" x2="130" y2="130" stroke="#8D6E63" strokeWidth="1" />
          <line x1="150" y1="155" x2="150" y2="130" stroke="#8D6E63" strokeWidth="1" />
          <line x1="170" y1="154" x2="170" y2="130" stroke="#8D6E63" strokeWidth="1" />
          <line x1="190" y1="152" x2="190" y2="130" stroke="#8D6E63" strokeWidth="1" />
          <line x1="210" y1="150" x2="210" y2="130" stroke="#8D6E63" strokeWidth="1" />
        </svg>
      );
    }
  }
  
  // Default fallback SVG
  return (
    <svg viewBox="0 0 300 220" className="w-full h-full object-cover bg-gray-200">
      <text x="150" y="110" textAnchor="middle" fontFamily="Arial" fontSize="20" fill="#6B7280">
        {name}
      </text>
    </svg>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [headerImage, setHeaderImage] = useState(null);
  const [headerImageLoaded, setHeaderImageLoaded] = useState(false);
  
  // In a real app, this would fetch from your Laravel API
  useEffect(() => {
    // Simulate fetching data
    const fetchProducts = async () => {
      // This is dummy data - in a real app, you'd use axios to fetch from your API
      const dummyProducts = [
        { 
          id: 1, 
          name: 'Classic Sourdough', 
          category: 'breads',
          description: 'Our signature sourdough with perfectly crispy crust.',
          price: '₱120.00'
        },
        { 
          id: 2, 
          name: 'Whole Wheat Loaf', 
          category: 'breads',
          description: 'Nutritious whole wheat bread, perfect for sandwiches.',
          price: '₱95.00'
        },
        { 
          id: 3, 
          name: 'Chocolate Croissant', 
          category: 'pastries',
          description: 'Buttery layers filled with rich chocolate.',
          price: '₱85.00'
        },
        { 
          id: 4, 
          name: 'Blueberry Muffin', 
          category: 'pastries',
          description: 'Moist muffin bursting with fresh blueberries.',
          price: '₱75.00'
        },
        { 
          id: 5, 
          name: 'Chocolate Cake', 
          category: 'cakes',
          description: 'Rich and moist chocolate cake with chocolate ganache.',
          price: '₱450.00'
        },
        { 
          id: 6, 
          name: 'Cheesecake', 
          category: 'cakes',
          description: 'Creamy New York-style cheesecake with graham cracker crust.',
          price: '₱480.00'
        },
      ];
      
      setProducts(dummyProducts);
      
      // Extract unique categories
      const uniqueCategories = [...new Set(dummyProducts.map(product => product.category))];
      setCategories(uniqueCategories);
      
      // In a real app, you would fetch the header image from your API
      try {
        // This is a placeholder URL - in a real app, you'd fetch from your API or CMS
        // For example purposes, providing a URL to a bakery-themed image
        const headerImageUrl = 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80';
        
        // Check if image exists
        const imageCheck = new Image();
        imageCheck.onload = () => {
          setHeaderImage(headerImageUrl);
          setHeaderImageLoaded(true);
        };
        imageCheck.onerror = () => {
          // Image failed to load, keep headerImage as null
          setHeaderImageLoaded(false);
        };
        imageCheck.src = headerImageUrl;
      } catch (error) {
        console.error('Error loading header image:', error);
        setHeaderImageLoaded(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 pb-24"> {/* Add padding for the fixed header and nav */}
      {/* Products Header with Background Image or SVG Fallback */}
      <div className="relative text-white py-20 overflow-hidden">
        {/* Background: Either an image or SVG fallback */}
        {headerImageLoaded && headerImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(${headerImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(50%)'
            }}
          />
        ) : (
          <BackgroundSVG />
        )}
        
        {/* Content overlay */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Discover our range of freshly baked goods made with premium ingredients
          </motion.p>
        </div>
      </div>
      
      {/* Category Filter */}
      <div className="bg-blue-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium shadow-sm 
                ${selectedCategory === 'all' ? 'bg-navy-800 text-white' : 'bg-white text-navy-800'}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Products
            </motion.button>
            
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium shadow-sm capitalize
                  ${selectedCategory === category ? 'bg-navy-800 text-white' : 'bg-white text-navy-800'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="h-56 overflow-hidden">
                  <div className="w-full h-full transition-transform duration-500 hover:scale-110">
                    <ProductSVG id={product.id} category={product.category} name={product.name} />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-navy-800">{product.name}</h3>
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full capitalize">
                      {product.category}
                    </span>
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
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-4">Custom Orders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Need something special? We also accept custom orders for events, celebrations, or just because.
          </p>
          <motion.button
            className="bg-navy-800 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us for Custom Orders
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Products;