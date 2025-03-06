"use client";

import Link from "next/link";
import Image from "next/image";
import syfLogo from "../app/assets/syf_logo.png";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <Navbar />

      {/* Hero section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/globe.svg')] opacity-5 bg-no-repeat bg-right-top bg-contain"></div>
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-white leading-tight mb-6">
              Financial Solutions <span className="text-blue-600">Tailored For You</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Discover credit cards and financing options that help you achieve your goals with personalized rewards and benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/apply" 
                className="px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
              >
                Apply Now
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 border-2 border-blue-700 text-blue-700 dark:border-blue-500 dark:text-blue-500 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 transition-all text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 dark:text-gray-400">CREDIT LIMIT</div>
                  <div className="font-bold text-blue-900 dark:text-blue-400">$10,000</div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">CASH BACK</div>
                  <div className="font-bold text-blue-900 dark:text-blue-400">5% on Eligible Purchases</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">ANNUAL FEE</div>
                  <div className="font-bold text-blue-900 dark:text-blue-400">$0</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">INTRODUCTORY APR</div>
                  <div className="font-bold text-blue-900 dark:text-blue-400">0% for 18 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-4">Why Choose Synchrony</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the benefits of financial solutions designed with your needs in mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-700 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3">Personalized Rewards</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn rewards tailored to your spending habits and lifestyle preferences.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-700 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3">Secure Transactions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rest easy with advanced security features and fraud protection on all your accounts.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-700 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3">Flexible Options</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose from a variety of financing solutions to meet your specific needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10">
            Apply today and enjoy the benefits of a credit solution designed with your financial success in mind.
          </p>
          <Link 
            href="/apply" 
            className="px-8 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Image
                src={syfLogo}
                alt="Synchrony Financial Logo"
                className="h-8 w-auto mb-4"
                height={32}
                width={130}
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Financial services tailored to your needs with a focus on security and customer satisfaction.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">Home</Link></li>
                <li><Link href="/apply" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">Apply Now</Link></li>
                <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">Disclosure</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-700 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:support@syf.com" className="hover:text-blue-700 dark:hover:text-blue-400">support@syf.com</a>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-700 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>1-800-123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Synchrony Financial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}