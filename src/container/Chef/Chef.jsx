import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__kitchen app__wrapper section__padding' id='kitchen'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
       <img src={images.wall} alt='bar seating' />
    </div>

    <div className='app__wrapper_info-2'>
      <SubHeading title="Who's Hungry?"/>
      <h1 className='headtext__cormorant'>We've Got You Covered</h1>

      <div className='app__kitchen-content'>
        <div className='app__kitchen-content_text'>
          <p className='p__opensans'>Share plates with friends or come alone and sit at the bar. Created and operated by Chef Jes Tantalo, our menu focuses on food that feels like a hug while highlighting Florida seafood and seasonal produce.</p>
          <p className='p__opensans'>Join us for dinner anytime Wednesday-Saturday from 5PM-9PM!</p>

        </div>
        <p className='p__opensans'></p>
      </div>
    </div>
  </div>
);

export default Chef;
