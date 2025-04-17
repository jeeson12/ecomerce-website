import React from 'react'

const hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-gray-600'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-gray-600'></p>
            <p className='font-medium text:sm md:text-base'>BESTSELLERS</p>
          </div>
          <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>latest arivals</h1>
          <div className='flex items-center gap-2'></div>
          <p className='font-semibold text-sm md:text-base'> SHOP NOW</p>
          <p className='w-8 md:w-11 h-[1px] bg-gray-600'></p>
        </div>
      </div>
    </div>
  )
}

export default hero