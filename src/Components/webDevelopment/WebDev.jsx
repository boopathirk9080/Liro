import React, { useState } from 'react';
import '../../App.css'

const WebDev = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: 'Ecommerce Development',
            image: './webDev/Ecommerce.png',
            description: "At Liro, we specialize in eCommerce development and strategy consulting. Enhance your eCommerce business with secure payment systems and seamless shopping experiences. Let us create a powerful platform driving growth and success."
        },
        {
            title: 'Web Design',
            image: './webDev/webDesign2.png',
            description: "At Liro, we provide custom web design solutions that elevate your brand with responsive, SEO-friendly designs that stand out in search results. With ongoing support and optimization, we create captivating online experiences that drive results."
        },
        {
            title: 'Fulltstack Web Development',
            image: './webDev/webDesign.png',
            description: "At Liro, we specialize in full stack development, offering tailored front end and back end solutions. Our dynamic designs and robust systems enhance user experiences, driving success in today’s competitive landscape. Partner with us for scalable applications."
        },
         /*{
             title: 'Backend Web Development',
             image: './webDev/webDesign.png',
             description: "At Liro, we specialize in backend development, delivering robust, efficient solutions that enhance your online presence. Our team prioritizes security, scalability, and performance, ensuring seamless integration tailored to your unique needs for online success."
         }, */
        {
            title: 'Mobile App Development',
            image: './webDev/Mobiledevelopment.png',
            description: "At Liro, our seasoned experts craft cutting-edge mobile applications enhancing user experiences. We leverage modern technologies for robust, scalable solutions tailored to your unique business needs."
        },
        {
            title: 'Website Development',
            image: './webDev/Website3.png',
            description: "At Liro, we're experts in custom web development, combining front-end and back-end development to craft innovative web applications and responsive websites that boost user experiences, streamline functionality, and meet diverse client needs."
        },
        {
            title: 'Website Maintenance & Consulting',
            image: './webDev/maintenance.png',
            description: "At Liro, we offer comprehensive website maintenance services and consulting to ensure your online presence remains robust and up-to-date. Our expert team provides proactive support, enhancing performance, security, and user experience for your business's website."
        }
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

            {/* <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
                    <div class="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
                        <div class="overflow-hidden aspect-w-3 aspect-h-4">
                            <img class="object-cover object-top origin-top scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg" alt="" />
                        </div>

                        <div class="relative">
                            <div class="h-full overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover scale-150 lg:origin-bottom-right" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg" alt="" />
                            </div>

                            <div class="absolute inset-0 grid w-full h-full place-items-center">
                                <button type="button" class="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20">
                                    <svg class="w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="absolute -translate-x-1/2 left-1/2 -top-16">
                            <img class="w-32 h-32" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png" alt="" />
                        </div>
                    </div>

                    <div class="flex flex-col items-start xl:px-16">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl"><span class="highlights">WEB DESIGNING &</span></h2>
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl"><span class="highlights">WEB DEVELOPMENT</span></h2>
                        <br></br>
                        <p class="mt-4 text-base leading-relaxed text-gray-600 text-justify" style={{ maxWidth: '450px' }}>At Liro Studios, we craft visually stunning, responsive, and user-friendly websites tailored to meet the unique needs of your business. As a creative digital marketing agency, we specialize in developing websites that not only look great but also perform exceptionally well across all devices. Our expert team ensures that each site is optimized for SEO, helping you rank higher on search engines and drive more organic traffic. Whether it’s a simple landing page or a complex e-commerce platform, our goal is to deliver an exceptional user experience that supports your digital marketing efforts and business objectives.</p>
                    </div>
                </div>
            </div>



 */}






            <div class="pt-4 overflow-hidden bg-white md:pt-0 sm:pt-8 2xl:pt-8  ">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class=" grid grid-cols-1  items-center md:grid-cols-2">
                        <div className=' ml-10  '>
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"><span class="highlights">WEB DESIGNING &</span></h2>
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"><span class="highlights">WEB DEVELOPMENT</span></h2>
                            <br></br>
                            <p className="max-w-lg mt-4 text-xl text-justify  md:text-[24px] lg:text-[20px] leading-relaxed text-gray-600 md:mt-1rem">
                                Liro Studios enhances businesses through creative graphic design. We craft engaging logos, advertisements, and website visuals to strengthen identity. Our designs resonate with audiences, aligning with business goals across platforms. Collaborating closely with clients, we deliver designs that leave a lasting impression.
                            </p>
                            {/* <p className="mt-4 text-xl text-gray-600 md:mt-8">

                                <button className="cta-button">Discover More</button>
                            </p> */}

                        </div>

                        <div className="relative">
                            <img className="ml-4" style={{ width: 450 }} src="./digitalMarketing/animated1.gif" alt="Digital Marketing Animation" />

                        </div>
                    </div>
                </div>
            </div >

            {/* -------------------------------------------------------------------------------------------------------- */}

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

                    <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
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
            </section>


        </section>
    );

}

export default WebDev