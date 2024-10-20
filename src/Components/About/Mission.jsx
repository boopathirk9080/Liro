import React from 'react'
import pic2 from "../../assets/AboutPage/coma2.png"; 1
import Ourmissiontext from '../AboutHeadingText/Ourmissiontext'
import pic5 from '../../assets/basepics/twilight-02.jpeg';

const Ourmissionnn = () => {
  return (
    <div>

      <div className="lg:w-full lg:h-full  relative">

        <div className="relative sm:mt-[35px]  lg:mt-[9px]  lg:h-[523px] l sm:h-[290px] bg-white top-0 left-0" />
        {/* <img 
        className="absolute lg:w-[598px] sm:w-[650px] sm:h-[477px] lg:h-[485px] lg:top-[120px] sm:top-[475px] lg:left-[75px] sm:left-[200px] transform  origin-top-left rounded-[20px]" 
        src="https://via.placeholder.com/598x485" 
      /> */}
        <img
          className="lg:absolute lg:w-[598px] sm:w-[700px] sm:h-[390px] lg:h-[330px] lg:top-[120px] sm:top-[475px] lg:left-[125px] sm:left-[200px] transform origin-top-left rounded-[20px] sm:mx-auto"
          src={pic5}
        />
{/* <Ourmissiontext /> */}


        <div className="absolute  lg:w-[531px] sm:w-[700px] h-[390.13px] lg:top-[157px] sm:top-[18px] sm:left-[141px] lg:left-[838px]  sm:mx-auto"> 
          {/* <div className="absolute w-[531px] top-[108px] left-0 text-[#090914] text-[32px] font-[Poppins] font-medium leading-[42px] break-words">
            At LIRO Studios, our mission is simple: to help businesses grow digitally and achieve their fullest potential. We believe that with the right blend of creativity, technology, and strategy, any vision can become a reality.
          </div> */}


<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        <span className="highlights">Our Mission</span>
                    </h2>
          <div className="px-5 sm:px-0">
          <p className="mt-4 lg:text-1xl md:text-2xl  sm:text-2xl leading-relaxed text-black text-justify"
                            style={{ maxWidth: '100%', marginTop:'45px', letterSpacing: "0px" }}>
                                        At LIRO Studios, our mission is simple: to help businesses grow digitally and achieve their fullest potential. We believe that with the right blend of creativity, technology, and strategy, any vision can become a reality.

                            </p>
                    </div>
          {/* <div className="absolute w-[67px] h-[67px] top-0 left-0"> */}
          {/* <div className="absolute w-[67px] h-[67px] bg-[#2563EB] rounded-full top-0 left-0" /> */}
          {/* <div className="absolute w-[29px] h-[24px] bg-white top-[22px] left-[19px]" /> */}
          {/* <img src={pic2} alt="" />
          </div> */}
          {/* <div className="absolute w-[394px] h-[46.13px] top-[344px] left-0">
            <div className="absolute top-[11px] left-0 text-[#090914] text-[16px] font-[Poppins] font-semibold leading-[28px] break-words">
              Jenny Wilson
            </div>
            <div className="absolute top-[12px] left-[122px] text-[#52525B] text-[16px] font-[Poppins] font-normal leading-[26px] break-words">
           Founder of
            </div>
            <div className="relative lg:w-[233px] sm:w-[253px]  top-0 left-[251px]">
              {/* <div className="absolute w-[84.36px] h-[16.25px] bg-[#1E293B] top-[5.8px] left-[37.42px]" />
              <div className="absolute w-[29.72px] h-[29.72px] bg-[#7F57F1] top-0 left-0" /> */}
          {/* <img src="/logo/logo_black.png" alt="" /> */}

          {/* </div>
          </div>  */}
        </div>
      </div>
    </div>

  )
}

export default Ourmissionnn;
