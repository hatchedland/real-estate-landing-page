import React from 'react';
import { PageTitle } from '../title/PageTitle';
import { SectionTitle } from '../title/SectionTitle';

export const Amenities = () => {
  const categories = {
    'Clubhouse': [
      'Yoga & Meditation',
      'Badminton',
      'Snooker',
      'Table Tennis',
      'Reading Lounge',
      'Squash',
      'Aerobics',
      'Kids Play Area',
      'Cricket Practice',
      'G Rink',
    ],
    'Entertainment & Leisure': [
      'Unique Festive Laneway',
      'Pet Park',
      'Senior Citizen Court',
      'Various activities and festivities',
    ],
    'Green Living': [
      'Sustainable and eco-friendly practices',
      'STP Water Treatment Plant',
      'Organic Waste Converter',
      'Rainwater Harvesting',
    ],
  };

  return (
    <section className='text-white bg-black' id='amenities'>
      <div className='py-24 lg:py-32 px-5 lg:px-10  max-w-7xl mx-auto'>
        <PageTitle title='Amenities' tagline='Elevate Your Lifestyle, Discover Amenities!' />
        <div>
          {Object.entries(categories).map(([category, amenities]) => (
            <div key={category} className="items-center py-5">
              <h2 className="text-2xl font-bold py-2">{category}</h2>
              <div className='flex gap-4 flex-wrap'>
              {amenities.map((amenity, index) => (
                <span key={index} className="p-2 border border-gray-600 w-full inline max-w-xs text-gray-300">{amenity}</span>
              ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
