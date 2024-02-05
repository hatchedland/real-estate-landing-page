import React, { useState } from 'react';

export const ZoomableModal = ({ image, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 ${isZoomed ? 'overflow-hidden' : ''}`}
      onClick={onClose}
    >
      <div
        className="relative max-w-full max-h-full cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white text-lg cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
        <img
          src={image}
          alt="Zoomable Image"
          className={`w-full h-full object-contain ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'} transition-transform duration-300 transform ${isZoomed ? 'scale-150' : ''}`}
          onClick={toggleZoom}
        />
      </div>
    </div>
  );
};