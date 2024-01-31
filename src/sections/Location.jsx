import React from 'react'
import { MapEmbed } from '../components/map/MapEmbed'
import { PageTitle } from '../components/title/PageTitle'
import { NavigatorAlt } from 'iconoir-react'

export const Location = () => {
  return (
    <div className='py-32 lg:py-40 px-5 lg:px-10 flex flex-col lg:flex-row  justify-center gap-10' id='location'>
      <div className='flex-grow relative overflow-hidden w-full max-w-2xl'>
        <MapEmbed />
      </div>
      <div className='max-w-2xl'>
        <PageTitle title='Location' tagline='Navigate Your Way to Serenity!' />
        <div className='max-w-sm text-xl pb-5'>
          SNN Estates Felicity
          Rachenahalli, Thanisandra, Bengaluru, Karnataka 560064
        </div>
        <a href="https://maps.app.goo.gl/skkAJonWp2yQ4wGv6"><button type="button" class="text-black border-2 border-black hover:bg-black hover:text-white focus:outline-none px-5 py-2.5 text-center me-2 mb-2 flex gap-2"><NavigatorAlt /><span>GET DIRECTION</span></button></a>
      </div>
    </div>
  )
}
