import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { metadataBase } from "./blog/blogMetadata";
import { SmoothScroll } from "./components/ui/SmoothScroll";

const description =
  "Mahek Pandey — AI Engineer at Eklavya.io, building AI learning systems for Indian students: memory, retrieval and adaptive learning.";

export const metadata = {
  metadataBase,
  title: "Mahek Pandey | AI Engineer",
  description,
  openGraph: {
    title: "Mahek Pandey | AI Engineer",
    description,
    siteName: "Mahek Pandey",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahek Pandey | AI Engineer",
    description,
  },
};

export const viewport = {
  themeColor: "#121212",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
