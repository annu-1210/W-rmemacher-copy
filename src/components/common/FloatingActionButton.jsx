import Image from 'next/image'
import React from 'react'

function FloatingActionButton() {
  return (
    <div className='flex items-center justify-center w-7 sm:w-10 lg:w-16 h-7 sm:h-10 lg:h-16 rounded-full bg-custom-gradient z-50 fixed right-[50px] md:right-[60px] lg:right-[70px] 3xl:right-[84px] '>
     <Image
     width={40}
     height={33}
     alt='support-image'
     src="/support.svg"
     className='max-w-6 sm:max-w-7 lg:max-w-10 max-h-4 sm:max-h-5 lg:max-h-[33px]'
     />
    </div>
  )
}

export default FloatingActionButton
