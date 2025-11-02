import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WildsRincon Portfolio",
  description: "My personal portfolio built with Next.js and Sanity.io",
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SidebarProvider>
            <SidebarInset>
              {children}
            </SidebarInset>
            <AppSidebar side="right" />
          </SidebarProvider>
          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
