import React from 'react'
import { PageTitle } from '../components/title/PageTitle'
import masterplan from '../assets/master-plan.jpg'

export const MsitePlan = () => {
    return (
        <div id='site-plan' className='max-w-7xl mx-auto px-5 lg:px-10 py-32 lg:py-40'>
            <div><PageTitle title="MASTER SITE PLAN" tagline="Blueprint for Your Perfect Retreat!" /></div>
            <div className='flex'>
                <img src={masterplan} alt="" className='w-auto h-auto'/>
                <div className='flex-1'></div>
            </div>
        </div>
    )
}
