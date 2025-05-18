import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Franchise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 pb-24">
      {/* Franchise Header */}
      <div className="bg-gradient-to-r from-navy-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Franchise Opportunities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Join the Eljin BW SuperBakeshop family and start your own successful bakery
          </motion.p>
        </div>
      </div>
      
      {/* Why Franchise With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Why Franchise With Us?</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Eljin BW SuperBakeshop offers a proven business model with comprehensive support
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Proven Model</h3>
              <p className="text-gray-600">
                Join a successful brand with over 10 years of experience and a proven track record.
              </p>
            </motion.div>
            
            {/* Benefit 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Comprehensive Training</h3>
              <p className="text-gray-600">
                Receive extensive training on baking techniques, operations, and business management.
              </p>
            </motion.div>
            
            {/* Benefit 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Our dedicated support team assists with marketing, operations, and supply chain.
              </p>
            </motion.div>
            
            {/* Benefit 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Brand Recognition</h3>
              <p className="text-gray-600">
                Leverage our established brand reputation and loyal customer base.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Franchise Process */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Franchise Process</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your journey to becoming an Eljin BW SuperBakeshop franchisee
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center mb-12"
            >
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
                1
              </div>
              <div className="hidden md:block w-24 h-1 bg-navy-800 mx-4"></div>
              <div className="md:flex-1 mt-4 md:mt-0 text-center md:text-left">
                <h3 className="text-xl font-bold text-navy-800 mb-2">Application</h3>
                <p className="text-gray-600">
                  Fill out our franchise application form and provide background information about your business experience.
                </p>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center mb-12"
            >
              <div className="order-1 md:order-2 w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
                2
              </div>
              <div className="hidden md:block order-3 md:order-1 w-24 h-1 bg-navy-800 mx-4"></div>
              <div className="order-2 md:order-3 md:flex-1 mt-4 md:mt-0 text-center md:text-right">
                <h3 className="text-xl font-bold text-navy-800 mb-2">Initial Meeting</h3>
                <p className="text-gray-600">
                  Meet with our franchise team to discuss your goals, our business model, and answer your questions.
                </p>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center mb-12"
            >
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
                3
              </div>
              <div className="hidden md:block w-24 h-1 bg-navy-800 mx-4"></div>
              <div className="md:flex-1 mt-4 md:mt-0 text-center md:text-left">
                <h3 className="text-xl font-bold text-navy-800 mb-2">Location Selection</h3>
                <p className="text-gray-600">
                  Work with our team to find the perfect location for your bakeshop franchise.
                </p>
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center mb-12"
            >
              <div className="order-1 md:order-2 w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
                4
              </div>
              <div className="hidden md:block order-3 md:order-1 w-24 h-1 bg-navy-800 mx-4"></div>
              <div className="order-2 md:order-3 md:flex-1 mt-4 md:mt-0 text-center md:text-right">
                <h3 className="text-xl font-bold text-navy-800 mb-2">Training Program</h3>
                <p className="text-gray-600">
                  Complete our comprehensive training program covering baking techniques, operations, and business management.
                </p>
              </div>
            </motion.div>
            
            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
                5
              </div>
              <div className="hidden md:block w-24 h-1 bg-navy-800 mx-4"></div>
              <div className="md:flex-1 mt-4 md:mt-0 text-center md:text-left">
                <h3 className="text-xl font-bold text-navy-800 mb-2">Grand Opening</h3>
                <p className="text-gray-600">
                  Launch your Eljin BW SuperBakeshop franchise with our marketing support and ongoing assistance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Investment Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Investment Details</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A transparent overview of what's required to start your franchise
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto bg-blue-50 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-navy-800 py-6 px-6 text-white text-center">
              <h3 className="text-2xl font-bold">Franchise Investment Package</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-navy-800 mb-4">Initial Investment</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Franchise fee: ₱500,000</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Equipment and fixtures: ₱800,000 - ₱1,200,000</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Initial inventory: ₱100,000 - ₱150,000</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Leasehold improvements: Varies by location</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Working capital: ₱300,000 - ₱500,000</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-navy-800 mb-4">Ongoing Fees</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Royalty fee: 5% of gross sales</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Marketing contribution: 2% of gross sales</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Technology fee: ₱5,000 per month</span>
                    </li>
                  </ul>
                  
                  <h4 className="text-lg font-bold text-navy-800 mt-8 mb-4">Term of Agreement</h4>
                  <p className="text-gray-600">5 years with option to renew for additional 5-year terms</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 italic mb-6">
                  Note: This is an estimate of the investment required. Actual costs may vary based on location, size, and other factors.
                </p>
                <motion.button
                  className="bg-navy-800 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Franchise Information
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-navy-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Bakeshop Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-blue-100 max-w-2xl mx-auto mb-8"
          >
            Take the first step towards owning your own Eljin BW SuperBakeshop franchise today.
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
              Download Franchise Brochure
            </motion.button>
            
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;