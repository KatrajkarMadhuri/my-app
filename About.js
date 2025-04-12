// src/About.js

import React from 'react';
import './styles/about.css';


const About = () => {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Welcome to Pentagon Machine and Tools! Your trusted partner for industrial machinery and tool solutions.</p>
      </header>

      <section className="company-overview">
        <h2>Company Overview</h2>
        <p>
          Pentagon Machine and Tools, established in 2018, has been providing top-notch machinery and tools for industries worldwide. Our mission is to deliver products that are not only reliable and efficient but also cost-effective. Whether you are looking for machinery sales, rentals, or custom tool fabrication, we have you covered.
        </p>
        <p>
          With a focus on quality and customer satisfaction, we aim to support your business with the best equipment and services to help you succeed.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Machine Sales</li>
          <li>Tool Rentals</li>
          <li>Maintenance & Repairs</li>
          <li>Custom Tool Fabrication</li>
          <li>Consultation & Training</li> {/* Added service */}
        </ul>
        <p>We offer end-to-end solutions, from sales to after-sales support, ensuring your machines run smoothly and efficiently.</p>
      </section>

      <section className="our-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality</strong>: We are committed to providing only the highest-quality machinery and tools.</li>
          <li><strong>Innovation</strong>: We continually update our offerings to reflect the latest technological advancements.</li>
          <li><strong>Customer Service</strong>: Our customers are at the center of everything we do, and we strive to exceed their expectations.</li>
          <li><strong>Integrity</strong>: We conduct our business with transparency and honesty, ensuring trust with our clients.</li> {/* Added value */}
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <p>Our team of experienced professionals is dedicated to providing exceptional service and support. From engineers to customer service representatives, we work together to ensure your needs are met.</p>
      </section>

      <footer className="about-us-footer">
        <p>Contact us at: <a href="mailto:info@pentagaon.com">info@pentagaon.com</a></p>
        <p>Follow us on social media for updates and offers:</p>
        <ul className="social-links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </footer>
    </div>
  );
};


export default About;
