import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h1 className='app__navbar-h1'>Redlight Redlight Brewing</h1>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Specials</a></li>
        <li className='p__opensans'><a href="#events">Events</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className='app__navbar-hours'>
        <a href="#hours" className='p__opensans'>Hours / Location</a>
        <div />
        <a href="https://order.toasttab.com/menu-and-pay/redlight-redlight-2810-corrine-dr/welcome" className='p__opensans'>Menu</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen_links'>
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#about">About</a></li>
            <li className='p__opensans'><a href="#menu">Specials</a></li>
            <li className='p__opensans'><a href="#events">Events</a></li>
            <li className='p__opensans'><a href="#contact">Contact</a></li>
          </ul>
        </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
