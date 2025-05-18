import React from 'react';
import { Link } from 'react-router-dom';
import BakeshopLogo from '../UI/BakeshopLogo';

const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white pt-16 pb-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <BakeshopLogo size="sm" />
            </div>
            <h3 className="text-xl font-bold mb-2">ELJIN BW SUPERBAKESHOP</h3>
            <p className="text-gray-300 text-center md:text-left">
              Providing delicious baked goods since 2010.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-center md:text-left">Quick Links</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link to="/" className="hover:text-blue-300 transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-blue-300 transition">Products</Link></li>
              <li><Link to="/about" className="hover:text-blue-300 transition">About Us</Link></li>
              <li><Link to="/franchise" className="hover:text-blue-300 transition">Franchise</Link></li>
              <li><Link to="/career" className="hover:text-blue-300 transition">Career</Link></li>
              <li><Link to="/location" className="hover:text-blue-300 transition">Our Location</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-center md:text-left">Contact Us</h4>
            <div className="space-y-2 text-center md:text-left">
              <p>123 Bakery Street, Tarlac City</p>
              <p>Phone: (045) 123-4567</p>
              <p>Email: info@eljinbwsuperbakeshop.com</p>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-2xl hover:text-blue-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl hover:text-blue-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl hover:text-blue-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ELJIN BW SUPERBAKESHOP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;