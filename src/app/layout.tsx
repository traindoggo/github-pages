import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Container from "./components/container";
import Footer from "./components/footer";
import Header from "./components/header";
import "./styles/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my very first published site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen
      bg-neutral-900`}
      >
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
