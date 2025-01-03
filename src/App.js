import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function Navbar() {
  return (
    <nav>
      <Link to="/">Mazen Development</Link>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Mazen Development. All rights
        reserved.
      </p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
