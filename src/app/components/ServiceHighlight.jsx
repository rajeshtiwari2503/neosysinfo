'use client'

import React from 'react'
import { FaTrophy, FaUsers, FaRocket, FaSmile } from 'react-icons/fa'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ServiceHighlights = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Robot image */}
          <motion.div
          animate={{ y: [50, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="flex justify-center"
        >
          <Image
            src="/india.png"
            alt="AI Robot"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </motion.div>

        {/* Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Dot Com Infoway is a leading provider of AI services with immense experience and a huge history of success.
          </h2>
          <p className="text-gray-300 mb-6">
            Discover why leading brands trust us to transform their operations with cutting-edge AI services.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                <FaUsers />
              </div>
              <p className="font-semibold">Skilled AI professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                <FaRocket />
              </div>
              <p className="font-semibold">Custom Development</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-500 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                <FaTrophy />
              </div>
              <p className="font-semibold">Tried and Tested</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        <div>
          <FaTrophy className="text-3xl mx-auto mb-2 text-cyan-400" />
          <h3 className="text-xl font-bold">25</h3>
          <p className="text-sm text-gray-400">Years of Experience</p>
        </div>
        <div>
          <FaUsers className="text-3xl mx-auto mb-2 text-cyan-400" />
          <h3 className="text-xl font-bold">1,000+</h3>
          <p className="text-sm text-gray-400">Clients</p>
        </div>
        <div>
          <FaRocket className="text-3xl mx-auto mb-2 text-cyan-400" />
          <h3 className="text-xl font-bold">5,000+</h3>
          <p className="text-sm text-gray-400">Projects</p>
        </div>
        <div>
          <FaSmile className="text-3xl mx-auto mb-2 text-cyan-400" />
          <h3 className="text-xl font-bold">95%</h3>
          <p className="text-sm text-gray-400">Customer Satisfaction</p>
        </div>
      </div>

     
    </section>
  )
}

export default ServiceHighlights
