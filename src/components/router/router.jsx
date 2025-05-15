import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../pages/home/home'
import Contact from '../../pages/contactUs/Contact'
import DrDarshan from '../../pages/drDarshan/DrDarshan'
import DeQuervain from '../../pages/services/DeQuervain'
// pages

const RouterOutlet = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* Parent route with Outlet for nested content */}
        <Route path="/dr-darshan">
          <Route index element={<DrDarshan />} />
          <Route path="de-quervains-tenosynovitis-treatment" element={<DeQuervain />} />
        </Route>
      </Routes>
    </div>
  )
}

export default RouterOutlet