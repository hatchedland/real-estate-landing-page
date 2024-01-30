import React from 'react'
import { PageTitle } from '../components/title/PageTitle'

export const MsitePlan = () => {
    return (
        <div id='site-plan' className='max-w-7xl mx-auto px-5 lg:px-10 py-24 lg:py-32'>
            <div><PageTitle title="MASTER SITE PLAN" tagline="Blueprint for Your Perfect Retreat!" /></div>
            <div className='flex'>
                <img src="https://i.postimg.cc/WbCHCPKh/Site-p3.gif" alt="" className='w-auto h-auto'/>
                <div className='flex-1'></div>
            </div>
        </div>
    )
}
