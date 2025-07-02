import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'
import ContactPage from '../services/ContactPage/ContactPage'
import { Helmet } from 'react-helmet'

const Vascularisedfreefibula = () => {
   const faqs = [
          {
              ques:"What is the advantage of using a vascularized graft over a non-vascularized one?",
              ans:"Vascularized grafts maintain their own blood supply, enhancing integration and healing, especially in areas with compromised vascularity."
          },
          {
              ques:" Are there risks associated with VFFG?",
              ans:"As with any surgical procedure, risks include infection, graft failure, and donor site complications. However, meticulous surgical technique and postoperative care minimize these risks."
          },
          {
              ques:"How long does it take for the graft to integrate fully?",
              ans:"Bone healing typically occurs over several months, but complete integration and functional recovery can vary based on individual factors."
          },
          {
              ques:"Will the removal of the fibula affect leg function?",
              ans:"The fibula is a non-weight-bearing bone, and its removal usually does not significantly impact leg function."
          },
          {
              ques:"Is VFFG suitable for children?",
              ans:"Yes, with careful consideration, VFFG can be performed in pediatric patients, especially in cases requiring limb salvage or reconstruction."
          },
      ]
  
      const Contact = [
          {
              heading:"",
              para:""
          }
      ]
      return (
          <div>

                <Helmet>
                    <title>Vascularized Free Fibula Surgery in Bangalore | Dr. Darshan Kumar A Jain</title>
                    <meta name='description' content='Dr. Darshan Kumar A Jain offers vascularized free fibula surgery in Bangalore, Karnataka for complex bone reconstruction and healing.' />
                </Helmet>

              <div>
                  <Servicesbanner serviceName = "Vascularised free fibula"/>
              </div>
              <div className='px-8 lg:px-20 mt-8'>
                  <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Vascularized Free Fibula Graft in Bangalore</div>
                  <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                      <div>
                          {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>Hand Swellings (Lumps and Bumps) Treatment in Malleshwaram, Bangalore</div> */}
                          <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>The vascularized free fibula graft (VFFG) is a sophisticated microsurgical technique employed to reconstruct extensive bone defects resulting from trauma, tumor resection, or congenital anomalies. At Sapiens Clinic in Malleshwaram, we specialize in this advanced procedure, aiming to restore skeletal integrity and function in complex cases.</div>
                      </div>
                  </div>
  
                  <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Understanding Vascularized Free Fibula Graft</div>
                  <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>The VFFG procedure involves harvesting a segment of the fibula bone along with its accompanying blood vessels and transplanting it to the site of bone loss. Microsurgical anastomosis is performed to connect the graft's blood vessels to those at the recipient site, ensuring the graft's viability and promoting bone healing.</div>
  
  
              </div>
  
              <div className='px-8 lg:px-20 mt-8'>
                  <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Indications for VFFG</div>
                  <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                      <div>
                          <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">VFFG is indicated in various scenarios, including :</div>
                          <ul className='mt-5  list-disc pl-10'>
                              <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Reconstruction after Tumor Resection</b>: Especially in cases involving the mandible, spine, or pelvis.</li>
                              <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Non-Union Fractures</b>: Where previous treatments have failed to achieve bone healing.</li>
                              <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Congenital Bone Deficiencies</b>: Such as fibular hemimelia or other skeletal anomalies.</li>
                              <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Post-Traumatic Bone Loss</b>: Following severe injuries leading to significant bone defects.</li>
                          </ul>
                           <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Institutions like Mayo Clinic have reported successful outcomes using VFFG for spinal and pelvic reconstructions, achieving bone union in over 90% of cases.</div>
                      </div>
  
                  </div>
              </div>
  
              <div className='px-8 lg:px-20 mt-8'>
                  <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Surgical Procedure</div>
                  <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                      <div>
                          <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">The VFFG procedure encompasses :</div>
                          <ul className='mt-5  list-decimal pl-10'>
                              <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Donor Site Harvesting</b>: Careful extraction of the fibula segment along with its vascular pedicle.</li>
                              <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3.'><b>Recipient Site Preparation</b>: Debridement and shaping of the defect area to accommodate the graft.</li>
                              <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Microsurgical Anastomosis</b>: Connecting the graft's blood vessels to recipient vessels under a microscope.</li>
                              <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Fixation</b>: Stabilizing the graft using plates or screws to ensure proper alignment and integration.</li>
                          </ul>
                          <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Postoperative monitoring is crucial to assess graft viability and detect any complications early.</div>
                      </div>
  
                  </div>
              </div>
  
              <div className='px-8 lg:px-20 mt-8'>
                  <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Recovery and Rehabilitation</div>
                  <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                      <div>
                          <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>Recovery timelines vary based on the complexity of the reconstruction and the patient's overall health. Generally, patients can expect :</div>
                          <ul className='mt-5  list-desc pl-10'>
                              <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Hospital Stay</b>: Several days to monitor graft integration.</li>
                              <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Therapy</b>: Initiated early to restore function and mobility.</li>
                              <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Follow-Up Visits</b>: Regular assessments to monitor healing and address any concerns.</li>
                          </ul>
                          <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>Adherence to postoperative instructions significantly influences the success of the reconstruction.</div>
                      </div>
                  </div>
              </div>

  
              <div className='px-8 lg:px-20 mt-8'>
                  <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Conclusion</div>
                  <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                      <div>
                          <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>The vascularized free fibula graft stands as a cornerstone in reconstructive surgery, offering solutions for complex bone defects that might otherwise lead to significant disability. At Sapiens Clinic, Malleshwaram, our multidisciplinary team is dedicated to delivering personalized care, employing state-of-the-art techniques to achieve optimal functional and aesthetic outcomes for our patients.</div>
                      </div>
                  </div>
              </div>
  
              <div>
                  <ContactPage contacts={Contact}/>
              </div>
              <div className='mt-15'>
                  <Faqs faqs={faqs}/>
              </div>
          </div>
      )
  } 

export default Vascularisedfreefibula