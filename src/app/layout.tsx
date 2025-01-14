import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} flex`}>
        <aside className="w-[28%] sticky top-0 left-0 h-screen border-r border-gray-300">
          <Sidebar />
        </aside>
        <main className="w-[72%] p-6 pl-10 flex flex-col gap-7">
          <Header />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
