import React from 'react'
import img1 from '../images/slide11-1.png'
import img2 from '../images/slide11-2.png'
const Component11 = () => {
  return (
    <div className='h-screen md:p-4 flex flex-col w-full'>
        <div className="h-1/2 w-full flex">
            <ul className='list-disc md:p-14'>
                <li>After Login to computer account, you will be asked to enable FileVault. Enter computer account password to enable FileVault.</li>
            </ul>
            <img src={img1} alt="" />
        </div>      
        <div className="h-1/2 w-full flex">
            <ul className='list-disc md:p-14'>
                <li>Sign-in first time using Microsoft 365 apps such as Outlook, Word, PowerPoint, Excel.</li>
            </ul>
            <img src={img2} alt="" className='md:mx-auto' />
        </div>      
    </div>
  )
}

export default Component11