// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Notfound from './components/notfound/notfound';
import './App.css';
import './assets/styles/style.css'; // Ensure this path is correct for your style.css

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleContactClick = () => {
        window.location.href = 'mailto:kobe4smallman@gmail.com';
    };

    return (
        <Router>
            <Header />
            <div className={`contact-sidebar ${isSidebarOpen ? '' : 'hidden'}`}>
                <div className="contact-info">
                    <i className="fas fa-user icon-name"></i>
                    <span>Kobe Smallman</span>
                </div>
                <div className="contact-info">
                    <i className="fas fa-map-marker-alt icon-location"></i>
                    <span>Lethbridge, AB</span>
                </div>
                <div className="contact-info">
                    <i className="fas fa-envelope icon-email"></i>
                    <span>kobe4smallman@gmail.com</span>
                </div>
                <div className="contact-info">
                    <i className="fas fa-phone icon-phone"></i>
                    <span>5873701108</span>
                </div>
                <button className="contact-button" onClick={handleContactClick}>Contact Me</button>
                <a href={`${process.env.PUBLIC_URL}/koberesume.pdf`} download="Kobesresume.pdf" className="download-resume-link">
                    Download Resume
                </a>
            </div>
            <button
                className={`contact-toggle ${isSidebarOpen ? '' : 'hidden'}`}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-label="Toggle Contact Information"
            >
                {isSidebarOpen ? '>' : '<'}
            </button>
            <div className={`page-container ${isSidebarOpen ? '' : 'sidebar-hidden'}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
