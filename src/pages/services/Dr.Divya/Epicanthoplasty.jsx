import React from 'react'
import Divyaservicebanner from '../../../components/services-banner/Divyaservicebanner'
import { assets } from '../../../assets/assets'
import Faqs from '../../../components/faqs/faqs'
import ContactPage from '../ContactPage/ContactPage'

const Epicanthoplasty = () => {

  const faqs = [
    {
      ques: "Is epicanthoplasty painful?",
      ans: "Mild discomfort may occur post-surgery but is easily managed with prescribed medications."
    },
    {
      ques: "How long until I see the final results?",
      ans: "Swelling typically subsides within 1–2 weeks, with refined results visible in 4–6 weeks."
    },
    {
      ques: "Can this procedure be reversed?",
      ans: "The surgery is designed to be long-lasting. While minor adjustments are possible, reversal is rarely sought."
    },
    {
      ques: "Will there be visible scars?",
      ans: "Incisions are placed in natural creases and generally heal well with minimal visibility."
    },
    {
      ques: "Can I combine this with other eye procedures?",
      ans: "Yes, it is commonly performed alongside double eyelid surgery or canthopexy for enhanced results."
    },
  ]

  const contact = [
    {
      heading: "",
      para: ""
    }
  ]
  return (
    <div>
      <div>
        <Divyaservicebanner />
      </div>

      <div className='lg:mx-20 xs:mt-29 md:mt-10 mt-10  mx-5'>

        {/* container 1 */}
        <div className='flex flex-col items-center'>
          <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Epicanthoplasty Surgery in Malleshwaram</div>
          <div className='text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5'>Reshape the Inner Eye for a Brighter, Refined Appearance</div>
          <div className='text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2'>Epicanthoplasty is a specialized cosmetic eyelid procedure designed to correct the epicanthal fold - a skin fold that covers the inner corner of the eye, often seen in individuals of Asian descent. This fold can make the eyes appear smaller or give a cross-eyed look. Through epicanthoplasty, the fold is modified to reveal more of the medial canthus (inner eye corner), resulting in larger, more open eyes and a smoother, aesthetically pleasing contour.
            At our Malleshwaram-based center, this procedure is approached with precision and care, ensuring that both cosmetic goals and safety standards are maintained.
          </div>
        </div>

        {/* container 2 */}

        <div className='flex lg:flex-row flex-col-reverse items-center md:gap-10 gap-5 mt-10'>

          {/* content */}
          <div className='lg:w-[65%]'>
            <div className='text-[14px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>What Does Epicanthoplasty Do?</div>
            <div className='text-[12px] md:text-[16px] font-[500] font-para mt-2 leading-7'>This procedure involves reshaping the inner eyelid to enhance the visible width of the eyes. By subtly repositioning the surrounding tissue, more of the eye’s white is exposed, giving the appearance of wider, more symmetrical eyes. It's commonly combined with double eyelid surgery for those looking to further define their eye shape while retaining ethnic features.</div>

            <div className='text-[14px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5'>Types of Epicanthoplasty</div>
            <ul className='list-disc text-[12px] md:text-[16px] font-[500] font-para leading-7 ml-5 mt-2'>
              <li>Medial Epicanthoplasty: Focuses on the inner eye corner (medial canthus) to make the eyes appear larger and reduce spacing between the eyes.</li>
              <li>Lateral Epicanthoplasty: Targets the outer eye corner (lateral canthus) to enhance eye length and reduce the look of tiredness or heaviness.</li>
            </ul>

            <div className='mt-5 text-[12px] md:text-[16px] font-[500] font-para leading-5'>Both can be performed as a standalone or combined procedure, depending on the desired outcome.</div>
          </div>
          {/* img */}
          <div className='lg:w-[35%]'>
            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
          </div>
        </div>

        {/* container 3 */}

        <div className='flex lg:flex-row flex-col items-center md:gap-10 gap-5 mt-10'>

          {/* img */}
          <div className='lg:w-[35%]'>
            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
          </div>

          {/* content */}
          <div className='lg:w-[65%]'>
            <div className='text-[14px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5'>Who Might Consider This Procedure?</div>
            <div className='text-[12px] md:text-[16px] font-[500] font-para'>
              <div className='mt-2 leading-5'>While epicanthoplasty is an elective surgery, it can be ideal for individuals who :</div>
              <ul className='list-disc leading-7 ml-5 mt-5'>
                <li>Have prominent epicanthal folds that affect the shape of their eyes</li>
                <li>Desire more defined, open, or “wider-looking” eyes</li>
                <li>Are planning or have had double eyelid surgery and want balanced results</li>
                <li>Wish to refine their eye aesthetics without drastically altering their natural appearance</li>
              </ul>
            </div>
          </div>

        </div>

        {/* container 4 */}

        <div className='flex lg:flex-row flex-col-reverse md:gap-10 gap-5 mt-10 items-center'>
          {/* content */}
          <div className='lg:w-[65%]'>
            <div className='text-[14px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>How to Prepare for Surgery</div>
            <div className='text-[12px] md:text-[16px] font-[500] font-para'>
              <div className='leading-5 mt-2'>Before surgery, you’ll undergo a thorough consultation and eyelid evaluation. Key steps in preparation include :</div>
              <ul className='list-disc ml-5 leading-7 mt-5'>
                <li>Reviewing medical history and any past eye conditions</li>
                <li>Avoiding smoking and alcohol for at least 3 weeks before surgery</li>
                <li>Discontinuing certain medications as instructed</li>
                <li>Measuring and planning the amount of tissue to adjust for natural symmetry</li>
              </ul>

              <div className='mt-2 leading-5'>Your surgeon will walk you through expectations, risks, and aftercare instructions to ensure optimal healing and results.</div>
            </div>
          </div>

          {/* img */}
          <div className='lg:w-[35%]'>
            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
          </div>
        </div>

        {/* container 5 */}

        <div className='flex lg:flex-row flex-col items-center md:gap-10 gap-5 mt-10'>
          {/* img */}
          <div className='lg:w-[35%]'>
            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
          </div>

          {/* content */}

          <div className='lg:w-[65%]'>
            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent '>The Procedure: What to Expect</div>
            <div className='text-[12px] md:text-[16px] font-[500] font-para'>
              <div className='mt-2 leading-5'>Performed under local anesthesia, <b>epicanthoplasty takes less than an hour</b> and is typically done in an outpatient setting.</div>
              <ol className='list-decimal ml-5 mt-5 leading-7'>
                <li>The surgeon marks the area around the <b>medial or lateral canthus</b> based on the type of epicanthoplasty.</li>
                <li>Small incisions are made, and excess tissue is removed.</li>
                <li>Underlying tissues are repositioned to expose more of the eye and create a smoother contour.</li>
                <li>The incision is closed with fine sutures, and you’ll be monitored briefly before heading home.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* container 6 */}

        <div className="flex lg:flex-row flex-col-reverse items-center md:gap-10 gap-5 mt-10">
          {/* content */}
          <div className='lg:w-[65%]'>
            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent '>Recovery and Post-Procedure Care</div>
            <div className='text-[12px] md:text-[16px] font-[500] font-para'>
              <div className='mt-2'>Some swelling, mild discomfort, or bruising is expected for a few days. To aid recovery :</div>
              <ul className='list-disc ml-5 mt-5 leading-7'>
                <li>Apply cold compresses during the first 48 hours</li>
                <li>Avoid rubbing your eyes or strenuous physical activity for 2–3 weeks</li>
                <li>Refrain from smoking, alcohol, spicy foods, and makeup during recovery</li>
                <li>Wear sunglasses when outdoors to protect the surgical site from sunlight</li>
                <li>Avoid pools, direct water contact and contact lenses for at least two weeks</li>
              </ul>

              <div className='mt-2'>You'll return to the clinic within a week for suture removal and progress review.</div>
            </div>
          </div>
          {/* img */}
          <div className='lg:w-[35%]'>
            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
          </div>

        </div>

        {/* container 7 */}

        <div className='flex lg:flex-row flex-col items-center md:gap-10 gap-5 mt-10'>
          {/* img */}
          <div className='lg:w-[35%]'>
            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
          </div>

          {/* content */}

          <div className='lg:w-[65%]'>
            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Are There Any Risks?</div>
            <div className='text-[12px] md:text-[16px] font-[500] font-para'>
              <div className='mt-2'>As with any eyelid procedure, minor risks can include :</div>
              <ul className='list-disc ml-5 mt-5 leading-7'>
                <li>Temporary scarring or irritation</li>
                <li>Mild infection (rare and manageable with care)</li>
                <li>Allergic reactions to anesthesia or sutures</li>
                <li>Uneven healing, which can be adjusted if needed</li>
              </ul>

              <div className='mt-2'>Proper planning and post-operative care greatly reduce these chances.</div>
            </div>
          </div>
        </div>
      </div>

      {/* contact-part */}
      <div>
        <ContactPage contacts={contact[0]} />
      </div>

      {/* faqs */}
      <div>
        <Faqs faqs={faqs} />
      </div>
    </div>
  )
}

export default Epicanthoplasty