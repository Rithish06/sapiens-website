import React from "react";
import Faqs from "../../components/faqs/faqs";
import Servicesbanner from "../../components/services-banner/Servicesbanner";
import ContactPage from "../services/ContactPage/ContactPage";
import { Helmet } from "react-helmet";

const RotatorCuffTear = () => {
  const faqs = [
    {
      ques: "Can a rotator cuff tear heal without surgery?",
      ans: "Yes, many partial tears respond well to non-surgical treatments like physical therapy and medications.",
    },
    {
      ques: "How long does recovery take after surgery?",
      ans: "Recovery varies but typically ranges from 4 to 6 months, depending on the severity of the tear and adherence to rehabilitation protocols.",
    },
    {
      ques: "What are the risks of not treating a rotator cuff tear?",
      ans: "Untreated tears can lead to worsening pain, decreased shoulder function, and potentially irreversible damage.",
    },
    {
      ques: "Is physical therapy necessary after surgery?",
      ans: "Yes, physical therapy is crucial for regaining strength and mobility post-surgery.",
    },
    {
      ques: "How can I prevent rotator cuff injuries",
      ans: "Regular shoulder strengthening exercises, proper technique during activities, and avoiding repetitive overhead motions can help prevent injuries.",
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

      <Helmet>
        <title>Rotator Cuff Tear Surgeon in Bangalore | Dr. Darshan Kumar A Jain</title>
        <meta name="description" content="Dr. Darshan Kumar A Jain offers expert treatment for rotator cuff tears in Bangalore, Karnataka. Restore shoulder strength today." />
      </Helmet>

      <Servicesbanner serviceName = "Rotator Cuff Tear Diagnosis and" />

      <div className="px-8 lg:px-20 mt-8">
        {/* <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px] text-center ">
          Rotator Cuff Tear: Diagnosis and Treatment in Malleshwaram
        </div> */}
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 text-center">
              A rotator cuff tear is a common shoulder injury that can cause
              pain, weakness, and limited mobility. At Sapiens Clinic in
              Malleshwaram, we specialize in diagnosing and treating rotator
              cuff tears, aiming to restore shoulder function and improve
              quality of life.
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Understanding Rotator Cuff Tears
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              The rotator cuff comprises four muscles and their tendons that
              stabilize the shoulder joint and facilitate arm movement. A tear
              occurs when one or more of these tendons are damaged, either
              partially or completely. Such injuries can result from acute
              trauma or degenerative changes over time.
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Causes and Risk Factors
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Rotator cuff tears can result from:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Acute Injuries</b>: Falls, lifting heavy objects or sudden
                jerking motions
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Degenerative Wear</b>: Repetitive overhead activities or
                age-related tissue degeneration.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Occupational Hazards</b>: Jobs requiring repetitive shoulder
                movements, such as painting or carpentry.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Sports Activities</b>: Athletes involved in tennis, baseball
                or swimming are at higher risk.
              </li>
            </ul>
            {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'></div> */}
          </div>
        </div>
      </div>
      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Symptoms
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Common signs of a rotator cuff tear include:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Persistent Shoulder Pain</b>: Especially during rest or at
                night.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Weakness</b>: Difficulty lifting or rotating the arm.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Limited Range of Motion</b>: Stiffness or inability to
                perform certain movements.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Crackling Sensation</b>: A crackling or popping sound when
                moving the shoulder.
              </li>
            </ul>
            {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'></div> */}
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Diagnosis
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Accurate diagnosis involves:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Physical Examination</b>: Assessing shoulder strength and
                range of motion.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Imaging Tests</b>: MRI or ultrasound to visualize soft tissue
                damage.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>X-rays</b>: To rule out other causes of shoulder pain, such
                as arthritis.
              </li>
            </ul>
            {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'></div> */}
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Treatment Options
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              <b>Non-Surgical Management</b>
            </div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Many rotator cuff tears can be managed without surgery:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Rest and Activity Modification</b>: Avoiding activities that
                exacerbate symptoms.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Physical Therapy</b>:Exercises to strengthen shoulder muscles
                and improve flexibility.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Medications</b>:NSAIDs to reduce pain and inflammation.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Steroid Injections</b>: To alleviate severe pain and
                inflammation.
              </li>
            </ul>
            {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'></div> */}
          </div>
        </div>
        <div>
          <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
            <b>Surgical Intervention</b>
          </div>
          <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
            Surgery may be recommended for:
          </div>
          <ul className="mt-5  list-disc pl-10">
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Large or Complete Tears</b>: Especially in active individuals.
            </li>
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Persistent Symptoms</b>: When conservative treatments fail to
              provide relief.
            </li>
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Loss of Function</b>: Significant weakness or limited mobility
            </li>
          </ul>
          {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'></div> */}
        </div>
        <div>
          <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
            Surgical options include:
          </div>
          <ul className="mt-5  list-disc pl-10">
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Arthroscopic Tendon Repair</b>: Minimally invasive procedure to
              reattach the torn tendon.
            </li>
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Open Tendon Repair</b>: Traditional surgery for larger tears.
            </li>
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Tendon Transfer</b>: Using a nearby tendon to replace the
              damaged one.
            </li>
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Shoulder Replacement</b>: For massive, irreparable rotator cuff
              injuries.
            </li>
          </ul>
          {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'></div> */}
        </div>
      </div>
      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Recovery and Rehabilitation
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Post-treatment rehabilitation focuses on:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Immobilization</b>: Using a sling to support the shoulder
                during initial healing.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Physical Therapy</b>: Gradual exercises to restore strength
                and flexibility.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Pain Management</b>: Medications and modalities to control
                discomfort.
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Recovery timelines vary, but most patients regain significant
              function within 4 to 6 months.
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
              Rotator cuff tears can significantly impact daily activities and
              quality of life. At Sapiens Clinic, Malleshwaram, Dr. Darshan
              Kumar A. Jain and our dedicated team are committed to providing
              comprehensive care, from accurate diagnosis to personalized
              treatment plans, ensuring optimal recovery and return to daily
              activities.
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

export default RotatorCuffTear;
