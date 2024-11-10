import React, { useState } from 'react'
import {assets} from '../assets/assets_frontend/assets.js'
import { NavLink,useNavigate } from 'react-router-dom'

const Navbar = () => {
    //use navigate hook
    const navigate = useNavigate();

    //dropdown and login button
    const [showmenu, setshowmenu] = useState(false)
    const [token, settoken] = useState(true)


  return (
    <div className='flex items-center justify-around py-4 mb-5 border-b border-b-gray-400'>
      <NavLink to='/'>
        <img src={assets.logo} alt=""  className='w-44 cursor-pointer'/>
      </NavLink>
      
      <ul className='hidden md:flex items-start gap-10 font-medium'>
        <NavLink to='/'> 
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/About'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token
            ? <div className='flex items-center gap-6 cursor-pointer group relative'>
                <img className='w-10 rounded-full' src={assets.profile_pic} alt="" srcset="" />
                <img className='w-3' src={assets.dropdown_icon} alt="" srcset="" />
                <div className='absolute top-0 right-0 pt-20 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-50 rounded flex-col gap-5 p-4'>
                        <p onClick={()=>navigate('./Myprofile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('./Myappointment')} className='hover:text-black cursor-pointer'>My appointment</p>
                        <p onClick={()=>settoken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
            :<button onClick={()=>navigate('./Login')} className='px-6 py-2  bg-blue-500 text-white rounded-full font-light h-15'>
            Create Account
        </button>
        }
        
      </div>
    </div>
  )
}

export default Navbar
