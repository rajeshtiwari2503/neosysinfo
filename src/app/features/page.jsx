"use client";
import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Core Features</h1>
        <ul className="list-disc ml-6 text-gray-700 leading-8">
          <li>Smart Lead Management with real-time analytics</li>
          <li>Automated Sales Pipelines and Forecasting</li>
          <li>Robust Inventory Control and Tracking</li>
          <li>Seamless Billing, Invoicing, and Tax Management</li>
          <li>Integrated Reporting Dashboard for quick insights</li>
        </ul>
      </div>
    </Layout>
  );
}