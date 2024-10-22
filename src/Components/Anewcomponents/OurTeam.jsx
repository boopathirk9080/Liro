// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules'; // Import modules directly from Swiper
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Array of profiles
// const profiles = [
//     { name: 'David Dell', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Specializing in building dynamic and responsive user interfaces.' },
//     { name: 'Anna Smith', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Creating user-friendly and visually appealing designs.' },
//     { name: 'John Doe', title: 'Fullstack Developer', image: './webDev/webDesign.png', description: 'Expert in both frontend and backend development.' },
//     { name: 'Sarah Lee', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Focused on modern web technologies and performance optimization.' },
//     { name: 'Michael Brown', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Passionate about seamless user experiences and interactions.' },
//     { name: 'Jessica White', title: 'Fullstack Developer', image: './webDev/webDesign.png', description: 'Experienced in managing databases, servers, and client-side logic.' },
//     { name: 'David Green', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Bringing ideas to life with high-quality web development.' },
//     { name: 'Emily Clark', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Transforming complex requirements into intuitive designs.' }
// ];

// const CardSlider = () => {
//     return (
//         <div className="flex items-center justify-center min-h-[20vh] bg-gray-200">
//             <div className="lg:max-w-5xl sm:w-[990px]  py-10">
//                 <Swiper
//                     slidesPerView={3}
//                     spaceBetween={25}
//                     loop={true}
//                     centeredSlides={true}
//                     grabCursor={true}
//                     pagination={{ clickable: true, dynamicBullets: true }}
//                     navigation={true} // This works with the Navigation module now
//                     modules={[Navigation, Pagination]} // Register the Swiper modules here
//                     breakpoints={{
//                         0: { slidesPerView: 1 },
//                         520: { slidesPerView: 2 },
//                         950: { slidesPerView: 3 },
//                     }}
//                     className="swiper-container"
//                 >
//                     {profiles.map((profile, index) => (
//                         <SwiperSlide key={index} className="swiper-slide">
//                             <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
//                                 <div className="relative flex flex-col items-center p-6">
//                                     <span className="absolute inset-0 h-[50%]  bg-blue-500 rounded-br-[90px] rounded-t-3xl"></span>
//                                     <div className="relative w-36 h-36 rounded-full bg-white p-1">
//                                         <img src={profile.image} alt={`Profile ${profile.name}`} className="w-full h-full object-cover rounded-full border-4 border-blue-500" />
//                                     </div>
//                                     <h2 className="mt-4 text-lg font-semibold text-gray-800">{profile.name}</h2>
//                                     <p className="mt-2 text-sm text-gray-600 text-center">{profile.title}</p>
//                                     <p className="mt-2 text-sm text-gray-600 text-center">{profile.description}</p>
//                                     <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">View More</button>
//                                 </div>
//                             </div>

//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default CardSlider;












// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules'; // Import modules directly from Swiper
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import '../../Components/Anewcomponents/Ourteam.css'

// // Array of profiles
// const profiles = [
//     { name: 'David Dell', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Specializing in building dynamic and responsive user interfaces.' },
//     { name: 'Anna Smith', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Creating user-friendly and visually appealing designs.' },
//     { name: 'John Doe', title: 'Fullstack Developer', image: './webDev/webDesign.png', description: 'Expert in both frontend and backend development.' },
//     { name: 'Sarah Lee', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Focused on modern web technologies and performance optimization.' },
//     { name: 'Michael Brown', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Passionate about seamless user experiences and interactions.' },
//     { name: 'Jessica White', title: 'Fullstack Developer', image: './webDev/webDesign.png', description: 'Experienced in managing databases, servers, and client-side logic.' },
//     { name: 'David Green', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Bringing ideas to life with high-quality web development.' },
//     { name: 'Emily Clark', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Transforming complex requirements into intuitive designs.' }
// ];

// const CardSlider = () => {
//     return (
//         <div className="flex items-center justify-center min-h-[20vh] bg-gray-200">
//             <div className="  lg:max-w-5xl sm:w-[890px] sm:h-[800px] py-10 relative z-1">
//                 <Swiper 
//                     slidesPerView={3}
//                     spaceBetween={25}
//                     loop={true}
//                     centeredSlides={true}
//                     grabCursor={true}
//                     pagination={{ clickable: true, dynamicBullets: true }}
//                     navigation={true} // This works with the Navigation module now
//                     modules={[Navigation, Pagination]} // Register the Swiper modules here
//                     breakpoints={{
//                         0: { slidesPerView: 1 },
//                         520: { slidesPerView: 2 },
//                         950: { slidesPerView: 3 },
//                     }}
//                     className="swiper-container"
//                 >
//                     {profiles.map((profile, index) => (
//                         <SwiperSlide key={index} className="swiper-slide">
//                             <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
//                                 <div className="relative flex flex-col items-center p-6">
//                                     <span className="absolute inset-0 h-[50%] bg-blue-500 rounded-br-[90px] rounded-t-3xl"></span>
//                                     <div className="relative w-36 h-36 rounded-full bg-white p-1">
//                                         <img src={profile.image} alt={`Profile ${profile.name}`} className="w-full h-full object-cover rounded-full border-4 border-blue-500" />
//                                     </div>
//                                     <h2 className="mt-4 text-lg font-semibold text-gray-800">{profile.name}</h2>
//                                     <p className="mt-2 text-sm text-gray-600 text-center">{profile.title}</p>
//                                     <p className="mt-2 text-sm text-gray-600 text-center">{profile.description}</p>
//                                     <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">View More</button>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default CardSlider;














// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import modules directly from Swiper
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import '../../Components/Anewcomponents/Ourteam.css';

// // Array of profiles
// const profiles = [
//     { name: 'David Dell', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Specializing in building dynamic and responsive user interfaces.' },
//     { name: 'Anna Smith', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Creating user-friendly and visually appealing designs.' },
//     { name: 'John Doe', title: 'Fullstack Developer', image: './webDev/webDesign.png', description: 'Expert in both frontend and backend development.' },
//     { name: 'Sarah Lee', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Focused on modern web technologies and performance optimization.' },
//     { name: 'Michael Brown', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Passionate about seamless user experiences and interactions.' },
//     { name: 'Jessica White', title: 'Fullstack Developer', image: './webDev/webDesign.png', description: 'Experienced in managing databases, servers, and client-side logic.' },
//     { name: 'David Green', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Bringing ideas to life with high-quality web development.' },
//     { name: 'Emily Clark', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Transforming complex requirements into intuitive designs.' }
// ];

// const CardSlider = () => {
//     return (
//         <div className="flex items-center justify-center min-h-[20vh] bg-gray-200">
//             <div className="lg:max-w-5xl sm:w-[890px] sm:h-[800px] py-10 relative z-1">
//                 <Swiper
//                     slidesPerView={3}
//                     spaceBetween={25}
//                     loop={true}
//                     centeredSlides={true}
//                     grabCursor={true}
//                     pagination={{ clickable: true, dynamicBullets: true }}
//                     navigation={true} // This works with the Navigation module now
//                     autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3 seconds
//                     modules={[Navigation, Pagination, Autoplay]} // Register the Swiper modules here
//                     breakpoints={{
//                         0: { slidesPerView: 1 },
//                         520: { slidesPerView: 2 },
//                         950: { slidesPerView: 3 },
//                     }}
//                     className="swiper-container"
//                 >
//                     {profiles.map((profile, index) => (
//                         <SwiperSlide key={index} className="swiper-slide">
//                             <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
//                                 <div className="relative flex flex-col items-center p-6">
//                                     <span className="absolute inset-0 h-[50%] bg-blue-500 rounded-br-[90px] rounded-t-3xl"></span>
//                                     <div className="relative w-36 h-36 rounded-full bg-white p-1">
//                                         <img src={profile.image} alt={`Profile ${profile.name}`} className="w-full h-full object-cover rounded-full border-4 border-blue-500" />
//                                     </div>
//                                     <h2 className="mt-4 text-lg font-semibold text-gray-800">{profile.name}</h2>
//                                     <p className="mt-2 text-sm text-gray-600 text-center">{profile.title}</p>
//                                     <p className="mt-2 text-sm text-gray-600 text-center">{profile.description}</p>
//                                     <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">View More</button>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default CardSlider;












// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules'; // Import modules directly from Swiper
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import '../../Components/Anewcomponents/Ourteam.css';

// // Array of profiles
// const profiles = [
//     { name: 'David Dell', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Specializing in building dynamic and responsive user interfaces.' },
//     { name: 'Anna Smith', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Creating user-friendly and visually appealing designs.' },
//     { name: 'John Doe', title: 'Fullstack Developer', image: './webDev/webDesign.png', description: 'Expert in both frontend and backend development.' },
//     { name: 'Sarah Lee', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Focused on modern web technologies and performance optimization.' },
//     { name: 'Michael Brown', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Passionate about seamless user experiences and interactions.' },
//     { name: 'Jessica White', title: 'Fullstack Developer', image: './webDev/webDesign.png', description: 'Experienced in managing databases, servers, and client-side logic.' },
//     { name: 'David Green', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Bringing ideas to life with high-quality web development.' },
//     { name: 'Emily Clark', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Transforming complex requirements into intuitive designs.' }
// ];

// const CardSlider = () => {
//     return (
//         <div className="flex items-center justify-center  min-h-[20vh] bg-gray-200">
//             <div className="lg:max-w-[1900px] lg:h-auto sm:w-[890px] sm:h-[450px] py-10 relative z-1">
//                 <Swiper
//                     slidesPerView={4}
//                     spaceBetween={25}
//                     loop={true}
//                     centeredSlides={true}
//                     grabCursor={true}
//                     pagination={{ clickable: true, dynamicBullets: true }}
//                     autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3 seconds
//                     modules={[Pagination, Autoplay]} // Register the Swiper modules here
//                     breakpoints={{
//                         0: { slidesPerView: 1 },
//                         520: { slidesPerView: 2 },
//                         950: { slidesPerView: 3 },
//                     }}
//                     className="swiper-container"
//                 >
//                     {profiles.map((profile, index) => (
//                         <SwiperSlide key={index} className="swiper-slide">
//                             <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
//                                 <div className="relative flex flex-col items-center p-6">
//                                     <span className="absolute inset-0 h-[50%] bg-blue-500 rounded-br-[90px] rounded-t-3xl"></span>
//                                     <div className="relative w-36 h-36 rounded-full bg-white p-1">
//                                         <img src={profile.image} alt={`Profile ${profile.name}`} className="w-full h-full object-cover rounded-full border-4 border-blue-500" />
//                                     </div>
//                                     <h2 className="mt-4 text-lg font-semibold text-gray-800">{profile.name}</h2>
//                                     <p className="mt-2 text-sm text-gray-600 text-center">{profile.title}</p>
//                                     <p className="mt-2 text-sm text-gray-600 text-center">{profile.description}</p>
//                                     <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">View More</button>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default CardSlider;





// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules'; // Import modules directly from Swiper
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import '../../Components/Anewcomponents/Ourteam.css';
// import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Import icons from FontAwesome

// // Array of profiles
// const profiles = [
//     { name: 'David Dell', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Specializing in building dynamic and responsive user interfaces.' },
//     { name: 'Anna Smith', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Creating user-friendly and visually appealing designs.' },
//     { name: 'John Doe', title: 'Fullstack Developer', image: './webDev/webDesign.png', description: 'Expert in both frontend and backend development.' },
//     { name: 'Sarah Lee', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Focused on modern web technologies and performance optimization.' },
//     { name: 'Michael Brown', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Passionate about seamless user experiences and interactions.' },
//     { name: 'Jessica White', title: 'Fullstack Developer', image: './webDev/webDesign.png', description: 'Experienced in managing databases, servers, and client-side logic.' },
//     { name: 'David Green', title: 'Frontend Developer', image: './webDev/webDesign.png', description: 'Bringing ideas to life with high-quality web development.' },
//     { name: 'Emily Clark', title: 'UI/UX Designer', image: './webDev/webDesign.png', description: 'Transforming complex requirements into intuitive designs.' }
// ];

// const CardSlider = () => {
//     return (
//         <div className="flex items-center justify-center min-h-[20vh] bg-gray-200">
//             <div className="lg:max-w-[1900px] lg:h-auto sm:w-[890px] sm:h-[450px] py-10 relative z-1">
//                 <Swiper
//                     slidesPerView={4}
//                     spaceBetween={25}
//                     loop={true}
//                     centeredSlides={true}
//                     grabCursor={true}
//                     pagination={{ clickable: true, dynamicBullets: true }}
//                     autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3 seconds
//                     modules={[Pagination, Autoplay]} // Register the Swiper modules here
//                     breakpoints={{
//                         0: { slidesPerView: 1 },
//                         520: { slidesPerView: 2 },
//                         950: { slidesPerView: 3 },
//                     }}
//                     className="swiper-container"
//                 >
//                     {profiles.map((profile, index) => (
//                         <SwiperSlide key={index} className="swiper-slide">
//                             <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
//                                 <div className="relative flex flex-col items-center p-6">
//                                     <span className="absolute inset-0 h-[50%] bg-blue-500 rounded-br-[90px] rounded-t-3xl"></span>
//                                     <div className="relative w-36 h-36 rounded-full bg-white p-1">
//                                         <img src={profile.image} alt={`Profile ${profile.name}`} className="w-full h-full object-cover rounded-full border-4 border-blue-500" />
//                                     </div>
//                                     <h2 className="mt-4 text-lg font-semibold text-gray-800">{profile.name}</h2>
//                                     <p className="mt-2 text-sm text-gray-600 text-center">{profile.title}</p>
//                                     <p className="mt-2 text-sm text-gray-600 text-center">{profile.description}</p>

//                                     {/* Social media icons */}
//                                     <div className="mt-4 flex space-x-4">
//                                         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
//                                             <FaLinkedin size={24} />
//                                         </a>
//                                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
//                                             <FaInstagram size={24} />
//                                         </a>
//                                         <a href="mailto:example@gmail.com" className="text-red-500 hover:text-red-700">
//                                             <FaEnvelope size={24} />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default CardSlider;
















// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules'; // Import modules directly from Swiper
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import '../../Components/Anewcomponents/Ourteam.css';
// import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Import icons from FontAwesome

// // Array of profiles with individual social links
// const profiles = [
//     {
//         name: 'David Dell',
//         title: 'Frontend Developer',
//         image: './webDev/webDesign.png',
//         description: 'Specializing in building dynamic and responsive user interfaces.',
//         linkedin: 'https://www.linkedin.com/in/daviddell',
//         instagram: 'https://www.instagram.com/daviddell',
//         email: 'daviddell@gmail.com'
//     },
//     {
//         name: 'Anna Smith',
//         title: 'UI/UX Designer',
//         image: './webDev/webDesign.png',
//         description: 'Creating user-friendly and visually appealing designs.',
//         linkedin: 'https://www.linkedin.com/in/annasmith',
//         instagram: 'https://www.instagram.com/annasmith',
//         email: 'annasmith@gmail.com'
//     },
//     {
//         name: 'John Doe',
//         title: 'Fullstack Developer',
//         image: './webDev/webDesign.png',
//         description: 'Expert in both frontend and backend development.',
//         linkedin: 'https://www.linkedin.com/in/johndoe',
//         instagram: 'https://www.instagram.com/johndoe',
//         email: 'johndoe@gmail.com'
//     },
//     {
//         name: 'John Doe',
//         title: 'Fullstack Developer',
//         image: './webDev/webDesign.png',
//         description: 'Expert in both frontend and backend development.',
//         linkedin: 'https://www.linkedin.com/in/johndoe',
//         instagram: 'https://www.instagram.com/johndoe',
//         email: 'johndoe@gmail.com'
//     },
//     {
//         name: 'John Doe',
//         title: 'Fullstack Developer',
//         image: './webDev/webDesign.png',
//         description: 'Expert in both frontend and backend development.',
//         linkedin: 'https://www.linkedin.com/in/johndoe',
//         instagram: 'https://www.instagram.com/johndoe',
//         email: 'johndoe@gmail.com'
//     },
//     // Continue with the other profiles
// ];

// const CardSlider = () => {
//     return (
//         <div className="flex items-center justify-center min-h-[20vh] bg-gray-200">
//             <div className="lg:max-w-[1900px] lg:h-auto sm:w-[890px] sm:h-[450px] py-10 relative z-1">
//                 <Swiper
//                     slidesPerView={4}
//                     spaceBetween={25}
//                     loop={true}
//                     centeredSlides={true}
//                     grabCursor={true}
//                     pagination={{ clickable: true, dynamicBullets: true }}
//                     autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3 seconds
//                     modules={[Pagination, Autoplay]} // Register the Swiper modules here
//                     breakpoints={{
//                         0: { slidesPerView: 1 },
//                         520: { slidesPerView: 2 },
//                         950: { slidesPerView: 3 },
//                     }}
//                     className="swiper-container"
//                 >
//                     {profiles.map((profile, index) => (
//                         <SwiperSlide key={index} className="swiper-slide">
//                             <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
//                                 <div className="relative flex flex-col items-center p-6">
//                                     <span className="absolute inset-0 h-[50%] bg-blue-500 rounded-br-[90px] rounded-t-3xl"></span>
//                                     <div className="relative lg:w-36 lg:h-36 sm:w-[90px] sm:h-[90px] rounded-full bg-white p-1">
//                                         <img src={profile.image} alt={`Profile ${profile.name}`} className="w-full h-full object-cover rounded-full border-4 border-blue-500" />
//                                     </div>
//                                     <h2 className="mt-4 text-lg font-semibold text-gray-800">{profile.name}</h2>
//                                     <p className="mt-2 lg:text-sm sm:text-[20px] text-gray-600 text-center">{profile.title}</p>
//                                     <p className="mt-2 lg:text-sm sm:text-[18px] text-gray-600 text-center">{profile.description}</p>

//                                     {/* Social media icons with employee-specific links */}
//                                     <div className="mt-4 flex space-x-4">
//                                         <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
//                                             <FaLinkedin size={24} />
//                                         </a>
//                                         <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
//                                             <FaInstagram size={24} />
//                                         </a>
//                                         <a href={`mailto:${profile.email}`} className="text-red-500 hover:text-red-700">
//                                             <FaEnvelope size={24} />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default CardSlider;












// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import '../../Components/Anewcomponents/Ourteam.css';
// import { motion } from 'framer-motion';
// import { FaVideo, FaPaintBrush, FaCode, FaPenFancy, FaCamera, FaCogs, FaLaptopCode } from 'react-icons/fa'; // Icons for various project types

// // Project data
// const projects = [
//     {
//         name: 'Content Creation',
//         description: 'Creating engaging digital content for various platforms.',
//         image: './webDev/webDesign.png',
//         icon: <FaPenFancy size={24} className="text-green-500" />
//     },
//     {
//         name: 'Video Editing',
//         description: 'Professional video editing and post-production services.',
//         image: './webDev/webDesign.png',
//         icon: <FaVideo size={24} className="text-red-500" />
//     },
//     {
//         name: 'Art Work',
//         description: 'Digital and traditional art for creative projects.',
//         image: './webDev/webDesign.png',
//         icon: <FaPaintBrush size={24} className="text-purple-500" />
//     },
//     {
//         name: 'Product Design',
//         description: 'Designing innovative products with user-focused approaches.',
//         image: './webDev/webDesign.png',
//         icon: <FaCogs size={24} className="text-blue-500" />
//     },
//     {
//         name: 'Web Development',
//         description: 'Building modern websites and web applications.',
//         image: './webDev/webDesign.png',
//         icon: <FaLaptopCode size={24} className="text-blue-600" />
//     },
//     {
//         name: 'Photography',
//         description: 'Professional photography services for products and events.',
//         image: './webDev/webDesign.png',
//         icon: <FaCamera size={24} className="text-yellow-500" />
//     },
//     // More project types can be added here (at least 12 total)
// ];

// const CardSlider = () => {
//     return (
//         <div className="flex items-center justify-center min-h-[20vh] bg-gray-100">
//             <div className="lg:max-w-[1900px] lg:h-auto sm:w-[890px] sm:h-[450px] py-10 relative z-1">
//                 <Swiper
//                     slidesPerView={4}
//                     spaceBetween={25}
//                     loop={true}
//                     centeredSlides={true}
//                     grabCursor={true}
//                     pagination={{ clickable: true, dynamicBullets: true }}
//                     autoplay={{ delay: 3000, disableOnInteraction: false }}
//                     modules={[Pagination, Autoplay]}
//                     breakpoints={{
//                         0: { slidesPerView: 1 },
//                         520: { slidesPerView: 2 },
//                         950: { slidesPerView: 3 },
//                     }}
//                     className="swiper-container"
//                 >
//                     {projects.map((project, index) => (
//                         <SwiperSlide key={index} className="swiper-slide">
//                             <motion.div
//                                 className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
//                                 initial={{ opacity: 0, y: 100 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                             >
//                                 <div className="relative flex flex-col items-center p-6">
//                                     <div className="absolute top-0 left-0 p-2">
//                                         {project.icon} {/* Display the unique icon for each project */}
//                                     </div>
//                                     <div className="relative lg:w-36 lg:h-36 sm:w-[90px] sm:h-[90px] rounded-full bg-white p-1">
//                                         <img src={project.image} alt={`Project ${project.name}`} className="w-full h-full object-cover rounded-full border-4 border-blue-500" />
//                                     </div>
//                                     <h2 className="mt-4 text-lg font-semibold text-gray-800">{project.name}</h2>
//                                     <p className="mt-2 lg:text-sm sm:text-[20px] text-gray-600 text-center">{project.description}</p>
//                                 </div>
//                             </motion.div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default CardSlider;
import '../../Components/Anewcomponents/Ourteam.css';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaPaintBrush, FaCode, FaPenFancy, FaCamera, FaCogs, FaLaptopCode } from 'react-icons/fa';
import pic1 from "../../assets/Mountain/Mountains31.jpg"
const projects = [
    {
        name: 'Content Creation',
        description: 'Engaging digital content creation for platforms.',
        image: pic1,
        details: 'Includes blog writing, social media, and video content.',
        icon: <FaPenFancy size={24} className="text-green-500" />
    },
    {
        name: 'Video Editing',
        description: 'Professional video editing services.',
        image: pic1,
        details: 'Expert editing in Adobe Premiere and Final Cut Pro.',
        icon: <FaVideo size={24} className="text-red-500" />
    },
    {
        name: 'Art Work',
        description: 'Creative and custom artwork.',
        image: pic1,
        details: 'Illustration, graphic design, and fine art commissions.',
        icon: <FaPaintBrush size={24} className="text-purple-500" />
    },
    {
        name: 'Product Design',
        description: 'Innovative product design solutions.',
        image: pic1,
        details: 'Focusing on UX/UI and human-centered design.',
        icon: <FaCogs size={24} className="text-blue-500" />
    },
    {
        name: 'Web Development',
        description: 'Building modern websites and web applications.',
        image: pic1,
        details: 'Expertise in full-stack development using modern frameworks.',
        icon: <FaLaptopCode size={24} className="text-blue-600" />
    },
    {
        name: 'Photography',
        description: 'Professional photography services.',
        image: pic1,
        details: 'Product, event, and portrait photography.',
        icon: <FaCamera size={24} className="text-yellow-500" />
    },
];

const CardGrid = () => {
    const [flipped, setFlipped] = useState(null); // To track which card is flipped

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 my-10">Our Projects</h2>

            {/* Grid layout with fixed-size cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative group perspective-1000 w-[400px] h-[450px]" // Set the card size here
                        onHoverStart={() => setFlipped(flipped === index ? null : index)} // On tap, flip the card
                        onClick={() => setFlipped(flipped === index ? null : index)}
                    >
                        {/* Card Container */}
                        <motion.div
                            className={`relative w-full h-full transform-style-3d transition-transform duration-500 ${flipped === index ? 'rotate-y-180' : ''}`}
                        >
                            {/* Front Side */}
                            <div className="absolute w-full h-full bg-white rounded-3xl shadow-lg overflow-hidden backface-hidden flex flex-col items-center p-6">
                                <div className="absolute top-0 left-0 p-4">
                                    {project.icon} {/* Display unique icon */}
                                </div>
                                <div className="relative w-90 h-[200px] rounded-full bg-white p-1">
                                    <img src={project.image} alt={`Project ${project.name}`} className="w-full h-full object-cover  border-4 border-blue-500" />
                                </div>
                                <h2 className="mt-4 text-xl font-semibold text-gray-800">{project.name}</h2>
                                <p className="mt-2 text-sm text-gray-600 text-center">{project.description}</p>
                            </div>

                            {/* Back Side */}
                            <div className="absolute w-full h-full bg-blue-500 rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 transform rotate-y-180 backface-hidden">
                                <h2 className="text-xl font-bold text-white mb-4">{project.name}</h2>
                                <p className="text-sm text-white text-center mb-4">{project.details}</p>
                                <button className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-lg">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CardGrid;
