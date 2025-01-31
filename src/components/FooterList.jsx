import React from 'react'

function FooterList({ title, items, fontSize}) {
    
  return (
    <div className='flex flex-col gap-3.5 max-w-[193px] max-h-[212px] '>
      <h3 className="font-PpEditorialRegular italic text-base text-primary">{title}</h3>
      <ul className={`${fontSize} flex flex-col w-full gap-y-2 font-MontserratRegular leading-6 text-neutral`}>
        {items.map((item, index) => (
          <li key={index}>
            <a href="/" className="cursor-pointer">
              {item.tag}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterList
