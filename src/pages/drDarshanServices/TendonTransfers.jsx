import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'
import ContactPage from '../services/ContactPage/ContactPage';
import { Helmet } from 'react-helmet';

const TendonTransfers = () => {


    const faqs = [
        {
            ques: "How long does recovery take after tendon transfer surgery?",
            ans: "Recovery time varies but typically spans several months, including immobilization and rehabilitation phases."
        },
        {
            ques: "Will I regain full function of my hand?",
            ans: "While the goal is to restore as much function as possible, outcomes depend on various factors, including the extent of the injury and adherence to rehabilitation."
        },
        {
            ques: "Are there alternatives to tendon transfer surgery?",
            ans: "Alternatives may include nerve repair, physical therapy, or the use of orthotic devices, depending on the specific condition."
        },
        {
            ques: "Is the procedure painful?",
            ans: "Pain is managed with appropriate anesthesia during surgery and medications postoperatively."
        },
        {
            ques: "What is the success rate of tendon transfer surgeries?",
            ans: "Success rates are generally high, especially when performed by experienced surgeons and followed by dedicated rehabilitation."
        }
    ];

    return (
        <div>
            <Helmet>
                <title>Tendon Transfer Surgery in Bangalore | Dr. Darshan Kumar A Jain</title>
                <meta name='description' content='Dr. Darshan Kumar A Jain offers expert tendon transfer surgery in Bangalore, Karnataka for hand function restoration and mobility.' />
            </Helmet>



            <Servicesbanner serviceName="Tendon transfers ( for hand )" />

            {/* <!-- Section 1: Introduction --> */}
            <div class="px-8 lg:px-20 mt-8">
                {/* <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Tendon Transfer Surgery in Malleshwaram
                </div> */}
                <div class="flex flex-col lg:flex-row gap-[20px] lg:gap-[50px]">
                    <div>
                        <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                            Tendon transfer surgery is a specialized procedure aimed at restoring hand function lost due to nerve injuries, muscle damage, or congenital conditions. By redirecting functioning tendons to compensate for impaired ones, this surgery can significantly improve mobility and strength in the hand. At Sapiens Clinic in Malleshwaram, we offer expert evaluation and surgical solutions to help patients regain optimal hand function.
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Section 2: What Is Tendon Transfer Surgery --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    What Is Tendon Transfer Surgery?
                </div>
                <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                    Tendon transfer involves relocating a healthy tendon from its original attachment to a new one to restore lost function. This procedure is particularly beneficial when specific muscles or tendons are non-functional due to:
                </div>
                <ul class="mt-5 list-disc pl-10">
                    <li class="mt-2">Peripheral nerve injuries (e.g., radial, median, or ulnar nerve palsies)</li>
                    <li>Spinal cord injuries leading to muscle paralysis</li>
                    <li>Brachial plexus injuries</li>
                    <li>Congenital hand deformities</li>
                    <li>Tendon ruptures or lacerations</li>
                </ul>
                <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                    The goal is to restore specific movements such as wrist extension, finger flexion, or thumb opposition by rerouting tendons from muscles that have retained their function.
                </div>
            </div>

            {/* <!-- Section 3: Indications --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Indications for Hand Tendon Transfer
                </div>
                <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                    Tendon transfer surgery may be considered in cases where:
                </div>
                <ul class="mt-4 list-disc pl-10">
                    <li class="mt-2">Nerve repair is not feasible or has failed</li>
                    <li>Muscle function cannot be restored through other means</li>
                    <li>There is a need to correct muscle imbalances or deformities</li>
                    <li>Rehabilitation alone has not achieved desired functional outcomes</li>
                </ul>
                <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                    Common conditions treated include:
                </div>
                <ul class="mt-2 list-disc pl-10">
                    <li class="mt-2">Radial nerve palsy (wrist drop)</li>
                    <li>Ulnar nerve palsy (claw hand)</li>
                    <li>Median nerve palsy (loss of thumb opposition)</li>
                    <li>Cerebral palsy-related hand dysfunction</li>
                    <li>Post-traumatic tendon or nerve injuries</li>
                </ul>
            </div>

            {/* <!-- Section 4: Surgical Procedure --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Surgical Procedure
                </div>
                <ul class="mt-5 list-disc pl-10">
                    <li class="mt-2">Assessment: Identifying functional muscles and tendons suitable for transfer.</li>
                    <li>Planning: Determining the specific tendons to be rerouted to restore desired movements.</li>
                    <li>Surgery: Detaching the selected tendon from its original insertion and reattaching it to a new site to perform the lost function.</li>
                    <li>Stabilization: Securing the transferred tendon and immobilizing the hand to facilitate healing.</li>
                </ul>
                <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                    The choice of donor tendon depends on factors such as muscle strength, range of motion, and the specific functional deficit being addressed.
                </div>
            </div>

            {/* <!-- Section 5: Recovery and Rehabilitation --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Recovery and Rehabilitation
                </div>
                <ul class="mt-5 list-disc pl-10">
                    <li class="mt-2">Immobilization: The hand is typically immobilized in a splint or cast for several weeks to allow healing.</li>
                    <li>Physical Therapy: Rehabilitation begins with gentle movements, progressing to strengthening exercises to retrain the transferred tendon for its new function.</li>
                    <li>Duration: Full recovery and return to daily activities may take several months, depending on the complexity of the surgery and individual healing rates.</li>
                </ul>
            </div>

            {/* <!-- Section 6: Benefits of Tendon Transfer Surgery --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Benefits of Tendon Transfer Surgery
                </div>
                <ul class="mt-5 list-disc pl-10">
                    <li class="mt-2">Restore lost hand and finger movements</li>
                    <li>Improve grip strength and dexterity</li>
                    <li>Enhance the ability to perform daily tasks</li>
                    <li>Correct deformities and improve hand appearance</li>
                    <li>Reduce pain and discomfort associated with muscle imbalances</li>
                </ul>
            </div>

            {/* <!-- Section 7: Risks and Considerations --> */}
            <div class="px-8 lg:px-20 mt-8">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Risks and Considerations
                </div>
                <ul class="mt-5 list-disc pl-10">
                    <li class="mt-2">Infection at the surgical site</li>
                    <li>Scar formation affecting tendon gliding</li>
                    <li>Incomplete restoration of function</li>
                    <li>Need for additional surgeries in some cases</li>
                </ul>
                <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                    A thorough preoperative evaluation and adherence to postoperative rehabilitation protocols are essential to minimize these risks.
                </div>
            </div>

            {/* <!-- Section 8: Conclusion --> */}
            <div class="px-8 lg:px-20 mt-8 mb-10">
                <div class="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
                    Conclusion
                </div>
                <div class="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
                    Tendon transfer surgery offers a viable solution for restoring hand function when other treatments have failed or are not possible. If you're experiencing hand dysfunction due to nerve or tendon injuries, consult <strong>Dr. Darshan Kumar A. Jain</strong>, Orthopedic Specialist at Sapiens Clinic, Malleshwaram, for a comprehensive evaluation and personalized treatment plan.
                </div>
            </div>

            <ContactPage />

            <Faqs faqs={faqs} />

        </div>
    )
}

export default TendonTransfers
