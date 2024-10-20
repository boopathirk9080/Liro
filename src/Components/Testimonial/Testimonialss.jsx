
// import React, { useState } from 'react';

// // Testimonial Data
// const testimonials = [
//   {
//     name: 'MURALI STUDIOS',
//     role: 'US, California',
//     content: 'As a videographer based in California, collaborating with LIRO Studios in India has been an absolute game-changer for my post-production needs. Their video editing and VFX services are second to none. The team’s expertise in transforming raw footage into visually captivating stories is truly impressive. They not only met but exceeded my expectations with their attention to detail, creativity, and ability to bring my vision to life. Communication was seamless despite the distance, and their turnaround time was incredibly efficient. LIRO Studios is a true extension of our team at Murali Studio. I wholeheartedly recommend them to anyone looking for top-tier editing and visual effects work.',
//     avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//   },
//   {
//     name: 'KALPAKALA',
//     role: 'Bangalore, India',
//     content: 'Liro studio made it easy and seamless to get our logo designed. Their ability to connect the dots and build a story through a logo that reflects our culture is commendable. Happy with the creatives!',
//     avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },
//   {
//     name: 'NUR-MAA',
//     role: 'Tamilnadu, India',
//     content: "Partnering with LIRO Studios for our branding and website development has been a remarkable experience. As a beauty product company, we needed a brand image and online presence that reflected the elegance and quality of our products. LIRO Studios delivered exactly that and more. Their team’s creativity and attention to detail were evident throughout the entire process, from conceptualizing our brand identity to crafting a visually stunning and user-friendly website. They understood our vision and brought it to life in ways we couldn't have imagined. LIRO Studios has played a pivotal role in shaping the future of NUR-MAA, and we couldn't be more pleased with the results!",
//     avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
//   },
// ];

// // Utility function to limit words to 50
// const limitWords = (text, maxWords) => {
//   const wordsArray = text.split(' ');
//   return wordsArray.length > maxWords
//     ? wordsArray.slice(0, maxWords).join(' ') + '...'
//     : text;
// };

// const TestimonialCard = ({ name, role, content, avatar }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const maxWords = 50;

//   return (
//     <div className="relative flex flex-col border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 text-center px-5 lg:px-12 p-6">
//       <div className="flex items-center mb-4 justify-center">
//         <img src={avatar} alt={name} className="rounded-full lg:w-20 lg:h-20 lg:mr-4 sm:w-32 sm:h-32 sm:mr-4" />
//         <div>
//           <h4 className="font-semibold text-3xl sm:w-[275px] lg:w-[275px]">{name}</h4>
//           <p className="lg:text-sm sm:text-[25px] text-gray-500">{role}</p>
//         </div>
//       </div>
//       <p className="lg:text-sm sm:text-[30px] text-justify text-gray-700 mb-8">
//         {isExpanded ? content : limitWords(content, maxWords)}
//       </p>
//       <button
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="absolute bottom-3 left-0 right-0 mx-auto lg:w-[100px] sm:w-[200px] sm:h-[44px] lg:h-[35px] font-semibold text-center bg-blue-500 text-white lg:text-sm sm:text-xl py-2 rounded-md hover:bg-blue-600 transition duration-200"
//       >
//         {isExpanded ? 'Read Less' : 'Read More'}
//       </button>
//     </div>
//   );
// };

// const TestimonialsList = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 sm:pl-[30px] sm:pr-[30px] lg:pl-[50px] lg:pr-[50px] md:grid-cols-1 lg:grid-cols-3 gap-6 p-6">
//       {testimonials.map((testimonial, index) => (
//         <TestimonialCard
//           key={index}
//           name={testimonial.name}
//           role={testimonial.role}
//           content={testimonial.content}
//           avatar={testimonial.avatar}
//         />
//       ))}
//     </div>
//   );
// };

// export default TestimonialsList;


// import React, { useState } from 'react';
// import { FaQuoteLeft } from 'react-icons/fa';

// // Testimonial Data
// const testimonials = [
//   {
//     name: 'MURALI STUDIOS',
//     role: 'US, California',
//     content: 'As a videographer based in California, collaborating with LIRO Studios in India has been an absolute game-changer for my post-production needs. Their video editing and VFX services are second to none. The team’s expertise in transforming raw footage into visually captivating stories is truly impressive. They not only met but exceeded my expectations with their attention to detail, creativity, and ability to bring my vision to life. Communication was seamless despite the distance, and their turnaround time was incredibly efficient. LIRO Studios is a true extension of our team at Murali Studio. I wholeheartedly recommend them to anyone looking for top-tier editing and visual effects work.',
//     avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//   },
//   {
//     name: 'KALPAKALA',
//     role: 'Bangalore, India',
//     content: 'Liro studio made it easy and seamless to get our logo designed. Their ability to connect the dots and build a story through a logo that reflects our culture is commendable. Happy with the creatives!',
//     avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },
//   {
//     name: 'NUR-MAA',
//     role: 'Tamilnadu, India',
//     content: "Partnering with LIRO Studios for our branding and website development has been a remarkable experience. As a beauty product company, we needed a brand image and online presence that reflected the elegance and quality of our products. LIRO Studios delivered exactly that and more. Their team’s creativity and attention to detail were evident throughout the entire process, from conceptualizing our brand identity to crafting a visually stunning and user-friendly website. They understood our vision and brought it to life in ways we couldn't have imagined. LIRO Studios has played a pivotal role in shaping the future of NUR-MAA, and we couldn't be more pleased with the results!",
//     avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
//   },
// ];

// // Utility function to limit words to 50
// const limitWords = (text, maxWords) => {
//   const wordsArray = text.split(' ');
//   return wordsArray.length > maxWords
//     ? wordsArray.slice(0, maxWords).join(' ') + '...'
//     : text;
// };

// const TestimonialCard = ({ name, role, content, avatar, isExpanded, onToggle }) => {
//   const maxWords = 50;

//   return (
//     <div className="flex flex-col justify-between p-6 border rounded-lg shadow-md bg-white hover:shadow-xl hover:scale-105 transform transition-all duration-660 text-center max-w-md mx-auto">
//       <FaQuoteLeft className="text-2xl text-gray-300 mb-4 self-center" />
//       <div className="flex flex-col items-center mb-4">
//         <img src={avatar} alt={name} className="rounded-full w-16 h-16 mb-2" />
//         <h4 className="font-semibold">{name}</h4>
//         <p className="text-sm text-gray-500">{role}</p>
//       </div>
//       {/* Justified Text */}
//       <p className="text-sm text-gray-700 mb-4 text-justify">
//         {isExpanded ? content : limitWords(content, maxWords)}
//       </p>
//       <div className="mt-auto pt-4"> {/* Spacer added for the button */}
//         <button
//           onClick={onToggle}
//           className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 transform transition-all duration-10000 focus:ring-blue-400"
//         >
//           {isExpanded ? 'Read Less' : 'Read More'}
//         </button>

//       </div>
//     </div>
//   );
// };

// const TestimonialsList = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const handleToggle = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center py-12">
//       {/* Responsive Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center">
//         {testimonials.map((testimonial, index) => (
//           <TestimonialCard
//             key={index}
//             name={testimonial.name}
//             role={testimonial.role}
//             content={testimonial.content}
//             avatar={testimonial.avatar}
//             isExpanded={expandedIndex === index}
//             onToggle={() => handleToggle(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialsList;















// import React, { useState } from 'react';
// import { FaQuoteLeft } from 'react-icons/fa';

// // Testimonial Data
// const testimonials = [
//   {
//     name: 'MURALI STUDIOS',
//     role: 'US, California',
//     content: 'As a videographer based in California, collaborating with LIRO Studios in India has been an absolute game-changer for my post-production needs. Their video editing and VFX services are second to none. The team’s expertise in transforming raw footage into visually captivating stories is truly impressive. They not only met but exceeded my expectations with their attention to detail, creativity, and ability to bring my vision to life. Communication was seamless despite the distance, and their turnaround time was incredibly efficient. LIRO Studios is a true extension of our team at Murali Studio. I wholeheartedly recommend them to anyone looking for top-tier editing and visual effects work.',
//     avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//   },

//   {
//     name: 'NUR-MAA',
//     role: 'Tamilnadu, India',
//     content: "Partnering with LIRO Studios for our branding and website development has been a remarkable experience. As a beauty product company, we needed a brand image and online presence that reflected the elegance and quality of our products. LIRO Studios delivered exactly that and more. Their team’s creativity and attention to detail were evident throughout the entire process, from conceptualizing our brand identity to crafting a visually stunning and user-friendly website. They understood our vision and brought it to life in ways we couldn't have imagined. LIRO Studios has played a pivotal role in shaping the future of NUR-MAA, and we couldn't be more pleased with the results!",
//     avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
//   },
//   {
//     name: 'KALPAKALA',
//     role: 'Bangalore, India',
//     content: 'Liro studio made it easy and seamless to get our logo designed. Their ability to connect the dots and build a story through a logo that reflects our culture is commendable. Happy with the creatives!',
//     avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },




// ];

// // Utility function to limit words to 50
// const limitWords = (text, maxWords) => {
//     const wordsArray = text.split(' ');
//     return wordsArray.length > maxWords
//         ? wordsArray.slice(0, maxWords).join(' ') + '...'
//         : text;
// };

// const TestimonialCard = ({ name, role, content, avatar, isExpanded, onToggle }) => {
//     const maxWords = 50;

//     return (
//         <div className="flex flex-col justify-between p-6 border rounded-lg shadow-md bg-white hover:shadow-xl hover:scale-105 transform  transition-all duration-660 text-center lg:max-w-md sm:w-[900px]  sm:w-screen-2xl mx-auto">
//             <FaQuoteLeft className="lg:text-2xl sm:text-3xl text-gray-300 mb-4 self-center" />
//             <div className="flex flex-col items-center mb-4">
//                 <img src={avatar} alt={name} className="rounded-full lg:w-16 sm:w-20 lg:h-16 sm:h-20 mb-2" />
//                 <h4 className="font-semibold text-3xl sm:w-[275px] lg:w-[275px]">{name}</h4>
//                 <p className="sm:text-[30px] lg:text-sm text-gray-500">{role}</p>
//             </div>
//             {/* Justified Text */}
//             <p className="lg:text-sm sm:text-2xl text-gray-700 mb-4 text-justify">
//                 {isExpanded ? content : limitWords(content, maxWords)}
//             </p>
//             <div className="mt-auto pt-4"> {/* Spacer added for the button */}
//             <button 
//     onClick={onToggle}
//     className="bg-blue-500 text-white lg:text-sm sm:text-2xl font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 transform transition-all duration-10000 focus:ring-blue-400"
// >
//     {isExpanded ? 'Read Less' : 'Read More'}
// </button>

//             </div>
//         </div>
//     );
// };

// const TestimonialsList = () => {
//     const [expandedIndex, setExpandedIndex] = useState(null);

//     const handleToggle = (index) => {
//         setExpandedIndex(expandedIndex === index ? null : index);
//     };

//     return (
//         <div className="flex flex-col items-center justify-center py-12">
//             {/* Responsive Grid Layout */}
//             <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center">
//                 {testimonials.map((testimonial, index) => (
//                     <TestimonialCard
//                         key={index}
//                         name={testimonial.name}
//                         role={testimonial.role}
//                         content={testimonial.content}
//                         avatar={testimonial.avatar}
//                         isExpanded={expandedIndex === index}
//                         onToggle={() => handleToggle(index)}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TestimonialsList;











// import React, { useState } from 'react';

// // Testimonial Data Arrays
// const testimonialsData = [
//     [
//         {
//             name: 'MURALI STUDIOS',
//             role: 'US, California',
//             content: 'As a videographer based in California, collaborating with LIRO Studios in India has been an absolute game-changer for my post-production needs. Their video editing and VFX services are second to none. The team’s expertise in transforming raw footage into visually captivating stories is truly impressive. They not only met but exceeded my expectations with their attention to detail, creativity, and ability to bring my vision to life. Communication was seamless despite the distance, and their turnaround time was incredibly efficient. LIRO Studios is a true extension of our team at Murali Studio. I wholeheartedly recommend them to anyone looking for top-tier editing and visual effects work.',
//             avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//         },
//     ],
//     [
//         {
//             name: 'NUR-MAA',
//             role: 'Tamilnadu, India',
//             content: "Partnering with LIRO Studios for our branding and website development has been a remarkable experience. As a beauty product company, we needed a brand image and online presence that reflected the elegance and quality of our products. LIRO Studios delivered exactly that and more. Their team’s creativity and attention to detail were evident throughout the entire process, from conceptualizing our brand identity to crafting a visually stunning and user-friendly website. They understood our vision and brought it to life in ways we couldn't have imagined. LIRO Studios has played a pivotal role in shaping the future of NUR-MAA, and we couldn't be more pleased with the results!",
//             avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
//         },
//     ],
//     [
//         {
//             name: 'KALPAKALA',
//             role: 'Bangalore, India',
//             content: 'Liro studio made it easy and seamless to get our logo designed. Their ability to connect the dots and build a story through a logo that reflects our culture is commendable. Happy with the creatives!',
//             avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//         },
//     ],
// ];

// // Utility function to limit words
// const limitWords = (text, maxWords) => {
//     const wordsArray = text.split(' ');
//     return wordsArray.length > maxWords
//         ? wordsArray.slice(0, maxWords).join(' ') + '...'
//         : text;
// };

// // TestimonialCard component
// const TestimonialCard = ({ name, role, content, avatar, isExpanded, toggleExpand }) => {
//     const maxWords = 28;

//     return (
//         <div className="relative flex flex-col border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 text-center px-5 lg:px-12 p-6">
//             <div className="flex items-center mb-4 justify-center">
//                 <img src={avatar} alt={name} className=" flex rounded-full lg:w-20 lg:h-20 lg:mr-4 sm:w-32 sm:h-32 sm:mr-[90px]" />
//                 <div>
//                     <h4 className="font-semibold text-3xl sm:w-[275px] lg:w-[275px]">{name}</h4>
//                     <p className="lg:text-sm sm:text-[25px] text-gray-500">{role}</p>
//                 </div>
//             </div>
//             <p className="lg:text-[14px] sm:text-[30px] text-justify text-gray-700 mb-8">
//                 {isExpanded ? content : limitWords(content, maxWords)}
//             </p>
//             <button
//                 onClick={toggleExpand}
//                 className="absolute bottom-3 left-0 right-0 mx-auto lg:w-[100px] sm:w-[200px] sm:h-[44px] lg:h-[35px] font-semibold text-center bg-blue-500 text-white lg:text-sm sm:text-xl py-2 rounded-md hover:bg-blue-600 transition duration-200"
//             >
//                 {isExpanded ? 'Read Less' : 'Read More'}
//             </button>
//         </div>
//     );
// };

// // Main component to render multiple testimonial arrays
// const TestimonialsList = () => {
//     const [expandedIndexes, setExpandedIndexes] = useState([]);
//     // Function to toggle expand/collapse for a specific testimonial by index
//     const toggleExpand = (arrayIndex, testimonialIndex) => {
//         const currentIndex = `${arrayIndex}-${testimonialIndex}`;
//         setExpandedIndexes((prev) =>
//             prev.includes(currentIndex)
//                 ? prev.filter((index) => index !== currentIndex)
//                 : [currentIndex]
//         );
//     };

//     return (
//         <div className='grid grid-cols-1 lg: sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
//             {testimonialsData.map((testimonialsArray, arrayIndex) => (
//                 <div key={arrayIndex} className="mb-12">
//                     {testimonialsArray.map((testimonial, testimonialIndex) => {
//                         const currentIndex = `${arrayIndex}-${testimonialIndex}`;
//                         const isExpanded = expandedIndexes.includes(currentIndex);
//                         return (
//                             <TestimonialCard
//                                 key={testimonialIndex}
//                                 name={testimonial.name}
//                                 role={testimonial.role}
//                                 content={testimonial.content}
//                                 avatar={testimonial.avatar}
//                                 isExpanded={isExpanded}
//                                 toggleExpand={() => toggleExpand(arrayIndex, testimonialIndex)}
//                             />
//                         );
//                     })}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default TestimonialsList;




























// import React, { useState } from 'react';

// // Testimonial Data Arrays
// const testimonialsData = [
//     [
//         {
//             name: 'MURALI STUDIOS',
//             role: 'US, California',
//             content: 'As a videographer based in California, collaborating with LIRO Studios in India has been an absolute game-changer for my post-production needs. Their video editing and VFX services are second to none. The team’s expertise in transforming raw footage into visually captivating stories is truly impressive. They not only met but exceeded my expectations with their attention to detail, creativity, and ability to bring my vision to life. Communication was seamless despite the distance, and their turnaround time was incredibly efficient. LIRO Studios is a true extension of our team at Murali Studio. I wholeheartedly recommend them to anyone looking for top-tier editing and visual effects work.',
//             avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//         },
//     ],
//     [
//         {
//             name: 'NUR-MAA',
//             role: 'Tamilnadu, India',
//             content: "Partnering with LIRO Studios for our branding and website development has been a remarkable experience. As a beauty product company, we needed a brand image and online presence that reflected the elegance and quality of our products. LIRO Studios delivered exactly that and more. Their team’s creativity and attention to detail were evident throughout the entire process, from conceptualizing our brand identity to crafting a visually stunning and user-friendly website. They understood our vision and brought it to life in ways we couldn't have imagined. LIRO Studios has played a pivotal role in shaping the future of NUR-MAA, and we couldn't be more pleased with the results!",
//             avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
//         },
//     ],
//     [
//         {
//             name: 'KALPAKALA',
//             role: 'Bangalore, India',
//             content: 'Liro studio made it easy and seamless to get our logo designed. Their ability to connect the dots and build a story through a logo that reflects our culture is commendable. Happy with the creatives!',
//             avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//         },
//     ],
// ];

// // Utility function to limit words
// const limitWords = (text, maxWords) => {
//     const wordsArray = text.split(' ');
//     return wordsArray.length > maxWords
//         ? wordsArray.slice(0, maxWords).join(' ') + '...'
//         : text;
// };
// const TestimonialCard = ({ name, role, content, avatar, isExpanded, toggleExpand }) => {
//     const maxWords = 35;

//     return (
//         <div 
//             className="relative flex flex-col border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 text-center px-5 lg:px-12 p-6"
//             style={{ 
//                 width: '450px', 
//                 height: isExpanded ? 'auto' : '300px', // Expands height if content is expanded
//                 minHeight: '300px', // Minimum height to ensure layout consistency
//             }}
//         >
//             <div className="flex items-center mb-4 justify-center">
//                 <img src={avatar} alt={name} className="flex rounded-full lg:w-20 lg:h-20 lg:mr-4 sm:w-32 sm:h-32 sm:mr-[90px]" />
//                 <div>
//                     <h4 className="font-semibold text-3xl sm:w-[275px] lg:w-[275px]">{name}</h4>
//                     <p className="lg:text-sm sm:text-[25px] text-gray-500">{role}</p>
//                 </div>
//             </div>
//             <p className="lg:text-[14px] sm:text-[30px] text-justify text-gray-700 mb-8">
//                 {isExpanded ? content : limitWords(content, maxWords)}
//             </p>
//             <button
//                 onClick={toggleExpand}
//                 className="absolute bottom-3 left-0 right-0 mx-auto lg:w-[100px] sm:w-[200px] sm:h-[44px] lg:h-[35px] font-semibold text-center bg-blue-500 text-white lg:text-sm sm:text-xl py-2 rounded-md hover:bg-blue-600 transition duration-200"
//             >
//                 {isExpanded ? 'Read Less' : 'Read More'}
//             </button>
//         </div>
//     );
// };


// // Main component to render multiple testimonial arrays
// const TestimonialsList = () => {
//     const [expandedIndexes, setExpandedIndexes] = useState([]);
//     // Function to toggle expand/collapse for a specific testimonial by index
//     const toggleExpand = (arrayIndex, testimonialIndex) => {
//         const currentIndex = `${arrayIndex}-${testimonialIndex}`;
//         setExpandedIndexes((prev) =>
//             prev.includes(currentIndex)
//                 ? prev.filter((index) => index !== currentIndex)
//                 : [currentIndex]
//         );
//     };

//     return (
//         <div className='grid grid-cols-1 lg: sm:grid-cols-1 lg:grid-cols-3 gap-6 p-6'>
//             {testimonialsData.map((testimonialsArray, arrayIndex) => (
//                 <div key={arrayIndex} className="mb-12">
//                     {testimonialsArray.map((testimonial, testimonialIndex) => {
//                         const currentIndex = `${arrayIndex}-${testimonialIndex}`;
//                         const isExpanded = expandedIndexes.includes(currentIndex);
//                         return (
//                             <TestimonialCard
//                                 key={testimonialIndex}
//                                 name={testimonial.name}
//                                 role={testimonial.role}
//                                 content={testimonial.content}
//                                 avatar={testimonial.avatar}
//                                 isExpanded={isExpanded}
//                                 toggleExpand={() => toggleExpand(arrayIndex, testimonialIndex)}
//                             />
//                         );
//                     })}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default TestimonialsList;






import React, { useState } from 'react';
import logo1 from '../../assets/Testimonials/1.jpg'
import logo2 from '../../assets/Testimonials/2.jpg'
import logo3 from '../../assets/Testimonials/3.jpg'

// Testimonial Data Arrays
const testimonialsData = [
    [
        {
            name: 'MURALI STUDIOS',
            role: 'US, California',
            content: 'As a videographer based in California, collaborating with LIRO Studios in India has been an absolute game-changer for my post-production needs. Their video editing and VFX services are second to none. The team’s expertise in transforming raw footage into visually captivating stories is truly impressive. They not only met but exceeded my expectations with their attention to detail, creativity, and ability to bring my vision to life. Communication was seamless despite the distance, and their turnaround time was incredibly efficient. LIRO Studios is a true extension of our team at Murali Studio. I wholeheartedly recommend them to anyone looking for top-tier editing and visual effects work.',
            avatar: logo1,
        },
    ],
    [
        {
            name: 'NUR-MAA',
            role: 'Tamilnadu, India',
            content: "Partnering with LIRO Studios for our branding and website development has been a remarkable experience. As a beauty product company, we needed a brand image and online presence that reflected the elegance and quality of our products. LIRO Studios delivered exactly that and more. Their team’s creativity and attention to detail were evident throughout the entire process, from conceptualizing our brand identity to crafting a visually stunning and user-friendly website. They understood our vision and brought it to life in ways we couldn't have imagined. LIRO Studios has played a pivotal role in shaping the future of NUR-MAA, and we couldn't be more pleased with the results!",
            avatar: logo2,
        },
    ],
    [
        {
            name: 'KALPAKALA',
            role: 'Bangalore, India',
            content: 'Liro studio made it easy and seamless to get our logo designed. Their ability to connect the dots and build a story through a logo that reflects our culture is commendable. Happy with the creatives!',
            avatar: logo3,
        },
    ],
];

// Utility function to limit words
const limitWords = (text, maxWords) => {
    const wordsArray = text.split(' ');
    return wordsArray.length > maxWords
        ? wordsArray.slice(0, maxWords).join(' ') + '...'
        : text;
};
const TestimonialCard = ({ name, role, content, avatar, isExpanded, toggleExpand }) => {
    const maxWords = 19;

    return (
        <div
            className={`relative flex flex-col border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 text-center p-4 
                lg:w-full lg:max-w-[450px] sm:max-w-[677px] ${isExpanded ? 'sm:h-auto' : 'sm:h-[342px] lg:h-[200px]'} lg:min-h-[290px] sm:min-h-[30px] mx-auto sm:p-6 lg:p-8`}
        >
            <div className="flex items-center mb-4 justify-center">
                <img src={avatar} alt={name} className="flex rounded-full w-12 h-16 sm:w-24 sm:h-24 lg:w-25  lg:h-25" />
                <div className="ml-4">
                    <h4 className="font-semibold lg:w-[200px] sm:w-[310px] text-xl sm:text-[31px]  lg:text-2xl">{name}</h4>
                    <p className="text-sm sm:text-[30px] lg:text-lg lg:mt-[0px] sm:mt-[10px] text-gray-500">{role}</p>
                </div>
            </div>
            <p className=" sm:text-[29px] lg:text-base text-justify text-gray-700 mb-8">
                {isExpanded ? content : limitWords(content, maxWords)}
            </p>
            <button
                onClick={toggleExpand}
                className="absolute bottom-[11px] left-0 right-0 mx-auto w-[80px] sm:w-[150px] lg:w-[120px] h-[35px] sm:h-[48px] lg:h-[40px] font-semibold bg-blue-500 text-white text-sm sm:text-xl lg:text-lg rounded-md hover:bg-blue-600 transition duration-200"
            >
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};


// Main component to render multiple testimonial arrays
const TestimonialsList = () => {
    const [expandedIndexes, setExpandedIndexes] = useState([]);
    // Function to toggle expand/collapse for a specific testimonial by index
    const toggleExpand = (arrayIndex, testimonialIndex) => {
        const currentIndex = `${arrayIndex}-${testimonialIndex}`;
        setExpandedIndexes((prev) =>
            prev.includes(currentIndex)
                ? prev.filter((index) => index !== currentIndex)
                : [currentIndex]
        );
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 px-4'> {/* Added padding for mobile */}
            {testimonialsData.map((testimonialsArray, arrayIndex) => (
                <div key={arrayIndex} className="mb-12">
                    {testimonialsArray.map((testimonial, testimonialIndex) => {
                        const currentIndex = `${arrayIndex}-${testimonialIndex}`;
                        const isExpanded = expandedIndexes.includes(currentIndex);
                        return (
                            <TestimonialCard
                                key={testimonialIndex}
                                name={testimonial.name}
                                role={testimonial.role}
                                content={testimonial.content}
                                avatar={testimonial.avatar}
                                isExpanded={isExpanded}
                                toggleExpand={() => toggleExpand(arrayIndex, testimonialIndex)}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default TestimonialsList;
