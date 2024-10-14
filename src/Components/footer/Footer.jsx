import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


const Footer = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth >= 640); // Check if screen width is 640px or larger
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize); // Add resize event listener

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up event listener on unmount
        };
    }, []);

    return (

        <section className="py-10 bg-blue-900 sm:pt-16 lg:pt-0 sectionStyle" >
            <div className="px-4 mx-auto sm:px-6 lg:px-8  max-w-7xl">
                <section className="py-10 sm:flex lg: sm:justify-center   bg-blue-900 sm:pt-16 lg:pt-24 sectionStyle">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid grid-cols-1 col-gap-11rem gap-y-12 md:grid-cols-2 lg:grid-cols-4 sm:gap-x-36 lg:gap-x-40">
                            <div>
                                <p className="lg:text-lg sm:text-[42px] font-semibold text-white">Company</p>




                                <ul className="mt-8 space-y-4">
                                    <li>
                                        <Link to="/" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/About" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/services" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Career</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="lg:text-lg sm:text-[42px] font-semibold text-white">Services </p>


                                <ul className="mt-8 space-y-4">
                                    <li>
                                        <Link to="/digitalmarketing" className="lg:text-base  sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Digital Marketing</Link>
                                    </li>
                                    <li>
                                        <Link to="/webdevelopment" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Web Development</Link>
                                    </li>
                                    <li>
                                        <Link to="/graphicaldesign" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Graphical Designing</Link>
                                    </li>
                                    <li>
                                        <Link to="/multimedia" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Multimedia Creations</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="lg:text-lg sm:text-[42px] font-semibold text-white">Resources</p>
                                <ul className="mt-8 space-y-4">
                                    <li>
                                        <Link to="/About" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Projects</Link>
                                    </li>
                                    <li>
                                        <Link to="/About" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to="/About" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Our Team</Link>
                                    </li>
                                    <li>
                                        <Link to="/About" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Tools</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="lg:text-lg sm:text-[42px] font-semibold text-white">Extra Links</p>
                                <ul className="mt-8 space-y-4">
                                    <li>
                                        <Link to="/contact" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Customer Support</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Contact Us</Link>
                                    </li>
                                    <li>
                                        <a href="#" title="" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#" title="" className="lg:text-base sm:text-4xl text-zinc-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <hr className="mt-16 mb-10 border-gray-800" />

                <div className="flex flex-wrap items-center md:pl-5 md:pr-5 justify-between">
                    <img className="h-10 w-auto auto md:order-1" src="/logo/logo_white.png" alt="Liro Studios" />

                    <ul className="flex items-center space-x-3 md:order-3">


                        <li>
                            <a href="https://www.instagram.com/liro_studios?igsh=MWpndnpneTIyMjVmZw==" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-blue-900 rounded-full w-12 h-12 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600">
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                    <path
                                        d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                    ></path>
                                </svg>
                            </a>
                        </li>



                        <li>
                            <a href="https://www.linkedin.com/in/liro-studios?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-blue-900 rounded-full w-12 h-12 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600">
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    ></path>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="https://api.whatsapp.com/send?phone=919597660566&text=Hello%2C%20I%20want%20more%20info%20about%20the%20product " title="" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-blue-900 rounded-full w-12 h-12 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600">

                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                                    ></path>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="https://wa.me/91877879647?text=what%20you%20want" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-blue-900 rounded-full w-12 h-12 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600">



                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>

                    <p className="w-full mt-8 text-base text-center text-gray-100 md:mt-0 md:w-auto md:order-2">© Copyright 2024, All Rights Reserved by Liro Studios</p>
                </div>

            </div>
        </section >

    )
}

export default Footer
















