import React from 'react'

// responsive-iframe-container

export const VideoEmbed = () => {
    return (
        <div className='responsive-iframe-container'>
            <iframe
        className="relative top-0 left-0 w-full"
        height="400"
        src="https://www.youtube.com/embed/7EHnQ0VM4KY"
        title="Cinematic Real estate video tour"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
       </div>
    )
}
