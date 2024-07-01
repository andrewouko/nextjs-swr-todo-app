import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Todo App",
  description: "Simple app to manage todos using nextjs and swr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4 hover:underline">
            <Link href="/">My Todo App</Link>
          </h1>
          {children}
        </main>
      </body>
    </html>
  );
}
