 // pages/about.tsx or app/about/page.tsx

import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
    <main className="bg-gray-50 text-gray-800 min-h-screen px-6 py-12 md:px-20 lg:px-40">
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">About Us – Neosys Infosystems</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Neosys Infosystems is a trusted provider of after-sales service solutions for consumer electronics,
          home appliances, and IT products across India. Backed by a skilled team and a strong service
          infrastructure, we help leading brands deliver exceptional customer support experiences.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">🚀 Our Mission</h2>
        <p className="text-lg">
          To deliver fast, transparent, and reliable after-sales services that strengthen brand value and build
          long-term customer trust.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">🌐 Our Vision</h2>
        <p className="text-lg">
          To become India’s most dependable and widespread after-sales service network for technology and appliance brands.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">💼 What We Offer</h2>
        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Authorized warranty & non-warranty services</li>
          <li>Installation & setup support</li>
          <li>Dedicated technical & logistics teams</li>
          <li>Customized service operations for brands</li>
          <li>End-to-end customer care and service tracking</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">🤝 Our Partners</h2>
        <p className="text-lg">
          We proudly support some of India’s most recognized brands, offering localized service solutions with
          national-level reach.
        </p>
      </section>
    </main>
    </Layout>
  );
}
