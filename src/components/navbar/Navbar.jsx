import React, { useState } from 'react';
import { Xmark } from 'iconoir-react';
import { MenuScale } from 'iconoir-react';
import logo from '../../assets/site-logo.png';

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };


  return (
    <div className=' fixed w-full z-50'>
      <nav className="bg-white border-gray-200 dark:bg-white">
        <div className="flex flex-wrap justify-between items-center my-auto mx-auto max-w-screen-xl py-1 px-5 lg:px-10 gap-5">
          <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-14" alt="SNN Felicity Logo" />
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex items-center justify-center my-auto lg:gap-10 gap-5">
              <a href="#contact">
                <button className="bg-red-500 border-0 py-2 px-4 text-white w-full justify-center md:mt-0">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-black text-white">
        <div className="max-w-screen-xl px-5 py-3 mx-auto">
          <div className="flex justify-between items-start">
            <ul
              className={`${isMobileNavOpen ? 'flex' : 'hidden'
                } lg:flex flex-col justify-center text-2xl md:text-lg gap-8 md:gap-10 lg:flex-row lg:flex-grow max-w-6xl`}
            >
              <li className="mt-4 lg:inline-block lg:mt-0">
                <a href="#overview" className="block text-white-200 whitespace-nowrap" onClick={toggleMobileNav}>
                  Overview
                </a>
              </li>
              <li className="mt-4 lg:inline-block lg:mt-0">
                <a href="#key-highlights" className="block text-white-200 whitespace-nowrap" onClick={toggleMobileNav}>
                  Key Highlights
                </a>
              </li>
              <li className="mt-4 lg:inline-block lg:mt-0">
                <a href="#location-perks" className="block text-white-200 whitespace-nowrap" onClick={toggleMobileNav}>
                  Location Perks
                </a>
              </li>
              <li className="mt-4 lg:inline-block lg:mt-0">
                <a href="#amenities" className="block text-white-200 whitespace-nowrap" onClick={toggleMobileNav}>
                  Amenities
                </a>
              </li>
              <li className="mt-4 lg:inline-block lg:mt-0">
                <a href="#site-plan" className="block text-white-200  whitespace-nowrap" onClick={toggleMobileNav}>
                  Site Plan
                </a>
              </li>
              <li className="mt-4 lg:inline-block lg:mt-0">
                <a href="#location" className="block text-white-200 whitespace-nowrap" onClick={toggleMobileNav}>
                  Location
                </a>
              </li>
              <li className="mt-4 lg:inline-block lg:mt-0">
                <a href="#contact" className="block text-white-200 whitespace-nowrap" onClick={toggleMobileNav}>
                  Contact Us
                </a>
              </li>
              
              
            </ul>
            <button
              onClick={toggleMobileNav}
              className=" lg:hidden text-white-200  hover:text-white focus:outline-none"
            >
              {isMobileNavOpen ?
                <Xmark height={36} width={36} /> : <MenuScale />
              }
            </button>
          </div>
        </div>
      </nav>
    </div>





  );
};
