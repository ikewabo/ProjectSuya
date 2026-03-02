import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIVoiceAssistant from "@/components/AIVoiceAssistant";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Suya | Premium Afro-Urban Shop in Bowie, MD",
  description: "Experience the best suya and afro-urban vibes in Bowie, MD. Order online, book catering, and check out our menu today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} antialiased min-h-screen flex flex-col font-sans`}>
        <Navbar />
        <AIVoiceAssistant />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
