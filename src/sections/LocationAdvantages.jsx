import React from 'react';
import { PageTitle } from '../components/title/PageTitle';
import { POIEmbed } from '../components/map/POIEmbed';


export const LocationAdvantages = () => {
  return (
    <section className="py-10 py-32 lg:py-40 border-t bg-hhite" id='location-perks'>
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <PageTitle title="Location Perks" tagline="Elevating Your Lifestyle, One Step at a Time." />
        <div className="flex flex-col gap-10 overflow-hidden">
          <POIEmbed />
        </div>
      </div>
    </section>
  );
};