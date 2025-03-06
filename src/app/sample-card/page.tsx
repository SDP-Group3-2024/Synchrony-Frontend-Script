import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Synchrony Financial - Premium Rewards Card",
  description:
    "Explore the benefits of our Premium Rewards Card with exclusive perks and cashback",
};

export default function Card() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <Navbar />

      {/* Hero section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
              Premium Rewards Card
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Elevate your spending with premium benefits and exclusive rewards
            </p>
          </div>

          {/* Card preview */}
          <div className="max-w-md mx-auto mb-12 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 p-6 rounded-xl shadow-2xl text-white">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-sm font-light opacity-80">Premium</h3>
                  <h2 className="text-xl font-bold">Rewards Card</h2>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                    <path
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="mb-8">
                <div className="text-sm opacity-70 mb-1">Card Number</div>
                <div className="flex space-x-4 text-xl tracking-widest">
                  <span>****</span>
                  <span>****</span>
                  <span>****</span>
                  <span>1234</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-xs opacity-70 mb-1">Card Holder</div>
                  <div className="text-sm">YOUR NAME</div>
                </div>
                <div>
                  <div className="text-xs opacity-70 mb-1">Expires</div>
                  <div className="text-sm">12/28</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/apply"
              className="px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-12 text-center">
            Card Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-700 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3">
                5% Cash Back
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn 5% cash back on all purchases at participating retailers
                and 2% on everything else. No limits, no rotating categories.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-700 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3">
                0% Intro APR
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enjoy 0% intro APR on purchases and balance transfers for the
                first 18 months. No interest on your new purchases.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-700 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3">
                Premium Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rest easy with purchase protection, extended warranty, and cell
                phone protection included with your card at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-12 text-center">
            Additional Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-700 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">
                  Welcome Bonus
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Earn a $300 statement credit after spending $3,000 in
                  purchases within the first 3 months.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-700 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.565M6 19.5V4.5M18 19.5V4.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">
                  No Annual Fee
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enjoy all these premium benefits with no annual fee, ever. No
                  hidden fees or charges.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-700 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">
                  Fraud Protection
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  24/7 fraud monitoring and zero liability protection for
                  unauthorized charges.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-700 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">
                  Digital Wallet
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Add your card to Apple Pay, Google Pay, or Samsung Pay for
                  secure and convenient mobile payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10">
            Apply today for the Premium Rewards Card and start enjoying
            exceptional benefits on everyday purchases.
          </p>
          <Link
            href="/apply"
            className="px-8 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-3">
                What credit score do I need to qualify?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The Premium Rewards Card typically requires a good to excellent
                credit score (700+). However, we consider multiple factors when
                reviewing applications.
              </p>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-3">
                How long does it take to receive the card after approval?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Once approved, you can expect to receive your physical card
                within 7-10 business days. You&apos;ll also get immediate access
                to a digital card for online purchases.
              </p>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-3">
                Is there a foreign transaction fee?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                No, the Premium Rewards Card has no foreign transaction fees,
                making it ideal for international travel and purchases.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-3">
                How do I redeem my cash back rewards?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cash back can be redeemed as a statement credit, direct deposit
                to your bank account, or used for gift cards and travel bookings
                through our rewards portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with apply button */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-12 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">
            Start Earning Premium Rewards Today
          </h2>
          <Link
            href="/apply"
            className="px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block mb-8"
          >
            Apply Now
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            © {new Date().getFullYear()} Synchrony Financial. All rights
            reserved. Terms and conditions apply.
          </p>
        </div>
      </footer>
    </div>
  );
}
