import React from 'react'
import Header from '../componants/Header'
import Speciallitymenu from '../componants/Speciallitymenu'
import Topdoctors from '../componants/Topdoctors'
import Banner from '../componants/Banner'
import Footer from '../componants/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Speciallitymenu/>
      <Topdoctors/>
      <Banner/>
    </div>
  )
}

export default Home
