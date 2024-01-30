import React from 'react'
import { PageTitle } from '../components/title/PageTitle'
import { VideoEmbed } from '../components/video/VideoEmbed'
import { DownloadCircle } from 'iconoir-react'

export const Overview = () => {
  return (
    <section id='overview' className='py-10 px-10'>
      <div className='flex flex-col lg:flex-row w-full justify-center gap-10'>
        <div className='lg:w-1/2 lg:max-w-xl flex-grow'>
          <PageTitle title="Overview" tagline="Explore Yourx Unique Living Experience!" />
          <p>Unveiling LuxeVista Residences by Summit Estates in New Haven.
            Experience premier living with spacious, amenity-rich apartments amidst
            stunning surroundings. Elevate your lifestyle with Summit Estates'
            commitment to exceptional architecture and contemporary luxury.</p>
          <a href="/brochure"><button type="button" class="text-black border-2 border-black hover:bg-black hover:text-white focus:outline-none px-5 py-2.5 text-center my-5 me-2 mb-2 flex gap-2"><DownloadCircle /><span>DOWNLOAD BROCHURE</span></button></a>
          <h3 className='mt-10'> <span>Agent RERA No:</span> PRM/KA/RERA/1251/310/AG/170824/000071</h3>
        </div>
        <div className='lg:w-1/2  relative overflow-hidden lg:max-w-2xl flex-grow'>
          <VideoEmbed />
        </div>
      </div>

    </section>
  )
}
