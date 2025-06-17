import React, { useEffect } from 'react'
import RouterOutlet from './components/router/router'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import {useLocation } from 'react-router-dom';
import Career from './pages/career/Career';
import CarpalTunnel from './pages/drDarshanServices/CarpalTunnel';

const App = () => {

  const pathname = useLocation()

  useEffect(() => {
    window.scrollTo({
      top : 0,
      // behavior : 'smooth'
    })
  },[pathname])

  return (
    <div>
        <Navbar />
          <div className='relative'>
            {/* <RouterOutlet /> */}
            <CarpalTunnel />
          </div>
          {/* <Career /> */}
        <Footer />
    </div>
  )
}

export default App
