import { ArrowDown } from 'iconoir-react';
import React, { useState } from 'react';

export const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-10 pb-5 border-b border-gray-600">
      <div
        className="flex justify-between items-center cursor-pointer gap-10"
        onClick={toggleAccordion}
      >
        <h3 className="text-2xl font-semibold">{question}</h3>
        <span className={`transition-transform transform ${isOpen ? 'rotate-180' : ''}`}>
          <ArrowDown />
        </span>
      </div>
      {isOpen && <p className="mt-2 text-gray-400">{answer}</p>}
    </div>
  );
};

