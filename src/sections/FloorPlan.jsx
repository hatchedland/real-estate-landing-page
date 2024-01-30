import React from 'react'
import { Tabs } from '../components/floor-plan/Tabs'
import { PageTitle } from '../components/title/PageTitle'

export const FloorPlan = () => {
  return (
    
      <div className='bg-black text-white'>
    <div className='max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-5 lg:px-10 py-10' id='floor-plan'>
        <PageTitle title="Floor Plan" tagline="Choose Your Ideal Space, Discover Plans!" />
        <Tabs />
    </div>
      </div>
  )
}
