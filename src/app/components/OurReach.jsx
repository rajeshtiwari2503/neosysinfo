// pages/our-reach.js
export default function OurReach() {
  const stats = [
    {
      value: '10000+',
      label: 'Pincodes Covered',
    },
    {
      value: '400+',
      label: 'Service Partners',
    },
    {
      value: '3000+',
      label: 'Trained Technicians',
    },
    {
      value: '100+',
      label: 'In House Technicians',
    },
    {
      value: '95.7%',
      label: 'Customer Satisfaction',
    },
  ];

  return (
    <div className="  bg-white flex items-center justify-center mx-5 rounded-lg py-10 ">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10">
          Our Reach Across India
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-600">{stat.value}</h2>
              <p className="text-md text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
