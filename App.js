// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Navbar from './Navbar'; // Import the Navbar component
import Home from './Home'; // Import Home component
import About from './About'; // Import About component (you'll create it)
import Services from './Services'; // Import Services component (you'll create it)
import Contact from './Contact'; // Import Contact component (you'll create it)
import AddMachine from './AddMachine';
import FeedbackForm from './FeedbackForm';

function App() {
  return (
    <Router>
      <Navbar /> {/* The Navbar will be displayed on all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/about" element={<About />} /> {/* About page route */}
        <Route path="/services" element={<Services />} /> {/* Services page route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/addMachine" element={<AddMachine/>}/> 
        <Route path="feedbackform" element={<FeedbackForm/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
