"use client";
import Image from "next/image";
import Layout from "./components/Layout";
import GradientCard from "./components/GradientBg";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <Layout>
      <div className="text-gray-800">

        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
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
        </section>

        {/* Features */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
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
              },
              {
                title: "Service Request Management",
                description: "Centralized dashboard to handle service complaints and technician assignments.",
              },
              {
                title: "Customer Support Hub",
                description: "Efficient ticketing system for resolving customer issues faster and smarter.",
              },
              {
                title: "Feedback & Ratings",
                description: "Collect customer reviews and satisfaction ratings to improve service quality.",
              },
              {
                title: "Real-Time Notifications",
                description: "Keep customers and service centers updated with automated alerts and messages.",
              },
              {
                title: "Reports & Analytics",
                description: "Monitor performance with detailed reports on service timelines, customer satisfaction, and more.",
              },
            ].map((f, i) => (
              <GradientCard key={i}>
                <h3 className="text-xl font-semibold mb-2 text-[#0c4b6e]">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </GradientCard>
            ))}
          </div>
        </section>
        {/* Scale & Impact Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
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
        </section>

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

        {/* AI Visualization Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Visual Insights for Smarter Decisions
            </h2>
            <p className="mb-8 text-secondary text-lg">
              Dashboards powered by AI deliver actionable insights across service performance and trends.
            </p>
            <Image
              src="/aiimage.png"
              alt="AI Dashboard Preview"
              width={800}
              height={400}
              className="w-full   object-cover rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Trusted by Service Providers Everywhere
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Arun M.", feedback: "Managing after-sales service has never been easier. Neosys truly delivers." },
                { name: "Priya K.", feedback: "Real-time updates and technician tracking helped us improve customer experience significantly." },
                { name: "Ravi T.", feedback: "A one-stop solution for all warranty and complaint handling needs." },
              ].map((t, i) => (
                <GradientCard key={i}>
                  <p className="text-gray-700 mb-4">"{t.feedback}"</p>
                </GradientCard>
              ))}
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
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
