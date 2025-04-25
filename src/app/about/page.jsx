"use client";
import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">About Our Company</h1>
        <p className="text-gray-700 max-w-3xl">We are a cutting-edge software company on a mission to simplify business management. With our CRM, ERP, and Billing solutions, we empower enterprises to operate efficiently and make data-driven decisions.</p>
      </div>
    </Layout>
  );
}