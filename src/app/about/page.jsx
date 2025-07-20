 import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <main className="text-gray-800">
        {/* Hero Section */}
        <section className="bg-[#0E2237] text-white px-6 py-16 md:px-20 lg:px-40 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Think Service, Think NEOSYS</h1>
          <p className="text-xl font-medium">Empowering Brands with Nationwide After-Sales Excellence</p>
        
        </section>

        {/* Our Purpose */}
        <section className="bg-gray-50 px-6 py-16 md:px-20 lg:px-40">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Purpose</h2>
          <p className="text-lg mb-4">
            The world of Neosys Infosystems revolves around customer satisfaction and brand trust. In an era where technology
            changes rapidly and consumer expectations are higher than ever, after-sales service is not just a support
            function—it’s a business-critical asset.
          </p>
          <p className="text-lg">
            At Neosys, we’re committed to delivering quality-driven, reliable, and timely service support for every product we
            handle. Whether it's a home appliance in a Tier-4 town or an IT device in a major city, our mission is to ensure
            that every customer feels heard, helped, and happy.
          </p>
        </section>

        {/* Core Promise */}
        <section className="bg-white px-6 py-16 md:px-20 lg:px-40">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Core Promise</h2>
          <p className="text-lg">
            We deliver expert service—at the last mile, in the toughest zones, and under the tightest timelines—so your
            customers never feel abandoned.
          </p>
        </section>

        {/* Our Reach */}
        <section className="bg-gray-100 px-6 py-16 md:px-20 lg:px-40">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Reach</h2>
          <p className="text-lg mb-6">
            With a presence that spans across <strong>18,000+ pin codes</strong> and <strong>600+ cities and towns</strong>,
            Neosys Infosystems is equipped to serve every corner of India. Our dedicated team, supported by advanced CRM systems
            and logistics networks, makes this possible every day.
          </p>

          <ul className="space-y-3 list-disc list-inside text-lg">
            <li>📍 Service-ready across metros, semi-urban, and rural locations</li>
            <li>✔️ Hub & spoke service model for optimized TAT (Turnaround Time)</li>
            <li>✔️ Centralized monitoring with real-time status tracking</li>
            <li>✔️ 1000+ field engineers and technicians under active deployment</li>
          </ul>
        </section>

        {/* Technology-Enabled Operations */}
        <section className="bg-white px-6 py-16 md:px-20 lg:px-40">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Technology-Enabled Operations</h2>
          <p className="text-lg">
            Our cloud-based CRM, mobile service apps, GPS tracking, and centralized dashboards enable real-time coordination and
            instant escalation resolution, offering complete visibility and control to both clients and end-users.
          </p>
        </section>

        {/* Creating Value */}
        <section className="bg-gray-50 px-6 py-16 md:px-20 lg:px-40">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Creating 360° Value Across the Service Lifecycle</h2>
          <p className="text-lg mb-4">
            Founded on the vision of building India’s most reliable service ecosystem, Neosys Infosystems is redefining how
            brands approach after-sales support. Over the years, we’ve helped numerous OEMs, consumer electronics
            manufacturers, and appliance brands create exceptional post-purchase experiences for their customers.
          </p>
          <p className="text-lg">We are not just a service partner—we are a technology-driven extension of your brand.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-lg list-disc list-inside">
              <li>🔧 Installation, repair, and demo for home appliances</li>
              <li>💻 Hardware support for IT and digital products</li>
              <li>🛠️ AMC and preventive services</li>
              <li>🧩 Spare part logistics, ticket handling, and reverse logistics</li>
              <li>📞 Multilingual customer care and complaint management</li>
            </ul>
          </div>
        </section>

        {/* The NEOSYS Approach */}
        <section className="bg-white px-6 py-16 md:px-20 lg:px-40">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">The NEOSYS Approach</h2>
          <p className="text-lg mb-6">PROCESS | TECHNOLOGY | PEOPLE</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">🔁 Process</h3>
              <p className="text-lg">
                We build standardized, efficient service workflows—tailored to each brand’s warranty norms, SLA needs, and
                customer expectations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">⚙️ Technology</h3>
              <p className="text-lg">
                From intelligent ticketing to live dashboards and automated reporting, our tech stack enables unmatched
                service transparency, real-time performance tracking, and data-backed decisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">👥 People</h3>
              <p className="text-lg">
                Our field force includes certified engineers, technical experts, and coordinators trained to deliver courteous
                and reliable support—representing your brand with pride.
              </p>
            </div>
          </div>
        </section>

        {/* Why NEOSYS */}
        <section className="bg-blue-50 px-6 py-16 md:px-20 lg:px-40">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Why NEOSYS?</h2>

          <ul className="space-y-4 text-lg list-disc list-inside">
            <li>🚀 We drive service innovation with AI, automation, and analytics</li>
            <li>🌍 We deliver at scale across India’s geography</li>
            <li>🤝 We value long-term, transparent client partnerships</li>
          </ul>
        </section>

        {/* Summary Section */}
        <section className="bg-[#0E2237] text-white px-6 py-16 md:px-20 lg:px-40 text-center">
          <h2 className="text-3xl font-semibold mb-4">In Summary</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Neosys Infosystems is more than a service company. We are India’s customer experience engine—backed by technology,
            driven by passion, and powered by people. If you’re looking for a service partner who can deliver excellence on
            the ground and insight at the top—we’re ready.
          </p>
        </section>
      </main>
    </Layout>
  );
}
