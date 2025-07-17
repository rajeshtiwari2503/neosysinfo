// pages/why-choose-us.js
export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '🧩',
      title: 'Multi-Brand, Multi-Category Expertise',
      description:
        'From IT hardware and home appliances to electronics, we have the skills and infrastructure to support multiple categories under one roof.',
      borderColor: "border-blue-400",
    },
    {
      icon: '🌐',
      title: 'Pan-India Reach',
      description:
        'We operate with a strong field network across metro cities and Tier 2/3 regions — ensuring true nationwide coverage for brands aiming to scale fast.',
      borderColor: "border-yellow-400",
    },
    {
      icon: '⚙️',
      title: 'Fast & Reliable Service',
      description:
        'Our processes are optimized for quick turn-around-time (TAT), with real-time service tracking, escalation control, and first-time resolution targets.',
      borderColor: "border-orange-400",
    },
    {
      icon: '👨‍🔧',
      title: 'Skilled & Certified Technicians',
      description:
        'Our engineers undergo brand-specific training and are equipped with the tools and knowledge to meet exact service standards.',
      borderColor: "border-red-400",
    },
    {
      icon: '📊',
      title: 'Transparent Reporting & Performance Metrics',
      description:
        'We believe in full visibility. From SLA tracking to CSAT scores, we provide detailed service reports to ensure you always stay in control.',
      borderColor: "border-pink-400",
    },
    {
      icon: '🔄',
      title: 'End-to-End Support',
      description:
        'Installation, demo, repair, reverse logistics, CRM integration, and customer support — all managed seamlessly by one trusted partner.',
      borderColor: "border-blue-400",
    },
    {
      icon: '💼',
      title: 'Proven Track Record',
      description:
        'We’ve successfully managed service for top brands like HP, Lenovo, BenQ, and more — and we’re ready to scale with your business next.',
      borderColor: "border-green-400",
    },
  ];

  return (
    <div className="   bg-[#0f0600] px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold   text-white mb-4">✅ Why Choose Us</h1>
        <p className="text-lg text-[#0c6bdd] max-w-2xl mx-auto">
          At Neosys Infosystems, we don’t just deliver service — we deliver peace of mind.
          Here’s why leading brands across India trust us as their after-sales service partner:
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reasons.map((reason, index) => (
         <div
  key={index}
  className={`group border-t-4 ${reason.borderColor} rounded-xl bg-white p-6 shadow-md flex flex-col items-center text-center 
  transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0f172a] hover:to-[#1e3a8a] hover:text-white`}
>
  <div className="text-4xl mb-4 transition-colors duration-300 group-hover:text-white">
    {reason.icon}
  </div>
  <h3 className="text-xl font-semibold text-indigo-600 mb-2 transition-colors duration-300 group-hover:text-white">
    {reason.title}
  </h3>
  <p className="text-gray-700 text-sm transition-colors duration-300 group-hover:text-white">
    {reason.description}
  </p>
</div>


        ))}
      </div>
    </div>
  );
}
