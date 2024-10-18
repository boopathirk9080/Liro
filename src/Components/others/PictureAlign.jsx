// import React from "react";
// import image1 from '../../assets/basepics/neon-09 (1).jpeg';
// import image2 from '../../assets/basepics/twilight-02.jpeg';

// const CaseStudies = ({ isSmallScreen }) => {
//   return (
//     <div
//       className={`${isSmallScreen && "mt-96"} mx-10 mb-16 text-white md:mx-56`}
//     >
//       <div>
//         <h2
//           className={`${
//             isSmallScreen && "mb-28 pt-28 text-center"
//           } mb-28  text-4xl font-bold md:text-6xl`}
//         >
//           Case Studies <span className="text-3xl text-blue md:text-4xl">+</span>
//         </h2>
//       </div>
//       <div className="gap-6 space-y-4 md:flex md:space-y-0">
//         <div className="card h-full cursor-pointer rounded-xl md:w-2/4 ">
//           <div className="cardTitle animated animatedFadeInUp fadeInUp absolute ml-4">
//             <h1 className="z-50 mt-64 text-2xl font-bold">
//               <span className="text-blue">| </span>
//               Soovu
//             </h1>
//           </div>
//           <img
//             src={image1}
//             alt=""
//             className="relative -z-10 block rounded-xl "
//             style={{ height: 330, width: "100%" }}
//           />
//         </div>

//         <div className="card h-full cursor-pointer rounded-xl md:w-2/4">
//           <div className="cardTitle animated animatedFadeInUp fadeInUp absolute ml-4">
//             <h1 className="mt-64 text-2xl font-bold">
//               <span className="text-blue">| </span>
//               FirstbankQuest
//             </h1>
//           </div>
//           <img
//             src={image2}
//             alt=""
//             className="relative -z-10 block rounded-xl"
//             style={{ height: 330, width: "100%" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudies;













// import React from "react";
// import { useMediaQuery } from '@mui/material'; // Import from Material-UI
// import image1 from '../../assets/basepics/neon-09 (1).jpeg';
// import image2 from '../../assets/basepics/twilight-02.jpeg';

// const CaseStudies = () => {
//   const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Check screen size

//   return (
//     <div
//       className={`${isSmallScreen && "mt-96"} mx-10 mb-16 text-white md:mx-56`}
//     >
//       <div>
//         <h2
//           className={`${
//             isSmallScreen && "mb-28 pt-28 text-center"
//           } mb-28 text-4xl font-bold md:text-6xl`}
//         >
//           Case Studies <span className="text-3xl text-blue md:text-4xl">+</span>
//         </h2>
//       </div>
//       <div className="gap-6 space-y-4 md:flex md:space-y-0">
//         <div className="card h-full cursor-pointer rounded-xl md:w-2/4">
//           <div className="cardTitle animated animatedFadeInUp fadeInUp absolute ml-4">
//             <h1 className="z-50 mt-64 text-2xl font-bold">
//               <span className="text-blue">| </span>
//               Soovu
//             </h1>
//           </div>
//           <img
//             src={image1}
//             alt="Soovu Case Study"
//             className="relative -z-10 block rounded-xl"
//             style={{ height: 330, width: "100%" }}
//           />
//         </div>

//         <div className="card h-full cursor-pointer rounded-xl md:w-2/4">
//           <div className="cardTitle animated animatedFadeInUp fadeInUp absolute ml-4">
//             <h1 className="mt-64 text-2xl font-bold">
//               <span className="text-blue">| </span>
//               FirstbankQuest
//             </h1>
//           </div>
//           <img
//             src={image2}
//             alt="FirstbankQuest Case Study"
//             className="relative -z-10 block rounded-xl"
//             style={{ height: 330, width: "100%" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudies;













// import React from "react";
// import { useMediaQuery } from '@mui/material'; // Import from Material-UI
// import image1 from '../../assets/basepics/neon-09 (1).jpeg';
// import image2 from '../../assets/basepics/twilight-02.jpeg';

// const CaseStudies = () => {
//   const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Check screen size

//   return (
//     <div
//       className={`${isSmallScreen && "mt-96"} mx-10 mb-16 text-white md:mx-56`}
//     >
//       <div>
//         <h2
//           className={`${
//             isSmallScreen && "mb-28 pt-28 text-center"
//           } mb-28 text-4xl font-bold md:text-6xl`}
//         >
//           Case Studies <span className="text-3xl text-blue md:text-4xl">+</span>
//         </h2>
//       </div>
//       <div className="gap-6 space-y-4 md:flex md:space-y-0">

//         {/* Card 1 - Hover to Display Image */}
//         <div className="group relative h-full cursor-pointer rounded-xl md:w-2/4">
//           {/* Image */}
//           <img
//             src={image1}
//             alt="Soovu Case Study"
//             className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           />
//           {/* Text */}
//           <div className="relative z-10 p-6 bg-black bg-opacity-60 rounded-xl group-hover:bg-opacity-0 transition-colors duration-300">
//             <h1 className="text-2xl font-bold text-white">
//               <span className="text-blue">| </span>
//               Soovu
//             </h1>
//           </div>
//         </div>

//         {/* Card 2 - Hover to Display Image */}
//         <div className="group relative h-full cursor-pointer rounded-xl md:w-2/4">
//           {/* Image */}
//           <img
//             src={image2}
//             alt="FirstbankQuest Case Study"
//             className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           />
//           {/* Text */}
//           <div className="relative z-10 p-6 bg-black bg-opacity-60 rounded-xl group-hover:bg-opacity-0 transition-colors duration-300">
//             <h1 className="text-2xl font-bold text-white">
//               <span className="text-blue">| </span>
//               FirstbankQuest
//             </h1>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CaseStudies;
import React from "react";
import { useMediaQuery } from '@mui/material'; // Import from Material-UI
import image1 from '../../assets/basepics/neon-09 (1).jpeg';
import image2 from '../../assets/basepics/twilight-02.jpeg';

const CaseStudies = () => {
    const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Check screen size

    return (
        <div className={`${isSmallScreen && "mt-96"} mx-10 mb-16 text-white md:mx-30`}>
            <div>
                <h2
                    className={`${isSmallScreen && "mb-28 pt-28 text-center"} mb-28 text-4xl font-bold md:text-6xl`}
                >
                    Case Studies <span className="text-3xl text-blue md:text-4xl">+</span>
                </h2>
            </div>

            <div className="gap-6 space-y-4 md:flex md:space-y-0 ">
                {/* Card 1 */}
                <div className="card h-full cursor-pointer rounded-xl md:w-2/4 relative overflow-hidden">
                    <img
                        src={image1}
                        alt="Soovu Case Study"
                        className="lg:w-full sm:w-[390px] lg:h-[330px] sm:h-[330px] object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    {/* lg:mt-[220px] sm:mt-[220px]  */}
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <h1 className="text-white text-2xl font-bold">
                            <span className="text-blue ">| </span>
                            FirstbankQuest
                        </h1>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card h-full cursor-pointer rounded-xl md:w-2/4 relative overflow-hidden">
                    <img
                        src={image2}
                        alt="FirstbankQuest Case Study"
                        className="lg:w-full sm:w-[390px] lg:h-[330px] sm:h-[330px] object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    {/* lg:mt-[220px] sm:mt-[220px] */}
                    <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <h1 className="text-white text-2xl font-bold">
                            <span className="text-blue mb-[20px]">| </span>
                            FirstbankQuest
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
