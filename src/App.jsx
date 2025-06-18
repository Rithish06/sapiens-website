import React, { useEffect } from 'react'
import RouterOutlet from './components/router/router'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import {useLocation } from 'react-router-dom';
import SurgicalBlepharoplasty from './pages/services/Dr.Divya/SurgicalBlepharoplasty'
import AsianBlepharoplasty from './pages/services/Dr.Divya/AsianBlepharoplasty'
import EntropionRepair from './pages/services/Dr.Divya/EntropionRepair'
import CanthalResection from './pages/services/Dr.Divya/CanthalResection'
import Canthopexy from './pages/services/Dr.Divya/Canthopexy'
import Epicanthoplasty from './pages/services/Dr.Divya/Epicanthoplasty'
import EyelidRetraction from './pages/services/Dr.Divya/EyelidRetraction'
import Blepharophimosis from './pages/services/Dr.Divya/Blepharophimosis'
import EyelidSynkinesis from './pages/services/Dr.Divya/EyelidSynkinesis'
import OrbitalDecompression from './pages/services/Dr.Divya/Orbit/OrbitalDecompression'
import OrbitalDisease from './pages/services/Dr.Divya/Orbit/OrbitalDisease '
import ContactPage from './pages/services/ContactPage/ContactPage'
import WallDecompression from './pages/services/Dr.Divya/Orbit/WallDecompression'
import WallDecompression3 from './pages/services/Dr.Divya/Orbit/WallDecompression3'
import EndoscopicDCR from './pages/services/Dr.Divya/Lacrimal/EndoscopicDCR'
import CDCRDCTBallon from './pages/services/Dr.Divya/Lacrimal/CDCRDCTBallon'
import Dacryoplasty from './pages/services/Dr.Divya/Lacrimal/Dacryoplasty'
import LesterJonesSurgery from './pages/services/Dr.Divya/Lacrimal/LesterJonesSurgery'
import OrbitalTumors from './pages/services/Dr.Divya/OrbitalTumors/OrbitalTumors'
import CavernousHemangioma from './pages/services/Dr.Divya/OrbitalTumors/CavernousHemangioma'
import Pseudotumor from './pages/services/Dr.Divya/OrbitalTumors/Pseudotumor'
import OrbitalLymphoma from './pages/services/Dr.Divya/OrbitalTumors/OrbitalLymphoma'
import OcularSurfaceTumors from './pages/services/Dr.Divya/OcularSurfaceTumors/OcularSurfaceTumors'
import ConjuctivalCyst from './pages/services/Dr.Divya/OcularSurfaceTumors/ConjuctivalCyst'
import RemovalSurgery from './pages/services/Dr.Divya/OcularSurfaceTumors/RemovalSurgery'
import Sebaceouscellcarcinoma from './pages/services/Dr.Divya/EyelidCancers&Tumors/Sebaceouscellcarcinoma'
import Malignantmelanomas from './pages/services/Dr.Divya/EyelidCancers&Tumors/Malignantmelanomas'
import MohsSurgery from './pages/services/Dr.Divya/EyelidCancers&Tumors/MohsSurgery'
import Tenzelsflap from './pages/services/Dr.Divya/EyelidCancers&Tumors/Tenzelsflap'
import HughesFlap from './pages/services/Dr.Divya/EyelidCancers&Tumors/HughesFlap'
import CutlerBeardFlap from './pages/services/Dr.Divya/EyelidCancers&Tumors/CutlerBeardFlap'
import MustardesFlap from './pages/services/Dr.Divya/EyelidCancers&Tumors/MustardesFlap'
import RetinalTumors from './pages/services/Dr.Divya/RetinalTumors/RetinalTumors'
import ChoroidalMetastasis from './pages/services/Dr.Divya/RetinalTumors/ChoroidalMetastasis'
import ChoroidalMelanoma from './pages/services/Dr.Divya/RetinalTumors/ChoroidalMelanoma'
import Enucleation from './pages/services/Dr.Divya/RetinalTumors/Enucleation'
import Evisceration from './pages/services/Dr.Divya/RetinalTumors/Evisceration'
import Exenteration from './pages/services/Dr.Divya/RetinalTumors/Exenteration'
import Eyelid from './pages/services/Dr.Divya/Eyelid'
import DeQuervain from './pages/services/DeQuervain'
import Career from './pages/career/Career';
import CarpalTunnel from './pages/drDarshanServices/CarpalTunnel';
import SportInjuredHand from './pages/drDarshanServices/SportInjuredHand';
import StiffnessOfHandJoints from './pages/drDarshanServices/StiffnessOfHandJoints';
import HandandWristFracture from './pages/drDarshanServices/HandandWristFracture';
import ScaphoidFractures from './pages/drDarshanServices/ScaphoidFractures';
import Servicesbanner from './components/services-banner/Servicesbanner';
import RadialFractures from './pages/drDarshanServices/RadialFractures';

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
            {/* <CarpalTunnel /> */}
            {/* <SportInjuredHand /> */}
            {/* <StiffnessOfHandJoints /> */}
            {/* <HandandWristFracture /> */}
            {/* <ScaphoidFractures /> */}
            {/* <Servicesbanner /> */}
            {/* <ScaphoidFractures /> */}
            <RadialFractures />
          </div>
          {/* <Career /> */}
        <Footer />
    </div>
  )
}

export default App
