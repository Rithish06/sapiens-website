import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const RetinalTumors = () => {

    const faqs = [
        {
            ques:"What are the symptoms of retinal tumors?",
            ans:"Symptoms may include blurry vision, floaters, eye pain, flashes of light, vision loss or visible changes in the eye. Some tumors may show no symptoms at all."
        },
        {
            ques:"Are retinal tumors cancerous?",
            ans:"Not all retinal tumors are malignant. Some are benign but still require observation. Malignant ones like retinoblastoma or choroidal melanoma need immediate treatment."
        },
        {
            ques:"Can retinal cancer spread to other parts of the body?",
            ans:"Yes, malignant retinal tumors, especially choroidal melanoma, can metastasize if left untreated."
        },
        {
            ques:"Will I lose my vision after treatment?",
            ans:"In many cases, especially with early detection, vision can be preserved. However, in advanced cases, surgery may require eye removal to save your life."
        },
        {
            ques:"When should I see a specialist?",
            ans:"If you notice any sudden visual disturbances, changes in eye appearance or if you have a personal or family history of cancer, schedule an evaluation immediately."
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

            {/* container 1 */}
            <div className="flex flex-col items-center">
                <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Retinal Tumor Evaluation and Treatment in Malleshwaram</div>
                <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Expert Care for Rare and Serious Retinal Conditions</div>
                <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                    <ul>
                        <li>Have you recently been told you have a retinal mass during an eye exam?</li>
                        <li>Are you noticing blurred vision, eye floaters, or even unexplained bleeding in the eye?</li>
                        <li>Have you had cancer in the past, or is there a family history of ocular tumors?</li>
                    </ul>
                    <div className="mt-2">Many eye cancers, including <b>retinal tumors</b>, can remain hidden until they become advanced. At <b>Sapiens Clinic, Malleshwaram</b>, we specialize in diagnosing and managing such rare but serious eye conditions with precision and compassion.</div>
                </div>
            </div>

            {/* container 2 */}

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* contnet */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Are Retinal Tumors?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2"><b>Retinal tumors</b> are uncommon growths located in the <b>retina</b>, the light-sensitive tissue at the back of the eye. While some retinal tumors are <b>benign</b>, others—like <b>retinoblastoma</b> and <b>choroidal melanoma</b>—are malignant and require immediate attention.</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li><b>Retinoblastoma</b> is most often seen in children and may affect one or both eyes.</li>
                            <li><b>Choroidal melanoma</b>, a malignant tumor arising from the vascular layer beneath the retina, can spread to other organs if not treated in time.</li>
                            <li><b>Choroidal metastasis</b> occurs when cancer from another part of the body (such as the breast or lungs) spreads to the eye.</li>
                        </ul>

                        <div className="mt-2">Because these tumors often present <b>no early symptoms</b>, routine eye check-ups and prompt specialist evaluations are essential.</div>
                    </div>
                </div>
            </div>

            {/* container 3 */}

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">How Are Retinal Tumors Treated?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">Treatment depends on the <b>type, size, and location</b> of the tumor, as well as whether it has spread beyond the eye.</div>
                        <div className="mt-2">Common approaches include :</div>
                    </div>

                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">🔹 Radiation Therapy</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Used to shrink or control tumors while attempting to preserve vision. It’s more effective when the tumor hasn’t invaded the center of the retina.</div>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">🔹 Systemic Chemotherapy</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Especially useful for retinoblastoma or metastatic tumors. It may be combined with local therapies to maximize effect.</div>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">🔹 Enucleation (Eye Removal Surgery)</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">In severe cases where the tumor threatens life or causes significant vision loss, <b>surgical removal of the eye</b> is performed. This is a complex but life-saving surgery that helps prevent further spread of cancer.</div>
                        <div className="mt-2">After healing, an <b>artificial eye prosthesis</b> is placed to restore a natural appearance.</div>
                    </div>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">🔹 Observation Only</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">For certain <b>benign retinal tumors</b>, no active treatment may be needed. Instead, regular monitoring helps ensure the condition remains stable.</div>
                </div>

                {/* img */}
            </div>

            {/* container 4 */}

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Recovery and Outlook</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Recovery varies significantly based on the type of tumor and the treatment provided.</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>For <b>eye-sparing procedures</b>, patients may retain partial or full vision if the tumor hasn’t affected the central retina.</li>
                                <li>For <b>enucleation cases</b>, healing takes a few weeks. Once the socket has healed, a custom-made prosthetic eye is fitted, offering excellent cosmetic results.</li>
                                <li>Supportive care, medications, and regular follow-ups are crucial for tracking healing and detecting any recurrence.</li>
                            </ul>

                            <div className="mt-2">Our team at <b>Sapiens Clinic</b> provides <b>individualized post-treatment guidance</b> and emotional support throughout your recovery.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* container 5 */}

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Cost of Retinal Tumor Treatment in Malleshwaram</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">Treatment costs can vary based on :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li>The type and complexity of surgery</li>
                            <li>Use of radiation or chemotherapy</li>
                            <li>Need for imaging, biopsy, or prosthetic eye fitting</li>
                            <li>Follow-up care and additional procedures</li>
                        </ul>

                        <div className="mt-2">At <b>Sapiens Clinic</b>, we believe in <b>transparent pricing and personalized care</b>. After your initial consultation and diagnosis, we provide a detailed treatment plan and estimated costs to help you make informed decisions.</div>
                    </div>
                </div>

                {/* img */}
            </div>

            {/* container 6 */}

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic for Retinal Tumor Care?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <ul className="list-disc ml-5 mt-2">
                            <li><b>Advanced diagnostic tools</b> for early detection</li>
                            <li>Expert care by <b>retinal specialists and oculoplastic surgeons</b></li>
                            <li>Access to <b>modern treatment options,</b> including conservative and surgical management</li>
                            <li><b>Compassionate follow-up care</b> and prosthetic support if needed</li>
                        </ul>

                        <div className="mt-2">Located in the heart of <b>Malleshwaram</b>, our clinic ensures you have access to the best possible care close to home.</div>
                    </div>
                </div>
            </div>

            {/* container 7 */}

            <div className="flex flex-col-reverse items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Book Your Consultation</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">If you or a loved one has been diagnosed with a <b>retinal tumor</b>, don’t wait. Early detection and treatment can make all the difference. <b>Visit Sapiens Clinic, Malleshwaram</b>. Let’s protect your vision and restore peace of mind-together.</div>
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

export default RetinalTumors