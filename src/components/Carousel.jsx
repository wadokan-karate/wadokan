import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Logo from '../assets/img/SlideHome/Foto1.png';
import LogoName from '../assets/img/SlideHome/Foto2.png';
import Equipation from '../assets/img/SlideHome/Foto3.png';
import CintoBlack from '../assets/img/SlideHome/Foto5.png';
import CintoYellow from '../assets/img/SlideHome/Foto4.png';
// import PalaciosDojo from '../assets/img/SlideHome/PalaciosDojo.jpg';



function Carousel() {
  const slides = [

    {
      url: CintoBlack,
    },
    {
      url: LogoName,
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
    <div className=' CarouselBox max-w-[1400px] h-[480px] w-full m-0 '>
      
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=' shadow-xl w-full h-[90%] bg-center bg-cover duration-300' >
      </div>

      {/* Left Arrow */}
       <div className=' group-hover:block bg-grey absolute top-[43%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
       </div>

      {/* Right Arrow */}
        <div className=' bg-grey  group-hover:block absolute top-[43%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
           <BsChevronCompactRight onClick={nextSlide} size={20} />
        </div>
        <div className='flex top-4 justify-center'>
           {slides.map((slide, slideIndex) => (
        <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer' >
            <RxDotFilled />
    </div>

        ))}
      </div>
    </div>
  );
}

export default Carousel;