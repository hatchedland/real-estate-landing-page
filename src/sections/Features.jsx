import React from 'react';

export const Features = () => {
  return (
    <section className='px-6 lg:px-32 py-10 text-white mx-auto bg-black'>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="p-4">
              <h1 className="text-lg lg:text-xl font-bold">TOTAL AREA</h1>
              <h3 className="text-3xl lg:text-4xl">106" x 137"</h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="p-4">
              <h1 className="text-xl font-bold">NO. OF APARTMENTS</h1>
              <h3 className="text-4xl">832+ Apartments</h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="p-4">
              <h1 className="text-xl font-bold">STRUCTURE</h1>
              <h3 className="text-4xl">G+24 FLOORS | <br /> 8 TOWERS</h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="p-4">
              <h1 className="text-xl font-bold">POSSESSION</h1>
              <h3 className="text-5xl">2027</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
