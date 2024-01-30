// ImageModal.js
import { ArrowLeft, ArrowRight, Xmark } from 'iconoir-react';
import React, { useEffect } from 'react';

export const ImageModal = ({
    isOpen,
    onClose,
    images,
    currentImageIndex,
    handlePrev,
    handleNext,
    handleKeyDown,
}) => {
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (isOpen && e.target.classList.contains('bg-opacity-70')) {
                onClose();
            }
        };

        const handleKeyDownEvent = (e) => {
            if (isOpen) {
                if (e.key === 'ArrowLeft') {
                    handlePrev();
                } else if (e.key === 'ArrowRight') {
                    handleNext();
                }
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleKeyDownEvent);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleKeyDownEvent);
        };
    }, [isOpen, onClose, handlePrev, handleNext]);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? 'visible' : 'invisible'
                }`}
            tabIndex={-1}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
            <div className="relative max-w-4xl mx-auto  overflow-hidden shadow-lg p-10">
                <button
                    className="absolute top-0 right-0 text-white text-3`xl focus:outline-none z-10"
                    onClick={onClose}
                >
                    <Xmark />
                </button>
                <img src={images[currentImageIndex]} alt="Selected Image" className="w-full h-400 object-cover mb-4" />
                <button
                    className="absolute top-1/2 left-4 text-white text-3xl focus:outline-none z-10 transform -translate-y-1/2"
                    onClick={handlePrev}
                >
                    <ArrowLeft />
                </button>
                <button
                    className="absolute top-1/2 right-4 text-white text-3xl focus:outline-none z-10 transform -translate-y-1/2"
                    onClick={handleNext}
                >
                    <ArrowRight />
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center text-white z-10">
                    <span className="mr-2 text-xl">{currentImageIndex + 1}</span>
                    <span>/</span>
                    <span className="ml-2 text-xl">{images.length}</span>
                </div>
            </div>
        </div>
    );
};
