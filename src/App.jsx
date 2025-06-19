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
import ArthritisInvolvingFinger from './pages/drDarshanServices/ArthritisInvolvingFinger';
import WristArthroscopy from './pages/drDarshanServices/WristArthroscopy';
import BirthDefects from './pages/drDarshanServices/BirthDefects';
import CubitalTunnelSyndrome from './pages/drDarshanServices/CubitalTunnelSyndrome';
import KeyholeSurgeryForHand from './pages/drDarshanServices/KeyholeSurgeryForHand';
import CerebralPalsy from './pages/drDarshanServices/CerebralPalsy';
import PostBurnsContracture from './pages/drDarshanServices/PostBurnsContracture';
import TumorsofHand from './pages/drDarshanServices/TumorsofHand';
import VascularAnomalies from './pages/drDarshanServices/VascularAnomalies';
import UclInjuries from './pages/drDarshanServices/UclInjuries';
import GlomusTumors from './pages/drDarshanServices/GlomusTumors';
import GiantCellTumor from './pages/drDarshanServices/GiantCellTumor';
import Tuberculosis from './pages/drDarshanServices/Tuberculosis';
import CongenitalAnomalies from './pages/drDarshanServices/CongenitalAnomalies';
import ElbowReplacement from './pages/drDarshanServices/ElbowReplacement';
import ElbowArthroscopy from './pages/drDarshanServices/ElbowArthroscopy';
import SynovitisOfElbow from './pages/drDarshanServices/SynovitisOfElbow';
import LigamentRepairElbow from './pages/drDarshanServices/LigamentRepairElbow';
import ShoulderArthroscopy from './pages/drDarshanServices/ShoulderArthroscopy';
import ShoulderReplacement from './pages/drDarshanServices/ShoulderReplacement';

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
            <RouterOutlet />
{/*             <CarpalTunnel /> */}
            {/* <RouterOutlet /> */}
            {/* <CarpalTunnel /> */}
            {/* <SportInjuredHand /> */}
            {/* <StiffnessOfHandJoints /> */}
            {/* <HandandWristFracture /> */}
            {/* <ScaphoidFractures /> */}
            {/* <Servicesbanner /> */}
            {/* <ScaphoidFractures /> */}
            {/* <ArthritisInvolvingFinger /> */}
            {/* <RadialFractures /> */}
            {/* <WristArthroscopy /> */}
            {/* <BirthDefects /> */}
            {/* <CubitalTunnelSyndrome /> */}
            {/* <KeyholeSurgeryForHand /> */}
            {/* <CerebralPalsy /> */}
            {/* <PostBurnsContracture /> */}
            {/* <TumorsofHand /> */}
            {/* <VascularAnomalies /> */}
            {/* <UclInjuries /> */}
            {/* <GlomusTumors /> */}
            {/* <GiantCellTumor /> */}
            {/* <Tuberculosis /> */}
            {/* <CongenitalAnomalies /> */}
            {/* <ElbowReplacement /> */}
            {/* <ElbowArthroscopy /> */}
            {/* <SynovitisOfElbow /> */}
            {/* <LigamentRepairElbow /> */}
            {/* <ShoulderArthroscopy /> */}
            {/* <ShoulderReplacement /> */}
          </div>
          {/* <Career /> */}
        <Footer />
    </div>
  )
}

export default App
