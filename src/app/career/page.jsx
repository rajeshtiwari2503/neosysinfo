'use client';

import Link from 'next/link';
import Layout from '../components/Layout';

export default function CareersPage() {
  const jobs = [
    {
      title: 'Customer Service Executive',
      location: 'Lucknow, UP',
      type: 'Full-Time',
    },
    {
      title: 'Field Technician – Home Appliances',
      location: 'Delhi NCR',
      type: 'Full-Time',
    },
    {
      title: 'Service Center Coordinator',
      location: 'Hyderabad, TS',
      type: 'Full-Time',
    },
    {
      title: 'IT Support Specialist',
      location: 'Remote',
      type: 'Contract',
    },
  ];

  return (
    <Layout>
    <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 md:px-20 lg:px-40">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">Careers at Neosys Infosystems</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Join a fast-growing team committed to transforming after-sales service across India. We’re always
          looking for passionate professionals to help us deliver excellence.
        </p>
      </section>

      {/* Culture & Benefits */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">🤝 Collaborative Culture</h3>
          <p className="text-gray-700 text-sm">Work with cross-functional teams in a supportive, respectful environment.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">📈 Career Growth</h3>
          <p className="text-gray-700 text-sm">Training, upskilling, and internal mobility opportunities to help you grow.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">💼 Impactful Work</h3>
          <p className="text-gray-700 text-sm">Make a real difference in customer experiences and brand success.</p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">🚀 Open Positions</h2>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow border flex flex-col md:flex-row items-start md:items-center justify-between"
            >
              <div>
                <h4 className="text-lg font-semibold text-blue-700">{job.title}</h4>
                <p className="text-sm text-gray-600">{job.location} &middot; {job.type}</p>
              </div>
              <Link
                href={`mailto:hr@neosysinfosystems.com?subject=Application for ${encodeURIComponent(job.title)}`}
                className="mt-4 md:mt-0 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mt-20">
        <p className="text-sm text-gray-500">Can’t find a role that fits?</p>
        <h4 className="text-lg font-semibold text-gray-800">Email your resume to <a href="mailto:hr@neosysinfosystems.com" className="text-blue-600 underline">hr@neosysinfosystems.com</a></h4>
      </section>
    </main>
    </Layout>
  );
}
