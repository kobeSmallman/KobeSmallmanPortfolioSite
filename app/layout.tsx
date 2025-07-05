import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/organisms/Footer";
import Header from '../components/organisms/Header';
import BackToTopButton from '../components/atoms/BackToTop';
import { Suspense } from "react";

// Force dynamic rendering to avoid SSR issues
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Kobe Smallman | Full-Stack Developer",
  description: "Full-stack developer crafting modern web experiences with clean code, thoughtful design, and innovative solutions. Specializing in React, Next.js, TypeScript, and Laravel.",
  keywords: "full-stack developer, React, Next.js, TypeScript, Laravel, web development, software engineer",
  authors: [{ name: "Kobe Smallman" }],
  creator: "Kobe Smallman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kobesmallman.dev",
    title: "Kobe Smallman | Full-Stack Developer",
    description: "Full-stack developer crafting modern web experiences with clean code and thoughtful design.",
    siteName: "Kobe Smallman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kobe Smallman | Full-Stack Developer",
    description: "Full-stack developer crafting modern web experiences with clean code and thoughtful design.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans text-text-body bg-bg-primary">
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main id="main">
          {children}
        </main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
