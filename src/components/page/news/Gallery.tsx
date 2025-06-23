
import React from 'react';

const Gallery = () => {
  const imageUrls = [
    "/images/gallery/img-1.webp",
    "/images/gallery/img-2.webp",
    "/images/gallery/img-3.webp",
    "/images/gallery/img-4.webp",
    "/images/gallery/img-5.webp",
    "/images/gallery/img-6.webp"
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6">
      {imageUrls.map((url, index) => (
        <div key={index}>
          <img
            src={url}
            alt={`Gallery image ${index + 1}`}
            className="h-auto max-w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
