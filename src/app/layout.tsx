import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giuseppe Di Turi | Full-Stack Developer",
  description: "Portfolio of Giuseppe Di Turi, Full-Stack Developer and AI-Native Builder.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
