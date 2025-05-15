import React, { useEffect } from 'react'
import RouterOutlet from './components/router/router'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import {useLocation } from 'react-router-dom';

const App = () => {

  const pathname = useLocation()

  useEffect(() => {
    window.scrollTo({
      top : 0,
      behavior : 'smooth'
    })
  },[pathname])

  return (
    <div>
        <Navbar />
          <RouterOutlet />
        <Footer />
    </div>
  )
}

export default App
