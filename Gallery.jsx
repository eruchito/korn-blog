// Gallery.jsx

import React from 'react';

const Gallery = () => {
  // Array con URLs de imágenes representativas de Korn
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    // Añade más URLs de imágenes según sea necesario
  ];

  return (
    <div className="gallery">
      <h2>Galería de Korn</h2>
      <div className="image-grid">
        {images.map((imageUrl, index) => (
          <div key={index} className="image-container">
            <img src={imageUrl} alt={`Korn Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
