import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import ContactPage from '../services/ContactPage/ContactPage'
import Faqs from '../../components/faqs/faqs'

const ScaphoidNonnions = () => {

    const faqs = [
        {
            ques: "What causes a scaphoid fracture to not heal properly?",
            ans: "Factors include delayed diagnosis, inadequate immobilization, poor blood supply to the bone and lifestyle habits like smoking."
        },
        {
            ques: "How is scaphoid nonunion diagnosed?",
            ans: "Through physical examination and imaging tests like X-rays, MRI, or CT scans to assess bone alignment and health."
        },
        {
            ques: "Is surgery always required for scaphoid nonunion?",
            ans: "Not always. Early-stage nonunions might respond to non-surgical treatments, but advanced cases often require surgical intervention."
        },
        {
            ques: "What is the recovery time after surgery for scaphoid nonunion?",
            ans: "Recovery varies but typically ranges from 3 to 6 months, including rehabilitation."
        },
        {
            ques: "Can scaphoid nonunion lead to arthritis?",
            ans: "Yes, untreated nonunion can result in wrist arthritis due to joint instability and abnormal movement."
        }
    ];


    return (
        <div>

            <Servicesbanner serviceName="Scaphoid Nonunion" />

            <div class="px-8 lg:px-20 mt-8">
                <div class="flex flex-col lg:flex-row gap-[20px] lg:gap-[50px]">
                    <div>
                        <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                            A scaphoid nonunion occurs when a fracture in the scaphoid bone fails to heal properly, leading to persistent pain, reduced wrist function, and potential long-term complications like arthritis. At Sapiens Clinic in Malleshwaram, we specialize in diagnosing and treating scaphoid nonunions, aiming to restore wrist functionality and alleviate discomfort.
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Section 2: What is Scaphoid Nonunion --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    What Is Scaphoid Nonunion?
                </div>
                <div class="flex flex-col lg:flex-row gap-[20px] lg:gap-[50px]">
                    <div>
                        <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                            The scaphoid bone, located near the base of the thumb, plays a crucial role in wrist stability. Due to its limited blood supply, fractures in this bone are prone to nonunion, especially if not promptly treated.
                        </div>
                        <ul class="mt-5 list-disc pl-10">
                            <li class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Delayed or missed diagnosis of the initial fracture</li>
                            <li class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Inadequate immobilization during healing</li>
                            <li class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Smoking or other health conditions affecting bone healing</li>
                            <li class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Fractures in the proximal (near the forearm) part of the scaphoid</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- Section 3: Symptoms --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Symptoms
                </div>
                <div class="flex flex-col lg:flex-row gap-[20px] lg:gap-[50px]">
                    <div>
                        <ul class="mt-5 list-disc pl-10">
                            <li class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Persistent pain on the thumb side of the wrist</li>
                            <li class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Swelling and tenderness in the wrist</li>
                            <li class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Decreased range of motion</li>
                            <li class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Weak grip strength</li>
                            <li class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Clicking or instability in the wrist joint</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- Section 4: Diagnosis --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Diagnosis
                </div>
                <div class="flex flex-col lg:flex-row gap-[20px] lg:gap-[50px]">
                    <div>
                        <ul class="mt-5 list-disc pl-10">
                            <li class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Physical Examination: Assessing pain points and wrist mobility.</li>
                            <li class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Imaging Tests: X-rays to identify bone alignment; MRI or CT scans to evaluate bone health and detect avascular necrosis.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- Section 5: Treatment Options --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Treatment Options
                </div>
                <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                    Treatment strategies are tailored based on the severity and duration of the nonunion:
                </div>
                <div class="mt-4 font-semibold">Non-Surgical Treatments</div>
                <ul class="mt-2 list-disc pl-10">
                    <li class="mt-2">Immobilization: Using casts or braces to stabilize the wrist.</li>
                    <li>Bone Stimulation: Employing ultrasound or electrical stimulation to promote healing.</li>
                </ul>
                <div class="mt-4 font-semibold">Surgical Treatments</div>
                <ul class="mt-2 list-disc pl-10">
                    <li class="mt-2">ORIF: Realigning bone fragments with screws or pins.</li>
                    <li>Bone Grafting:
                        <ul class="list-disc pl-6 mt-2">
                            <li>Non-vascularized grafts</li>
                            <li>Vascularized grafts</li>
                        </ul>
                    </li>
                    <li class="mt-2">Salvage Procedures: Partial wrist fusion or proximal row carpectomy in advanced cases.</li>
                </ul>
            </div>

            {/* <!-- Section 6: Recovery and Rehabilitation --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Recovery and Rehabilitation
                </div>
                <ul class="mt-5 list-disc pl-10">
                    <li class="mt-2">Physical Therapy: To restore strength and flexibility.</li>
                    <li>Regular Monitoring: Follow-up appointments to assess healing progress.</li>
                    <li>Lifestyle Modifications: Avoiding strain during recovery.</li>
                </ul>
            </div>

            {/* <!-- Section 7: Prevention Tips --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Prevention Tips
                </div>
                <ul class="mt-5 list-disc pl-10">
                    <li class="mt-2">Seek prompt medical attention for wrist injuries.</li>
                    <li>Adhere to treatment plans and immobilization protocols.</li>
                    <li>Avoid smoking, as it can impede bone healing.</li>
                    <li>Do wrist-strengthening exercises post-recovery.</li>
                </ul>
            </div>

            <div class="px-8 lg:px-20 mt-8 mb-10">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Conclusion
                </div>
                <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                    Early detection and appropriate management of scaphoid fractures are crucial to prevent nonunion and its associated complications. If you're experiencing persistent wrist pain or have concerns about a previous injury, consult <strong>Dr. Darshan Kumar A. Jain</strong>, Orthopedic Specialist at Sapiens Clinic, Malleshwaram, for a comprehensive evaluation and personalized treatment plan.
                </div>
            </div>

            <ContactPage />


            <div className='mt-15'>
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default ScaphoidNonnions
