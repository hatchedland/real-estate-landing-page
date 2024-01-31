import React from 'react';
import { PageTitle } from '../components/title/PageTitle';

// imported images
import miyo from '../assets/key-features/miyawaki-inspired.png'
import bay_balcony from '../assets/key-features/bay-balcony.png'
import high_rental from '../assets/key-features/high-rental.png'
import festive from '../assets/key-features/festive.png'



export const KeyHighlights = () => {
    const highlights = [
        {
            title: 'Miyawaki Inspired Landscape',
            description: 'Experience a lush green environment inspired by Miyawaki technique.',
            image: miyo,
        },
        {
            title: 'Full Height / Bay Window / Larger Balconies',
            description: 'Enjoy spacious living with full-height windows and larger balconies.',
            image: bay_balcony,
        },
        {
            title: 'High Rental Yields',
            description: 'Invest in properties that offer high rental yields for a lucrative return.',
            image: high_rental,
        },
        {
            title: 'Unique Festive Laneway',
            description: 'Experience a unique and festive laneway with various activities and celebrations.',
            image: festive,
        },
    ];

    return (
        <div className='border-t bg-gray-100'>
            <section className='px-5 lg:px-10 py-32 lg:py-40 max-w-7xl mx-auto' id='key-highlights'>
                <PageTitle title="Key Highlights" tagline="Something important" />

                <div className="flex flex-wrap gap-10">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="flex flex-col p-5 bg-white">
                            <img
                                src={highlight.image}
                                alt={highlight.title}
                                className="w-full h-full object-cover max-w-sm"
                            />
                            <div className='p-2 max-w-sm'>
                                <h3 className="text-2xl font-bold mb-2">{highlight.title}</h3>
                                <p className="text-gray-600">{highlight.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    );
};
