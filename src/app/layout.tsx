import type { Metadata } from "next";
import { PHProvider } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaige Gao — AI Agent & Cloud Builder",
  description: "Building autonomous systems that work while I sleep. AI agent architect, cloud infrastructure engineer, and indie founder targeting startup roles.",
  keywords: ["AI Agent", "Cloud Architecture", "Founding Engineer", "Autonomous Systems", "Multi-Agent"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased"><PHProvider>{children}</PHProvider></body>
    </html>
  );
}
