import React from 'react'
import img1 from '../images/slide13-1.png'
import img2 from '../images/slide13-2.png'

const Component13 = () => {
  return (
    <div className='h-screen md:p-4 flex flex-col w-full'>
        <div className="h-[30%] w-full flex">
            <p className='md:p-14 md:w-3/4'>
              Select Certificate
            </p>
            <img src={img1} alt="" />
        </div>      
        <div className="h-[65%] w-full flex">
            <ul className='list-disc md:p-14'>
                <li>SafeQ Client: Update images</li>
                <p>Make sure Global Protect VPN is connected before following below steps.</p>
                <p>Click the SafeQ icon at the top menu, select "Configuration" and add the following, select "OK" when done.</p>
                <p><span className='font-bold'>Server address or host name: </span>print.gci.telenor.com</p>
                <p><span className='font-bold'>Account domain name: </span>print.gci.telenor.com</p>
                <p>Hit "Test" to confirm that the HCP Client can contact the server.</p>
                <p><span className='font-bold'>AUthentication Type: </span>Manual login to HCP server.</p>
                <p>Click the SafeQ Client icon at the top menu again, select "Login". Sign-in using Azure AD username and password, remember to check "Remember me until I logout".</p>
                <p>TSS Diversity manual</p>
            </ul>
            <img src={img2} alt="" className='md:mx-auto' />
        </div>      
    </div>
  )
}

export default Component13