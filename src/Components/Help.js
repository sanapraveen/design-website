/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon } from '@heroicons/react/solid'

export default function Help() {
  return (
    <div className="relative bg-gray-800" data-aos="zoom-in-left">
      <div className="h-56 border sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="/Images/service.gif"
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
  
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Our Goal is to support various types of Interactions</p>
          <p className="mt-3 text-lg text-gray-300">
          Systems interact with each other through several means. Specmatic hopes to address all these mechanisms and not just web interactions.
          </p>
          <ul className='text-white list-disc ml-10 mt-4'>
            <li>API calls (JSon REST, SOAP XML, gRPC, Thrift, other binary protocols)</li>
            <li>Events via Messaging (Kafka, Redis, ActiveMQ, RabbitMQ, Kinesis, etc.)</li>
            <li>DB, Other Data Stores
</li>
            <li>File system</li>
            <li>Libraries, SDK</li>
            <li>OS Level Pipes</li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}
