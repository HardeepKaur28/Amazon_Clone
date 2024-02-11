// Footer.js

import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="amazon-footer">
      <div className="footer-column">
        <h4>Get to Know Us</h4>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Science</li>
         </ul>
      </div>
      <div className="footer-column">
        <h4>Connect with Us</h4>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
         </ul>
      </div>
      <div className="footer-column">
        <h4>Make Money with us</h4>
        <ul>
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li>Amazon Global Selling</li>
          <li>Become an Affiliate</li>
          <li>Fulfilent by Amazon</li>

         </ul>
      </div>
      <div className="footer-column">
        <h4>Let Us Help You</h4>
        <ul>
          <li>Covid-19 and Amazon</li>
          <li>Your Account</li>
          <li>Return Center</li>
          <li>100% Purchase Protection</li>
          <li>Amazon App Download</li>
          <li>Help</li>
          
         </ul>
      </div>

      
     </footer>
  );
};

export default Footer;