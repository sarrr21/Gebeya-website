import { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className=''>
      <FaArrowAltCircleLeft className='absolute top-1/2 left-32 cursor-pointer text-white rounded-full ' onClick={prevSlide} />
      <FaArrowAltCircleRight className=' absolute top-1/2 right-32 cursor-pointer  text-white rounded-full' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='{slide.image}' className=' min-w-full h-60
              ' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;