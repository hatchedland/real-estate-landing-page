import React from 'react'
import { PageTitle } from '../components/title/PageTitle'
import { SectionTitle } from '../components/title/SectionTitle'
import { VideoEmbed } from '../components/video/VideoEmbed'

export const SiteVisit = () => {
  return (
    <div>
      <PageTitle title='Site Visit' />
      <div>
        <section>
          <SectionTitle title='Virtual Site Visit' />
          <div>
            <VideoEmbed />
          </div>
        </section>
        
      </div>
    </div>
  )
}
