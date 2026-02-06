import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hyperadvancer — Bart Collet",
    template: "%s | Hyperadvancer",
  },
  description:
    "Innovation strategy, AI advisory, and digital transformation. Bridging the gap between cutting-edge technology and real-world business outcomes.",
  metadataBase: new URL("https://hyperadvancer.com"),
  openGraph: {
    title: "Hyperadvancer — Bart Collet",
    description:
      "Innovation strategy, AI advisory, and digital transformation.",
    url: "https://hyperadvancer.com",
    siteName: "Hyperadvancer",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyperadvancer — Bart Collet",
    description:
      "Innovation strategy, AI advisory, and digital transformation.",
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
        className={`${inter.variable} ${manrope.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
