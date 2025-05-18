import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Location = () => {
  // Dummy store locations
  const locations = [
    {
      id: 1,
      name: 'Tarlac City Main Branch',
      address: '123 Bakery Street, Tarlac City',
      phone: '(045) 123-4567',
      hours: 'Monday - Sunday: 6:00 AM - 8:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241412.2158102739!2d120.44427861289241!3d15.483761639235905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396c33375f3d7d1%3A0x5b9a82561d8af14f!2sTarlac%20City%2C%20Tarlac!5e0!3m2!1sen!2sph!4v1651827364185!5m2!1sen!2sph',
    },
    {
      id: 2,
      name: 'SM Tarlac Branch',
      address: 'SM City Tarlac, San Roque, Tarlac City',
      phone: '(045) 987-6543',
      hours: 'Monday - Sunday: 9:00 AM - 9:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.9741880181434!2d120.59305301484269!3d15.64602588922599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396c90f89b9e72d%3A0x4c3cc5d3c6d3f650!2sSM%20City%20Tarlac!5e0!3m2!1sen!2sph!4v1651827427389!5m2!1sen!2sph',
    },
    {
      id: 3,
      name: 'Concepcion Branch',
      address: '456 Main Street, Concepcion, Tarlac',
      phone: '(045) 765-4321',
      hours: 'Monday - Sunday: 6:30 AM - 7:30 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61471.88779663065!2d120.62769217910158!3d15.329553800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396d3ed2b4fbd57%3A0x86efa5d2d1aea633!2sConcepcion%2C%20Tarlac!5e0!3m2!1sen!2sph!4v1651827487389!5m2!1sen!2sph',
    },
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 pb-24">
      {/* Location Header */}
      <div className="bg-gradient-to-r from-navy-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Locations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Visit us at any of our bakeshop branches across Tarlac
          </motion.p>
        </div>
      </div>
      
      {/* Locations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Find Us Nearby</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have multiple locations to serve you better
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-64 w-full">
                  <iframe 
                    src={location.mapUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${location.name}`}
                  ></iframe>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-800 mb-2">{location.name}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-start">
                      <i className="fas fa-map-marker-alt text-blue-500 mt-1 mr-3 w-5 text-center"></i>
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-phone-alt text-blue-500 mt-1 mr-3 w-5 text-center"></i>
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-clock text-blue-500 mt-1 mr-3 w-5 text-center"></i>
                      <span>{location.hours}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <motion.a
                      href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-800 font-medium flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      Get Directions
                      <i className="fas fa-chevron-right ml-2 text-sm"></i>
                    </motion.a>
                    
                    <motion.button
                      className="bg-navy-800 text-white px-4 py-2 rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Call Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-navy-800 to-blue-900 text-white p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-phone-alt mt-1 mr-4 w-6 text-center text-blue-300"></i>
                    <div>
                      <p className="font-bold mb-1">Phone</p>
                      <p>(045) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-envelope mt-1 mr-4 w-6 text-center text-blue-300"></i>
                    <div>
                      <p className="font-bold mb-1">Email</p>
                      <p>info@eljinbwsuperbakeshop.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-clock mt-1 mr-4 w-6 text-center text-blue-300"></i>
                    <div>
                      <p className="font-bold mb-1">Working Hours</p>
                      <p>Monday - Sunday: 6:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-navy-800 mb-6">Send us a Message</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="subject"
                      type="text"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                      id="message"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <motion.button
                      type="submit"
                      className="w-full bg-navy-800 text-white py-3 rounded-lg font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default Location;