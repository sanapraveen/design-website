import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
export default function Features() {
   
  return (
    <>
    <div className='bg-gradient-to-r from-white to-blue-50'>
        <section class=" mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 pt-16">
        <h1 class="title-font sm:text-4xl text-3xl mb-4  text-gray-900 underline font-bold">API Specification Standards</h1>
      <p class="mb-8 leading-relaxed">Building self-hosted, customizable, and performant content APIhas never been easier.</p>
  <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
    <div 
    data-aos="fade-right"
    class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
     <div className='flex gap-6'>  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 font-bold text-cyan-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>{" "}    <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900 ">Open Source</h1></div>
                    <div className="w-3/5 text-left pl-14 ">
                  Forever. The entire codebase is available on GitHub and
                  maintained by hundreds of contributors.
                </div>
     
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img 
   data-aos="fade-down-left"
      class="object-cover object-center rounded" alt="hero" src="/Images/open-source.gif"/>
    </div>
  </div>
  <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">

    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/Images/contract.gif"/>
    </div>
   
    <div data-aos="fade-left"
    class="lg:flex-grow md:w-1/2  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <div className='flex gap-6'>  
    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 font-bold text-cyan-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>{" "}
    
      <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900 "> Smart Service Virtualization</h1></div>
                    <div className="w-3/5 text-left pl-14 ">
                    Stubs that adhere to API specs.
                </div></div>

  </div>
  <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
    <div 
    data-aos="fade-right"
    class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
     <div className='flex gap-6'>  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 font-bold text-cyan-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>{" "}    <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900 ">Open Source</h1></div>
                    <div className="w-3/5 text-left pl-14 ">
                  Forever. The entire codebase is available on GitHub and
                  maintained by hundreds of contributors.
                </div>
     
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img 
   data-aos="fade-down-left"
      class="object-cover object-center rounded" alt="hero" src="/Images/open-source.gif"/>
    </div>
  </div>  
</section></div>
    </>
  )
}
