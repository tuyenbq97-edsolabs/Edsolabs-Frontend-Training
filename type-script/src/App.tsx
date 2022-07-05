import React from 'react';
import logo from './logo.svg';
import './App.css';
import News from './pages/news';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
