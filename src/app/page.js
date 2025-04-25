"use client";
import Image from "next/image";
import Layout from "./components/Layout";
import GradientCard from "./components/GradientBg";
import { useRouter } from "next/navigation";

export default function Page() {
  const router=useRouter()
  return (
    <Layout>
      <div className=" text-gray-800">

        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
          <GradientCard>
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Powerful SaaS Solutions for Business Growth
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-secondary">
                SaaS Techify offers next-gen CRM, ERP, and billing platforms to streamline operations and boost efficiency.
              </p>
              <button   onClick={() => router.push("/contact")}  className="bg-white   hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-xl shadow-xl transition duration-300 transform hover:scale-105">
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
              Powered by our deep expertise in CRM, ERP, and cloud-based SaaS platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "CRM Automation",
                description: "Manage leads, track customer interactions, and automate sales pipelines effortlessly.",
              },
              {
                title: "Smart ERP",
                description: "Integrate all your operations—from inventory to HR—into a single intuitive platform.",
              },
              {
                title: "Real-Time Analytics",
                description: "Gain deep insights with dashboards and reporting tools that track performance instantly.",
              },
              {
                title: "Cloud-Based CRM",
                description: "Access your customer data securely anytime, anywhere with our cloud-powered CRM.",
              },
              // {
              //   title: "SaaS CRM ERP",
              //   description: "A unified platform that combines SaaS-based CRM and ERP for complete business automation.",
              // },
              {
                title: "Billing Software",
                description: "Generate professional invoices, track payments, and manage subscriptions with ease.",
              },
              {
                title: "Business Automation",
                description: "Automate repetitive tasks and streamline operations to maximize productivity.",
              },
              // {
              //   title: "Customer Relationship Management",
              //   description: "Enhance customer relationships with personalized engagement and lifecycle tracking.",
              // },
              // {
              //   title: "Enterprise Resource Planning",
              //   description: "Optimize resources, manage supply chains, and drive growth through integrated ERP tools.",
              // },
            ].map((f, i) => (
              <GradientCard key={i}>
                <h3 className="text-xl font-semibold mb-2 text-[#0c4b6e]">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </GradientCard>
            ))}
          </div>
        </section>


        {/* How It Works */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
          <div className="  text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#0c4b6e] to-[#6B7280]">
              How SaaS Techify Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: 1, title: "Sign Up & Configure", description: "Customize your setup by choosing only the modules you need." },
                { step: 2, title: "Integrate & Migrate", description: "Seamlessly integrate with existing tools and import your data effortlessly." },
                { step: 3, title: "Centralized Dashboard", description: "Manage operations with our intuitive all-in-one dashboard." },
                { step: 4, title: "Automate Workflows", description: "Set up smart automations to reduce manual work and increase efficiency." },
                { step: 5, title: "Track & Analyze", description: "Gain valuable insights through real-time analytics and reporting tools." },
                { step: 6, title: "Scale with Confidence", description: "Easily scale your operations as your business grows without friction." },
              ].map((item, index) => (
                <GradientCard key={index}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-white bg-gradient-to-r from-[#0c4b6e] to-[#6B7280] w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold shadow">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0c4b6e] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </GradientCard>
              ))}
            </div>
          </div>
        </section>

        {/* AI-Generated Visuals */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Visualize Success with AI-Generated Insights
            </h2>
            <p className="mb-8 text-secondary text-lg">
              Our platform uses AI to generate meaningful charts, forecasts, and business snapshots.
            </p>
            <Image
              src="/aiimage.png"
              alt="AI Dashboard Preview"
              width={800}
              height={400}
              className="w-full h-[200px] object-cover rounded-xl shadow-lg"
            />

          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
          <div className=" ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Samantha Jones", feedback: "SaaS Techify transformed our business operations. Their CRM is a game changer!" },
                { name: "Michael Lee", feedback: "We saved hours each week thanks to their ERP system. Highly recommend." },
                { name: "Ayesha Patel", feedback: "Real-time billing and insights helped us scale fast and stay organized." },
              ].map((t, i) => (
                <GradientCard key={i}>
                  <p className="text-gray-700 mb-4">"{t.feedback}"</p>
                  {/* <p className="font-bold text-[#0c4b6e]">- {t.name}</p> */}
                </GradientCard>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-8 lg:py-10 text-center">
          <GradientCard>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-secondary text-lg">
              Start your free trial or book a demo to see SaaS Techify in action.
            </p>
            <button onClick={() => router.push("/contact")}  className="bg-white   hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-xl shadow-xl transition duration-300 transform hover:scale-105">
              Get Started
            </button>
          </GradientCard>
        </section>

      </div>
    </Layout>
  );
}
