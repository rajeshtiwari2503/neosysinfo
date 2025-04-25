// src/app/no-internet/page.js
import Link from "next/link";

export default function NoInternetPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">No Internet Connection</h1>
      <p className="text-lg text-gray-700 mb-8">
        It seems like you're not connected to the internet. Please check your connection.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}
