import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@smastrom/react-rating/style.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pt-24 px-20 pb-10 bg-primary">{children}</div>
      </body>
    </html>
  );
}
