"use client";

import Link from "next/link";
import useLogUserExit from "../userLogUserExit";

export default function Contact() {
  useLogUserExit();

  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-0 pb-20 gap-4 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-gray-100 dark:bg-gray-900">
      <nav className="w-full bg-blue-700 text-white p-4 shadow-md">
        <ul className="flex justify-center gap-8 text-sm sm:text-base">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/apply" className="hover:underline">
              Apply Now for a Credit Card
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form
          id="contact"
          className="flex flex-col gap-6 p-6 border rounded-lg shadow-lg w-96 bg-white dark:bg-gray-800"
        >
          <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white">
            Contact Us
          </h2>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your message"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </main>

      <footer
        id="contact"
        className="text-center text-sm text-gray-600 dark:text-gray-400 p-4"
      >
        Contact us at{" "}
        <a
          href="mailto:support@syf.com"
          className="text-blue-600 hover:underline"
        >
          support@syf.com
        </a>
      </footer>
    </div>
  );
}
