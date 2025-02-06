import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Lander from './Lander';
import PremiumLexWebsite from './PremiumLexWebsite';
import ProjectShowcase from './ProjectShowcase';
import AboutUs from './AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PremiumLexWebsite />} />
        <Route path="/projects" element={<ProjectShowcase />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
