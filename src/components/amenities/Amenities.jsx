import React from 'react'
import { SectionTitle } from '../title/SectionTitle';
import { Basketball, Balcony, Gym, EmojiTalkingHappy, Swimming, Movie, Walking, Skateboarding, SoilAlt, Parking } from 'iconoir-react'
import { PageTitle } from '../title/PageTitle';


export const Amenities = () => {

    const fields = [
        { id: 1, icon: <Basketball />, label: 'BASKET-BALL COURT' },
        { id: 2, icon: <Balcony />, label: 'LAWN TERRACES' },
        { id: 3, icon: <Gym />, label: 'CLUBHOUSE WITH GYM' },
        { id: 4, icon: <EmojiTalkingHappy />, label: 'KIdS PLAY AREA' },
        { id: 5, icon: <Swimming />, label: 'SWIMMING POOL' },
        { id: 6, icon: <Movie />, label: 'AMPHITHEATRE' },
        { id: 7, icon: <Walking />, label: 'JOGGING TRACK' },
        { id: 8, icon: <Skateboarding />, label: 'SKATING RINK' },
        { id: 9, icon: <SoilAlt />, label: 'MULTIPURPOSE LAWN' },
        { id: 10, icon: <Parking />, label: 'PARKING' },
    ];


  return (
    <section className='py-10 px-10 text-white bg-black'>
        <div className='max-w-6xl mx-auto'>
                    <PageTitle title='Amenitites' tagline='Elevate Your Lifestyle, Discover Amenities!'/>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:grid-rows-2">
                        {fields.map((field) => (
                            <div key={field.id} className="flex flex-col gap-3 items-center bg-slate-900 p-10">
                                <div>{field.icon}</div>
                                <span className="ml-2">{field.label}</span>
                            </div>
                        ))}
                    </div>
        </div>
                </section>
  )
}
