"use client";
import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Flexible Pricing Plans</h1>
        <p className="text-gray-700 mb-6 max-w-2xl">Choose from our scalable pricing options designed to meet the needs of startups, growing businesses, and enterprises. No hidden fees, cancel anytime.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn btn-primary">Compare Plans</button>
          <button className="btn btn-secondary">Talk to Sales</button>
        </div>
      </div>
    </Layout>
  );
}
