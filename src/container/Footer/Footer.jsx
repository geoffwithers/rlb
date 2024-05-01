import React from 'react';

// import { FooterOverlay } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    {/* <FooterOverlay /> */}

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>2810 Corrine Dr, Orlando, FL, 32803</p>
        <p className='p__opensans'>407-893-9832</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer logo"/>
        <p className='p__opensans'>Inspirational Quote Here</p>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday/Wednesday/Thursday:</p>
          <p className='p__opensans'>3-10 PM</p>
          <p className='p__opensans'>Friday/Saturday:</p>
          <p className='p__opensans'>12PM-12AM</p>
          <p className='p__opensans'>Sunday</p>
          <p className='p__opensans'>12-8 PM</p>
          <p className='p__opensans'>Tuesday:</p>
          <p className='p__opensans'>Closed</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Redlight Redlight. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
