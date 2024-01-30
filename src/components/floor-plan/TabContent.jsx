import React from 'react';

export const TabContent = ({ imageSrc, options, selectedOption, onSelectOption, pricing, eoiAmount }) => {
  return (
    <div className="my-5 flex flex-col lg:flex-row items-start lg:items-center gap-10 justify-around align-start">
      <img
        src={imageSrc}
        alt="Floor Plan"
        className="mb-4 lg:mb-0 w-full lg:h-auto object-cover flex-grow"
      />
      <div className="flex-shrink-0 flex flex-col gap-5">
        <div className="mb-4">
          <label className="block text-white font-bold mb-2">
            Select a Size:
          </label>
          <select
            className="w-full p-2 border border-gray-800 focus:outline-none focus:border-blue-500 bg-gray-800"
            value={selectedOption}
            onChange={(e) => onSelectOption(e.target.value)}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="text-lg lg:text-xl font-bold">Pricing:</label>
          <p className="text-3xl lg:text-4xl">{pricing}</p>
        </div>
        <div>
          <label className="text-lg lg:text-xl font-bold">
            EOI Amount:
          </label>
          <p className="text-3xl lg:text-4xl">{eoiAmount}</p>
        </div>
      </div>
    </div>
  );
};
