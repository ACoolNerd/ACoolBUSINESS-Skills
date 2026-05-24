import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/cn";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  title: "AI Business Ecosystem | LA28 Ready",
  description: "Preparing Los Angeles and San Fernando Valley businesses for LA28 and the AI future. Join the ecosystem of certified, ready subcontractors.",
  openGraph: {
    title: "AI Business Ecosystem | LA28 Ready",
    description: "Preparing Los Angeles businesses for LA28 and the AI future.",
    type: "website",
    locale: "en_US",
    siteName: "AI Business Ecosystem",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Business Ecosystem",
    description: "Preparing Los Angeles businesses for LA28 and the AI future.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(montserrat.variable, openSans.variable, "min-h-screen bg-brand-lightGray font-body text-slate-900")}>
        {children}
      </body>
    </html>
  );
}
