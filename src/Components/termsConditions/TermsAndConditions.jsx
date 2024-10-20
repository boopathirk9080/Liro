// import React from 'react';
// import './TermsAndConditions.css';

// const TermsAndConditions = () => {
//   return (
//     <div className="terms-container">
//       <h1>Terms and Conditions</h1>
//       <p>Welcome to LIRO Studios. These Terms and Conditions govern your use of our services, website, and any products we offer. By engaging with LIRO Studios for digital marketing, web development, or multimedia content creation services, you agree to the following terms.</p>

//       <h3>Services Provided</h3>
//       <p>LIRO Studios provides a range of digital marketing services including, but not limited to:</p>
//       <ul>
//         <li>Website Design and Development</li>
//         <li>Search Engine Optimization (SEO)</li>
//         <li>Social Media Management</li>
//         <li>Pay-Per-Click (PPC) Campaigns</li>
//         <li>Content Creation (Blogging, Copywriting, etc.)</li>
//         <li>Visual Effects, 3D Animation, and Video Editing</li>
//       </ul>

//       <h3>Client Obligations</h3>
//       <p>The client agrees to:</p>
//       <ul>
//         <li>Provide all necessary information, materials, and content in a timely manner to facilitate the provision of services.</li>
//         <li>Ensure that all provided materials (text, images, etc.) do not infringe upon any third-party rights.</li>
//         <li>Comply with applicable laws and regulations regarding the services provided, including advertising standards.</li>
//       </ul>

//       <h3>Fees and Payments</h3>
//       <p>All fees for services will be outlined in a formal proposal or agreement, which the client must approve before work begins.</p>

//       <h3>Project Timelines</h3>
//       <p>LIRO Studios will use reasonable efforts to meet project timelines as outlined in the agreement.</p>

//       <h3>Intellectual Property</h3>
//       <p>LIRO Studios retains the rights to any custom software, design, or content created for the client unless otherwise agreed in writing.</p>

//       <h3>Revisions and Scope</h3>
//       <p>Any revisions or changes to the project scope requested by the client after the commencement of work may be subject to additional fees.</p>

//       <h3>Confidentiality</h3>
//       <p>Both parties agree to keep any proprietary or sensitive information shared during the course of the project confidential.</p>

//       <h3>Third-Party Services</h3>
//       <p>LIRO Studios may engage third-party vendors for specific aspects of the project.</p>

//       <h3>Termination</h3>
//       <p>Either party may terminate this agreement by providing 30 days’ written notice.</p>

//       <h3>Liability</h3>
//       <p>LIRO Studios will not be held liable for any indirect, incidental, or consequential damages arising from the services provided.</p>

//       <h3>Dispute Resolution</h3>
//       <p>Any disputes arising from this agreement shall be resolved through negotiation, mediation, or arbitration before any legal action is taken.</p>

//       <h3>Amendments</h3>
//       <p>LIRO Studios reserves the right to amend these terms and conditions at any time. The client will be notified of any changes that may affect the delivery of services.</p>
//     </div>
//   );
// };

// export default TermsAndConditions;

import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="lg:max-w-7xl sm:max-w-3xl mt:max-w-3xl mx-auto my-5 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl text-center font-bold text-black">Terms and Conditions</h1>
      <p className="text-gray-700 my-4">
        Welcome to LIRO Studios. These Terms and Conditions govern your use of our services, website, and any products we offer. By engaging with LIRO Studios for digital marketing, web development, or multimedia content creation services, you agree to the following terms.
      </p>

      {/* <h3 className="text-2xl font-semibold text-black mt-6">Services Provided</h3>
      <p className="text-gray-700 my-4">LIRO Studios provides a range of digital marketing services including, but not limited to:</p>
      <ul className="list-disc list-inside text-gray-700 ml-5">
        <li className="mb-2">Website Design and Development</li>
        <li className="mb-2">Search Engine Optimization (SEO)</li>
        <li className="mb-2">Social Media Management</li>
        <li className="mb-2">Pay-Per-Click (PPC) Campaigns</li>
        <li className="mb-2">Content Creation (Blogging, Copywriting, etc.)</li>
        <li className="mb-2">Visual Effects, 3D Animation, and Video Editing</li>
      </ul> */}

      <h3 className="text-2xl font-semibold text-black mt-6">Client Obligations</h3>
      <p className="text-gray-700 my-4">The client agrees to:</p>
      <ul className="list-disc list-inside text-gray-700 ml-5">
        <li className="mb-2">Provide all necessary information, materials, and content in a timely manner to facilitate the provision of services.</li>
        <li className="mb-2">Ensure that all provided materials (text, images, etc.) do not infringe upon any third-party rights.</li>
        <li className="mb-2">Comply with applicable laws and regulations regarding the services provided, including advertising standards.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-black mt-6">Fees and Payments</h3>
      <p className="text-gray-700 my-4">All fees for services will be outlined in a formal proposal or agreement, which the client must approve before work begins.</p>

      <h3 className="text-2xl font-semibold text-black mt-6">Project Timelines</h3>
      <p className="text-gray-700 my-4">LIRO Studios will use reasonable efforts to meet project timelines as outlined in the agreement.</p>

      <h3 className="text-2xl font-semibold text-black mt-6">Intellectual Property</h3>
      <p className="text-gray-700 my-4">LIRO Studios retains the rights to any custom software, design, or content created for the client unless otherwise agreed in writing.</p>

      <h3 className="text-2xl font-semibold text-black mt-6">Revisions and Scope</h3>
      <p className="text-gray-700 my-4">Any revisions or changes to the project scope requested by the client after the commencement of work may be subject to additional fees.</p>

      <h3 className="text-2xl font-semibold text-black mt-6">Confidentiality</h3>
      <p className="text-gray-700 my-4">Both parties agree to keep any proprietary or sensitive information shared during the course of the project confidential.</p>

      <h3 className="text-2xl font-semibold text-black mt-6">Third-Party Services</h3>
      <p className="text-gray-700 my-4">LIRO Studios may engage third-party vendors for specific aspects of the project.</p>

      <h3 className="text-2xl font-semibold text-black mt-6">Termination</h3>
      <p className="text-gray-700 my-4">Either party may terminate this agreement by providing 30 days’ written notice.</p>

      <h3 className="text-2xl font-semibold text-black mt-6">Liability</h3>
      <p className="text-gray-700 my-4">LIRO Studios will not be held liable for any indirect, incidental, or consequential damages arising from the services provided.</p>

      <h3 className="text-2xl font-semibold text-black mt-6">Dispute Resolution</h3>
      <p className="text-gray-700 my-4">Any disputes arising from this agreement shall be resolved through negotiation, mediation, or arbitration before any legal action is taken.</p>

      <h3 className="text-2xl font-semibold text-black mt-6">Amendments</h3>
      <p className="text-gray-700 my-4">LIRO Studios reserves the right to amend these terms and conditions at any time. The client will be notified of any changes that may affect the delivery of services.</p>
    </div>
  );
};

export default TermsAndConditions;
