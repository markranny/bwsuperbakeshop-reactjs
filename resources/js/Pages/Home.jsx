import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Hero Section Component
const Hero = () => {
  return (
    <div className="relative h-screen flex items-center bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Background pattern */}
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <pattern id="bakeryPattern" patternUnits="userSpaceOnUse" width="50" height="50">
            {/* Bread outline */}
            <path d="M10,25 Q25,15 40,25" fill="none" stroke="#1E40AF" strokeWidth="0.5"/>
            
            {/* Croissant shape */}
            <path d="M5,40 Q10,30 15,35 T25,40" fill="none" stroke="#1E40AF" strokeWidth="0.5"/>
            
            {/* Wheat stalk */}
            <path d="M35,10 L35,20" stroke="#1E40AF" strokeWidth="0.5"/>
            <path d="M33,12 L35,10" stroke="#1E40AF" strokeWidth="0.5"/>
            <path d="M37,12 L35,10" stroke="#1E40AF" strokeWidth="0.5"/>
            <path d="M33,15 L35,13" stroke="#1E40AF" strokeWidth="0.5"/>
            <path d="M37,15 L35,13" stroke="#1E40AF" strokeWidth="0.5"/>
            <path d="M33,18 L35,16" stroke="#1E40AF" strokeWidth="0.5"/>
            <path d="M37,18 L35,16" stroke="#1E40AF" strokeWidth="0.5"/>
            
            {/* Rolling pin */}
            <rect x="40" y="35" width="8" height="2" rx="1" stroke="#1E40AF" strokeWidth="0.5" fill="none"/>
            <line x1="42" y1="33" x2="42" y2="39" stroke="#1E40AF" strokeWidth="0.5"/>
            <line x1="46" y1="33" x2="46" y2="39" stroke="#1E40AF" strokeWidth="0.5"/>
            
            {/* Small flour dusting dots */}
            <circle cx="10" cy="10" r="0.8" fill="#1E40AF" opacity="0.5"/>
            <circle cx="15" cy="5" r="0.6" fill="#1E40AF" opacity="0.5"/>
            <circle cx="25" cy="15" r="0.7" fill="#1E40AF" opacity="0.5"/>
            <circle cx="40" cy="5" r="0.5" fill="#1E40AF" opacity="0.5"/>
            <circle cx="45" cy="45" r="0.6" fill="#1E40AF" opacity="0.5"/>
            <circle cx="5" cy="45" r="0.7" fill="#1E40AF" opacity="0.5"/>
            </pattern>
        </defs>
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
              Taste That <br/>
              <span className="text-blue-500">Wows Every Sense!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Irresistible treats that make moments magical! Premium ingredients, exceptional flavors.
            </p>
            <motion.button
              className="bg-navy-800 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#1a3a5f" }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Delights Now
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Hero Image - replacing SVG */}
            <img 
              src="/images/home/sourdough.jpg" 
              alt="Fresh baked bread" 
              className="rounded-lg shadow-xl mx-auto object-cover"
            />
            
            {/* Decorative elements */}
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
      name: 'Premium Artisan Bread', 
      description: 'Crispy outside, heavenly inside! Our signature bread will elevate any meal.',
      price: '₱120.00',
      image: '/images/home/sourdough.jpg'
    },
    { 
      id: 2, 
      name: 'Refreshing Coolers', 
      description: 'Beat the heat with our ice-cold signature coolers! Pure refreshment in every sip.',
      price: '₱85.00',
      image: '/images/home/croissant.jpg'
    },
    { 
      id: 3, 
      name: 'Sizzling HotBites', 
      description: 'Savory goodness that packs a flavor punch! Perfect for on-the-go hunger busters.',
      price: '₱75.00',
      image: '/images/home/muffin.jpg'
    },
  ];
  
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
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Crave-Worthy Bestsellers</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            One bite and you're hooked! Our most addictive creations that keep fans coming back.
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
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
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
                    Reserve Now
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Quick! Reserve yours for 30 mins guaranteed pickup
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
            Explore All Temptations
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
      name: 'Mark Ranny Aglapay',
      role: 'Loyal Fan',
      text: 'Their premium bread is life-changing! And those coolers? Absolute perfection on hot days!',
      image: '/images/home/customer-maria.jpg'
    },
    {
      id: 2,
      name: 'Mark Ranny Aglapay',
      role: 'Food Enthusiast',
      text: 'SuperBakeshops hopia and cakes are unbeatable! Worth every centavo and the extra gym time',
      image: '/images/home/customer-juan.jpg'
    },
    {
      id: 3,
      name: 'Mark Ranny Aglapay',
      role: 'Health Warrior',
      text: 'Their Healthwise options let me indulge without guilt. Finally, treats that love me back!',
      image: '/images/home/customer-sofia.jpg'
    },
  ];
  
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Taste Believers Speak</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our raving fans who can't get enough!
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
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-400 object-cover"
                />
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
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Our Sweet Secret</h2>
              <div className="w-24 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-600 mb-4">
                From ice cream that makes memories to pastries that spark joy, we craft each bite with premium ingredients and an extra sprinkle of passion.
              </p>
              <p className="text-gray-600 mb-6">
                Whether it's our legendary hopia or our decadent cakes, we're not just baking—we're creating moments that matter.
              </p>
              <motion.button
                className="bg-navy-800 text-white px-6 py-3 rounded-full text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Magic
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Baking Process Image - replacing SVG */}
              <img 
                src="/images/home/baking-process.jpg" 
                alt="Our baking process" 
                className="rounded-lg shadow-xl w-full"
              />
              
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
            Your Tastebuds Are Calling. Will You Answer?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-blue-100 max-w-2xl mx-auto mb-8"
          >
            Skip the ordinary! Visit SuperBakeshop today or order online for a flavor revolution.
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
              Find Flavor HQ
            </motion.button>
            
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Order Happiness
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;