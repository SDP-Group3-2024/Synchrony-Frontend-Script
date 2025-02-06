"use client";

import Link from "next/link";
import Image from "next/image";
import useLogUserExit from "./userLogUserExit";
import syfLogo from "../app/assets/syf_logo.png";

export default function Home() {
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
        <Image
          src={syfLogo}
          alt="Synchrony Financial Logo"
          className="max-w-xs h-auto"
          priority
        />
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
