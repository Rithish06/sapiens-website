import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';


const Footer = () => {

    const drDivyaServices = [
        {
            link: '/dr-divya-sundaresh/eyelid',
            text: 'Eyelid',

        },
        {
            link: '/dr-divya-sundaresh/asian-blepharoplasty',
            text: 'Asian Blepharoplasty',

        },
        {
            link: '/dr-divya-sundaresh/entropion-repair',
            text: 'Entropion Repair',
        },
        {
            link: '/dr-divya-sundaresh/canthal-resection',
            text: 'Canthal Resection',
        },
        {
            link: '/dr-divya-sundaresh/canthopexy',
            text: 'Canthopexy',
        },
        {
            link: '/dr-divya-sundaresh/epicanthoplasty',
            text: 'Epicanthoplasty',
        },
        {
            link: '/dr-divya-sundaresh/eyelid-retraction',
            text: 'Eyelid Malpositions',
        },
        {
            link: '/dr-divya-sundaresh/blepharophimosis',
            text: 'Blepharophimosis',
        },
        {
            link: '/dr-divya-sundaresh/eyelid-synkinesis',
            text: 'Eyelid Synkinesis',
        },
        {
            link: '/dr-divya-sundaresh/eyelid-retraction',
            text: 'Eyelid Retraction',
        },
        {
            link: '/dr-divya-sundaresh/orbital-disease',
            text: 'Orbit',
        },
        {
            link: '/dr-divya-sundaresh/orbital-decompression',
            text: 'Orbital Decompression',
        },
        {
            link: '/dr-divya-sundaresh/wall-decompression',
            text: '2 Wall Decompression',
        },
        {
            link: '/dr-divya-sundaresh/wall-decompression-3',
            text: '3 and 4 Wall Decompression',
        },
        {
            link: '/dr-divya-sundaresh/endoscopic-dcr',
            text: 'Endoscopic DCR',
        },
        {
            link: '/dr-divya-sundaresh/cdcr-dct-ballon',
            text: 'CDCR DCT Ballon',
        },
        {
            link: '/dr-divya-sundaresh/dacryoplasty',
            text: 'Dacryoplasty',
        },
        {
            link: '/dr-divya-sundaresh/lester-jones-surgery',
            text: 'Lester Jones Surgery',
        },
        {
            link: '/dr-divya-sundaresh/orbital-tumors',
            text: 'Orbital Tumors',
        },
        {
            link: '/dr-divya-sundaresh/cavernous-hemangioma',
            text: 'Cavernous Hemangioma',
        },
        {
            link: '/dr-divya-sundaresh/orbital-lymphoma',
            text: 'Orbital Lymphoma',
        },
        {
            link: '/dr-divya-sundaresh/pseudo-tumor',
            text: 'Pseudo tumor',
        },
        {
            link: '/dr-divya-sundaresh/ocular-surface-tumors',
            text: 'Ocular Surface Tumors',
        },
        {
            link: '/dr-divya-sundaresh/conjuctival-cyst',
            text: 'Conjuctival Cyst',
        },
        {
            link: '/dr-divya-sundaresh/removal-surgery',
            text: 'Removal Surgery',
        },
        {
            link: '/dr-divya-sundaresh/sebaceous-cell-carcinoma',
            text: 'Sebaceous cell carcinoma',
        },
        {
            link: '/dr-divya-sundaresh/malignant-melanomas',
            text: 'Malignant melanomas',
        },
        {
            link: '/dr-divya-sundaresh/mohs-surgery',
            text: 'Mohs Surgery',
        },
        {
            link: '/dr-divya-sundaresh/tenzels-flap',
            text: 'Tenzels flap',
        },
        {
            link: '/dr-divya-sundaresh/hughes-flap',
            text: 'Hughes Flap',
        },
        {
            link: '/dr-divya-sundaresh/cutler-beard-flap',
            text: 'Cutler Beard Flap',
            img: assets.Cutlerbreadflaps,
        },
        {
            link: '/dr-divya-sundaresh/mustardes-flap',
            text: 'Mustardes Flap',
        },
        {
            link: '/dr-divya-sundaresh/choroidal-metastasis',
            text: 'Choroidal Metastasis'
        },
        {
            link: '/dr-divya-sundaresh/choroidal-melanoma',
            text: 'Choroidal Melanoma',
        },
        {
            link: '/dr-divya-sundaresh/enucleation',
            text: 'Enucleation',
        },
        {
            link: '/dr-divya-sundaresh/evisceration',
            text: 'Evisceration',
        },
        {
            link: '/dr-divya-sundaresh/exenteration',
            text: 'Exenteration',
        },
    ]


    const drDarshanServices = [
        {
            name: "Carpal tunnel syndrome",
            link: "carpal-tunnel-syndrome",
        },
        {
            name: "Stiffness of joints of the hand.",
            link: "stiffness-of-joints-of-the-hand",
        },
        {
            name: "Infections of the hand.",
            link: "infections-of-the-hand",
        },
        {
            name: "De Quervain’s tenosynovitis",
            link: "de-quervains-tenosynovitis",
        },
        {
            name: "Swellings (lumps and bumps) of the hand.",
            link: "swellings-lumps-and-bumps-of-the-hand",
        },
        {
            name: "Kienbock’s disease (Avascular necrosis of lunate)",
            link: "kienbocks-disease-avascular-necrosis-of-lunate",
        },
        {
            name: "Scaphoid fractures",
            link: "scaphoid-fractures",
        },
        {
            name: "Scaphoid non unions",
            link: "scaphoid-non-unions",
        },
        {
            name: "Scapholunate ligament injury",
            link: "scapholunate-ligament-injury",
        },
        {
            name: "Radius fracture",
            link: "radius-fracture",
        },
        {
            name: "TFCC (Triangular Fibrocartilage Complex) injury",
            link: "tfcc-triangular-fibrocartilage-complex-injury",
        },
        {
            name: "Tendon transfers ( for hand, )",
            link: "tendon-transfers-for-hand",
        },
        {
            name: "Wrist arthroscopy",
            link: "wrist-arthroscopy",
        },
        {
            name: "Cubital tunnel syndrome",
            link: "cubital-tunnel-syndrome",
        },
        {
            name: "Cerebral palsy",
            link: "cerebral-palsy",
        },
        {
            name: "Tumors of hand",
            link: "tumors-of-hand",
        },
        {
            name: "Post burns contracture",
            link: "post-burns-contracture",
        },
        {
            name: "Vascular anomalies",
            link: "vascular-anomalies",
        },
        {
            name: "UCL injury",
            link: "ucl-injury",
        },
        {
            name: "Glomus tumors",
            link: "glomus-tumors",
        },
        {
            name: "Giant cell tumor (GCT)",
            link: "giant-cell-tumor-gct",
        },
        {
            name: "Tuberculosis",
            link: "tuberculosis",
        },
        {
            name: "Congenital anomalies",
            link: "congenital-anomalies",
        },
        {
            name: "Elbow replacement/ Elbow arthroplasty",
            link: "elbow-replacement-elbow-arthroplasty",
        },
        {
            name: "Elbow arthroscopy",
            link: "elbow-arthroscopy",
        },
        {
            name: "Synovitis of elbow",
            link: "synovitis-of-elbow",
        },
        {
            name: "Ligament repair or reconstruction of elbow",
            link: "ligament-repair-or-reconstruction-of-elbow",
        },
        {
            name: "Shoulder arthroscopy",
            link: "shoulder-arthroscopy",
        },
        {
            name: "Shoulder replacement/ arthroplasty",
            link: "shoulder-replacement-arthroplasty",
        },
        {
            name: "Rotator cuff tear",
            link: "rotator-cuff-tear",
        },
        {
            name: "Labral tear",
            link: "labral-tear",
        },
        {
            name: "SLAP injuries",
            link: "slap-injuries",
        },
        {
            name: "Pollicization",
            link: "pollicization",
        },
        {
            name: "Malunion",
            link: "malunion",
        },
        {
            name: "Tendon transfer",
            link: "tendon-transfer",
        },
        {
            name: "Synovectomy",
            link: "synovectomy",
        },
        {
            name: "Nonunion",
            link: "nonunion",
        },
        {
            name: "Nerve repair",
            link: "nerve-repair",
        },
        {
            name: "Nerve reconstruction",
            link: "nerve-reconstruction",
        },
        {
            name: "Nerve related problems affecting the hand, brachial plexus injuries, nerve injuries",
            link: "nerve-related-problems-affecting-the-hand-brachial-plexus-injuries-nerve-injuries",
        },
        {
            name: "Birth related Brachial plexus",
            link: "birth-related-brachial-plexus",
        },
        {
            name: "Cerebral palsy",
            link: "cerebral-palsy",
        },
        {
            name: "Flaps cover to upper or lower limbs",
            link: "flaps-cover-to-upper-or-lower-limbs",
        },
        {
            name: "Vascularized bone grafts for non-unions",
            link: "vascularized-bone-grafts-for-non-unions",
        },
        {
            name: "Free flaps",
            link: "free-flaps",
        },
        {
            name: "Vascularised free fibula",
            link: "vascularised-free-fibula",
        },
        {
            name: "Complex reconstruction requiring both soft tissue and bone",
            link: "complex-reconstruction-requiring-both-soft-tissue-and-bone",
        },
        {
            name: "VIC (Volkman’s Ischemic Contracture)",
            link: "vic-volkmans-ischemic-contracture",
        },
        {
            name: "Reconstruction for the limbs",
            link: "reconstruction-for-the-limbs",
        }

    ]

    return (
        <div className='bg-[#53646A] p-5 lg:px-20 lg:py-10'>
            <div className='lg:flex lg:gap-5'>
                <div className='flex flex-col items-center lg:items-center lg:w-50%'>
                    <div className="flex gap-3 items-center justify-center md:w-[90%]">
                        <img src={assets.logo} className='w-[134px] h-auto md:w-[224px] cursor-pointer' alt="Logo of Sapiens Clinic, Bangalore Karnataka" />
                        <div className='text-[20px] md:text-[36px] text-white font-[700] font-roboto md:w-[316px] mt-4 lg:mt-9'>Hand Surgery & Eye Care Centre</div>
                    </div>
                    <div className="text-[12px] md:text-[16px] text-white max-w-[700px]  font-roboto leading-[26px] mt-4 md:w-[90%]">Specializing in upper limb surgery and comprehensive eye care, we focus on accurate diagnosis, modern treatment techniques and patient-centered outcomes. Every procedure is backed by clinical expertise and delivered with precision and care.</div>
                    <div className='flex justify-center lg:justify-start lg:w-[90%]'>
                        <Link to='/contact-clinic-bangalore' className='border-none outline-nonefocus:outline-none font-roboto focus:ring-0 gradient-button-bg px-8 py-2.5 rounded-lg text-white text-[16px] font-[400] mt-6 cursor-pointer'>Book Appointment</Link>
                    </div>
                </div>
                <div className="flex gap-10 lg:gap-20 justify-center mt-14 lg:mt-10 lg:w-[50%]">
                    <div className='text-white'>
                        <div className='text-[20px] md:text-[24px] font-[700] font-roboto'>Menu</div>
                        <Link to="/"><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-4 cursor-pointer hover:text-orange'>Home</div></Link>
                        <Link to="/dr-darshan-kumar-a-jain"><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-4 cursor-pointer hover:text-orange'>Dr. Darshan Kumar A. Jain</div></Link>
                        <Link to="/dr-divya-sundaresh"><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-4 cursor-pointer hover:text-orange'>Dr. Divya D Sundaresh</div></Link>
                        <Link to="/contact-clinic-bangalore"><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-4 cursor-pointer hover:text-orange'>Contact Us</div></Link>
                        <Link to="/fellowship-medical-jobs-bangalore"><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-4 cursor-pointer hover:text-orange'>Career</div></Link>
                        <Link to="hand-eye-care-blog-bangalore"><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-4 cursor-pointer hover:text-orange'>Blog</div></Link>
                    </div>
                    <div className='text-white'>
                        <div className='text-[20px] md:text-[24px] font-[700] font-roboto'>Follow us</div>
                        <a href="https://www.facebook.com/profile.php?id=100089038095094" target='_blank'><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-3 cursor-pointer hover:text-orange'>Facebook</div></a>
                        <a href="https://www.instagram.com/sapiensclinicmalleswaram/" target='_blank'><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-3 cursor-pointer hover:text-orange'>Instagram</div></a>
                        <a href="https://www.youtube.com/@SapiensClinicMalleshwaram" target='_blank'><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-3 cursor-pointer hover:text-orange'>YouTube</div></a>
                    </div>
                </div>
            </div>

            <div className='w-full mt-20 flex flex-col lg:flex-row gap-20'>

                <div className='text-white w-[50%]'>
                    <div className='text-[20px] md:text-[24px] font-[700] font-roboto'>Dr. Darshan Kumar A. Jain</div>
                    <div className='grid grid-cols-2 gap-x-10 mt-5'>
                        {
                            drDarshanServices.map((service, index) => (
                                <Link key={index} to={`/dr-darshan-kumar-a-jain/${service.link}`}><div className='text-[12px] font-[400] font-roboto mt-4 cursor-pointer hover:text-orange'>{service.name}</div></Link>
                            ))
                        }
                    </div>
                </div>

                <div className='text-white w-[50%]'>
                    <div className='text-[20px] md:text-[24px] font-[700] font-roboto'>Dr. Divya Sundaresh</div>
                    <div className='grid grid-cols-2 gap-x-10 mt-5'>
                        {
                            drDivyaServices.map((service, index) => (
                                <Link key={index} to={service.link}><div className='text-[12px] font-[400] font-roboto mt-4 cursor-pointer hover:text-orange'>{service.text}</div></Link>
                            ))
                        }
                    </div>
                </div>

            </div>

            <div className="flex gap-2 justify-center text-white mt-14 md:gap-8">
                <div className='text-[10px] md:text-[16px] font-[400] font-roboto cursor-pointer hover:text-orange'>Privacy Policy</div>
                <div className='text-[10px] md:text-[16px] font-[400] font-roboto cursor-pointer hover:text-orange'>Terms of Use</div>
                <a target='_blank' href='https://maps.app.goo.gl/wMhxex5pi2v5qLas9' className='text-[10px] md:text-[16px] font-[400] font-roboto cursor-pointer hover:text-orange'>Clinic Map</a>
                <a target='_blank' href='https://maps.app.goo.gl/rZYZCTqmQ8UNRcwY8' className='text-[10px] md:text-[16px] font-[400] font-roboto cursor-pointer hover:text-orange'>Parking Location</a>
            </div>
            <div className='text-[12px] text-center font-[300] font-roboto text-white mt-8 md:text-[16px]'>© {new Date().getFullYear()} All Rights Reserved</div>
        </div>
    )
}

export default Footer
