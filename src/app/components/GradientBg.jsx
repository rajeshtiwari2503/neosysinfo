"use client";

export default function GradientCard({ children }) {
  return (
    <div className="p-6 rounded-2xl shadow-md bg-gradient-to-br from-white via-[#f8fafc] to-[#f1f5f9] border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      {children}
    </div>
  );
}
