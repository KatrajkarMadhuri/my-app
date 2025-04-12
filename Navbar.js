// src/Navbar.js

import React from 'react'; // Import React
import './Navbar.css'; // Import the CSS file for styling the navbar

// Navbar functional component
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/addMachine">AddMachine</a>    </li>
        <li><a href="feedbackform">FeedBackForm</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; // Export the component so it can be used elsewhere
