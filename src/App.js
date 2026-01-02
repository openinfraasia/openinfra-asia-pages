import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Landing Page Components
import Header from './components/landing/Header';
import Hero from './components/landing/Hero';
import About from './components/landing/About';
import Events from './components/landing/Events';
import JoinCommunity from './components/landing/JoinCommunity';
import Footer from './components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#161616]">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <JoinCommunity />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
