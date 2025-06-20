import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'
import ContactPage from '../services/ContactPage/ContactPage';

const ShoulderArthroscopy = () => {

    const faqs = [
        {
            ques: "Is shoulder arthroscopy painful?",
            ans: "The procedure itself is performed under anesthesia, so you won't feel pain during surgery. Postoperative discomfort is typically mild and managed with medications."
        },
        {
            ques: "How soon can I return to work after shoulder arthroscopy?",
            ans: "Recovery time varies, but many patients return to light-duty work within a week. Jobs involving heavy lifting may require a longer recovery period."
        },
        {
            ques: "Are there risks associated with shoulder arthroscopy?",
            ans: "As with any surgical procedure, risks include infection, nerve injury, or stiffness. However, complications are relatively rare."
        },
        {
            ques: "Will I need physical therapy after the procedure?",
            ans: "Yes, physical therapy is crucial to restore full function and strength to the shoulder joint."
        },
        {
            ques: "How effective is shoulder arthroscopy?",
            ans: "Most patients experience significant relief from symptoms and improved joint function following the procedure."
        }
    ];


    return (
        <div>
            <Servicesbanner serviceName = "Shoulder Arthroscopy: Diagnosis and" />

            <div className='px-8 lg:px-20 mt-8'>
                {/* <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Shoulder Arthroscopy</div> */}
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Shoulder arthroscopy is a minimally invasive surgical procedure that allows orthopedic surgeons to diagnose and treat various shoulder joint conditions using small incisions and specialized instruments. At Sapiens Clinic in Malleshwaram, we offer advanced shoulder arthroscopy techniques to address a range of shoulder disorders, aiming to restore function and alleviate pain with reduced recovery times.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Understanding Shoulder Arthroscopy</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Shoulder arthroscopy involves inserting a small camera, called an arthroscope, into the shoulder joint through a tiny incision. This camera projects images onto a monitor, enabling the surgeon to visualize the joint's interior structures in detail. Additional small incisions are made to insert specialized instruments for performing necessary surgical repairs. This technique minimizes tissue disruption compared to traditional open surgery, leading to less postoperative pain and quicker rehabilitation.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Indications for Shoulder Arthroscopy</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Rotator Cuff Tears:</b> Repairing torn tendons to restore shoulder strength and function.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Shoulder Impingement Syndrome:</b> Removing bone spurs or inflamed tissue causing pain during arm movement.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Labral Tears:</b> Repairing the cartilage rim (labrum) that stabilizes the shoulder joint.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Frozen Shoulder (Adhesive Capsulitis):</b> Releasing tight joint capsule to improve range of motion.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Shoulder Instability:</b> Tightening or repairing ligaments to prevent recurrent dislocations.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Biceps Tendon Injuries:</b> Addressing inflammation or tears of the biceps tendon.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Arthritis:</b> Removing loose cartilage or inflamed tissue to alleviate pain.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Causes and Risk Factors</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Repetitive Overhead Activities:</b> Common in athletes and certain occupations.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Trauma:</b> Injuries leading to fractures or soft tissue damage.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Degenerative Diseases:</b> Age-related wear and tear causing osteoarthritis.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Inflammatory Conditions:</b> Autoimmune diseases like rheumatoid arthritis.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Symptoms Addressed by Shoulder Arthroscopy</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Persistent Shoulder Pain:</b> Unrelieved by medication or physical therapy.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Limited Range of Motion:</b> Difficulty in lifting or rotating the arm.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Joint Locking or Catching:</b> Sensation of the shoulder getting stuck during movement.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Swelling and Inflammation:</b> Chronic swelling not responsive to conservative treatments.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Diagnostic Process</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Medical History and Physical Examination:</b> Assessing symptoms and joint function.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Imaging Studies:</b> X-rays, MRI, or CT scans to visualize internal joint structures and identify abnormalities.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Diagnostic Arthroscopy:</b> In some cases, the procedure itself serves as a diagnostic tool to directly observe joint pathology.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Treatment Procedure</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Incision:</b> Small incisions (portals) are made around the shoulder.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Arthroscope Insertion:</b> The camera is inserted to visualize the joint interior.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Surgical Repair:</b> Specialized instruments are used to address identified issues, such as removing loose bodies or repairing damaged tissues.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Closure:</b> Incisions are closed with sutures or steri-strips, and a sterile dressing is applied.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            The procedure usually lasts between 30 minutes to an hour, depending on the complexity.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Recovery and Rehabilitation</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Pain Management:</b> Use of prescribed medications to control discomfort.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Therapy:</b> Initiated shortly after surgery to restore mobility and strength.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Activity Modification:</b> Gradual return to daily activities, avoiding strenuous tasks until cleared by the surgeon.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Follow-Up Visits:</b> Regular appointments to monitor healing and progress.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Most patients experience significant improvement within a few weeks, with full recovery typically achieved in a few months.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Conclusion</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Shoulder arthroscopy offers a less invasive option for diagnosing and treating various shoulder joint conditions, leading to reduced pain and faster recovery. At Sapiens Clinic, Malleshwaram, Dr. Darshan Kumar A. Jain and our specialized team are committed to providing personalized care using advanced arthroscopic techniques. If you're experiencing persistent shoulder issues, schedule a consultation to explore whether shoulder arthroscopy is suitable for you.
                        </div>
                    </div>
                </div>
            </div>

            <ContactPage />

            <div className="mt-15">
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default ShoulderArthroscopy
