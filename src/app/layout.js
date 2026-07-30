import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { metadataBase } from "./blog/blogMetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase,
  title: "Mahek Pandey | Software Developer",
  description: "Portfolio website of Mahek Pandey - Software Developer showcasing projects, skills, and experience",
  openGraph: {
    title: "Mahek Pandey | Software Developer",
    description:
      "Portfolio website of Mahek Pandey - Software Developer showcasing projects, skills, and experience",
    siteName: "Mahek Pandey",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahek Pandey | Software Developer",
    description:
      "Portfolio website of Mahek Pandey - Software Developer showcasing projects, skills, and experience",
  },
};

export default function RootLayout({ children }) {
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
