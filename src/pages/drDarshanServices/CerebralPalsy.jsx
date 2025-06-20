import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'
import ContactPage from '../services/ContactPage/ContactPage';

const CerebralPalsy = () => {

    const faqs = [
        {
            ques: "Is Cerebral Palsy a progressive condition?",
            ans: "No, the brain injury causing CP does not worsen over time, but symptoms may change as the individual grows."
        },
        {
            ques: "Can adults receive treatment for CP?",
            ans: "Yes, adults with CP can benefit from therapies and interventions to manage symptoms and improve quality of life."
        },
        {
            ques: "Are there support resources for families?",
            ans: "Yes, support groups, counseling, and educational resources are available to assist families in managing CP."
        },
        {
            ques: "How can therapy help my child?",
            ans: "Therapies can enhance motor skills, communication, and independence, contributing to overall development."
        },
        {
            ques: "What role do assistive devices play in CP management?",
            ans: "Assistive devices can facilitate mobility, communication, and daily activities, promoting greater independence."
        }
    ];


    return (
        <div>
            <Servicesbanner serviceName="Cerebral palsy" />

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Cerebral Palsy (CP)
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Cerebral Palsy (CP) is a group of neurological disorders that affect movement, muscle tone, and posture. It is caused by damage to the developing brain, often before birth, and manifests in early childhood. At Sapiens Clinic in Malleshwaram, we provide comprehensive evaluation and individualized treatment plans to support children and adults living with CP.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Understanding Cerebral Palsy
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Cerebral Palsy is a non-progressive condition, meaning the brain injury does not worsen over time. However, the physical manifestations can change as a person grows. CP affects each individual differently, with varying degrees of motor impairment and associated conditions.
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
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Prenatal Factors:</b> Maternal infections, exposure to toxins, or genetic mutations.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Perinatal Factors:</b> Complications during birth, such as oxygen deprivation.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Postnatal Factors:</b> Infections, traumatic brain injuries, or stroke in early infancy.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Types of Cerebral Palsy
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Spastic CP:</b> Characterized by stiff muscles and exaggerated reflexes.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Dyskinetic CP:</b> Involves involuntary movements, including dystonia and choreoathetosis.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Ataxic CP:</b> Marked by poor balance and coordination.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Mixed CP:</b> A combination of the above types.</li>
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
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Delays in reaching motor milestones (e.g., sitting, crawling, walking).</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Muscle stiffness or floppiness.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Involuntary movements or tremors.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Difficulty with fine motor skills.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Speech and swallowing difficulties.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Seizures or intellectual disabilities in some cases.</li>
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
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Medical History and Physical Examination:</b> Assessing developmental milestones and motor function.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Neuroimaging:</b> MRI or CT scans to identify brain abnormalities.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Laboratory Tests:</b> To rule out other conditions.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Developmental Assessments:</b> Evaluating cognitive, motor, and sensory functions.</li>
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
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>While there is no cure for CP, various treatments can improve quality of life:</div>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>Therapies</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Physical Therapy: Enhances strength, flexibility, and mobility.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Occupational Therapy: Promotes independence in daily activities.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Speech and Language Therapy: Improves communication and swallowing abilities.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Recreational Therapy: Encourages participation in social and leisure activities.</li>
                        </ul>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>Medications</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Medications may be prescribed to manage symptoms such as muscle spasticity or seizures. Common medications include:
                        </div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Muscle relaxants (e.g., baclofen, diazepam).</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Anticonvulsants for seizure control.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Botulinum toxin injections to reduce muscle stiffness.</li>
                        </ul>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>Surgical Interventions</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Correct anatomical abnormalities.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Relieve tight muscles or tendons.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Implant devices such as baclofen pumps for spasticity management.</li>
                        </ul>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>Assistive Devices</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Braces, walkers, or wheelchairs.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Communication boards or speech-generating devices.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Multidisciplinary Approach
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Effective management of CP requires a team of healthcare professionals, including:
                        </div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Neurologists.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Orthopedic specialists.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Physiotherapists.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Occupational and speech therapists.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Social workers and psychologists.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            At Sapiens Clinic, we coordinate care across specialties to provide comprehensive support tailored to each individual's needs.
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
                            Early intervention and a personalized treatment plan are key to managing Cerebral Palsy effectively. If you or a loved one is affected by CP, consult Dr. Darshan Kumar A. Jain, Orthopedic Specialist at Sapiens Clinic, Malleshwaram, for a thorough evaluation and compassionate care.
                        </div>
                    </div>
                </div>
            </div>

            <ContactPage />

            <div className='mt-15'>
                <Faqs faqs={faqs} />
            </div>

        </div>
    )
}

export default CerebralPalsy
