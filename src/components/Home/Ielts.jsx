import React from 'react'
import listening from '../../assets/listening.png'
import writing from '../../assets/writing.png'
import speaking from '../../assets/speaking.png'
import reading from '../../assets/reading.png'

const Ielts = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-[#FFEEFF] to-[#FFE1E1] px-6 h-screen flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className='text-center font-bold text-4xl text-[#1A1A1A] mb-14'>
        IELTS
      </h1>

      {/* Icons Section */}
      <div className="flex flex-wrap justify-center gap-12 md:gap-16">
        {/* Listening Card */}
        <div className="flex flex-col items-center border-[2px] border-[#FFE1E1] rounded-xl p-6 shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl bg-white">
          <img src={listening} alt="Listening" className="w-32 h-32 object-contain mb-6" />
          <p className="font-semibold text-[#4A4A4A] text-lg">Listening</p>
        </div>

        {/* Writing Card */}
        <div className="flex flex-col items-center border-[2px] border-[#DFEDFF] rounded-xl p-6 shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl bg-white">
          <img src={writing} alt="Writing" className="w-32 h-32 object-contain mb-6" />
          <p className="font-semibold text-[#4A4A4A] text-lg">Writing</p>
        </div>

        {/* Speaking Card */}
        <div className="flex flex-col items-center border-[2px] border-[#FFE1E1] rounded-xl p-6 shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl bg-white">
          <img src={speaking} alt="Speaking" className="w-32 h-32 object-contain mb-6" />
          <p className="font-semibold text-[#4A4A4A] text-lg">Speaking</p>
        </div>

        {/* Reading Card */}
        <div className="flex flex-col items-center border-[2px] border-[#DFEDFF] rounded-xl p-6 shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl bg-white">
          <img src={reading} alt="Reading" className="w-32 h-32 object-contain mb-6" />
          <p className="font-semibold text-[#4A4A4A] text-lg">Reading</p>
        </div>
      </div>
    </div>
  )
}

export default Ielts;
