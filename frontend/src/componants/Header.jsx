import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
    <div className='flex flex-col items-center justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-20px] md:w-1/2'>
      <p className='text-3xl md:text-4xl lg:text-5xl text-white leading-tight md:leading-tight font-semibold text-center'>
        Book Appointment <br /> With Trusted Doctors
      </p>
      <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light text-center'>
        <img src={assets.group_profiles} alt="" />
        <p>Simply browse through our extensive list of trusted doctors,<br className='md:block hidden' />
          schedule your appointment hassle-free.
        </p>
      </div>
      <a href="#speciallity" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
        Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
      </a>
    </div>
    <div className='md:w-1/2 relative'>
      <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
    </div>
  </div>
  

  )
}

export default Header
