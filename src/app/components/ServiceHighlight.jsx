'use client'

import React from 'react'
import { FaTrophy, FaUsers, FaRocket, FaSmile } from 'react-icons/fa'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaTools, FaShieldAlt, FaGlobeAsia } from "react-icons/fa";

const ServiceHighlights = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 px-4 sm:px-8">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Animated Image */}
    <motion.div
      animate={{ y: [20, -20] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className="flex justify-center"
    >
      <Image
        src="/Logo.png"
        alt="AI Robot"
        width={200}
        height={200}
        className="rounded-2xl shadow-xl"
      />
    </motion.div>

    {/* Content */}
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400">
        We Deliver Trusted After-Sales Solutions
      </h2>
      <p className="text-gray-300 mb-8 leading-relaxed">
        At Neosys Infosystems, we specialize in fast, reliable service and genuine support across India. Partnering with top OEMs, we deliver excellence at every step.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Feature 1 */}
        <div className="bg-slate-800 border border-blue-400 rounded-xl p-6 shadow hover:shadow-lg transition">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
            <FaTools className="w-6 h-6" />
          </div>
          <p className="text-white font-medium">
            Fast, reliable, and professional after-sales service for appliances, electronics, and IT.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-slate-800 border border-green-400 rounded-xl p-6 shadow hover:shadow-lg transition">
          <div className="w-12 h-12 bg-blue-100 text-green-600 rounded-full flex items-center justify-center mb-4">
            <FaShieldAlt className="w-6 h-6" />
          </div>
          <p className="text-white font-medium">
            Trusted by top OEMs for genuine spare parts, AMC support, and timely installations.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-slate-800 border border-cyan-400 rounded-xl p-6 shadow hover:shadow-lg transition sm:col-span-2">
          <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-4">
            <FaGlobeAsia className="w-6 h-6" />
          </div>
          <p className="text-white font-medium">
            Pan-India service network with expert technicians providing tailored solutions for customers, dealers, and OEMs alike.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default ServiceHighlights
