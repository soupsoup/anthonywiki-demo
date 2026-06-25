import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import WikiFooter from "@/components/WikiFooter";

export const metadata: Metadata = {
  title: "AnthonyWiki — The Free Encyclopedia",
  description: "A personal Wikipedia-style wiki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="wiki-body">
          <nav className="wiki-sidebar">
            <Sidebar />
          </nav>
          <main className="wiki-main">
            {children}
          </main>
        </div>
        <WikiFooter />
      </body>
    </html>
  );
}
