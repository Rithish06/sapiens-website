import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../pages/home/Home'
import Contact from '../../pages/contactUs/Contact'
import DrDarshan from '../../pages/drDarshan/DrDarshan'
import DeQuervain from '../../pages/services/DeQuervain'
import DrDivya from '../../pages/drDivya/DrDivya'

// pages

const RouterOutlet = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dr-darshan">
          <Route index element={<DrDarshan />} />
          <Route path="de-quervains-tenosynovitis-treatment" element={<DeQuervain />} />
        </Route>

        <Route path="/dr-divya-sundaresh">
          <Route index element={<DrDivya />} />
          <Route path="de-quervains-tenosynovitis-treatment" element={<DeQuervain />} />
        </Route>

      </Routes>
    </div>
  )
}

export default RouterOutlet
