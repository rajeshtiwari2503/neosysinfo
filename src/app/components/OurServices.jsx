// pages/services.js
export default function ServicesPage() {
  const services = [
    {
      icon: '📦',
      title: 'Installation & Demo',
      description:
        'Professional product installations and live demonstrations at the customer’s location — ensuring smooth onboarding and product understanding.',
    },
    {
      icon: '🔧',
      title: 'Repair & Maintenance',
      description:
        'We handle repairs, preventive maintenance, and emergency servicing for various product categories with a trained and certified workforce.',
    },
    {
      icon: '🔁',
      title: 'Reverse Logistics & Returns',
      description:
        'Streamlined return pickups and defective product logistics — with tracking and quality checks for minimal customer disruption.',
    },
    {
      icon: '☎️',
      title: 'Call Center & CRM Support',
      description:
        'Our trained support staff and CRM-integrated call center handle service requests, escalations, and feedback efficiently.',
    },
    {
      icon: '🧰',
      title: 'AMC & Warranty Services',
      description:
        'We manage Annual Maintenance Contracts (AMCs) and handle warranty tracking, claims, and timely fulfillment to boost brand trust.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🛠️ Our Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer end-to-end after-sales solutions to help brands deliver outstanding customer experience.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
