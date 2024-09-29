import React from 'react'

function Title({title, des}) {
  return (
    <div className='flex flex-col gap-4 font-titleFont'>
        <h3 className='text-sm font-light tracking-wider uppercase text-designColor'>
            {title}
        </h3>
        <h1 className='text-5xl font-bold text-gray-300 capitalize'>
            {des}
        </h1>
    </div>
  )
}

export default Title