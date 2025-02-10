import React from 'react'

function FooterList({ title, items, fontSize}) {
    
  return (
    <div className='flex flex-col gap-y-3.5 w-full xl:max-w-[193px] max-h-[212px] '>
      <h3 className="font-PpEditorialRegular italic text-xs xsm:text-sm lg:text-base text-primary">{title}</h3>
      <ul className={`${fontSize} flex flex-col w-full gap-y-1 lg:gap-y-2 font-MontserratRegular leading-4 xsm:leading-5 lg:leading-6 text-neutral`}>
        {items.map((item, index) => (
          <li key={index}>
            <a href="/" className="cursor-pointer underline-animation hover:text-primary">
              {item.tag}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterList
