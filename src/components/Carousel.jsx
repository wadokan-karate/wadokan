import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Logo from '../img/SlideHome/Foto1.png';
import LogoName from '../img/SlideHome/Foto2.png';
import Equipation from '../img/SlideHome/Foto3.png';
import CintoBlack from '../img/SlideHome/Foto5.png';
import CintoYellow from '../img/SlideHome/Foto4.png';



function Carousel() {
  const slides = [
    {
      url: LogoName,
    },
    {
      url: CintoBlack,
    },
    {
      url: Equipation,
    },

    {
        url: Logo,
    },
    
    {
        url: CintoYellow,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=' max-w-[1400px] h-[780px] w-full m-0 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-[45%] bg-center bg-cover duration-300' >

      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[23%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[23%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={20} />
      </div>
      <div className='flex top-4 justify-center'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;