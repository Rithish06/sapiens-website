import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import { assets } from '../../../../assets/assets'
import ContactPage from '../../ContactPage/ContactPage'
import Contact from '../../../contactUs/Contact'
import Faqs from '../../../../components/faqs/faqs'

const WallDecompression = () => {

  const faqs = [
    {
      ques:"How long is the recovery after two-wall decompression?",
      ans:"Most patients recover well within 2–3 weeks. Swelling and bruising usually resolve in the first 10-14 days."
    },
    {
      ques:"Will my eye look completely normal after surgery?",
      ans:"While the eye will settle back into the orbit, slight differences in appearance may remain. We aim for symmetry and comfort, and further refinements can be discussed if needed."
    },
    {
      ques:"Is two-wall decompression permanent?",
      ans:"Yes, it offers long-term relief from proptosis. Further surgery is rarely needed unless additional eye changes occur."
    },
    {
      ques:"Can the surgery worsen double vision?",
      ans:"Some patients may experience temporary double vision postoperatively, especially those with significant muscle involvement. Our surgical planning helps minimize this risk."
    },
    {
      ques:"Is the surgery covered by insurance?",
      ans:"If the condition is affecting vision or causing functional issues, some insurance providers may offer coverage. We’ll help you with documentation as needed."
    },
  ]

  const contact = [
    {
      heading:"Why Choose Sapiens Clinic in Malleshwaram?",
      para:"At Sapiens Clinic, we combine expertise in oculoplastic surgery with a compassionate approach to care. Located in the heart of Malleshwaram, we offer advanced diagnostic tools, individualized surgical planning, and post-operative support tailored to each patient’s needs. Our focus is not only on functional correction but also on restoring a natural, confident appearance."
    }
  ]
  return (
    <div>
      <div>
        <Divyaservicebanner servicename = 'Two-Wall Orbital Decompression Surgery'/>
      </div>

      <div className='lg:mx-20 xs:mt-25 md:mt-10 mx-5 mt-10'>
        {/* container 1 */}
        <div className='flex flex-col items-center lg:leading-7 leading-6 '>
          <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient'>Two-Wall Orbital Decompression Surgery at Sapiens Clinic, Malleshwaram</div>
          <div className='text-[12px] md:text-[16px] font-[500] font-para mt-5'>Two-wall orbital decompression surgery is a critical oculoplastic procedure used to treat prominent eye bulging (proptosis), most commonly caused by thyroid eye disease. At Sapiens Clinic in Malleshwaram, we offer precise, personalized care to help alleviate the discomfort and visual complications caused by this condition. Our surgical approach creates additional space within the orbit, allowing the protruding eye to settle back into a more natural and functional position.</div>
        </div>

        {/* container 2 */}

        <div className='flex flex-col-reverse lg:flex-row items-center gap-10 mt-10'>
          {/* content */}
          <div className='lg:w-[65%]'>
            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient'>What Is Two-Wall Decompression?</div>
            <div className='text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-5'>This surgical procedure involves removing both the medial (inner) and lateral (outer) walls of the orbital cavity. By doing so, pressure is relieved from the eye, and enough space is created to accommodate enlarged eye muscles and excess orbital fat. This helps reduce the bulging appearance of the eyes, improves eyelid closure, and reduces strain and dryness. Unlike more aggressive decompression approaches, the two-wall technique strikes a balance-offering effective results while minimizing postoperative complications.</div>
          </div>

          {/* img */}
          <div className='lg:w-[35%]'>
            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
          </div>
        </div>

        {/* container 3 */}

        <div className='flex flex-col lg:flex-row gap-10 mt-10 items-center'>

          {/* img */}
          <div className='lg:w-[35%]'>
            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
          </div>

          {/* content */}
          <div className='lg:w-[65%]'>
            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-orange-gradient'>Who Needs Two-Wall Decompression?</div>
            <div className='text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-5'>
              <div>You may benefit from two-wall decompression if you have :</div>
              <ul className='list-disc ml-5 mt-2'>
                <li>Mild to moderate proptosis due to thyroid eye disease.</li>
                <li>Difficulty closing your eyes fully, leading to dryness or corneal exposure.</li>
                <li>Eyelid retraction or changes in eye position affecting your appearance or vision.</li>
                <li>Persistent pressure or discomfort around the eyes despite medical management.</li>
              </ul>

              <div className='mt-5'>A detailed evaluation with our oculoplastic specialist will determine if two-wall decompression is the right treatment for your condition.</div>
            </div>
          </div>
        </div>

        {/* container 4 */}

        <div className='flex flex-col-reverse lg:flex-row gap-10 items-center mt-10'>
          {/* content */}
          <div className='lg:w-[65%]'>
            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient'>How Is the Surgery Performed?</div>
            <div className='text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-5'>
              <div>Two-wall decompression is performed under general anesthesia. The procedure takes around 2 to 3 hours and typically requires an overnight stay for monitoring. During surgery, small incisions are made to access the orbital walls. Bone segments are carefully removed to allow orbital tissues to shift into the newly created space. In some cases, a drain may be placed to reduce postoperative swelling.</div>
              <div className='mt-2'>Following surgery :</div>
              <ul className='list-disc ml-5 mt-2 '>
                <li>You may experience temporary swelling, bruising and mild discomfort.</li>
                <li>An eye dressing is typically removed the next day.</li>
                <li>Most patients resume light activities within a week.</li>
                <li>Vigorous activity, heavy lifting and contact sports should be avoided for about 2–3 weeks.</li>
              </ul>
            </div>
          </div>

          {/* img */}
          <div className="lg:w-[35%]">
            <img src={assets.eximg} alt="" className="lg:w-[84%]" />
          </div>
        </div>

        {/* container 5 */}

        <div className="flex flex-col-reverse lg:flex-row gap-10 mt-10 items-center">
          {/* img */}
          <div className="lg:w-[35%]">
            <img src={assets.eximg} alt="" className="lg:w-[84%]" />
          </div>

          {/* content */}
          <div className="lg:w-[65%]">
            <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Risks and Considerations</div>
            <div className="text-[12px] md:text-[16px] font-para font-[500] leading-7 mt-5">
              <div>Although the two-wall decompression technique is well-tolerated by most patients, potential risks include :</div>
              <ul className='list-disc ml-5 mt-2 '>
                <li>Temporary or persistent double vision.</li>
                <li>Numbness around the cheek, gums, or upper lip.</li>
                <li>Uneven eye positioning (asymmetry).</li>
                <li>Bruising and swelling.</li>
                <li>Rarely, bleeding or vision loss.</li>
              </ul>
              <div className="mt-5">Our team takes every precaution to minimize these risks and ensure a smooth recovery.</div>
            </div>
          </div>
        </div>

        {/* container 6 */}

        <div className="flex flex-col lg:flex-row gap-10 items-center mt-10">
          {/* content */}
          <div className='lg:w-[65%]'>
            <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic in Malleshwaram?</div>
            <div className="text-[12px] md:text-[16px] font-para font-[500] leading-7 mt-5">At Sapiens Clinic, we combine expertise in oculoplastic surgery with a compassionate approach to care. Located in the heart of Malleshwaram, we offer advanced diagnostic tools, individualized surgical planning, and post-operative support tailored to each patient’s needs. Our focus is not only on functional correction but also on restoring a natural, confident appearance.</div>
          </div>

          {/* img */}
          <div className="lg:w-[35%]">
            <img src={assets.eximg} alt="" className="lg:w-[84%]" />
          </div>
        </div>
      </div>

      <div>
        <ContactPage contacts={contact[0]}/>
      </div>

      <div>
        <Faqs faqs={faqs}/>
      </div>

    </div>
  )
}

export default WallDecompression