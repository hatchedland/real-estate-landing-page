import React, { useState } from 'react';
import { PageTitle } from '../title/PageTitle';

export const Disclaimer = () => {
  const [showFullDisclaimer, setShowFullDisclaimer] = useState(false);

  const toggleDisclaimer = () => {
    setShowFullDisclaimer(!showFullDisclaimer);
  };

  return (
    <div className='py-10'>
        <PageTitle title="Disclaimer" tagline="" />
      <p>
      The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are
      {showFullDisclaimer ? (
          <>subject to availability. Images for representation purpose only. We may share data with rera registered sub brokers/companies/projects for further processing. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.</>
        ) : ' '}
        <span
          className="text-red-500 cursor-pointer"
          onClick={toggleDisclaimer}
        >
          {showFullDisclaimer ? 'See Less' : 'See More'}
        </span>
      </p>
    </div>
  );
};
