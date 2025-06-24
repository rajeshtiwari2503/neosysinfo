// pages/services.js
import { FaTools, FaTruck, FaRecycle, FaGavel, FaLaptopHouse, FaCogs, FaCashRegister, FaServer } from 'react-icons/fa';
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
const segmentsData = [
  {
    title: "Point-of-Sale solutions",
    icon: <FaCashRegister size={30} />,
    subtitle: "Transaction Automation Solutions",
    description: "Solutions bundled with cutting edge products",
    borderColor: "border-blue-400",
  },
  {
    title: "Repair Engineering Solutions",
    icon: <FaTools size={30} />,
    subtitle: "Gadget and Appliance Protection Plans",
    description: "Solutions covering the after-sales service cycle",
    borderColor: "border-purple-400",
  },
  {
    title: "Installation and Demo Solutions",
    icon: <FaTruck size={30} />,
    subtitle: "Parts Management Solutions",
    description: "Solutions covering the after-sales service cycle",
    borderColor: "border-yellow-400",
  },
  {
    title: "E-Recycling Solutions",
    icon: <FaRecycle size={30} />,
    subtitle: "E-Auctioning Solutions",
    description: "Solutions empowering businesses on E-waste management",
    borderColor: "border-green-400",
  },
];
  return (
 <>
     <div className="bg-gray-50   py-6 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
        SERVICES ACROSS SEGMENTS
      </h2>
      <p className="text-gray-600 max-w-3xl mb-10">
        With our century-old legacy of quality and trust and over two decades of
        expertise in developing cutting edge technology products and services – we are
        poised to deliver need-of-the-hour solutions that span across geographies and
        categories.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {segmentsData.map((segment, idx) => (
          <div
            key={idx}
            className={`border-t-4 ${segment.borderColor} rounded-xl bg-white p-6 shadow-md flex flex-col items-center text-center`}
          >
            <div className="text-blue-600 mb-4">{segment.icon}</div>
            <h4 className="font-semibold text-gray-800">{segment.title}</h4>
            <p className="mt-1 text-sm font-medium text-gray-700">{segment.subtitle}</p>
            <p className="mt-2 text-sm text-gray-500">{segment.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="  bg-gray-50 px-6 py-10">
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
    </>
  );
}
