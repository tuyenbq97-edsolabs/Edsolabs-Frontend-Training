import './App.css';
import React from 'react';
import Home from '../src/pages/Home';
import Footer from './container/Footer';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main position-relative d-flex flex-column justify-content-center align-items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
