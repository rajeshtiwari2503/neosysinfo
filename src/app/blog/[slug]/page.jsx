"use client";
import Layout from "../../components/Layout";

export default function Page({ params }) {
  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Article: {params.slug.replace(/-/g, ' ')}</h1>
        <p className="text-gray-700">In-depth guide or insight on: {params.slug.replace(/-/g, ' ')}. More rich content coming soon!</p>
      </div>
    </Layout>
  );
}