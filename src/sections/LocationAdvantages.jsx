import React from 'react';
import { PageTitle } from '../components/title/PageTitle';


const advantages = [
    {
      title: 'Proximity',
      items: [
        'Thanisandra Metro: 3.5 Km',
        'Nagawara Junction: 3.5 Km',
        'Off Bellary Road: 3.5 Km',
        'Hebbal Junction: 7 Km',
        'Yeshwantpura Station: 14 Km',
        'International Airport: 26 Km',
      ],
    },
    {
      title: 'Workstation and Tech Parks',
      items: [
        'Manyata (Gate no 5): 1.4 Km',
        'Karle IT SEZ Park: 4 Km',
        'Bhartiya Center(BCIT): 4.5 Km',
        'Brigade Magnum: 5 Km',
        'Kirloskar Tech Park: 6 Km',
      ],
    },
    {
      title: 'Shopping & Entertainment',
      items: ['Elements Mall: 3 Km', 'Phoneix Mall of Asia: 4.5 Km', 'Esteem Mall: 5.5 Km', 'RMZ Galleria: 5.5 Km'],
    },
    {
      title: 'Healthcare Facilities',
      items: [
        'Manipal Hospital: 6 Km',
        'Aster CMI: 5.8 Km',
        'Motherhood Hospital: 4.8 Km',
        'Purple Patch Hospital: 2 Km',
        'Chirayu Hospital: 2.5 Km',
      ],
    },
    {
      title: 'Educational Institutions',
      items: [
        'VIBGYOR High School: 1.8 Km',
        'Rashtrotthana Vidya Kendra: 2 Km',
        'North Hill International: 2.9 Km',
        'HDFC School: 3 Km',
        'Vidyashilp Academy: 5.5 Km',
        'DPS North: 9.5 Km',
      ],
    },
  ];
  

export const LocationAdvantages = () => {
  return (
    <section className="py-10 px-5 lg:px-10 py-24 lg:py-32 border-t bg-gray-100" id='location-perks'>
      <div className="container mx-auto  max-w-6xl">
        <PageTitle title="Location Advantages" tagline="Elevating Your Lifestyle, One Step at a Time." />
        <div className="flex flex-col gap-10">
          {advantages.map((category) => (
            <div key={category.title} className="">
                <h2 className="text-2xl font-bold py-2">{category.title}</h2>
              <ul className="flex flex-wrap gap-4">
                {category.items.map((item) => (
                  <li key={item} className='p-2 border border-gray-600 max-w-xs w-full'>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};