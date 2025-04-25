// src/app/404.js

import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center text-center p-6">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-6">
          We couldn't find the page you're looking for. It may have been moved or deleted.
        </p>
        <Link href="/">
          <a className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
            Go Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
