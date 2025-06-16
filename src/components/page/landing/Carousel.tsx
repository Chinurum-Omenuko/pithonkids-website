'use client';

import { useState, useEffect } from 'react';

interface CarouselItem {
  id: number;
  imageUrl: string;
  altText: string;
}

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      imageUrl: '/images/alltools.webp',
      altText: 'First slide'
    },
    {
      id: 2,
      imageUrl: '/images/a-class.webm',
      altText: 'Second slide'
    },
    {
      id: 3,
      imageUrl: '/images/dice.webm',
      altText: 'Third slide'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);


  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slides */}
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {item.imageUrl.endsWith('.webm') ? (
            <video
              src={item.imageUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              src={item.imageUrl}
              alt={item.altText}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}