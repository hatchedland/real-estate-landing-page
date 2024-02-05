import React from 'react';
import { PageTitle } from '../components/title/PageTitle';
import { BadgeCheck } from 'iconoir-react';

export const Amenities = () => {
  const categories = {
    'Recreational Facilities': [
      'Clubhouse',
      'Badminton',
      'Snooker',
      'Table Tennis',
      'Reading Lounge',
      'Squash',
      'Aerobics',
      'Kids Play Area',
      'Cricket Practice',
      'Skating Rink',
    ],
    'Wellness and Relaxation': [
      'Yoga & Meditation',
      'Reading Lounge',
      'Entertainment & Leisure',
      'Unique Festive Laneway',
      'Pet Park',
      'Senior Citizen Court',
    ],
    'Environmental Sustainability': [
      'Green Living',
      'STP Water Treatment Plant',
      'Organic Waste Converter',
      'Rainwater Harvesting',
      'Sustainable and eco-friendly practices',
    ],
  };

  const categoryImages = {
    'Recreational Facilities': "https://i.postimg.cc/VLP1BB9x/club-house.png",
    'Wellness and Relaxation': "https://i.postimg.cc/Vvc94Vkr/yoga.png",
    'Environmental Sustainability': "https://i.postimg.cc/ydn9XYt5/eco-friendly.png",
  };


  // const amenityIcons = {
  //   'Clubhouse': <img src={require('../assets/icons/clubhouse.svg')} alt='Clubhouse' />,
  //   'Badminton': <img src={require('../assets/icons/badminton.svg')} alt='Badminton' />,
  //   'Snooker': <img src={require('../assets/icons/snooker.svg')} alt='Snooker' />,
  //   'Table Tennis': <img src={require('../assets/icons/table-tennis.svg')} alt='Table Tennis' />,
  //   'Reading Lounge': <img src={require('../assets/icons/reading-lounge.svg')} alt='Reading Lounge' />,
  //   'Squash': <img src={require('../assets/icons/squash.svg')} alt='Squash' />,
  //   'Aerobics': <img src={require('../assets/icons/aerobics.svg')} alt='Aerobics' />,
  //   'Kids Play Area': <img src={require('../assets/icons/kids-play-area.svg')} alt='Kids Play Area' />,
  //   'Cricket Practice': <img src={require('../assets/icons/cricket-practice.svg')} alt='Cricket Practice' />,
  //   'Skating Rink': <img src={require('../assets/icons/skating-rink.svg')} alt='Skating Rink' />,
  //   'Yoga & Meditation': <img src={require('../assets/icons/yoga-meditation.svg')} alt='Yoga & Meditation' />,
  //   'Entertainment & Leisure': <img src={require('../assets/icons/entertainment-leisure.svg')} alt='Entertainment & Leisure' />,
  //   'Unique Festive Laneway': <img src={require('../assets/icons/unique-festive-laneway.svg')} alt='Unique Festive Laneway' />,
  //   'Pet Park': <img src={require('../assets/icons/pet-park.svg')} alt='Pet Park' />,
  //   'Senior Citizen Court': <img src={require('../assets/icons/senior-citizen-court.svg')} alt='Senior Citizen Court' />,
  //   'Green Living': <img src={require('../assets/icons/green-living.svg')} alt='Green Living' />,
  //   'STP Water Treatment Plant': <img src={require('../assets/icons/stp-water-treatment-plant.svg')} alt='STP Water Treatment Plant' />,
  //   'Organic Waste Converter': <img src={require('../assets/icons/organic-waste-converter.svg')} alt='Organic Waste Converter' />,
  //   'Rainwater Harvesting': <img src={require('../assets/icons/rainwater-harvesting.svg')} alt='Rainwater Harvesting' />,
  //   'Sustainable and eco-friendly practices': <img src={require('../assets/icons/sustainable-eco-friendly.svg')} alt='Sustainable and eco-friendly practices' />,
  // };
  

  

  return (
    <section className='text-white bg-black' id='amenities'>
      <div className='py-32 lg:py-40 px-5 lg:px-10 max-w-7xl mx-auto'>
        <PageTitle title='Amenities' tagline='Elevate Your Lifestyle, Discover Amenities!' />

        {Object.entries(categories).map(([category, amenities], index) => (
          <div key={category} className='flex items-center justify-center md:justify-between py-10 md:py-20'>
            <div
              className='w-full md:w-1/2 h-96 bg-cover bg-center'
              style={{ backgroundImage: `url(${categoryImages[category]})` }}
            ></div>
            <div className='w-full md:w-1/2 p-5'>
              <h2 className='text-4xl py-2 font-play opacity-70'>{category}</h2>
              <div className='flex flex-wrap'>
                {amenities.map((amenity, subIndex) => (
                  <div className='lg:w-1/2 w-full' key={subIndex}>
                    <span className='w-full py-2 px-2 inline-flex gap-4 w-full'>
                      <span className='opacity-70'>
                        <BadgeCheck />
                      </span>{' '}
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
