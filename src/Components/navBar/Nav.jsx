// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

// const Nav = () => {
//   // State to handle mobile menu toggle
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // State to handle the services dropdown
//   const [isServicesOpen, setServicesOpen] = useState(false);

//   return (
//     <header>
//       {/* Main navigation bar */}
//       <div className="relative" style={{ background: '#734f96' }}>
//         <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
//           <nav className="flex items-center justify-between h-16 lg:h-20">
//             <div className="flex-shrink-0">
//               <a href="#" title="" className="flex">
//                 <img className="w-auto h-8 lg:h-10" src="/logo/logo_white.png" alt="Logo" />
//               </a>
//             </div>

//             {/* Mobile menu button */}
//             <button
//               type="button"
//               className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
//               onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}  // Toggle the mobile menu
//             >
//               <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>

//             {/* Desktop links */}
//             <div className="hidden lg:flex lg:items-center lg:space-x-10">

//               <Link to="/" className="text-base font-medium text-white">Home</Link>

//               {/* <Link to="/services" className="text-base font-medium text-white">Services</Link> */}

//               {/* Services dropdown */}
//               <div className="relative">
//                 <button
//                   className="text-base font-medium text-white"
//                   onClick={() => setServicesOpen(!isServicesOpen)}
//                 >
//                   Services
//                 </button>

//                 {/* Dropdown for Services */}
//                 {isServicesOpen && (
//                   <div className="absolute left-0 mt-7 w-48 bg-white shadow-lg rounded-md z-10">
//                     <Link to="/digitalmarketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Digital Marketing</Link>
//                     <Link to="/graphicaldesign" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Graphical Design</Link>
//                     <Link to="/webdevelopment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Web Development</Link>
//                     <Link to="/multimedia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Multimedia Creations</Link>
//                   </div>
//                 )}
//               </div>


//               <Link to="/about" className="text-base font-medium text-white">About</Link>
//               <Link to="/blog" className="text-base font-medium text-white">Blog</Link>
//               <Link to="/team" className="text-base font-medium text-white">Our Team</Link>
//               <Link to="/" className="text-base font-medium text-white">Career</Link>
//               <Link to="/testimonials" className="text-base font-medium text-white">Testimonials</Link>

//             </div>

//             <Link to="/contact"
//               className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce hidden lg:inline-flex"
//               role="button">
//               Contact Us
//             </Link>

//           </nav>
//         </div>
//       </div>

//       {/* Mobile navigation */}
//       {isMobileMenuOpen && (
//         <nav className="fixed inset-0 z-50 flex flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 bg-[#0575E6] sm:px-6 lg:hidden transition-all duration-300 ease-in-out">
//           {/* Close button */}
//           <button
//             type="button"
//             className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
//             onClick={() => setMobileMenuOpen(false)}  // Close the mobile menu
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//           {/* Mobile menu links */}
//           <div className="flex flex-col flex-grow h-full w-80%" >

//             <nav className="flex flex-col flex-1 mt-10 space-y-2">
//               <div className="flex-shrink-0">
//                 <a href="#" title="" className="flex">
//                   <img className="w-auto h-8 lg:h-10" src="/logo/logo_white.png" alt="Logo" />
//                 </a>
//               </div>
//               <Link to="/" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">Home</Link>
//               <Link to="/services" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">Services</Link>
//               <Link to="/about" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">About</Link>
//               <Link to="/testimonials" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">Testimonials</Link>
//               <div className="flex flex-col items-start">
//                 {/* Updated Mobile 'Contact Us' button */}
//                 <a
//                   href="#"
//                   title=""
//                   className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce w-auto mt-auto"
//                   role="button"
//                 >
//                   Contact Us
//                 </a>
//               </div>
//               <br />
//               <br /></nav>


//           </div>
//         </nav>
//       )}
//     </header>
//   )
// }

// export default Nav;























import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../navBar/Nav.css'



import { IoHome } from "react-icons/io5";
import { RiServiceFill } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { PiChatTeardropDotsFill } from "react-icons/pi";

import { FaWindowClose } from "react-icons/fa";



const Nav = () => {
  // State to handle mobile menu toggle
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State to handle the services dropdown
  const [isServicesOpen, setServicesOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Close mobile menu when any link is clicked
    setServicesOpen(false);   // Close services dropdown when any link is clicked
  };


  return (
    <header>
      {/* Main navigation bar */}
      <div className="relative"
        // style={{ background: '#734f96' }}
        style={{ background: '#0d233afc' }}
      >
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
          <nav className=" flex  items-center justify-between lg:h-[80px] sm:h-[136px]" >
            <div className="flex-shrink-0">
              <a href="/" title="HOME" className="flex">
                <img className="w-auto h-20 lg:h-10" src="/logo/logo_white.png" alt="Logo" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}  // Toggle the mobile menu
            >
              <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <Link to="/" className="text-base font-medium text-white">Home</Link>
              <div className="relative">
                <button
                  className="text-base font-medium text-white"
                  onClick={() => setServicesOpen(!isServicesOpen)}
                >
                  Services
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-7 w-48 bg-white shadow-lg rounded-md z-10">
                    <Link to="/digitalmarketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" onClick={handleLinkClick}>Digital Marketing</Link>
                    <Link to="/graphicaldesign" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" onClick={handleLinkClick}>Graphical Design</Link>
                    <Link to="/webdevelopment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" onClick={handleLinkClick}>Web Development</Link>
                    <Link to="/multimedia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" onClick={handleLinkClick}>Multimedia Creations</Link>
                  </div>
                )}
              </div>
              <Link to="/about" className="text-base font-medium text-white">About</Link>
              <Link to="/blog" className="text-base font-medium text-white">Blog</Link>
              <Link to="/team" className="text-base font-medium text-white">Our Team</Link>
              <Link to="/" className="text-base font-medium text-white">Career</Link>
              <Link to="/testimonials" className="text-base font-medium text-white">Testimonials</Link>
            </div>

            <Link to="/contact"
              className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce hidden lg:inline-flex"
              role="button">
              Contact Us
            </Link>
          </nav>
        </div>
      </div >


      {/* Mobile navigation */}
      {
        isMobileMenuOpen && (
          <nav className="fixed inset-0 z-50 flex flex-col justify-between w-[500px] min-h-screen px-4 py-10 bg-[#0d233afc] sm:px-6 lg:hidden transition-all duration-300 ease-in-out">
            {/* Close button */}
            <button
              type="button"
              className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)} // Close the mobile menu
            >
              <svg xmlns="http://www.w3.org/2000/svg" className=" mt-10 w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                < FaWindowClose />
              </svg>


            </button>

            <div className="flex flex-col flex-grow h-full">
              <nav className="flex flex-col flex-1 mt-10 space-y-4">
                <hr />
                <br />
                <div className="flex-shrink-0 justify-center ml-10">
                  <a href="/" title="" className="flex justify-normal mr-[29px]">
                    <img className="h-20" src="/logo/Untitled-3.png" alt="Logo" />
                  </a>
                </div> <br />
                <hr />
                <br />
                <div className=''>
                  <Link to="/" className="flex w-full mr-[70px] py-2 text-center font-medium text-white transition-all duration-200 focus:text-opacity-70" style={{ fontSize: '40px' }}>
                    <div className='flex justify-center  mt-2' >< IoHome />
                    </div  >
                    <div className='flex justify-center font-semibold ml-3 ' onClick={handleLinkClick}>Home
                    </div>

                  </Link>
                  <br />
                  <Link to="/services" className="flex w-full mr-[70px] py-2 text-center font-medium text-white transition-all duration-200 focus:text-opacity-70" style={{ fontSize: '40px' }}>
                    <div className='flex justify-center  mt-2' ><RiServiceFill />
                    </div  >
                    <div className='flex justify-center font-semibold ml-3 ' onClick={handleLinkClick} >Service
                    </div>
                  </Link>

                  <br />
                  <div className="flex flex-col">

                    <div className="flex justify-center flex-col pl-4 ml-12">
                      <Link to="/digitalmarketing" className="py-2 text-sm text-zinc-300 font-medium transition-all duration-200" onClick={handleLinkClick} style={{ fontSize: '32px' }}> <b>⦿</b>  Digital Marketing</Link>
                      <br /><br />
                      <Link to="/graphicaldesign" className="py-2 text-sm text-zinc-300 font-medium transition-all duration-200" onClick={handleLinkClick} style={{ fontSize: '32px' }}><b>⦿</b> Graphical Design</Link>
                      <br /><br />
                      <Link to="/webdevelopment" className="py-2 text-sm text-zinc-300 font-medium transition-all duration-200" onClick={handleLinkClick} style={{ fontSize: '32px' }}> <b>⦿</b> Web Development</Link>
                      <br /><br />
                      <Link to="/multimedia" className="py-2 text-sm text-zinc-300 font-medium transition-all duration-200" onClick={handleLinkClick} style={{ fontSize: '32px' }}> <b>⦿</b> Multimedia Creations</Link>
                    </div><br />



                    <br />
                  </div>
                  <Link to="/about" className="flex w-full py-2 text-center font-semibold text-white transition-all duration-200 focus:text-opacity-70" style={{ fontSize: '40px' }}>

                    <div className='flex justify-center mt-3' ><FaHandshakeSimple />

                    </div  > <div className='flex justify-center font-semibold ml-2 ' onClick={handleLinkClick}> About </div>


                  </Link>
                  <br />
                  <Link to="/testimonials" className="flex w-full py-2 text-center font-medium text-white transition-all duration-200 focus:text-opacity-70" style={{ fontSize: '40px' }}>

                    <div className='flex justify-center mt-3' ><PiChatTeardropDotsFill />



                    </div  > <div className='flex justify-center font-semibold ml-2 ' onClick={handleLinkClick} > Testimonials  </div>


                  </Link>
                </div>
                <Link to="/contact">
                  <div className="flex  justify-items-center ">
                    <a
                      href="#"
                      title=""
                      className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce w-auto mt-4"
                      role="button"
                      style={{ fontSize: '30px' }}
                    >
                      Contact Us
                    </a>
                  </div>
                </Link>
              </nav>
            </div>
          </nav >
        )
      }
    </header >
  );
};

export default Nav;
