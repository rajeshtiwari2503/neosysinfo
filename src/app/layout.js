 // app/layout.js or app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'Neosys Infosystems | After-Sales Service Solutions for Customer Satisfaction',
  description:
    'Neosys Infosystems is a trusted pan-India after-sales service partner for top brands & providing end-to-end support for electronics, IT, and home appliances. We offer installation, repair, reverse logistics, and CRM-backed support with fast TAT and real-time service tracking.',
  keywords: [
    'Neosys Infosystems',
    'after-sales service',
    'customer support',
    'warranty service',
    'repair and maintenance',
    'technical support',
    'CRM after-sales',
    'post-purchase service',
    'customer satisfaction',
    'installation support',
  ],
  authors: [{ name: 'Neosys Infosystems', url: 'https://neosysinfosystems.com' }],
  creator: 'Neosys Infosystems',
  // openGraph: {
  //   title: 'Neosys Infosystems | After-Sales Service Solutions for Customer Satisfaction',
  //   description:
  //     'Comprehensive after-sales support — including installation, warranty, repairs, and customer engagement tools — to keep your clients confident and connected.',
  //   url: 'https://neosysinfosystems.com',
  //   siteName: 'Neosys Infosystems',
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Neosys Infosystems | After-Sales Support Made Easy',
  //   description:
  //     'Deliver seamless after-sales services and build long-term customer relationships with Neosys Infosystems.',
  //   creator: '@neosysinfosystems', // update this if you have a Twitter handle
  // },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

