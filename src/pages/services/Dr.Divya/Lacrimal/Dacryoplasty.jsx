import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const Dacryoplasty = () => {

    const faqs =  [
        {
            ques:"Is dacryoplasty painful?",
            ans:"The procedure is performed under anesthesia, so patients typically experience minimal discomfort during the procedure."
        },
        {
            ques:"How long does the procedure take?",
            ans:"Dacryoplasty usually takes about 30 minutes to complete."
        },
        {
            ques:"What is the recovery time?",
            ans:"Most patients resume normal activities within a day or two, with full recovery in about a week."
        },
        {
            ques:"Are there any risks associated with dacryoplasty?",
            ans:"As with any medical procedure, there are risks, including infection or recurrence of blockage. However, complications are rare, and our team takes all necessary precautions to minimize them."
        },
        {
            ques:"Will I need additional treatments after dacryoplasty?",
            ans:"Some patients may require further interventions if the blockage recurs, but many experience long-term relief after a single procedure."
        },
    ]


    const contact = [
        {
            heading:"Schedule Your Consultation",
            para:"If you're experiencing symptoms of a blocked tear duct, such as excessive tearing or recurrent eye infections, contact Sapiens Clinic in Malleshwaram today to schedule a consultation. Our team is dedicated to providing you with the highest quality care and effective treatment options."
        }
    ]
  return (
    <div>
        <div>
            <Divyaservicebanner/>
        </div>

        <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">

            {/* container 1 */}
            <div className="flex flex-col items-center">
                <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Dacryoplasty Services at Sapiens Clinic Malleshwaram</div>
                <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">What Is Dacryoplasty?</div>
                <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Dacryoplasty is a minimally invasive procedure designed to treat nasolacrimal duct obstructions (NLDO), which can cause excessive tearing (epiphora) and recurrent eye infections. Utilizing balloon catheter technology, dacryoplasty gently dilates the blocked tear duct, restoring normal tear drainage without the need for extensive surgery.</div>
            </div>

            {/* container 2 */}

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic for Dacryoplasty?</div>
                    <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                        <li><b>Expertise in Minimally Invasive Procedures</b>: Our ophthalmologists are trained in the latest dacryoplasty techniques, ensuring effective and safe treatment.</li>
                        <li><b>Advanced Technology</b>: We employ state-of-the-art equipment, including high-precision balloon catheters, to maximize treatment success.</li>
                        <li><b>Patient-Centered Care</b>: At Sapiens Clinic, we prioritize your comfort and convenience, offering personalized care plans tailored to your specific needs.</li>
                    </ul>
                </div>
            </div>

            {/* container 3 */}


            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* contnet */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Who Can Benefit from Dacryoplasty?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">Dacryoplasty is suitable for individuals experiencing :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Persistent watery eyes due to partial nasolacrimal duct obstruction.</li>
                            <li>Recurrent eye infections linked to tear duct blockages.</li>
                            <li>Previous unsuccessful treatments for NLDO.</li>
                        </ul>

                        <div className="mt-2">This procedure is effective for both adults and children, offering a less invasive alternative to traditional surgeries.</div>
                    </div>
                </div>

                {/* img */}
            </div>

            {/* container 4 */}

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">The Dacryoplasty Procedure</div>
                    <ol className="list-decimal ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                        <li><b>Assessment</b>: Comprehensive evaluation of the tear drainage system using diagnostic imaging.</li>
                        <li><b>Anesthesia</b>: Local or general anesthesia is administered for patient comfort.</li>
                        <li><b>Balloon Catheter Insertion</b>: A thin catheter with a deflated balloon is gently inserted into the blocked duct.</li>
                        <li><b>Dilation</b>: The balloon is inflated to widen the duct, then deflated and removed.</li>
                        <li><b>Post-Procedure Care</b>: Patients are monitored briefly before discharge, with follow-up appointments scheduled to ensure successful outcomes.</li>
                    </ol>
                </div>
            </div>

            {/* container 5 */}

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Post-Procedure Care</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">After dacryoplasty, patients may experience mild discomfort or swelling, which usually subsides within a few days. It's important to follow all post-procedure instructions provided by our specialists, including the use of prescribed eye drops and attending scheduled follow-up visits to monitor healing and duct patency.</div>
                </div>

                {/* img */}
            </div>

            {/* container 6 */}

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Schedule Your Consultation</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">If you're experiencing symptoms of a blocked tear duct, such as excessive tearing or recurrent eye infections, contact Sapiens Clinic in Malleshwaram today to schedule a consultation. Our team is dedicated to providing you with the highest quality care and effective treatment options.</div>
                </div>
            </div>
        </div>

        {/* contact-part */}
        <div>
            <ContactPage contacts={contact[0]}/>
        </div>

        {/* faqs */}
        <div>
            <Faqs faqs={faqs}/>
        </div>
    </div>
  )
}

export default Dacryoplasty