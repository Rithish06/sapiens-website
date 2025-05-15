import React from 'react'

const Timeline = (props) => {
  return (
    <div className="h-[100%] bg-gradient-to-b from-[#B22726] to-[#4C1110] text-white py-10 px-4 ml-5 rounded-l-3xl max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>

      <div className="relative pl-10 flex flex-col justify-center">
        {/* Vertical line */}
        <div className='flex flex-col justify-center'>
            
            <div className="absolute left-4 top-0 h-[100%] w-1 bg-white rounded flex flex-col justify-between items-center">
                <div className='w-[8px] h-[8px] rotate-45 bg-white'></div>
                <div className='w-[8px] h-[8px] rotate-45 bg-white'></div>
            </div>
        </div>

        {props.educationData.map((item, index) => (
          <div key={index} className="relative my-3">
            {/* Dot */}
            <div className="absolute -left-7.5 top-1 w-4 h-4 bg-yellow-400 border-2 border-white rounded-full z-10"></div>

            {/* Content */}
            <div className="pl-5">
              <h3 className="font-[700] text-[12px] lg:text-[18px] font-para">{item.title}</h3>
              {item.subtitle && <p className="text-sm font-[400] text-[10px] lg:text-[16px] text-white/90 mt-2">{item.subtitle}</p>}
            </div>
          </div>
        ))}

        
      </div>
    </div>
  )
}

export default Timeline
