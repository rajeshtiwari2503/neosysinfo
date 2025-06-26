import Image from 'next/image';

const brands = [
  { name: 'Brize', logo: '/brize.jpeg' },
  { name: 'Cadlec', logo: '/cadlec.jpeg' },
  { name: 'Candes', logo: '/candes.jpeg' },
  { name: 'Glabal Assurance', logo: '/glabalAssurance.jpeg' },
  { name: 'Novamax', logo: '/novamax.jpeg' },
  { name: 'RDP', logo: '/rdp.jpeg' },
  { name: 'Supercool', logo: '/supercool.jpeg' },
 
];

const brandSupportSteps = [
  {
    title: 'Understanding Brand Needs',
    description:
      'We collaborate with OEMs to understand their product lines, service SLAs, customer expectations, and geographic goals — ensuring our solutions are aligned with their brand standards.',
  },
  {
    title: '👨‍🔧 Deploying Skilled Service Teams',
    description:
      'Our trained technicians and regional service engineers are carefully assigned based on product expertise, local language familiarity, and TAT commitments — ensuring quality and speed.',
  },
  {
    title: '🔗 Integrated Workflow & CRM',
    description:
      'We use robust ticketing and CRM tools to manage service calls, escalations, customer feedback, and reporting. Brands can access real-time dashboards and performance metrics.',
  },
  {
    title: '🚚 Logistics & Parts Management',
    description:
      'We handle defective pickups, reverse logistics, and spare parts coordination efficiently — reducing delays and downtime for both brands and end users.',
  },
  {
    title: '📞 Customer Communication',
    description:
      'From service request to closure, we maintain transparent communication with customers through SMS, email, or WhatsApp updates — boosting satisfaction and trust.',
  },
  {
    title: '📊 Performance Review & Reporting',
    description:
      'We track service metrics like TAT, FTR (First-Time Resolution), and CSAT monthly — and provide detailed reports to our partner brands for full transparency.',
  },
];

export default function BrandsTrustPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Brands That Trust Us</h1>
          <p className="text-lg text-gray-600">
            Our after-sales service is trusted by some of the biggest names in the industry.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center mb-20">
          {brands.map((brand) => (
            <div key={brand.name} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={60}
                className="mx-auto object-contain"
              />
              <p className="mt-2 text-sm text-center text-gray-700 font-medium">{brand.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">How We Support Our Brand Partners</h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            We go beyond just service — we deliver strategic after-sales support tailored to brand goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {brandSupportSteps.map((step, index) => {
            const gradients = [
              "bg-gradient-to-r from-blue-100 to-blue-500",
              "bg-gradient-to-r from-cyan-100 to-blue-300",
              "bg-gradient-to-r from-sky-100 to-cyan-200",
            ];
            return (
              <div
                key={index}
                className={`p-6 rounded-xl shadow hover:shadow-md transition ${gradients[index % gradients.length]}`}
              >
                <h3 className="text-lg font-semibold text-indigo-700 mb-2">{step.title}</h3>
                <p className="text-gray-800 text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>


      </div>
    </div>
  );
}
