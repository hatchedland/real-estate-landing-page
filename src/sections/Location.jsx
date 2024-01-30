import React from 'react'
import { MapEmbed } from '../components/map/MapEmbed'
import { PageTitle } from '../components/title/PageTitle'
import { NavigatorAlt } from 'iconoir-react'

export const Location = () => {
  return (
    <div className='py-10 px-5 lg:px-10 flex flex-col lg:flex-row  justify-center gap-10' id='location'>
        <div className='flex-grow relative overflow-hidden w-full max-w-2xl'>
            <MapEmbed />
        </div>
        <div className='max-w-2xl'>
            <PageTitle title='Location' tagline='Navigate Your Way to Serenity!'/>
            <a href=""><button type="button" class="text-black border-2 border-black hover:bg-black hover:text-white focus:outline-none px-5 py-2.5 text-center me-2 mb-2 flex gap-2"><NavigatorAlt /><span>GET DIRECTION</span></button></a>
        </div>
    </div>
  )
}
