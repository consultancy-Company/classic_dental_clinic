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
  title: "Classic Dental Clinic - Best Dental Clinic in Addis Ababa",
  description: "Classic Dental Clinic offers top-notch dental care in Addis Ababa, specializing in oral health and dental services in Bole and beyond.",
  icons: './favicon.ico',
  keywords: [
    "Best dental clinic in Addis Ababa",
    "Dental clinic in Bole",
    "Oral health",
    "Dentist in Addis Ababa",
    "Dental care services",
    "Cosmetic dentistry",
    "Orthodontics",
    "Pediatric dentistry",
    "Dental implants",
    "Teeth whitening",
    "Root canal treatment",
    "Dental emergencies",
    "Preventive dentistry",
  ],
  openGraph: {
    type: "website",
    title: "Classic Dental Clinic - Best Dental Clinic in Addis Ababa",
    description: "Classic Dental Clinic offers top-notch dental care in Addis Ababa, specializing in oral health and dental services in Bole and beyond.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Classic Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Classic Dental Clinic - Best Dental Clinic in Addis Ababa",
    description: "Classic Dental Clinic offers top-notch dental care in Addis Ababa, specializing in oral health and dental services in Bole and beyond.",
    images: ["/twitter-image.jpg"],
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
