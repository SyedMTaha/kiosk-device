import React from 'react'
import img1 from '../images/slide14-1.png'
import img2 from '../images/slide14-2.png'

const Component14 = () => {
  return (
    <div className='h-screen p-4'>
      <p>The SafeQ Client will now synchronize printer queries, verify that printer queue installed: <span className='font-bold'>System Preferences | Printers & Scanners</span></p>
      <img src={img1} alt="" className='md:w-[500px] md:mx-auto' />
      <div className="flex justify-between">
        <ul className='list-disc'>
          <li>
            Add account first time Outlook is started.
          </li>
        </ul>
        <img src={img2} alt="" className='md:w-[280px]' />
      </div>
    </div>
  )
}

export default Component14