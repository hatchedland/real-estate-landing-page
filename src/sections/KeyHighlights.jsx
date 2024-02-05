import React from 'react';
import { PageTitle } from '../components/title/PageTitle';

// imported images
import miyo from '../assets/key-features/miyawaki-inspired.png';
import bay_balcony from '../assets/key-features/bay-balcony.png';
import high_rental from '../assets/key-features/high-rental.png';
import festive from '../assets/key-features/festive.png';

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
                <PageTitle title='Key Highlights' tagline='Discover Distinctive Living' />

                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
  {highlights.map((highlight, index) => (
    <div className='flex flex-col' key={index}>
      <div
      className="relative h-96 bg-cover bg-center group"
      style={{ backgroundImage: `url(${highlight.image})` }}
    ></div>
      <div className='flex items-end justify-end z-10'>
        <div className='bg-gray-100 p-5 w-fit -mt-20 max-w-md'>
          <h3 className='font-play text-4xl mb-2 opacity-75'>{highlight.title}</h3>
          <p className='border-gray-200 py-2 h-fit bg-opacity-75'>{highlight.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

            </section>



        </div>
    );
};
