import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
    {
      src: '/images/image1.png',
      link: '/pet',
    },
    {
      src: '/images/image2.png',
      link: '/board',
    },
    {
      src: '/images/image3.png',
      link: '/faq',
    },
  ];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      {images.map((img, index) => (
        <a
          key={index}
          href={img.link}
          className={`slide ${index === current ? 'active' : ''}`}
        >
          <img src={img.src} alt={`slide-${index}`} />
        </a>
      ))}

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;