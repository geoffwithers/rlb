import React from 'react';

import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Welcome to Redlight" />
      <h1 className='app__header-h1'>Passion for brewing and people</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>Serving the community since 2005</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    
    <div className='app__wrapper_img'>
      <img src={images.mural} alt="header-img"/>
    </div>
  </div>
);

export default Header;
