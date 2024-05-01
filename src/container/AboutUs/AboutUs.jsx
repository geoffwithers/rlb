import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center-aboutus section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      {/* <img src={images.RL} alt="RL letters" /> */}
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Located in Orlando, FL, Redlight Redlight is open to all and ready to serve our fine selection of food and drinks. We are honored and blessed to be able to serve to our loyal patrons and community, and we hope you'll join us soon and stay awhile. We would love to share our house brewed beers or coveted Trappist ales & lambic collection showcased in our cooler. </p>
        {/* <button type='button' className='custom__button'>Know More</button> */}
      </div>

      <div className='app__aboutus-content_glasses'>
        <img src={images.glasses} alt='glasses' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Redlight Redlight comes from a humble beginning in a dimly lit bar above a bakery in 2005. There was no sign, only a red light that flooded the stairway that led to our tiny space of less than 1,000 square feet. It was in this small space that our commitment to sharing our passion with our community began, and was able to grow into the full brewery and pub we have today. </p>
        {/* <button type='button' className='custom__button'>Know More</button> */}
      </div>

    </div>
  </div>
);

export default AboutUs;
