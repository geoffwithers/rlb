import React from 'react';

// import { FooterOverlay } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding app__bg' id='contact'>
    {/* <FooterOverlay /> */}

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>2810 Corrine Dr, Orlando, FL, 32803</p>
        <p className='p__opensans'>redlight.redlight@gmail.com</p>
        <p className='p__opensans'>407-893-9832</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer logo"/>
        <p className='p__opensans'>Follow us on socials!</p>
        <div className='app__footer-links_icons'>
          <a href="https://www.facebook.com/redlightredlight/"><FiFacebook /></a>
          {/* <FiTwitter /> */}
          <a href="https://www.instagram.com/redlightredlight/?hl=en"><FiInstagram /></a>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday/Wednesday/Thursday:</p>
          <p className='p__opensans'>3-10</p>
          <p className='p__opensans'>Friday</p>
          <p className='p__opensans'>12-11</p>
          <p className='p__opensans'>Saturday</p>
          <p className='p__opensans'>11-11</p>
          <p className='p__opensans'>Sunday</p>
          <p className='p__opensans'>11-8</p>
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
