import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import "./imageCarousel.css"

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              transform: `translateX(${-100 * currentImageIndex}%)`,
            }}
          />
        ))}
      </div>
      <div className="prev carousel-button" onClick={prevSlide}>
        <FaChevronLeft />
      </div>
      <div className="next carousel-button" onClick={nextSlide}>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default ImageCarousel;
