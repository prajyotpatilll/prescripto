import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div>
      <div>
        <p>
        Book Appointment <br /> With Trusted Doctors
        </p>
        <div>
            <img src={assets.group_profiles} alt="" srcset="" />
            <p>Simply browse through our extensive list of trusted doctors,<br /> 
            schedule your appointment hassle-free.</p>
        </div>
        <a href="">
            book Appointment <img src={assets.arrow_icon} alt="" srcset="" />
        </a>

      </div>
      <div>
          <img src={assets.header_img} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Header
