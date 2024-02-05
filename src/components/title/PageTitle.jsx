import React from 'react'

export const PageTitle = (props) => {
  return (
    <div className='flex flex-col gap-2 pb-7'>
        <div className='text-xl font-bold  opacity-75'>{props.title}</div>
        <div className=' font-play font-bold text-3xl lg:text-4xl'>{props.tagline}</div>
    </div>
  )
}
