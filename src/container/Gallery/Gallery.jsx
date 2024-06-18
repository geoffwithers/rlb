import React from 'react';
 
import { SubHeading } from '../../components';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05];

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery app__bg' id='specials'>
      <div className='app__gallery-content'>
        <SubHeading title="The Good Stuff" />
        <h1 className='headtext__cormorant'>Daily Specials</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>Check out our specials and constantly rotating Happy Hour deals!</p>
        {/* <button type='button' className='custom__button'>View More</button> */}
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />
              {/* <div className='app__gallery-title'>Happy Hour</div> */}
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
      
    </div>
  );

}
export default Gallery;
