import React from 'react';

export const Features = () => {
  return (
    <section className='px-5 lg:px-10 py-10 text-white bg-black'>
      <div className=" mx-auto  max-w-7xl">
        <div className="flex flex-wrap justify-around">
          <div className=" px-4 mb-6 w-100">
            <div className="p-4">
              <h1 className="text-lg lg:text-xl font-bold text-gray-400">TOTAL AREA</h1>
              <h3 className="text-3xl lg:text-4xl">6.5 Acre</h3>
            </div>
          </div>
          <div className=" px-4 mb-6 w-100">
            <div className="p-4">
              <h1 className="text-lg lg:text-xl font-bold text-gray-400">NO. OF UNITS</h1>
              <h3 className="text-3xl lg:text-4xl">580 Units</h3>
            </div>
          </div>
          <div className=" px-4 mb-6 w-100">
            <div className="p-4">
              <h1 className="text-lg lg:text-xl font-bold text-gray-400">STRUCTURE</h1>
              <h3 className="text-3xl lg:text-4xl">2B+G+13 FLOORS | <br /> 9 TOWERS</h3>
            </div>
          </div>
          <div className="px-4 mb-6 w-100">
            <div className="p-4">
              <h1 className="text-lg lg:text-xl font-bold text-gray-400">POSSESSION</h1>
              <h3 className="text-3xl lg:text-4xl">2028</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
