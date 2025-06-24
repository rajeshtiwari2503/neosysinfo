 import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Layout from "../components/Layout";

export default function TermsOfService() {
  return (
    <Layout>
    <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-100 min-h-screen py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200 p-10 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8">Terms of Service</h1>
        {/* <p className="text-sm text-gray-500 mb-10">Last Updated: March 5, 2025</p> */}

        {[
          {
            title: "1. Introduction",
            content: (
              <>
                <p>
                  Welcome to <strong>Neosys Infosystems</strong>. These Terms of Service outline the rules and regulations for the use of our website and our after-sales support and service operations.
                </p>
                <p className="mt-2">
                  By accessing this website or booking a service with us, you agree to be bound by these terms and conditions. If you do not agree with any part of the terms, please do not continue to use the site or our services.
                </p>
              </>
            )
          },
          {
            title: "2. Service Description",
            content: (
              <>
                <p>Neosys Infosystems provides professional after-sales services for electronics, home appliances, and IT hardware across India. Our offerings include:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Repair and maintenance of consumer and commercial electronics</li>
                  <li>Product installation services</li>
                  <li>Spare parts supply and logistics</li>
                  <li>Annual Maintenance Contracts (AMC)</li>
                  <li>OEM-authorized service partnerships and extended warranty support</li>
                </ul>
              </>
            )
          },
          {
            title: "3. Service Booking and Appointments",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>You agree to provide correct and detailed information regarding your device and issue.</li>
                <li>Appointments are subject to technician availability in your area.</li>
                <li>Delays may occur due to service duration, location, or traffic conditions.</li>
                <li>You may cancel or reschedule at least 4 hours prior to the appointment without penalty.</li>
              </ul>
            )
          },
          {
            title: "4. Warranty and Service Guarantees",
            content: (
              <>
                <p>We offer the following standard service warranties:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>30-day warranty for paid repair work (unless specified otherwise)</li>
                  <li>OEM or Neosys warranty on replaced parts</li>
                  <li>15-day workmanship guarantee for installation services</li>
                </ul>
                <p className="mt-2">Warranties do not cover:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Physical or accidental damage</li>
                  <li>Unauthorized repairs or tampering</li>
                  <li>Issues beyond the initially reported problem</li>
                </ul>
              </>
            )
          },
          {
            title: "5. Payment Terms",
            content: (
              <>
                <p>Service charges depend on product type, issue category, and spare parts used.</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Diagnostic fee may apply but will be adjusted upon service completion</li>
                  <li>Full payment is due after job completion unless otherwise agreed</li>
                  <li>Accepted methods: UPI, Cards, Net Banking, Cash (select services), Wallets, QR</li>
                </ul>
              </>
            )
          },
          {
            title: "6. Limitation of Liability",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>No responsibility for data loss, service delays, or external damage not caused by us</li>
                <li>Customer negligence or pre-existing faults are not covered</li>
              </ul>
            )
          },
          {
            title: "7. Changes to Terms",
            content: (
              <p>
                We reserve the right to update these terms anytime. Updates will be posted here with the revised date. If the update is significant, users will be notified via email or SMS at least 30 days in advance.
              </p>
            )
          },
          {
            title: "8. Contact Us",
            content: (
              <div className="space-y-3 mt-2">
                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <FaEnvelope className="text-indigo-600" /> Hello@neosysinfosystems.com
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <FaMapMarkerAlt className="text-indigo-600" /> Sec B, Noida 62, Uttar Pradesh, 201301
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <FaPhone className="text-indigo-600" /> +91-XXXXXXXXXX
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
