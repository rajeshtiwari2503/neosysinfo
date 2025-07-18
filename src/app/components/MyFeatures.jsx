'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const features = [
  {
    title: "Warranty Tracking",
    description: "Easily manage product warranties and validate customer claims with accurate records.",
    borderColor: "border-blue-400",
    icon: "/Logo.png",
    bgColor: "bg-blue-100",
    hoverBg: "group-hover:bg-blue-500",
  },
  {
    title: "Service Request Management",
    description: "Centralized dashboard to handle service complaints and technician assignments.",
    borderColor: "border-green-400",
    icon: "/Logo.png",
    bgColor: "bg-green-100",
    hoverBg: "group-hover:bg-green-500",
  },
  {
    title: "Customer Support Hub",
    description: "Efficient ticketing system for resolving customer issues faster and smarter.",
    borderColor: "border-blue-200",
    icon: "/Logo.png",
    bgColor: "bg-blue-100",
    hoverBg: "group-hover:bg-blue-400",
  },
  {
    title: "Feedback & Ratings",
    description: "Collect customer reviews and satisfaction ratings to improve service quality.",
    borderColor: "border-purple-400",
    icon: "/Logo.png",
    bgColor: "bg-purple-100",
    hoverBg: "group-hover:bg-purple-500",
  },
  {
    title: "Real-Time Notifications",
    description: "Keep customers and service centers updated with automated alerts and messages.",
    borderColor: "border-yellow-400",
    icon: "/Logo.png",
    bgColor: "bg-yellow-100",
    hoverBg: "group-hover:bg-yellow-400",
  },
  {
    title: "Reports & Analytics",
    description: "Monitor performance with detailed reports on service timelines, customer satisfaction, and more.",
    borderColor: "border-green-400",
    icon: "/Logo.png",
    bgColor: "bg-green-100",
    hoverBg: "group-hover:bg-green-500",
  },
]

export default function FeaturesGrid() {
  return (
    <div className="py-12 px-4 md:px-10 lg:px-20 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden border-t-4 ${feature.borderColor} rounded-2xl shadow-md transition-all duration-300`}
          >
            <div
              className={`absolute bottom-0 left-0 w-full h-0 ${feature.hoverBg} transition-all duration-500 ease-in-out group-hover:h-full z-0`}
            ></div>

            <div className={`relative z-10 p-6 ${feature.bgColor} group-hover:text-white transition-all duration-300 flex flex-col items-center text-center`}>
              <Image src={feature.icon} alt={feature.title} width={60} height={60} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
