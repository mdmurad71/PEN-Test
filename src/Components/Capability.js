import React from 'react'

export default function Capability() {
  return (
    <section className="bg-[#EDEFF1] py-12 px-6 lg:px-24">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-y-20 gap-x-10">
        {/* Left Text Section */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-semibold text-gray-900">
            What are <br />
            <span className="font-light text-gray-700">we capable of</span>
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            By focusing on design as an enabler and putting a huge emphasis on
            our clients as co-producers, we create innovative, sustainable
            marketing that enhances brand experience and user engagement.
          </p>
          <a
            href="#"
            className="inline-block mt-6 text-black font-medium underline decoration-pink-500 decoration-2 underline-offset-4"
          >
            Our process
          </a>
        </div>

        {/* Right Grid Section */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3">
          {/* Column 1: Brand and Development below it */}
          <div>

          </div>
          <div>
            {/* Brand */}
            <h4 className="font-semibold text-gray-900 uppercase mb-4">Brand</h4>
            <ul className="space-y-2 text-gray-800 mb-8">
            <li className="hover:text-pink-600 cursor-pointer transition duration-300">Brand Strategy</li>
            <li className="hover:text-pink-600 cursor-pointer transition duration-300">Logo &amp; Name</li>
            <li className="hover:text-pink-600 cursor-pointer transition duration-300">Identity &amp; Collateral</li>
            </ul>


            {/* Development */}
            <h4 className="font-semibold text-gray-900 uppercase mb-4">Development</h4>
            <ul className="space-y-2 text-gray-800">
              <li>eCommerce</li>
              <li>Web Development</li>
              <li>Mobile Apps</li>
            </ul>
          </div>

          {/* Column 2: Marketing */}
          <div>
            <h4 className="font-semibold text-gray-900 uppercase mb-4">Marketing</h4>
            <ul className="space-y-2 text-gray-800">
              <li>Digital</li>
              <li>Market Research</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
