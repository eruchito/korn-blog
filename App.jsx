// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Discography from './components/Discography';
import Gallery from './components/Gallery';
import Concerts from './components/Concerts';
import './styles/styles.scss';
import './styles/Concerts.scss';
import './styles/Discography.scss';
import './styles/Gallery.scss';
import './styles/Home.scss';
import './styles/Members.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/concerts" element={<Concerts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
