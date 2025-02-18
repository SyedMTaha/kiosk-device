import React from 'react'
import img1 from '../images/slide9-1.png'
import img2 from '../images/slide9-2.png'

const Component9 = () => {
  return (
    <div className='w-full flex h-screen md:p-4'>
      <div className="w-[60vw] h-screen flex md:flex-col">
        <ul className='list-disc md:pl-8'>
          <li>Microsoft Company Portal:</li>
          <p>Wait for some time. Once Company Port is installed, open it and sign-in. <br />(If Company Portal is opened too soon and/or you are on a slow network, you might experience oddities)</p>
          <p className='md:pt-4'>
            In case company portal is not installed, restart yoru device to trigger your application. Wait for some time because other applications might be downloading and installing at the same time.
          </p>
        </ul>
        <img src={img2} alt="" className='md:w-[420px] mx-auto' />
      </div>
      <div className="w-[40vw] h-screen">
        <img src={img1} alt="" />
      </div>
    </div>
  )
}

export default Component9