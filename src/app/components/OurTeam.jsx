// pages/our-team.js
import Image from 'next/image';

const team = [
  {
    name: 'MANISH DUBEY',
    title: 'CEO',
    image: '/team/rohit-sinha.png',
  },
  {
    name: 'RAJESH TIWARI',
    title: 'CTO',
    image: '/team/mukesh-doshi.png',
  },
  
];

export default function OurTeam() {
  return (
    <div className=" mx-10 bg-white px-10 rounded-xl py-10">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-600 uppercase mb-2">Our Team</h2>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Meet The Team – Passionate People, Exceptional{' '}
          <span className="text-indigo-600 italic underline decoration-pink-400">Talents</span>
        </h1>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-md transition p-4 text-center"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-indigo-500 mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
