/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect } from 'react'
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/outline'
  import Aos from 'aos';
import "aos/dist/aos.css";
  const features = [
    {
      name: 'Import your APIs',
      description: 'Use Postman Collections or Specmatic http proxy',
      icon: CloudUploadIcon,
    },
    {
      name: 'Tight Integration with CI',
      description: 'Trigger Provider and Consumer CI builds when any of the contracts change',
      icon: LockClosedIcon,
    },
    {
      name: 'Contract First',
      description: 'With an API-first approach, you can use Consumer or Provider driven contracts, whatever suits your needs the best',
      icon: RefreshIcon,
    },
    {
      name: 'Backward Compatibility Verification',
      description: 'Contract vs Contract testing (cross version compatibility checks) etc.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Powerful API',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: CogIcon,
    },
    {
      name: 'Service Virtualisation',
      description: 'Run your contract in stub mode and isolate yourself from downstream dependencies (also be sure that your stubs are 100% compatible with the actual provider)',
      icon: ServerIcon,
    },
  ]
  
  export default function Deploy() {

    useEffect(()=>{
Aos.init({duration:1000})
    },[])



    return (
      <div className="relative bg-gradient-to-t from-white to-cyan-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">

          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          One Spec to rule them all
          </p>
         
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-left">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6 ">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 border hover:shadow-xl">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 hover:bg-white hover:border  p-3 shadow-lg">
                          <feature.icon className="h-6 w-6 hover:text-indigo-500 text-white hover:animate-spin " aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  