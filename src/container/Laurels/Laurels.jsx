import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'; 
import './Laurels.css';

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_info-2'>
      <SubHeading title="Let's Party!"/>
      <h1 className='headtext__cormorant'>Host Your Event at Redlight</h1>

      <div className='app__event-content'>
        <div className='app__event-content_text'>
          <p className='p__opensans'>Whether you're celebrating with friends or hosting a professional event, Redlight Redlight is available for your needs!</p>
          <p className='p__opensans'>Contact us for information on public and private event hosting</p>
        </div>
        <p className='p__opensans'></p>
      </div>
    </div>
    


    <div className='app__wrapper_img'>
      <img src={images.brewpub} alt="header-img"/>
    </div>

  </div>
);

export default Laurels;
