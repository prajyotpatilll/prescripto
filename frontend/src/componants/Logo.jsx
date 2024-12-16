import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate()
  return (
    <div>
  <img 
    onClick={() => navigate('/')} 
    src={assets.logo} 
    alt="Logo" 
    className="w-32 sm:w-40 md:w-50 lg:w-55 cursor-pointer"
  />
</div>

  )
}

export default Logo
