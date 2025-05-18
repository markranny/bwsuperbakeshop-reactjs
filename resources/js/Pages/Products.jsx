import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
          price: '₱120.00',
          image: '/images/products/bread-sourdough.jpg'
        },
        { 
          id: 2, 
          name: 'Whole Wheat Loaf', 
          category: 'breads',
          description: 'Nutritious whole wheat bread, perfect for sandwiches.',
          price: '₱95.00',
          image: '/images/products/bread-wholewheat.jpg'
        },
        { 
          id: 3, 
          name: 'Chocolate Croissant', 
          category: 'pastries',
          description: 'Buttery layers filled with rich chocolate.',
          price: '₱85.00',
          image: '/images/products/pastry-croissant.jpg'
        },
        { 
          id: 4, 
          name: 'Blueberry Muffin', 
          category: 'pastries',
          description: 'Moist muffin bursting with fresh blueberries.',
          price: '₱75.00',
          image: '/images/products/pastry-muffin.jpg'
        },
        { 
          id: 5, 
          name: 'Chocolate Cake', 
          category: 'cakes',
          description: 'Rich and moist chocolate cake with chocolate ganache.',
          price: '₱450.00',
          image: '/images/products/cake-chocolate.jpg'
        },
        { 
          id: 6, 
          name: 'Cheesecake', 
          category: 'cakes',
          description: 'Creamy New York-style cheesecake with graham cracker crust.',
          price: '₱480.00',
          image: '/images/products/cake-cheesecake.jpg'
        },
      ];
      
      setProducts(dummyProducts);
      
      // Extract unique categories
      const uniqueCategories = [...new Set(dummyProducts.map(product => product.category))];
      setCategories(uniqueCategories);
      
      // Load the header image
      try {
        const headerImageUrl = '/images/products/header-bg.jpg';
        
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
      {/* Products Header with Background Image - UPDATED with image instead of solid blue */}
            <div className="relative text-white py-20 overflow-hidden">
            {/* Background image - replaces solid navy blue background */}
            <img 
                src="/images/products/header-bg.jpg" 
                alt="Our products" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-navy-900 bg-opacity-50"></div>
            
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
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
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
      
      {/* Featured Products Section - New Addition */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Featured This Week</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't miss our special featured items, available for a limited time
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="h-full">
                  <img 
                    src="/images/products/featured-product.jpg" 
                    alt="Special Cherry Danish" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-xs font-bold bg-red-100 text-red-600 px-3 py-1 rounded-full inline-block mb-4">
                    LIMITED TIME OFFER
                  </span>
                  <h3 className="text-2xl font-bold text-navy-800 mb-2">Special Cherry Danish</h3>
                  <p className="text-gray-600 mb-4">
                    Our delicious cherry danish made with seasonal cherries and our signature flaky pastry.
                    Available only for this week!
                  </p>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-bold text-blue-600">₱95.00</span>
                    <span className="text-sm line-through text-gray-400">₱115.00</span>
                  </div>
                  <motion.button
                    className="bg-navy-800 text-white px-6 py-3 rounded-full text-lg font-medium w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Reserve Now
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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