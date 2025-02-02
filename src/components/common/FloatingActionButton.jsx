import React from 'react'
import { SupportIcon } from './Icon'

function FloatingActionButton() {
  return (
    <div className='w-7 sm:w-10 lg:w-16 h-7 sm:h-10 lg:h-16 rounded-full bg-custom-gradient absolute z-50 top-[305px] xsm:top-[300px] sm:top-[260px] md:top-[300px] lg:top-[410px] 3xl:top-[460px] right-[50px] sm:right-[84px]'>
      <SupportIcon/>
    </div>
  )
}

export default FloatingActionButton
