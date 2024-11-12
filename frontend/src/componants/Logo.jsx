import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate()
  return (
    <div>
      <img onClick={()=>navigate('/')} src={assets.logo} alt=""  className='w-44 cursor-pointer'/>
    </div>
  )
}

export default Logo
