import React from 'react'
import { PageTitle } from '../components/title/PageTitle'

export const MsitePlan = () => {
    return (
        <div id='site-plan' className='max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-5 lg:px-10 py-10'>
            <div><PageTitle title="MASTER SITE PLAN" tagline="Blueprint for Your Perfect Retreat!" /></div>
            <div>
                <img src="https://i.postimg.cc/WbCHCPKh/Site-p3.gif" alt="" className='w-full h-auto'/>
            </div>
        </div>
    )
}
