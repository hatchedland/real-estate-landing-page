// Gallery.js
import React, { useState } from 'react';
import { PageTitle } from '../components/title/PageTitle';
import { SectionTitle } from '../components/title/SectionTitle';
import { ImageModal } from '../components/gallery/ImageModal';

export const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);



    const images = [
        'https://source.unsplash.com/random/800x600?1',
        'https://source.unsplash.com/random/800x600?2',
        'https://source.unsplash.com/random/800x600?3',
        'https://source.unsplash.com/random/800x600?4',
        'https://source.unsplash.com/random/800x600?5',
        'https://source.unsplash.com/random/800x600?6',
    ];


    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImageIndex(null);
    };

    const handlePrev = () => {
        if (selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    const handleNext = () => {
        if (selectedImageIndex < images.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            handlePrev();
        } else if (e.key === 'ArrowRight') {
            handleNext();
        }
    };

    return (
        <section id="gallery" className='px-5 lg:px-10 py-32 lg:py-40 mx-auto max-w-7xl'>
            <PageTitle title="Gallery" tagline="Visualize the Beauty That Awaits!" />
            <div>
                <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="cursor-pointer w-full h-full object-cover"
                            onClick={() => openModal(index)}
                        />
                    ))}
                </section>

            </div>

            <ImageModal
                isOpen={isModalOpen}
                onClose={closeModal}
                images={images}
                currentImageIndex={selectedImageIndex || 0}
                handlePrev={handlePrev}
                handleNext={handleNext}
                handleKeyDown={handleKeyDown}
            />
        </section>
    );
};
