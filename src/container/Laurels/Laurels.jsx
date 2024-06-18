import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'; 
import './Laurels.css';

const Laurels = () => (
  <div className='app__events app__wrapper section__padding' id='events'>
    <div className='app__wrapper_info-2'>
      <SubHeading title="Event Hosting!"/>
      <h1 className='headtext__cormorant'>Celebrate For Any Reason</h1>

      <div className='app__event-content'>
        <div className='app__event-content_text'>
          <p className='p__opensans'>Our XXXX square foot venue can accommodate up to 120 people and be transformed into an idealistic setting for any private event needs. We can help you plan a birthday party, reunion, rehearsal dinner or graduation event!</p>
          <p className='p__opensans'>- Plan your menu unique to your party needs with our Chef & Event Coordinator</p>
          <p className='p__opensans'>- Please reach out to <a href="mailto: redlight.redlight@gmail.com" style={{color: 'var(--color-golden)'}}>redlight.redlight@gmail.com</a> for further inquiries</p>
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
