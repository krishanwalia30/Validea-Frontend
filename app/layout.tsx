import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolageGrotesqueFont = Bricolage_Grotesque({
  variable: "--font-bricolage-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Validea",
  description:
    "Transform your ideas into validated business opportunities with AI-powered market research and instant feedback",
  icons: { icon: "favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesqueFont.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
