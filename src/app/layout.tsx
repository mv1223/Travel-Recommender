import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TravelAI - Your AI Travel Planner",
  description: "Plan your perfect trip with AI-powered recommendations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
