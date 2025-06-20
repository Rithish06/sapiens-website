import React from "react";
import Faqs from "../../components/faqs/faqs";
import Servicesbanner from "../../components/services-banner/Servicesbanner";
import ContactPage from "../services/ContactPage/ContactPage";

const TendonTransfer = () => {
  const faqs = [
    {
      ques: "Who is a candidate for tendon transfer surgery?",
      ans: "Individuals with muscle paralysis or loss due to nerve injuries, trauma or congenital conditions may be considered candidates after thorough evaluation.",
    },
    {
      ques: "How long does the surgery take?",
      ans: "The duration varies depending on the complexity but typically ranges from 1 to 3 hours.",
    },
    {
      ques: "Will I regain full function after surgery?",
      ans: "While many patients experience significant improvement, the extent of recovery depends on various factors, including the severity of the initial condition and adherence to rehabilitation protocols.",
    },
    {
      ques: "Are there alternatives to tendon transfer?",
      ans: "Alternatives may include nerve grafts, muscle transfers, or the use of assistive devices, depending on the specific condition.",
    },
    {
      ques: "What is the success rate of tendon transfer surgeries?",
      ans: "Success rates are generally high, with many patients achieving improved function and quality of life post-surgery.",
    },
  ];
  const contact = [
    {
      heading: "",
      para: "",
    },
  ];

  return (
    <div className="min-h-[100vh]">
      <div className="relative"><Servicesbanner serviceName = "Tendon Transfer Surgery" /></div>

      <div className="px-8 lg:px-20 mt-8">
        {/* <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px] text-center ">
          Tendon Transfer Surgery in Malleshwaram
        </div> */}
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 text-center">
              Tendon transfer surgery is a specialized procedure aimed at
              restoring lost muscle function by rerouting tendons from
              functioning muscles to compensate for paralyzed or damaged ones.
              At Sapiens Clinic in Malleshwaram, we offer expert care in
              performing tendon transfers to enhance mobility and improve
              quality of life for our patients.
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Understanding Tendon Transfer
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Tendons are connective tissues that attach muscles to bones,
              facilitating movement. In cases where specific muscles lose
              function due to nerve injuries, trauma, or congenital conditions,
              tendon transfer surgery can reassign the role of a non-functioning
              muscle to a functioning one by redirecting its tendon. This
              procedure leverages the strength of healthy muscles to restore
              movement in affected areas.
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Indications for Tendon Transfer
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Tendon transfer surgery is considered in various scenarios,
              including:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Nerve Injuries</b>: Such as radial, ulnar, or median nerve
                palsies.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Muscle Paralysis</b>: Due to conditions like cerebral palsy
                or spinal cord injuries.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Traumatic Injuries</b>: Leading to loss of muscle or tendon
                function.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Congenital Defects</b>: Affecting limb movement and function.
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              The goal is to restore functional movement, improve strength, and
              enhance the patient's ability to perform daily activities.
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          The Tendon Transfer Procedure
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              The surgical process involves:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Assessment</b>: Identifying suitable donor tendons and
                evaluating muscle strength.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Surgical Planning</b>: Determining the optimal path and
                attachment points for the transferred tendon.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Surgery</b>: Detaching the selected tendon from its original
                insertion and reattaching it to a new location to perform the
                desired function.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Rehabilitation</b>: Postoperative therapy to retrain the
                muscle for its new role and restore range of motion.
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              The procedure is tailored to each patient's specific needs,
              ensuring the best possible outcome.
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Benefits of Tendon Transfer
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Undergoing tendon transfer surgery can offer several advantages:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Restored Movement</b>: Improved ability to perform tasks
                previously hindered by muscle dysfunction.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Enhanced Strength</b>: Utilizing healthy muscles to
                compensate for weakened ones.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Improved Quality of Life</b>: Greater independence and
                participation in daily activities.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Cosmetic Improvement</b>: Correction of deformities resulting
                from muscle imbalance
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              These benefits contribute to a significant positive impact on the
              patient's overall well-being.
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Risks and Considerations
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              As with any surgical procedure, tendon transfer carries potential
              risks:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Infection</b>: Managed with appropriate antibiotics and care.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Nerve Damage</b>: Rare, but possible during surgery.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Scar Formation</b>: May affect the range of motion if not
                properly managed.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Incomplete Recovery</b>: Some patients may not regain full
                function.
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              A thorough preoperative evaluation and discussion with the
              surgical team can help mitigate these risks.
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Recovery and Rehabilitation
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Postoperative care is crucial for successful outcomes:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Immobilization</b>:The affected limb may be immobilized for a
                period to allow healing
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Physical Therapy</b>: Customized exercises to retrain the
                transferred tendon and restore movement.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Regular Follow-ups</b>: Monitoring progress and addressing
                any complications promptly.
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Recovery timelines vary but typically range from several weeks to
              months, depending on the complexity of the surgery and the
              individual's response to rehabilitation.
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Conclusion
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Tendon transfer surgery offers a viable solution for restoring
              function in cases of muscle paralysis or loss. At Sapiens Clinic,
              Malleshwaram, our experienced surgical team is dedicated to
              providing personalized care, from initial consultation through
              rehabilitation, ensuring the best possible outcomes for our
              patients.
            </div>
          </div>
        </div>
      </div>
      <div>
        <ContactPage />
      </div>
      <div>
        <Faqs faqs={faqs} />
      </div>
    </div>
  );
};

export default TendonTransfer;
