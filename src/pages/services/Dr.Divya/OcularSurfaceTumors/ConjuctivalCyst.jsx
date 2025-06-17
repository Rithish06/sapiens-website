import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import { Controller } from 'react-hook-form'
import ContactPage from '../../ContactPage/ContactPage'
import { FaQ } from 'react-icons/fa6'
import Faqs from '../../../../components/faqs/faqs'

const ConjuctivalCyst = () => {

    const faqs = [
        {
            ques:"How do I know if I have a cyst or a tumor?",
            ans:"Only a specialist can determine this after an examination. While cysts are usually clear or fluid-filled, tumors may appear pigmented or nodular."
        },
        {
            ques:"Is conjunctival cyst surgery painful?",
            ans:"No. It is done under local anesthesia and is quick and comfortable."
        },
        {
            ques:"Will I need chemotherapy or radiation for eye tumors?",
            ans:"Only in selected malignant cases. Your doctor will guide you based on biopsy results."
        },
        {
            ques:"Can these cysts or tumors come back?",
            ans:"Yes, both cysts and tumors can recur. That’s why regular monitoring is important."
        },
        {
            ques:"Will there be visible scars?  ",
            ans:"Scars are minimal and typically hidden in the natural conjunctival folds."
        },
    ]


    const contact = [
        {
            heading:"",
            paara:""
        }
    ]
    return (
        <div>
            <div>
                <Divyaservicebanner />
            </div>

            <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">
                {/* container 1 */}
                <div className="flex flex-col items-center">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Conjunctival Cyst and Tumor Treatment in Malleshwaram</div>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">Advanced Eye Surface Surgery at Sapiens Clinic</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <ul>
                            <li>Do you see a small bump or clear blister on the white part of your eye?</li>
                            <li> Is there a spot or mass near the cornea that wasn't there before?</li>
                            <li> Are you feeling irritation or discomfort when blinking?</li>
                            <li> Have you been postponing your eye check-up for too long?</li>
                        </ul>
                        <div className="mt-2">If you notice any of these signs, it may be time to consult an oculoplastic specialist. At Sapiens Clinic, Malleshwaram, we offer expert care for <b>conjunctival cysts and tumors</b>, combining precision diagnostics and minimally invasive surgery.</div>
                    </div>
                </div>

                {/* container 2 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Is a Conjunctival Cyst?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">A <b>conjunctival cyst</b> is a fluid-filled sac that forms on the conjunctiva, the transparent membrane covering the white of the eye. While these cysts are typically <b>benign</b> and not vision-threatening, they can cause discomfort, irritation, or a foreign body sensation. They often rub against the inner eyelid, leading to blinking discomfort or redness.  Although benign, if the cyst becomes too large or recurrent, <b>minor surgical removal</b> is recommended.</div>
                    </div>

                    {/* img */}
                </div>

                {/* container 3 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Are Conjunctival Tumors?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">In rare cases, growths on the conjunctiva may indicate something more serious, such as :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Squamous Cell Carcinoma (Ocular Surface Squamous Neoplasia)</li>
                                <li>Conjunctival Melanoma (which may develop from pigmented spots or Primary Acquired Melanosis)</li>
                                <li>Conjunctival Lymphoma, which can appear as red or salmon-colored patches</li>
                            </ul>

                            <div className="mt-2">These tumors are often <b>painless</b>, making early diagnosis essential. At Sapiens Clinic, our oculoplastic team can differentiate between benign cysts and potentially malignant growths using advanced imaging and biopsy when needed.</div>
                        </div>
                    </div>
                </div>

                {/* container 4 */}

                <div className="flex flex-col-reverse items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Treatment Options at Sapiens Clinic</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">1. Conjunctival Cyst Surgery</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Cysts causing persistent irritation or cosmetic concern can be easily removed under local anesthesia through a simple outpatient procedure. The cyst is drained or excised, and artificial tears may be prescribed for post-operative comfort.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">2. Conjunctival Tumor Excision</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">If a tumor is suspected, a <b>wide excision biopsy</b> is performed to remove both the lesion and a margin of healthy tissue. Additional therapies may include :

                            <ul className="list-disc ml-5 mt-2">
                                <li><b>Cryotherapy</b>: Freezing the area to destroy residual tumor cells</li>
                                <li><b>Topical Chemotherapy</b> (e.g., Mitomycin C eye drops)</li>
                                <li><b>Radiotherapy</b> or <b>Immunotherapy</b> in selected cases</li>
                            </ul>

                            <div className="mt-2">Our goal is to ensure <b>complete removal</b> while preserving eye health and aesthetics.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 5 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Recovery and Aftercare</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Recovery depends on the type of lesion and procedure. Most patientsm :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Return to normal activities within a few days after cyst removal</li>
                                <li>Experience mild redness or irritation, managed with eye drops and ointments</li>
                                <li>Are monitored for recurrence through scheduled follow-ups</li>
                                <li>May require additional topical treatments for larger tumors</li>
                            </ul>

                            <div className="mt-2">When performed by an experienced oculoplastic surgeon, scarring is minimal and hidden within the natural folds of the eye.</div>
                        </div>

                    </div>
                </div>

                {/* container 6 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic for Eye Surface Surgery?</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li>Oculoplastic and ocular oncology expertise under one roof</li>
                            <li>Advanced diagnostics for accurate tumor identification</li>
                            <li>Minimally invasive techniques with a cosmetic approach</li>
                            <li>Local care in Malleshwaram, with accessible follow-up options</li>
                        </ul>
                    </div>

                    {/* img */}
                </div>

                {/* container 7 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Book Your Consultation Today</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">If you’ve noticed any unusual changes on the surface of your eye-no matter how small-don’t ignore them. Schedule your visit to <b>Sapiens Clinic in Malleshwaram</b>, where advanced eye care meets surgical precision.We’re here to protect your vision and restore your comfort-with expertise, empathy and excellence.</div>
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

export default ConjuctivalCyst