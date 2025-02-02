import Image from 'next/image'
import React from 'react'

function FloatingActionButton() {
  return (
    <div className='flex items-center justify-center w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 rounded-full bg-custom-gradient z-50 fixed right-[50px] md:right-[60px] lg:right-[70px] 3xl:right-[84px] '>
     <Image
     width={40}
     height={33}
     alt='support-image'
     src="/support.svg"
     className='max-w-8 lg:max-w-10 max-h-8 lg:max-h-[33px]'
     />
    </div>
  )
}

export default FloatingActionButton
