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
      <a href="https://order.toasttab.com/online/redlight-redlight-2810-corrine-dr?fbclid=PAZXh0bgNhZW0CMTEAAaa4MjzTzwtrdALaQ_P7eaWbhOdZklbClWjmH877AKwW2tIftE6z2GoGf1s_aem_Aca8TsetrcAOOYTxxo6r3aGacxkJ4aFKuu8zf9V5nZRWmuLyjgr4I_BmtBleHPz63BDML70godTZblPiPwDSkZYv">
        <button type='button' className='custom__button'>Order Online</button>
      </a>
    </div>
    
    <div className='app__wrapper_img'>
      <img src={images.mural} alt="header-img"/>
    </div>
  </div>
);

export default Header;
