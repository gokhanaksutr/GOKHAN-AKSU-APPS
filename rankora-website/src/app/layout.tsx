import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rankora - AI SEO Writer App",
  description: "Generate SEO-optimized content with Rankora's AI-powered writing tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-white shadow">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold">Rankora</a>
            <div className="space-x-4">
              <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="/privacy" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
              <a href="/terms" className="text-gray-700 hover:text-gray-900">Terms of Service</a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-100 py-4">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; 2023 Rankora. All rights reserved.</p>
            <a href="/privacy" className="mr-4">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
