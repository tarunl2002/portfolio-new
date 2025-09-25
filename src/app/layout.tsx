import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'react-vertical-timeline-component/style.min.css';
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
  title: "Tarun Lalwani - Full-Stack Developer & Software Engineer",
  description: "Experienced Full-Stack Developer specializing in React, Node.js, Go, and AI/ML. 4x Hackathon Winner, GDSC Co-Lead, and Software Engineer with expertise in scalable applications.",
  keywords: ["Full-Stack Developer", "Software Engineer", "React", "Node.js", "Go", "AI/ML", "GDSC", "Hackathon Winner"],
  authors: [{ name: "Tarun Lalwani" }],
  creator: "Tarun Lalwani",
  openGraph: {
    title: "Tarun Lalwani - Full-Stack Developer & Software Engineer",
    description: "Experienced Full-Stack Developer specializing in React, Node.js, Go, and AI/ML. 4x Hackathon Winner and GDSC Co-Lead.",
    url: "https://tarunlalwani.dev",
    siteName: "Tarun Lalwani Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun Lalwani - Full-Stack Developer",
    description: "Experienced Full-Stack Developer specializing in React, Node.js, Go, and AI/ML.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        {children}
      </body>
    </html>
  );
}
