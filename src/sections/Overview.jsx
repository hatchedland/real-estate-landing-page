import React from 'react'
import { PageTitle } from '../components/title/PageTitle'
import { VideoEmbed } from '../components/video/VideoEmbed'
import { DownloadCircle } from 'iconoir-react'

export const Overview = () => {

  const brochureFunction= () => {
    alert('Brochure will be shared once we connect');
  }
  return (
    <section id='overview' className='py-24 lg:py-32 px-5 lg:px-10 max-w-7xl mx-auto'>
      <div className='flex flex-col lg:flex-row w-full justify-center gap-10'>
        <div className='lg:w-1/2 flex-grow flex flex-col gap-10'>
          <div>
            <PageTitle title="Project Overview" tagline="Happiness Begin at Home" />
            <p>Discover a new level of comfort, style, and convenience at SNN Estates Felicity. Nestled in the heart of North Bangalore, this residential haven is designed to redefine your lifestyle. Whether you are a first-time homebuyer, a growing family, or someone seeking a vibrant community, SNN Estates Felicity has something for everyone.
            </p>
            <a href="#contact" onClick={brochureFunction}><button type="button" class="text-black border-2 border-black hover:bg-black hover:text-white focus:outline-none px-5 py-2.5 text-center my-5 me-2 mb-2 flex gap-2" ><DownloadCircle /><span>DOWNLOAD BROCHURE</span></button></a>
            <h3 className='mt-10'> <span className='font-bold pr-2'>Agent RERA No:</span>PRM/KA/RERA/1251/309/PR/220124/006568</h3>
          </div>
        </div>
        <div className='lg:w-1/2  relative overflow-hidden lg:max-w-2xl flex-grow'>
          <VideoEmbed />
        </div>
      </div>

    </section>
  )
}
