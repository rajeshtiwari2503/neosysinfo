 "use client";

import Layout from "../components/Layout";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
export default function PrivacyPolicy() {
  return (
    <Layout>
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 min-h-screen py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200 p-10 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8">Privacy Policy</h1>
        {/* <p className="text-sm text-gray-500 mb-10">Last Updated: March 5, 2025</p> */}

        {[
          {
            title: "1. Introduction",
            content: (
              <>
                <p>
                  At <strong>Neosys Infosystems</strong>, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our after-sales services.
                </p>
                <p className="mt-2">
                  By accessing or using our services, you agree to the collection and use of your information in accordance with this policy.
                </p>
              </>
            )
          },
          {
            title: "2. Information We Collect",
            content: (
              <>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Identity Information:</strong> Your full name, username, or similar identifiers.</li>
                  <li><strong>Contact Details:</strong> Email address, phone number, service address, billing address.</li>
                  <li><strong>Device and Technical Information:</strong> IP address, browser type and version, time zone, location, and device information.</li>
                  <li><strong>Service Usage Data:</strong> How you interact with our site, support, bookings, and feedback tools.</li>
                </ul>
                <p className="mt-2">
                  We do not collect sensitive personal data (e.g. financial records, biometric data, or health info) unless required by law or services.
                </p>
              </>
            )
          },
          {
            title: "3. How We Use Your Information",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>Provide and manage our repair and maintenance services.</li>
                <li>Process service requests, complaints, and payments.</li>
                <li>Send updates, schedules, and collect feedback.</li>
                <li>Improve our website and service performance.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            )
          },
          {
            title: "4. Data Security",
            content: (
              <>
                <p>
                  We use technical and organizational measures to keep your data secure from unauthorized access, misuse, or alteration.
                </p>
                <p className="mt-2">
                  Only authorized personnel and partners access data under strict confidentiality agreements.
                </p>
              </>
            )
          },
          {
            title: "5. Data Sharing and Disclosure",
            content: (
              <>
                <p>We do not sell or trade your data. However, we may share it with:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Authorized service engineers or partners.</li>
                  <li>CRM, hosting, and communication services under contract.</li>
                  <li>Legal authorities when required by law.</li>
                </ul>
              </>
            )
          },
          {
            title: "6. Your Rights",
            content: (
              <>
                <p>You can request to:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Access the personal data we store.</li>
                  <li>Correct or update your data.</li>
                  <li>Delete your data (with exceptions).</li>
                  <li>Unsubscribe from marketing communication.</li>
                  <li>Complain to a data protection authority.</li>
                </ul>
                <p className="mt-2">Contact us to exercise these rights.</p>
              </>
            )
          },
          {
            title: "7. Cookies and Tracking",
            content: (
              <p>
                We may use cookies and tracking tools to enhance user experience and analyze traffic. You can manage cookies via your browser settings.
              </p>
            )
          },
          {
            title: "8. Changes to This Policy",
            content: (
              <p>
                We may revise this Privacy Policy periodically. Any updates will be posted here with a revised date.
              </p>
            )
          },
          {
            title: "9. Contact Us",
            content: (
              <div className="space-y-3 mt-2">
                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <FaEnvelope className="text-indigo-600" /> Hello@neosysinfosystems.com
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <FaMapMarkerAlt className="text-indigo-600" /> Sec-B, Noida 62, Uttar Pradesh, 201301
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <FaPhone className="text-indigo-600" /> +91 75469 14316
                </div>
              </div>
            )
          }
        ].map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
            <div className="text-gray-700 leading-relaxed text-sm sm:text-base">{section.content}</div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
}
