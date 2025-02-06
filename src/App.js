import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Lander from './Lander';
import PremiumLexWebsite from './PremiumLexWebsite';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PremiumLexWebsite />} />
      </Routes>
    </Router>
  );
}

export default App;
