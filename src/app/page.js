"use client";
import Image from "next/image";
import Layout from "./components/Layout";
import GradientCard from "./components/GradientBg";
import { useRouter } from "next/navigation";
import BrandsTrustPage from "./components/BrandTrust";
import OurReach from "./components/OurReach";
import ServicesPage from "./components/OurServices";
import ServiceNetwork from "./components/ServiceNetwork";
import WhyChooseUs from "./components/WhyChose";
import OurTeam from "./components/OurTeam";
import { motion } from 'framer-motion'
import ServiceHighlights from "./components/ServiceHighlight";
import FAQPage from "./components/Faqs";
import { FaTools, FaShieldAlt, FaGlobeAsia } from "react-icons/fa";
import {
   
  FaHeadset,
  FaStar,
  FaBell,
  FaChartBar,
} from "react-icons/fa";
 import {  FaCheckCircle, FaClock } from "react-icons/fa"; // Add more icons if needed

export default function Page() {
  const router = useRouter();

const cardData = [
  {
    title: "What We Offer",
    icon: <FaTools className="text-4xl text-blue-400 mb-2" />,
    items: [
      "On-site Repair & Maintenance",
      "Installation Services",
      "Spare Parts Supply",
      "Annual Maintenance Contracts (AMC)",
      "Authorized Service Partner Solutions",
    ],
    borderColor: "border-blue-400",
    bgColor: "bg-[#0E2237]",
  },
  {
    title: "Why Choose Neosys Infosystems?",
    icon: <FaCheckCircle className="text-4xl text-green-400 mb-2" />,
    items: [
      "24x7 Customer Support",
      "Fast Response Time",
      "Verified & Trained Technicians",
      "Transparent Pricing",
      "Pan-India Coverage",
      "Trusted by Leading Brands",
    ],
    borderColor: "border-green-400",
    bgColor: "bg-[#0E2237]",
  },
  {
    title: "Book a Service in Minutes",
    icon: <FaClock className="text-4xl text-blue-400 mb-2" />,
    items: [
      "Just call or book online—and our team will take care of the rest.",
    ],
    borderColor: "border-blue-400",
    bgColor: "bg-[#0E2237]",
    cta: true,
  },
];
    
  return (
    <Layout>
      <div className="text-gray-800">

        {/* Hero Section */}

        <section className="relative w-full  overflow-hidden    text-white">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/videoMain.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"></div>

          {/* Main Content Over Video */}
          <div className="relative z-20 px-6 md:px-12 lg:px-24 py-12 flex items-center justify-center">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white px-6 md:px-0">
    {cardData.map((card, index) => (
      <div
        key={index}
        className={`relative group overflow-hidden cursor-pointer rounded-md p-8 text-center shadow-lg border ${card.borderColor} ${card.bgColor} flex flex-col justify-between min-h-[360px]`}
      >
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-white/10 h-0 group-hover:h-full transition-all duration-500 ease-in-out z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
          {card.icon}
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
            {card.title}
          </h2>

          {!card.cta ? (
            <ul className="list-disc pl-5 text-left space-y-2 text-base leading-relaxed text-white">
              {card.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <>
              <p className="text-base text-white mb-4">{card.items[0]}</p>
              <div
                onClick={() => router.push("/contact")}
                className="cursor-pointer bg-[#2080db] p-2 px-4 text-white hover:bg-white hover:text-[#2080db] border transition-colors duration-300 rounded-md font-bold"
              >
                Book Now
              </div>
            </>
          )}
        </div>
      </div>
    ))}
  </div>
</div>


        </section>

        {/* <section className="bg-gradient-to-br from-white via-sky-50 to-indigo-50 py-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 md:p-16 text-center border border-gray-100"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6"
            >
              About Neosys Infosystems
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              At <span className="font-semibold text-gray-900">Neosys Infosystems</span>, we specialize in delivering
              <span className="text-indigo-600 font-medium"> fast, reliable, and professional after-sales service</span> for
              home appliances, electronics, and IT devices.
              <br /><br />
              Backed by years of industry experience and trusted by top OEM brands, we ensure
              <span className="text-indigo-600 font-medium"> timely repair, seamless installation, AMC support</span>,
              and <span className="text-indigo-600 font-medium">genuine spare parts management</span>—so your products stay in perfect condition, always.
              <br /><br />
              Whether you're a <strong>customer, OEM, or dealer</strong>—we’ve got the right service solution tailored to your needs.
              Our <strong>pan-India service network</strong> and <strong>expert technicians</strong> ensure satisfaction at every doorstep.
            </motion.p>
          </motion.div>
        </section> */}
        {/* <section className="px-4 sm:px-6 lg:px-8 py-8  md:py-20   text-center bg-[#000000]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              About Neosys Infosystems
            </h2>
           
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {

                description: "At Neosys Infosystems, we specialize in delivering fast, reliable, and professional after-sales service for home appliances, electronics, and IT devices.",
                borderColor: "border-blue-400",
                icon: <FaTools className="w-8 h-8 text-blue-600" />,
                hoverBg: "group-hover:bg-blue-500",
              },
              {

                description: "Backed by years of industry experience and trusted by top OEM brands, we ensure timely repair, seamless installation, AMC support, and genuine spare parts management—so your products stay in perfect condition, always",
                borderColor: "border-green-400",
                icon: <FaShieldAlt className="w-8 h-8 text-green-600" />,
                bgColor: "bg-green-100",
                hoverBg: "group-hover:bg-green-500",
              },
              {

                description: "Whether you're a customer, OEM, or dealer—we’ve got the right service solution tailored to your needs. Our pan-India service network and expert technicians ensure satisfaction at every doorstep.",
                borderColor: "border-blue-200",
                icon: <FaGlobeAsia className="w-8 h-8 text-blue-500" />,
                bgColor: "bg-blue-100",
                hoverBg: "group-hover:bg-blue-400",
              },

            ].map((f, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: 'easeOut' },
                  },
                }}
                className={`relative group overflow-hidden cursor-pointer rounded-md bg-[#0E2237] p-8 text-center shadow-lg border ${f.borderColor} flex flex-col justify-between min-h-[360px]`}
              >
              
                <div className="absolute inset-0 bg-white/10 h-0 group-hover:h-full transition-all duration-500 ease-in-out z-0"></div>

              
                <div className="relative z-10 flex flex-col flex-grow items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${f.bgColor}`}>
                    {f.icon}
                  </div>
                  <p className="text-sm text-gray-300">{f.description}</p>

              
                  <div className="mt-auto pt-6">
         
                  </div>
                </div>
              </motion.div>



            ))}
          </motion.div>
        </section> */}

        <ServiceHighlights />



 

        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center bg-[#081B2B]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Key Features
            </h2>
            <p className="text-gray-300 mt-4 text-lg">
              A complete ecosystem to handle product servicing, customer interactions, and feedback loops.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            { [
  {
    title: "Warranty Tracking",
    description:
      "Easily manage product warranties and validate customer claims with accurate records.",
    borderColor: "border-blue-400",
    bgColor: "bg-blue-100",
    icon: <FaShieldAlt className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Service Request Management",
    description:
      "Centralized dashboard to handle service complaints and technician assignments.",
    borderColor: "border-green-400",
    bgColor: "bg-green-100",
    icon: <FaTools className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Customer Support Hub",
    description:
      "Efficient ticketing system for resolving customer issues faster and smarter.",
    borderColor: "border-indigo-400",
    bgColor: "bg-indigo-100",
    icon: <FaHeadset className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Feedback & Ratings",
    description:
      "Collect customer reviews and satisfaction ratings to improve service quality.",
    borderColor: "border-purple-400",
    bgColor: "bg-purple-100",
    icon: <FaStar className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Real-Time Notifications",
    description:
      "Keep customers and service centers updated with automated alerts and messages.",
    borderColor: "border-yellow-400",
    bgColor: "bg-yellow-100",
    icon: <FaBell className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Reports & Analytics",
    description:
      "Monitor performance with detailed reports on service timelines, customer satisfaction, and more.",
    borderColor: "border-emerald-400",
    bgColor: "bg-emerald-100",
    icon: <FaChartBar className="w-8 h-8 text-emerald-600" />,
  },
].map((f, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: 'easeOut',
                    },
                  },
                }}
                className={`relative group overflow-hidden cursor-pointer rounded-t-[120px] rounded-b-xl bg-[#0E2237] p-12 text-center shadow-lg border-t-4 ${f.borderColor}`}
              >
                {/* Animated overlay from bottom to top */}
                <div className="absolute inset-0 bg-white/10 h-0 group-hover:h-full transition-all duration-500 ease-in-out z-0"></div>

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="p-3 inline-flex items-center justify-center rounded-full bg-white shadow-md">
          {f.icon}
        </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{f.title}</h3>
                  <p className="text-sm text-gray-300">{f.description}</p>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                    {/* <div className="bg-blue-600 text-white p-3 rounded-full transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.854 3.646a.5.5 0 0 1 .707 0L12 8.086V5.5a.5.5 0 0 1 1 0v4A.5.5 0 0 1 12.5 10h-4a.5.5 0 0 1 0-1h2.586L7.207 4.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>


        <BrandsTrustPage />
        <ServiceNetwork />
        {/* <OurReach /> */}


        <WhyChooseUs />
        <OurTeam />
        <FAQPage />

        {/* Testimonials */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Trusted by Service Providers Everywhere
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Arun M.", feedback: "Managing after-sales service has never been easier. Neosys truly delivers.", borderColor: "border-red-400", },
                { name: "Priya K.", feedback: "Real-time updates and technician tracking helped us improve customer experience significantly.", borderColor: "border-blue-400", },
                { name: "Ravi T.", feedback: "A one-stop solution for all warranty and complaint handling needs.", borderColor: "border-green-400", },
              ].map((t, i) => (
                <div key={i} className={`border-t-4 ${t.borderColor} rounded-xl bg-white p-6 shadow-md flex flex-col items-center text-center`}>
                  <p className="text-gray-700 mb-4">"{t.feedback}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10  text-center">
          <GradientCard>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Ready to Elevate Your After-Sales Services?
            </h2>
            <p className="mb-8 text-secondary text-lg">
              Contact Neosys Infosystems to explore how we can enhance your service operations.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="bg-white hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-xl shadow-xl transition duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </GradientCard>
        </section>

      </div>
    </Layout>
  );
}
