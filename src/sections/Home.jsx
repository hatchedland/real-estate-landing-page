import React from 'react'
import { City, MapPin } from 'iconoir-react';

export const Home = () => {

  const containerStyle = {
    backgroundImage: 'url("https://i.postimg.cc/jjVCLGJ9/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg")',
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
    <div id='home' className='bg-cover bg-center flex items-center justify-center text-white' style={containerStyle}>
      <div className='-my-20 flex flex-col gap-6 items-center justify-center h-full w-full' style={overlayStyle}>
        <div className='px-5 lg:px-10'>Summit Estate's</div>
        <div className='px-5 lg:px-10 text-7xl lg:text-8xl font-extrabold'>LuxeVista Residences</div>
        <div>
          <div className='flex gap-6 text-3xl'>
            discover your dream home</div>

          <div className='flex gap-2 py-2 justify-center'>
            <div><MapPin /></div>
            <div>Near Sarjapur, Gattahalli, Benguluru</div>
          </div>
        </div>
        <div className="flex gap-2">
       <a href="#floor-plan"><button type="button" class="text-black bg-white border-2 border-white hover:border-black hover:text-white hover:bg-black focus:outline-none px-5 py-2.5 text-center me-2 mb-2">Floor Plan</button></a> 
        <a href=""><button type="button" class="text-white border-2 border-white hover:bg-white hover:text-black focus:outline-none px-5 py-2.5 text-center me-2 mb-2">Play Video!</button></a>
      </div>
      </div>
    </div>
  )
}
