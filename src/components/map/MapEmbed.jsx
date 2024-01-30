import React from 'react'

export const MapEmbed = () => {


    return (
        <div className='responsive-iframe-container'>
                <iframe
                    className='relative top-0 left-0 w-full h-100'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.842128758946!2d77.6355229613309!3d12.910258248390383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1491bfdc6ecd%3A0xf232718439fbc879!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1705695521164!5m2!1sen!2sin"
                    width="800"
                    height="400"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Embed"
                />
        </div>
    )
}
