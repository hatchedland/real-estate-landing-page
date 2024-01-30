import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div id="privacy-policy" className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in quam et lectus finibus varius vel eget ex. Suspendisse potenti.
        ...
      </p>

      <h2 className="text-xl font-bold mb-4">1. Information We Collect</h2>
      <p className="mb-4">
        We collect information you provide directly to us, such as when you create or modify your account, contact customer support, or otherwise communicate with us.
      </p>

      <h2 className="text-xl font-bold mb-4">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, and send you updates and marketing communications.
      </p>

      <h2 className="text-xl font-bold mb-4">3. Sharing Your Information</h2>
      <p className="mb-4">
        We may share your information with third parties for certain purposes, including to provide services on our behalf, comply with legal obligations, and protect against fraud.
      </p>

      {/* Add more sections as needed */}

      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
