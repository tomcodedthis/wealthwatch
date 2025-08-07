import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { AnimatedBackground } from "@/app/components/root/animatedBackground";
import { ThemeProvider } from "@/app/theme";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "WealthWatch",
  description: "A fintech app to monitor financial health",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="min-h-screen bg-linear-to-b from-[#05050b] to-[#010a2b]">
        <AnimatedBackground />
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
