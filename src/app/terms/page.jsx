"use client";
import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Terms & Conditions</h1>
        <p className="text-gray-700 max-w-3xl">These terms govern your use of our software services. Please review them carefully before accessing the platform to ensure compliance and mutual trust.</p>
      </div>
    </Layout>
  );
}   