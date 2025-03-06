import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Synchrony Financial - Premium Savings Account",
  description:
    "Discover our high-yield savings account with competitive rates and no monthly fees",
};

export default function Account() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <Navbar />

      {/* Hero section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/window.svg')] opacity-5 bg-no-repeat bg-right-top bg-contain"></div>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
              Premium Savings Account
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Grow your money faster with our high-yield savings account
            </p>
          </div>

          {/* Rate highlight */}
          <div className="max-w-md mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 text-center">
              <div className="mb-4">
                <span className="text-sm font-medium text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                  Current Annual Percentage Yield
                </span>
              </div>
              <div className="text-6xl font-bold text-blue-900 dark:text-white mb-2">
                4.25<span className="text-3xl">%</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                APY effective as of {new Date().toLocaleDateString()}. Rates may
                change after account opening.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/apply"
                  className="px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
                >
                  Open an Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-12 text-center">
            Account Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
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
                No Monthly Fees
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enjoy no monthly maintenance fees, no minimum balance
                requirements, and no hidden charges.
              </p>
            </div>

            {/* Feature 2 */}
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3">
                Competitive Rates
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn interest rates up to 10x the national average, helping your
                savings grow faster.
              </p>
            </div>

            {/* Feature 3 */}
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
                FDIC Insured
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your deposits are FDIC insured up to the maximum allowed by law,
                providing peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-16 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative text-center">
              <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                1
              </div>
              {/* Right arrow for desktop */}
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-blue-300 dark:bg-blue-700"></div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3">
                Open Your Account
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Apply online in minutes with no paperwork. Just provide basic
                information and verify your identity.
              </p>
            </div>

            <div className="relative text-center">
              <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                2
              </div>
              {/* Right arrow for desktop */}
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-blue-300 dark:bg-blue-700"></div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3">
                Fund Your Account
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Link your existing bank account to transfer funds or set up
                direct deposit from your employer.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3">
                Watch Your Money Grow
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Interest is compounded daily and paid monthly, helping your
                savings grow faster over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Account details section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-12 text-center">
            Account Details
          </h2>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Minimum Opening Deposit
              </h3>
              <p className="text-gray-600 dark:text-gray-300">$100</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Monthly Maintenance Fee
              </h3>
              <p className="text-gray-600 dark:text-gray-300">$0</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Interest Compounding
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Daily</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Interest Payment
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Monthly</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Online & Mobile Banking
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Free</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                ATM Fee Reimbursement
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Up to $15 per month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-12 text-center">
            How We Compare
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="py-4 px-6 text-left">Features</th>
                  <th className="py-4 px-6 text-center">
                    Synchrony Premium Savings
                  </th>
                  <th className="py-4 px-6 text-center">Average Bank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-blue-50 dark:hover:bg-gray-800">
                  <td className="py-4 px-6 font-medium">APY</td>
                  <td className="py-4 px-6 text-center font-bold text-blue-700 dark:text-blue-400">
                    4.25%
                  </td>
                  <td className="py-4 px-6 text-center">0.40%</td>
                </tr>
                <tr className="hover:bg-blue-50 dark:hover:bg-gray-800">
                  <td className="py-4 px-6 font-medium">Monthly Fee</td>
                  <td className="py-4 px-6 text-center font-bold text-blue-700 dark:text-blue-400">
                    $0
                  </td>
                  <td className="py-4 px-6 text-center">$5-15</td>
                </tr>
                <tr className="hover:bg-blue-50 dark:hover:bg-gray-800">
                  <td className="py-4 px-6 font-medium">Minimum Balance</td>
                  <td className="py-4 px-6 text-center font-bold text-blue-700 dark:text-blue-400">
                    $0
                  </td>
                  <td className="py-4 px-6 text-center">$300-500</td>
                </tr>
                <tr className="hover:bg-blue-50 dark:hover:bg-gray-800">
                  <td className="py-4 px-6 font-medium">
                    ATM Fee Reimbursement
                  </td>
                  <td className="py-4 px-6 text-center font-bold text-blue-700 dark:text-blue-400">
                    Up to $15/month
                  </td>
                  <td className="py-4 px-6 text-center">Not offered</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-3">
                How do I open a Premium Savings Account?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can open an account online in just minutes. You'll need to
                provide basic information including your name, address, Social
                Security number, and valid ID.
              </p>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-3">
                How many withdrawals can I make each month?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can make up to 6 withdrawals or transfers from your savings
                account per statement cycle, as per federal regulations.
              </p>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-3">
                Is my money safe with Synchrony?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, deposits are FDIC insured up to $250,000 per depositor. We
                also employ industry-leading security measures to protect your
                information.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-3">
                Can I link my savings account to external accounts?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can link your Premium Savings Account to external bank
                accounts for easy transfers. You can link up to 10 external
                accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Saving?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10">
            Open a Premium Savings Account today and start earning more on your
            savings.
          </p>
          <Link
            href="/apply"
            className="px-8 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
          >
            Open an Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-12 text-center">
        <div className="container mx-auto px-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            © {new Date().getFullYear()} Synchrony Financial. All rights
            reserved. The stated APY is effective as of the date shown and may
            change at any time. Fees may reduce earnings.
          </p>
        </div>
      </footer>
    </div>
  );
}
