 // app/layout.js or app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'Neosys Infosystems – #1 After-Sales & IT Service Partner in India',
  description:
    'Looking for reliable after-sales service in India? Neosys Infosystems is the top-rated provider for home appliances, IT products, and OEM brands. Serving 700+ cities with expert repair, installation, and support—fast, trusted, and nationwide.',
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

