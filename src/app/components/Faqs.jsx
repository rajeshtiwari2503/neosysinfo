 'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'How can I request after-sales service?',
      answer:
        'You can request service by visiting our support portal or contacting our customer care team. Simply provide your product details, purchase date, and a description of the issue.',
    },
    {
      question: 'What services are included in after-sales support?',
      answer:
        'Our after-sales support includes product troubleshooting, repairs, warranty claims, part replacements, and customer guidance to ensure long-term satisfaction.',
    },
    {
      question: 'Is there any cost for after-sales service?',
      answer:
        'If your product is under warranty, most services are free. For out-of-warranty products, a minimal service charge and parts replacement fee may apply.',
    },
    {
      question: 'How long does it take to resolve a service request?',
      answer:
        'Service resolution time depends on the issue. Minor problems are resolved within 24–48 hours, while hardware issues may take 3–5 business days.',
    },
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="  bg-black text-white px-4 py-16 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            After-Sales <span className="text-blue-500">FAQs</span>
          </h2>
          <p className="text-gray-300 text-lg">
            We are committed to supporting you even after your purchase. Our after-sales service ensures your products work seamlessly and your issues are resolved quickly. Explore our FAQs below to learn more.
          </p>
        </div>

        {/* Right Section - FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#1E1E1E] rounded-md overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 bg-blue-600 text-white font-semibold rounded-md transition-all"
              >
                {faq.question}
                <span>{activeIndex === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6 text-sm text-gray-300"
                  >
                    <div className="py-4">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
