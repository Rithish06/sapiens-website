import React, { useEffect } from 'react'
import RouterOutlet from './components/router/router'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { useLocation } from 'react-router-dom';

const App = () => {

  const pathname = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      // behavior : 'smooth'
    })
  }, [pathname])

  return (
    <div>
      <Navbar />
      <div className='relative'>
        {/* <RouterOutlet />
            <CarpalTunnel />
            <RouterOutlet /> */}
        <RouterOutlet />
        {/* <CarpalTunnel /> */}
        {/* <SportInjuredHand /> */}
        {/* <StiffnessOfHandJoints /> */}
        {/* <HandandWristFracture /> */}
        {/* <ScaphoidFractures /> */}
        {/* <Servicesbanner /> */}
        {/* <ScaphoidFractures /> */}
        {/* <RadialFractures /> */}

        {/* <BirthrelatedBrachialplexus/> */}
        {/* <Cerebralpalsy/> */}
        {/* <Flapscovertoupperorlowerlimbs/> */}
        {/* <Vascularizedbonegraftsfornonunions/> */}
        {/* <Freeflaps/> */}
        {/* <Complexreconstructionrequiringbothsofttissueandbone/> */}
        {/* <VICVolkmanIschemicContracture/> */}
        {/* <Reconstructionforthelimbs/> */}
        {/* <Nerverelatedproblems/> */}

        {/* <AsianBlepharoplasty/> */}
        {/* <Blepharophimosis/> */}
        {/* <CanthalResection/> */}
        {/* <Canthopexy/> */}
        {/* <EntropionRepair/> */}
        {/* <Epicanthoplasty/> */}
        {/* <Eyelid/> */}
        {/* <EyelidRetraction/> */}
        {/* <EyelidSynkinesis/> */}
        {/* <SurgicalBlepharoplasty/> */}
        {/* <ChoroidalMelanoma/> */}
      </div>
      {/* <Career /> */}
      <Footer />
    </div>
  )
}

export default App
