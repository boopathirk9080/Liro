import React from 'react'
import pic2 from "../../assets/AboutPage/coma2.png"; 1
import Ourmissiontext from '../AboutHeadingText/Ourmissiontext'

const Ourmissionnn = () => {
  return (
    <div>

      <div className="lg:w-full lg:h-full  relative">

        <div className="relative sm:mt-[659px]  lg:mt-[9px]  lg:h-[723px] sm:h-[500px] bg-white top-0 left-0" />
        {/* <img 
        className="absolute lg:w-[598px] sm:w-[650px] sm:h-[577px] lg:h-[485px] lg:top-[120px] sm:top-[475px] lg:left-[75px] sm:left-[200px] transform  origin-top-left rounded-[20px]" 
        src="https://via.placeholder.com/598x485" 
      /> */}
        <img
          className="lg:absolute lg:w-[598px] sm:w-[650px] sm:h-[577px] lg:h-[485px] lg:top-[120px] sm:top-[475px] lg:left-[125px] sm:left-[200px] transform origin-top-left rounded-[20px] sm:mx-auto"
          src="https://via.placeholder.com/598x485"
        />

        <div className="absolute w-[531px] h-[390.13px] lg:top-[168px] sm:top-[30px] sm:left-[191px] lg:left-[838px]  sm:mx-auto"> <Ourmissiontext />
          <div className="absolute w-[531px] top-[108px] left-0 text-[#090914] text-[32px] font-[Poppins] font-medium leading-[42px] break-words">
            "We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it."
          </div>
          <div className="absolute w-[67px] h-[67px] top-0 left-0">
            {/* <div className="absolute w-[67px] h-[67px] bg-[#2563EB] rounded-full top-0 left-0" /> */}
            {/* <div className="absolute w-[29px] h-[24px] bg-white top-[22px] left-[19px]" /> */}
            <img src={pic2} alt="" />
          </div>
          <div className="absolute w-[394px] h-[46.13px] top-[344px] left-0">
            <div className="absolute top-[11px] left-0 text-[#090914] text-[16px] font-[Poppins] font-semibold leading-[28px] break-words">
              Jenny Wilson
            </div>
            <div className="absolute top-[12px] left-[122px] text-[#52525B] text-[16px] font-[Poppins] font-normal leading-[26px] break-words">
              Co-Founder of
            </div>
            <div className="relative lg:w-[233px] sm:w-[253px]  top-0 left-[251px]">
              {/* <div className="absolute w-[84.36px] h-[16.25px] bg-[#1E293B] top-[5.8px] left-[37.42px]" />
              <div className="absolute w-[29.72px] h-[29.72px] bg-[#7F57F1] top-0 left-0" /> */}
              <img src="/logo/logo_black.png" alt="" />

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Ourmissionnn;
