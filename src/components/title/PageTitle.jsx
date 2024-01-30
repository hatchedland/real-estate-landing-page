import React from 'react'

export const PageTitle = (props) => {
  return (
    <div className='pb-10'>
        <div className='text-xl font-bold uppercase text-opacity-75'>{props.title}</div>
        <div className='text-3xl lg:text-4xl'>{props.tagline}</div>
    </div>
  )
}
