import React from 'react'
import Faqs from '../../components/faqs/faqs';
import Servicesbanner from '../../components/services-banner/Servicesbanner';

const BirthDefects = () => {


    const faqs = [
        {
            ques: "Can all birth defects be detected before birth?",
            ans: "Not all birth defects are detectable prenatally, but many can be identified through screening and diagnostic tests during pregnancy."
        },
        {
            ques: "Are birth defects always hereditary?",
            ans: "While some birth defects have a genetic component, others result from environmental factors or a combination of both."
        },
        {
            ques: "How common are birth defects?",
            ans: "Birth defects occur in approximately 1 in every 33 infants, varying by region and population."
        },
        {
            ques: "Is it possible to prevent birth defects?",
            ans: "While not all birth defects can be prevented, risk can be reduced through proper prenatal care, healthy lifestyle choices, and nutritional supplementation."
        },
        {
            ques: "What support is available for families of children with birth defects?",
            ans: "Support includes medical care, therapy services, educational resources, and counseling to assist families in managing their child's condition."
        }
    ];




    return (

        <div>
            <Servicesbanner serviceName="Birth Defects" />
            {/* <!-- Section: Birth Defects --> */}
            <div className='px-8 lg:px-20 mt-8'>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                           Birth defects, also known as congenital anomalies Birth defects, also known as congenital anomalies, are structural or functional abnormalities present at birth that can affect various parts of the body, including the heart, brain, limbs, and internal organs. These conditions can range from mild to severe and may impact a child's health, development, and quality of life. At Sapiens Clinic in Malleshwaram, we offer comprehensive evaluation, diagnosis, and management of birth defects to ensure the best possible outcomes for affected children and their families.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Understanding Birth Defects
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Structural Defects: Physical abnormalities such as cleft lip/palate, heart defects, spina bifida, and limb malformations.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Functional or Developmental Defects: Problems with how a body part or system works, including intellectual disabilities, sensory issues, and metabolic disorders.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Chromosomal Abnormalities: Conditions like Down syndrome and Edwards syndrome resulting from changes in chromosome number or structure.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            These defects can result from genetic factors, environmental exposures, or a combination of both.
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
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Genetic Factors: Inherited conditions or mutations.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Environmental Exposures: Contact with certain medications, chemicals, or infections during pregnancy.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Nutritional Deficiencies: Lack of essential nutrients like folic acid.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Maternal Health Conditions: Diseases such as diabetes or obesity.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Lifestyle Factors: Smoking, alcohol consumption, and drug use during pregnancy.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Common Types of Birth Defects
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Congenital Heart Defects: Abnormalities in the heart's structure affecting blood flow.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Neural Tube Defects: Conditions like spina bifida and anencephaly resulting from incomplete development of the brain and spinal cord.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Cleft Lip and Palate: Openings or splits in the upper lip and/or roof of the mouth.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Limb Abnormalities: Missing or malformed limbs.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Down Syndrome: A genetic disorder caused by an extra chromosome 21.</li>
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
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Prenatal Screening: Ultrasounds and blood tests during pregnancy to assess the risk of certain conditions.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Diagnostic Tests: Procedures like amniocentesis or chorionic villus sampling (CVS) to detect genetic abnormalities.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Newborn Screening: Tests performed shortly after birth to identify metabolic or genetic disorders.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Imaging Studies: MRI, CT scans, or echocardiograms to visualize structural anomalies.</li>
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
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Surgical Interventions: Corrective surgeries for structural defects like heart anomalies or cleft palate.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Medical Therapies: Medications to manage symptoms or prevent complications.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Therapies and Rehabilitation: Physical, occupational, and speech therapies to support development.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Nutritional Support: Dietary plans and supplements for metabolic disorders.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Genetic Counseling: Guidance for families regarding inheritance patterns and future pregnancies.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Prevention Strategies
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Prenatal Care: Regular check-ups and screenings during pregnancy.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Healthy Lifestyle: Avoiding harmful substances and maintaining a balanced diet.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Folic Acid Supplementation: Taking folic acid before and during early pregnancy to prevent neural tube defects.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Vaccinations: Protecting against infections like rubella that can cause birth defects.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Managing Chronic Conditions: Controlling diseases like diabetes prior to conception.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='mt-15'>
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default BirthDefects
