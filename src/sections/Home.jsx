import React from 'react'
// import { City, MapPin } from 'iconoir-react';

import mapPin from "../assets/icons/map-pin.svg";

export const Home = () => {

  const containerStyle = {
    backgroundImage: 'url("https://i.postimg.cc/gjhL9w1K/background.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    // position: 'relative',
  };

  const overlayStyle = {
    content: "''",
    position: 'static',
    top: 80,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(2, 2, 2, 0.6)',
  };

  return (
    <div id='home' className='bg-cover bg-center flex items-center text-white' style={containerStyle}>
      <div className='-my-20 px-5 lg:px-10 flex flex-col gap-6  justify-center h-full w-full' style={overlayStyle}>
        <div className='max-w-7xl px-5 lg:px-10 flex flex-col mx-auto w-full'>
        <div className='text-2xl md:text-3xl font-bold'>SNN Estate's</div>
        <div className='font-play text-4xl py-5 md:text-6xl lg:text-8xl font-extrabold'>Felicity</div>
        <div>
          <div className='flex gap-6 text-2xl md:text-3xl justify-start'>
          Happiness Begin at Home</div>

          <div className='flex gap-2 mt-10 justify-start md:text-2xl'>
            <div><img src={mapPin} alt='mappin' /></div>
            <div>Behind Manyata Tech Park, Rachenahalli, North Benguluru</div>
          </div>
        </div>
        <div className="flex gap-2 justify-start mt-10">
       <a href="#contact"><button type="button" class="text-black bg-white border-2 border-white hover:border-black hover:text-white hover:bg-black focus:outline-none px-8 py-3 text-center me-2 mb-2 w-full">BOOK NOW!</button></a> 
        {/* <a href=""><button type="button" class="text-white border-2 border-white hover:bg-white hover:text-black focus:outline-none px-5 py-2.5 text-center me-2 mb-2">Play Video!</button></a> */}
      </div>
        </div>
        </div>
    </div>
  )
}
