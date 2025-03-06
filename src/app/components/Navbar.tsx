import Link from "next/link";
import Image from "next/image";
import syfLogo from "../assets/syf_logo.png";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-blue-800 shadow-lg py-3">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={syfLogo}
            alt="Synchrony Financial Logo"
            className="h-10 w-auto"
            height={40}
            width={160}
            priority
          />
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/sample-card"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Our Card
            </Link>
          </li>
          <li>
            <Link
              href="/sample-account"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Savings Account
            </Link>
          </li>
          <li>
            <Link
              href="/apply"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Apply Now
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/apply"
              className="ml-4 px-6 py-2.5 bg-white text-blue-800 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-md hover:shadow-xl"
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="text-white p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
