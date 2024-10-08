import React, { useState } from 'react';
import '../../App.css'

const Multimedia = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: 'Videography',
            image: '/multimedia/Videography.png',
            description: "At Liro Studios, we believe that every brand has a story to tell, and our videography services are designed to bring that story to life. Whether you’re looking to create a captivating commercial, an engaging social media video, or a compelling corporate film, our team of experienced videographers and editors are here to turn your vision into reality."
        },
        {
            title: 'Photography',
            image: '/multimedia/photography.png',
            description: "At Liro Studios, we understand the power of a single image. Our photography services are designed to capture the essence of your brand, product, or event with creativity and precision. Whether you need professional corporate photography, product photography, or engaging social media images, our team of skilled photographers is here to deliver stunning visuals that resonate with your audience."
        }
    ];
    const displayedCards = [...cards, ...cards].slice(currentIndex, currentIndex + 2);

    return (
        <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">




            <div class="pt-4 overflow-hidden bg-white md:pt-0 sm:pt-8 2xl:pt-8  ">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class=" grid grid-cols-1  items-center md:grid-cols-2">
                        <div className=' ml-10  '>
                            <h2 class="sm:w-700px text-3xl font-bold leading-tight text-black sm:text-4xl  lg:text-5xl"><span class="highlights">MULTIMEDIA MARKETING</span></h2>
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




























            <div className="grid grid-cols-1 gap-10 mx-auto mt-12 lg:max-w-5xl lg:grid-cols-2 lg:gap-16 justify-center">
                {/* Image Section */}
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

                {/* Text Section */}
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
            </div>


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
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto  sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Expertise</h2>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:space-x-3">
                        </div>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        {displayedCards.map((card, index) => (
                            <div key={index} className="overflow-hidden bg-white rounded shadow">
                                <div className="p-9">
                                    <div className="relative">
                                        <div className="relative flex justify-center items-center">
                                            <div className="block items-center justify-center">
                                                <img
                                                    className="flex object-cover mx-auto sm:ml-auto" // Center the image on mobile, use auto margin for larger screens
                                                    style={{ height: '70%', width: '50%' }}
                                                    src={card.image} alt=""
                                                />
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
