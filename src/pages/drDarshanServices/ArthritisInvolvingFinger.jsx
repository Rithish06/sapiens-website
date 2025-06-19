import React from 'react'
import Faqs from '../../components/faqs/faqs'
import Servicesbanner from '../../components/services-banner/Servicesbanner';

const ArthritisInvolvingFinger = () => {

    const faqs = [
        {
            ques: "What causes arthritis in the upper limbs?",
            ans: "Causes include wear and tear (osteoarthritis), autoimmune responses (rheumatoid arthritis), and genetic factors."
        },
        {
            ques: "Can arthritis be cured?",
            ans: "While there's no cure, treatments can effectively manage symptoms and improve quality of life."
        },
        {
            ques: "When is surgery necessary for arthritis?",
            ans: "Surgery is considered when conservative treatments fail to relieve symptoms or when joint damage is severe."
        },
        {
            ques: "Are there lifestyle changes that can help?",
            ans: "Yes, regular exercise, a healthy diet, and avoiding joint overuse can help manage symptoms."
        },
        {
            ques: "How can I prevent arthritis progression?",
            ans: "Early diagnosis, adherence to treatment plans, and lifestyle modifications can slow disease progression."
        }
    ];


    return (
        <div>
            <Servicesbanner serviceName="Arthritis Treatment for Fingers, Wrist and Elbow" />
            {/* <!-- Section 1: Introduction --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                    Arthritis affecting the fingers, wrist, and elbow can significantly impair daily activities, causing pain, stiffness, and reduced mobility. At Sapiens Clinic in Malleshwaram, we specialize in diagnosing and managing various forms of arthritis to help patients regain function and improve quality of life.
                </div>
            </div>

            {/* <!-- Section 2: Understanding Arthritis --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Understanding Arthritis in the Upper Limb
                </div>
                <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                    Arthritis is the inflammation of one or more joints, leading to pain and stiffness. In the upper limb, the most commonly affected joints include:
                </div>
                <ul class="mt-4 list-disc pl-10">
                    <li class="mt-2">Fingers: Distal interphalangeal (DIP), proximal interphalangeal (PIP), and metacarpophalangeal (MCP) joints.</li>
                    <li>Wrist: Radiocarpal and intercarpal joints.</li>
                    <li>Elbow: Humeroulnar and humeroradial joints.</li>
                </ul>
                <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                    Common types of arthritis affecting these areas are:
                </div>
                <ul class="mt-4 list-disc pl-10">
                    <li class="mt-2">Osteoarthritis (OA): Degenerative joint disease causing cartilage breakdown.</li>
                    <li>Rheumatoid Arthritis (RA): An autoimmune disorder leading to joint inflammation.</li>
                    <li>Psoriatic Arthritis: Associated with psoriasis, affecting joints and skin.</li>
                </ul>
            </div>

            {/* <!-- Section 3: Symptoms --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Symptoms
                </div>
                <ul class="mt-5 list-disc pl-10">
                    <li class="mt-2">Joint pain and tenderness</li>
                    <li>Swelling and warmth around the joints</li>
                    <li>Stiffness, especially in the morning or after inactivity</li>
                    <li>Reduced range of motion</li>
                    <li>Visible joint deformities in advanced cases</li>
                </ul>
            </div>

            {/* <!-- Section 4: Diagnosis --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Diagnosis
                </div>
                <ul class="mt-5 list-disc pl-10">
                    <li class="mt-2">Medical History and Physical Examination: Assessing symptoms and joint function.</li>
                    <li>Imaging Tests: X-rays to detect joint damage; MRI or ultrasound for detailed images.</li>
                    <li>Laboratory Tests: Blood tests to identify markers of inflammation or autoimmune activity.</li>
                </ul>
            </div>

            {/* <!-- Section 5: Treatment Options --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Treatment Options
                </div>

                {/* <!-- Non-Surgical --> */}
                <div class="mt-4 font-semibold text-[16px] text-black">Non-Surgical Treatments</div>
                <ul class="mt-2 list-disc pl-10">
                    <li class="mt-2">Medications:</li>
                    <ul class="list-disc pl-6">
                        <li>NSAIDs: Reduce pain and inflammation.</li>
                        <li>DMARDs: Slow disease progression in RA.</li>
                        <li>Corticosteroids: Control acute flare-ups.</li>
                    </ul>
                    <li class="mt-2">Physical and Occupational Therapy: Exercises to strengthen muscles and improve flexibility.</li>
                    <li>Splints and Braces: Support joints and reduce strain.</li>
                    <li>Lifestyle Modifications: Weight management and activity adjustments.</li>
                </ul>

                {/* <!-- Surgical --> */}
                <div class="mt-6 font-semibold text-[16px] text-black">Surgical Treatments</div>
                <div class="font-para text-[12px] lg:text-[16px] mt-2">
                    Considered when conservative treatments fail:
                </div>
                <ul class="mt-2 list-disc pl-10">
                    <li class="mt-2">Joint Replacement (Arthroplasty): Replacing damaged joints with prosthetics.</li>
                    <li>Joint Fusion (Arthrodesis): Fusing bones to eliminate painful movement.</li>
                    <li>Synovectomy: Removing inflamed joint lining.</li>
                </ul>
            </div>

            {/* <!-- Section 6: Prevention and Management --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Prevention and Management
                </div>
                <ul class="mt-4 list-disc pl-10">
                    <li class="mt-2">Regular low-impact exercise</li>
                    <li>Healthy diet rich in anti-inflammatory foods</li>
                    <li>Avoiding joint overuse</li>
                    <li>Prompt treatment of joint injuries</li>
                </ul>
            </div>

            {/* <!-- Section 7: Conclusion --> */}
            <div class="px-8 lg:px-20 mt-8 mb-10">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Conclusion
                </div>
                <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                    Early diagnosis and a comprehensive treatment plan are key to managing arthritis effectively. If you're experiencing joint pain or stiffness in your fingers, wrist, or elbow, consult <strong>Dr. Darshan Kumar A. Jain</strong>, Orthopedic Specialist at Sapiens Clinic, Malleshwaram, for a personalized evaluation and treatment strategy.
                </div>
            </div>

            <Faqs faqs={faqs} />

        </div>
    )
}

export default ArthritisInvolvingFinger
