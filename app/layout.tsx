import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { clsx } from "clsx";
import { ThemeProvider } from "@/components/theme/theme-provider";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], preload: true });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          inter.className,
          "bg-white dark:bg-black min-h-[100dvh]"
        )}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
