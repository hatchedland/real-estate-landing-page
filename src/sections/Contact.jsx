import React from 'react'
import { ContactForm } from '../components/contact-form/ContactForm'

export const Contact = () => {
  return (
    <div className='py-10 px-5 lg:px-10 flex flex-col lg:flex-row gap-10 bg-black text-white justify-center' id='contact'>
      <div className='flex-grow max-w-2xl'><ContactForm /></div>
      <div className='hidden lg:block flex-grow max-w-2xl'>
        <img
          src="https://i.postimg.cc/W4P0q9D9/top-view-chat-bubbles-with-telephone-receiver-copy-space.jpg"
          alt="Contact Image"
          className='h-full w-full object-cover object-center'
        />
      </div>
    </div>
  )
}
