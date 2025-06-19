import React from "react";
import Faqs from "../../components/faqs/faqs";
import Servicesbanner from "../../components/services-banner/Servicesbanner";
import ContactPage from "../services/ContactPage/ContactPage";

const NerveRepair = () => {
  const faqs = [
    {
      ques: "What is nerve grafting?",
      ans: "A nerve or synthetic conduit is used to bridge gaps >2 cm when direct repair isn’t possible.",
    },
    {
      ques: "How long before I see improvement?",
      ans: "Regrowth is slow - about 1 mm per day - so expect first signs of improvement in a few months.",
    },
    {
      ques: "Is full recovery possible?",
      ans: "Complete restoration is rare; however, meaningful functional gains are highly achievable.",
    },
    {
      ques: "When is surgery unnecessary?",
      ans: "Partial injuries may heal on their own; surgery is recommended if there's no improvement in 3–6 months",
    },
    {
      ques: "What are the surgical risks?",
      ans: "As with any operation, risks include infection, scar tissue, or graft failure - minimized by expert microsurgery and rehab.",
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
          Nerve Repair Surgery in Malleshwaram
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 text-center">
              Nerve repair surgery restores function and sensation following
              peripheral nerve injury. At our Malleshwaram clinic, expert
              surgeons specialize in repairing, grafting, and transferring
              nerves to help patients regain movement and reduce pain.
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          What Is Nerve Repair?
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Direct Nerve Repair</b>: Damaged nerve ends are aligned and
                sutured under a microscope using fine threads (8‑0 to 10‑0
                nylon), maintaining fibril integrity.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Nerve Grafting</b>: When a gap prevents direct repair, a
                segment of another nerve (e.g., sural nerve) or a processed
                allograft is used to bridge the gap.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Nerve Transfer</b>: Healthy nearby nerves are rerouted to
                restore critical functions, especially when the original nerve
                is irreparable.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          Who Needs This Surgery?
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Traumatic Injuries</b>: Cuts, crushes, or stretch injuries
                affecting peripheral nerves.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Entrapment Neuropathies</b>: Conditions like carpal tunnel or
                cubital tunnel that last despite non-surgical treatment.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Tumor-Related Nerve Damage</b>: Removal of benign/ malignant
                growths requiring nerve reconstruction.
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
          When Should You See a Surgeon?
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                Best outcomes occur when surgically evaluated within 3 months of
                injury.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                Specialists at Mayo and Cleveland Clinics recommend early
                referral, ideally within 1-2 months post-injury .
              </li>
            </ul>
            {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'></div> */}
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 mt-8">
        <div className="text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]">
          What the Procedure Involves
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Evaluation</b>: Physical exams, EMG nerve studies, and
                imaging to assess damage.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Microsurgical Repair</b>:
                <ul className="list-[circle] ml-6 mt-2">
                  <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                    <b>Direct coaptation </b>under a microscope .
                  </li>
                  <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                    <b>Nerve grafting</b> or <b>nerve transfer</b>, depending on
                    gap length and donor options.
                  </li>
                </ul>
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                <b>Post-Op Rehabilitation</b>: Includes physiotherapy and
                splinting to support healing and prevent joint stiffness .
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
          Recovery & Outcomes
        </div>
        <div className="flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]">
          <div>
            <ul className="mt-5  list-disc pl-10">
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                Nerves regenerate at ≈1 mm/day, so recovery may take months to
                over a year .
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                Surgery rarely restores full pre-injury function, but
                significant improvements in strength and sensation are common.
              </li>
              <li className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">
                Close follow-up and dedicated rehabilitation are essential to
                maximize outcomes .
              </li>
            </ul>
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
              Expert peripheral nerve repair offers hope for individuals with
              nerve injuries affecting the hand, arm, or leg. At Sapiens Clinic,
              Malleshwaram, our microsurgical team delivers precision-based
              repair, grafting, and nerve transfer procedures to maximize
              recovery and quality of life.
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

export default NerveRepair;
