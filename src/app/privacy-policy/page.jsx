 "use client";
import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
        <p className="text-gray-700 max-w-3xl">We respect your privacy and are committed to protecting your personal information. Learn how we collect, use, and safeguard your data in this policy.</p>
      </div>
    </Layout>
  );
}