import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import BackToTopButton from "../components/molecules/BackToTopButton";
import ErrorBoundary from "../components/ui/ErrorBoundary";
import ClientOnly from "../components/ui/ClientOnly";
import { Suspense } from "react";

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
      <head>
        <link rel="canonical" href="https://kobesmallman.dev" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#A9B8C4" />
      </head>
      <body className="font-sans text-text-body bg-bg-primary">
        <ErrorBoundary>
          <ClientOnly fallback={
            <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-sm shadow-lg">
              <div className="max-w-content mx-auto px-4 h-16 flex items-center justify-between">
                <div className="font-display font-medium text-lg" style={{ color: '#D75F4E' }}>
                  Kobe Smallman
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                  <span className="text-text-body/70">About</span>
                  <span className="text-text-body/70">Projects</span>
                  <span className="text-text-body/70">Contact</span>
                </nav>
              </div>
            </header>
          }>
            <Suspense fallback={null}>
              <Header />
            </Suspense>
          </ClientOnly>
          <main id="main">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </main>
          <Footer />
          <ClientOnly>
            <BackToTopButton />
          </ClientOnly>
        </ErrorBoundary>
      </body>
    </html>
  );
}
