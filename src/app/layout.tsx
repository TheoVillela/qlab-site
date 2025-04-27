import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QLab Enterprise",
  description: "Make your day with quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> {children} </body>
    </html>
  );
}
