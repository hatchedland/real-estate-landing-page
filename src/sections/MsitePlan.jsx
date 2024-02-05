import React, { useState } from 'react';
import { PageTitle } from '../components/title/PageTitle';
import masterplan from '../assets/master-plan.jpg';
import {ZoomableModal} from '../components/modal/ZoomableModal';

export const MsitePlan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div id='site-plan' className='max-w-7xl mx-auto px-5 lg:px-10 py-32 lg:py-40'>
      <div><PageTitle title="Master Site Plan" tagline="Blueprint for Your Perfect Retreat!" /></div>
      <div className='flex'>
        <img
          src={masterplan}
          alt=""
          className='w-full h-auto cursor-pointer'
          onClick={toggleModal}
        />
        {isModalOpen && (
          <ZoomableModal
            image={masterplan}
            onClose={toggleModal}
          />
        )}
      </div>
    </div>
  );
};
