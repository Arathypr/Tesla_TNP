import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full overflow-hidden  ">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="min-w-full" key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
      >
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
