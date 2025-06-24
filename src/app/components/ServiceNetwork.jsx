 // pages/service-network.js
import Image from 'next/image';


export default function ServiceNetwork() {
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
   

    <div className="mx-5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-100 text-white px-10 py-10">
      <div className="  grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left Side - Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SERVICE, UNBOUNDED
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 ">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h2 className="text-3xl font-extrabold text-yellow-300">{stat.value}</h2>
                <p className="text-sm text-white/90 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-white/80 text-sm leading-relaxed">
            Our scale of operations is as extensive as it is deep. We have created a
            solution-oriented infrastructure that benefits both our OEM partners and
            customers. Our pan-India presence enables quick service, logistics
            coordination, and reliable support.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/india.png" // Image should be placed in /public folder
            alt="India Service Map"
            width={500}
            height={500}
            className="object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
         
  );
}
