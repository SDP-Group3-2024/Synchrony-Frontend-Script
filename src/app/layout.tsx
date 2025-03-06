import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/dist/client/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Synchrony Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!process.env.LOGGING_SCRIPT_PATH) {
    throw new Error("LOGGING_SCRIPT_PATH environment variable is not set");
  }
  return (
    <html lang="en">
      <Script src={process.env.LOGGING_SCRIPT_PATH} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
