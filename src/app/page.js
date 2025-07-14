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

export default function Page() {
  const router = useRouter();

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
          <div className="relative z-20 px-6 md:px-12 lg:px-24 py-8 mb-2 flex items-center justify-center  ">
            <div className="max-w-5xl mx-auto text-center space-y-5">
              <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
                Reliable After-Sales Support
              </h1>
              <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
                Fast, professional service for appliances, electronics & IT—trusted by top brands.
              </p>

              <div>
                {/* <p>
                  At <strong>Neosys Infosystems</strong>, we specialize in delivering fast, reliable,
                  and professional after-sales service for home appliances, electronics, and IT devices.
                  Backed by years of industry experience and trusted by top OEM brands, we ensure timely
                  repair, installation, AMC support, and spare parts management—so your products stay in perfect condition, always.
                </p>
                <p>
                  Whether you're a customer, OEM, or dealer—we’ve got the right service solution tailored to your needs.
                  Our pan-India service network and expert technicians ensure satisfaction at every doorstep.
                </p> */}
              </div>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white mt-12 px-6 md:px-0">

                {/* What We Offer */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-md">
                  <h2 className="text-2xl font-semibold text-indigo-300 mb-4">✅ What We Offer</h2>
                  <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed">
                    <li>On-site Repair & Maintenance</li>
                    <li>Installation Services</li>
                    <li>Spare Parts Supply</li>
                    <li>Annual Maintenance Contracts (AMC)</li>
                    <li>Authorized Service Partner Solutions</li>
                  </ul>
                </div>

                {/* Why Choose Us */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-md">
                  <h2 className="text-2xl font-semibold text-indigo-300 mb-4">📍 Why Choose Neosys Infosystems?</h2>
                  <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed">
                    <li>24x7 Customer Support</li>
                    <li>Fast Response Time</li>
                    <li>Verified & Trained Technicians</li>
                    <li>Transparent Pricing</li>
                    <li>Pan-India Coverage</li>
                    <li>Trusted by Leading Brands</li>
                  </ul>
                </div>

                {/* CTA Block */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-md text-center flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-bold text-indigo-300 mb-4">🖱️ Book a Service in Minutes</h2>
                  <p className="mb-6 text-base leading-relaxed">Just call or book online—and our team will take care of the rest.</p>
                  <div
                    onClick={() => router.push("/contact")}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                  >
                    Book Now
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-white via-sky-50 to-indigo-50 py-10 px-6">
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
        </section>



        {/* <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
          <GradientCard>
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Streamlined After-Sales Service Management
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-secondary">
                Neosys Infosystems delivers smart tools to manage warranties, service centers, and customer support — all in one platform.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="bg-white hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-xl shadow-xl transition duration-300 transform hover:scale-105"
              >
                Request a Demo
              </button>
            </div>
          </GradientCard>
        </section> */}

        {/* Features */}
        {/* <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Key Features
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              A complete ecosystem to handle product servicing, customer interactions, and feedback loops.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Warranty Tracking",
                description: "Easily manage product warranties and validate customer claims with accurate records.",
                 borderColor: "border-blue-400",
              },
              {
                title: "Service Request Management",
                description: "Centralized dashboard to handle service complaints and technician assignments.",
                 borderColor: "border-green-400",
              },
              {
                title: "Customer Support Hub",
                description: "Efficient ticketing system for resolving customer issues faster and smarter.",
                 borderColor: "border-blue-200",
              },
              {
                title: "Feedback & Ratings",
                description: "Collect customer reviews and satisfaction ratings to improve service quality.",
                  borderColor: "border-purple-400",
              },
              {
                title: "Real-Time Notifications",
                description: "Keep customers and service centers updated with automated alerts and messages.",
                borderColor: "border-yellow-400",
              },
              {
                title: "Reports & Analytics",
                description: "Monitor performance with detailed reports on service timelines, customer satisfaction, and more.",
                  borderColor: "border-green-400",
              },
            ].map((f, i) => (
              <div key={i}>
                <div className={`border-t-4 ${f.borderColor} rounded-xl bg-white p-6 shadow-md flex flex-col items-center text-center`}>
                  <h3 className="text-xl font-semibold mb-2 text-[#0c4b6e]">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

      <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Key Features
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          A complete ecosystem to handle product servicing, customer interactions, and feedback loops.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        // viewport={{ once: true }}
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
          >
            <div
              className={`group border-t-4 ${f.borderColor} rounded-xl bg-white p-6 shadow-md flex flex-col items-center text-center transition-transform transform duration-300 hover:scale-105`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover:scale-110 ${f.bgColor} ${f.hoverBg}`}
              >
                <img src={f.icon} alt={f.title} className="w-8 h-8 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#0c4b6e] group-hover:text-primary">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>


        {/* <ServicesPage /> */}


        {/* Scale & Impact Section */}
        {/* <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Nationwide Reach & Real Results
            </h2>
            <p className="text-lg   text-gray-700 mb-8">
              Neosys Infosystems supports after-sales operations across <span className="font-bold text-primary">600+ locations</span> and helps resolve over <span className="font-bold text-primary">1,000 service cases every month</span>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <GradientCard>
                <h3 className="text-4xl font-extrabold text-primary mb-2">600+</h3>
                <p className="text-gray-600">Service Locations Covered</p>
              </GradientCard>
              <GradientCard>
                <h3 className="text-4xl font-extrabold text-primary mb-2">1,000+</h3>
                <p className="text-gray-600">Service Requests Handled Monthly</p>
              </GradientCard>
              <GradientCard>
                <h3 className="text-4xl font-extrabold text-primary mb-2">99.5%</h3>
                <p className="text-gray-600">Customer Satisfaction Rate</p>
              </GradientCard>
            </div>
          </div>
        </section> */}

        {/* How It Works */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#0c4b6e] to-[#6B7280]">
              How Neosys After-Sales Platform Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: 1, title: "Register Products", description: "Register customer products and their warranty details quickly." },
                { step: 2, title: "Raise Service Requests", description: "Customers or agents can submit complaints or requests online." },
                { step: 3, title: "Assign Technicians", description: "Easily assign service jobs to the nearest service centers or personnel." },
                { step: 4, title: "Track Progress", description: "View real-time status of each service request and resolution steps." },
                { step: 5, title: "Collect Feedback", description: "Gather customer reviews post-service to maintain quality." },
                { step: 6, title: "Analyze & Improve", description: "Use insights to reduce turnaround time and boost satisfaction." },
              ].map((item, index) => (
                <GradientCard key={index}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-white bg-gradient-to-r from-[#0c4b6e] to-[#6B7280] w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold shadow">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0c4b6e] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </GradientCard>
              ))}
            </div>
          </div>
        </section>
        <BrandsTrustPage />
        <ServiceNetwork />
        {/* <OurReach /> */}


        <WhyChooseUs />
        <OurTeam />


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
