import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'
import ContactPage from '../services/ContactPage/ContactPage'

const Reconstructionforthelimbs = () => {
  const faqs = [
        {
            ques: "Is limb reconstruction surgery painful?",
            ans: "While some discomfort is expected, pain is managed effectively with medications and therapy."
        },
        {
            ques: "How long does the recovery process take?",
            ans: "Recovery varies but typically spans several months, depending on the procedure's complexity."
        },
        {
            ques: "Will I regain full function of my limb?",
            ans: "Many patients experience significant improvements, but outcomes depend on individual circumstances."
        },
        {
            ques: "Are there risks associated with limb reconstruction?",
            ans: "As with any surgery, risks exist but are minimized through meticulous planning and care."
        },
        {
            ques: "Is limb reconstruction suitable for children?",
            ans: "Yes, with careful consideration, limb reconstruction can be performed in pediatric patients to address congenital or acquired deformities."
        },
    ]

    const Contact = [
        {
            heading: "",
            para: ""
        }
    ]
    return (
        <div>
            <div>
                <Servicesbanner serviceName="Reconstruction for the limbs" />
            </div>
            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Limb Reconstruction Surgery in Malleshwaram</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>Hand Swellings (Lumps and Bumps) Treatment in Malleshwaram, Bangalore</div> */}
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>Limb reconstruction surgery is a specialized field aimed at restoring the form and function of limbs affected by trauma, congenital anomalies, infections, or tumors. At Sapiens Clinic in Malleshwaram, we offer advanced reconstructive procedures tailored to address complex limb deformities, ensuring optimal outcomes for our patients.</div>
                    </div>
                </div>

                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Understanding Limb Reconstruction</div>
                <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>Limb reconstruction involves a combination of orthopedic and plastic surgical techniques to correct deformities, length discrepancies, and functional impairments in the upper or lower extremities. This multidisciplinary approach addresses both the skeletal and soft tissue components, facilitating comprehensive rehabilitation.</div>


            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Causes and Indications</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Limb reconstruction is indicated in various scenarios, including :</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Traumatic Injuries</b>: Severe fractures, bone loss, or soft tissue damage resulting from accidents.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Congenital Deformities</b>: Conditions like limb length discrepancies or angular deformities present at birth.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Infections</b>: Chronic osteomyelitis leading to bone destruction.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Tumor Resections</b>: Reconstruction following the surgical removal of bone tumors.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Non-Unions and Malunions</b>: Fractures that fail to heal properly or heal in incorrect positions.</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Surgical Techniques</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Our limb reconstruction procedures may involve :</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>External Fixation</b> : Using devices like the Ilizarov apparatus to gradually correct deformities or lengthen bones.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3.'><b>Internal Fixation</b> : Placement of rods, plates, or screws to stabilize bone segments.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Bone Grafting</b> : Transplanting bone tissue to repair defects or promote healing.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Soft Tissue Reconstruction</b> : Utilizing flaps or grafts to restore skin and muscle integrity.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Limb Lengthening Procedures</b> : Gradual stretching of bones to correct length discrepancies.</li>
                        </ul>
                        <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">These techniques are selected based on individual patient needs and the complexity of the deformity.</div>
                    </div>

                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Recovery and Rehabilitation</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>Postoperative care is crucial for successful outcomes :</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Therapy</b>: Customized exercises to restore mobility and strength.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Regular Monitoring</b>: Follow-up visits to assess healing progress and make necessary adjustments.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Pain Management</b>: Appropriate medications to ensure comfort during recovery.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Psychological Support</b>: Counseling services to address emotional well-being.</li>
                        </ul>
                        <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">Recovery timelines vary depending on the procedure's complexity and the patient's overall health.</div>
                    </div>
                </div>
            </div>

           
            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Conclusion</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>Limb reconstruction surgery offers hope for individuals facing limb deformities or functional impairments. At Sapiens Clinic, Malleshwaram, our dedicated team employs cutting-edge techniques and a patient-centric approach to restore mobility and improve quality of life.</div>
                    </div>
                </div>
            </div>

            <div>
                <ContactPage contacts={Contact} />
            </div>
            <div className='mt-15'>
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default Reconstructionforthelimbs