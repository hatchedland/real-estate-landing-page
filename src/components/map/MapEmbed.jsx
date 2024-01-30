import React from 'react'

export const MapEmbed = () => {


    return (
        <div className='responsive-iframe-container'>
            <iframe  className='relative top-0 left-0 w-full h-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5013210385678!2d77.62053177505263!3d13.067383012771126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19efdbf80065%3A0x2ac57fa720e07b0b!2sSNN%20Estates%20Felicity!5e0!3m2!1sen!2sin!4v1706621687809!5m2!1sen!2sin" width="800"
                    height="400" style={{ border: '0' }} allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps Embed"></iframe>
        </div>
    )
}
