"use client";
import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
        <ul className="list-disc ml-6 text-gray-700 leading-8">
          <li>How can I start using the platform?</li>
          <li>What kind of support do you offer?</li>
          <li>Is my data secure and backed up?</li>
          <li>Can I upgrade or downgrade anytime?</li>
        </ul>
      </div>
    </Layout>
  );
}