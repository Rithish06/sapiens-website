import React from "react";
import Faqs from "../../components/faqs/faqs";
import Servicesbanner from "../../components/services-banner/Servicesbanner";
import ContactPage from "../services/ContactPage/ContactPage";

const Nonunion = () => {
  const faqs = [
    {
      ques: "What causes a fracture to become a nonunion?",
      ans: "Factors include inadequate stabilization, poor blood supply, infection and underlying medical conditions.",
    },
    {
      ques: "How is nonunion diagnosed?",
      ans: "Through clinical evaluation, imaging studies and laboratory tests to assess bone healing and identify contributing factors.",
    },
    {
      ques: "Can nonunion heal without surgery?",
      ans: "Some cases may respond to non-surgical treatments, but many require surgical intervention to stimulate healing.",
    },
    {
      ques: "What is the success rate of nonunion treatments?",
      ans: "Success rates vary but are generally high with appropriate treatment and patient compliance.",
    },
    {
      ques: "How long is the recovery period after treatment?",
      ans: "Recovery can take several months, depending on the treatment method and individual patient factors.",
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
          Nonunion Fracture Treatment in Malleshwaram
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 text-center">
              Nonunion refers to a fracture that fails to heal within the
              expected timeframe, leading to persistent pain, instability, and
              functional limitations. At Sapiens Clinic in Malleshwaram, we
              specialize in diagnosing and treating nonunion fractures, aiming
              to restore bone integrity and improve patient outcomes.
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Understanding Nonunion
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Typically, bones heal after a fracture through a well-orchestrated
              biological process. However, in some cases, this healing process
              is disrupted, resulting in a nonunion. Factors contributing to
              nonunion include inadequate stabilization, poor blood supply,
              infection, and certain medical conditions like diabetes or
              osteoporosis.
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
              Several factors can impede bone healing:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Inadequate Immobilization</b>: Insufficient stabilization of
                the fracture site.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Poor Blood Supply</b>: Essential nutrients and oxygen are
                necessary for bone repair.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Infection</b>: Can disrupt the healing environment.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Medical Conditions</b>: Conditions like diabetes or
                osteoporosis can impair healing.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Lifestyle Factors</b>: Smoking and poor nutrition negatively
                affect bone regeneration.
              </li>
            </ul>
            {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'></div> */}
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
              Patients with nonunion may experience
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Persistent Pain</b>: At the fracture site.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Swelling and Tenderness</b>: Around the affected area.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Instability</b>: A feeling of movement at the fracture site.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Deformity</b>: Visible changes in limb alignment.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Functional Impairment</b>: Difficulty bearing weight or using
                the affected limb
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
              Diagnosing nonunion involves:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>PClinical Evaluation</b>: Assessing symptoms and medical
                history.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Imaging Studies</b>: X-rays, CT scans, or MRI to evaluate
                bone healing.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Laboratory Tests</b>: To identify underlying conditions or
                infections.
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              A fracture is typically considered a nonunion if there is no
              visible healing after 6 to 9 months.
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Treatment Options
        </div>
        <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
          Management of nonunion focuses on stimulating bone healing and
          restoring function:
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              <b>Non-Surgical Treatments</b>
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Bone Stimulators</b>: Devices that use electromagnetic or
                ultrasonic waves to promote healing.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Nutritional Support</b>: Ensuring adequate intake of calcium,
                vitamin D, and other essential nutrients.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Pharmacological Therapy</b>: Medications to treat underlying
                conditions affecting bone health.
              </li>
            </ul>
            {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'></div> */}
          </div>
        </div>
        <div>
          <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
            <b>Surgical Interventions</b>
          </div>
          <ul className="mt-5  list-disc pl-10">
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Debridement</b>: Removal of nonviable tissue to create a
              healthy environment for healing.
            </li>
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Bone Grafting</b>: Transplanting bone tissue to stimulate
              repair.
            </li>
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>Internal Fixation</b>: Using plates, screws, or rods to
              stabilize the fracture.
            </li>
            <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
              <b>External Fixation</b>: Applying a stabilizing frame outside the
              body.
            </li>
          </ul>
          <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
            The choice of treatment depends on the fracture location, patient
            health, and previous interventions.
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
              Post-treatment care is crucial for successful outcomes:
            </div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Physical Therapy</b>: To restore strength and mobility.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Regular Monitoring</b>: Follow-up appointments to assess
                healing progress.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Lifestyle Modifications</b>: Smoking cessation and
                nutritional optimization.
              </li>
            </ul>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4">
              Recovery timelines vary but often span several months, depending
              on the severity of the nonunion and the treatment approach.
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
              Nonunion fractures present complex challenges requiring
              specialized care. At Sapiens Clinic, Malleshwaram, our
              multidisciplinary team is dedicated to providing personalized
              treatment plans, combining advanced surgical techniques with
              comprehensive rehabilitation to restore function and improve
              quality of life for our patients.
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

export default Nonunion;
