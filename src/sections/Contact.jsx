import React from 'react'
import { ContactForm } from '../components/contact-form/ContactForm'

export const Contact = () => {
  return (

    <div className=' bg-black text-white'>
      <div className='py-32 lg:py-40 px-5 lg:px-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 justify-center' id='contact'>
        <div className='flex-grow max-w-2xl'><ContactForm /></div>
        <div className='hidden lg:block flex-grow max-w-2xl'>
          <img
            src="https://i.postimg.cc/W4P0q9D9/top-view-chat-bubbles-with-telephone-receiver-copy-space.jpg"
            alt="Contact Image"
            className='h-full w-full object-cover object-center'
          />
        </div>
      </div>
    </div>
  )
}
