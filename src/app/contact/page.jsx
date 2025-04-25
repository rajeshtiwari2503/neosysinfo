"use client";
 
import Layout from "../components/Layout";
import RequestServicePage from "../components/ServiceRequestPage";
import Head from "next/head";
 

export default function Page() {
  return (
    <>
     <Head>
            <title>Request Service | Saas Techify</title>
            <meta
              name="description"
              content="Request professional service support from Saas Techify. Submit your product issue, preferred service date, and contact information."
            />
            <meta
              name="keywords"
              content="Request Service, Support, Saas Techify, Product Issue, Contact Form"
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.saastechify.com/contact" />
          </Head>
   
    <Layout>

      <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Contact Our Team</h1>
        <p className="text-gray-700 mb-6 max-w-2xl">Have questions or need custom solutions? Reach out and our team will be happy to assist you with demos, pricing, or technical support.</p>
        <RequestServicePage />
      </div>
    </Layout>
    </>
  );
}
