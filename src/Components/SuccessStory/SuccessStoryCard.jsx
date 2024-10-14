import React from 'react';
import './../SuccessStory/SuccessStoryCard.css'
import pic1 from '../././../assets/Mountain/Mountains31.jpg'
import pic2 from "../../assets/AboutPage/coma.png";
import ChooseUsHeading from '../AboutHeadingText/ChooseUsHeading'


const SuccessStoryCard = () => {
    return (

        <div >


            <div className='sm:h-743px] lg:h-1743px] sm:mx-auto  ' style={{ height: 743, position: 'relative' }}>





                <div style={{ height: 743, left: 0, top: 0, position: 'relative', background: 'white' }} />








                <div className="flex relative  lg:w-[598px] sm:w-[650px] lg:h-[485px] w-full h-auto lg:bottom-[598px] lg:left-[330px] mx-auto">
                    {/* Image */}
                    <img
                        className="w-full h-auto object-cover rounded-xl"
                        src={pic1}
                        alt="Success Story"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent rounded-xl"></div>

                    {/* Name */}
                    <div className="absolute bottom-20 left-8 text-white text-lg font-semibold leading-tight">
                        Albert Flores
                    </div>

                    {/* Job Title */}
                    <div className="absolute bottom-10 left-8 text-gray-400 text-sm font-normal leading-snug">
                        Product Manager at Jomanar
                    </div>

                </div>

                <div className='flex  sm:l-[100px]' style={{ width: 599, height: 433, left: 140, top: 145, position: 'absolute' }}>



                    <div className="absolute top-[82px] left-0 w-[592px] text-[#090914] lg:text-[28px] sm:text-3xl  font-poppins font-medium leading-[38px] break-words">
                        {/* Content Here */}



                        “People now recognise that having a good performance conversation means that something happens as a
                        result.”
                    </div>
                    <div
                    // style={{ width: 42.28, height: 34.3, left: 0, top: 0, position: 'absolute', background: '#CBD5E1' }}

                    >

                        <img src={pic2} alt="" />
                        
                    </div>   <div style={{ marginBottom: '410px', marginLeft: '100px' }}>
                        <ChooseUsHeading/>
                    </div>


                    <div className="absolute top-[231px] left-0 w-[599px] text-[#52525B] lg:text-[21px] sm:text-2xl font-poppins font-normal leading-[34px] break-words">



                        “With Landingfolio, the design team can now build design which identifies employees’ career
                        aspirations and goals and from which we approach managers and check to see what is happening.”
                    </div>
                    <div
                        style={{
                            width: 193,
                            height: 32,
                            padding: 16,
                            left: 0,
                            top: 401,
                            position: 'absolute',
                            background: 'white',
                            borderRadius: 50,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 10,
                            display: 'inline-flex'
                        }}
                    >
                        <div style={{ justifyContent: 'center', alignItems: 'center', gap: 9, display: 'inline-flex' }}>
                            <div
                                style={{
                                    textAlign: 'center',
                                    color: '#2563EB',
                                    fontSize: 16,
                                    fontFamily: 'Poppins',
                                    fontWeight: '600',
                                    lineHeight: '28px',
                                    wordWrap: 'break-word'
                                }}
                            >
                                Read Success Story
                            </div>
                            <div
                                style={{
                                    transform: 'rotate(-45deg)',
                                    transformOrigin: '0 0',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 10,
                                    display: 'flex'
                                }}
                            >
                                <div style={{ width: 18, height: 18, position: 'relative' }}>
                                    <div
                                        style={{
                                            width: 13.5,
                                            height: 10.5,
                                            left: 2.25,
                                            top: 3.75,
                                            position: 'absolute',
                                            border: '2px #2563EB solid'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div style={{ width: 598, height: 485, left: 850, top: 120, position: 'absolute' }}>
                <img
                    style={{ width: 598, height: 485, left: 0, top: 0, position: 'absolute', borderRadius: 20 }}
                    src="https://via.placeholder.com/598x485"
                    alt="Success Story"
                />
                <div
                    style={{
                        width: 598,
                        height: 134,
                        left: 0,
                        top: 351,
                        position: 'absolute',
                        background: 'linear-gradient(360deg, black 0%, rgba(0, 0, 0, 0) 100%)',
                        borderRadius: 20
                    }}
                />
                <div
                    style={{
                        left: 35,
                        top: 409,
                        position: 'absolute',
                        color: 'white',
                        fontSize: 18,
                        fontFamily: 'Poppins',
                        fontWeight: '600',
                        lineHeight: '24px',
                        wordWrap: 'break-word'
                    }}
                >
                    Albert Flores
                </div>
                <div
                    style={{
                        left: 35,
                        top: 437,
                        position: 'absolute',
                        color: '#A1A1AA',
                        fontSize: 14,
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        lineHeight: '22px',
                        wordWrap: 'break-word'
                    }}
                >
                    Product Manager at Jomanar
                </div>
            </div> */}








        </div>

    );
};






export default SuccessStoryCard;








