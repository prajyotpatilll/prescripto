import React from 'react';
import { NavLink } from 'react-router-dom';

const Navcom = ({ style }) => {
  return (
    <div>
      <ul className={`hidden md:flex ${style} items-start gap-10 font-medium`}>
        <NavLink to='/'>
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>All Doctors</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>About</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>Contact</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navcom;