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
import KienbockDisease from '../../pages/drDarshanServices/KienbockDisease'


// dr darshan services

import CarpalTunnel from '../../pages/drDarshanServices/CarpalTunnel'
import CubitalTunnelSyndrome from '../../pages/drDarshanServices/CubitalTunnelSyndrome'
import ArthritisInvolvingFinger from '../../pages/drDarshanServices/ArthritisInvolvingFinger'
import BirthrelatedBrachialplexus from '../../pages/drDarshanServices/BirthrelatedBrachialplexus'
import BirthDefects from '../../pages/drDarshanServices/BirthDefects'
import CerebralPalsy from '../../pages/drDarshanServices/CerebralPalsy'
import Complexreconstructionrequiringbothsofttissueandbone from '../../pages/drDarshanServices/Complexreconstructionrequiringbothsofttissueandbone'
// import CubitalTunnelSyndrome from '../../pages/drDarshanServices/CubitalTunnelSyndrome'
import ElbowArthroscopy from '../../pages/drDarshanServices/ElbowArthroscopy'
import ElbowReplacement from '../../pages/drDarshanServices/ElbowReplacement'
import Flapscovertoupperorlowerlimbs from '../../pages/drDarshanServices/Flapscovertoupperorlowerlimbs'
import Freeflaps from '../../pages/drDarshanServices/Freeflaps'
import GiantCellTumor from '../../pages/drDarshanServices/GiantCellTumor'
import GlomusTumors from '../../pages/drDarshanServices/GlomusTumors'
import HandandWristFracture from '../../pages/drDarshanServices/HandandWristFracture'
import InfectionsHand from '../../pages/drDarshanServices/InfectionsHand'
import KeyholeSurgeryForHand from '../../pages/drDarshanServices/KeyholeSurgeryForHand'
// import KienbockDisease from '../../pages/drDarshanServices/KienbockDisease'
import LabralTear from '../../pages/drDarshanServices/LabralTear'
import LigamentRepairElbow from '../../pages/drDarshanServices/LigamentRepairElbow'
import Malunion from '../../pages/drDarshanServices/Malunion'
import NervePalsy from '../../pages/drDarshanServices/NervePalsy'
import NerveReconstruction from '../../pages/drDarshanServices/NerveReconstruction'
import Nerverelatedproblems from '../../pages/drDarshanServices/Nerverelatedproblems'
import NerveRepair from '../../pages/drDarshanServices/NerveRepair'
import Nonunion from '../../pages/drDarshanServices/Nonunion'
import Pollicization from '../../pages/drDarshanServices/Pollicization'
import PostBurnsContracture from '../../pages/drDarshanServices/PostBurnsContracture'
import QuervainsTenosynovitis from '../../pages/drDarshanServices/QuervainsTenosynovitis'
import RadialFractures from '../../pages/drDarshanServices/RadialFractures'
import Reconstructionforthelimbs from '../../pages/drDarshanServices/Reconstructionforthelimbs'
import RotatorCuffTear from '../../pages/drDarshanServices/RotatorCuffTear'
import ScaphoidFractures from '../../pages/drDarshanServices/ScaphoidFractures'
import ShoulderArthroscopy from '../../pages/drDarshanServices/ShoulderArthroscopy'
import ShoulderReplacement from '../../pages/drDarshanServices/ShoulderReplacement'
import SlapInjuries from '../../pages/drDarshanServices/SlapInjuries'
import SwellingLumps from '../../pages/drDarshanServices/SwellingLumps'
import Synovectomy from '../../pages/drDarshanServices/Synovectomy'
import SynovitisOfElbow from '../../pages/drDarshanServices/SynovitisOfElbow'
import TendonTransfer from '../../pages/drDarshanServices/TendonTransfer'
import TendonTransfers from '../../pages/drDarshanServices/TendonTransfers'
import Tuberculosis from '../../pages/drDarshanServices/Tuberculosis'
import TumorsofHand from '../../pages/drDarshanServices/TumorsofHand'
import UclInjuries from '../../pages/drDarshanServices/UclInjuries'
import VascularAnomalies from '../../pages/drDarshanServices/VascularAnomalies'
import Vascularisedfreefibula from '../../pages/drDarshanServices/Vascularisedfreefibula'
import Vascularizedbonegraftsfornonunions from '../../pages/drDarshanServices/Vascularizedbonegraftsfornonunions'
import VICVolkmanIschemicContracture from '../../pages/drDarshanServices/VICVolkmanIschemicContracture'
import WristArthroscopy from '../../pages/drDarshanServices/WristArthroscopy'
import StiffnessOfHandJoints from '../../pages/drDarshanServices/StiffnessOfHandJoints'
import ScaphoidNonnions from '../../pages/drDarshanServices/ScaphoidNonnions'
import CongenitalAnomalies from '../../pages/drDarshanServices/CongenitalAnomalies'
import ScapholunateLigamentInjury from '../../pages/drDarshanServices/ScapholunateLigamentInjury'
import TfccInjuries from '../../pages/drDarshanServices/TfccInjuries'
import DeQuervainsTenosynovitis from '../../pages/drDarshanServices/DeQuervainsTenosynovitis'


// pages

const RouterOutlet = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-clinic-bangalore" element={<Contact />} />

        <Route path="/dr-darshan-kumar-a-jain">
          <Route index element={<DrDarshan />} />

          {/* Auto-generated nested routes */}
          <Route path="carpal-tunnel-syndrome" element={<CarpalTunnel />} />
          <Route path="stiffness-of-joints-of-the-hand" element={<StiffnessOfHandJoints />} />
          <Route path="infections-of-the-hand" element={<InfectionsHand />} />
          <Route path="de-quervains-tenosynovitis" element={<DeQuervainsTenosynovitis />} />
          <Route path="swellings-lumps-and-bumps-of-the-hand" element={<SwellingLumps />} />
          <Route path="kienbocks-disease-avascular-necrosis-of-lunate" element={<KienbockDisease />} />
          <Route path="scaphoid-fractures" element={<ScaphoidFractures />} />
          <Route path="scaphoid-non-unions" element={<ScaphoidNonnions />} />
          <Route path="scapholunate-ligament-injury" element={<ScapholunateLigamentInjury />} />
          <Route path="radius-fracture" element={<RadialFractures />} />
          <Route path="tfcc-triangular-fibrocartilage-complex-injury" element={<TfccInjuries />} />
          <Route path="tendon-transfers-for-hand" element={<TendonTransfers />} />
          <Route path="wrist-arthroscopy" element={<WristArthroscopy />} />
          <Route path="cubital-tunnel-syndrome" element={<CubitalTunnelSyndrome />} />
          <Route path="cerebral-palsy" element={<CerebralPalsy />} />
          <Route path="tumors-of-hand" element={<TumorsofHand />} />
          <Route path="post-burns-contracture" element={<PostBurnsContracture />} />
          <Route path="vascular-anomalies" element={<VascularAnomalies />} />
          <Route path="ucl-injury" element={<UclInjuries />} />
          <Route path="glomus-tumors" element={<GlomusTumors />} />
          <Route path="giant-cell-tumor-gct" element={<GiantCellTumor />} />
          <Route path="tuberculosis" element={<Tuberculosis />} />
          <Route path="congenital-anomalies" element={<CongenitalAnomalies />} />
          <Route path="elbow-replacement-elbow-arthroplasty" element={<ElbowReplacement />} />
          <Route path="elbow-arthroscopy" element={<ElbowArthroscopy />} />
          <Route path="synovitis-of-elbow" element={<SynovitisOfElbow />} />
          <Route path="ligament-repair-or-reconstruction-of-elbow" element={<LigamentRepairElbow />} />
          <Route path="shoulder-arthroscopy" element={<ShoulderArthroscopy />} />
          <Route path="shoulder-replacement-arthroplasty" element={<ShoulderReplacement />} />
          <Route path="rotator-cuff-tear" element={<RotatorCuffTear />} />
          <Route path="labral-tear" element={<LabralTear />} />
          <Route path="slap-injuries" element={<SlapInjuries />} />
          <Route path="pollicization" element={<Pollicization />} />
          <Route path="malunion" element={<Malunion />} />
          <Route path="tendon-transfer" element={<TendonTransfer />} />
          <Route path="synovectomy" element={<Synovectomy />} />
          <Route path="nonunion" element={<Nonunion />} />
          <Route path="birth-related-brachial-plexus" element={<BirthrelatedBrachialplexus />} />
          <Route path="flaps-cover-to-upper-or-lower-limbs" element={<Flapscovertoupperorlowerlimbs />} />
          <Route path="vascularized-bone-grafts-for-non-unions" element={<Vascularizedbonegraftsfornonunions />} />
          <Route path="free-flaps" element={<Freeflaps />} />
          <Route path="vascularised-free-fibula" element={<Vascularisedfreefibula />} />
          <Route path="complex-reconstruction-requiring-both-soft-tissue-and-bone" element={<Complexreconstructionrequiringbothsofttissueandbone />} />
          {/* <Route path="vic-volkmans-ischemic-contracture-treatment-in-malleshwaram-bangalore" element={<VICVolkmanIschemicContracture />} />
          <Route path="reconstruction-for-the-limbs-treatment-in-malleshwaram-bangalore" element={<Reconstructionforthelimbs />} /> */}
          <Route path="nerve-repair" element={<NerveRepair />} />
          <Route path="nerve-reconstruction" element={<NerveReconstruction />} />
          <Route path="nerve-related-problems-affecting-the-hand-brachial-plexus-injuries-nerve-injuries" element={<Nerverelatedproblems />} />
          <Route path="vic-volkmans-ischemic-contracture" element={<VICVolkmanIschemicContracture />} />
          <Route path="reconstruction-for-the-limbs" element={<Reconstructionforthelimbs />} />
        </Route>

        <Route path="/dr-divya-sundaresh">
          <Route index element={<DrDivya />} />
          {/* <Route path="de-quervains-tenosynovitis-treatment" element={<DeQuervain />} /> */}

          {/* Eyelid */}
          <Route path='eyelid' element={<Eyelid />} />
          <Route path='asian-blepharoplasty' element={<AsianBlepharoplasty />} />
          <Route path='entropion-repair' element={<EntropionRepair />} />
          <Route path='canthal-resection' element={<CanthalResection />} />
          <Route path='canthopexy' element={<Canthopexy />} />
          <Route path='epicanthoplasty' element={<Epicanthoplasty />} />
          <Route path='eyelid-retraction' element={<EyelidRetraction />} />
          <Route path='blepharophimosis' element={<Blepharophimosis />} />
          <Route path='eyelid-synkinesis' element={<EyelidSynkinesis />} />

          {/* Orbit */}
          <Route path='orbital-disease' element={<OrbitalDisease />} />
          <Route path='orbital-decompression' element={<OrbitalDecompression />} />
          <Route path='wall-decompression' element={<WallDecompression />} />
          <Route path='wall-decompression-3' element={<WallDecompression3 />} />

          {/* Lacrimal */}
          <Route path='endoscopic-dcr' element={<EndoscopicDCR />} />
          <Route path='cdcr-dct-ballon' element={<CDCRDCTBallon />} />
          <Route path='dacryoplasty' element={<Dacryoplasty />} />
          <Route path='lester-jones-surgery' element={<LesterJonesSurgery />} />

          {/* Orbital Tumors */}
          <Route path='orbital-tumors' element={<OrbitalTumors />} />
          <Route path='cavernous-hemangioma' element={<CavernousHemangioma />} />
          <Route path='orbital-lymphoma' element={<OrbitalLymphoma />} />
          <Route path='pseudo-tumor' element={<Pseudotumor />} />

          {/* Ocular Surface Tumors */}
          <Route path='ocular-surface-tumors' element={<OcularSurfaceTumors />} />
          <Route path='conjuctival-cyst' element={<ConjuctivalCyst />} />
          <Route path='removal-surgery' element={<RemovalSurgery />} />

          {/* Eyelid Cancers & Tumors */}
          <Route path='sebaceous-cell-carcinoma' element={<Sebaceouscellcarcinoma />} />
          <Route path='malignant-melanomas' element={<Malignantmelanomas />} />
          <Route path='mohs-surgery' element={<MohsSurgery />} />
          <Route path='tenzels-flap' element={<Tenzelsflap />} />
          <Route path='hughes-flap' element={<HughesFlap />} />
          <Route path='cutler-beard-flap' element={<CutlerBeardFlap />} />
          <Route path='mustardes-flap' element={<MustardesFlap />} />

          {/* Retinal Tumors */}
          <Route path='choroidal-metastasis' element={<ChoroidalMetastasis />} />
          <Route path='choroidal-melanoma' element={<ChoroidalMelanoma />} />
          <Route path='enucleation' element={<Enucleation />} />
          <Route path='evisceration' element={<Evisceration />} />
          <Route path='exenteration' element={<Exenteration />} />
        </Route>


        <Route path='/hand-eye-care-blog-bangalore'>
          <Route index element={<AllBlog />}></Route>
          <Route path=":slug" element={<SingleBlogPage />}></Route>
        </Route>

        <Route path='/fellowship-medical-jobs-bangalore' element={<Career />} />

        {/* <Route path='/' /> */}

      </Routes>

    </div>
  )
}

export default RouterOutlet
