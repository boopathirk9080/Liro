import React, { useState } from 'react';
import '../../App.css'

const Multimedia = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: 'Photography ',
            image: '/multimedia/Videography.png',
            description: "At Lira, we believe a single photograph captures fleeting moments, evoking powerful emotions. Showcasing life's beauty through the lens, inspiring viewers to appreciate visual storytelling in everyday experiences, fine art photography, commercial photography, and professional photography services."
        },
        {
            title: 'Videography ',
            image: '/multimedia/photography.png',
            description: "At Liro, our expertise in videography and video production combines visualization and creativity to produce stunning films. Through skilled filming and advanced video editing techniques, we craft compelling narratives that engage audiences and bring your vision to life with every project."
        },
        {
            title: 'VFX ',
            image: '/multimedia/photography.png',
            description: "At Liro. VFX is integral to our creative process, allowing us to transform concepts into stunning visuals. Our expertise in 3D modeling and animation elevates every project captivating audiences and enhancing storytelling with immersive, breathtaking experiences that leave a lasting impact."
        }
         /*{
             title: 'Backend Web Development',
             image: './webDev/webDesign.png',
             description: "At Liro, we specialize in backend development, delivering robust, efficient solutions that enhance your online presence. Our team prioritizes security, scalability, and performance, ensuring seamless integration tailored to your unique needs for online success."
         }, */
        
    ];

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex >= cards.length ? 0 : newIndex;
        });
    };

    const displayedCards = [...cards, ...cards].slice(currentIndex, currentIndex + 3);

    return (
        <section class="py-10 bg-white sm:py-16 lg:py-24">




            <div class="pt-4 overflow-hidden bg-white md:pt-0 sm:pt-8 2xl:pt-8  ">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class=" grid grid-cols-1  items-center md:grid-cols-2">
                        <div className=' ml-10  '>
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"><span class="highlights">MULTIMEDIA CREATIONS</span></h2>
                            <br></br>
                            <p className="max-w-lg mt-4 text-xl text-justify  md:text-[24px] lg:text-[20px] leading-relaxed text-gray-600 md:mt-1rem">

                                We bring imagination to life with stunning multimedia content creation, specializing in visual effects, 3D animation, and editing. Using tools like Maya, Blender, and DaVinci Resolve, we craft immersive experiences. Our team ensures every detail elevates your brand, delivering captivating content across platforms.
                            </p>
                        </div>

                        <div className="relative">
                            <img className="ml-4" style={{ width: 450 }} src="./digitalMarketing/animated1.gif" alt="Digital Marketing Animation" />

                        </div>
                    </div>
                </div>
            </div >



            {/* <div className="grid grid-cols-1 gap-10 mx-auto mt-12 lg:max-w-5xl lg:grid-cols-2 lg:gap-16 justify-center">
                <div className="md:max-w-[700px] mx-auto">
                    <div className="relative">
                        <div className="relative flex justify-center items-center">
                            <div className="block items-center justify-center">
                                <img
                                    className="object-cover w-3/4 h-3/4 md:w-2/3 md:h-2/3 lg:w-full lg:h-auto"
                                    src="/multimedia/photography.png"
                                    alt="Multimedia Animation"
                                />
                            </div>
                        </div>
                    </div>
                </div>

           
                <div className="md:max-w-[700px] mx-auto">
                    <div className="relative">

                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"><span class="highlights">DIGITAL MARKETING</span></h2>

                        <div className="px-5 sm:px-0">
                            <p className="mt-4 text-justify text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-full sm:max-w-lg lg:max-w-2xl">
                                Bringing imagination to life with unparalleled multimedia content creation, we specialize in visual effects, 3D animation, and studio editing. Leveraging industry-leading tools such as Autodesk Maya, Houdini, Blender, Avid Media Composer, DaVinci Resolve, and Pro Tools, we craft visually stunning and immersive experiences. Our dedicated team is committed to producing engaging content that not only captivates but also resonates with your audience across all platforms. From concept to final cut, we ensure every detail is meticulously crafted to elevate your brand and tell your story in a compelling way. Partner with us to transform your vision into unforgettable multimedia experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">

                    <div className="relative w-full h-full">
                        <img
                            className="object-cover w-full h-full"
                            style={{ height: '90%', width: '100%', objectFit: 'cover' }}
                            src="/multimedia/photography.png"
                            alt="Photography"
                        />
                    </div>

                    <div class="flex flex-col items-start xl:px-16">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"><span class="highlights">MULTIMEDIA CREATIONS</span></h2>
                        <br></br>
                        <p class="mt-4 text-base leading-relaxed text-gray-600 text-justify" style={{ maxWidth: '450px' }}>
                            Bringing imagination to life with unparalleled multimedia content creation, we specialize in visual effects, 3D animation, and studio editing. Leveraging industry-leading tools such as Autodesk Maya, Houdini, Blender, Avid Media Composer, DaVinci Resolve, and Pro Tools, we craft visually stunning and immersive experiences. Our dedicated team is committed to producing engaging content that not only captivates but also resonates with your audience across all platforms. From concept to final cut, we ensure every detail is meticulously crafted to elevate your brand and tell your story in a compelling way. Partner with us to transform your vision into unforgettable multimedia experiences.</p>
                    </div>
                </div>
            </div> */}


            <br></br>
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto  sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Expertise</h2>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:space-x-3">
                            <button onClick={handlePrevClick} type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button onClick={handleNextClick} type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        {displayedCards.map((card, index) => (
                            <div key={index} className="overflow-hidden bg-gray-50 rounded shadow">
                                <div className="p-9">
                                    <div className="relative">
                                        <div className="relative flex justify-center items-center">
                                            <div className="block block flex items-center justify-center">
                                                <img className="object-cover"
                                                    style={{ height: '70%', width: '50%' }}
                                                    src={card.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-5 text-2xl font-semibold">
                                        <div className="text-center text-black"> {card.title} </div>
                                    </p>
                                    <p className="mt-4 text-justify text-base sm:text-2xl lg:text-base text-gray-500">{card.description}</p>

                                </div>
                            </div>
                        ))}
                    </div>

                   
                </div>
            </section>


        </section>
    );

}

export default Multimedia;
