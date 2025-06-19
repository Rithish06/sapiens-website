import React from "react";
import Faqs from "../../components/faqs/faqs";
import Servicesbanner from "../../components/services-banner/Servicesbanner";
import ContactPage from "../services/ContactPage/ContactPage";

const SlapInjuries = () => {
  const faqs = [
    {
      ques: "Can a SLAP tear heal without surgery?",
      ans: "Some minor tears may improve with conservative treatments, but significant tears often require surgical intervention.",
    },
    {
      ques: " How long does recovery take after SLAP tear surgery?",
      ans: "Recovery varies but typically ranges from 3 to 6 months, depending on the severity of the tear and adherence to rehabilitation protocols.",
    },
    {
      ques: "What are the risks of not treating a SLAP tear?",
      ans: "Untreated tears can lead to chronic pain, shoulder instability and increased risk of further injuries.",
    },
    {
      ques: "Is physical therapy necessary after surgery?",
      ans: "Yes, physical therapy is crucial for regaining strength and mobility post-surgery.",
    },
    {
      ques: " Can I return to sports after treatment?",
      ans: "Most patients can return to their previous level of activity following successful treatment and rehabilitation.",
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
      <div className="relative">{/* <Servicesbanner /> */}</div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px] text-center ">
          SLAP Injuries: Diagnosis and Treatment in Malleshwaram
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 text-center">
              A SLAP (Superior Labrum Anterior to Posterior) injury refers to a
              tear of the labrum, the ring of cartilage that surrounds the
              shoulder socket. This type of injury can cause pain, instability,
              and decreased range of motion in the shoulder. At Sapiens Clinic
              in Malleshwaram, we specialize in diagnosing and treating SLAP
              injuries to restore shoulder function and improve quality of life.
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Understanding SLAP Injuries
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              The labrum serves as a cushion and stabilizer for the shoulder
              joint. A SLAP tear occurs at the top (superior) part of the
              labrum, where the biceps tendon attaches. This injury can result
              from acute trauma or repetitive shoulder movements. SLAP tears are
              classified into several types based on their severity and
              location.
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
              SLAP injuries can result from:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Repetitive Overhead Activities</b>: Such as throwing or
                swimming.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Trauma</b>:Falling onto an outstretched arm or a sudden pull
                on the arm.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Degenerative Changes</b>: Age-related wear and tear of the
                shoulder joint.
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Athletes involved in overhead sports and individuals with
              occupations requiring repetitive shoulder movements are at higher
              risk.
            </div>
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
              Common symptoms of a SLAP injury include
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Shoulder Pain</b>: Especially during overhead activities.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Clicking or Popping Sensation</b>: In the shoulder joint.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Decreased Strength</b>: Particularly when lifting objects.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Limited Range of Motion</b>: Difficulty moving the shoulder
                freely
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Feeling of Instability</b>: A sensation that the shoulder may
                "give out."
              </li>
            </ul>
            {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'></div> */}
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
                <b>Physical Examination</b>: Assessing shoulder stability and
                range of motion.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Imaging Tests</b>:
                <ul className="list-[circle] ml-6 mt-2">
                  <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                    <b>MRI or MR Arthrography</b>: Provides detailed images of
                    soft tissues, aiding in identifying labral tears.
                  </li>
                  <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                    <b>X-rays</b>: To rule out other causes of shoulder pain.
                  </li>
                </ul>
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Specialized tests, such as the O'Brien's test, may also be
              performed to detect SLAP lesions.
            </div>
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
              Initial treatment may include:
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
                <b>Corticosteroid Injections</b>: To alleviate severe pain and
                inflammation.
              </li>
            </ul>
            {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'></div> */}
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
              <b>Persistent Symptoms</b>: When conservative treatments fail
            </li>
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Recurrent Shoulder Instability</b>: Particularly in athletes or
              active individuals.
            </li>
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Significant Labral Damage</b>: Identified through imaging
              studies.
            </li>
          </ul>
          {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'></div> */}
        </div>
        <div>
          <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
            Surgical options include:
          </div>
          <ul className="mt-5  list-disc pl-10">
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Arthroscopic SLAP Repair</b>: Reattaching the torn labrum to
              the shoulder socket.
            </li>
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Debridement</b>: Removal of frayed or damaged labral tissue.
            </li>
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Biceps Tenodesis</b>: Reattaching the biceps tendon to relieve
              tension on the labrum
            </li>
          </ul>
          {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'></div> */}
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
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Activity Modification</b>: Gradual return to daily activities
                and sports as guided by the healthcare provider.
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Recovery timelines vary but typically range from 3 to 6 months,
              depending on the severity of the tear and the treatment approach.
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
              SLAP injuries can significantly impact shoulder function and
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
        <ContactPage contacts={contact[0]} />
      </div>
      <div>
        <Faqs faqs={faqs} />
      </div>
    </div>
  );
};

export default SlapInjuries;
