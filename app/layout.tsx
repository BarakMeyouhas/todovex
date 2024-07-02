import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ConvexClientProvider from "./providers";
const defaultFont = Noto_Sans_Georgian({ subsets: ["latin"] });

const ORIGIN_URL =
  process.env.NODE === "production"
    ? "https://todovex.ai"
    : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Todovex",
  description:
    "TodoVex seamlessly organizes your tasks and makes you'r daily routine easier!",
  icons: {
    icon: "/icon.ico",
  },
  metadataBase: new URL(ORIGIN_URL),
  alternates: {
    canonical: ORIGIN_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
