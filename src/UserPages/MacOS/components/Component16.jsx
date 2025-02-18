import React from 'react'
import img1 from '../images/slide16-1.png'
import img2 from '../images/slide16-2.png'
import { useNavigate } from 'react-router-dom'

const Component16 = () => {
  const navigate=useNavigate();
  const handleExitClick=()=>{
    navigate("/select-device");
  }
  return (
    <div className='h-screen w-full p-4'>
      <div className="flex w-full">
        <div className="flex flex-col">
          <ul className='list-disc md:pl-16'>
            <li>
              Sign-in using the account while accessing Teams for the first time.
            </li>
            <p>Confirm access to Camera, Bluetooth and to allow screen sharing, depending on your usage.</p>
            <img src={img2} alt="" className='md:w-[330px] md:h-[250px] mx-auto' />
          </ul>
        </div>
        <img src={img1} alt="" className='md:w-[420px] md:h-[320px] mx-auto' />
      </div>
      <div className="md:pl-16">
        <p className='font-bold md:mt-2'>Safari</p>
        <p>We are currently blocking Safari due to extension management limitations (from Apple) and the dependency on Apple App Store.</p>
        <p className='font-bold md:mt-2'>FireFox</p>
        <p>We are currently blocking FireFox due to extension management limitations using Microsoft Intune.</p>
      </div>
      <button onClick={handleExitClick} className='font-bold absolute bottom-8 right-8'>EXIT</button>
    </div>
  )
}

export default Component16