import React from 'react';
import './App.css';

import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main d-flex position-relative justify-content-center align-items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
