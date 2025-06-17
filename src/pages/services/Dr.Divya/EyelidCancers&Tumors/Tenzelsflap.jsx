import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const Tenzelsflap = () => {

    const faqs =[
        {
            ques:"Is Tenzel flap surgery painful?",
            ans:"No, the procedure is performed under local anesthesia. Mild discomfort post-surgery is manageable with medication."
        },
        {
            ques:"Will the scar be visible?",
            ans:"The incision follows natural skin creases and fades significantly over time, especially under expert hands."
        },
        {
            ques:"How long is the recovery time?",
            ans:"Most patients return to routine activity within 1–2 weeks, depending on healing."
        },
        {
            ques:"Can this be combined with tumor removal?",
            ans:"Yes, Tenzel flap reconstruction is often done immediately after tumor excision when suitable."
        },
        {
            ques:"Is this suitable for upper eyelid defects?",
            ans:"Tenzel flap is typically used for lower eyelid defects. Other techniques may be more appropriate for upper eyelid repair."
        },
    ]

    const contact = [
        {
            heading:"",
            para:""
        }
    ]
  return (
    <div>
        <div>
            <Divyaservicebanner/>
        </div>

        <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">
            <div className="flex flex-col items-center">
                <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Tenzel Flap Surgery in Malleshwaram</div>
                <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Reconstructive Eyelid Surgery for Functional & Aesthetic Restoration</div>
                <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">The eyelids are more than just a cosmetic feature-they play a vital role in protecting your eyes, maintaining moisture, and enabling smooth vision. Whether due to skin cancer, trauma, or a previous surgical excision, defects in the lower eyelid can affect both your <b>eye function</b> and appearance. At <b>Sapiens Clinic, Malleshwaram,</b> we offer <b>Tenzel flap surgery-a</b> proven method for reconstructing moderate lower eyelid defects while maintaining both <b>functionality and aesthetics</b>.</div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Is Tenzel Flap Surgery?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2"><b>Tenzel flap surgery</b> is a specialized eyelid reconstruction technique used primarily for <b> defects affecting up to 50% of the lower eyelid</b>. It involves a <b>semicircular rotation flap</b>, where nearby skin and tissue are gently rotated and sutured into place to restore the eyelid’s shape and function. This technique is ideal when there is adequate skin laxity, offering a <b>natural-looking repair</b> with minimal scarring and optimal eye protection.</div>
                </div>
                
                {/* img */}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">When Is Tenzel Flap Surgery Needed?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">Tenzel flap surgery is often recommended in cases where eyelid defects result from :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Excision of eyelid <b>tumors or malignant growths</b></li>
                            <li>Previous surgeries such as <b>Mohs excision</b></li>
                            <li><b>Injuries or trauma</b> to the lower eyelid</li>
                            <li>Congenital eyelid abnormalities</li>
                            <li>Loss of eyelid elasticity due to <b>aging</b></li>
                        </ul>

                        <div className="mt-2">Defects that are too large for simple suturing, but not extensive enough to require complex reconstruction, often benefit from the Tenzel flap approach.</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* contnet */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">How Does the Procedure Work?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">The Tenzel flap technique is both <b>strategic and minimally invasive</b> :</div>
                        <ol className="list-decimal ml-5 mt-2">
                            <li><b>Preoperative Evaluation</b> <br />Your surgeon will measure the size of the eyelid defect and assess surrounding skin laxity. If the defect involves less than 50% of the horizontal eyelid, you’re likely a candidate.</li>
                            <li><b>Marking and Incision</b> <br />A curved, semicircular incision is made starting from the outer corner of the eye, sweeping into the temple region. This arch allows the surgeon to rotate a skin flap into the defect zone.</li>
                            <li><b>Flap Rotation and Closure</b> <br />The surgeon gently rotates the flap into place and secures it with fine sutures, ensuring the natural curve of the eyelid is maintained.</li>
                            <li><b>Healing and Recovery</b> <br />The area is dressed, and patients are usually discharged the same day with post-op care instructions.</li>
                        </ol>
                    </div>
                </div>

                {/* img */}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Recovery & Aftercare</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-1">Most patients recover well with minimal downtime. Here’s what you can expect post-surgery :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Mild swelling and bruising around the eyelid for 7–10 days</li>
                            <li>Sutures are typically removed within 1–2 weeks</li>
                            <li>Antibiotic ointments and cold compresses may be prescribed</li>
                            <li>Avoid strenuous activity or heavy lifting for at least two weeks</li>
                            <li>Follow-up visits to monitor healing and eyelid alignment</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic in Malleshwaram?</div>
                    <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                        <li>Led by <b>highly trained oculoplastic and reconstructive surgeons</b></li>
                        <li><b>Modern surgical techniques</b> with cosmetic sensitivity</li>
                        <li>Individualized treatment plans focused on restoring both <b>function and appearance</b></li>
                        <li>Trusted by patients across Malleshwaram for <b> eyelid, orbital, and facial reconstruction</b></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Book Your Consultation</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">If you're experiencing discomfort, eyelid asymmetry, or have undergone recent tumor removal, Tenzel flap surgery may be the solution. Visit <b>Sapiens Clinic, Malleshwaram</b> for expert advice and treatment planning. Call now to schedule your consultation with our oculoplastic team.</div>
                </div>

                {/* img */}
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

export default Tenzelsflap