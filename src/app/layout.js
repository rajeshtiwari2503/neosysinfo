 // app/layout.js or app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'SaaS Techify | CRM ERP Billing Software for Modern Businesses',
  description:
    "SaaS Techify provides advanced CRM, ERP, and billing solutions designed to optimize business processes, enhance customer engagement, and drive growth through smart automation and real-time analytics.",
  keywords: [
    'SaaS Techify',
    'CRM software',
    'ERP software',
    'Billing software',
    'business automation',
    'customer relationship management',
    'enterprise resource planning',
    'invoice software',
    'SaaS CRM ERP',
    'cloud-based CRM',
  ],
  authors: [{ name: 'SaaS Techify', url: 'https://saastechify.com' }],
  creator: 'SaaS Techify',
  // openGraph: {
  //   title: 'SaaS Techify | CRM ERP Billing Software for Modern Businesses',
  //   description:
  //     'Run your business smarter with SaaS Techify — an integrated platform for CRM, ERP, billing, and team collaboration.',
  //   url: 'https://saastechify.com',
  //   siteName: 'SaaS Techify',
  
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'SaaS Techify | Business Management Software',
  //   description:
  //     'All-in-one platform for CRM, ERP, and Billing. Manage your business with ease using SaaS Techify.',
  //   creator: '@saastechify',  
    
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

