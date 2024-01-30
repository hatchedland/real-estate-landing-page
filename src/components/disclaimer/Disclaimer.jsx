import React, { useState } from 'react';
import { PageTitle } from '../title/PageTitle';

export const Disclaimer = () => {
  const [showFullDisclaimer, setShowFullDisclaimer] = useState(false);

  const toggleDisclaimer = () => {
    setShowFullDisclaimer(!showFullDisclaimer);
  };

  return (
    <div className='max-w-5xl mx-auto py-10'>
        <PageTitle title="Disclaimer" tagline="" />
      <p className=''>
      The information provided on this website is intended exclusively for informational purposes and should not be construed as an offer of services. This site is managed by a RERA authorized real estate agent, namely SNN Estates. 
      {showFullDisclaimer ? (
          <>The pricing information presented on this website is subject to alteration without advance notification, and the assurance of property availability cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties developed by SNN Estates. We may share your data with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details related to SNN Estates projects in Bangalore, it is recommended to contact us directly through the provided contact information on this website. Thank you for considering SNN Estates for your real estate needs and visiting our website.
          </>
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
