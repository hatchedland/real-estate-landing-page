import React, { useState } from 'react';
import { Xmark } from 'iconoir-react';
import { MenuScale } from 'iconoir-react';

export const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="text-black bg-white flex items-center justify-between flex-wrap p-6 fixed w-full z-50">
     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 ">
       <img src='https://i.postimg.cc/GtX3jph7/logo-black.png' className="w-100 h-10 mr-2" alt="Logo" />
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       > 
         <div className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}>
          <MenuScale />
         </div>
         <div className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}>
          <Xmark />
         </div>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="flex flex-col items-center text-2xl md:text-xl gap-8 md:gap-10 lg:flex-row lg:flex-grow">
         <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 ">
          HOME
         </a>
         <a href="#overview" className="block mt-4 lg:inline-block lg:mt-0 text-white-200">
           OVERVIEW
         </a>
         <a href="#location" className="block mt-4 lg:inline-block lg:mt-0 text-white-200">
           LOCATION
         </a>
         <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-white-200">
           CONTACT US
         </a>
         <a href="#site-plan" className="block mt-4 lg:inline-block lg:mt-0 text-white-200">
           SITE PLAN
         </a>
         <a href="#floor-plan" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           FLOOR PLAN
         </a>
         <a href="#gallery" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           GALLERY
         </a>
         <a href="#faqs" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           FAQs
         </a>
       </div>
       <div>
        <a href="#contact">
         <button className="inline-flex items-center bg-red-500 border-0 py-2 px-4 text-white w-full md:w-[70%] mx-auto lg:w-full mx-auto justify-center mt-10 md:mt-0">
           CONTACT US
         </button>
        </a>
       </div>
     </div>
   </nav>
 );
}