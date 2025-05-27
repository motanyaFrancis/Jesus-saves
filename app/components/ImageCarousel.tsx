'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(goToNext, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, goToNext]);

  if (images.length === 0) {
    return (
      <div className="flex justify-center items-center h-48 bg-gray-100 rounded-lg text-gray-500">
        No images to display in carousel.
      </div>
    );
  }

  return (
    <section className="relative p-3">
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full shadow-md hover:bg-white/50"
              aria-label="Previous image"
            >
              <svg
                className="w-8 h-8 text-gray-200 font-bold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full shadow-md hover:bg-white/50"
              aria-label="Next image"
            >
              <svg
                className="w-8 h-8 text-gray-200 font-bold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 w-3 rounded-full ${currentIndex === idx ? 'bg-white' : 'bg-gray-400 bg-opacity-75'}`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageCarousel;
