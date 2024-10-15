// import React, { useState } from 'react';

// const FAQ = () => {
//   // State to manage active accordion item
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Handler to toggle the accordion state
//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index); // Close if already open
//   };

//   return (
//     <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//       <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
//         <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Your questions, answered</h2>
//         <p className="mt-1 text-gray-600 dark:text-neutral-400">Answers to the most frequently asked questions.</p>
//       </div>

//       <div className="max-w-2xl mx-auto">
//         <div className="hs-accordion-group">
          
//           {/* Accordion Item 1 */}
//           <div className={`hs-accordion ${activeIndex === 0 ? 'active' : ''} rounded-xl p-6 dark:hs-accordion-active:bg-white/10`} id="faq1">
//             <button 
//               className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
//               onClick={() => toggleAccordion(0)}
//               aria-expanded={activeIndex === 0}
//               aria-controls="faq1-content"
//             >
//               Can I cancel at anytime?
//               <svg className={`${activeIndex === 0 ? 'hidden' : 'block'} shrink-0 size-5 text-gray-600`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
//               <svg className={`${activeIndex === 0 ? 'block' : 'hidden'} shrink-0 size-5 text-gray-600`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
//             </button>
//             <div id="faq1-content" className={`hs-accordion-content ${activeIndex === 0 ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`} role="region" aria-labelledby="faq1">
//               <p className="text-gray-800 dark:text-neutral-200">Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.</p>
//             </div>
//           </div>

//           {/* Accordion Item 2 */}
//           <div className={`hs-accordion ${activeIndex === 1 ? 'active' : ''} rounded-xl p-6 dark:hs-accordion-active:bg-white/10`} id="faq2">
//             <button 
//               className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
//               onClick={() => toggleAccordion(1)}
//               aria-expanded={activeIndex === 1}
//               aria-controls="faq2-content"
//             >
//               My team has credits. How do we use them?
//               <svg className={`${activeIndex === 1 ? 'hidden' : 'block'} shrink-0 size-5 text-gray-600`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
//               <svg className={`${activeIndex === 1 ? 'block' : 'hidden'} shrink-0 size-5 text-gray-600`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
//             </button>
//             <div id="faq2-content" className={`hs-accordion-content ${activeIndex === 1 ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`} role="region" aria-labelledby="faq2">
//               <p className="text-gray-800 dark:text-neutral-200">Once your team signs up for a subscription plan, this is where we sit down, grab a cup of coffee and dial in the details.</p>
//             </div>
//           </div>

//           {/* Accordion Item 3 */}
//           <div className={`hs-accordion ${activeIndex === 2 ? 'active' : ''} rounded-xl p-6 dark:hs-accordion-active:bg-white/10`} id="faq3">
//             <button 
//               className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
//               onClick={() => toggleAccordion(2)}
//               aria-expanded={activeIndex === 2}
//               aria-controls="faq3-content"
//             >
//               How does Preline's pricing work?
//               <svg className={`${activeIndex === 2 ? 'hidden' : 'block'} shrink-0 size-5 text-gray-600`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
//               <svg className={`${activeIndex === 2 ? 'block' : 'hidden'} shrink-0 size-5 text-gray-600`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
//             </button>
//             <div id="faq3-content" className={`hs-accordion-content ${activeIndex === 2 ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`} role="region" aria-labelledby="faq3">
//               <p className="text-gray-800 dark:text-neutral-200">Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;













import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-blue-700">Why Chooose Us ?</h2>
        <p className="mt-1 text-gray-600">Answers to the most frequently asked questions, crafted with care.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 ">
          
          {/* Accordion Item 1 */}
          <div className={`border border-blue-200 rounded-lg shadow-md ${activeIndex === 0 ? 'bg-blue-50' : 'bg-white'}`}>
            <button
              className="flex items-center justify-between w-full p-5 text-left lg:text-[1.55rem] md:text-2xl font-semibold text-gray-700 focus:outline-none hover:text-blue-600"
              onClick={() => toggleAccordion(0)}
              aria-expanded={activeIndex === 0}
              aria-controls="faq1-content"
            >
              Can I cancel at anytime?
              <svg className={`${activeIndex === 0 ? 'hidden' : 'block'} w-6 h-6 text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              <svg className={`${activeIndex === 0 ? 'block' : 'hidden'} w-6 h-6 text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
            </button>
            <div id="faq1-content" className={`p-5 lg:text-lg md:text-[1.51rem] text-gray-700 ${activeIndex === 0 ? 'block' : 'hidden'}`}>
              Yes, you can cancel anytime. No questions asked, but we would highly appreciate if you can provide us with feedback.Answers to the most frequently asked questions, crafted with care.
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className={`border border-blue-200 rounded-lg shadow-md ${activeIndex === 1 ? 'bg-blue-50' : 'bg-white'}`}>
            <button
              className="flex items-center justify-between w-full p-5 text-left lg:text-[1.55rem] md:text-2xl font-semibold text-gray-700 focus:outline-none hover:text-blue-600"
              onClick={() => toggleAccordion(1)}
              aria-expanded={activeIndex === 1}
              aria-controls="faq2-content"
            >
              My team has credits. How do we use them?
              <svg className={`${activeIndex === 1 ? 'hidden' : 'block'} w-6 h-6 text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              <svg className={`${activeIndex === 1 ? 'block' : 'hidden'} w-6 h-6 text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
            </button>
            <div id="faq2-content" className={`p-5 lg:text-lg md:text-[1.51rem] text-gray-700 ${activeIndex === 1 ? 'block' : 'hidden'}`}>
              Once your team signs up for a subscription plan, we will help you apply the credits.Answers to the most frequently asked questions, crafted with care.
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className={`border border-blue-200 rounded-lg shadow-md ${activeIndex === 2 ? 'bg-blue-50' : 'bg-white'}`}>
            <button
              className="flex items-center justify-between w-full p-5 text-left lg:text-[1.55rem] md:text-2xl font-semibold text-gray-700 focus:outline-none hover:text-blue-600"
              onClick={() => toggleAccordion(2)}
              aria-expanded={activeIndex === 2}
              aria-controls="faq3-content"
            >
              How does Preline's pricing work?
              <svg className={`${activeIndex === 2 ? 'hidden' : 'block'} w-6 h-6 text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              <svg className={`${activeIndex === 2 ? 'block' : 'hidden'} w-6 h-6 text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
            </button>
            <div id="faq3-content" className={`p-5 lg:text-lg md:text-[1.51rem] text-gray-700 ${activeIndex === 2 ? 'block' : 'hidden'}`}>
              Our subscriptions are tiered to fit your needs. We offer flexible pricing based on the services you require.Answers to the most frequently asked questions, crafted with care.
            </div>
          </div>
           {/* Accordion Item 4 */}
           <div className={`border border-blue-200 rounded-lg shadow-md ${activeIndex === 3 ? 'bg-blue-50' : 'bg-white'}`}>
            <button
              className="flex items-center justify-between w-full p-5 text-left lg:text-[1.55rem] md:text-2xl font-semibold text-gray-700 focus:outline-none hover:text-blue-600"
              onClick={() => toggleAccordion(3)}
              aria-expanded={activeIndex === 3}
              aria-controls="faq3-content"
            >
              How does Preline's pricing work?
              <svg className={`${activeIndex === 3 ? 'hidden' : 'block'} w-6 h-6 text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              <svg className={`${activeIndex === 3 ? 'block' : 'hidden'} w-6 h-6 text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
            </button>
            <div id="faq3-content" className={`p-5 lg:text-lg md:text-[1.51rem] text-gray-700 ${activeIndex === 3 ? 'block' : 'hidden'}`}>
              Our subscriptions are tiered to fit your needs. We offer flexible pricing based on the services you require.Answers to the most frequently asked questions, crafted with care.
            </div>
          </div>

           {/* Accordion Item 5 */}
           <div className={`border border-blue-200 rounded-lg shadow-md ${activeIndex === 4 ? 'bg-blue-50' : 'bg-white'}`}>
            <button
              className="flex items-center justify-between w-full p-5 text-left lg:text-[1.55rem] md:text-2xl font-semibold text-gray-700 focus:outline-none hover:text-blue-600"
              onClick={() => toggleAccordion(4)}
              aria-expanded={activeIndex === 4}
              aria-controls="faq3-content"
            >
              How does Preline's pricing work?
              <svg className={`${activeIndex === 4 ? 'hidden' : 'block'} w-6 h-6 text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              <svg className={`${activeIndex === 4 ? 'block' : 'hidden'} w-6 h-6 text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
            </button>
            <div id="faq3-content" className={`p-5 lg:text-lg md:text-[1.51rem] text-gray-700 ${activeIndex === 4 ? 'block' : 'hidden'}`}>
              Our subscriptions are tiered to fit your needs. We offer flexible pricing based on the services you require.Answers to the most frequently asked questions, crafted with care.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;















// import React, { useEffect } from 'react';
// import pic1 from "../../assets/Mountain/Mountains30.jpg"; // Update with your actual image path
// import '../../App.css';

// const AboutCompany = () => {
    // Initialize AOS


    // return (


    //     <div className="grid grid-cols-1 gap-10 mx-auto mt-12 lg:max-w-5xl lg:grid-cols-2 lg:gap-16 justify-center">

    //         <div className="md:max-w-[700px] mx-auto">
    //             <div className="relative">

    //                 <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
    //                     <span className="highlights">Why Choose Us?</span>
    //                 </h2>
    //                 <br />

    //                 <div className="px-5 sm:px-0">

    //                     <p className="mt-4 lg:text-base md:text-2xl sm:text-2xl leading-relaxed text-black text-justify"
    //                         style={{ maxWidth: '100%', letterSpacing: "0px" }}>
    //                         Innovation-Driven: We are always at the forefront of the latest technological advancements, ensuring our clients
    //                         benefit from cutting-edge solutions.

    //                         Client-Centric Approach: Your success is our priority. We tailor our services to meet your unique needs and objectives.
    //                         <br />
    //                         <br />
    //                         Experienced Team: Our team comprises seasoned professionals with deep expertise in various domains, including digital
    //                         marketing, SEO, and creative strategies, all working together to deliver exceptional results. Join Us on Your Digital Journey.
    //                     </p>
    //                 </div>
    //                 <br />
    //             </div>
    //         </div>

            {/* Image Section */}
//             <div className="md:max-w-[700px] mx-auto">
//                 <div className="relative">
//                     <div className="relative flex justify-center items-center">
//                         <div className="block items-center justify-center">
//                             <img
//                                 className="object-cover w-3/4 h-3/4 md:w-auto md:h-2/3 lg:w-full lg:h-auto  rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-500 "
//                                 src={pic1}
//                                 alt="WhyChooseUs"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <br />
//         </div>
//     );
// };

// export default AboutCompany;
