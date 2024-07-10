import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/tailwind.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My very first published website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col mx-20
        min-h-screen bg-neutral-800 text-neutral-200
        text-xl`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
