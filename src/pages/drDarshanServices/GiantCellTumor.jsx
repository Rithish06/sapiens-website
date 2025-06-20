import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'
import ContactPage from '../services/ContactPage/ContactPage';

const GiantCellTumor = () => {

    const faqs = [
        {
            ques: "Are Giant Cell Tumors cancerous?",
            ans: "GCTs are typically benign but can be locally aggressive and, in rare cases, metastasize."
        },
        {
            ques: "What is the recurrence rate after treatment?",
            ans: "Recurrence rates vary but can be up to 25% after curettage. Use of adjuvants and thorough surgical technique can reduce this risk."
        },
        {
            ques: "Can GCTs occur in children?",
            ans: "They are rare in children and more commonly affect adults aged 20-40."
        },
        {
            ques: "Is limb function preserved after treatment?",
            ans: "With appropriate surgical techniques and rehabilitation, limb function can often be preserved."
        },
        {
            ques: "How often should follow-up occur post-treatment?",
            ans: "Regular follow-up with imaging every 3-6 months initially, then annually, is recommended to monitor for recurrence."
        }
    ];


    return (
        <div>
            <Servicesbanner serviceName="Giant  Cell Tumor (GCT)" />

            <div className='px-8 lg:px-20 mt-8'>
                {/* <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Giant Cell Tumor (GCT) Diagnosis and Treatment in Malleshwaram
                </div> */}
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Giant Cell Tumors (GCTs) are rare, typically benign bone tumors known for their aggressive local behavior. They predominantly affect young adults and can lead to significant bone destruction if not addressed promptly. At Sapiens Clinic in Malleshwaram, we specialize in the comprehensive evaluation and management of GCTs, aiming to preserve function and prevent recurrence.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Understanding Giant Cell Tumors
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            GCTs commonly arise at the ends of long bones, especially around the knee (distal femur and proximal tibia), but can also occur in the distal radius, sacrum, and spine. Histologically, they are characterized by numerous multinucleated giant cells interspersed among mononuclear stromal cells. While generally benign, GCTs can be locally aggressive and in rare cases, metastasize to the lungs.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Causes and Risk Factors
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Age:</b> Most common in individuals aged 20-40.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Gender:</b> Slightly more prevalent in females.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Previous Radiation Therapy:</b> May increase the risk of tumor development.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Symptoms
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Localized Pain:</b> Often worsening with activity.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Swelling:</b> Around the affected joint.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Limited Range of Motion:</b> Due to joint involvement.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Pathological Fractures:</b> In weakened bones.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Diagnosis
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Imaging Studies:</b> X-rays, MRI, and CT scans to assess the lesion's size, location, and extent.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Biopsy:</b> Histological examination to confirm the diagnosis.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Treatment Options
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>Surgical Treatments</div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Curettage with Adjuvants:</b> Scraping out the tumor and using agents like phenol or cryotherapy to kill residual cells.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Bone Grafting or Cementation:</b> Filling the cavity post-curettage to restore structural integrity.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Wide Resection:</b> Removing the tumor along with a margin of healthy tissue, often necessary for aggressive or recurrent tumors.</li>
                        </ul>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>Non-Surgical Treatments</div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Denosumab Therapy:</b> A monoclonal antibody that inhibits osteoclast-like cells, used in cases where surgery is not feasible or as an adjunct to reduce tumor size preoperatively.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Recovery and Rehabilitation
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Therapy:</b> To restore mobility and strength.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Regular Monitoring:</b> Periodic imaging to detect any recurrence early.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Recovery timelines vary based on the treatment modality and tumor location but generally span several months.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Conclusion
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Early detection and a multidisciplinary approach are key to managing Giant Cell Tumors effectively. If you or a loved one is experiencing persistent bone pain or swelling, consult Dr. Darshan Kumar A. Jain, Orthopedic Specialist at Sapiens Clinic, Malleshwaram, for a comprehensive evaluation and personalized treatment plan.
                        </div>
                    </div>
                </div>
            </div>

            <ContactPage />

            <Faqs faqs={faqs} />
        </div>
    )
}

export default GiantCellTumor
