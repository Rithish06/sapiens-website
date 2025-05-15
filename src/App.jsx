import React from 'react'
import RouterOutlet from './components/router/router'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar />
          <RouterOutlet />
        <Footer />
    </div>
  )
}

export default App
