import React from "react";
import Faqs from "../../components/faqs/faqs";
import Servicesbanner from "../../components/services-banner/Servicesbanner";
import ContactPage from "../services/ContactPage/ContactPage";

const Pollicization = () => {
  const faqs = [
    {
      ques: "At what age is pollicization typically performed",
      ans: "Pollicization is usually performed between 6 months and 2 years of age to take advantage of developmental plasticity.",
    },
    {
      ques: "Will the new thumb have sensation",
      ans: "Efforts are made to preserve and reroute nerves to provide sensation in the reconstructed thumb.",
    },
    {
      ques: "How long is the hospital stay after surgery?",
      ans: "Patients typically stay in the hospital for a few days post-surgery for monitoring and initial recovery.",
    },
    {
      ques: "What is the success rate of pollicization?",
      ans: "Success rates are high, with most patients achieving improved hand function and satisfaction.",
    },
    {
      ques: "Are there alternatives to pollicization?",
      ans: "Alternatives include toe-to-hand transfers or prosthetics, depending on individual cases.",
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
      <div className="relative"><Servicesbanner serviceName="Pollicization: Thumb Reconstruction Surgery" /></div>

      <div className="px-8 lg:px-20 mt-8">
        {/* <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px] text-center ">
          Pollicization: Thumb Reconstruction Surgery in Malleshwaram
        </div> */}
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 text-center">
              Pollicization is a specialized surgical procedure designed to
              reconstruct a functional thumb by transforming an existing finger,
              typically the index finger, into a thumb. This surgery is crucial
              for individuals born without a thumb (congenital thumb aplasia) or
              those who have lost their thumb due to trauma. At Sapiens Clinic
              in Malleshwaram, we offer expert care in performing pollicization
              to restore hand function and enhance quality of life.
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Understanding Pollicization
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              The thumb plays a vital role in hand function, contributing to
              grip strength and dexterity. Pollicization involves repositioning
              the index finger to the thumb's location, rotating it
              approximately 120 to 160 degrees, and reconstructing the necessary
              tendons, muscles, and nerves to enable thumb-like movement and
              sensation . This procedure is often preferred over toe-to-hand
              transfers, especially in pediatric cases, due to better aesthetic
              and functional outcomes.
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Indications for Pollicization
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Pollicization is indicated in cases such as:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Congenital Thumb Aplasia or Hypoplasia</b>: Where the thumb
                is absent or underdeveloped.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Traumatic Thumb Loss</b>:When replantation isn't feasible.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Radial Longitudinal Deficiency</b>: A condition affecting the
                development of the radius bone and thumb.
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              This procedure is typically performed in children between 6 months
              and 2 years of age to maximize adaptability and functional
              outcomes.
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          The Pollicization Procedure
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              The surgical process includes:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Incision and Dissection</b>: Careful dissection to preserve
                blood vessels, nerves, and tendons.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Bone Modification</b>: Shortening and rotating the index
                finger's metacarpal bone to the thumb position.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Tendon and Muscle Transfer</b>: Reconstructing tendons and
                muscles to facilitate thumb movements.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Skin Closure</b>: Shaping the skin to resemble a natural
                thumb.
              </li>
            </ul>
            {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'></div> */}
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Benefits of Pollicization
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Pollicization offers several advantages:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Improved Hand Function</b>: Restores the ability to grasp and
                manipulate objects.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Enhanced Aesthetics</b>: Provides a more natural hand
                appearance.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Psychosocial Benefits</b>: Boosts self-esteem and social
                interaction, especially in children.
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Studies have shown that patients undergoing pollicization
              experience significant improvements in hand function and overall
              satisfaction.
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
              As with any surgical procedure, pollicization carries potential
              risks:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Infection</b>: Managed with antibiotics and proper wound
                care.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Nerve Damage</b>: May result in altered sensation.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Limited Range of Motion</b>: Physical therapy is essential to
                maximize mobility.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Aesthetic Concerns</b>: Scarring or differences in appearance
                may occur.
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
              Recovery involves:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Immobilization</b>: The hand is typically immobilized in a
                cast for several weeks.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Physical Therapy</b>: Customized exercises to improve
                strength and flexibility.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Regular Follow-ups</b>: Monitoring healing and functional
                progress.
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Most patients achieve significant functional improvement within 6
              to 12 months post-surgery.
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
              Pollicization is a transformative procedure that can significantly
              enhance hand function and quality of life for individuals lacking
              a functional thumb. At Sapiens Clinic, Malleshwaram, our
              experienced surgical team is dedicated to providing comprehensive
              care, from initial consultation through rehabilitation, ensuring
              the best possible outcomes for our patients.
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

export default Pollicization;
