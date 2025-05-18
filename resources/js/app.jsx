import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import CircularNavigation from './Components/Layout/CircularNavigation';

// Page Components
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import Franchise from './Pages/Franchise';
import Career from './Pages/Career';
import Location from './Pages/Location';

// Auth Pages (from Laravel Breeze)
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/career" element={<Career />} />
            <Route path="/location" element={<Location />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        
        <CircularNavigation />
        <Footer />
      </div>
    </Router>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);