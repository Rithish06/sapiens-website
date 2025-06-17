import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../pages/home/Home'
import Contact from '../../pages/contactUs/Contact'
import DrDarshan from '../../pages/drDarshan/DrDarshan'
import DeQuervain from '../../pages/services/DeQuervain'
import DrDivya from '../../pages/drDivya/DrDivya'
import Eyelid from '../../pages/services/Dr.Divya/Eyelid'
import AsianBlepharoplasty from '../../pages/services/Dr.Divya/AsianBlepharoplasty'
import EntropionRepair from '../../pages/services/Dr.Divya/EntropionRepair'
import CanthalResection from '../../pages/services/Dr.Divya/CanthalResection'
import Canthopexy from '../../pages/services/Dr.Divya/Canthopexy'
import Epicanthoplasty from '../../pages/services/Dr.Divya/Epicanthoplasty'
import EyelidRetraction from '../../pages/services/Dr.Divya/EyelidRetraction'
import Blepharophimosis from '../../pages/services/Dr.Divya/Blepharophimosis'
import EyelidSynkinesis from '../../pages/services/Dr.Divya/EyelidSynkinesis'
import OrbitalDisease from '../../pages/services/Dr.Divya/Orbit/OrbitalDisease '
import OrbitalDecompression from '../../pages/services/Dr.Divya/Orbit/OrbitalDecompression'
import WallDecompression from '../../pages/services/Dr.Divya/Orbit/WallDecompression'
import WallDecompression3 from '../../pages/services/Dr.Divya/Orbit/WallDecompression3'
import EndoscopicDCR from '../../pages/services/Dr.Divya/Lacrimal/EndoscopicDCR'
import CDCRDCTBallon from '../../pages/services/Dr.Divya/Lacrimal/CDCRDCTBallon'
import Dacryoplasty from '../../pages/services/Dr.Divya/Lacrimal/Dacryoplasty'
import LesterJonesSurgery from '../../pages/services/Dr.Divya/Lacrimal/LesterJonesSurgery'
import OrbitalTumors from '../../pages/services/Dr.Divya/OrbitalTumors/OrbitalTumors'
import CavernousHemangioma from '../../pages/services/Dr.Divya/OrbitalTumors/CavernousHemangioma'
import OrbitalLymphoma from '../../pages/services/Dr.Divya/OrbitalTumors/OrbitalLymphoma'
import Pseudotumor from '../../pages/services/Dr.Divya/OrbitalTumors/Pseudotumor'
import OcularSurfaceTumors from '../../pages/services/Dr.Divya/OcularSurfaceTumors/OcularSurfaceTumors'
import ConjuctivalCyst from '../../pages/services/Dr.Divya/OcularSurfaceTumors/ConjuctivalCyst'
import RemovalSurgery from '../../pages/services/Dr.Divya/OcularSurfaceTumors/RemovalSurgery'
import Sebaceouscellcarcinoma from '../../pages/services/Dr.Divya/EyelidCancers&Tumors/Sebaceouscellcarcinoma'
import Malignantmelanomas from '../../pages/services/Dr.Divya/EyelidCancers&Tumors/Malignantmelanomas'
import MohsSurgery from '../../pages/services/Dr.Divya/EyelidCancers&Tumors/MohsSurgery'
import Tenzelsflap from '../../pages/services/Dr.Divya/EyelidCancers&Tumors/Tenzelsflap'
import HughesFlap from '../../pages/services/Dr.Divya/EyelidCancers&Tumors/HughesFlap'
import CutlerBeardFlap from '../../pages/services/Dr.Divya/EyelidCancers&Tumors/CutlerBeardFlap'
import MustardesFlap from '../../pages/services/Dr.Divya/EyelidCancers&Tumors/MustardesFlap'
import ChoroidalMelanoma from '../../pages/services/Dr.Divya/RetinalTumors/ChoroidalMelanoma'
import ChoroidalMetastasis from '../../pages/services/Dr.Divya/RetinalTumors/ChoroidalMetastasis'
import Enucleation from '../../pages/services/Dr.Divya/RetinalTumors/Enucleation'
import Evisceration from '../../pages/services/Dr.Divya/RetinalTumors/Evisceration'
import Exenteration from '../../pages/services/Dr.Divya/RetinalTumors/Exenteration'
import Career from '../../pages/career/Career'
import AllBlog from '../../pages/blog/AllBlog'
import SingleBlogPage from '../../pages/blog/SingleBlogPage'

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

          {/* Eyelid */}
          <Route path='Eyelid' element={<Eyelid />} />
          <Route path='Asian-Blepharoplasty' element={<AsianBlepharoplasty />} />
          <Route path='Entropion-Repair' element={<EntropionRepair />} />
          <Route path='Canthal-Resection' element={<CanthalResection />} />
          <Route path='Canthopexy' element={<Canthopexy />} />
          <Route path='Epicanthoplasty' element={<Epicanthoplasty />} />
          <Route path='Eyelid-Retraction' element={<EyelidRetraction />} />
          <Route path='Blepharophimosis' element={<Blepharophimosis />} />
          <Route path='Eyelid-Synkinesis' element={<EyelidSynkinesis />} />


          <Route path='Orbital-Disease' element={<OrbitalDisease />} />
          <Route path='Orbital-Decompression' element={<OrbitalDecompression />} />
          <Route path='Wall-Decompression' element={<WallDecompression />} />
          <Route path='Wall-Decompression-3' element={<WallDecompression3 />} />

          <Route path='Endoscopic-DCR' element={<EndoscopicDCR />} />
          <Route path='CDCR-DCT-Ballon' element={<CDCRDCTBallon />} />
          <Route path='Dacryoplasty' element={<Dacryoplasty />} />
          <Route path='Lester-Jones-Surgery' element={<LesterJonesSurgery />} />


          <Route path='Orbital-Tumors' element={<OrbitalTumors />} />
          <Route path='Cavernous-Hemangioma' element={<CavernousHemangioma />} />
          <Route path='Orbital-Lymphoma' element={<OrbitalLymphoma />} />
          <Route path='Pseudo-tumor' element={<Pseudotumor />} />

          <Route path='Ocular-Surface-Tumors' element={<OcularSurfaceTumors />} />
          <Route path='Conjuctival-Cyst' element={<ConjuctivalCyst />} />
          <Route path='Removal-Surgery' element={<RemovalSurgery />} />

          <Route path='Sebaceous-cell-carcinoma' element={<Sebaceouscellcarcinoma />} />
          <Route path='Malignant-melanomas' element={<Malignantmelanomas />} />
          <Route path='Mohs-Surgery' element={<MohsSurgery />} />
          <Route path='Tenzels-flap' element={<Tenzelsflap />} />
          <Route path='Hughes-Flap' element={<HughesFlap />} />
          <Route path='Cutler-Beard-Flap' element={<CutlerBeardFlap />} />
          <Route path='Mustardes-Flap' element={<MustardesFlap />} />

          <Route path='Choroidal-Metastasis' element={<ChoroidalMetastasis />} />
          <Route path='Choroidal-Melanoma' element={<ChoroidalMelanoma />} />
          <Route path='Enucleation' element={<Enucleation />} />
          <Route path='Evisceration' element={<Evisceration />} />
          <Route path='Exenteration' element={<Exenteration />} />
        </Route>

          <Route path='/blog'>
            <Route index element={<AllBlog />}></Route>
            <Route path=":slug" element={<SingleBlogPage />}></Route>
          </Route>

        <Route path='/career' element={<Career />} />

        {/* <Route path='/' /> */}

      </Routes>

    </div>
  )
}

export default RouterOutlet
